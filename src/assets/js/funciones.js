function botonNav() {
    const boton = document.getElementById('boton-sidebar')
    const html = document.getElementById('html')
    const botonSidebarLeft = document.getElementById('boton-sidebar_left')
        // const botonSidebarLeft1 = document.getElementById('boton-sidebar_left1')
    const navbar = document.getElementById('content-buttons')
    const botonFixed = document.getElementById('content-button_fixed')
    const sidebar = document.getElementById('sidebar')
    const contenedor = document.getElementById('main')

    const ms = document.getElementById('dashbb')

    boton.addEventListener('click', function() {
        sidebar.classList.toggle('toggle');
        contenedor.classList.toggle('main');
        botonFixed.classList.remove('block');
        botonFixed.classList.add('align');
    })

    botonFixed.addEventListener('click', function() {
        sidebar.classList.toggle('toggle');
        contenedor.classList.toggle('main')
    })

    botonSidebarLeft.addEventListener('click', function() {
            html.classList.toggle('nav-open');


        })
  
    let scroll = document.documentElement.scrollTop
        // console.log(scroll)
    if (scroll >= 25) {
        navbar.classList.add('none');
        botonFixed.classList.add('block');
    } else {
        navbar.classList.remove('none');
        botonFixed.classList.remove('block');
    }

    function mostrarBotonFixed() {
        let scroll = document.documentElement.scrollTop
            // console.log(scroll)
        if (scroll >= 25) {
            navbar.classList.add('none');
            botonFixed.classList.add('block');
        } else {
            navbar.classList.remove('none');
            botonFixed.classList.remove('block');
        }
    }

    window.addEventListener('scroll', mostrarBotonFixed);
}

function slider6() {
    // setTimeout(function() {

    //     $('.items').slick({
    //         dots: true,
    //         infinite: false,
    //         speed: 300,
    //         infinite: true,
    //         slidesToShow: 4,
    //         slidesToScroll: 4,
    //         responsive: [{
    //                 breakpoint: 1367,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     slidesToScroll: 3,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 1025,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     slidesToScroll: 3,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 769,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 2
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1
    //                 }
    //             }
    //             // You can unslick at a given breakpoint now by adding:
    //             // settings: "unslick"
    //             // instead of a settings object
    //         ]
    //     });
    // }, 500);

    $('.items').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

}

function select(){
    var x = document.getElementById("optionValue").value;
    return x;

}
    
