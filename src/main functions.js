function doGet(e) 
{
  if (!e.parameter.page) 
  {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Checkbook')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page'])
    .evaluate()
    .setTitle('Checkbook')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}

function getScriptUrl() {
  return ScriptApp.getService().getUrl();
}

function include(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .getContent();
}