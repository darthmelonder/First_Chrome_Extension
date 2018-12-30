chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
  if (changeInfo.status=='complete'){
    chrome.tabs.executeScript(
      {
        file: 'jquery-3.3.1.min.js'
      },
      function(){
        chrome.tabs.executeScript(
          {
            file: 'script.js'
          }
        );
      }
    );
    }
})
