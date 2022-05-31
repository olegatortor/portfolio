const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.close');

hamburger.addEventListener('click' , () => {
    menu.classList.add('active');
});

close.addEventListener('click' , () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rattings-counters');
      lines = document.querySelectorAll('.skills__rattings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
         
        $('form').trigger('reset');
    });
    return false;
});
