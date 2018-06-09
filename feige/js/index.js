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
  });

 //  var strfooter = [];
 //    strfooter.push('<div class="inner container">');
 //    strfooter.push('<div class="footer-top">');
 //    strfooter.push('<h2 class="row">');
 //    strfooter.push('<div class="col-md-6 fl-center">飞歌，不止于研发</div>');
 //    strfooter.push('<div class="col-md-6 fl-center">咨询热线：<strong style="color: #019BE3">182-1009-6007</strong></div></h2>');
 //    strfooter.push('<div class="row">');
 //    strfooter.push('<div class="col-md-6 fl-center" style="display: inline-block">飞歌通信（北京）科技有限公司</div>');
 //    strfooter.push('<div class="col-md-6 fl-center" style="display: inline-block">友情链接：');
 //    strfooter.push('<a href="http://aliyun.com" style="margin-right: 5px;">阿里云 </a>');
 //    strfooter.push('<a href="http://www.baidu.cn/" style="margin-right: 5px;">百度 </a>');
 //    strfooter.push('<a href="https://www.qq.com/">腾讯</a></div></div>');
 //    strfooter.push('<div class="row">');
 //    strfooter.push('<div class="col-md-6 fl-center" style="display: inline-block">地址：北京市宋家庄庄子商务楼北楼一层</div>');
 //    strfooter.push('</div></div></div>');
 //    strfooter.push('<div class="footer_p">Copyright © 飞歌科技 京ICP备18013854号</div>');
	// $('#footer').html(strfooter.join(''));
})();
