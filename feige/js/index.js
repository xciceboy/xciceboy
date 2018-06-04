(function(){
	  //首页行业解决方案
  $('.index-jieJue li .hangYe').on('mouseenter',function(){
  	$(this).addClass('hover').find('.hangye-shade').addClass('blocks');
    $(this).find('.max-icon').animate({
      'top':'50%',
      'opacity':1
    },500)
  }).on('mouseleave',function(){
  	$(this).removeClass('hover').find('.hangye-shade').removeClass('blocks');
    $(this).find('.max-icon').animate({
      'top':0,
      'opacity':0
    },500)
  })
	
})();
