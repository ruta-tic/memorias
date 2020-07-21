// When the user scrolls down 140px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    $("#navbar").css ("top",0);
  } else {
    $("#navbar").style.top = "-150px";
  }
}
*/
//Carrusel
var GLOBAL = {};
GLOBAL.current = 0;
GLOBAL.imagenes = new Array();
 
$(document).ready(function() {
    var numImages = 11;
    if (numImages <= 1) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }
 
    $('.left-arrow').on('click',function() {
        if (GLOBAL.current > 0) {
            GLOBAL.current = GLOBAL.current - 1;
        } else {
            GLOBAL.current = numImages - 3;
        }
 
        $(".carrusel").animate({"left": -($('#investigador_'+GLOBAL.current).position().left)}, 500);
 
        return false;
    });
 
    $('.right-arrow').on('click', function() {
        if (numImages > GLOBAL.current + 3) {
            GLOBAL.current = GLOBAL.current + 1;
        } else {
            GLOBAL.current = 0;
        }
 
        $(".carrusel").animate({"left": -($('#investigador_'+GLOBAL.current).position().left)}, 500);
 
        return false;
    }); 

//Ventana modal jQuery

    $('.modal').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();

        var id = $(this).attr('data-modal-id');

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
      
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
        $('body').css('position', "static");
        $('body').css('height', "100%");
        $('body').css('overflow', "hidden");

        //transition effect
        $(id).fadeIn(1000);
    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.window').hide();
        $('body').css('position', "inherit");
        $('body').css('height', "auto");
        $('body').css('overflow', "visible");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27) {
            e.preventDefault();
            $('.window').hide();
            $('body').css('position', "inherit");
            $('body').css('height', "auto");
            $('body').css('overflow', "visible");
        }
    });

    //menu vertical 1
    $(document).ready(function(){
        $("#btn-edutec").click(function(){
            $('.event').hide(500,"swing");
            $('data-event').slideDown(500,"swing");
        });
        $("#btn-integratic").click(function(){
            $('.event').hide(500,"swing");
            $('.integratic').slideDown(500,"swing");
        });
        $("#btn-edunovatic").click(function(){
            $('.event').hide(500,"swing");
            $('.edunovatic').slideDown(500,"swing");
        });
        $("#btn-foro1").click(function(){
            $('.event').hide(500,"swing");
            $('.foro1').slideDown(500,"swing");
        });
        $("#btn-foro2").click(function(){
            $('.event').hide(500,"swing");
            $('.foro2').slideDown(500,"swing");
        });
        $("#btn-foro3").click(function(){
            $('.event').hide(500,"swing");
            $('.foro3').slideDown(500,"swing");
        });
    });

    //menu vertical 2
    $(document).ready(function(){
        $("#btn-alex").click(function(){
            $('.exp').hide(500,"swing");
            $('.alex').slideDown(500,"swing");
            
        });
        $("#btn-catalina").click(function(){
            $('.exp').hide(500,"swing");
            $('.catalina').slideDown(500,"swing");
        });
        $("#btn-diana").click(function(){
            $('.exp').hide(500,"swing");
            $('.diana').slideDown(500,"swing");
        });
        $("#btn-jake").click(function(){
            $('.exp').hide(500,"swing");
            $('.jake').slideDown(500,"swing");
        });
        $("#btn-jas").click(function(){
            $('.exp').hide(500,"swing");
            $('.jas').slideDown(500,"swing");
        });
        $("#btn-jorge").click(function(){
            $('.exp').hide(500,"swing");
            $('.jorge').slideDown(500,"swing");            
        });
        $("#btn-lili").click(function(){
            $('.exp').hide(500,"swing");
            $('.lili').slideDown(500,"swing");
        });
        $("#btn-marga").click(function(){
            $('.exp').hide(500,"swing");
            $('.marga').slideDown(500,"swing");
        });
        $("#btn-tati").click(function(){
            $('.exp').hide(500,"swing");
            $('.tati').slideDown(500,"swing");
        });
        $("#btn-jorgej").click(function(){
            $('.exp').hide(500,"swing");
            $('.jorgej').slideDown(500,"swing");
        });
        $("#btn-luis").click(function(){
            $('.exp').hide(500,"swing");
            $('.luis').slideDown(500,"swing");
        });
    });

//Menu de navegación
    $('[data-offset="true"]').each(function(){
        var $this = $(this);
        var menu_offset = $this.offset().top + $this.height();

        $( window ).bind("scroll", function() {
            var offset = $(this).scrollTop();

            if (offset >= menu_offset) {
                $this.addClass('scroll_top');
            }
            else if (offset < menu_offset) {
                $this.removeClass('scroll_top');
            }
        });

    });
 });