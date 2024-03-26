/**
 * This is main script file that contains JS code.
 */
(function ($) {
    // Main Object
    var RESHOP = {};

    // Predefined variables
    var
        $filterGridWrapper = $('.filter__grid-wrapper'),
        $collectionOfFilterBtn = $('.filter__btn'),
        $primarySlider = $('#hero-slider'),
        $testimonialSlider = $('#testimonial-slider'),
        $collectionaClickScroll = $('[data-click-scroll]'),
        $collectionProductSlider = $('.product-slider'),
        $collectionTabSlider = $('.tab-slider'),
        $collectionInputCounter = $('.input-counter'),
        $collectionCountDown = $('[data-countdown]'),
        $collectionCartModalLink = $('[data-modal="modal"]'),
        $defaultAddressCheckbox = $('#get-address'),
        $collectionFormBill = $('[data-bill]'),
        $collectionPostGallery = $('.post-gallery'),
        $blogMasonry = $('.blog-m'),
        $collectionPostVideo = $('.post-video-block'),
        // $("iframe[src*="youtube"], iframe[src*="vimeo"]") jQuery Multiple Selector
        $collectionEmbedVideo = $('iframe[src*="youtube"]'),
        $productDetailElement = $('#pd-o-initiate'),
        $productDetailElementThumbnail = $('#pd-o-thumbnail'),
        $modalProductDetailElement = $('#js-product-detail-modal'),
        $modalProductDetailElementThumbnail = $('#js-product-detail-modal-thumbnail'),
        $shopCategoryToggleSpan = $('.shop-w__category-list .has-list > .js-shop-category-span'),// Recursive
        $shopGridBtn = $('.js-shop-grid-target'),
        $shopListBtn = $('.js-shop-list-target'),
        $shopPerspectiveRow = $('.shop-p__collection > div'),
        $shopFilterBtn = $('.js-shop-filter-target');



    // Bind Scroll Up to all pages
    RESHOP.initScrollUp = function() {
        $.scrollUp({
            scrollName: 'topScroll',
            scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade',
            zIndex: 100
        });
    };

    RESHOP.initScrollSpy = function() {
        var $bodyScrollSpy = $('#js-scrollspy-trigger');
        if ($bodyScrollSpy.length) {
            $bodyScrollSpy.scrollspy({
                target: '#init-scrollspy'
            });
        }
    };

    RESHOP.onClickScroll = function() {
        $collectionaClickScroll.on('click', function (e) {
            // prevent default behavior means page doesn't move or show up id's on browser status-bar
            e.preventDefault();
            // Get Target
            var target = $(this).data('click-scroll');
            // check if anchor has hash
            if ($(target).length) {
                $('html').animate({
                    // .offset() is jQuery function and it returns jQuery object which
                    // has top, left, bottom property and returns total distance from the html container
                    scrollTop: $(target).offset().top
                }, 1000, function () {
                });
            }
        });
    };

    // Bind Tooltip to all pages
    RESHOP.initTooltip = function() {

        $('[data-tooltip="tooltip"]').tooltip({
            // The default value for trigger is 'hover focus',
            // thus the tooltip stay visible after a button is clicked,
            // until another button is clicked, because the button is focused.
            trigger : 'hover'
        });
    };

    // Bind Modals
    RESHOP.initModal = function() {
        // Check if these anchors are on page
        if ($collectionCartModalLink.length) {
            $collectionCartModalLink.on('click',function () {
                var getElemId = $(this).data('modal-id');
                $(getElemId).modal({
                    backdrop: 'static',
                    keyboard: false,
                    show:true
                });


            });
        }

    };

    // Default Billing Address
    RESHOP.defaultAddressCheckbox = function() {
        if ($defaultAddressCheckbox.length) {
            $defaultAddressCheckbox.change(function () {
                if (this.checked) {
                    $collectionFormBill.prop("disabled", true);
                    $('#make-default-address').prop("checked", false);
                } else {
                    $collectionFormBill.prop("disabled", false);
                }
            });

        }
    };





    RESHOP.reshopNavigation = function() {
        $('#navigation').shopNav();
        $('#navigation1').shopNav();
        $('#navigation2').shopNav();
        $('#navigation3').shopNav();
    };

    RESHOP.onTabActiveRefreshSlider = function() {
        // When showing a new tab, the events fire.
        // Specificity = 2
        $('.tab-list [data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // Get the current click id of tab
            var currentID = $(e.target).attr('href');
            // Trigger refresh `event` to current active `tab`
            $(currentID + '.active').find('.tab-slider').trigger('refresh.owl.carousel');
        });
    };

    // Bind all sliders into the page
    RESHOP.primarySlider = function() {
        if ($primarySlider.length) {
            $primarySlider.owlCarousel({
                items: 1,
                autoplayTimeout: 8000,
                loop: true,
                margin: -1,
                dots: false,
                smartSpeed: 1500,
                rewind: false, // Go backwards when the boundary has reached
                nav: false,
                responsive: {
                    992: {
                        dots: true
                    }
                }
            });
        }
    };

    // Bind all sliders into the page
    RESHOP.productSlider = function() {
        // 0 is falsy value, 1 is truthy
        if ($collectionProductSlider.length) {
            $collectionProductSlider.on('initialize.owl.carousel', function () {
                $(this).closest('.slider-fouc').removeAttr('class');
            }).each(function () {
                var thisInstance = $(this);
                var itemPerLine = thisInstance.data('item');
                thisInstance.owlCarousel({
                    autoplay: false,
                    loop: false,
                    dots: false,
                    rewind: true,
                    smartSpeed: 1500,
                    nav: true,
                    navElement: 'div',
                    navClass: ['p-prev', 'p-next'],
                    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: itemPerLine - 2
                        },
                        991: {
                            items: itemPerLine - 1
                        },
                        1200: {
                            items: itemPerLine
                        }
                    }
                });
            });
        }
    };


    // Bind all sliders into the page
    RESHOP.tabSlider = function() {
        if ($collectionTabSlider.length) {
            $collectionTabSlider.on('initialize.owl.carousel', function () {
                $(this).closest('.slider-fouc').removeAttr('class');
            }).each(function () {
                var thisInstance = $(this);
                var itemPerLine = thisInstance.data('item');
                thisInstance.owlCarousel({
                    autoplay: false,
                    loop: false,
                    dots: false,
                    rewind: true,
                    smartSpeed: 1500,
                    nav: true,
                    navElement: 'div',
                    navClass: ['t-prev', 't-next'],
                    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: itemPerLine - 2
                        },
                        991: {
                            items: itemPerLine - 1
                        },
                        1200: {
                            items: itemPerLine
                        }
                    }
                });
            });
        }
    };

    // Bind Brand slider
    RESHOP.brandSlider = function() {
        var $brandSlider = $('#brand-slider');
        // Check if brand slider on the page
        if ($brandSlider.length) {
            var itemPerLine = $brandSlider.data('item');
            $brandSlider.on('initialize.owl.carousel', function () {
                $(this).closest('.slider-fouc').removeAttr('class');
            }).owlCarousel({
                autoplay: false,
                loop: false,
                dots: false,
                rewind: true,
                nav: true,
                navElement: 'div',
                navClass: ['b-prev', 'b-next'],
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 3,
                    },
                    991: {
                        items: itemPerLine
                    },
                    1200: {
                        items: itemPerLine
                    }
                }

            });
        }
    };

    // Testimonial Slider
    RESHOP.testimonialSlider = function() {
        // Check if Testimonial-Slider on the page
        if ($testimonialSlider.length) {
            $testimonialSlider.on('initialize.owl.carousel', function () {
                $(this).closest('.slider-fouc').removeAttr('class');
            }).owlCarousel({
                items:1,
                autoplay: false,
                loop: false,
                dots: true,
                rewind: false,
                smartSpeed: 1500,
                nav: false
            });
        }
    };
    // Remove Class from body element
    RESHOP.appConfiguration = function() {
        $('body').removeAttr('class');
        $('.preloader').removeClass('is-active');
    };

    // Bind isotope filter plugin
    RESHOP.isotopeFilter = function() {

        // Check if filter grid wrapper on the page
        if ($filterGridWrapper.length) {

            $filterGridWrapper.isotope({
                itemSelector:'.filter__item',
                filter: '*'
            });
        }

        // Check if filter buttons are on page then attach click
        if ($collectionOfFilterBtn.length) {
            // Attack click event to these filter buttons
            $collectionOfFilterBtn.on('click',function(){
               // Get Value of the attribute data-filter
               var selectorValue = $(this).attr('data-filter');
               // Now initialize isotope plugin
                $filterGridWrapper.isotope({
                    filter:selectorValue
                });
               $(this).closest('.filter-category-container').find('.js-checked').removeClass('js-checked');
               $(this).addClass('js-checked');
            });
        }
    };

    // Bind countdown plugin
    RESHOP.timerCountDown = function() {
        // Check if Count Down on the page
        if ($collectionCountDown.length) {
            $collectionCountDown.each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                      $this.html(event.strftime('<div class="countdown__content"><div><span class="countdown__value">%D</span><span class="countdown__key">Days</span></div></div><div class="countdown__content"><div><span class="countdown__value">%H</span><span class="countdown__key">Hours</span></div></div><div class="countdown__content"><div><span class="countdown__value">%M</span><span class="countdown__key">Mins</span></div></div><div class="countdown__content"><div><span class="countdown__value">%S</span><span class="countdown__key">Secs</span></div></div>'));
                });
            });
        }

    };

    // Input Counter
    RESHOP.initInputCounter = function() {
        // Check if Input Counters on the page
        if ($collectionInputCounter.length) {
            // Attach Click event to plus button
            $collectionInputCounter.find('.input-counter__plus').on('click',function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) + 1; // Number + Number
                $input.val(count).change();
            });
            // Attach Click event to minus button
            $collectionInputCounter.find('.input-counter__minus').on('click',function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1; // Number - Number
                $input.val(count).change();
            });
            // Fires when the value of the element is changed
            $collectionInputCounter.find('input').change(function () {
                var $this = $(this);
                var min = $this.data('min');
                var max = $this.data('max');
                var val = parseInt($this.val());// Current value
                // Restrictions check
                if (!val) {
                   val = 1;
                }
                // The min() method returns the number with the lowest value
                val = Math.min(val,max);
                // The max() method returns the number with the highest value
                val = Math.max(val,min);
                // Sets the Value
                $this.val(val);
            });
        }
    };


    // Blog Post Gallery
    RESHOP.blogPostGallery = function() {
        if ($collectionPostGallery.length) {
            $collectionPostGallery.on('initialize.owl.carousel', function () {
                $(this).closest('.slider-fouc').removeAttr('class');
            }).each(function () {
                $(this).owlCarousel({
                    items:1,
                    autoplay: false,
                    loop: false,
                    dots: false,
                    rewind: true,
                    smartSpeed: 1500,
                    nav: true,
                    navElement: 'div',
                    navClass: ['post-prev', 'post-next'],
                    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
                });
            });
        }
    };

    // Blog Post Masonry
    RESHOP.blogPostMasonry = function() {
        if ($blogMasonry.length) {
            $blogMasonry.find('.blog-m-init').isotope({
                itemSelector: '.blog-m__element',
                layoutMode: 'masonry'
            });
        }
    };

    // Blog Post Video
    RESHOP.blogPostVideo = function() {
        if ($collectionPostVideo.length) {
            $collectionPostVideo.on('click',function (e) {
                e.preventDefault();
                var $this = $(this);
                // Find immediate child that has .bp__video class
                var myVideo = $this.find('.post-video')[0];
                // Add ended event
                $(myVideo).on('ended',function () {
                    $this.removeClass('process');// Add play icon
                });
                // By default it is paused
                if (myVideo.paused) {
                    // Play Video
                    myVideo.play();
                    $(this).addClass('process');
                    if ($(this).hasClass('pause')) {
                        $(this).removeClass('pause');
                    }
                } // if user again click that block just pause the video and add icon
                else {
                    myVideo.pause();
                    $(this).addClass('pause');
                }
            });
        }
    };

    // Blog Post Embed Video
    RESHOP.blogPostEmbedVideo = function() {
        if ($collectionEmbedVideo.length) {
            $collectionEmbedVideo.parent().fitVids();
        }
    };




    // Product Detail Init
    RESHOP.productDetailInit = function() {
      if ($productDetailElement.length && $productDetailElementThumbnail.length) {

          var ELEVATE_ZOOM_OBJ = {
              borderSize: 1,
              autoWidth:true,
              zoomWindowWidth: 540,
              zoomWindowHeight: 540,
              zoomWindowOffetx: 10,
              borderColour: '#e9e9e9',
              cursor: 'pointer'
          };
            // Fires after first initialization
          $productDetailElement.on('init', function () {
              $(this).closest('.slider-fouc').removeClass('slider-fouc');
          });

          $productDetailElement.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite:false,
              arrows: false,
              dots: false,
              fade: true,
              asNavFor: $productDetailElementThumbnail
          });
          // Init elevate zoom plugin to the first image
          $('#pd-o-initiate .slick-current img').elevateZoom(ELEVATE_ZOOM_OBJ);

          // Fires before slide change
          $productDetailElement.on('beforeChange', function(event, slick, currentSlide, nextSlide){
              // Get the next slide image
              var $img = $(slick.$slides[nextSlide]).find('img');
              // Remove old zoom elements
              $('.zoomWindowContainer,.zoomContainer').remove();
              // Reinit elevate zoom plugin to the next slide image
              $($img).elevateZoom(ELEVATE_ZOOM_OBJ);
          });

          // Init Lightgallery plugin
          $productDetailElement.lightGallery({
              selector: '.pd-o-img-wrap',// lightgallery-core
              download: false,// lightgallery-core
              thumbnail: false,// Thumbnails
              autoplayControls: false,// Autoplay-plugin
              actualSize: false,// Zoom-plugin: Enable actual pixel icon
              hash: false, // Hash-plugin
              share: false// share-plugin
          });
          // Thumbnail images
          // Fires after first initialization
          $productDetailElementThumbnail.on('init', function () {
              $(this).closest('.slider-fouc').removeAttr('class');
          });

          $productDetailElementThumbnail.slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite:false,
              arrows: true,
              dots: false,
              focusOnSelect: true,
              asNavFor: $productDetailElement,
              prevArrow:'<div class="pt-prev"><i class="fas fa-angle-left"></i>',
              nextArrow:'<div class="pt-next"><i class="fas fa-angle-right"></i>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 4
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 3
                      }
                  },
                  {
                      breakpoint: 576,
                      settings: {
                          slidesToShow: 2
                      }
                  }
              ]
          });
      }
    };

    // Modal Product Detail Init
    RESHOP.modalProductDetailInit = function() {
        if ($modalProductDetailElement.length && $modalProductDetailElementThumbnail.length) {
            $modalProductDetailElement.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:false,
                arrows: false,
                dots: false,
                fade: true,
                asNavFor: $modalProductDetailElementThumbnail
            });

            $modalProductDetailElementThumbnail.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite:false,
                arrows: true,
                dots: false,
                focusOnSelect: true,
                asNavFor: $modalProductDetailElement,
                prevArrow:'<div class="pt-prev"><i class="fas fa-angle-left"></i>',
                nextArrow:'<div class="pt-next"><i class="fas fa-angle-right"></i>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
            // Hook into Bootstrap shown event and manually trigger 'resize' event
            // so that Slick recalculates the widths
            $('#quick-look').on('shown.bs.modal', function () {
                $modalProductDetailElement.resize();
            });
        }
    };
    // Shop Category Toggle Functionality
    RESHOP.shopCategoryToggle = function() {
        if ($shopCategoryToggleSpan.length) {
            $shopCategoryToggleSpan.on('click', function () {
                $(this).toggleClass('is-expanded');
                $(this).next('ul').stop(true, true).slideToggle();
            });
        }
    };



    // Shop Perspective Change
    RESHOP.shopPerspectiveChange = function() {
          if ($shopGridBtn.length && $shopListBtn.length)   {
              $shopGridBtn.on('click',function () {
                  $(this).addClass('is-active');
                  $shopListBtn.removeClass('is-active');
                  $shopPerspectiveRow.removeClass('is-list-active');
                  $shopPerspectiveRow.addClass('is-grid-active');
              });
              $shopListBtn.on('click',function () {
                  $(this).addClass('is-active');
                  $shopGridBtn.removeClass('is-active');
                  $shopPerspectiveRow.removeClass('is-grid-active');
                  $shopPerspectiveRow.addClass('is-list-active');
              });
          }
    };
    // Shop Side Filter Settings
    RESHOP.shopSideFilter = function() {
        if ($shopFilterBtn.length) {
            $shopFilterBtn.on('click',function () {
                // Add Class Active
                $(this).toggleClass('is-active');
                // Get Value of the attribute data-side
                var target = $(this).attr('data-side');
                // Open Side
                $(target).toggleClass('is-open');
            });
        }
    };

    // Show Newsletter Modal
    RESHOP.showNewsletterModal = function() {
        if ($('#newsletter-modal').length) {
            setTimeout(function () {
                // Manually opens a modal
                $('#newsletter-modal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: true
                });
            }, 5000);
        }
    };

    // Check everything including DOM elements and images loaded
    $(window).on('load',function () {
        RESHOP.showNewsletterModal();
        if ($primarySlider.length) {
            // Play slider when everything is loaded
            $primarySlider.data('owl.carousel').options.autoplay = true;
            $primarySlider.trigger('refresh.owl.carousel');
        }
    });


        RESHOP.initScrollUp();
        RESHOP.initTooltip();
        RESHOP.initModal();
        RESHOP.defaultAddressCheckbox();
        RESHOP.initScrollSpy();
        RESHOP.onClickScroll();
        RESHOP.reshopNavigation();
        RESHOP.primarySlider();
        RESHOP.productSlider();
        RESHOP.tabSlider();
        RESHOP.onTabActiveRefreshSlider();
        RESHOP.brandSlider();
        RESHOP.testimonialSlider();
        RESHOP.appConfiguration();
        RESHOP.isotopeFilter();
        RESHOP.timerCountDown();
        RESHOP.initInputCounter();
        RESHOP.blogPostGallery();
        RESHOP.blogPostVideo();
        RESHOP.blogPostEmbedVideo();
        RESHOP.blogPostMasonry();
        RESHOP.productDetailInit();
        RESHOP.modalProductDetailInit();
        RESHOP.shopCategoryToggle();
        RESHOP.shopPerspectiveChange();
        RESHOP.shopSideFilter();  
})(jQuery);

