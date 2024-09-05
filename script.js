// Initialize the slide index

let currentSlideIndex = 0;

// Creating the show and hide logic
function showSlide(index){
const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot")

// condition to check the index is greater than or equal to the number of slides.
// if it is true then it will reset to the currentSlideIndex which is first image.
// this will loop back to the beginning if the user clicks next on the last slide
if(index >= slides.length){
    currentSlideIndex = 0;
}

// condition to check that whether the index is less than or equal to zero then it will push one index back from the total slides length.
else if(index < 0){
    currentSlideIndex = slides.length - 1;
}

// hide all slides
for(let i=0; i<slides.length; i++){
    slides[i].style.display = "none";
}
for(let i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace("dot-active", "")
}

// display the current slide and set the corresponding dot as active
slides[currentSlideIndex].style.display = "block";
dots[currentSlideIndex].className += " dot-active";



//Level 2 script
//Assigning correct image to src while popupping up image
const PoppedImg = document.getElementById("popup-image");
PoppedImg.src = slides[currentSlideIndex].src;

}


// Function to change slide
function changeSlide(n){
    showSlide(currentSlideIndex += n);
}


// Function to jump to a specific slide
function currentSlide(n){
    showSlide(currentSlideIndex = n);
}


// Level 2 script for showing popup
//Add this below two lines for showing popup
function openPopup(){
    const openIt = document.getElementById('imagePopup');
    openIt.style.display = "flex";
}

function closePopup(){
    const closePopup = document.getElementById('imagePopup');
    closePopup.style.display = "none";
}


// Initial display setup
showSlide(currentSlideIndex);
