jQuery(function ($) {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  function adjustNav() {
    var winWidth = $(window).width(),
      dropdown = $('.dropdown'),
      dropdownMenu = $('.dropdown-menu');

    if (winWidth >= 768) {
      dropdown.on('mouseenter', function () {
        $(this).addClass('show')
          .children(dropdownMenu).addClass('show');
      });

      dropdown.on('mouseleave', function () {
        $(this).removeClass('show')
          .children(dropdownMenu).removeClass('show');
      });
    } else {
      dropdown.off('mouseenter mouseleave');
    }
  }

  $(window).on('resize', adjustNav);

  adjustNav();
});


// ===================================Animation===================================
function spin() {
  var spinning = document.querySelectorAll('.spin');
  spinning.forEach((event) => {
    event.classList.add('active');
  });
}

function rightAnimate() {
  var reveal = document.querySelectorAll('.toRight');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}

function leftAnimate() {
  var reveal = document.querySelectorAll('.toLeft');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}

function topAnimate() {
  var reveal = document.querySelectorAll('.toTop');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}

function spinStick() {
  var reveal = document.querySelectorAll('.spinStick');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}

function fade() {
  var reveal = document.querySelectorAll('.fade');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}

function spinFromLeft() {
  var reveal = document.querySelectorAll('.spinFromLeft');
  reveal.forEach(function (event) {
    event.classList.add('active');
  });
}
// ==========fade on scroll=========
window.addEventListener('scroll', fadeOnScroll);

function fadeOnScroll() {
  var revealComponent = document.querySelectorAll('.revealOnScroll');

  for (var i = 0; i < revealComponent.length; i++) {
    var winHeight = window.innerHeight;
    // console.log(winHeight);
    var revealTop = revealComponent[i].getBoundingClientRect().top;
    var pointOfReveal = 350;

    if (revealTop < winHeight - pointOfReveal) {
      revealComponent[i].classList.add('active')
    }
    else {
      revealComponent[i].classList.remove('active')
    }
  }
}

// ============ke kanan================
window.addEventListener('scroll', toRightOnScroll);

function toRightOnScroll() {
  var revealComponent = document.querySelectorAll('.toRightOnScroll');

  for (var i = 0; i < revealComponent.length; i++) {
    var winHeight = window.innerHeight;
    // console.log(winHeight);
    var revealTop = revealComponent[i].getBoundingClientRect().top;
    var pointOfReveal = 100;

    if (revealTop < winHeight - pointOfReveal) {
      revealComponent[i].classList.add('active')
    }
    else {
      revealComponent[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', toLeftOnScroll);

function toLeftOnScroll() {
  var revealComponent = document.querySelectorAll('.toLeftOnScroll');

  for (var i = 0; i < revealComponent.length; i++) {
    var winHeight = window.innerHeight;
    // console.log(winHeight);
    var revealTop = revealComponent[i].getBoundingClientRect().top;
    var pointOfReveal = 100;

    if (revealTop < winHeight - pointOfReveal) {
      revealComponent[i].classList.add('active')
      revealComponent[i].classList.add('display')
    }
    else {
      revealComponent[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', toFadeOnScroll);

function toFadeOnScroll() {
  var revealComponent = document.querySelectorAll('.toFadeOnScroll');

  for (var i = 0; i < revealComponent.length; i++) {
    var winHeight = window.innerHeight;
    // console.log(winHeight);
    var revealTop = revealComponent[i].getBoundingClientRect().top;
    var pointOfReveal = 100;

    if (revealTop < winHeight - pointOfReveal) {
      revealComponent[i].classList.add('active')
    }
    else {
      revealComponent[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', toSpinOnScroll);

function toSpinOnScroll() {
  var revealComponent = document.querySelectorAll('.toSpinOnScroll');

  for (var i = 0; i < revealComponent.length; i++) {
    var winHeight = window.innerHeight;
    // console.log(winHeight);
    var revealTop = revealComponent[i].getBoundingClientRect().top;
    var pointOfReveal = 100;

    if (revealTop < winHeight - pointOfReveal) {
      revealComponent[i].classList.add('active')
    }
    else {
      revealComponent[i].classList.remove('active')
    }
  }
}