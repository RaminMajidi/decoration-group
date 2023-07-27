document.addEventListener('DOMContentLoaded', function () {

    //event for sibar handler
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {
        edge: "right"
    });
    //********************* */

    //event for fixed action btn handler
    var elemsFloatingButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elemsFloatingButton, {});
    //********************* */

    //event for top_carousel handler
    var carousels = document.querySelectorAll('.carousel');
    M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: true,
    });

    setInterval(() => {
        M.Carousel.getInstance(carousels[0]).next()
    }, 5000)
    //********************* */

    //event for select input
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    //********************* */


    //event  toast message for confirm comment in article page
    document.getElementById('confirm_comment').addEventListener('click', function () {
        M.toast({
            html: 'نظر با موفقیت ثبت شد !',
            classes: 'green lighten-1'
        })
    })
    //********************* */

});
