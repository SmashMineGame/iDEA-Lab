$("#step1").prop("checked", true);

$('#design').hide();
$('#execute').hide();
$('#apply').hide();

$('#step1').click(function() {
  $('.progress').css("width", "25%");
  fadeAll();
  $('#ideate').delay(500).fadeIn(500);
});

$('#step2').click(function() {
  $('.progress').css("width", "50%");
  fadeAll();
  $('#design').delay(500).fadeIn(500);
});

$('#step3').click(function() {
  $('.progress').css("width", "75%");
  fadeAll();
  $('#execute').delay(500).fadeIn(500);
});

$('#step4').click(function() {
  $('.progress').css("width", "100%");
  fadeAll();
  $('#apply').delay(500).fadeIn(500);
});

$('#action-item a button').click(function() {});