//Chuông noel
document.write('<style type="text/css">body{padding-bottom:0px}</style><img style="position:fixed;z-index:9999;top:0;left:0" src="https://lh6.googleusercontent.com/-c8CoUvCourw/UMcWWTeBE-I/AAAAAAAABcU/q-j9X7733zw/s150/top-left.png"/><img style="position:fixed;z-index:9999;top:0;right:0" src="https://lh5.googleusercontent.com/-JABklf9ModU/UMcWWzSSJ4I/AAAAAAAABcY/g4sZMhrgjXU/s150/top-right.png"/><div style="position:fixed;z-index:9999;bottom:30px;left:30px" src="https://lh4.googleusercontent.com/-mEgGUg-ou4k/UMcz0qy2NhI/AAAAAAAABc0/gF1uW4iE6y0/s180/bottom-left.png"/>');var no=100;var hidesnowtime=0;var snowdistance='pageheight';var ie4up=(document.all)?1:0;var ns6up=(document.getElementById&&!document.all)?1:0;function iecompattest(){return(document.compatMode&&document.compatMode!='BackCompat')?document.documentElement:document.body}var dx,xp,yp;var am,stx,sty;var i,doc_width=800,doc_height=600;if(ns6up){doc_width=self.innerWidth;doc_height=self.innerHeight}else if(ie4up){doc_width=iecompattest().clientWidth;doc_height=iecompattest().clientHeight}dx=new Array();xp=new Array();yp=new Array();am=new Array();stx=new Array();sty=new Array();for(i=0;i<no;++i){dx[i]=0;xp[i]=Math.random()*(doc_width-50);yp[i]=Math.random()*doc_height;am[i]=Math.random()*20;stx[i]=0.02+Math.random()/10; sty[i]=0.7+Math.random();if(ie4up||ns6up){document.write('<div id="dot'+i+'" style="POSITION:absolute;Z-INDEX:'+i+';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:18px;color:#fff">*</span><\/div>')}}function snowIE_NS6(){doc_width=ns6up?window.innerWidth-10:iecompattest().clientWidth-10;doc_height=(window.innerHeight&&snowdistance=='windowheight')?window.innerHeight:(ie4up&&snowdistance=='windowheight')?iecompattest().clientHeight:(ie4up&&!window.opera&&snowdistance=='pageheight')?iecompattest().scrollHeight:iecompattest().offsetHeight;for(i=0;i<no;++i){yp[i]+=sty[i];if(yp[i]>doc_height-50){xp[i]=Math.random()*(doc_width-am[i]-30);yp[i]=0;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random()}dx[i]+=stx[i];document.getElementById('dot'+i).style.top=yp[i]+'px';document.getElementById('dot'+i).style.left=xp[i]+am[i]*Math.sin(dx[i])+'px'}snowtimer=setTimeout('snowIE_NS6()',10)}function hidesnow(){if(window.snowtimer){clearTimeout(snowtimer)}for(i=0;i<no;i++)document.getElementById('dot'+i).style.visibility='hidden'}if(ie4up||ns6up){snowIE_NS6();if(hidesnowtime>0)setTimeout('hidesnow()',hidesnowtime*1000)}
//Kết thúc chuông noel


