# Talking Points Generator (Google Apps Script)

This Google Apps Script creates weekly talking points documents for multiple venues, based on a simple user dialog. It was designed to streamline recurring document creation workflows for teams that need templated outputs on a regular basis — like church tech teams, schools, or meeting organizers.

## Features

- 📆 Specify a start date and number of weeks
- 🏢 Choose from multiple venues or generate for all
- 💬 Custom HTML dialog for clean user input
- ⏳ Progress bar shows document generation status
- 🗂 Automatically creates documents in a selected folder

## 🚀 How to Add This Script to Your Template

1. **Create a new Google Doc** that you want to use as your template.
2. Go to **Extensions > Apps Script**.
3. Delete any placeholder code and **paste in the contents of `code.gs`**.
4. Modify the code to specify the correct document id for the template.
5. In the Apps Script sidebar, click the `+` icon next to "Files" and choose **HTML > dialog.html**.
6. Paste in the contents of `MainDialog.html`.
7. Save your script project.
8. Reload the Google Doc. The dialog should appear.

📌 The script uses the current document as the template — each generated doc will be a copy of it, filled in with weekly metadata.

## Files

- `code.gs` – Main script logic (handles document creation, UI, and date logic)
- `MainDialog.html` – Custom HTML dialog for user input and progress display

## Example Use Case

Generate talking points for three venues across the next six weeks starting from this Sunday. The tool will:

1. Create one document per venue per week
2. Pre-fill each doc with relevant placeholders and titles
3. Organize the output in your chosen Google Drive folder

## Customization

You can edit the `generateDoc()` function to:
- Change the document layout
- Add custom placeholders (e.g., message title, speaker, volunteers)
- Adjust formatting or section headers

## License

MIT License — do whatever you want with it.
