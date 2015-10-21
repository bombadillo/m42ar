chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  if changeInfo.status == 'complete'
    console.log tab.url
    if tab.url.match 'mind42.com/mindmap'
      console.log "match"
      chrome.tabs.executeScript(null, {file: "removeAds.js"})
