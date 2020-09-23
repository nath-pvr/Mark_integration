// (function($){


//    $('#header__icon').click(function(e){
//        e.preventDefault();
//        $('header').toggleClass('with--sidebar')
//    })

//    $('#site-cache').click(function(e){
//        $('header').removeClass('with--sidebar');
//    })

// })(jQuery);

const burger = document.getElementById('site-pusher');
const header = document.querySelector('header');

burger.addEventListener('click',e => {
    e.preventDefault();
    header.classList.toggle('with--sidebar');
});