
$('.sharing_preference').change(function() {
     var sharing_preference = $('input[name="delivery_type"]:checked').val();
    // console.log("minakshi");
    if(sharing_preference == 'Morning'){
        // var day = '<?php echo date('l', strtotime(" +2 day")); ?>';
        // var dayHolyday = '<?php echo date('d', strtotime(" +2 day")); ?>';
        // if(day == 'Sunday'){
        //     var delivery_date = '<?php echo date('l, d-m-Y', strtotime(" +4 day")); ?>';
        // }else if(day == 'Monday'){
        //     var delivery_date = '<?php echo date('l, d-m-Y', strtotime(" +3 day")); ?>';
        // }else{
        //     var delivery_date = '<?php echo date('l, d-m-Y', strtotime(" +2 day")); ?>';
        // }
        // $('.delivery-date').html(delivery_date);
        // if(day == 'Sunday'){
        //     var delivery_date_val = '<?php echo date('Y-m-d H:i:s', strtotime(" +4 day")); ?>';
        // }else if(day == 'Monday'){
        //     var delivery_date_val = '<?php echo date('Y-m-d H:i:s', strtotime(" +3 day")); ?>';
        // }else{
        //     var delivery_date_val = '<?php echo date('Y-m-d H:i:s', strtotime(" +2 day")); ?>';
        // }
        // $('#delivery_date').val(delivery_date_val);
    }else{
        // var day = '<?php echo date('l', strtotime(" +1 day")); ?>';
        
        // var dayHolyday = '<?php echo date('d', strtotime(" +1 day")); ?>';
        // if(day == 'Sunday'){
        //     var delivery_date = '<?php echo date('l, d-m-Y', strtotime(" +2 day")); ?>';
        // }else{
        //     var delivery_date = '<?php echo date('l, d-m-Y', strtotime(" +1 day")); ?>';
        // }
        // $('.delivery-date').html(delivery_date);
        // if(day == 'Sunday'){
        //     var delivery_date_val = '<?php echo date('Y-m-d H:i:s', strtotime(" +2 day")); ?>';
        // }else{
        //     var delivery_date_val = '<?php echo date('Y-m-d H:i:s', strtotime(" +1 day")); ?>';
        // }
        // $('#delivery_date').val(delivery_date_val);
    }
});





/*------ EDIT-PROFILE-JS-START ***/
$(document).ready(function() {


    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function() {
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
});



// $(document).ready(function() {

    
//     var readURL = function(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//                 console.log('minakhsi')
//             }
    
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
    

//     $(".file-upload").on('change', function(){
//         readURL(this);
//     });
    
//     $(".upload-button").on('click', function() {
//        $(".file-upload").click();
//     });
// });





/*------ fixed-header-js-start ------ */
$(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.start-header').addClass('sticky-bg');
        } else {
            $('.start-header').removeClass('sticky-bg');
        }
    })


    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.Mobheader-fixed').addClass('sticky-bg');
        } else {
            $('.Mobheader-fixed').removeClass('sticky-bg');
        }
    })
    


    /* ------ dropdown-menu-js-start ------ */
$(document).ready(function() {
    //the trigger on hover when cursor directed to this class
    $(".drop-menu li").hover(
        function() {
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function() {
            $('ul', this).slideUp('fast');
        });
});

/* ------ dropdown-menu-js-end ------ */
/* ------ MOBILE-HEADER-JS-START ----- */
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.mobile-search').addClass('sticky-bg');
    } else {
        $('.mobile-search').removeClass('sticky-bg');
    }
})


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 469) {

        $(".fixed-food").addClass('foodsticky-bg');
    } else {
        $(".fixed-food").removeClass('foodsticky-bg');
    }
});
/*------ LISTING-HEADER-JS-START ------ */
$(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.mobile-list-header').addClass('sticky-bg');
        } else {
            $('.mobile-list-header').removeClass('sticky-bg');
        }
    })
    /*------ LISTING-HEADER-JS-END ------ */
    /* ------ MOBILE-HEADER-JS-END ----- */
    /*------ fixed-header-js-end ------ */
    /*------ PRODUCTS-DETAIL-JS-START -------*/
