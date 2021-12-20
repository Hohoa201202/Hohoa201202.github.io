const phones = (() => {
    const products = [
        {
            img: 'url(./assets/img/product/p1.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10122',
            price: '36.600.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p2.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B2911',
            price: '31.000.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p3.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B2829',
            price: '28.650.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p4.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K R2228',
            price: '22.450.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p5.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10141',
            price: '21.950.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p6.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10146',
            price: '14.950.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p7.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10131DW',
            price: '8.750.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p8.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10181C',
            price: '33.550.000đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p9.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B2789',
            price: '68.950.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
        {
            img: 'url(./assets/img/product/p10.jpg)',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B2855',
            price: '27.100.000 đ',
            markerList: [],
            linkProduct: '#',
            linkGuarantee: '#',
        },
    ];

    const banners = [
        {
            img: './assets/img/banner/banner1.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner/banner2.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner/banner3.jpg',
            link: '#'
        },
    ]

    let currentBanner = 0;
    const prevBtn = document.querySelector('.phone-banner__btn-prev');
    const nextBtn = document.querySelector('.phone-banner__btn-next');
    let firstBanner;
    let bannerPaginationBtns;
    let setTimeChangeBanner;

    return {
        render() {
            const htmlPhone = products.map(product => {
                const markers = product.markerList.reduce((acc, curr) => {
                    return acc + `active-marker--${curr} `;
                }, '');
                return `
                <div class="col l-2-4 l-3-m m-4 c-6 container__product">
                    <div class="container-product__item">
                        <div class="container-product__item-heading">
                            <div class="container-product__item-img" style="background-image: ${product.img};"></div>
                    
                            <div class="container-product-guarantee">
                                <a href=${product.linkProduct} class="container-product__item-link">
                                    <div class="container-product-guarantee__heading">
                                        <i class="container-product-guarantee__heading-icon far fa-gem"></i>
                                        <h3 class="container-product-guarantee__heading-text">LUXURY Care</h3>
                                    </div>

                                    <ul class="container-product-guarantee__list">
                                        <li class="container-product-guarantee__item">BH sản phẩm vĩnh viễn.</li>
                                        <li class="container-product-guarantee__item">Đổi mới 15 ngày đầu tiên</li>
                                        <li class="container-product-guarantee__item">Hỗ trợ thu cũ đổi mới.</li>
                                        <li class="container-product-guarantee__item">Miễn phí vệ sinh sản phẩm trọn đời.</li>
                                    </ul>
                                </a>
                                <a href=${product.linkGuarantee} class="container-product-guarantee__btn">BH vĩnh viễn</a>
                            </div>
                        </div>
                        <div class="container-product__item-wrap">
                            <div class="container-product__item-info">
                                <a href="#" class="container-product__item-name">
                                    ${product.name}
                                </a>
                            </div>
                            <div class="container-product__item-buy">
                                <span class="container-product__item-price">
                                    ${product.price}
                                </span>
                            </div>
                            <div class="container-product__item-buy">
                                <a href=${product.linkProduct} class="container-product__item-btn">MUA</a>
                            </div>
                        </div>
                        <ul class="container-product__item-gifts-list">
                            <li class="container-product__item-gift">
                                1. Tặng: 
                                <span class="container-product__item-gift--highlight">
                                    Voucher mua hàng trị giá 500K
                                </span>
                                khi mua từ 2 sản phẩm
                            </li>
                            <li class="container-product__item-gift">
                                2. Giảm: 
                                <span class="container-product__item-gift--highlight">
                                    200K
                                </span>
                                áp dụng khi thanh toán bằng  
                                <span class="container-product__item-gift--highlight">
                                    MasterCard
                                </span>
                            </li>
                        </ul>
                        <ul class="container-product-marker__list ${markers}">
                            <li class="container-product-marker__item container-product-marker__item--new">Mới</li>
                            <li class="container-product-marker__item container-product-marker__item--hot">Hot</li>
                        </ul>
                    </div>
                </div>
                `;
            }).join('');

            document.querySelector('.phone-products').innerHTML = htmlPhone;

            const percent = 100 / banners.length;
            const bannerPaginations = [];
            const htmlBanner = banners.map((banner, index) => {
                let first = '';
                if (index === 0) {
                    first = 'banner--first';
                    bannerPaginations.push(`<div data-set="${percent*index}%" class="phone-banner-pagination__item active"></div>`);
                } else {
                    bannerPaginations.push(`<div data-set="-${percent*index}%" class="phone-banner-pagination__item"></div>`);
                }
                return `
                    <a href=${banner.link} class="banner__link ${first}" style="width: ${percent}%">
                        <img src=${banner.img} alt="Banner ${index + 1}" class="banner__img">
                    </a>
                `
            }, '').join('');

            document.querySelector('.phone-banner__list').innerHTML = htmlBanner;
            document.querySelector('.phone-banner__list').style.width = `${banners.length * 100}%`;
            document.querySelector('.phone-banner-pagination').innerHTML = bannerPaginations.join('');
        },
        handleBanner() {
            const _this = this;
            firstBanner = document.querySelector('.banner--first');
            bannerPaginationBtns = document.querySelectorAll('.phone-banner-pagination__item');

            prevBtn.onclick = () => {
                this.prevBanner();
                this.autoChangeBanner(true);
            }

            nextBtn.onclick = () => {
                this.nextBanner();
                this.autoChangeBanner(true);
            }

            bannerPaginationBtns.forEach(function(btn, index) {
                btn.onclick = () => {
                    currentBanner = index;
                    firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
                    document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
                    bannerPaginationBtns[currentBanner].classList.add('active');
                    _this.autoChangeBanner(true);
                }
            });
        },
        prevBanner() {
            currentBanner -= 1;
            if (currentBanner < 0) {
                currentBanner = banners.length - 1;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        nextBanner() {
            currentBanner += 1;
            if (currentBanner > banners.length - 1) {
                currentBanner = 0;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        autoChangeBanner(isClick) {
            const _this = this;
            if (isClick) {
                clearInterval(setTimeChangeBanner);
                setTimeChangeBanner = setInterval(function() {
                    _this.nextBanner();
                }, 3000);
            } else {  
                setTimeChangeBanner = setInterval(function() {
                    _this.nextBanner();
                }, 3000);
            }
        },
        init() {
            this.render();
            this.handleBanner();
            this.autoChangeBanner();
        }
    }
})();

phones.init();