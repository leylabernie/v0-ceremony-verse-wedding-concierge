"""Build the public toolkit PDF from JSON exported by lib/ceremony-toolkit.ts.

Requires reportlab. Usage: python3 scripts/build-ceremony-toolkit.py input.json output.pdf
"""
import json
import sys
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

data = json.loads(Path(sys.argv[1]).read_text())
output = Path(sys.argv[2]); output.parent.mkdir(parents=True, exist_ok=True)
ink = colors.HexColor('#252420'); gold = colors.HexColor('#776038'); pale = colors.HexColor('#F4EFE6')
for name, filename in [('CVSans', 'DejaVuSans.ttf'), ('CVSansBold', 'DejaVuSans-Bold.ttf'), ('CVSerif', 'DejaVuSerif.ttf'), ('CVSerifBold', 'DejaVuSerif-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/' + filename))
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='CVTitle', fontName='CVSerif', fontSize=26, leading=30, textColor=ink, spaceAfter=13))
styles.add(ParagraphStyle(name='CVH2', fontName='CVSerifBold', fontSize=15, leading=19, textColor=ink, spaceBefore=12, spaceAfter=6))
styles.add(ParagraphStyle(name='CVBody', fontName='CVSans', fontSize=10, leading=15, textColor=ink, spaceAfter=9))
styles.add(ParagraphStyle(name='CVSmall', fontName='CVSans', fontSize=8.7, leading=12.5, textColor=ink, spaceAfter=6))
styles.add(ParagraphStyle(name='CVEyebrow', fontName='CVSansBold', fontSize=8, leading=12, textColor=gold, spaceAfter=10))

def clean(text):
    return text.replace('–', '-').replace('—', '-').replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"').replace('…', '...')

def p(text, style='CVBody'):
    return Paragraph(escape(clean(text)).replace('\n', '<br/>'), styles[style])

story = []
def title(kicker, text, sub):
    story.extend([p(kicker.upper(), 'CVEyebrow'), p(text, 'CVTitle'), p(sub)])

def table(rows, widths):
    t = Table([[p(c, 'CVSmall') for c in row] for row in rows], colWidths=widths, hAlign='LEFT')
    t.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BACKGROUND', (0,0), (-1,-1), pale), ('LINEBELOW', (0,0), (-1,-1), .5, colors.white), ('LEFTPADDING',(0,0),(-1,-1),10), ('RIGHTPADDING',(0,0),(-1,-1),10), ('TOPPADDING',(0,0),(-1,-1),7), ('BOTTOMPADDING',(0,0),(-1,-1),6)]))
    return t

title('CeremonyVerse / 01 / Your working timeline', 'A ceremony with room to breathe', 'A practical planning toolkit for destination weddings in Mexico, Jamaica and Punta Cana.')
story.append(p('Start with your people, your space and your officiant. The online builder creates a personalised text file; this PDF is your reusable companion.'))
story.append(p('Illustrative timeline: 100 guests, 4 PM ceremony, 90-minute ceremony block. All times are local to the venue. Your pandit and families determine the rituals and actual duration.', 'CVSmall'))
notes = ['Check contracted access, weather backup and setup readiness.', 'Test microphones; confirm names, cues, rings and ritual materials.', 'Staff the welcome point; offer water and accessible seating.', 'If included: confirm the route, length and sound permission.', 'Start the ceremony block agreed with your officiant and families.', 'Announce the next location and where guests can find assistance.', 'Assign a family-photo coordinator and a guest-support lead.', 'Confirm catering, next-space access, overtime and strike.']
story.append(table([[row['time'], row['title'] + '\n' + notes[i]] for i,row in enumerate(data['timeline'])], [86,418]))
story.append(p('Before sharing the final schedule', 'CVH2'))
story.append(p('Confirm access and strike windows, the music cutoff, the weather decision deadline and the exact backup space in writing. These suggested checkpoints do not grant venue access or confirm capacity.'))
story.append(p('Build or revise your personalised version: www.ceremonyverse.com/planning-tools/ceremony-timeline/', 'CVSmall'))
story.append(PageBreak())