// Áp mã khuyến mãi//
 // Hàm này sẽ được gọi khi người dùng nhấn nút "Áp dụng"
 function applyCoupon() {
    var couponCode = document.getElementById('coupon').value; // Lấy giá trị nhập vào từ input có id 'coupon'
    var messageElement = document.getElementById('coupon-msg'); // Lấy phần tử để hiển thị thông báo

    // Kiểm tra giá trị nhập vào và cập nhật thông báo phù hợp
    if (couponCode === 'NOEL2023GR9') {
      messageElement.textContent = "Chúc mừng, mã giảm giá có thể được áp dụng";
    } else {
      messageElement.textContent = "Mã giảm giá đã hết hạn hoặc không có";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Gắn hàm applyCoupon vào sự kiện click của nút "Áp dụng"
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
  });
// Hàm này sẽ được gọi khi người dùng nhấn nút "Áp dụng"
function applyCoupon() {
    var couponCode = document.getElementById('coupon').value; // Lấy giá trị nhập vào từ input có id 'coupon'
    var messageElement = document.getElementById('coupon-msg'); // Lấy phần tử để hiển thị thông báo
    var discountRate = 20; // Giảm giá 20%
  
    // Kiểm tra giá trị nhập vào và áp dụng mã giảm giá nếu đúng
    if (couponCode === 'NOEL2023GR9') {
      applyDiscount(discountRate);
      messageElement.textContent = "Chúc mừng, mã giảm giá đã được áp dụng";
    } else {
      messageElement.textContent = "Mã giảm giá đã hết hạn hoặc không hợp lệ";
    }
  }
  
  // Hàm để áp dụng giảm giá và cập nhật giỏ hàng
  function applyDiscount(discountRate) {
    var cartTotalElement = document.getElementsByClassName("cart-total-price")[0];
    var cartTotal = parseFloat(cartTotalElement.innerText.replace('đ', '').replace(/,/g, ''));
  
    // Tính toán số tiền giảm giá
    var discount = (cartTotal * discountRate) / 100;
  
    // Áp dụng giảm giá vào tổng số tiền
    var discountedTotal = cartTotal - discount;
  
    // Cập nhật tổng số tiền trong giỏ hàng
    cartTotalElement.innerText = discountedTotal.toLocaleString('vi-VN') + 'đ';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Gắn hàm applyCoupon vào sự kiện click của nút "Áp dụng"
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
  });
  


