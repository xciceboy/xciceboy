
    //首页行业解决方案
    $('.index-jieJue li .hangYe').on('mouseenter', function() {
        $(this).addClass('hover').find('.hangye-shade').addClass('blocks');
        $(this).find('.max-icon').animate({
            'top': '50%',
            'opacity': 1
        }, 500)
    }).on('mouseleave', function() {
        $(this).removeClass('hover').find('.hangye-shade').removeClass('blocks');
        $(this).find('.max-icon').animate({
            'top': 0,
            'opacity': 0
        }, 500)
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
    var bottom_right = [];
    bottom_right.push('<div class="body-right">');
    bottom_right.push('<div style="height:52px;"><a href="tel:18210096007">');
    bottom_right.push('<img src="image/icon/call2.png" onmouseover="onMouseover(this);" ></a>');
    bottom_right.push('<p style="display:none;" onmouseleave="onMouseleave(this);">联系电话：18210096007</p></div>');
    bottom_right.push('<div>');
    bottom_right.push('<a href="tencent://message/?uin=783052871&Site=飞歌科技&Menu=yes">');
    bottom_right.push('<img src="image/icon/qq.png" ></a>');// onmouseover="onMouseover(this);"
    bottom_right.push('</div>');//<p style="display:none;" onmouseleave="onMouseleave(this);">783052871</p>
    bottom_right.push('</div>');
    $('body').append(bottom_right.join(''));

    function onMouseover(img) {
        var _this = $(img);
        var _par = _this.parent('a');
        _par.css({
          'position':'relative',
          // 'left':'-70px'   
        });
        var _p = _par.siblings('p');
        _p.css({
            'display': 'block',
            'position': 'relative',
            'top': '-52px',
            'left':'-100px',
            'width': '110px',
            'height': '52px',
            'background': '#019BE3',
            'color':'#fff',
            'padding-top':'5px'
        });
    }

    function onMouseleave(p) {
        var _this = $(p);
        var _par = _this.siblings('a');
        _par.css({
          'position':'',
          'left':''
        });
        _this.css({
            'display': 'none'
        });
    }
