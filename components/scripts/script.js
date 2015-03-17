var flag;

if ($(window).width() >= 600) {
  flag = true;
  $(document).bind('scroll', function() {
    if ($(document).scrollTop() >= 450 & flag) {
      $('.hero-image img').attr('src', 'images/perro-full.jpg');
      $('.texto h3').html("On the Internet, <br/> nobody knows I'm a dog");
      flag = false;
    }
  });
}