title('CeremonyVerse / 02 / Symbolic script / Part one', 'Your modern 12-minute ceremony', 'An original script with personal prompts. The suggested blocks total 12 minutes, including music, transitions and pauses. Rehearse aloud; actual timing will vary.')
story.append(p('This is a symbolic celebration. It does not establish authority to perform a legal marriage and does not replace a Hindu ceremony. Confirm any legal ceremony requirements with the relevant local authority.', 'CVSmall'))
for segment in data['segments'][:4]:
    story.append(p(f"{segment['title']} / {segment['minutes']} min", 'CVH2'))
    story.append(p(segment['direction']))
story.append(p('Personal story notes: ____________________________________________\n________________________________________________________________', 'CVSmall'))
story.append(PageBreak())

title('CeremonyVerse / 03 / Symbolic script / Part two', 'Promises, rings and celebration', 'Replace every [Name] and bracketed prompt before the rehearsal. Bracketed directions guide the officiant; they are not spoken aloud.')
for segment in data['segments'][4:]:
    story.append(p(f"{segment['title']} / {segment['minutes']} min", 'CVH2'))
    story.append(p(segment['direction']))
story.append(p('The timing check', 'CVH2'))
story.append(p('1 + 1.5 + 2 + 1 + 3 + 1.5 + 1 + 1 = 12 minutes. Time the personal story, reading and vows separately. If a ritual or translation is added, extend the schedule instead of rushing the couple.'))
story.append(PageBreak())

title('CeremonyVerse / 04 / Friend officiant guide', 'Be a calm, prepared voice', 'The friend officiant role starts with the couple\'s approval and a shared rehearsal plan.')
steps = [
('Agree the role', 'Confirm whether you are leading a symbolic celebration or participating alongside another officiant. If a legal ceremony is intended, the couple must verify requirements and the officiant\'s authority with the relevant local authority.'),
('Prepare the words', 'Ask how each name is pronounced, how the couple wants to be introduced, and which traditions or acknowledgements matter. Get approval for the complete script. Do not add surprise stories or jokes.'),
('Rehearse the handoffs', 'Walk the processional, microphone handoffs, reading, vows, rings, kiss if wanted and recessional. Agree clear music cues and keep a printed backup of the final script.'),
('Check the space', 'Ask the venue team where to stand, where cables run and how to reach the weather backup. Confirm water, shade or shelter, accessible seating and the person authorised to change the plan.'),
('Lead gently', 'Speak slowly, leave room for emotion and pause if a guest or participant needs help. At the end, tell guests exactly where to go and who can assist them.'),
]
for h,b in steps:
    story.append(KeepTogether([p(h, 'CVH2'),p(b, 'CVSmall')]))
story.append(p('Your rehearsal card', 'CVH2'))
story.append(table([['Decision / cue', 'Named owner or confirmed detail'], ['Final script approved by', '________________________________'], ['Music and microphone cues', '________________________________'], ['Rings / ritual materials', '________________________________'], ['Weather decision / deadline', '________________________________'], ['Guest directions / assistance', '________________________________']], [215,289]))
story.append(Spacer(1, 10))
story.append(p('Need help joining the pieces? Request a free 30-minute consultation or explore the $300 Feasibility Plan at www.ceremonyverse.com. Email: hello@ceremonyverse.com', 'CVSmall'))

def page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#D9CFBF')); canvas.line(54, 42, 558, 42)
    canvas.setFont('CVSans', 7); canvas.setFillColor(gold)
    canvas.drawString(54, 29, 'CEREMONYVERSE  /  Free planning toolkit  /  September 2026')
    canvas.drawRightString(558, 29, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(output), pagesize=letter, rightMargin=54, leftMargin=54, topMargin=43, bottomMargin=54, title='CeremonyVerse Ceremony Timeline, Symbolic Script & Friend Officiant Guide', author='CeremonyVerse')
doc.build(story, onFirstPage=page, onLaterPages=page)
print(str(output))
