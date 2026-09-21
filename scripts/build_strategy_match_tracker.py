"""
Builds public/downloads/strategy-match-tracker.xlsx — the fill-in workbook
delivered to Resort Strategy Matcher leads (source: "strategy-matcher" in
/api/lead-capture) via the download link in lib/emails/strategy-match-confirmation.tsx.

The email promises: room-block matrix, dietary deadline dates, traveling-vendor
meal count. This workbook provides exactly those three working sheets plus a
read-me. It is deliberately a fill-in tool, NOT pre-filled per lead (leads'
answers are summarized in the email itself).

Run from the repo root:  python scripts/build_strategy_match_tracker.py
"""

from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

GOLD = "7A6841"
DARK = "1F1F1F"
PAPER = "F8F6F2"
BORDER_C = "E6DFD5"

HEADER_FILL = PatternFill("solid", fgColor=GOLD)
NOTE_FILL = PatternFill("solid", fgColor=PAPER)
SUMMARY_FILL = PatternFill("solid", fgColor="F4EEE4")
HEADER_FONT = Font(name="Calibri", bold=True, color="FFFFFF", size=11)
TITLE_FONT = Font(name="Calibri", bold=True, size=14, color=DARK)
LABEL_FONT = Font(name="Calibri", bold=True, size=10, color="5E4A40")
THIN = Side(style="thin", color=BORDER_C)
BOX = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
WRAP = Alignment(vertical="top", wrap_text=True)
CENTER = Alignment(horizontal="center", vertical="center", wrap_text=True)

GUEST_ROWS = 150  # formulas and validation cover rows 4..(3+GUEST_ROWS)


def style_header(ws, row, headers, widths):
    for col, (title, width) in enumerate(zip(headers, widths), start=1):
        cell = ws.cell(row=row, column=col, value=title)
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = CENTER
        cell.border = BOX
        ws.column_dimensions[get_column_letter(col)].width = width
    ws.row_dimensions[row].height = 28


def add_dropdown(ws, col_letter, first_row, last_row, options):
    dv = DataValidation(type="list", formula1='"' + ",".join(options) + '"', allow_blank=True)
    dv.error = "Please pick a value from the list."
    dv.errorTitle = "Invalid entry"
    ws.add_data_validation(dv)
    dv.add(f"{col_letter}{first_row}:{col_letter}{last_row}")


def build_readme(ws):
    ws.column_dimensions["A"].width = 100
    lines = [
        ("Destination Wedding Strategy Tracker", TITLE_FONT),
        ("Companion to the CeremonyVerse Resort Strategy Matcher — Mini Patel, CeremonyVerse", LABEL_FONT),
        ("", None),
        ("How this tracker fits the Strategy Matcher", LABEL_FONT),
        ("Your Strategy Matcher answers are summarized in the email this tracker came with. "
         "This workbook is where those answers become a working document you can bring to your "
         "resort negotiation and keep updated as quotes arrive.", None),
        ("", None),
        ("Sheet 1 — Room-Block Matrix:  one row per guest room. The summary block at the top counts "
         "dietary requirements and accessibility needs live as you type, so you know exactly what to "
         "confirm in writing before signing the resort proposal.", None),
        ("Sheet 2 — Dietary Deadlines:  resorts need final food counts 7–21 days before each event "
         "(every property is different — ask). This sheet tracks each event's count and whether the "
         "resort confirmed it in writing.", None),
        ("Sheet 3 — Vendor Meal Count:  outside vendors on site more than ~4 hours often trigger "
         "resort vendor meals at the vendor rate. List your traveling vendors here and confirm the "
         "policy before signing — not at the final invoice.", None),
        ("", None),
        ("Notes", LABEL_FONT),
        ("Deadlines, rates, and policies vary by property and change over time. Verify every number "
         "directly with your resort and rely only on the current written event contract.", None),
        ("Planning help: https://www.ceremonyverse.com/planning-tools/  ·  Free cost guide: https://www.ceremonyverse.com/costs/", None),
        ("Guests can book their own rooms at https://ceremonyversetravel.com", None),
        ("CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578.", None),
    ]
    for i, (text, font) in enumerate(lines, start=1):
        cell = ws.cell(row=i, column=1, value=text)
        cell.alignment = WRAP
        if font:
            cell.font = font
        ws.row_dimensions[i].height = None if len(text) < 90 else 30
    ws.sheet_view.showGridLines = False


