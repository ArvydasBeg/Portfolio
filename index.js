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

function myFunction() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector(".output1");
  let messageLower = document.querySelector(".output2");

  message.innerHTML = ", " + userInput.value;
  messageLower.innerHTML =
    userInput.value + ", if You want, You can find my here";
}
