
$(function() {
  $('.link').click(function() {
    if ($('#menu-btn-check').prop('checked')) {
      $('#menu-btn-check').prop('checked', false);
    }
  });
});