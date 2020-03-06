function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
const score = document.querySelector("h1");

let scoreNumber = 0;
score.innerText = `Score: ${scoreNumber} coins`;

window.addEventListener("keyup", function(e) {
  const currTop = extractPosition(avatar.style.top);
  const currLeft = extractPosition(avatar.style.left);
  console.log(e.key);
  if (e.key === "ArrowDown") {
    moveVertical(avatar, 50, currTop);
  } else if (e.key === "ArrowUp") {
    moveVertical(avatar, -50, currTop);
  } else if (e.key === "ArrowRight") {
    avatar.style.transform = "scale(1,1)";
    moveHorizontal(avatar, 50, currLeft);
  } else if (e.key === "ArrowLeft") {
    avatar.style.transform = "scale(-1,1)";
    moveHorizontal(avatar, -50, currLeft);
  }

  if (isTouching(avatar, coin)) {
    score.innerText = `Score: ${++scoreNumber} coins`;
    moveCoin();
  }
});

const moveVertical = (element, amount, currTop) => {
  element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount, currLeft) => {
  element.style.left = `${currLeft + amount}px`;
};
const extractPosition = pos => {
  if (!pos) {
    return 100;
  }
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);

  coin.style.top = `${height}px`;
  coin.style.left = `${width}px`;
};
moveCoin();
