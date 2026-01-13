
// Source - https://stackoverflow.com/a
// Posted by Pakainfo
// Retrieved 2026-01-07, License - CC BY-SA 4.0

    // your-script.js

// An array of image URLs
const imageUrls = [
    'images/dailies1.jpg',
    'images/dailies2.jpg',
    'images/dailies3.jpg',
    'images/dailies4.jpg',
    'images/dailies5.jpg',
    'images/dailies6.jpg',
    'images/dailies7.jpg',
    'images/dailies8.jpg',
    'images/dailies9.jpg',
    'images/dailies10.jpg',
    'images/dailies11.jpg',
    'images/dailies12.jpg',
    'images/dailies15.jpg',
    'images/dailies16.jpg',
    'images/dailies17.jpg',
    'images/dailies18.jpg',
    'images/dailies19.jpg',
    'images/dailies20.jpg',
    'images/dailies22.jpg',
    'images/dailies23.jpg',
    'images/dailies24.jpg',
    'images/dailies25.jpg',
    'images/dailies26.jpg',
    'images/dailies27.jpg',
    'images/dailies28.jpg',
    'images/dailies30.jpg',
    'images/dailies(1).jpg',
    'images/dailies(2).jpg',
'images/dailies(3).jpg',
'images/dailies(4).jpg',
'images/dailies(5).jpg',
'images/dailies(6).jpg',
'images/dailies(7).jpg',
'images/dailies(8).jpg',
'images/dailies(9).jpg',
'images/dailies(10).jpg',
'images/dailies(11).jpg',
'images/dailies(12).jpg',
'images/dailies(13).jpg',
'images/dailies(14).jpg',
'images/dailies(15).jpg',
'images/dailies(16).jpg',
'images/dailies(17).jpg',
'images/dailies(18).jpg',
'images/dailies(19).jpg',
'images/dailies(20).jpg',
'images/dailies(21).jpg',
'images/dailies(22).jpg',
'images/dailies(23).jpg',
'images/dailies(24).jpg',
'images/dailies(25).jpg',
'images/dailies(26).jpg',
'images/dailies(27).jpg',
'images/dailies(28).jpg',
'images/dailies(29).jpg',
'images/dailies(30).jpg',
'images/dailies(31).jpg',
'images/dailies(32).jpg',
'images/dailies(33).jpg',
'images/dailies(34).jpg',
'images/dailies(35).jpg',
'images/dailies(36).jpg',
'images/dailies(37).jpg',
'images/dailies(38).jpg',
'images/dailies(39).jpg',

    
    // Add more image URLs here
];

// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Function to set a random image source
function setRandomImage() {
    const imgElement = document.getElementById('randomImage');
    const randomIndex = getRandomIndex(imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    imgElement.src = randomImageUrl;
}

// Call the function to set the initial random image
setRandomImage();

