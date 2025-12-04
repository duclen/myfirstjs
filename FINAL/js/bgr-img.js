const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.gif", "7.gif"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);