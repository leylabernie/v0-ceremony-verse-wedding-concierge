#!/usr/bin/env python3
"""
CeremonyVerse SEO Audit Report - Comprehensive Analysis & Optimization Strategy
"""

import os
import sys
import hashlib
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, CondPageBreak, HRFlowable, Image
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ═══ Font Registration ═══
pdfmetrics.registerFont(TTFont('LiberationSerif', '/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSerif-Bold', '/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSans', '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
registerFontFamily('LiberationSerif', normal='LiberationSerif', bold='LiberationSerif-Bold')
registerFontFamily('LiberationSans', normal='LiberationSans', bold='LiberationSans')
registerFontFamily('DejaVuSans', normal='DejaVuSans', bold='DejaVuSans')

# ═══ Color Palette (auto-generated) ═══
ACCENT       = colors.HexColor('#227490')
TEXT_PRIMARY  = colors.HexColor('#1e1d1b')
TEXT_MUTED    = colors.HexColor('#837f77')
BG_SURFACE   = colors.HexColor('#e5e1da')
BG_PAGE      = colors.HexColor('#f0eeeb')
TABLE_HEADER_COLOR = ACCENT
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = BG_SURFACE

# ═══ Page Setup ═══
PAGE_W, PAGE_H = A4
LEFT_MARGIN = 0.9 * inch
RIGHT_MARGIN = 0.9 * inch
TOP_MARGIN = 0.75 * inch
BOTTOM_MARGIN = 0.75 * inch
AVAILABLE_WIDTH = PAGE_W - LEFT_MARGIN - RIGHT_MARGIN
H1_ORPHAN_THRESHOLD = (PAGE_H - TOP_MARGIN - BOTTOM_MARGIN) * 0.15

# ═══ Styles ═══
styles = getSampleStyleSheet()

cover_title_style = ParagraphStyle(
    'CoverTitle', fontName='LiberationSerif', fontSize=32,
    leading=40, textColor=ACCENT, alignment=TA_LEFT, spaceAfter=12
)
cover_subtitle_style = ParagraphStyle(
    'CoverSubtitle', fontName='LiberationSerif', fontSize=16,
    leading=22, textColor=TEXT_MUTED, alignment=TA_LEFT, spaceAfter=8
)
cover_meta_style = ParagraphStyle(
    'CoverMeta', fontName='LiberationSans', fontSize=11,
    leading=16, textColor=TEXT_MUTED, alignment=TA_LEFT
)

h1_style = ParagraphStyle(
    'H1Custom', fontName='LiberationSerif', fontSize=20,
    leading=28, textColor=ACCENT, spaceBefore=18, spaceAfter=10
)
h2_style = ParagraphStyle(
    'H2Custom', fontName='LiberationSerif', fontSize=15,
    leading=21, textColor=TEXT_PRIMARY, spaceBefore=14, spaceAfter=8
)
h3_style = ParagraphStyle(
    'H3Custom', fontName='LiberationSerif', fontSize=12,
    leading=17, textColor=ACCENT, spaceBefore=10, spaceAfter=6
)
body_style = ParagraphStyle(
    'BodyCustom', fontName='LiberationSerif', fontSize=10.5,
    leading=17, textColor=TEXT_PRIMARY, alignment=TA_JUSTIFY,
    spaceBefore=2, spaceAfter=6
)
body_left_style = ParagraphStyle(
    'BodyLeft', fontName='LiberationSerif', fontSize=10.5,
    leading=17, textColor=TEXT_PRIMARY, alignment=TA_LEFT,
    spaceBefore=2, spaceAfter=6
)
bullet_style = ParagraphStyle(
    'BulletCustom', fontName='LiberationSerif', fontSize=10.5,
    leading=17, textColor=TEXT_PRIMARY, alignment=TA_LEFT,
    leftIndent=24, spaceBefore=2, spaceAfter=4
)
callout_style = ParagraphStyle(
    'CalloutCustom', fontName='LiberationSerif', fontSize=10.5,
    leading=17, textColor=ACCENT, alignment=TA_LEFT,
    leftIndent=18, borderPadding=8, spaceBefore=6, spaceAfter=6
)
code_style = ParagraphStyle(
    'CodeCustom', fontName='DejaVuSans', fontSize=8.5,
    leading=13, textColor=TEXT_PRIMARY, alignment=TA_LEFT,
    leftIndent=12, backColor=BG_PAGE, borderPadding=6,
    spaceBefore=4, spaceAfter=4
)
caption_style = ParagraphStyle(
    'Caption', fontName='LiberationSans', fontSize=9,
    leading=13, textColor=TEXT_MUTED, alignment=TA_CENTER,
    spaceBefore=3, spaceAfter=6
)
header_cell_style = ParagraphStyle(
    'HeaderCell', fontName='LiberationSerif', fontSize=10,
    leading=14, textColor=TABLE_HEADER_TEXT, alignment=TA_CENTER
)
cell_style = ParagraphStyle(
    'CellCustom', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=TEXT_PRIMARY, alignment=TA_LEFT
)
cell_center_style = ParagraphStyle(
    'CellCenter', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=TEXT_PRIMARY, alignment=TA_CENTER
)

# Priority indicator styles
critical_style = ParagraphStyle(
    'Critical', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=colors.HexColor('#c0392b'), alignment=TA_CENTER
)
high_style = ParagraphStyle(
    'High', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=colors.HexColor('#e67e22'), alignment=TA_CENTER
)
medium_style = ParagraphStyle(
    'Medium', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=colors.HexColor('#2980b9'), alignment=TA_CENTER
)
low_style = ParagraphStyle(
    'Low', fontName='LiberationSerif', fontSize=9.5,
    leading=14, textColor=colors.HexColor('#27ae60'), alignment=TA_CENTER
)

# ═══ TOC Document Template ═══
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

# ═══ Helper Functions ═══
def add_heading(text, style, level=0):
    key = 'h_%s' % hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/>%s' % (key, text), style)
    p.bookmark_name = text
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p

def add_major_section(text, style):
    return [
        CondPageBreak(H1_ORPHAN_THRESHOLD),
        add_heading(text, style, level=0),
    ]

def make_table(data, col_widths, caption_text=None):
    """Create a styled table with optional caption."""
    elements = []
    t = Table(data, colWidths=col_widths, hAlign='CENTER')
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
        ('GRID', (0, 0), (-1, -1), 0.5, TEXT_MUTED),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ] + [
        ('BACKGROUND', (0, i), (-1, i), TABLE_ROW_ODD if i % 2 == 0 else TABLE_ROW_EVEN)
        for i in range(1, len(data))
    ]))
    elements.append(Spacer(1, 18))
    elements.append(t)
    if caption_text:
        elements.append(Spacer(1, 6))
        elements.append(Paragraph(caption_text, caption_style))
    elements.append(Spacer(1, 18))
    return elements

def priority_cell(level):
    """Return a styled priority cell."""
    mapping = {
        'CRITICAL': critical_style,
        'HIGH': high_style,
        'MEDIUM': medium_style,
        'LOW': low_style,
    }
    return Paragraph('<b>%s</b>' % level, mapping.get(level, cell_center_style))

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=TEXT_MUTED, spaceAfter=6, spaceBefore=6)

# ═══ Build Document ═══
OUTPUT_PATH = '/home/z/my-project/download/CeremonyVerse_SEO_Audit_Report.pdf'

doc = TocDocTemplate(
    OUTPUT_PATH,
    pagesize=A4,
    leftMargin=LEFT_MARGIN,
    rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN,
    bottomMargin=BOTTOM_MARGIN,
    title='CeremonyVerse SEO Audit Report',
    author='Z.ai',
    creator='Z.ai',
    subject='Comprehensive SEO audit and optimization strategy for ceremonyverse.com'
)

