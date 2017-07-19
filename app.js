
// BURGER TOGGLE
// When user clicks element
$('.burger').on('click', function () {
  // Toggle menu
  $('.menu').toggleClass('open');
});

// HOVER DROPDOWN
$('dropdown').hide();
// When user hovers over element
$('nav li').hover( function () {
  // Toggle drop-item within that element
  $('.drop-item', this).slideToggle(100);
});
