//= require jquery
//= require bootstrap-sprockets
//= require_tree .


$(function(){

  $(".tab").on("click", function(e){
    // Change active tab
    var clicked_tab = $(this);
    $(".tab").removeClass('active');
    clicked_tab.addClass('active');

    //start by hiding all of them
    $(".tab-content").addClass('hidden'); // How do I add an 'exception rule for selected content tab?'

    var target = clicked_tab.data('target');
    //show the one that needs to be shown
    var click_tab_content = $(target);
    click_tab_content.removeClass('hidden');

  });

});

$(document).ready(function() {

  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 728) {
      $('.navbar-wagon').addClass('navbar-wagon-fixed');
      // document.getElementById("logo").src="/images/logoalt.png";
    }
    if ($(window).scrollTop() < 789) {
      $('.navbar-wagon').removeClass('navbar-wagon-fixed');
      // document.getElementById("logo").src="/images/logotest.png";
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
