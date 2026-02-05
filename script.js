const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const message=document.getElementById("message");
const cat=document.getElementById("cat");
const music=document.getElementById("bgMusic");
const nameInput=document.getElementById("nameInput");
const countdown=document.getElementById("countdown");
const copyBtn=document.getElementById("copyBtn");

noBtn.addEventListener("mouseover",()=>{
noBtn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`
});

yesBtn.addEventListener("click",()=>{
const name=nameInput.value||"My Love";
message.innerHTML=`Yayyy ${BUBUU}! I knew you'd say YESS 💖🥰`;
cat.src="./cat-heart.gif";
music.play();
launchConfetti();
launchHearts();
fireworks();
});

function launchConfetti(){
for(let i=0;i<150;i++){
let d=document.createElement("div");
d.className="confetti";
d.style.left=Math.random()*100+"vw";
d.style.backgroundColor=`hsl(${Math.random()*360},100%,70%)`;
d.style.animationDuration=Math.random()*3+2+"s";
document.body.appendChild(d);
setTimeout(()=>d.remove(),5000);
}
}

function launchHearts(){
for(let i=0;i<50;i++){
let h=document.createElement("div");
h.className="heart";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=Math.random()*3+2+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
}
}

function fireworks(){
launchConfetti();
setTimeout(launchConfetti,400);
setTimeout(launchConfetti,800);
}

setInterval(()=>{
const target=new Date("Feb 14, 2026 00:00:00");
const now=new Date();
const diff=target-now;
if(diff>0){
const d=Math.floor(diff/86400000);
countdown.innerHTML=`Valentine's Day in ${d} days 💘`;
}
},1000);

copyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(window.location.href);
copyBtn.innerText="Link Copied! 💌";
});

