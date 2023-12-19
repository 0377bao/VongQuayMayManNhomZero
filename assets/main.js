const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const text = document.querySelector('.userText');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.modal');
const modalContetn = document.querySelector('.modal .content');
let value = 0;
let arrayOfLines = [
  'Mất lượt',
  'Nước suối',
  'Bánh quy',
  'Bánh oreo',
  'Sữa milo',
  'Bò húc',
  'Bim bim',
  '7 up',
];
const color = [
  "green",
  "blue",
  "red",
  "brown",
  "aqua", 
  "orange",
  "grey",
  "violet"
]

const hidemode = () => {
  modal.classList.remove('show');
}

modal.onclick = hidemode;

document.querySelector('.modalbox').addEventListener('click', function(event) {
  event.stopPropagation(); // Ngăn chặn sự kiện nổi bọt
});

closeBtn.onclick = hidemode;

spinBtn.onclick = () => {
  const percent = Math.ceil(Math.random() * 100);
  let numberran = 0;
  if(percent <= 80) {
    numberran = 1;
  } else {
    numberran = Math.ceil(Math.random() * 8);
  }
  value =  3600 * (Math.floor(value / 3600) + 1) + (360 - numberran * 45 + 45);
  wheel.style.transform = 'rotate(' + value + 'deg)';
  setTimeout(() => {
    modalContetn.innerHTML = arrayOfLines[numberran - 1];
    modal.classList.add('show');
  }, 5000);
}

text.oninput = () => {
  const arrayOfLines1 = text.value.split("\n");
  arrayOfLines = [];
  let element = "";
  for(let i = 1; i <= 8; i++) {
    if(i <= arrayOfLines1.length) {
      arrayOfLines.push(arrayOfLines1[i - 1]);
    } else {
      arrayOfLines.push(i);
    }
  }
  arrayOfLines.forEach((value, i) => {
    element += `
      <div class="number" style="--i: ${i + 1}; --clr: ${color[i]};"><span>${value}</span></div>
    `
  });
  wheel.innerHTML = element;
}



