// Up Arrow Function
// const Arrow = document.querySelector(".ArrowBtn");
// const nav = document.querySelector("nav");

// Arrow.addEventListener("click",()=>{
//     nav.scrollIntoView({
//         behavior : "smooth"
//     })
// })




// Carousel Functionality
$('#First__Carousel .owl-carousel').owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows 
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 3500, // At What Time You Need The Carousel To scroll Automatically
   
    // This Is For The Animation Only Occurs For Single Data
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

            
    responsive: {
        0: {
            items:1,
            // nav : false,
            margin : 10,
        },
        600 : {
            items : 3,
            margin : 5,
        },
        1000 : {
            items : 3,
            // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
        },
    }
})