$(".mini img").click(function() {

    $(".maxi").attr("src", $(this).attr("src").replace("120x100", "500x300"));

});
/*------ PRODUCTS-DETAIL-JS-END -------*/
/*------ PLUS-MINUS-BUTTON-JS-START -------*/
var unit = 1;
var total;
// if user changes value in field
$('.field').change(function() {
    unit = this.value;
});
$('.add').click(function() {
    unit++;
    var $input = $(this).prevUntil('.sub');
    $input.val(unit);
    unit = unit;
});
$('.sub').click(function() {
    if (unit > 1) {
        unit--;
        var $input = $(this).nextUntil('.add');
        $input.val(unit);
    }
});



/* ------ PLUS-MINUS-BUTTON-JS-END -------*/

/* ------ RATING-JS-START -------*/
$(document).ready(function() {
    $('.stars11 li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10);
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.stars11 li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.smallstar');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('starselected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('starselected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('.stars li.starselected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "" + ratingValue + " (5.0).";
        } else {
            msg = "" + ratingValue + " (5.0)";
        }
        responseMessage(msg);

    });
});

function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
/*------ RATING-JS-ENDS -------*/
/*------ MAIN-RATING-VIEW-LIST-JS-START -------*/
var starClicked = false;
$(function() {

    $('.star').click(function() {

        // $(this).children('.selected').addClass('is-animated');
        // $(this).children('.selected').addClass('pulse');

        var target = this;

        setTimeout(function() {
            $(target).children('.selected').removeClass('is-animated');
            $(target).children('.selected').removeClass('pulse');
        }, 1000);

        starClicked = true;
    })

// cc
    // $('.half').click(function() {
    //     if (starClicked == true) {
    //         setHalfStarState(this)
    //     }
    //     $(this).closest('.rating-main').find('.js-score').text($(this).data('value'));

    //     $(this).closest('.rating-main').data('vote', $(this).data('value'));
    //     calculateAverage()
    //     console.log( $(this).data('value'));

    // })

    // $('.full').click(function() {
    //     if (starClicked == true) {
    //         setFullStarState(this)
    //     }
    //     $(this).closest('.rating-main').find('.js-score').text($(this).data('value'));

    //     $(this).find('js-average').text(parseInt($(this).data('value')));

    //     $(this).closest('.rating-main').data('vote', $(this).data('value'));
    //     calculateAverage()

    //     console.log(parseInt($(this).data('value')));
    // })

    // $('.half').hover(function() {
    //     if (starClicked == false) {
    //         //setHalfStarState(this)
    //     }

    // })

    // $('.full').hover(function() {
    //     if (starClicked == false) {
    //        // setFullStarState(this)
    //     }
    // })// cc

})
/*------ MAIN-RATING-VIEW-LIST-JS-END -------*/


$(document).ready(function(){       
    $('#city-modal').modal('show');
     }); 









  
    




/**************pally-friends-slider-start*************/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  var owl = $('#media_partner');
  owl.owlCarousel({
      autoplay:true,
      margin:60,
      loop:true,
      nav:false,
      dots:true,
  
        responsive:{
            0:{
                items:1,
                nav:false
            },
            999:{
                items:2,
            },
            1000:{
                items:5
          }
        }
  });


$(document).ready(function () {
    $("#pally-frds").owlCarousel({
        loop: false,
        margin: 5,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            800: {
                items: 2,
            },
            1400: {
                items: 3,
              }
            }
    });
});






/**************pally-friends-slider-start************ */
function updateStarState(target) {
    $(target).parent().prevAll().addClass('animate');
    $(target).parent().prevAll().children().addClass('star-colour');

    $(target).parent().nextAll().removeClass('animate');
    $(target).parent().nextAll().children().removeClass('star-colour');
}

function setHalfStarState(target) {
    $(target).addClass('star-colour');
    $(target).siblings('.full').removeClass('star-colour');
    updateStarState(target)
}

function setFullStarState(target) {
    $(target).addClass('star-colour');
    $(target).parent().addClass('animate');
    $(target).siblings('.half').addClass('star-colour');

    updateStarState(target)
}

function calculateAverage() {
    var average = 0

    $('.rating-main').each(function() {
        average += $(this).data('vote')
    })

    $('.js-average').text((average / $('.rating-main').length).toFixed(1))
}

/*------ MAIN-RATING-VIEW-LIST-JS-END -------*/
/*------ PROGRESS-BAR--JS-START -------*/

var delay = 500;
$(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({
        width: $(this).attr('aria-valuenow') + '%'
    }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now) + '%');
        }
    });
});

