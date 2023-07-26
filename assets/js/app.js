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

    setInterval(()=>{
        M.Carousel.getInstance(carousels[0]).next()
    },5000)
    //********************* */
});
