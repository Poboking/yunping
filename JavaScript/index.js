$('.menu').hover(function () {
        $(this).css({
            'border-bottom': '2px solid white',
            'border-color': 'white'
        })
    }, function () {
        $(this).css({
            'border-bottom': '2px solid white',
            'border-color': 'rgba(0, 0, 0, 0)'
        })
    })
    $('.lbtleft').hover(function () {
        $('.dsfg').show()
    }, function () {
        $('.dsfg').hide()
    })

    //计算轮所有播图的父级盒子的宽度
    $('.krthngrfn').css({ width: `${$('.lbt').width() * $('.tp').length}px` })
    //设置所有轮播图的宽度
    $('.tp').width($('.lbt').width())
    var index = 0
    setInterval(function () {
        index > $('.tp').length - 1 ? index = 0 : index += 1
        console.log(`translateX(${-$('.lbt').width() * index}px)`)
        $('.krthngrfn').css({
            'transform': `translateX(${-$('.lbt').width() * index}px)`,
            'transition': '0.3s'
        })
    }, 1000)