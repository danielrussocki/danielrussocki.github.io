const main = {
    ready: (callback) => {
        if(document.readyState != "loading")
            callback();
        else
            document.addEventListener("DOMContentLoaded", callback);
    },
    breakpoints: {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576
    }
}

const select = (selector) => document.querySelector(selector);

main.ready(() => {
    $('.slick-slider__genotipo').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});

const data = {
    menuOpen: false,
    windowWidth: window.innerWidth,
    dinningRoom: false,
    sectionName: false,
    footerPhone: false,
    header: [
        {
            name: 'Home',
            href: '/',
            active: true
        }, {
            name: 'El proyecto',
            href: '/proyecto',
            active: false
        }, {
            name: 'Departamentos',
            href: '/departamentos',
            active: false
        }, {
            name: 'Ubicación',
            href: '/ubicacion',
            active: false
        }
    ],
    contact: [
        {
            icon: 'fas fa-phone-alt',
            href: 'tel:+5214425924154',
            data: '(442) 592 41 54'
        }, {
            icon: 'fab fa-facebook-f',
            href: 'https://facebook.com'
        }, {
            icon: 'fab fa-instagram-square',
            href: 'https://instagram.com'
        }
    ],
    models: [
        {
            name: 'Modelo PB 1',
            size: '147.75 m²',
            img: 'img/pb-1.png',
            sections: [
                {
                    name: 'Terraza',
                    img: 'img/garden-chair.png'
                }, {
                    name: 'Bodega',
                    img: 'img/house-icon.png'
                }, {
                    name: '3 cajones auto',
                    img: 'img/car-icon.png'
                }
            ]
        }, {
            name: 'Modelo PB 2',
            size: '144.56 m²',
            img: 'img/pb-2.png',
            sections: [
                {
                    name: 'Terraza',
                    img: 'img/garden-chair.png'
                }, {
                    name: 'Bodega',
                    img: 'img/house-icon.png'
                }, {
                    name: '3 cajones auto',
                    img: 'img/car-icon.png'
                }
            ]
        }
    ]
}

const app = new Vue({
    el: '#app',
    data: data,
    methods: {
        open: function(e) {
            this.menuOpen = true;
        },
        close: function(e) {
            this.menuOpen = false;
        },
        prevSlide: function(e) {
            $('.slick-slider__genotipo').slick("slickPrev");
        },
        nextSlide: function(e) {
            $('.slick-slider__genotipo').slick("slickNext");
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
            sizes();
        }
    },
    created() {
        if(this.windowWidth <= main.breakpoints.lg) {
            this.dinningRoom = true;
        } else {
            this.dinningRoom = false;
        }
        if(this.windowWidth <= main.breakpoints.xl) {
            this.sectionName = false;
        } else {
            this.sectionName = true;
        }
        if(this.windowWidth <= 500) {
            this.footerPhone = false;
        } else {
            this.footerPhone = true;
        }
    }
});

const sizes = () => {
    if(app.windowWidth <= main.breakpoints.lg) {
        app.dinningRoom = true;
    } else {
        app.dinningRoom = false;
    }
    if(app.windowWidth <= main.breakpoints.xl) {
        app.sectionName = false;
    } else {
        app.sectionName = true;
    }
    if(app.windowWidth <= 500) {
        app.footerPhone = false;
    } else {
        app.footerPhone = true;
    }
}