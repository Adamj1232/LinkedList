var $submitButton = $('.submit');

$submitButton.on('click', function(){
  var $webTitle = $('#web-title')
  var $webUrl = $('#web-url')
  console.log($webTitle.val())
  console.log($webUrl.val())

  $('.bookmarks').append(
    '<article class="entry">' +
      '<h3 class="title">' + $webTitle.val() + '</h3>' +
      '<p class="url">' + $webUrl.val() + '</p>' +
      '<button class="read">Read</button>' +
      '<button>Delete</button>' +
    '</article>'
  )
})
