let h31 = document.getElementById("h31");
let h32 = document.getElementById("h32");
let h33 = document.getElementById("h33");
let h34 = document.getElementById("h34");
let h35 = document.getElementById("h35");
let h36 = document.getElementById("h36");
let btn = document.getElementById("btn");
let count = document.getElementById("counter");

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

h31.addEventListener("click", function () {
  btn.innerHTML = h31.innerHTML;
});

h32.addEventListener("click", function () {
  btn.innerHTML = h32.innerHTML;
});

h33.addEventListener("click", function () {
  btn.innerHTML = h33.innerHTML;
});

h34.addEventListener("click", function () {
  btn.innerHTML = h34.innerHTML;
});

h35.addEventListener("click", function () {
  btn.innerHTML = h35.innerHTML;
});

h36.addEventListener("click", function () {
  btn.innerHTML = h36.innerHTML;
});
