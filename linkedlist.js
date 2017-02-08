
$('.submit').on('click', function(){
  var $webTitle = $('#web-title')
  var $webUrl = $('#web-url')
  // console.log($webTitle.val())
  // console.log($webUrl.val())

  $('.bookmarks').prepend(
    '<article class="entry">' +
      '<h3 class="title">' + $webTitle.val() + '</h3>' +
      '<a class="url" target="_blank" href="https://' + $webUrl.val() +'">' + $webUrl.val() + '</a>' +
      '<button class="read">Read</button>' +
      '<button class="delete">Delete</button>' +
    '</article>'
  )
})

$('.bookmarks').on('click', '.read', function(){
  $(this).toggleClass('active');
})
$('.bookmarks').on('click', '.read', function(){
  $(this).parent('.entry').toggleClass('activebackground');
})
$('.bookmarks').on('click', '.delete', function(){
  $(this).parent('.entry').remove();
})
