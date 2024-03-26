/*!
 * Shop Nav v1.0.0 Lightweight plugin
 *
 * Copyright (c)
 *  Ahmad Hussnain

 * MIT License
 */

(function ($, window, document, undefined) {
    "use strict";

    $.fn.shopNav = function (options) {
        var defaults = {
                mobileBreakpoint: 1024,
            },
            // this is now jQuery Object
            settings = $.extend({}, defaults, options),
            bigScreenFlag = Number.MAX_VALUE,
            smallScreenFlag = 1,
            $element = this,
            mode,
            tabInit = false,
            $toggleBtn = $element.find(".toggle-button"),
            $closeSpan = $element.find(".ah-close"),
            $underneathSpanToggle = $element.find(".has-dropdown").children(".js-menu-toggle"),
            $megaBtn,
            $megaMenuItem,
            $megaMenuSpan,
            $megaMenuContent;

        return this.each(function () {
            /**
             * Returns Window Width
             */
            var windowWidth = function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            };
            /**
             * Check if the page has Mega menu
             */
            var checkTabs = function () {
                if ($element.find(".mega-menu").length > 0) {
                    tabInit = true;
                    // Get Mega button for click event
                    $megaBtn = $(".mega-text");
                    // Get all mega menu categories item for hover event
                    $megaMenuItem = $element.find(".mega-menu-list").find("li");
                    // Get all mega menu span for click event
                    $megaMenuSpan = $element.find(".mega-menu-list").find("span");
                    // Get all mega menu content
                    $megaMenuContent = $element.find(".mega-menu-content");
                }
            };
            /**
             * Global Event Handler for solving Mega Menu outside click problem
             */
            var globalBodyClick = function () {
                if ($megaBtn.hasClass("js-open")) {
                    $megaBtn.removeClass("js-open");
                }
            };
            /**
             * Click functionality for Mega Menu Button
             */
            var clickMegaBtn = function (e) {
                // Don't bubble up to the DOM element
                e.stopPropagation();
                // Add class on button
                $megaBtn.toggleClass("js-open");
            };
            /**
             * Mega menu off hovering effect on categories item on portrait mode
             */
            var bindEventsMegaMenu = function () {
                if (tabInit) {
                    if (mode === "landscape") {
                        $megaBtn.on("click", clickMegaBtn);
                        $(document.body).on("click", globalBodyClick);
                        $megaMenuItem.on("mouseenter", mouseEnterMegaItem);
                    } else {
                        $megaBtn.off("click");
                        $megaBtn.removeClass("js-open");
                        $(document.body).off("click", globalBodyClick);
                        $megaMenuSpan.on("click", clickMegaSpan);
                        $megaMenuItem.off("mouseenter").off("mouseleave");
                    }
                }
            };
            /**
             * Mega menu on hovering function
             */
            var mouseEnterMegaItem = function () {
                // Remove all old classes from list items
                $megaMenuItem.removeClass("js-active");
                // Remove all old classes from span
                $megaMenuSpan.removeClass("js-toggle-mark");
                // add class to new list item
                $(this).addClass("js-active");
                // add class to span
                $(this).find("span").addClass("js-toggle-mark");
                // remove all js-active classes from content
                $megaMenuContent.removeClass("js-active");
                // add to new one index() function only works on list items , divs
                $($megaMenuContent[$(this).index()]).addClass("js-active");
            };
            /**
             * Mega menu on click function
             */
            var clickMegaSpan = function () {
                // Remove all old classes from span
                $megaMenuSpan.removeClass("js-toggle-mark");
                // Remove all old classes from list items
                $megaMenuItem.removeClass("js-active");
                // add class to new span
                $(this).addClass("js-toggle-mark");
                // add class to parent li
                $(this).parent().addClass("js-active");
                // remove all js-active classes from content
                $megaMenuContent.removeClass("js-active");
                // add to new one index() function only works on list items , divs
                $($megaMenuContent[$(this).parent().index()]).addClass("js-active");
            };
            /**
             * Attach click on toggle button
             */
            var attachClickOnToggleBtn = function () {
                $toggleBtn.on("click", function () {
                    $element.addClass("js-open");
                });
            };
            /**
             * Attach click on close span
             */
            var attachClickOnCloseSpan = function () {
                // .menu-init
                // (child of menu-init) (toggle-button)
                // (child of menu-init) (ah-lg-mode)
                //      (child of ah-lg-mode) ah-close
                $closeSpan.on("click", function () {
                    $element.removeClass("js-open");
                });
            };

            /**
             * Attach click on spans that are place underneath (.has-dropdown) list item
             */
            var attachClickOnUnderneathSpan = function () {
                $underneathSpanToggle.on("click", function () {
                    $(this).toggleClass("js-toggle-mark");
                    // Show delay duration = 0 , slide toggle duration = 300
                    $(this).next().stop(true, true).slideToggle(300);
                });
            };

            /**
             * Flush plugin state from portrait mode
             */
            var flushPluginState = function () {
                // Remove .js-open class from the main element
                $element.removeClass("js-open");
                // Remove class from underneath spans
                $underneathSpanToggle.removeClass("js-toggle-mark");
                // Remove display property from spans that are place underneath (.has-dropdown) list item
                $underneathSpanToggle.next().css("display", "");
            };

            /**
             * check browser width in real-time
             */
            var windowCheck = function () {
                // portrait mode
                if (windowWidth() <= settings.mobileBreakpoint && bigScreenFlag > settings.mobileBreakpoint) {
                    mode = "portrait";
                    bindEventsMegaMenu();
                }
                // landscape mode
                if (windowWidth() > settings.mobileBreakpoint && smallScreenFlag <= settings.mobileBreakpoint) {
                    mode = "landscape";
                    bindEventsMegaMenu();
                    // Flush plugin state from portrait mode
                    flushPluginState();
                }
                bigScreenFlag = windowWidth();
                smallScreenFlag = windowWidth();
            };

            // Check if the page has Mega menu
            checkTabs();
            // Attach click on toggle button
            attachClickOnToggleBtn();
            // Attach click on close span
            attachClickOnCloseSpan();
            // Attach click on spans that are place underneath (.has-dropdown) list item
            attachClickOnUnderneathSpan();
            // check browser width in real-time
            windowCheck();

            $(window).on("resize", function () {
                windowCheck();
            });
        });
    };
})(jQuery, window, document);
let list = document.getElementById("list");
let filter = document.querySelector(".filter");
let count = document.getElementById("count");
let listProducts = [
    {
        name: "Hạt Royal Canin Urinary S/O Mèo - Thức ăn dành cho mèo bị sỏi thận",
        category: "Shop cho mèo",
        price: "132.000 ",
        image: "https://bizweb.dktcdn.net/100/240/380/products/hinh-sp-08-b59ecad5-96dd-4b30-b559-dab96e400aad.jpg?v=1610966126447",
        rating: "★★★★",
        infoUrl: "product-detail-7.html",
    },

    {
        name: "Nutrience Subzero Fraser Valley – Thức Ăn Hạt Đặc Biệt Cho Mèo Từ Canada",
        category: "Shop cho mèo",
        price: "180.000 ",
        image: "https://www.maplepets.in/wp-content/uploads/2023/08/web3.png",
        rating: "★★★★★",
        infoUrl: "product-detail.html",
    },

    {
        name: "Petkit Pura X – Nhà Vệ Sinh Khử Mùi, Kháng Khuẩn Thông Minh Pura X",
        category: "Shop cho mèo",
        price: "300.000 ",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/276/018/products/c46aee-e560fcfbfbdf449cb8a3b1678e28c8fd-mv2.jpg?v=1622728451763",
        rating: "★★★",
        infoUrl: "product-detail-1.html",
    },

    {
        name: "Pate Tươi Bò Giữ Dáng Pet Choy Dành Cho Chó",
        category: "Shop cho chó",
        price: "95.000 ",
        image: "https://go.yolo.vn/wp-content/uploads/2020/10/D7_TCho_Bo_Cr-625x703.png",
        rating: "★★★★",
        infoUrl: "product-detail-2.html",
    },

    {
        name: "Máy Lọc Nước Cho Mèo Bông Hoa 2.4L",
        category: "Shop cho mèo",
        price: "355.000 ",
        image: "https://go.yolo.vn/wp-content/uploads/2021/01/may-kich-thich-meo-uong-nuoc-nhieu-hon-625x625.jpg",
        rating: "★★★",
        infoUrl: "product-detail-3.html",
    },

    {
        name: "Pate Whiskas cho mèo – Thơm ngon, kích thích ăn uống",
        category: "Shop cho mèo",
        price: "131.000 ",
        image: "https://bizweb.dktcdn.net/100/091/443/products/pate-whiskas-tui-cho-cho-meo.jpg?v=1619698288363",
        rating: "★★★★",
        infoUrl: "product-detail-4.html",
    },

    {
        name: "Hạt Pate Cho Mèo King Pet Lon 380gr - Pate Cho Mèo Mọi Lứa Tuổi",
        category: ["Shop cho mèo", "Shop cho chó"],
        price: "45.000 ", //ghi 2 thuộc tính
        image: "https://lzd-img-global.slatic.net/g/p/fc508e02d1b6c173213ee55187215d68.jpg_720x720q80.jpg",
        rating: "★★★★",
        infoUrl: "product-detail-5.html",
    },

    {
        name: "[1 viên] Tẩy giun Drontal plus dạng viên cho chó mèo",
        category: "Shop cho mèo",
        price: "45.000 ",
        image: "https://letrungpet.com/upload/product/drontal-cho-meo-2-8940.png",
        rating: "★★★★",
        infoUrl: "product-detail-6.html",
    },

    {
        name: "Broadline For Cats 2.5kg – Thuốc Nhỏ Gáy Trị Nội Ngoại Ký Sinh Trùng Cho Mèo Nhỏ",
        category: "Shop cho mèo",
        price: "260.000 ",
        image: "https://go.yolo.vn/wp-content/uploads/2021/01/yolo-nhap-khau-chinh-hang-cong-ty.jpg",
        rating: "★★★★",
        infoUrl: "product-detail-8.html",
    },

    {
        name: "PETTO SAN - CÁT THÁI LAN VỆ SINH CHO MÈO TÚI 5L",
        category: "Shop cho mèo",
        price: "65.000 ",
        image: "https://lzd-img-global.slatic.net/g/p/c5fecc2fd2833495644e5b609c3a15f8.jpg_720x720q80.jpg",
        rating: "★★★★",
        infoUrl: "product-detail-9.html",
    },

    {
        name: "Nhà Giấy Carton Lắp Ghép Cho Mèo Boss & Boxx",
        category: "Shop cho mèo",
        price: "75.000 ",
        image: "https://go.yolo.vn/wp-content/uploads/2021/01/hinh-san-pham-nha-giay-dep-cho-meo-boss-n-boxx-625x625.jpg",
        rating: "★★★★",
        infoUrl: "product-detail-10.html",
    },

    {
        name: "Áo Khủng Long Xanh Cho Chó Mèo",
        category: ["Shop cho mèo", "Shop cho chó"],
        price: "50.000 ",
        image: "https://down-vn.img.susercontent.com/file/45ab945e1875dac8b08be162f3cebb90_tn",
        rating: "★★★★",
        infoUrl: "product-detail-11.html",
    },

    {
        name: "Fronil Spot – Thuốc Trị Ve Rận, Ghẻ, Bọ Chét Nhỏ Giọt Ngoài Da",
        category: "Shop cho chó",
        price: "13.000 ",
        image: "https://yolo.vn/wp-content/uploads/2020/08/thuoc-tri-ve-ran-bo-chet-ghe-fronil-spot-625x625.png",
        rating: "★★★★",
        infoUrl: "product-detail-12.html",
    },
    // Cứ copy dòng trên ròi thêm bao nhiêu sản phẩm cũng được
];
// Tạo danh sách sản phẩm
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML = "";
    productFilter.forEach((item) => {
        let newItem = document.createElement("div");
        newItem.classList.add("item");

        // Thêm ảnh
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        // Thêm category
        let newCategory = document.createElement("div");
        newCategory.classList.add("category");
        newCategory.innerText = item.category; // Thay đổi theo dữ liệu thực tế
        newItem.appendChild(newCategory);

        // Thêm tên sản phẩm
        let newTitle = document.createElement("div");
        newTitle.classList.add("title");
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // Thêm đánh giá
        let newRating = document.createElement("div");
        newRating.classList.add("rating");
        newRating.innerText = item.rating; // Thay đổi theo dữ liệu thực tế
        newItem.appendChild(newRating);

        // Thêm giá tiền
        let newPrice = document.createElement("div");
        newPrice.classList.add("price");
        newPrice.innerText = item.price.toLocaleString() + " đ";
        newItem.appendChild(newPrice);

        // Thêm nút thêm vào giỏ hàng
        let addToCartButton = document.createElement("button");
        addToCartButton.classList.add("button", "add-to-cart-button");
        addToCartButton.innerText = "Thêm vào giỏ hàng";
        newItem.appendChild(addToCartButton);
        // Thêm nút thông tin sản phẩm
        let infoButton = document.createElement("button");
        infoButton.classList.add("button", "info-button");
        infoButton.innerText = "Thông tin sản phẩm";
        infoButton.addEventListener("click", function () {
            window.location.href = item.infoUrl;
        });

        newItem.appendChild(infoButton);

        //kết thúc hướng đến link chi tiết sản phẩm

        newItem.appendChild(infoButton);

        list.appendChild(newItem);
    });
}
filter.addEventListener("submit", function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter((item) => {
        // check category
        if (valueFilter.category.value != "") {
            if (item.category != valueFilter.category.value) {
                return false;
            }
        }

        // Check rating
        if (valueFilter.rating.value != "") {
            if (item.rating !== valueFilter.rating.value) {
                return false;
            }
        }

        // check name
        if (valueFilter.name.value != "") {
            if (!item.name.includes(valueFilter.name.value)) {
                return false;
            }
        }
        // check min price
        if (valueFilter.minPrice.value != "") {
            if (item.price < valueFilter.minPrice.value) {
                return false;
            }
        }
        //  check max price
        if (valueFilter.maxPrice.value != "") {
            if (item.price > valueFilter.maxPrice.value) {
                return false;
            }
        }

        return true;
    });
    showProduct(productFilter);
});
