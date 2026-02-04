const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const cat = document.getElementById("cat");

yesBtn.addEventListener("click", () => {
  message.textContent = "Yayyy! I knew you'd say yes!!! 💖🥰";
  cat.src = "./cat-heart.gif";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
