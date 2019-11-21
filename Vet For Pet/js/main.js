$(document).ready(function(){

    // HOME PAGE SLIDER SECTION
    
  $(".owl-carousel").owlCarousel();

    // END OF HOME PAGE SLIDER SECTION

    $("a.active").click(function() {
        alert("sad");
        $('a.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
})  