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


function swapPhoto() {
    document.getElementById('photo').src = mimages[mCurrentindex].url;

    console.log('swap photo');
}

function swapPhoto() {
    document.getElementById('photo').src = mImages[mCurrentIndex].url;
    document.getElementsByClassName[0].innerHTML = mImages[0].innerHtml
}





var mRequest = new XMLHttpRequest();
function fetchJSON()
{
    mRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            = mRequest.responseText;
        }
    };
    mRequest.open("GET", mURl, true);
    mRequest.send();
}



function GalleryImage() {

let location;

let description;

let date;

let url;
}-

iterateJSON()
{
    for(let i = 0; i < mjson.images.length; i++)
{
    mImages[i] = new GalleryImage();
    mImages[i].location = mJson.images.imgLocation;
    mImages[i].descrption = mJson.images.imgLocation;
    mImages[i].date = mJson.images.imgLocation;
    mImages[i].url = mJson.images.imgLocation;
}
}

if(
    mCurrentIndex >= mJson.images.length
) {
    mCurrentIndex = 0
}

function GalleryImage(location, description, date, img) {
    this.location = location;
    this.description = description;
    this.date = date;
    this.img = img;
  }
  
  // Example usage
  var myGalleryImage = new GalleryImage(
    "City Park",
    "Beautiful sunset in the park",
    "2024-01-04",
    "https://example.com/sunset.jpg"
  );
  
  // Accessing properties
  console.log("Location: " + myGalleryImage.location);
  console.log("Description: " + myGalleryImage.description);
  console.log("Date: " + myGalleryImage.date);
  console.log("Image URL: " + myGalleryImage.img);