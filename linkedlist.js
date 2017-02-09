var $webTitle = $('#web-title');
var $webUrl = $('#web-url');
var $submit = $('.submit');

$('#submit').prop('disabled', true);

$('.submit').on('click', function(){

  $('.bookmarks').prepend(
    '<article class="entry">' +
      '<h3 class="title">' + $webTitle.val() + '</h3>' +
      '<a class="url" target="_blank" href="https://' + $webUrl.val() +'">' + $webUrl.val() + '</a>' +
      '<hr>' +
      '<button class="read">Read</button>' +
      '<button class="delete">Delete</button>' +
    '</article>'
  );
  clearField();
  disableSubmit();
})

function disableSubmit() {
  $('#submit').prop('disabled', true);
}

function clearField() {
  {
    $webTitle.val("");
    $webUrl.val("");
  }
}

$('.bookmarks').on('click', '.read', function(){
  $(this).toggleClass('active');
  $(this).parent('.entry').toggleClass('activebackground');
})

$('.bookmarks').on('click', '.delete', function(){
  $(this).parent('.entry').remove();
})

$('input[type=text]').on('keyup', function () {
  if ($webTitle.val() !== "" && $webUrl.val() !== ""){
    $('#submit').prop('disabled', false);
  } else {
    $('#submit').prop('disabled', true);
  }
})
