$(document).ready(function () {
  // mobile navbar - toggle menu
  $("#navToggle").click(function (event) {
    $(".primary-header").toggleClass("nav-mobile-bg");

    let visibility = $("#navMenu").attr("aria-expanded");
    console.log(visibility);
    if (visibility == "false") {
      $("#navMenu").attr("aria-expanded", true);
      $("#navToggleIcon").removeClass("fa-bars-staggered").addClass("fa-xmark");
    } else {
      $("#navMenu").attr("aria-expanded", false);
      $("#navToggleIcon").addClass("fa-bars-staggered").removeClass("fa-xmark");
    }
  });

  // mobile navbar - close menu when click the area beyound navbar
  $(window).click(function (e) {
    e.stopPropagation;
    let visibility = $("#navMenu").attr("aria-expanded");
    let navMenu = document.querySelector("#navMenu");
    let navToggle = document.querySelector("#navToggleIcon");

    if ($(e.target).hasClass("nav-link") || e.target == navToggle) {
    } else {
      $("#navMenu").attr("aria-expanded", false);
      $(".primary-header").removeClass("nav-mobile-bg");
      $("#navToggleIcon").addClass("fa-bars-staggered").removeClass("fa-xmark");
    }
  });

  // desktop navbar - white background
  const navbar = document.querySelector("#nav-bar");

  $(window).scroll(function (event) {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 0) {
      navbar.classList.add("navbar-bg");
    } else {
      navbar.classList.remove("navbar-bg");
    }
  });
});

// service tabs
$("#tabs").tabs();

// gallary modal
$("#gallary").delegate(".gallary-item", "click", function (event) {
  event.stopPropagation();
  $(this).toggleClass("gallary-modal");
  $(".primary-header").toggleClass("gallary-bg");
});

// review section - swiper slider
function initSwiper() {
  const swiper = new Swiper("#review-swiper", {
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
initSwiper();

// faq list - toggle slide
$(".faq-list").click(function () {
  $(this).find("h3").toggleClass("faq-list-open");
  $(this).find(".faq-list-p").slideToggle();
  $(this).find(".fa-plus").toggle().addClass("faq-icon-counterclockwise");
  $(this).find(".fa-minus").toggle().addClass("faq-icon-clockwise");

  $(this).siblings().find("h3").removeClass("faq-list-open");
  $(this).siblings().find(".faq-list-p").slideUp();
  $(this).siblings().find(".fa-plus").show();
  $(this).siblings().find(".fa-minus").hide();
});
