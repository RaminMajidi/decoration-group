document.addEventListener('DOMContentLoaded', function () {

    //event for sibar handler
    if (document.querySelectorAll('.sidenav')) {
        var sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav, {
            edge: "right"
        });
    }
    //********************* */

    //event for fixed action btn handler
    if (document.querySelectorAll('.fixed-action-btn')) {
        var elemsFloatingButton = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elemsFloatingButton, {});
    }
    //********************* */

    //event for top_carousel handler
    if (document.querySelector('.carousel.top_carousel')) {
        var carouselElems = document.querySelectorAll('.carousel.top_carousel');
        M.Carousel.init(carouselElems, {
            fullWidth: true,
            indicators: true,
        });

        setInterval(() => {
            M.Carousel.getInstance(carouselElems[0]).next()
        }, 5000)
    }
    //********************* */

    //event for select input
    if (document.querySelectorAll('select')) {
        var selectElems = document.querySelectorAll('select');
        M.FormSelect.init(selectElems, {});
    }
    //********************* */




    //event  toast message for confirm comment in article page
    document.getElementById('confirm_comment')?.addEventListener('click', function () {
        M.toast({
            html: 'نظر با موفقیت ثبت شد !',
            classes: 'green lighten-1'
        })
    })
    //********************* */


    //event for gallery carousel handler
    if (document.querySelectorAll('.carousel.gallery_div')) {
        var galleryItems = document.querySelectorAll('.carousel.gallery_div');
        M.Carousel.init(galleryItems, {});

        var simpleItem = document.querySelectorAll('.simple_item');
        for (const item of simpleItem) {
            item.addEventListener('click', function () {
                document.getElementById('gallery_section').classList.add('active');
            })
        }

        document.getElementById('close_gallery_section')?.addEventListener('click', function () {
            document.getElementById('gallery_section').classList.remove('active');
        })
    }
    //********************* */

});
