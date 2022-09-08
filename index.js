import { generateAlbums } from "./title.js";

function parallaxx(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
  //   console.log(item.style.transform);
}

window.addEventListener("scroll", () => {
  parallaxx(".about-me", window.scrollY, 0.6);
  parallaxx(".proposals", window.scrollY, 0.3);
  parallaxx(".let-get", window.scrollY, 0.1);
});
