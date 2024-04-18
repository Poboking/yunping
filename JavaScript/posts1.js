function node(dom){
    return document.querySelectorAll(dom)
} 
Array.from(node('.sbgsrb')).forEach(function(value, index, array){
    console.log(value)
    value.addEventListener('click', function(){
        console.log(this)
        $('.jhfv').css({
            'transform':`translateX(-${1200 * index}px)`,
            transition : '0.3s',
        })
        $('.qfcqece').css({
            left:`${this.getBoundingClientRect().left}px`,
            transition:'0.3s',
        })
  })  
})


var lunbIndex = 0
function lun(){
    $('.ewvgwergwegvwevg').css({
        transform : `translateX(-${lunbIndex * 1000}px)`,
        transition: '0.3s'
    })
}
setInterval(function(){
    lunbIndex >= node('.erjetj').length - 1 ? lunbIndex = 0 : lunbIndex += 1
    lun()
}, 1000)

$('.gwegegq').eq(0).click(function(){
    lunbIndex <= 0 ? lunbIndex = node('.erjetj').length : lunbIndex - 1
    lun()
})

$('.gwegegq').eq(1).click(function(){
    lunbIndex >= node('.erjetj').length - 1 ? lunbIndex = 0 : lunbIndex += 1
    lun()
})