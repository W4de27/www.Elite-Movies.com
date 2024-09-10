document.getElementById("btnleft1").addEventListener("click", function () {
  const box1 = document.querySelector(".box1");
  box1.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright1").addEventListener("click", function () {
  const box1 = document.querySelector(".box1");
  box1.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 2 ####################

document.getElementById("btnleft2").addEventListener("click", function () {
  const box2 = document.querySelector(".box2");
  box2.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright2").addEventListener("click", function () {
  const box2 = document.querySelector(".box2");
  box2.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 3 ####################

document.getElementById("btnleft3").addEventListener("click", function () {
  const box3 = document.querySelector(".box3");
  box3.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright3").addEventListener("click", function () {
  const box3 = document.querySelector(".box3");
  box3.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 4 ####################

document.getElementById("btnleft4").addEventListener("click", function () {
  const box4 = document.querySelector(".box4");
  box4.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright4").addEventListener("click", function () {
  const box4 = document.querySelector(".box4");
  box4.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 5 ####################

document.getElementById("btnleft5").addEventListener("click", function () {
  const box5 = document.querySelector(".box5");
  box5.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright5").addEventListener("click", function () {
  const box5 = document.querySelector(".box5");
  box5.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 6 ####################

document.getElementById("btnleft6").addEventListener("click", function () {
  const box6 = document.querySelector(".box6");
  box6.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright6").addEventListener("click", function () {
  const box6 = document.querySelector(".box6");
  box6.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 7 ####################

document.getElementById("btnleft7").addEventListener("click", function () {
  const box7 = document.querySelector(".box7");
  box7.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright7").addEventListener("click", function () {
  const box7 = document.querySelector(".box7");
  box7.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// ############################ article 8 ####################

document.getElementById("btnleft8").addEventListener("click", function () {
  const box8 = document.querySelector(".box8");
  box8.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.getElementById("btnright8").addEventListener("click", function () {
  const box8 = document.querySelector(".box8");
  box8.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

const ball = document.querySelector(".ball");
const items = document.querySelectorAll(
  ".head , .ar1,.ar2,.ar3,.ar4,.ar5,.ar6,.ar7,.ar8,.begin,.logoh1,.aa,.aside,.icons,.titleimg,.toggle,.special,.aaa,.ball"
);

ball.addEventListener("click", function () {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});

const showlist = document.getElementById("lists");
const hidelist = document.getElementById("hidden-list");
showlist.addEventListener("click", function () {
  if (hidelist.style.display === "block") {
    hidelist.style.display = "none"; // If it's already visible, hide it
  } else {
    hidelist.style.display = "block"; // Otherwise, show it
  }
});

const clickItems = document.querySelectorAll("#clicker, .aaa");

// Loop through each click item and add an event listener
clickItems.forEach((item) => {
  item.addEventListener("click", function () {
    hidelist.style.display = "none"; // Hide the list when any of them is clicked
  });
});

const videoPopup = document.getElementById("video-popup");
const popupVideo = document.getElementById("popup-video");
const movieTitle = document.getElementById("movie-title");
const closeBtn = document.getElementById("close");

function openVideo(videoSrc, title) {
  popupVideo.src = videoSrc;
  movieTitle.textContent = title;
  videoPopup.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", function () {
  videoPopup.style.visibility = "hidden";
  document.body.style.overflow = "auto";
  popupVideo.pause();
  popupVideo.src = "";
});

document.querySelectorAll(".movie-thumbnail").forEach((item) => {
  item.addEventListener("click", function () {
    const videoSrc = item.getAttribute("data-video");
    const title = item.alt;
    openVideo(videoSrc, title);
  });
});

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("countHide").style.visibility = "visible";
  document.body.style.overflow = "hidden";

  document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("countHide").style.visibility = "hidden";
    document.body.style.overflow = "auto";
    const vid = document.getElementById("pauseVideo");
    vid.pause();
  });
});
