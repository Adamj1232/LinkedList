var $webTitle = $('#web-title');
var $webUrl = $('#web-url');
var $submit = $('.submit');

$('.submit').on('click', function(){

  $('.bookmarks').prepend(
    '<article class="entry">' +
      '<h3 class="title">' + $webTitle.val() + '</h3>' +
      '<span class=underline> <a class="url" target="_blank" href="https://' + $webUrl.val() +'">' + $webUrl.val() + '</a></span>' +
      '<button class="read">Read</button>' +
      '<button class="delete">Delete</button>' +
    '</article>'
  );
  // clearField();
})

// function clearField() {
//   if ($webTitle.val()  != "" && $webUrl.val() != ""){
//     $webTitle.val = "";
//     $webUrl.val = "";
//   }
// }

$('.bookmarks').on('click', '.read', function(){
  $(this).toggleClass('active');
  $(this).parent('.entry').toggleClass('activebackground');
})

$('.bookmarks').on('click', '.delete', function(){
  $(this).parent('.entry').remove();
})

// $('#web-title').add('#web-url').on('keyup', function(){
//   if ($webUrl.length > 0) {
//    $('#submit').prop('disabled', false);
// });
// }

// $($webTitle, $webUrl).keyup(function() {
//   if ($webUrl.length > 0) {
//    $('#submit').prop('disabled', false);
// });

 // && $webTitle.length > 0




 // function disableSubmit () {
 //   var submitBtn = document.querySelector('#submit');
 //   submitBtn.disabled = true;
 // }