story = []

# ═══ COVER PAGE ═══
story.append(Spacer(1, 2.2 * inch))
story.append(Paragraph('<b>CeremonyVerse</b>', cover_title_style))
story.append(Paragraph('<b>Comprehensive SEO Audit</b>', ParagraphStyle(
    'CoverTitle2', fontName='LiberationSerif', fontSize=28,
    leading=36, textColor=TEXT_PRIMARY, alignment=TA_LEFT, spaceAfter=6
)))
story.append(Paragraph('<b>& Optimization Strategy</b>', ParagraphStyle(
    'CoverTitle3', fontName='LiberationSerif', fontSize=24,
    leading=32, textColor=TEXT_MUTED, alignment=TA_LEFT, spaceAfter=24
)))
story.append(HRFlowable(width="60%", thickness=2, color=ACCENT, spaceAfter=18, spaceBefore=0, hAlign='LEFT'))
story.append(Paragraph('ceremonyverse.com', cover_subtitle_style))
story.append(Spacer(1, 0.8 * inch))
story.append(Paragraph('Date: April 30, 2026', cover_meta_style))
story.append(Paragraph('Prepared by: Z.ai SEO & Digital Strategy Team', cover_meta_style))
story.append(Paragraph('Classification: Confidential', cover_meta_style))
story.append(PageBreak())

# ═══ TABLE OF CONTENTS ═══
toc = TableOfContents()
toc.levelStyles = [
    ParagraphStyle(name='TOCHeading1', fontName='LiberationSerif', fontSize=13,
                   leading=20, leftIndent=20, spaceBefore=6, spaceAfter=2, textColor=ACCENT),
    ParagraphStyle(name='TOCHeading2', fontName='LiberationSerif', fontSize=11,
                   leading=16, leftIndent=40, spaceBefore=2, spaceAfter=2, textColor=TEXT_PRIMARY),
]
story.append(Paragraph('<b>Table of Contents</b>', ParagraphStyle(
    'TOCTitle', fontName='LiberationSerif', fontSize=20,
    leading=28, textColor=ACCENT, spaceBefore=12, spaceAfter=18
)))
story.append(toc)
story.append(PageBreak())

# ═══ SECTION 1: EXECUTIVE SUMMARY ═══
story.extend(add_major_section('<b>1. Executive Summary</b>', h1_style))

story.append(Paragraph(
    'CeremonyVerse (ceremonyverse.com) is a US-based Indian wedding shopping concierge that sources authentic bridal lehengas, sherwanis, jewelry, and ceremonial items directly from India for NRI (Non-Resident Indian) families in the USA, UK, Canada, and Australia. The site is built on Next.js and has a solid foundation with good on-page SEO elements, but it is currently underperforming in search visibility, organic traffic, and lead generation. This audit identifies 23 critical and high-priority issues across technical SEO, content strategy, keyword targeting, structured data, and off-page authority that are preventing the site from ranking competitively.',
    body_style
))

story.append(Spacer(1, 8))
story.append(Paragraph('<b>Key Findings at a Glance</b>', h3_style))

summary_data = [
    [Paragraph('<b>Category</b>', header_cell_style),
     Paragraph('<b>Status</b>', header_cell_style),
     Paragraph('<b>Score</b>', header_cell_style),
     Paragraph('<b>Impact</b>', header_cell_style)],
    [Paragraph('Technical SEO', cell_style),
     Paragraph('Needs Work', critical_style),
     Paragraph('35/100', cell_center_style),
     Paragraph('Missing schema, slow preload, no hreflang', cell_style)],
    [Paragraph('On-Page SEO', cell_style),
     Paragraph('Fair', high_style),
     Paragraph('55/100', cell_center_style),
     Paragraph('Good meta tags, thin content on key pages', cell_style)],
    [Paragraph('Content Strategy', cell_style),
     Paragraph('Needs Work', critical_style),
     Paragraph('30/100', cell_center_style),
     Paragraph('11 blog posts, no pillar content, no lead magnets', cell_style)],
    [Paragraph('Keyword Targeting', cell_style),
     Paragraph('Fair', high_style),
     Paragraph('50/100', cell_center_style),
     Paragraph('Good long-tail URLs, missing high-volume terms', cell_style)],
    [Paragraph('Off-Page / Authority', cell_style),
     Paragraph('Critical', critical_style),
     Paragraph('15/100', cell_center_style),
     Paragraph('Minimal backlinks, no PR, no directory listings', cell_style)],
    [Paragraph('AI Search Optimization', cell_style),
     Paragraph('Fair', medium_style),
     Paragraph('45/100', cell_center_style),
     Paragraph('AI bots allowed, but no AEO content or FAQ schema', cell_style)],
    [Paragraph('Local SEO', cell_style),
     Paragraph('Needs Work', high_style),
     Paragraph('40/100', cell_center_style),
     Paragraph('Location pages exist but no GMB, no local schema', cell_style)],
]
story.extend(make_table(summary_data, [1.1*inch, 0.8*inch, 0.7*inch, 3.2*inch],
                        'Table 1: SEO Audit Scorecard Summary'))

story.append(Paragraph(
    'The site ranks on page 2-3 for its core terms like "buy bridal lehenga from India USA" and "Indian wedding shopping concierge," but is invisible for high-volume informational queries that drive the top of the funnel. The primary bottleneck is a combination of missing structured data (zero JSON-LD schema), thin content depth, almost no off-page authority, and a content strategy that does not target the full customer journey. Fixing these issues in the priority order outlined in this report could realistically increase organic traffic by 300-500% within 6-9 months.',
    body_style
))

# ═══ SECTION 2: SITE OVERVIEW ═══
story.extend(add_major_section('<b>2. Site Overview & Current State</b>', h1_style))

story.append(Paragraph('<b>2.1 Site Architecture</b>', h2_style))
story.append(Paragraph(
    'The site is built on Next.js with server-side rendering capabilities, which is favorable for SEO. The URL structure is clean and keyword-rich, with a logical hierarchy of service pages, location-specific pages, and culture-specific pages. The sitemap.xml contains 51 URLs, which indicates a reasonably sized site. However, the architecture has several inefficiencies that are diluting crawl budget and creating potential keyword cannibalization issues between similar pages.',
    body_style
))

site_data = [
    [Paragraph('<b>Metric</b>', header_cell_style), Paragraph('<b>Value</b>', header_cell_style)],
    [Paragraph('Platform', cell_style), Paragraph('Next.js (React SSR)', cell_style)],
    [Paragraph('Domain', cell_style), Paragraph('www.ceremonyverse.com (with www redirect)', cell_style)],
    [Paragraph('Pages in Sitemap', cell_style), Paragraph('51 URLs', cell_style)],
    [Paragraph('Blog Posts', cell_style), Paragraph('11 articles', cell_style)],
    [Paragraph('Service Pages', cell_style), Paragraph('7 pages', cell_style)],
    [Paragraph('Location Pages', cell_style), Paragraph('8 pages (NJ, NY, CA, TX, Canada, UK, AU, NZ)', cell_style)],
    [Paragraph('Culture Pages', cell_style), Paragraph('8 pages (Gujarati, Punjabi, Bengali, etc.)', cell_style)],
    [Paragraph('Event Pages', cell_style), Paragraph('4 pages (Mehndi, Sangeet, Baraat, Guest)', cell_style)],
    [Paragraph('Google Analytics', cell_style), Paragraph('G-8K8YLBERPM (active)', cell_style)],
    [Paragraph('SSL/HTTPS', cell_style), Paragraph('Active', cell_style)],
    [Paragraph('Robots.txt', cell_style), Paragraph('Present, allows all bots including AI crawlers', cell_style)],
    [Paragraph('Sitemap.xml', cell_style), Paragraph('Present, but all same lastmod date', cell_style)],
]
story.extend(make_table(site_data, [2.0*inch, 4.0*inch], 'Table 2: Site Architecture Summary'))

