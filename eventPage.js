var contextMenuItem = {
    "id": "speak(BaiduApi)",
    "title": "speak(BaiduApi)",
    "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "speak(BaiduApi)" && clickData.selectionText){
       var audio = new Audio("http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&per=4&tex="
                               +encodeURI(clickData.selectionText));
       audio.play();

    }
})



