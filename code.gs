function myFunction() {
  const template = HtmlService.createTemplateFromFile('MainDialog');
  const html = template.evaluate().setWidth(400).setHeight(350);
  DocumentApp.getUi().showModalDialog(html, 'Create Talking Points');
}

function createSingleDocument(task) {
  const templateDocId = 'DOCUMENTID'; // replace with your real template id
  const localDate = Utilities.parseDate(task.date, Session.getScriptTimeZone(), "yyyy-MM-dd");
  const documentDate = Utilities.formatDate(localDate, Session.getScriptTimeZone(), "MM/dd/yyyy");
  const formattedName = Utilities.formatDate(localDate, Session.getScriptTimeZone(), "MMMM dd, yyyy");

  const name = `Talking Points - ${formattedName} (${task.short})`;

  const documentId = DriveApp.getFileById(templateDocId).makeCopy().getId();
  DriveApp.getFileById(documentId).setName(name);

  const doc = DocumentApp.openById(documentId);
  const body = doc.getBody();
  const header = doc.getHeader();

  if (body) {
    body.replaceText('##VENUE##', task.full);
    body.replaceText('##DATE##', documentDate);
  }

  if (header) {
    header.replaceText('##VENUE##', task.full);
    header.replaceText('##DATE##', documentDate);
  }
}
