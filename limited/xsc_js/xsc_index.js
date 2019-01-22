$('.top .More').click(function () {
    $('.htmleaf-container').animate({'height':750},300);
});
$('.htmleaf-container .c').click(function () {
    $('.htmleaf-container').animate({'height':0},300);
});
// 定时器方法
var num = 0;
// fn
function fn() {
    num++;
    if (num > 1) {
        num = 0;
    }
    $('.t')
        .eq(num)
        .fadeIn(300)
        .siblings()
        .fadeOut(300);
    $('.content .controls span')
        .eq(num)
        .addClass('active0')
        .removeClass('no_active')
        .siblings()
        .addClass('no_active')
        .removeClass('active');
    $('.content .con')
        .eq(num)
        .fadeIn(300)
        .siblings()
        .fadeOut(300);
}
// 定时器
var timer = window.setInterval(fn, 5000);
var v2 = $('.con_r').offset().top;
var v3 = 8000;
// fn3 window滚动事件
function fn3() {
    var v1 = $(window).scrollTop();
    if (v1 >= v2) {
        $('.con_r').addClass('active3').removeClass('active4');
        $('.toTop').css('display', 'block');
    } else {
        $('.con_r').removeClass('active3').addClass('active4');
        $('.toTop').css('display', 'none');
    }
    if (v1 >= v3) {
        $('.con_r').css('display', 'none');
    } else {
        $('.con_r').css('display', 'block');
    }
}
// 鼠标进入控制小圆
$('.content .controls span').mouseenter(function () {
    var index = $(this).index();
    if (index == 0) {
        $('.content .img').addClass('overflow');
        $('.unfold')
            .css('top', 600)
            .addClass('icon-xiashuangjiantou')
            .removeClass('icon-shangshuangjiantou')
            .attr('title', '点击展开');
        $('.rules').css('marginTop', 0);
        $(window).off('scroll', fn3); // 去除window滚动事件
        $('.con_r')
            .css('display', 'block')
            .removeClass('active3')
            .addClass('active4');
        flag = true;
    }
    $('.t')
        .eq(index)
        .fadeIn(300)
        .siblings()
        .fadeOut(300);
    $('.content .controls span')
        .eq(index)
        .addClass('active0')
        .removeClass('no_active')
        .siblings()
        .addClass('no_active')
        .removeClass('active0');
    $('.content .con')
        .eq(index)
        .fadeIn(300)
        .siblings()
        .fadeOut(300);
    window.clearInterval(timer);
});
// 鼠标离开控制小圆
$('.content .controls span').mouseleave(function () {
    timer = window.setInterval(fn, 5000);
});
$('.content .img').mouseenter(function () {
    window.clearInterval(timer);
});
// fn2
function fn2() {
    timer = window.setInterval(fn, 5000);
}
$('.content .img').on('mouseleave', fn2);
// 点击展开箭头事件
var flag = true;
$('.content .unfold').on('click', function () {
    if (flag) {
        $('.content .img').removeClass('overflow');
        $(this)
            .css('top', 7840)
            .addClass('icon-shangshuangjiantou') // 上箭头
            .removeClass('icon-xiashuangjiantou')
            .attr('title', '点击收起');
        $('.content .img').off('mouseleave', fn2);
        window.clearInterval(timer);
        $('.rules').css('marginTop', 7235);
        $(window).on('scroll', fn3); // 添加window滚动事件
        flag = false;
    } else {
        $('.content .img').addClass('overflow');
        $(this)
            .css('top', 600)
            .addClass('icon-xiashuangjiantou') // 下箭头
            .removeClass('icon-shangshuangjiantou')
            .attr('title', '点击展开');
        $('.content .img').on('mouseleave', fn2);
        $('.rules').css('marginTop', 0);
        $(window).off('scroll', fn3); // 去除window滚动事件
        $('.con_r')
            .css('display', 'block')
            .removeClass('active3')
            .addClass('active4');
        $('.toTop').css('display', 'none');
        flag = true;
    }
});
// 点击切换按钮
$('.tab_btn span').click(function () {
    $(this)
        .addClass('active2')
        .siblings()
        .removeClass('active2');
    var index = $(this).index();
    $('.img ul')
        .eq(index)
        .css('display', 'block')
        .siblings()
        .css('display', 'none');
    $('.count_money .money')
        .eq(index)
        .css('display', 'block')
        .siblings()
        .css('display', 'none');
    if (index == 3) {
        $('.tab_img .app').css('display', 'block');
    } else {
        $('.tab_img .app').css('display', 'none');
    }
});
// 返回顶部按钮
$('.toTop').click(function () {
    $('html, body').animate({ 'scrollTop': 0 }, 1500);
});