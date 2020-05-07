
var receivedMessages = 0;
var sentMessages = 0;
var invalidMessages = 0;
var messageFrequency = 200;

function addIframe() {
    var iframe = document.createElement("iframe");
    if (window.location.origin == 'http://www.testsite1.com:3000') {
        iframe.src = "http://www.testsite2.com:3000/#" + window.location.origin;
    } else {
        iframe.src = "http://www.testsite1.com:3000/#" + window.location.origin;
    }
    iframe.width = 400;
    iframe.height = 400;
    document.body.appendChild(iframe);
}

function onMessage(event) {
    var receivedObj = JSON.parse(event.data);
    var diff = Date.now() - receivedObj.time;
    if (diff < 0) {
        console.error(diff);
        $("#invalid").val(++invalidMessages);
    } else {
        console.log(diff)
    }
    $("#received").val(++receivedMessages);
    setTimeout(function() {
        $("#sent").val(++sentMessages);
        var sendObj = {time: Date.now()};
        event.source.postMessage(JSON.stringify(sendObj), event.origin);
    }, messageFrequency);
}

$(document).ready(function() {
    $("#pageorigin").text(window.location.origin);
    $("#addiframe").click(addIframe);
    window.addEventListener("message", onMessage);
    if (window.parent !== window.self) {
        var obj = {time: Date.now()};
        window.parent.postMessage(JSON.stringify(obj), window.location.hash.replace("#", ""));
    }
});

