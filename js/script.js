
// БУРГЕР
$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__list').toggleClass('burger__list');
    $('.header__burger').toggleClass('header__burger_close');
    $('body').toggleClass('lock');
  })
});
// АККОРДЕОН
var details = document.querySelectorAll("details");
for (q = 0; q < details.length; q++) {
  details[q].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for (q = 0; q < details.length; q++) {
    if (details[q].tagName != "DETAILS" ||
      !details[q].hasAttribute('open') ||
      event.target == details[q]) {
      continue;
    }
    details[q].removeAttribute("open");
  }
}