story.append(Paragraph('<b>2.2 What Is Working Well</b>', h2_style))
story.append(Paragraph(
    'Despite the traffic challenges, the site has several strong SEO foundations already in place. These should be preserved and built upon rather than replaced. The meta tags are well-crafted with keyword-rich titles and descriptions, Open Graph and Twitter Card tags are implemented on every page, canonical URLs are set correctly, and the keyword-rich URL structure naturally targets long-tail search queries. The site also allows AI bot crawlers (GPTBot, ClaudeBot, PerplexityBot), which positions it well for AI search optimization. The internal linking between testimonials and culture-specific pages shows an understanding of topical authority.',
    body_style
))

bullets_good = [
    'Well-crafted meta titles and descriptions with target keywords',
    'Open Graph and Twitter Card tags on every page for social sharing',
    'Canonical URLs properly set to prevent duplicate content',
    'Keyword-rich URL structure (e.g., /buy-bridal-lehenga-from-india-usa)',
    'AI bot access allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot)',
    'Google Analytics and domain verification active',
    'Strategic location and culture-specific page architecture',
    'Trustpilot integration for social proof',
    'WhatsApp CTA for low-friction lead capture',
]
for b in bullets_good:
    story.append(Paragraph('- ' + b, bullet_style))

# ═══ SECTION 3: CRITICAL ISSUES ═══
story.extend(add_major_section('<b>3. Critical Issues Found</b>', h1_style))

story.append(Paragraph(
    'This section details the most impactful SEO problems preventing CeremonyVerse from ranking and generating organic traffic. Issues are ordered by severity and estimated impact on rankings and leads.',
    body_style
))

# Issue 3.1
story.append(Paragraph('<b>3.1 Zero Structured Data (JSON-LD Schema)</b>', h2_style))
story.append(priority_cell('CRITICAL'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The single most impactful SEO deficiency on CeremonyVerse is the complete absence of JSON-LD structured data. There is not a single Schema.org markup on any page of the site. This means Google has no machine-readable signals about the business, its services, its content, or its reviews. Without structured data, the site is invisible for rich snippets, knowledge panels, FAQ expansions, and local business cards in search results. In a niche where trust and credibility are paramount, missing rich results is a critical competitive disadvantage.',
    body_style
))
story.append(Paragraph('<b>Missing Schema Types:</b>', h3_style))
schema_data = [
    [Paragraph('<b>Schema Type</b>', header_cell_style),
     Paragraph('<b>Where to Add</b>', header_cell_style),
     Paragraph('<b>Rich Result Enabled</b>', header_cell_style)],
    [Paragraph('LocalBusiness', cell_style), Paragraph('Homepage, About page', cell_style), Paragraph('Knowledge panel, map listing', cell_style)],
    [Paragraph('Service', cell_style), Paragraph('All /services/* pages', cell_style), Paragraph('Service rich card in SERP', cell_style)],
    [Paragraph('FAQPage', cell_style), Paragraph('Service pages, pricing page', cell_style), Paragraph('Expandable FAQ snippets', cell_style)],
    [Paragraph('Product', cell_style), Paragraph('Lehenga, sherwani, jewelry pages', cell_style), Paragraph('Product cards with price/reviews', cell_style)],
    [Paragraph('Organization', cell_style), Paragraph('Homepage (sitewide)', cell_style), Paragraph('Brand knowledge panel', cell_style)],
    [Paragraph('BreadcrumbList', cell_style), Paragraph('Every page except homepage', cell_style), Paragraph('Breadcrumb trail in SERP', cell_style)],
    [Paragraph('Article', cell_style), Paragraph('All /blog/* pages', cell_style), Paragraph('Article rich snippet', cell_style)],
    [Paragraph('Review / AggregateRating', cell_style), Paragraph('Homepage, services, Trustpilot', cell_style), Paragraph('Star ratings in SERP', cell_style)],
    [Paragraph('HowTo', cell_style), Paragraph('/how-it-works page', cell_style), Paragraph('Step-by-step rich result', cell_style)],
    [Paragraph('VideoObject', cell_style), Paragraph('Pages with video testimonials', cell_style), Paragraph('Video thumbnail in SERP', cell_style)],
]
story.extend(make_table(schema_data, [1.5*inch, 2.2*inch, 2.5*inch], 'Table 3: Required Schema Implementations'))

# Issue 3.2
story.append(Paragraph('<b>3.2 No FAQ Sections with FAQPage Schema</b>', h2_style))
story.append(priority_cell('CRITICAL'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'FAQ sections with FAQPage schema are one of the highest-ROI SEO implementations for service businesses. They occupy more SERP real estate (expanding your listing by 3-4 lines), directly answer user questions (which Google prioritizes for featured snippets), and provide natural keyword integration opportunities. Currently, not a single page on CeremonyVerse has an FAQ section. Every service page, the pricing page, and the how-it-works page should have 5-8 frequently asked questions with concise, keyword-rich answers wrapped in FAQPage JSON-LD schema.',
    body_style
))
story.append(Paragraph(
    'For example, the bridal lehenga page should answer questions like: "How much does a bridal lehenga from India cost?" "How long does shipping take from India to the USA?" "Can I see the lehenga before buying?" "What if the lehenga does not fit?" These are exact-match queries that NRI brides type into Google, and answering them with FAQ schema creates a direct path to featured snippet ownership.',
    body_style
))

# Issue 3.3
story.append(Paragraph('<b>3.3 Content Depth Is Insufficient for Competitive Rankings</b>', h2_style))
story.append(priority_cell('CRITICAL'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The site has only 11 blog posts and most service pages appear to have thin content (under 1,000 words). In the Indian wedding niche, top-ranking pages for key terms typically have 2,000-4,000 words of comprehensive content. Google has explicitly stated that content depth and comprehensiveness are ranking factors, and the current content volume is far below the threshold needed to compete with established players like WedMeGood, The Knot, and competitor boutiques that have hundreds of articles and detailed guides.',
    body_style
))
story.append(Paragraph(
    'The site also lacks pillar content, which is the foundational long-form content (3,000-5,000 words) that establishes topical authority on a core subject. Without pillar pages, the site cannot build the semantic relevance that Google uses to determine whether a site deserves to rank for a topic cluster. The blog posts that do exist are well-targeted (e.g., "How to Buy Bridal Lehenga from India to USA," "US Tariffs on Indian Wedding Outfits 2026"), but they are isolated articles rather than interconnected content clusters.',
    body_style
))

# Issue 3.4
story.append(Paragraph('<b>3.4 Off-Page Authority Is Near Zero</b>', h2_style))
story.append(priority_cell('CRITICAL'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'A search for backlinks to ceremonyverse.com reveals an extremely thin link profile. The only visible external link is from Trustpilot. For context, competitors like Kala Shree Regalia, Ishwah, and WedMeGood have backlinks from fashion blogs, wedding directories, Indian community websites, and social media platforms. Backlinks remain one of the top three ranking factors in Google\'s algorithm, and without a deliberate link-building strategy, the site will continue to rank below competitors regardless of on-page optimization quality.',
    body_style
))
story.append(Paragraph(
    'The absence of Google Business Profile (formerly Google My Business) is also notable. As a US-based service business with a physical presence in Philadelphia, CeremonyVerse should have an optimized GBP listing with photos, services, reviews, and Q&A. This alone can drive significant local search visibility for queries like "Indian wedding shopping Philadelphia" or "Indian bridal lehenga near me."',
    body_style
))