// Khai báo biến để lưu tỷ lệ giảm giá và số tiền giảm giá tối đa
var discountPercentage = 10; // Giảm giá 10%
var maxDiscountAmount = 50000; // Tối đa 50k

// Hàm để áp dụng giảm giá và cập nhật giỏ hàng
function applyDiscount() {
  var cartTotalElement = document.getElementsByClassName("cart-total-price")[0];
  var cartTotal = parseFloat(cartTotalElement.innerText.replace('đ', '').replace(/,/g, ''));

  // Tính toán số tiền giảm giá
  var discount = (cartTotal * discountPercentage) / 100;

  // Nếu số tiền giảm giá lớn hơn số tiền cho phép, sử dụng số tiền giảm giá tối đa
  discount = discount > maxDiscountAmount ? maxDiscountAmount : discount;

  // Áp dụng giảm giá vào tổng số tiền
  var discountedTotal = cartTotal - discount;

  // Cập nhật tổng số tiền trong giỏ hàng
  cartTotalElement.innerText = discountedTotal + 'VNĐ';

  alert('Giảm giá 10% đơn hàng, tối đa 50k. Lấy mã thành công!');
}

// Thêm bộ lắng nghe sự kiện cho nút "Áp dụng"
var applyButtons = document.getElementsByClassName("coupon-status");
for (var i = 0; i < applyButtons.length; i++) {
  applyButtons[i].addEventListener("click", function() {
    applyDiscount();
  });
}

// Mã hiện có để cập nhật giỏ hàng, xóa mặt hàng, và thay đổi số lượng
// ...

// Gọi hàm updatecart để cập nhật giỏ hàng lần đầu
updatecart();