/*------ PROGRESS-BAR--JS-END -------*/
/*------ SMILAR-PRODUCTS-SLIDER-JS-START ***/

$(document).ready(function() {
    $('#similarSlider').multislider({
        interval: 0,
        slideAll: false,
        duration: 1000,
        hoverPause: true


    });
});
$(document).ready(function() {
    $('#similarSlider1').multislider({
        interval: 0,
        slideAll: false,
        duration: 1000,
        hoverPause: true

    });
});


/*------ SMILAR-PRODUCTS-SLIDER-JS-END ------*/

/*------CART-MODAL-JS-START ------*/
$("body").on("click", ".applycouponmodal", function(e) {
    $('#checkpayeModal').modal('hide');
    $('#applycouponopnmodal').modal('show');
});
$("body").on("click", ".back-arrow", function(e) {
    $('#checkpayeModal').modal('show');
    $('#applycouponopnmodal').modal('hide');
});


$("body").on("click", ".directbankbtn", function(e) {
    $('#checkpayeModal').modal('hide');
    $('#directbankopnmodal').modal('show');
});
$("body").on("click", ".bnkback-arrow", function(e) {
    $('#checkpayeModal').modal('show');
    $('#directbankopnmodal').modal('hide');
});
$("body").on("click", ".purchase-btn", function(e) {
    $('#directbankopnmodal').modal('hide');
    $('#purchaseopnmodal').modal('show');
});

$("body").on("click", ".bnkback-arrow", function(e) {
    $('#directbankopnmodal').modal('show');
    $('#purchaseopnmodal').modal('hide');
});

$("body").on("click", ".cartsussefullbtn", function(e) {
    $('#pallyorderModal').modal('hide');
    $('#cartsucessModalopn').modal('show');
});

/*------ CART-MODAL-JS-END ------*/

/*------  ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".unavailable-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#unavailable-modal').modal('show');
});
$("body").on("click", ".order-bk", function(e) {

    $('#modal-right').modal('show');
    $('#unavailable-modal').modal('hide');
});


/*------  ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ------*/

/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".viewdetail-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#viewdetails-modal').modal('show');
});
$("body").on("click", ".details-back", function(e) {

    $('#modal-right').modal('show');
    $('#viewdetails-modal').modal('hide');
});


/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/

/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".track-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#trackorder-modal').modal('show');
});


/*------ ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/



// $(document).ready(function() {
//     console.log($('.item').length);
//     if($('.item').length>3){
//         $('#categoiresSlider').multislider({
//             interval: 4000,
//             slideAll: false,
//             duration: 1000,
//             hoverPause: true,
//             loop: true,
//          });
        
//     }else{
//        var arrows= $('#category_arrow');
//         for (var i=0;i<arrows.length;i+=1){
//           arrows[i].style.display = 'none';
//         }
//     }
  
// });

/*------ FOLLOERS/FOLLOWING-SLIDER-JS-START ***/



// cc
$(document).ready(function() {
    console.log($('.followers-inner').length);
    if($('.followers-inner').length>2){
        $('#folloersSlider').multislider({
            interval: 0,
            slideAll: false,
            duration: 1000,
            hoverPause: true,
            loop: true,
         });
        
    }else{
       var arrows= $('#followers_arrow');
        for (var i=0;i<arrows.length;i+=1){
          arrows[i].style.display = 'none';
        }
    }
  
});

$(document).ready(function() {
    console.log($('.follower_wrap').length);
    if($('.follower_wrap').length>2){
        $('#followingSlider').multislider({
            interval: 0,
            slideAll: false,
            duration: 1000,
            hoverPause: true,
            loop: true,
         });
        
    }else{
       var arrows= $('#following_arrow');
        for (var i=0;i<arrows.length;i+=1){
          arrows[i].style.display = 'none';
        }
    }
  
});



$(document).ready(function() {
    console.log($('.mob-followers-inner').length);
    if($('.mob-followers-inner').length>2){
        $('#MobfolloersSlider').multislider({
            interval: 4000,
            slideAll: false,
            duration: 1000,
            hoverPause: true

        });
    }
});

$(document).ready(function() {
    console.log($('.mob-following-inner').length);
    if($('.mob-following-inner').length>2){
        $('#MobfollowingSlider').multislider({
            interval: 4000,
            slideAll: false,
            duration: 1000,
            hoverPause: true

        });
    }   
});


