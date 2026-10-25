let h31 = document.getElementById("h31");
let h32 = document.getElementById("h32");
let h33 = document.getElementById("h33");
let h34 = document.getElementById("h34");
let h35 = document.getElementById("h35");
let h36 = document.getElementById("h36");
let btn = document.getElementById("bt");
let btn2 = document.getElementById("btn2");
let count = document.getElementById("counter");
const countainer1 = document.querySelector(".countainer1");
const btn3 = document.getElementById("btn3");
const input = document.getElementById("input");

counter = 0;
btn.addEventListener("click", function () {
  if (btn.innerHTML == "" || btn.innerHTML == "ابدأ بالذكر") {
    alert("برجاء اختيار الذكر❤️");
  } else {
    counter++;
    count.innerHTML = counter;
    console.log(counter);
  }

  if (counter == 33) {
    alert(`لقد اتممت ثلاثة و ثلاثون ${btn.innerHTML}`);
  }
});

btn2.addEventListener("click", function () {
  count.innerHTML = 0;
  counter = 0;
});

h31.addEventListener("click", function () {
  btn.innerHTML = h31.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

h32.addEventListener("click", function () {
  btn.innerHTML = h32.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

h33.addEventListener("click", function () {
  btn.innerHTML = h33.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

h34.addEventListener("click", function () {
  btn.innerHTML = h34.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

h35.addEventListener("click", function () {
  btn.innerHTML = h35.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

h36.addEventListener("click", function () {
  btn.innerHTML = h36.innerHTML;
  count.innerHTML = 0;
  counter = 0;
});

btn3.addEventListener("click", function () {
  const dhikr = input.value.trim();

  if (dhikr !== "") {
    const element = document.createElement("h3");
    element.textContent = dhikr;
    countainer1.appendChild(element);
    localStorage.setItem("elements", input.value);

    element.addEventListener("click", function () {
      btn.innerHTML = dhikr;
      count.innerHTML = 0;
      counter = 0;
    });

    input.value = "";
  }
});
const savedDhikr = localStorage.getItem("elements");

if (savedDhikr) {
  const element = document.createElement("h3");
  element.textContent = savedDhikr;
  countainer1.appendChild(element);

  element.addEventListener("click", function () {
    btn.innerHTML = savedDhikr;
    count.innerHTML = 0;
    counter = 0;
  });
}