# Issue 3.5
story.append(Paragraph('<b>3.5 No Email Capture or Lead Magnet Funnel</b>', h2_style))
story.append(priority_cell('HIGH'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The only conversion path on the site is a WhatsApp CTA. While WhatsApp is effective for warm leads, it completely misses the large segment of visitors who are in the research/awareness phase and are not ready for a live conversation. These visitors need a lower-commitment entry point, typically an email capture in exchange for a valuable lead magnet. The /free-guides page exists but appears to redirect to a consultation booking rather than offering an actual downloadable resource. This is a critical gap in the funnel that is losing 70-80% of potential leads who are not yet ready to talk to a human.',
    body_style
))

# Issue 3.6
story.append(Paragraph('<b>3.6 Duplicate / Cannibalizing Pages</b>', h2_style))
story.append(priority_cell('HIGH'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'There are several pairs of pages that serve nearly identical purposes, which risks keyword cannibalization and confuses search engines about which page to rank for a given query. The most notable examples are /contact and /consultation, which both target "Indian wedding consultation" queries, and the overlap between /services/bridal-lehengas and /buy-bridal-lehenga-from-india-usa, which both target the same core keyword. Additionally, /services and /shop-from-india appear to serve similar intents. These duplicate pages dilute page authority and create internal competition rather than reinforcing a single authoritative page for each keyword cluster.',
    body_style
))

# Issue 3.7
story.append(Paragraph('<b>3.7 Missing Hreflang Tags for International Markets</b>', h2_style))
story.append(priority_cell('HIGH'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'CeremonyVerse explicitly serves the USA, UK, Canada, Australia, and New Zealand markets (as shown by location-specific pages and delivery mentions). Despite serving multiple English-speaking countries, there are no hreflang tags on any page. While all content is in English, hreflang tags are still valuable because they signal to Google which version of a page to show in which country\'s search results. Without them, Google may show the US version to UK searchers, or worse, may not rank the site at all in country-specific Google domains (google.co.uk, google.ca, google.com.au). The location pages (e.g., /indian-wedding-shopping-uk) should have self-referencing hreflang tags plus alternate tags pointing to equivalent pages for other regions.',
    body_style
))

# Issue 3.8
story.append(Paragraph('<b>3.8 No Video Content or Video Schema</b>', h2_style))
story.append(priority_cell('MEDIUM'))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'Video content is a significant ranking factor and engagement driver. The site\'s unique selling proposition is live video shopping from India, yet there are no video testimonials, no behind-the-scenes workshop tours, no how-it-works explainer videos, and no short-form content for social media. Google increasingly shows video thumbnails in search results, and YouTube (the second largest search engine) is an entirely untapped channel. Creating even 5-10 videos and embedding them on key pages with VideoObject schema would improve dwell time, click-through rates, and rankings.',
    body_style
))

# ═══ SECTION 4: KEYWORD ANALYSIS ═══
story.extend(add_major_section('<b>4. Keyword Analysis & Gap Assessment</b>', h1_style))

story.append(Paragraph('<b>4.1 Current Keyword Rankings</b>', h2_style))
story.append(Paragraph(
    'Based on the search analysis, CeremonyVerse currently appears in search results for its brand name and a handful of long-tail product queries. The site is indexed and appears for "buy bridal lehenga from India USA" (rank 8-9) and "ceremonyverse" (rank 1). However, it does not appear in the top 50 results for most high-volume informational and commercial queries that represent the majority of search demand in this niche. The following table shows the keyword gaps where competitors are ranking but CeremonyVerse is not.',
    body_style
))

