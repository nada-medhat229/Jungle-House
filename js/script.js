$(document).ready(function () {
  //loader
  setTimeout(function () {
    $(".loader").fadeOut(1000);
  }, 2000);

  $(".customer .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".partners .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    items: 6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".carousel-compare.owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    rtl: true,
    responsive: {
      200: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 2.2,
      },
    },
  });
  
  $(".offers-finall .owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1.5,
      },
      600: {
        items: 2.2,
      },
      800: {
        items: 3,
      },

      1000: {
        items: 3.4,
      },
      1100: {
        items: 3.9,
      },

      1200: {
        items: 4.5,
      },
    },
  });
  // search sub menu
  $(".top-nav-search .open-search").click(function (event) {
    event.stopPropagation();
    $(".top-nav-search form").toggleClass("show");
    $(".top-nav-search input").focus();
  });

  $("body").click(function (e) {
    let input = document.querySelector(".top-nav-search input");
    if (e.target === input) {
      $(".top-nav-search form").addClass("show");
      $(".top-nav-search input").focus();
    } else {
      $(".top-nav-search form").removeClass("show");
    }
  });

  $(function () {
    for (let i = 1; i <= 5; i++) {
      $(".user-rate" + i).rateYo({
        rating: i,
        starWidth: "20px",
        readOnly: true,
        rtl: true,
      });
    }

    $("#your-rate").rateYo({
      starWidth: "15px",
      ratedFill: "#FFC107",
      rating: 0,
      fullStar: true,
    });
  });
  $(".blog .card").hover(function () {
    $(this).find(".card-comm").stop().animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      100
    );
  });

  $(function () {
    let image_small = document.querySelectorAll(".images-view img");
    let image_large = document.querySelector(".img-responsive");
    for (let i = 0; i < image_small.length; i++) {
      image_small[i].addEventListener("click", function () {
        image_large.src = image_small[i].src;
        let viewer = document.querySelectorAll(".viewer-box img");
        for (let j = 0; j < viewer.length; j++) {
          viewer[j].src = image_large.src;
        }
      });
    }
  });
  $(function () {
    $(".single-product .img-responsive").jqZoom({
      selectorWidth: 30,
      selectorHeight: 30,
      viewerWidth: "100%",
      viewerHeight: 400,
    });
  });

  $(".add-address").click(function () {
    if ($(".form-address").css("display") == "block") {
      $(".form-address").hide();
    } else {
      $(".form-address").show();
    }
  });
  $(".input-cridet").hide();

  $('input[type="radio"]').change(function () {
    if ($(".lable-cridet").is(":checked")) {
      $(".input-cridet").show();
    } else {
      $(".input-cridet").hide();
    }
  });

  if ($(".product-quantity").length > 0) {
    $(".quantity.plus").click(function (e) {
      let $input = $(this).next("input.qty");
      let val = parseInt($input.val());
      $input.val(val + 1).change();
      $input.value = $input.val(val + 1).change();
      // let inputsvalue=$input.value
      // for (let i = 0; i <  inputsvalue.length; i++) {
      //   let changevalueelement=$(".value-output").val();
      //   inputsvalue[i].value=changevalueelement;
      // }
    });

    $(".quantity.minus").click(function (e) {
      let $input = $(this).prev("input.qty");
      var val = parseInt($input.val());
      if (val > 1) {
        $input.val(val - 1).change();
      }
      console.log(val);
    });
  }
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  AOS.init();
});
