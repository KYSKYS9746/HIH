$(function(){

    $('.MainVisual .VisualSlide').on('init afterChange', function(){
        const current = $('.MainVisual .VisualSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.MainVisual .VisualSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        fade: true,
    })

    $('.MainNews .MainNewsContent .right').slick({
        arrows: false,
        autoplay: true,
    })

    // $('.MainAbout .aboutcnt').slick({
    //     arrows: false,
    //     autoplay: true,
    // })

//     $('.Business .BusinessSlide').slick({
//         infinite: true,
//         slidesToShow: 4,
//   slidesToScroll: 4
//     })
})