// Generated by CoffeeScript 1.9.0
(function() {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      console.log(tab.url);
      if (tab.url.match('mind42.com/mindmap')) {
        console.log("match");
        return chrome.tabs.executeScript(null, {
          file: "removeAds.js"
        });
      }
    }
  });

}).call(this);
