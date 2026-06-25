# XLSX Skill

Comprehensive guidelines for working with Excel spreadsheets: creation, editing, and analysis workflows.

## Key Requirements

**Professional Standards**: All Excel deliverables must use consistent professional fonts and contain zero formula errors (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?).

**Financial Model Color Coding**:
- Blue text for user-changeable inputs
- Black text for formulas
- Green text for internal worksheet links
- Red text for external file references
- Yellow backgrounds for critical assumptions

**Critical Rule — Use Formulas, Not Hardcoded Values**: Always use Excel formulas instead of calculating values in Python and hardcoding them. This keeps spreadsheets dynamic and updateable.

## Technical Workflow

1. Use **pandas** for data analysis and basic operations
2. Use **openpyxl** for formulas and formatting
3. Run `scripts/recalc.py` to recalculate all formulas after creation/modification
4. Verify zero errors in the output

## Formula Documentation

Hardcoded values require source citations including:
- Document type
- Date
- Specific reference
- URL when applicable

## Number Formatting Standards

- Years as text
- Currency with "$" and units specified
- Zeros displayed as "-"
- Percentages at 0.0% format
- Negative numbers in parentheses

The emphasis is that formulas remain preserved and dynamic, enabling spreadsheets to automatically recalculate when source data changes.
