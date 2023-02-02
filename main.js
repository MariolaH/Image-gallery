const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ['images/pic1.jpg', 'images/pic2.jpgg', 'iimages/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];


/* Declaring the alternative text for each image file */

const altText = {
    'images/pic1.jpg' : "An eye,",
    'images/pic2.jpg' : "Sea Shell",
    'images/pic3.jpg' : "Purple and White flowers",
    'images/pic4.jpg' : "Egyptian Images",
    'images/pic5.jpg' : "Butterfly on a leaf"
}

/* Looping through images */

for (const image of imgArray) {
    const newImage = document.createAttribute('img');
newImage.setAttribute('src', imgArray);
newImage.setAttribute('alt', altText);
thumbBar.appendChild(newImage);
newImage.addEventlistner ('click', () ==> {
displayedImage.src = imgArray
displayedImage.alt = altText
}
);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", updateOverlay);
function updateOverlay(event) {
  const curBtn = event.target;
  const btnClass = curBtn.setAttribute("class");
  if (btnClass === "dark") {
    curBtn.setAttribute("class", "light");
    curBtn.textContent = "lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    curBtn.setAttribute("class", "dark");
    curBtn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}