$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop();
    
    $(".header").css("transform", 'translate(0px,-' + imgPos/5+'%)');
    $(".header1").css("transform", 'translate(0px,-' + imgPos/2+'%)');
    $(".textbody").css("transform", 'translate(0px,-' + imgPos/15+'%)');

};