// $(document).ready(function() {
//     $('#followingSlider').multislider({
//         interval: 4000,
//         slideAll: false,
//         duration: 1000,
//         hoverPause: true

//     });
// });






$(document).ready(function() {
    $('#mediaSlider').multislider({
        interval: 4000,
        slideAll: false,
        duration: 1000,
        hoverPause: true

    });
});

$(document).ready(function() {
    $('#categoiresSlider').multislider({
        interval: 0,
        slideAll: false,
        duration: 1000,
        hoverPause: true,
        isVertical : true,

    });
});


$(document).ready(function() {
    $('#categoires-bg').multislider({
        interval: 0,
        slideAll: false,
        duration: 1000,
        hoverPause: true,
        nextAll: true
    });
});




/*************mosue-move-script-start***************/

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');


const end = () => {
    isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

// (() => {
// 	slider.addEventListener('mousedown', start);
// 	slider.addEventListener('touchstart', start);

// 	slider.addEventListener('mousemove', move);
// 	slider.addEventListener('touchmove', move);

// 	slider.addEventListener('mouseleave', end);
// 	slider.addEventListener('mouseup', end);
// 	slider.addEventListener('touchend', end);
    
// })();

/*************mosue-move-script-end***************/











/*------ FOLLOERS/FOLLOWING-SLIDER-JS-END ***/









// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $('#imagePreview').css('background-image', 'url('+e.target.result +')');
//             $('#imagePreview').hide();
//             $('#imagePreview').fadeIn(650);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// $("#imageUpload").change(function() {
//     readURL(this);
// });
/*------ EDIT-PROFILE-JS-END ***/






/***************profile-pic-change-start**************/
$(document).on("change", ".uploadProfileInput", function () {
  var triggerInput = this;
  var currentImg = $(this).closest(".pic-holder").find(".pic").attr("src");
  var holder = $(this).closest(".pic-holder");
  var wrapper = $(this).closest(".profile-pic-wrapper");
  $(wrapper).find('[role="alert"]').remove();
  var files = !!this.files ? this.files : [];
  if (!files.length || !window.FileReader) {
    return;
  }
  if (/^image/.test(files[0].type)) {
    // only image file
    var reader = new FileReader(); // instance of the FileReader
    reader.readAsDataURL(files[0]); // read the local file

    reader.onloadend = function () {
      $(holder).addClass("uploadInProgress");
      $(holder).find(".pic").attr("src", this.result);
      $(holder).append(
        '<div class="upload-loader"><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div></div>'
      );

      // Dummy timeout; call API or AJAX below
      setTimeout(() => {
        $(holder).removeClass("uploadInProgress");
        $(holder).find(".upload-loader").remove();
        // If upload successful
        if (Math.random() < 0.9) {
          // $(wrapper).append(
          //   '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Profile image updated successfully</div>'
          // );

          // Clear input after upload
        //   $(triggerInput).val("");

          setTimeout(() => {
            $(wrapper).find('[role="alert"]').remove();
          }, 3000);
        } else {
          $(holder).find(".pic").attr("src", currentImg);
          // $(wrapper).append(
          //   '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>'
          // );

          // Clear input after upload
        //   $(triggerInput).val("");
          setTimeout(() => {
            $(wrapper).find('[role="alert"]').remove();
          }, 3000);
        }
      }, 1500);
    };
  } else {
    $(wrapper).append(
      '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose the valid image.</div>'
    );
    setTimeout(() => {
      $(wrapper).find('role="alert"').remove();
    }, 3000);
  }
});

/***************profile-pic-change-end**************/


// *** MAKE-LIST-MODAL-JS-START -------*/
$("body").on("click", ".cartsussefullbtn", function(e) {
    $('#pallyorderModal').modal('hide');
    $('#cartsuessfullopnmodal').modal('show');
});

$("body").on("click", ".existpally-btn", function(e) {
    $('#alreadypallyModal').modal('hide');
    $('#existpallyModal').modal('show');
});
$("body").on("click", ".existbck-arrow", function(e) {

    $('#alreadypallyModal').modal('show');
    $('#existpallyModal').modal('hide');
});
$("body").on("click", ".applycouponmodal", function(e) {
    $('#makelistcheckeModal').modal('hide');
    $('#applycouponopnmodal').modal('show');
});
$("body").on("click", ".back-arrow", function(e) {
    $('#makelistcheckeModal').modal('show');
    $('#applycouponopnmodal').modal('hide');
});


$("body").on("click", ".directbankbtn", function(e) {
    $('#makelistcheckeModal').modal('hide');
    $('#directbankopnmodal').modal('show');
});
$("body").on("click", ".bnkback-arrow", function(e) {
    $('#makelistcheckeModal').modal('show');
    $('#directbankopnmodal').modal('hide');
});
$("body").on("click", ".purchase-btn", function(e) {
    $('#directbankopnmodal').modal('hide');
    $('#purchaseopnmodal').modal('show');
});

$("body").on("click", ".bnkback-arrow", function(e) {
    $('#directbankopnmodal').modal('show');
    $('#purchaseopnmodal').modal('hide');
});

// *** MAKE-LIST-MODAL-JS-END -------*/
/*------ PRODUCTS-DETAILS-SIDEBAR-JS-START ***/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 430) {
        $(".sticky-sidebar").addClass("fixedsidebar-header");
    } else {
        $(".sticky-sidebar").removeClass("fixedsidebar-header");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1445) {
        $(".sticky-sidebar").removeClass("fixedsidebar-header");
        $(".sticky-sidebar").addClass("removefixed-header");

    } else {
        $(".sticky-sidebar").removeClass("removefixed-header");
    }
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.sidebar-scroll').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();

