
$('.toggle').click(function(){
  $('.toggle').toggleClass('open');
  $('.mainMenu').toggleClass('show')
})

// $('.toggle').click(function(){
//   $('.contactSlide').addClass('show')
// });
// $('.clseMenu').click(function(){
//   $('.contactSlide').removeClass('show')
// })




// $('.clients-slider').slick({
//     dots: false, 
//     arrows: false,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 300,
//     autoplaySpeed: 1500,
//     infinite: true,
//     cssEase: 'ease-in-out',
//     touchThreshold: 100,
//     responsive: [
//       { breakpoint: 999, settings: { slidesToShow: 4 } },
//       { breakpoint: 700, settings: { slidesToShow: 3 } },
//       { breakpoint: 600, settings: { slidesToShow: 2 } },
//       { breakpoint: 400, settings: { slidesToShow: 1 } },
//     ],
//   });


//   FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.arrow');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open');

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

    // Toggle current item
    if (!isOpen) {
      answer.classList.add('open');
      arrow.classList.add('open');
    }
  });
});



Resources