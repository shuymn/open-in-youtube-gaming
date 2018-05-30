enum MenuId {
  LinkToGamingYoutube = "LinkToGamingYoutube",
  LinkToWwwYoutube = "LinkToWwwYoutube"
}

chrome.contextMenus.create({
  documentUrlPatterns: ["https://www.youtube.com/watch*", "https://www.youtube.com/channel/*/live"],
  id: MenuId.LinkToGamingYoutube,
  title: chrome.i18n.getMessage("menuLinkToGamingYoutube")
});

chrome.contextMenus.create({
  documentUrlPatterns: ["https://gaming.youtube.com/watch*", "https://gaming.youtube.com/channel/*/live"],
  id: MenuId.LinkToWwwYoutube,
  title: chrome.i18n.getMessage("menuLinkToWwwYoutube")
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case MenuId.LinkToGamingYoutube:
      chrome.tabs.update({ url: convertToGamingYoutube(info.pageUrl) });
      break;
    case MenuId.LinkToWwwYoutube:
      chrome.tabs.update({ url: convertToWwwYoutube(info.pageUrl) });
      break;
    default:
      break;
  }
});

function convertToGamingYoutube(url: string): string {
  return url.replace(/www/, "gaming");
}

function convertToWwwYoutube(url: string): string {
  return url.replace(/gaming/, "www");
}
