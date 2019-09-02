if ($(".es-poster .swiper-slide").length > 1) {
  var swiper = new Swiper('.es-poster.swiper-container', {
    pagination: '.swiper-pager',
    paginationClickable: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    loop: true,
    calculateHeight: true,
    roundLengths: true,
    onInit: function (swiper) {
      $(".swiper-slide").removeClass('swiper-hidden');
    }
  });
}

$(function(){

	//首页导航
	var t;
    $(".nav-course,.nav-course-list").mouseenter(function(){
        clearTimeout(t);
        $(".nav-course-list").show();
    }).mouseleave(function(){
        t = setInterval ("$('.nav-course-list').hide()", 200);
        //$(".course-list").hide();
    });

    //课程评价
    $("#common").mpmansory({
        childrenClass: 'item', // default is a div
        columnClasses: 'padiving', //adiv classes to items
        breakpoints: {
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12
        },
        distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
        onload: function(items) {
            //make somthing with items
        }
    });

})