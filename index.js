function pageScroll() {
  window.scrollTo(300, 650);
}

var balls = document.querySelector(".balls");
var quant = document.querySelectorAll(".slides .page");
var atual = 0;
var page = document.getElementById("atual");
var next = document.getElementById("next");
var back = document.getElementById("back");

for (let i = 0; i < quant.length; i++) {
  var div = document.createElement("div");
  div.id = i;
  balls.appendChild(div);
}

document.getElementById("0").classList.add("imgAtual");

var pos = document.querySelectorAll(".balls div");

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener("click", () => {
    atual = pos[i].id;
    slide();
  });
}

back.addEventListener("click", () => {
  atual--;
  slide();
});

next.addEventListener("click", () => {
  atual++;
  slide();
});

function slide() {
  if (atual >= quant.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = quant.length - 1;
  }
  document.querySelector(".imgAtual").classList.remove("imgAtual");
  page.style.marginLeft = -1110 * atual + "px";
  document.getElementById(atual).classList.add("imgAtual");
}
