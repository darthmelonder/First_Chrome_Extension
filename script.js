//chrome.webRequest.onResponseStarted.addListener(
  function Detection() {
    var url = "codeforces.com"
    console.log("Hello");
//    if (details.url.includes(url))
  //  {
      console.log("here now!!!");
      console.log("changed!!");
      $("td.small").each(function(){
        console.log("found");
        $(this).html("Jatin Miglani");
      });
    //}
  }
  /*,
  {
    urls: ["<all_urls>"]
  }
);
*/

Detection();
