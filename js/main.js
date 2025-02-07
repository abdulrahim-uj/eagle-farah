
        // PRELOADER
        setTimeout(() => {
          document.getElementById("spinner").style.display = "none"; 
          const logo = document.querySelector(".preloader-logo");
          logo.style.display = "block"; 
          setTimeout(() => {
            logo.style.opacity = "1";
            logo.style.transform = "scale(1)";
          }, 50);
        
          setTimeout(() => {
            document.getElementById("preloader").style.opacity = "0";
            setTimeout(() => {
              document.getElementById("preloader").style.display = "none"; 
              document.getElementById("EfcPage").style.opacity = "1";
            }, 1000);
          }, 2000); 
        }, 1000); 
        
      
$('.toggle').click(function(){
  $('.toggle').toggleClass('open');
  $('.mainMenu').toggleClass('show')
})




window.addEventListener("scroll", function() {
  var header = document.querySelector(".headerContain");
  header.classList.toggle("scrolled", window.scrollY > 50);
});


//   FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  // const arrow = item.querySelector('.arrow');

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

// DROPDOWN MENU

$('.dropdown-arrow').click(function(e){ 
  e.preventDefault();
  $('.subMenu').slideToggle()
});