def build_room_matrix(ws):
    ws.sheet_view.showGridLines = False
    # Live summary block
    ws["A1"] = "Room-Block Matrix — live counts update as you fill the rows below"
    ws["A1"].font = TITLE_FONT
    last = 3 + GUEST_ROWS
    diet_rng = f"$F${4}:$F${last}"
    access_rng = f"$H${4}:$H${last}"
    booked_rng = f"$I${4}:$I${last}"
    summaries = [
        ("Rooms listed", f"=COUNTA($A$4:$A${last})"),
        ("Jain meals", f'=COUNTIF({diet_rng},"Jain")'),
        ("Satvik meals", f'=COUNTIF({diet_rng},"Satvik")'),
        ("Vegetarian", f'=COUNTIF({diet_rng},"Vegetarian")'),
        ("Vegan", f'=COUNTIF({diet_rng},"Vegan")'),
        ("Accessibility needs", f"=COUNTA({access_rng})"),
        ("Rooms booked", f'=COUNTIF({booked_rng},"Yes")'),
    ]
    for i, (label, formula) in enumerate(summaries):
        col = 1 + i
        lab = ws.cell(row=2, column=col, value=label)
        lab.font = LABEL_FONT
        lab.fill = SUMMARY_FILL
        lab.alignment = CENTER
        lab.border = BOX
        val = ws.cell(row=3, column=col, value=formula)
        val.font = Font(bold=True, size=12, color=GOLD)
        val.alignment = CENTER
        val.border = BOX

    headers = ["Guest name", "Family side", "Building request", "Floor / room request", "Room type",
               "Nights", "Dietary requirement", "Accessibility need", "Booked?", "Confirmation #"]
    widths = [24, 12, 18, 20, 16, 8, 18, 22, 10, 18]
    style_header(ws, 4, headers, widths)

    diet_dv = DataValidation(type="list",
                             formula1='"None,Jain,Satvik,Vegetarian,Vegan,No beef,Other — see notes"',
                             allow_blank=True)
    ws.add_data_validation(diet_dv)
    diet_dv.add(f"F5:F{last}")
    add_dropdown(ws, "B", 5, last, ["Bride", "Groom", "Other"])
    add_dropdown(ws, "I", 5, last, ["Yes", "No", "Pending"])

    for r in range(5, last + 1):
        for c in range(1, len(headers) + 1):
            ws.cell(row=r, column=c).border = BOX
    ws.freeze_panes = "A5"


def build_dietary_deadlines(ws):
    ws.sheet_view.showGridLines = False
    ws["A1"] = "Dietary Deadlines — ask each resort for its final-count deadline per event, in writing"
    ws["A1"].font = TITLE_FONT
    headers = ["Event", "Event date", "Expected headcount", "Adults / elders", "Children",
               "Jain", "Satvik", "Other veg", "Final count due to resort (date)",
               "Count sent to resort (date)", "Confirmed in writing?", "Notes"]
    widths = [22, 12, 14, 14, 10, 8, 8, 10, 20, 20, 14, 30]
    style_header(ws, 3, headers, widths)
    events = ["Mehndi", "Haldi", "Sangeet", "Baraat & ceremony", "Reception",
              "Post-wedding brunch", "Other event 1", "Other event 2"]
    add_dropdown(ws, "K", 4, 40, ["Yes", "No", "Pending"])
    for r, event in enumerate(events, start=4):
        ws.cell(row=r, column=1, value=event).font = Font(bold=True)
        for c in range(1, len(headers) + 1):
            ws.cell(row=r, column=c).border = BOX
    for r in range(len(events) + 4, 41):
        for c in range(1, len(headers) + 1):
            ws.cell(row=r, column=c).border = BOX
    ws.freeze_panes = "A4"


def build_vendor_meals(ws):
    ws.sheet_view.showGridLines = False
    ws["A1"] = ("Traveling Vendor Meal Count — confirm the vendor-meal policy and rate "
                "before signing (vendors on site >4 hours often trigger it)")
    ws["A1"].font = TITLE_FONT
    headers = ["Vendor / company", "Role", "On-property dates", "People on site", "Days on site",
               "Meals per person per day", "Total meals", "Dietary notes", "Policy confirmed in writing?"]
    widths = [26, 18, 22, 12, 12, 16, 12, 26, 18]
    style_header(ws, 3, headers, widths)
    roles = ["Decorator / mandap", "DJ / AV", "Photographer", "Videographer", "Mehndi artist",
             "Pandit / officiant", "Dhol / baraat", "Hair & makeup", "Other"]
    add_dropdown(ws, "B", 4, 30, roles)
    add_dropdown(ws, "I", 4, 30, ["Yes", "No", "Pending"])
    for r in range(4, 31):
        # Total meals = people x days x meals/day when all three are filled
        ws.cell(row=r, column=7, value=f'=IF(COUNT(D{r}:F{r})=3,D{r}*E{r}*F{r},"")').font = Font(bold=True, color=GOLD)
        for c in range(1, len(headers) + 1):
            ws.cell(row=r, column=c).border = BOX
    ws.freeze_panes = "A4"


def main():
    wb = Workbook()
    readme = wb.active
    readme.title = "Read Me"
    build_readme(readme)
    build_room_matrix(wb.create_sheet("Room-Block Matrix"))
    build_dietary_deadlines(wb.create_sheet("Dietary Deadlines"))
    build_vendor_meals(wb.create_sheet("Vendor Meal Count"))
    out = Path(__file__).resolve().parents[1] / "public" / "downloads" / "strategy-match-tracker.xlsx"
    wb.save(out)
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
