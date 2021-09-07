function SetChrome(object) {
    chrome.storage.local.set(object);
}
function Get(atr) {
    chrome.storage.local.get(atr, (data) => {
        return data;
    });
}

chrome.runtime.onInstalled.addListener(() => {
    SetChrome({ name: "maciek" });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // console.log(tabId, changeInfo, tab);

    if (changeInfo.status === "complete")
        chrome.scripting
            .insertCSS({ target: { tabId }, files: ["./src/css/inject.css"] })
            .then(() => {
                console.log("injected css!");
            })
            .catch((err) => console.log(err));
    chrome.scripting
        .executeScript({ target: { tabId }, files: ["./foreground.js"] })
        .then(() => {
            console.log("injected!");
        })
        .catch((err) => console.log(err));
});
