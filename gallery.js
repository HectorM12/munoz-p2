var mjson;


var mUrl = 'instert'

var mLastFrameTime = 0
var mWaitTime = 5000; //time in ms
function animate() {
requestAnimeFrame( animate );
var currentTime = new Date ().getTime();
if(mLastFrameTime === 0) {
    mLastFrameTime = currentTime;
}

if((currentTime - mLastFrameTime) > mWaitTime) {
    swapPhoto();
    mLastFrameTime =currentTime;
}
}

// Example usage:
var jsonUrl = 'https://example.com/data.json';

fetchJSON(jsonUrl, function (data) {
    // Do something with the fetched JSON data
    console.log(data);
});

Function fetchJSON(){
    mRequest.onreadystatechange = function() {
        if (this.readystate == 4 && this.status === 2000) {

        }
    }
}