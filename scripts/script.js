// Navbar scrolling feature
// Adapted from https://stackoverflow.com/questions/29646622/set-bootstrap-navbar-transparency-on-scroll
function checkScroll(){
    var scrollPoint = $('.navbar').height() * 2; //The point where the navbar changes in px
    if($(window).scrollTop() > scrollPoint) {
        $('.navbar').addClass("scrolled");
        $('#mc-logo').attr("src", "imgs/mc_scrolled.png");
    } else{
        $('.navbar').removeClass("scrolled");
        $('#mc-logo').attr("src", "imgs/mc.png");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}