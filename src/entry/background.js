import { isMatchingAMap } from './maps';

chrome.tabs.onUpdated.addListener(function(tabId, _changeInfo, tab) {
  if (isMatchingAMap(tab.url)) {
    chrome.pageAction.show(tabId);
  } else {
    chrome.pageAction.hide(tabId);
  }
});