/*------ PRODUCTS-DETAILS-SIDEBAR-JS-END ***/

/*------ FOOTER-ACTIVE-CLASS-ADD-JS-START ***/
$(document).ready(function() {
    $('.mobile-footer .mobile-icon a').click(function() {
        $('.mobile-icon a').removeClass("active");
        $(this).addClass("active");
    });
});
/*------ FOOTER-ACTIVE-CLASS-ADD-JS-END ***/

/*------ LISTING-SLIDER-ACTIVE-ADD-JS-START -------*/
$(document).ready(function() {
    $('.listingslider .MS-content .item').click(function() {
        $('.MS-content .item').removeClass("active");
        $(this).addClass("active");
    });
});
/*------ LISTING-SLIDER-ACTIVE-ADD-JS-END -------*/

/*------ CART-MOBILE-MODAL-JS-START ------*/

$("body").on("click", ".Mobile-address-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-add-Modalopn').modal('show');
});


$("body").on("click", ".Mobile-date-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-date-Modalopn').modal('show');
});

$("body").on("click", " .mobile-directbankbtn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-direct-Modalopn').modal('show');
});

$("body").on("click", " .Mobordernow-btn", function(e) {
    $('#Mobile-direct-Modalopn').modal('hide');
    $('#Mobile-processing-Modalopn').modal('show');
});

$("body").on("click", " .Mobileapply-coupon", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-couponapply-Modalopn').modal('show');
});

$("body").on("click", " .Mobdone-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-successfull-Modalopn').modal('show');
});
/*------ CART-MOBILE-MODAL-JS-END ------*/

/*------ ORDERS-MOBILE-MODAL-JS-START ------*/

$("body").on("click", ".Mobunavailable-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#takeaction-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewdetail-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#Viewdetail-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewtracking-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#viewtracking-Modalopn').modal('show');
});




/*------ ORDERS-MOBILE-MODAL-JS-END ------*/
/*------ PALLY-DETAILS-MOBILE-VIEW-MODAL-JS-START ------*/
$("body").on("click", ".Mobcartsussefullbtn", function(e) {
    $('#Mobselect-bottom').modal('hide');
    $('#Mobcartsuccessfull-Modalopn').modal('show');
});

$("body").on("click", ".Mobcartsussefullbtn", function(e) {
    $('#Mobselect-bottom').modal('hide');
    $('#Mobcartsuccessfull-Modalopn').modal('show');
});

$("body").on("click", ".Mobexistpally-btn", function(e) {
    $('#Mobcartsuccessfull-Modalopn').modal('hide');
    $('#Mobexistpally-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewexistpally-btn", function(e) {
    $('#Mobexistpally-Modalopn').modal('hide');
    $('#Mobviewexistpally-Modalopn').modal('show');
});

/*------ PALLY-DETAILS-MOBILE-VIEW-MODAL-JS-END ------*/



/*------ MORE-ICON-CLICK-MODAL-JS-START -------*/
 function myFunction() {
     var x = document.getElementById("moreModal-wrapper");
   if (x.style.display === "block") {
         x.style.display = "none";
    } else {
       x.style.display = "block";
     }
 }
/*------ MORE-ICON-CLICK-MODAL-JS-END -------*/


$('.scrool-bar .nav-link').on('click', function(event) {
            event.preventDefault();
            var target = this.hash,
                    menu = target;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top-90
                }, 800, 'swing', function () {
                    $(document).on("scroll", onScroll);
                });
          });







