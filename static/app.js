$(function() {
  $('.js-bottom-right-button-link').click(function(e) {
    $('html, body').animate({ scrollTop: 0 }, 'slow')

    // デフォルトのhref="#"の挙動をなくす
    // function()をfunction(e)にする必要がある
    e.preventDefault()
  })

  // https:// か http:// ではじまるリンクは新しいタブで開く
  $("a[href^='https://'], a[href^='http://']").attr('target', '_blank')
})
