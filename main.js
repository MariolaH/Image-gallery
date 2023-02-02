const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file */

const altText = {
  'pic1.jpg': "An eye,",
  'pic2.jpg': "Sea Shell",
  'pic3.jpg': "Purple and White flowers",
  'pic4.jpg': "Egyptian Images",
  'pic5.jpg': "Butterfly on a leaf"
}

/* Looping through images */

for (const image of imgArray) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`)
  newImage.setAttribute('alt', altText[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src
    displayedImage.alt = e.target.alt
  }
  );
}
// Here is how to do it with a regular loop

// for (let i = 0; i < imgArray.length; i++) {
//   const newImage = document.createElement('img');
//   newImage.setAttribute('src', `images/${imgArray[i]}`)
//   newImage.setAttribute('alt', altText[i]);
//   thumbBar.appendChild(newImage);
//   newImage.addEventListener('click', e => {
//     displayedImage.src = e.target.src
//     displayedImage.alt = e.target.alt
//   }
//   );
// }

/* Wiring up the Darken/Lighten button */


function updateOverlay(event) {
  const curBtn = event.target;
  const btnClass = curBtn.getAttribute("class");
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
btn.addEventListener("click", updateOverlay);