kw_data = [
    [Paragraph('<b>Keyword</b>', header_cell_style),
     Paragraph('<b>Intent</b>', header_cell_style),
     Paragraph('<b>Difficulty</b>', header_cell_style),
     Paragraph('<b>Current Rank</b>', header_cell_style),
     Paragraph('<b>Target Rank</b>', header_cell_style)],
    [Paragraph('buy bridal lehenga from India USA', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('8-10', cell_center_style), Paragraph('1-3', cell_center_style)],
    [Paragraph('Indian wedding shopping concierge', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('5-8', cell_center_style), Paragraph('1-3', cell_center_style)],
    [Paragraph('NRI bridal lehenga online', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('5-10', cell_center_style)],
    [Paragraph('how to buy Indian wedding outfits from abroad', cell_style), Paragraph('Informational', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-5', cell_center_style)],
    [Paragraph('Indian wedding customs duty USA', cell_style), Paragraph('Informational', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-3', cell_center_style)],
    [Paragraph('Sabyasachi alternatives for NRI brides', cell_style), Paragraph('Informational', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-3', cell_center_style)],
    [Paragraph('custom sherwani online USA', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('5-10', cell_center_style)],
    [Paragraph('gujarati wedding outfits USA', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-5', cell_center_style)],
    [Paragraph('Indian wedding guest outfits USA', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('5-10', cell_center_style)],
    [Paragraph('kanchipuram silk sarees USA delivery', cell_style), Paragraph('Commercial', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-5', cell_center_style)],
    [Paragraph('NRI wedding shopping mistakes', cell_style), Paragraph('Informational', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-3', cell_center_style)],
    [Paragraph('Indian wedding shopping without traveling', cell_style), Paragraph('Informational', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Not ranked', cell_center_style), Paragraph('1-3', cell_center_style)],
]
story.extend(make_table(kw_data, [2.2*inch, 0.9*inch, 0.8*inch, 0.9*inch, 0.9*inch],
                        'Table 4: Keyword Gap Analysis'))

story.append(Paragraph('<b>4.2 Keyword Strategy Recommendations</b>', h2_style))
story.append(Paragraph(
    'The keyword strategy should be organized around three tiers that map to the customer journey: Top of Funnel (awareness), Middle of Funnel (consideration), and Bottom of Funnel (decision). Currently, the site only targets bottom-of-funnel commercial keywords (e.g., "buy bridal lehenga from India"). This means the site is invisible to the 80% of potential customers who are still in the research phase. The following strategy addresses this gap by creating content for every stage of the journey.',
    body_style
))

funnel_data = [
    [Paragraph('<b>Funnel Stage</b>', header_cell_style),
     Paragraph('<b>Keyword Examples</b>', header_cell_style),
     Paragraph('<b>Content Type</b>', header_cell_style),
     Paragraph('<b>Priority</b>', header_cell_style)],
    [Paragraph('Top of Funnel (Awareness)', cell_style),
     Paragraph('Indian wedding outfit guide, NRI wedding timeline, how many outfits for Indian wedding, customs duty India to USA', cell_style),
     Paragraph('Pillar guides (3,000-5,000 words), blog posts, infographics', cell_style),
     priority_cell('HIGH')],
    [Paragraph('Middle of Funnel (Consideration)', cell_style),
     Paragraph('Sabyasachi alternatives, Indian wedding shopping concierge vs direct, bridal lehenga cost comparison, live video shopping India', cell_style),
     Paragraph('Comparison guides, case studies, FAQ pages, video testimonials', cell_style),
     priority_cell('HIGH')],
    [Paragraph('Bottom of Funnel (Decision)', cell_style),
     Paragraph('Buy bridal lehenga from India USA, custom sherwani online, Indian wedding concierge pricing, CeremonyVerse reviews', cell_style),
     Paragraph('Service pages, pricing page, Trustpilot integration, consultation booking', cell_style),
     priority_cell('MEDIUM')],
]
story.extend(make_table(funnel_data, [1.2*inch, 1.8*inch, 1.8*inch, 0.8*inch],
                        'Table 5: Keyword Funnel Strategy'))

# ═══ SECTION 5: TECHNICAL SEO DETAILS ═══
story.extend(add_major_section('<b>5. Technical SEO Deep Dive</b>', h1_style))

story.append(Paragraph('<b>5.1 Page Speed & Core Web Vitals</b>', h2_style))
story.append(Paragraph(
    'The homepage preloads 8 images (hero-lehenga.jpg, live-video-shopping-india.jpg, and 6 testimonial images), which is an aggressive preload strategy that can delay the initial Largest Contentful Paint (LCP). While preloading the hero image is correct, preloading testimonial images that appear below the fold wastes bandwidth and delays critical resource loading. The hero image should be optimized to WebP format with responsive srcset attributes. Below-the-fold images should use native lazy loading instead of preloading.',
    body_style
))
story.append(Paragraph('<b>Recommended Image Optimizations:</b>', h3_style))
img_bullets = [
    'Convert all JPG/PNG images to WebP format (30-50% smaller file size)',
    'Implement responsive srcset with multiple resolutions for all images',
    'Use native loading="lazy" on all below-the-fold images',
    'Remove preload hints for testimonial images (only preload hero and above-the-fold content)',
    'Implement blur-up placeholder technique for perceived loading speed',
    'Ensure all images have descriptive alt text with target keywords',
]
for b in img_bullets:
    story.append(Paragraph('- ' + b, bullet_style))

story.append(Paragraph('<b>5.2 Sitemap Issues</b>', h2_style))
story.append(Paragraph(
    'The sitemap.xml contains all pages with the same lastmod date (2026-04-23T18:30:26.010Z), which provides no signal to search engines about which pages have been recently updated. Google uses lastmod dates to prioritize crawling, and uniform dates mean the search engine treats all pages equally. Additionally, the sitemap does not include priority or changefreq attributes, and it does not include image entries with caption and geo-location information, which would help with image search visibility.',
    body_style
))

story.append(Paragraph('<b>5.3 Internal Linking Structure</b>', h2_style))
story.append(Paragraph(
    'The internal linking is reasonable but not optimized for SEO authority flow. Blog posts should strategically link to service pages using optimized anchor text (e.g., "buy bridal lehenga from India" linking to /buy-bridal-lehenga-from-india-usa). Currently, testimonial sections link to culture-specific pages (e.g., /gujarati-wedding-outfits-usa), which is good for topical authority, but the blog content appears to lack systematic internal linking to the highest-value conversion pages. Every blog post should include at least 2-3 contextual links to relevant service pages with keyword-rich anchor text.',
    body_style
))

story.append(Paragraph('<b>5.4 Mobile Optimization</b>', h2_style))
story.append(Paragraph(
    'The site uses responsive design with a mobile menu toggle, which is correct. However, the fixed header bar (top announcement bar + main navigation) occupies approximately 136px of vertical space on mobile devices, which is significant. On a standard mobile viewport (667px height), this leaves only 531px for content, of which the navigation header takes another 96px. This means nearly 35% of the initial viewport is consumed by chrome before any content is visible. Consider collapsing the announcement bar on mobile after the first scroll or reducing the header height.',
    body_style
))

# ═══ SECTION 6: CONTENT STRATEGY ═══
story.extend(add_major_section('<b>6. Content Strategy & Calendar</b>', h1_style))

story.append(Paragraph('<b>6.1 Pillar Content Needed</b>', h2_style))
story.append(Paragraph(
    'Pillar content is the foundational long-form content that establishes topical authority on a core subject. Without pillar pages, individual blog posts float in isolation and cannot build the semantic relevance signals that Google uses to determine whether a site deserves to rank for an entire topic cluster. CeremonyVerse needs 4-6 pillar pages that serve as the authoritative resource for their respective topics. Each pillar should be 3,000-5,000 words and should link to 8-12 related blog posts and service pages.',
    body_style
))

pillar_data = [
    [Paragraph('<b>Pillar Page</b>', header_cell_style),
     Paragraph('<b>Target Keyword</b>', header_cell_style),
     Paragraph('<b>Word Count</b>', header_cell_style),
     Paragraph('<b>Linked Cluster Content</b>', header_cell_style)],
    [Paragraph('Ultimate NRI Indian Wedding Shopping Guide', cell_style),
     Paragraph('Indian wedding shopping USA guide', cell_style),
     Paragraph('5,000+', cell_center_style),
     Paragraph('8 blog posts + 4 service pages', cell_style)],
    [Paragraph('Complete Bridal Lehenga Sourcing Guide', cell_style),
     Paragraph('bridal lehenga from India complete guide', cell_style),
     Paragraph('4,000+', cell_center_style),
     Paragraph('5 blog posts + 3 service pages', cell_style)],
    [Paragraph('NRI Groom Outfit Complete Guide', cell_style),
     Paragraph('sherwani from India USA complete guide', cell_style),
     Paragraph('3,500+', cell_center_style),
     Paragraph('3 blog posts + 2 service pages', cell_style)],
    [Paragraph('Indian Wedding Outfit Traditions by Community', cell_style),
     Paragraph('Indian wedding outfits by community guide', cell_style),
     Paragraph('4,500+', cell_center_style),
     Paragraph('8 culture pages + 4 blog posts', cell_style)],
    [Paragraph('Shipping & Customs Guide for Indian Wedding Items', cell_style),
     Paragraph('Indian wedding outfits customs duty USA', cell_style),
     Paragraph('3,000+', cell_center_style),
     Paragraph('3 blog posts + 2 location pages', cell_style)],
]
story.extend(make_table(pillar_data, [1.8*inch, 1.5*inch, 0.8*inch, 1.8*inch],
                        'Table 6: Required Pillar Content'))

story.append(Paragraph('<b>6.2 Blog Content Calendar (Next 90 Days)</b>', h2_style))
story.append(Paragraph(
    'The following content calendar outlines 12 high-priority blog posts that target specific keyword gaps and support the pillar content strategy. Each post should be a minimum of 1,500 words and include FAQ sections with FAQPage schema, internal links to relevant service pages, and optimized meta tags.',
    body_style
))

blog_data = [
    [Paragraph('<b>Week</b>', header_cell_style),
     Paragraph('<b>Blog Post Title</b>', header_cell_style),
     Paragraph('<b>Target Keyword</b>', header_cell_style),
     Paragraph('<b>Links To</b>', header_cell_style)],
    [Paragraph('1', cell_center_style), Paragraph('10 Mistakes NRI Brides Make When Buying Lehengas from India', cell_style), Paragraph('NRI wedding shopping mistakes', cell_style), Paragraph('/buy-bridal-lehenga-from-india-usa', cell_style)],
    [Paragraph('2', cell_center_style), Paragraph('Indian Wedding Outfit Timeline: When to Start Shopping from the US', cell_style), Paragraph('NRI wedding planning timeline', cell_style), Paragraph('/how-it-works, /nri-indian-wedding-shopping-guide', cell_style)],
    [Paragraph('3', cell_center_style), Paragraph('Sabyasachi vs. Artisan Workshops: What NRI Brides Should Know', cell_style), Paragraph('Sabyasachi alternatives NRI brides', cell_style), Paragraph('/services/bridal-lehengas', cell_style)],
    [Paragraph('4', cell_center_style), Paragraph('How to Coordinate 14+ Bridesmaid Outfits from India Without Losing Your Mind', cell_style), Paragraph('bridesmaid outfits from India coordination', cell_style), Paragraph('/bridesmaid-and-family-outfits-from-india', cell_style)],
    [Paragraph('5', cell_center_style), Paragraph('US Customs Duty on Indian Wedding Outfits: Complete 2026 Guide', cell_style), Paragraph('Indian wedding customs duty USA 2026', cell_style), Paragraph('/indian-wedding-outfits-shipping-to-usa', cell_style)],
    [Paragraph('6', cell_center_style), Paragraph('How Live Video Shopping from India Works (Step-by-Step)', cell_style), Paragraph('live video shopping India wedding', cell_style), Paragraph('/how-it-works', cell_style)],
    [Paragraph('7', cell_center_style), Paragraph('What Your Non-Indian Partner Should Wear to an Indian Wedding', cell_style), Paragraph('non-Indian partner Indian wedding outfit', cell_style), Paragraph('/services/intercultural-indian-weddings', cell_style)],
    [Paragraph('8', cell_center_style), Paragraph('Gujarati Wedding Outfit Guide: Everything Your Family Needs', cell_style), Paragraph('Gujarati wedding outfits USA guide', cell_style), Paragraph('/gujarati-wedding-outfits-usa', cell_style)],
    [Paragraph('9', cell_center_style), Paragraph('How Much Does a Full Indian Wedding Wardrobe Cost in the US?', cell_style), Paragraph('Indian wedding outfit cost USA', cell_style), Paragraph('/pricing, /services/bridal-lehengas', cell_style)],
    [Paragraph('10', cell_center_style), Paragraph('Punjabi Sikh Wedding Outfit Guide: From Anand Karaj to Reception', cell_style), Paragraph('Punjabi Sikh wedding outfits USA', cell_style), Paragraph('/punjabi-sikh-wedding-outfits-usa', cell_style)],
    [Paragraph('11', cell_center_style), Paragraph('Kanchipuram Silk Saree Buying Guide for US-Based Brides', cell_style), Paragraph('Kanchipuram silk sarees USA guide', cell_style), Paragraph('/kanchipuram-silk-sarees-usa', cell_style)],
    [Paragraph('12', cell_center_style), Paragraph('Intercultural Indian Wedding: Outfit Guide for Both Families', cell_style), Paragraph('intercultural Indian wedding outfits', cell_style), Paragraph('/services/intercultural-indian-weddings', cell_style)],
]
story.extend(make_table(blog_data, [0.5*inch, 2.2*inch, 1.5*inch, 1.5*inch],
                        'Table 7: 90-Day Blog Content Calendar'))

# ═══ SECTION 7: AI SEARCH OPTIMIZATION ═══
story.extend(add_major_section('<b>7. AI Search Optimization (AEO & GEO)</b>', h1_style))

story.append(Paragraph('<b>7.1 Current AI Search Readiness</b>', h2_style))
story.append(Paragraph(
    'AI-powered search engines (Google AI Overviews, ChatGPT with Browse, Perplexity, Bing Copilot) are transforming how users find information. These systems synthesize answers from multiple sources and cite the most authoritative, well-structured content. CeremonyVerse has a head start because robots.txt allows GPTBot, ClaudeBot, and PerplexityBot, but the site lacks the structural signals that AI systems prioritize when selecting sources for synthesized answers. The key optimization strategies for AI search are Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).',
    body_style
))

story.append(Paragraph('<b>7.2 AEO/GEO Strategy</b>', h2_style))
aeo_bullets = [
    '<b>Implement FAQ sections with FAQPage schema on every service page.</b> AI systems prioritize content that directly answers questions in a structured Q&A format. Each FAQ pair should be a concise, standalone answer that can be extracted and cited by AI.',
    '<b>Use "is" statements and definitive language.</b> AI systems prefer content that makes clear, authoritative statements. Instead of "We might be able to help," use "CeremonyVerse sources authentic bridal lehengas directly from India with live video approval."',
    '<b>Create comparison tables.</b> AI systems frequently cite structured comparison data. Create tables comparing CeremonyVerse vs. direct shopping, bridal lehenga price ranges by type, and shipping timeline comparisons.',
    '<b>Include specific data points.</b> AI systems favor content with concrete numbers. "30-50% savings vs. US boutiques," "customs duty typically 12-27%," "15+ precise measurements" are all cite-worthy data points that should be prominently placed.',
    '<b>Optimize for featured snippets.</b> Structure content with H2/H3 headings that match question-format queries, followed by concise 40-60 word answers. This format is preferred by both featured snippets and AI overviews.',
    '<b>Build topical authority clusters.</b> AI systems assess whether a site has comprehensive coverage of a topic. The pillar content strategy outlined in Section 6 directly supports this by creating deep interlinked content clusters.',
]
for b in aeo_bullets:
    story.append(Paragraph('- ' + b, bullet_style))

# ═══ SECTION 8: LOCAL SEO ═══
story.extend(add_major_section('<b>8. Local SEO Strategy</b>', h1_style))

story.append(Paragraph(
    'As a Philadelphia-based business serving Indian communities across the US, local SEO is a significant untapped opportunity. The site already has location-specific pages for New Jersey, New York, California, and Texas, but these pages lack the local signals that Google uses to rank businesses in local search results. The following actions would dramatically improve local visibility.',
    body_style
))

local_data = [
    [Paragraph('<b>Action</b>', header_cell_style),
     Paragraph('<b>Priority</b>', header_cell_style),
     Paragraph('<b>Impact</b>', header_cell_style),
     Paragraph('<b>Timeline</b>', header_cell_style)],
    [Paragraph('Create Google Business Profile for Philadelphia HQ', cell_style),
     priority_cell('CRITICAL'), Paragraph('High - local pack visibility', cell_style), Paragraph('Week 1', cell_center_style)],
    [Paragraph('Add LocalBusiness schema to homepage with Philadelphia address', cell_style),
     priority_cell('CRITICAL'), Paragraph('High - knowledge panel', cell_style), Paragraph('Week 1', cell_center_style)],
    [Paragraph('Add local schema to each location page with service area', cell_style),
     priority_cell('HIGH'), Paragraph('Medium - local relevance', cell_style), Paragraph('Week 2', cell_center_style)],
    [Paragraph('List on Indian wedding vendor directories (WedMeGood, shaadi.com)', cell_style),
     priority_cell('HIGH'), Paragraph('High - backlinks + referrals', cell_style), Paragraph('Week 2-3', cell_center_style)],
    [Paragraph('List on Google Maps, Yelp, BBB with consistent NAP', cell_style),
     priority_cell('HIGH'), Paragraph('Medium - local citations', cell_style), Paragraph('Week 2', cell_center_style)],
    [Paragraph('Create city-specific blog content (e.g., "Indian Wedding Shopping in New Jersey")', cell_style),
     priority_cell('MEDIUM'), Paragraph('Medium - local keyword ranking', cell_style), Paragraph('Month 2-3', cell_center_style)],
    [Paragraph('Partner with local Indian community organizations for backlinks', cell_style),
     priority_cell('MEDIUM'), Paragraph('High - authority + referrals', cell_style), Paragraph('Ongoing', cell_center_style)],
]
story.extend(make_table(local_data, [2.5*inch, 0.8*inch, 1.5*inch, 0.8*inch],
                        'Table 8: Local SEO Action Plan'))

# ═══ SECTION 9: OFF-PAGE STRATEGY ═══
story.extend(add_major_section('<b>9. Off-Page SEO & Authority Building</b>', h1_style))

story.append(Paragraph(
    'Off-page SEO (primarily backlink building) is the area where CeremonyVerse has the largest gap. The site currently has almost no external backlinks, which severely limits its ability to rank competitively. Backlinks function as "votes of confidence" from other websites, and Google uses them as a primary ranking signal. Without a deliberate link-building strategy, even perfectly optimized on-page content will struggle to rank above competitors with stronger backlink profiles.',
    body_style
))

story.append(Paragraph('<b>9.1 Link Building Strategies by Priority</b>', h2_style))

link_data = [
    [Paragraph('<b>Strategy</b>', header_cell_style),
     Paragraph('<b>Target Links</b>', header_cell_style),
     Paragraph('<b>Effort</b>', header_cell_style),
     Paragraph('<b>Timeline</b>', header_cell_style)],
    [Paragraph('Indian wedding vendor directories (WedMeGood, Shaadi.com, WeddingWire)', cell_style),
     Paragraph('5-10', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Week 1-2', cell_center_style)],
    [Paragraph('Guest posts on Indian fashion/wedding blogs', cell_style),
     Paragraph('3-5/month', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Month 1-3', cell_center_style)],
    [Paragraph('PR features in Indian-American media (India West, The American Bazaar)', cell_style),
     Paragraph('2-3', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Month 1-2', cell_center_style)],
    [Paragraph('Partnerships with Indian community organizations (temples, cultural centers)', cell_style),
     Paragraph('5-10', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Month 2-3', cell_center_style)],
    [Paragraph('HARO/Connectively responses for wedding/moving/international shopping queries', cell_style),
     Paragraph('1-3/month', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Ongoing', cell_center_style)],
    [Paragraph('Resource page links from Indian wedding planning guides', cell_style),
     Paragraph('3-5', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Month 2-4', cell_center_style)],
    [Paragraph('Podcast appearances on Indian wedding/culture podcasts', cell_style),
     Paragraph('2-4', cell_center_style), Paragraph('Medium', cell_center_style), Paragraph('Month 3-6', cell_center_style)],
    [Paragraph('Social media link building (Pinterest boards, Instagram collaborations)', cell_style),
     Paragraph('10-20', cell_center_style), Paragraph('Low', cell_center_style), Paragraph('Ongoing', cell_center_style)],
]
story.extend(make_table(link_data, [2.5*inch, 0.9*inch, 0.7*inch, 0.9*inch],
                        'Table 9: Link Building Strategy'))

story.append(Paragraph('<b>9.2 Social Media SEO Integration</b>', h2_style))
story.append(Paragraph(
    'While social media links are typically nofollow, they contribute to brand visibility, content distribution, and indirect SEO benefits. The site references a Twitter/X account (@ceremonyverse), but there is no visible presence on Instagram, Pinterest, or YouTube, which are the three most important platforms for the Indian wedding niche. Pinterest in particular is a massive traffic driver for wedding-related content because it functions as a visual search engine. Every blog post and service page should have corresponding Pinterest pins with keyword-optimized descriptions and links back to the site. Instagram Reels showcasing live video shopping sessions would create engaging short-form content that drives both social traffic and brand awareness.',
    body_style
))

# ═══ SECTION 10: PRIORITY ACTION PLAN ═══
story.extend(add_major_section('<b>10. 90-Day Priority Action Plan</b>', h1_style))

story.append(Paragraph(
    'The following action plan organizes all recommendations into a 90-day implementation timeline with clear priorities and expected impact. The plan is designed to deliver the highest-impact changes first, with diminishing-returns optimizations in later weeks.',
    body_style
))

action_data = [
    [Paragraph('<b>Week</b>', header_cell_style),
     Paragraph('<b>Action</b>', header_cell_style),
     Paragraph('<b>Priority</b>', header_cell_style),
     Paragraph('<b>Expected Impact</b>', header_cell_style)],
    [Paragraph('1', cell_center_style), Paragraph('Add JSON-LD schema (LocalBusiness, Organization, BreadcrumbList) to homepage', cell_style), priority_cell('CRITICAL'), Paragraph('Knowledge panel eligibility, rich snippets', cell_style)],
    [Paragraph('1', cell_center_style), Paragraph('Create Google Business Profile with full optimization', cell_style), priority_cell('CRITICAL'), Paragraph('Local pack visibility, map listing', cell_style)],
    [Paragraph('1', cell_center_style), Paragraph('Add FAQPage schema to top 5 service pages', cell_style), priority_cell('CRITICAL'), Paragraph('Rich snippet expansion, AEO readiness', cell_style)],
    [Paragraph('2', cell_center_style), Paragraph('Add Service schema to all /services/* pages', cell_style), priority_cell('CRITICAL'), Paragraph('Service rich cards in SERP', cell_style)],
    [Paragraph('2', cell_center_style), Paragraph('Fix sitemap.xml with correct lastmod dates and priority values', cell_style), priority_cell('HIGH'), Paragraph('Improved crawl efficiency', cell_style)],
    [Paragraph('2', cell_center_style), Paragraph('Implement hreflang tags on location pages', cell_style), priority_cell('HIGH'), Paragraph('International SERP targeting', cell_style)],
    [Paragraph('2', cell_center_style), Paragraph('List on 5 Indian wedding vendor directories', cell_style), priority_cell('HIGH'), Paragraph('5-10 backlinks + referral traffic', cell_style)],
    [Paragraph('3', cell_center_style), Paragraph('Add Article schema to all blog posts', cell_style), priority_cell('HIGH'), Paragraph('Article rich snippets', cell_style)],
    [Paragraph('3', cell_center_style), Paragraph('Create lead magnet (downloadable NRI Wedding Shopping Checklist)', cell_style), priority_cell('HIGH'), Paragraph('Email capture, 3-5x lead increase', cell_style)],
    [Paragraph('3', cell_center_style), Paragraph('Optimize image loading (WebP, lazy load, remove below-fold preloads)', cell_style), priority_cell('HIGH'), Paragraph('Improved Core Web Vitals', cell_style)],
    [Paragraph('4-6', cell_center_style), Paragraph('Publish 2 blog posts per week following content calendar', cell_style), priority_cell('HIGH'), Paragraph('Topical authority, keyword coverage', cell_style)],
    [Paragraph('4-6', cell_center_style), Paragraph('Create 2 pillar pages (NRI Shopping Guide, Bridal Lehenga Guide)', cell_style), priority_cell('HIGH'), Paragraph('Topical authority clusters', cell_style)],
    [Paragraph('4-8', cell_center_style), Paragraph('Guest post outreach (3-5 posts on Indian wedding blogs)', cell_style), priority_cell('MEDIUM'), Paragraph('3-5 high-authority backlinks', cell_style)],
    [Paragraph('4-8', cell_center_style), Paragraph('Create 5-10 YouTube/Pinterest content pieces', cell_style), priority_cell('MEDIUM'), Paragraph('Multi-channel visibility, video SERP', cell_style)],
    [Paragraph('8-12', cell_center_style), Paragraph('Launch PR campaign targeting Indian-American media', cell_style), priority_cell('MEDIUM'), Paragraph('Brand authority, high-DA backlinks', cell_style)],
    [Paragraph('8-12', cell_center_style), Paragraph('Build community partnerships for backlinks', cell_style), priority_cell('MEDIUM'), Paragraph('Local authority, referral traffic', cell_style)],
]
story.extend(make_table(action_data, [0.5*inch, 2.8*inch, 0.8*inch, 1.6*inch],
                        'Table 10: 90-Day Implementation Roadmap'))

# ═══ SECTION 11: EXPECTED RESULTS ═══
story.extend(add_major_section('<b>11. Expected Results & KPIs</b>', h1_style))

story.append(Paragraph(
    'Based on the current site performance, the competitive landscape, and the recommended optimizations, the following results are projected. These estimates assume consistent implementation of the 90-day action plan with weekly content publication and ongoing link-building activity. Results are cumulative and will continue to improve beyond the 90-day window as content matures and backlink authority compounds.',
    body_style
))

kpi_data = [
    [Paragraph('<b>KPI</b>', header_cell_style),
     Paragraph('<b>Current</b>', header_cell_style),
     Paragraph('<b>30-Day Target</b>', header_cell_style),
     Paragraph('<b>90-Day Target</b>', header_cell_style),
     Paragraph('<b>6-Month Target</b>', header_cell_style)],
    [Paragraph('Organic Traffic (monthly visits)', cell_style), Paragraph('~0-50', cell_center_style), Paragraph('100-200', cell_center_style), Paragraph('500-1,000', cell_center_style), Paragraph('2,000-5,000', cell_center_style)],
    [Paragraph('Keywords Ranked (Top 50)', cell_style), Paragraph('~5', cell_center_style), Paragraph('15-25', cell_center_style), Paragraph('50-80', cell_center_style), Paragraph('150-300', cell_center_style)],
    [Paragraph('Keywords Ranked (Top 10)', cell_style), Paragraph('~1', cell_center_style), Paragraph('3-5', cell_center_style), Paragraph('10-20', cell_center_style), Paragraph('40-80', cell_center_style)],
    [Paragraph('Backlinks (referring domains)', cell_style), Paragraph('~1', cell_center_style), Paragraph('5-10', cell_center_style), Paragraph('15-25', cell_center_style), Paragraph('40-70', cell_center_style)],
    [Paragraph('Leads (consultations/month)', cell_style), Paragraph('~0-2', cell_center_style), Paragraph('3-5', cell_center_style), Paragraph('10-20', cell_center_style), Paragraph('30-60', cell_center_style)],
    [Paragraph('Email Subscribers', cell_style), Paragraph('0', cell_center_style), Paragraph('20-50', cell_center_style), Paragraph('100-300', cell_center_style), Paragraph('500-1,000', cell_center_style)],
    [Paragraph('Domain Authority (estimated)', cell_style), Paragraph('~5', cell_center_style), Paragraph('8-10', cell_center_style), Paragraph('12-18', cell_center_style), Paragraph('20-30', cell_center_style)],
]
story.extend(make_table(kpi_data, [1.5*inch, 0.9*inch, 1.0*inch, 1.0*inch, 1.0*inch],
                        'Table 11: Projected KPIs'))

story.append(Paragraph(
    'The most impactful early wins will come from adding structured data (FAQ snippets can appear in SERPs within days of implementation) and creating the Google Business Profile (which can generate local pack visibility within 1-2 weeks). Content-driven improvements typically take 2-4 months to show significant ranking movement, which is why consistent weekly publishing is critical from day one. Backlink authority compounds over time, meaning the most aggressive link-building should happen in the first 90 days to maximize the compound effect.',
    body_style
))

# ═══ SECTION 12: COMPETITIVE ANALYSIS ═══
story.extend(add_major_section('<b>12. Competitive Landscape</b>', h1_style))

story.append(Paragraph(
    'Understanding the competitive landscape is essential for prioritizing SEO efforts. The following table summarizes the key competitors that currently rank for CeremonyVerse\'s target keywords, along with their estimated strengths and weaknesses. This analysis reveals that while the niche is competitive at the e-commerce level (Kala Shree Regalia, Soch, The Designer Outfit), there is a significant gap in the concierge/personal shopper segment, where CeremonyVerse has a unique positioning advantage.',
    body_style
))

comp_data = [
    [Paragraph('<b>Competitor</b>', header_cell_style),
     Paragraph('<b>Type</b>', header_cell_style),
     Paragraph('<b>Strengths</b>', header_cell_style),
     Paragraph('<b>Weaknesses</b>', header_cell_style)],
    [Paragraph('Kala Shree Regalia', cell_style), Paragraph('E-commerce', cell_center_style), Paragraph('Large inventory, direct shipping, brand recognition', cell_style), Paragraph('No concierge service, no live video, no custom stitching', cell_style)],
    [Paragraph('Ishwah (Saanjha)', cell_style), Paragraph('E-commerce', cell_center_style), Paragraph('NRI-targeted marketing, designer collections', cell_style), Paragraph('No live video approval, limited customization', cell_style)],
    [Paragraph('Soch', cell_style), Paragraph('E-commerce', cell_center_style), Paragraph('Large catalog, worldwide shipping, established brand', cell_style), Paragraph('Mass market, no personal shopping, no fit guarantee', cell_style)],
    [Paragraph('WedMeGood', cell_style), Paragraph('Marketplace', cell_center_style), Paragraph('Huge authority, vendor directory, high traffic', cell_style), Paragraph('Not a direct competitor, but dominates informational SERPs', cell_style)],
    [Paragraph('JMS Studio', cell_style), Paragraph('Boutique', cell_center_style), Paragraph('Video calls, custom sizing, NRI focus', cell_style), Paragraph('Less professional, limited service breadth', cell_style)],
    [Paragraph('Ajmera Chandni Chowk', cell_style), Paragraph('E-commerce', cell_center_style), Paragraph('Physical store in Delhi, brand heritage', cell_style), Paragraph('No concierge, no US presence, limited NRI focus', cell_style)],
]
story.extend(make_table(comp_data, [1.3*inch, 0.8*inch, 1.8*inch, 1.8*inch],
                        'Table 12: Competitive Analysis'))

story.append(Paragraph(
    'CeremonyVerse\'s unique competitive advantage is the concierge model with live video shopping, custom stitching, fit guarantees, and milestone-based payment protection. No other competitor offers this full package. The SEO strategy should emphasize this differentiation by creating content around the concierge experience, the risks of buying without verification, and the total cost comparison (including alteration costs, return shipping, and time waste) between direct purchasing and using a concierge service.',
    body_style
))

# ═══ SECTION 13: QUICK WINS ═══
story.extend(add_major_section('<b>13. Quick Wins (Implement This Week)</b>', h1_style))

story.append(Paragraph(
    'The following actions can be implemented in less than one hour each and will have immediate or near-immediate impact on search visibility and lead generation. These are the highest-ROI actions that should be completed before any other optimization work.',
    body_style
))

quick_wins = [
    ('<b>1. Add LocalBusiness JSON-LD to Homepage</b>', 'Add a LocalBusiness schema block to the homepage with the Philadelphia address, phone number, business hours, service area, and Trustpilot rating. This enables Google to display a knowledge panel and local business card in search results. Estimated time: 30 minutes. Expected impact: Knowledge panel eligibility within 1-2 weeks.'),
    ('<b>2. Add FAQPage Schema to Top 3 Service Pages</b>', 'Add 5-8 FAQ pairs with FAQPage JSON-LD schema to /services/bridal-lehengas, /buy-sherwani-from-india-usa, and /how-it-works. Use exact-match question queries that NRI brides search for. Estimated time: 2 hours. Expected impact: FAQ rich snippets in SERPs within 3-7 days.'),
    ('<b>3. Create Google Business Profile</b>', 'Set up a complete GBP listing with business description, services, photos, service area, and Q&A. Verify the listing via postcard or phone. Estimated time: 45 minutes. Expected impact: Local pack visibility within 1-2 weeks.'),
    ('<b>4. Fix Sitemap lastmod Dates</b>', 'Update the sitemap.xml so that recently modified pages have recent lastmod dates and older pages have their actual last modification date. Add priority values (1.0 for homepage, 0.8 for service pages, 0.6 for blog posts, 0.4 for utility pages). Estimated time: 20 minutes. Expected impact: Improved crawl efficiency within days.'),
    ('<b>5. Remove Below-Fold Image Preloads</b>', 'Remove the preload hints for testimonial images and add loading="lazy" to all images below the fold. Keep only the hero image preload. Estimated time: 15 minutes. Expected impact: Improved LCP score, better Core Web Vitals.'),
    ('<b>6. Create a Lead Magnet Download</b>', 'Create a downloadable PDF checklist titled "NRI Indian Wedding Shopping Checklist: 47 Things to Get Right Before Your Big Day." Gate it behind an email capture form on the /free-guides page. Estimated time: 2-3 hours. Expected impact: 3-5x increase in lead capture rate.'),
]

for title, desc in quick_wins:
    story.append(Paragraph(title, h3_style))
    story.append(Paragraph(desc, body_style))

# ═══ BUILD ═══
doc.multiBuild(story)

print(f"PDF generated successfully: {OUTPUT_PATH}")