// window.addEventListener('click', function(e){   
//   if (document.getElementById('search_bars').contains(e.target)){
//     // Clicked in box
    
//     var dropdownssearch= $('#scrolling');
//     for (var i=0;i<dropdownssearch.length;i++){
//       dropdownssearch[i].style.display = 'block';
//     }
//     //$('#scrolling').style.display = 'block';
//   } else{
//     // Clicked outside the box
//     var dropdownssearch= $('#scrolling');
//     for (var i=0;i<dropdownssearch.length;i++){
//       dropdownssearch[i].style.display = 'none';

//     }
    
//   }
// });

window.addEventListener('click', function(e){   
  if (document.getElementById('search_bars').contains(e.target)){
    // Clicked in box
    
    var dropdownssearch= $('#scrolling');
    for (var i=0;i<dropdownssearch.length;i++){
      dropdownssearch[i].setAttribute(
   "style", "display: block; padding: 10px;");
    }
    //$('#scrolling').style.display = 'block';
  } else{
    // Clicked outside the box
    var dropdownssearch= $('#scrolling');
    for (var i=0;i<dropdownssearch.length;i++){
      dropdownssearch[i].setAttribute(
   "style", "display: none; padding: 0px;");

    }
    
  }
});




window.addEventListener('click', function(e){   
  if (document.getElementById('search_bars_list').contains(e.target)){
    // Clicked in box
    
    var dropdownssearch= $('#scrollings');
    for (var i=0;i<dropdownssearch.length;i++){
      dropdownssearch[i].setAttribute(
   "style", "display: block; padding: 10px;");
    }
    //$('#scrolling').style.display = 'block';
  } else{
    // Clicked outside the box
    var dropdownssearch= $('#scrollings');
    for (var i=0;i<dropdownssearch.length;i++){
      dropdownssearch[i].setAttribute(
   "style", "display: none; padding: 0px;");

    }
    
  }
});



// $(".star").click(function(){
//   $(".rating-main").addClass("active");
//    $(".rating-main").removeClass("active");
// });


// $(document).ready(function(){
//     $(".star").click(function(){
//       $(".rating-main").addClass("active");
//     });
//     $(".star").click(function(){
//       $(".rating-main").removeClass("active");
//     });
//   });

 // if (window.navigator.userAgent.indexOf('iPhone') != -1) {
 //            if (window.navigator.standalone == true) {
 //                window.location = "myapp://myparam";
 //            } else {
 //                document.write("please save this to your home screen");
 //        };} else {
 //                alert("Not iPhone!");
 //                document.location.href = 'please-open-from-an-iphone.html';
 //        };






// $(".newadress").click(function(){
//   $(".dd-manage-add").addClass("active-popup");
// });

// $(".newadress").click(function(){
//   $(".modal-backdrop").addClass("active-popup-fade");
// });









$(document).ready(function() {
  var ratingElem = $('.rating input[name="star"]');

  ratingElem.change(function() {
    if (this.checked) {
      $(this).parent().addClass("active");
    }
  });
});



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.datepicker').datepicker();

//   });


$(document).ready(function()
        {
            $('#date').bootstrapMaterialDatePicker
            ({
                  weekStart : 0,
                time: false,

                format: "dddd, DDdd MMMM YYYY",
                disabledDays: [7],
                disabledDates: ["2021-07-22"]
            });

            $.material.init()
        });

        


/******************owl-carousel-start********************* */

/***********category-slider-start*********/



//   $('.owl-carousel').owlCarousel({
//             loop: true,
//             margin: 5,
//             autoplay: true,
//             nav: true,
//             responsive: {
//                 0: {
//                     items: 2
//                 },
//                 800: {
//                     items: 2
//                 },
//                 14000: {
//                     items: 3
//                 }
//             }
//         })







/***********category-slider-end*********/






/******************owl-carousel-end********************* */




