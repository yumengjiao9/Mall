

//头部导航滑过
(function(w,d){
    var header_nav = d.getElementById('header_nav');
    var header_navLi = header_nav.getElementsByTagName('li');

    var header_hover = d.getElementById('header_hover');
    var header_hoverUl = header_hover.getElementsByTagName('ul');
    var len = header_hoverUl.length;
    // console.log(header_hoverUl[0])


    for(var i=0;i<len;i++) {
        header_navLi[i].index = i;
        header_navLi[i].onmouseenter = function(){
            for(var i=0;i<len;i++){
                header_hoverUl[i].style.zIndex = 0;
            }
            header_hoverUl[this.index].style.zIndex = 100;
            clearTimeout(timer);
            header_hover.style.height=230+'px';
        }
        header_navLi[i].onmouseleave = function(){


            clearTimeout(timer);
        // var _this = this;
            timer = setTimeout( function() {

                header_hover.style.height='';
            },100);
            if(header_hover.style.height=''){
                header_hoverUl[this.index].style.zIndex = 0;
            }

        };

    };

    var timer = null;
    for(var i=0;i<len;i++){
        header_hoverUl[i].index=i;
        header_hoverUl[i].onmouseenter=function(){
            console.log(this.index);
            clearTimeout(timer);
            // for(var i=0;i<len;i++){
            //     header_hoverUl[i].style.zIndex = 0;
            // }
            this.style.zIndex = 100;
            header_hover.style.height=230+'px';
        };

        header_hoverUl[i].onmouseleave = function(){
            console.log(this.index);
            clearTimeout(timer);
            this.style.zIndex = 0;
            timer = setTimeout( function() {
                    header_hover.style.height='';
                },100);
            };
    };


})(window,document)


//搜索
;(function(w,d){
    var hdSub = d.getElementById('hdSub');
    var icon = d.getElementById('icon');

    hdSub.onmouseenter = icon.onmouseenter = function(){
        // console.log(1)
        hdSub.style.background = '#f60';
        icon.style.color = '#fff';
    }
    hdSub.onmouseleave = icon.onmouseleave = function(){
        // console.log(1)
        hdSub.style.background = '';
        icon.style.color = '';
    }

})(window,document)


//第一部分 广告切换图 产品导航菜单
;(function (w,d) {
    //
    // var categoryList = d.getElementById('categoryList');
    // var categoryListDiv = categoryList.getElementsByTagName('div');
    // var categoryListDivUl = categoryListDiv[0].getElementsByTagName('ul');
    // var categoryListDivUlWidth = parseInt(getStyle(categoryListDivUl[0],'width'));
    // console.log(categoryListDivUlWidth);
    //
    //     var categoryListDivUls = categoryListDiv[0].getElementsByTagName('ul');
    //     var newLen = categoryListDivUls.length;
    //
    //     categoryListDiv[0].style.width =categoryListDivUlWidth*newLen;
    // console.log(categoryListDiv[0].style.width);


    var oFocus = d.getElementById('bannerFocus');

    var imgCon = oFocus.getElementsByTagName('ul')[0];
    var imgItem = oFocus.getElementsByTagName('li');
    var dotCon = oFocus.getElementsByTagName('ul')[1];
    var dots = dotCon.getElementsByTagName('li');
    var btnPrev = oFocus.getElementsByTagName('span')[0];
    var btnNext = oFocus.getElementsByTagName('span')[1];

    var len = dots.length;
    var index = 0;

    function changeImg() {
        // imgItem[index].style.opacity = 1;
        // imgItem[index].style.filter = 'alpha(opacity=100)';
        for(var i=0;i<len;i++){
            dots[i].className = ''
            imgItem[i].style.opacity = 0
            imgItem[i].style.filter = 'alpha(opacity=0)';
            imgItem[i].className = ''
        }
        imgItem[index].className = 'active'
        dots[index].className = 'active'
        sMove( imgItem[index],{ opacity:100 })
    }
    changeImg()//页面初始化

    for( var i=0;i<len;i++ ){
        dots[i].index = i
        dots[i].onclick = function () {

            index = this.index
            changeImg()
        }
    };

    btnNext.onclick = function () {
        index++;
        if( index == len ){
            index = 0;
        };
        changeImg()
    };

    btnPrev.onclick = function () {
        index--;
        if( index < 0 ){
            index = len - 1
        };
        changeImg();
    };
})(window,document)

//main1PartCont 背景
;(function(w,d){
    var main1PartCont = d.getElementById('main1PartCont');
    var main1PartContUl = main1PartCont.getElementsByTagName('ul')[0];
    var main1PartContLi = main1PartContUl.getElementsByTagName('li');

    var arr=["./images/main1Part3_bg1.png", "./images/main1Part3_bg2.png","./images/main1Part3_bg3.png","./images/main1Part3_bg4.png", "./images/main1Part3_bg5.png","./images/main1Part3_bg6.png"];
    var len = arr.length;
    for(var i=0;i<len;i++){
        main1PartContLi[i].style.background='url("'+arr[i]+'")no-repeat';
        main1PartContLi[i].style.backgroundPosition = '21px 12px';
    }
})(window,document)

//小米闪购 倒计时
;fn();
setInterval(fn,1000);
function fn(){
    var CountDown = document.getElementById('Count_down');
    var CountDiv = CountDown.getElementsByTagName('div');

    var currentTime = new Date();

    var targetTime = new Date(2018, 9, 1, 23, 0, 0);

    var t = parseInt(targetTime - currentTime) / 1000;
    // console.log(t);
    var day = parseInt(t / 86400);
    var hours = parseInt(t % 86400 / 3600);
    var minutes = parseInt(t % 3600 / 60);
    var sec = parseInt(t % 60);
        hours = toZerto(hours);
        minutes = toZerto(minutes);
        sec = toZerto(sec);
    CountDiv[0].innerHTML =''+ hours +'';
    CountDiv[2].innerHTML =''+minutes+'';
    CountDiv[4].innerHTML =''+ sec +'';
};

//小米闪购
;(function(w,d){
    var FlashoverR = d.getElementById('FlashoverR');

    var arr = [
        {src:'./images/FlashoverR_img_03.png',
        h3:'小米蓝牙耳机青春版 白色',
        p:'6.5 克轻巧，高清通话音质',
        span:'1 元',
        i:'59 元'},
        {src:'./images/FlashoverR_img_05.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_07.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_09.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_09.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_09.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_09.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'},
        {src:'./images/FlashoverR_img_09.png',
            h3:'小米USB Type C快速充电数据线 灰色',
            p:'快速充电，稳定传输',
            span:'1 元',
            i:'59 元'}
    ];

    var len = arr.length;
    var newLi='';
    for(var i=0;i<len;i++){
        newLi += '<li class="FlashoverR_'+ (i+1) +'">' + '<a href=""><img src="'+ arr[i].src +'" alt=""></a>' + '<h3><a href="">'+ arr[i].h3 +'</a></h3>' + '<p><a href="">'+ arr[i].p +'</a></p>' + '<div><span><a href="">'+ arr[i].span +'</a></span>' + '<i><a href="">'+ arr[i].i +'</a></i></div>' + '</li>'
    }
    FlashoverR.innerHTML = newLi;
    var FlashoverRLi = FlashoverR.getElementsByTagName('li');
    var FlashoverRWidth = parseInt(getStyle(FlashoverRLi[0],'width'))*FlashoverRLi.length;
    console.log(FlashoverRWidth);
    FlashoverR.style.width = FlashoverRWidth + 'px';

var FlashoverHd = d.getElementById('FlashoverHd');
var prev = FlashoverHd.getElementsByTagName('span')[0];
var next = FlashoverHd.getElementsByTagName('span')[1];

for(var i=0;i<len;i++){

    prev.onclick=function(){

    }

}

})(window,document);

//手机
;(function Cont(w,d){

    var shoujiCont = d.getElementById('shoujiCont');
    var shoujiContUl = shoujiCont.getElementsByTagName('ul')[0];
    var arr = [
        {src:'./images/images/1.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/2.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/3.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/4.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/5.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/6.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/7.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'},
        {src:'./images/images/8.png',
            h3:'小米8 青春版 4GB+64GB',
            p:'潮流镜面渐变色，2400万自拍旗舰',
            span:'1339元'}
    ];
    var len = arr.length;
    var newInnerhtml='';
    for(var i=0;i<len;i++){
        newInnerhtml+='<li>' + '<a href=""><img src="'+ arr[i].src +'" alt=""></a>' + '<h3><a href="">'+ arr[i].h3 +'</a></h3>' + '<p>'+ arr[i].p +'</p>' + '<span>'+ arr[i].span +'</span>' + '</li>';
    }
    shoujiContUl.innerHTML = newInnerhtml;
    // console.log(shoujiContUl.innerHTML)

    var shoujiContLi = shoujiContUl.getElementsByTagName('li');
    for(var i=0;i<len;i++){
        shoujiContLi[i].index=i;
        shoujiContLi[i].onmouseenter=function(){
            // sMove( shoujiContLi[this.index],{top:-2});
            shoujiContLi[this.index].style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                //box-shadow:10px 10px 10px rgba(0,0,0,0.05)
        }
        shoujiContLi[i].onmouseleave=function(){
            // sMove( shoujiContLi[this.index],{top:0});
            shoujiContLi[this.index].style.boxShadow = '';
        }
    }
})(window,document);



//家电
var jiadianarr1 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dlarr1 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var jiadianarr2 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dlarr2 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var jiadianarr3 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dlarr3 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var jiadianarr4 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dlarr4 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
Content('ContEntUl_1',jiadianarr1,dlarr1);
Content('ContEntUl_2',jiadianarr2,dlarr2);
Content('ContEntUl_3',jiadianarr3,dlarr3);
Content('ContEntUl_4',jiadianarr4,dlarr4);
function Content(id,arr,dlarr){

    var ContEntUl = document.getElementById(id);

    var len = arr.length;
    var newInnerhtml='';
    for(var i=0;i<len;i++){
        newInnerhtml+='<li>' + '<a href=""><img src="'+ arr[i].src +'" alt=""></a>' + '<h3><a href="">'+ arr[i].h3 +'</a></h3>' + '<p>'+ arr[i].p +'</p>' + '<em>'+ arr[i].span +'</em>' + '<span><a>'+'<h4>评评价评价评价评价评价评价价</h4>' +'<i>来自某某某的评价</i>' +'</a></span></li>';
    }

    var dllen = dlarr.length;
    var dlinnerHTML = '<li>';
    for(var i=0;i<dllen;i++){
        dlinnerHTML +='<dl class="ConEnt_d'+ (i+1) +'"><dt><a href=""><img src="'+ dlarr[i].src +'" alt=""></a></dt>' + '<dd class="ContEnt_dd1"><a href="">'+ dlarr[i].dd1 +'</a></dd>' + '<dd class="ContEnt_dd2"><a href="">'+ dlarr[i].dd2 +'</a></dd></dl>'
    }
    dlinnerHTML +='</li>';
    ContEntUl.innerHTML = newInnerhtml;
    ContEntUl.innerHTML+=dlinnerHTML;
    var ContEntLi = ContEntUl.getElementsByTagName('li');
    var ContLiDiv = ContEntUl.getElementsByTagName('span');
    for(var i=0;i<len;i++){
        ContEntLi[i].index=i;
        ContEntLi[i].onmouseenter=function(){
            ``
            ContEntLi[this.index].style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            ContLiDiv[this.index].style.height = 76+'px';
        };
        ContEntLi[i].onmouseleave=function(){
            sMove( ContEntLi[this.index],{top:0});
            ContEntLi[this.index].style.boxShadow = '';
            ContLiDiv[this.index].style.height = 0+'px';
        };
    };

};

//家电滑过切换；
var ContTitltLiArr1 = ['热门', '电视影音', '电脑', '家居'];
onmous('ContTitlt','ContEnt',ContTitltLiArr1);
function onmous(id1,id2,arr){
    var ContTitlt = document.getElementById(id1);
    var ContTitltUl = ContTitlt.getElementsByTagName('ul')[0];

    var ContEnt = document.getElementById(id2);
    var ContEntUl = ContEnt.getElementsByTagName('ul');
    // console.log(ContEntUl.length)
    // console.log(ContEnt.length)

    var len = ContEntUl.length;
    var newinnerHTML = '';
    for (var i = 0; i < len; i++) {
        newinnerHTML += '<li><a href="">' + arr[i] + '</a></li>';
    }
    ContTitltUl.innerHTML = newinnerHTML;

    var ContTitltLi = ContTitlt.getElementsByTagName('li');

    var index = 0;

    ContTitltLi[index].className = 'active';
    ContEntUl[index].className = 'ContEntActive';

    for (var i = 0; i < len; i++) {
        ContTitltLi[i].index = i;
        ContTitltLi[i].onmouseenter = function () {
            for (var i = 0; i < len; i++) {
                ContTitltLi[i].className = '';
                ContEntUl[i].className = '';
            }
            ContTitltLi[this.index].className = 'active';
            ContEntUl[this.index].className = 'ContEntActive';
        }
    }
};


//智能；
var zihnengarr1 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zihnengdlarr1 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zihnengarr2 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zihnengdlarr2 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zihnengarr3 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zihnengdlarr3 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zihnengarr4 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zihnengdlarr4 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zihnengarr5 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zihnengdlarr5 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
Content('zhinengContEntUl_1',zihnengarr1,zihnengdlarr1);
Content('zhinengContEntUl_2',zihnengarr2,zihnengdlarr2);
Content('zhinengContEntUl_3',zihnengarr3,zihnengdlarr3);
Content('zhinengContEntUl_4',zihnengarr4,zihnengdlarr4);
Content('zhinengContEntUl_5',zihnengarr5,zihnengdlarr5);
// Content(id,arr,dlarr);

var zhinengContTitltLiArr1 = ['热门', '出行', '健康', '酷玩','路由器'];
onmous('zhinengContTitlt','zhinengContEnt',zhinengContTitltLiArr1);
// onmous(id1,id2,arr)

//搭配
var dapeiarr1 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dapeidlarr1 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var dapeiarr2 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dapeidlarr2 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var dapeiarr3 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dapeidlarr3 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var dapeiarr4 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var dapeidlarr4 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
Content('dapeiContEntUl_1',dapeiarr1,dapeidlarr1);
Content('dapeiContEntUl_2',dapeiarr2,dapeidlarr2);
Content('dapeiContEntUl_3',dapeiarr3,dapeidlarr3);
Content('dapeiContEntUl_4',dapeiarr4,dapeidlarr4);
// Content(id,arr,dlarr);
var dapeiContTitltLiArr1 = ['热门', '耳机', '音响', '电源储存卡'];
onmous('dapeiContTitlt','dapeiContEnt',dapeiContTitltLiArr1);
// onmous(id1,id2,arr)

//配件
var peijianarr1 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var peijiandlarr1 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var peijianarr2 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var peijiandlarr2 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var peijianarr3 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var peijiandlarr3 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var peijianarr4 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var peijiandlarr4 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
Content('peijianContEntUl_1',peijianarr1,peijiandlarr1);
Content('peijianContEntUl_2',peijianarr2,peijiandlarr2);
Content('peijianContEntUl_3',peijianarr3,peijiandlarr3);
Content('peijianContEntUl_4',peijianarr4,peijiandlarr4);
// Content(id,arr,dlarr);
var peijianContTitltLiArr1 = ['热门', '保护套', '贴膜', '其他配件'];
onmous('peijianContTitlt','peijianContEnt',peijianContTitltLiArr1);
// onmous(id1,id2,arr)

//周边
var zhoubianarr1 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zhoubiandlarr1 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zhoubianarr2 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zhoubiandlarr2 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zhoubianarr3 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zhoubiandlarr3 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zhoubianarr4 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zhoubiandlarr4 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
var zhoubianarr5 = [
    {src:'./images/jiadian/img_06.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_08.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_10.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_12.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_24.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
    {src:'./images/jiadian/img_22.png',
        h3:'小米8 青春版 4GB+64GB',
        p:'潮流镜面渐变色，2400万自拍旗舰',
        span:'1339元'},
];
var zhoubiandlarr5 = [
    {src:'./images/jiadian/img_21.png',
        dd1:'小米净水器',
        dd2:'1222元'},
    {src:'./images/jiadian/img_26.png',
        dd1:'查看更多',
        dd2:'热门'}
];
Content('zhoubianContEntUl_1',zhoubianarr1,zhoubiandlarr1);
Content('zhoubianContEntUl_2',zhoubianarr2,zhoubiandlarr2);
Content('zhoubianContEntUl_3',zhoubianarr3,zhoubiandlarr3);
Content('zhoubianContEntUl_4',zhoubianarr4,zhoubiandlarr4);
Content('zhoubianContEntUl_5',zhoubianarr5,zhoubiandlarr5);
// Content(id,arr,dlarr);
var zhoubianContTitltLiArr1 = ['热门', '出行', '居家', '生活周边','箱包'];
onmous('zhoubianContTitlt','zhoubianContEnt',zhoubianContTitltLiArr1);
// onmous(id1,id2,arr)


//推荐
(function(){
var tuijianCont = document.getElementById('tuijianCont');
var tuijianContUl = tuijianCont.getElementsByTagName('ul')[0];
var tuijianLiArr = [
    {
    src:'./images/jiadian/img_06.png',
    h3:'红米6A 全网通版 3GB内存 32GB',
    p:'1333元',
    span:'478好评'},
    {
        src:'./images/jiadian/img_08.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_10.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_12.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_222.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_06.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_08.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_10.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_12.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_222.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_06.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_08.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_10.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_12.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'},
    {
        src:'./images/jiadian/img_222.png',
        h3:'红米6A 全网通版 3GB内存 32GB',
        p:'1333元',
        span:'478好评'}
];

var len = tuijianLiArr.length;
var tuijianUlinnerHTML='';
for(var i=0;i<len;i++){
    tuijianUlinnerHTML+='<li>' + '<a href=""><img src="'+ tuijianLiArr[i].src +'" alt=""></a>' + '<h3><a href="">'+ tuijianLiArr[i].h3 +'</a></h3>' + '<p>'+ tuijianLiArr[i].p +'</p>' + '<span>'+ tuijianLiArr[i].span +'</span>' + '</li>'
}
    tuijianContUl.innerHTML = tuijianUlinnerHTML;

var tuijianContLi = tuijianContUl.getElementsByTagName('li');

var tuijianContLiWidth = parseInt(getStyle(tuijianContLi[0],'width'));
var tuijianContLiMagin = parseInt(getStyle(tuijianContLi[0],'margin-right'));

var tuijianContUlWidth = (tuijianContLiWidth+parseInt(getStyle(tuijianContLi[0],'margin-right')))*len;

    tuijianContUl.style.width = tuijianContUlWidth+'px';
    var moveLeft = (tuijianContLiWidth+tuijianContLiMagin)*5;
    // console.log(moveLeft);
//推荐 滑过
    for(var i=0;i<len;i++){

        tuijianContLi[i].index = i;
        tuijianContLi[i].onmouseenter=function(){
            for(var i=0;i<len;i++){
                sMove( tuijianContLi[i],{top:8});
                tuijianContLi[i].style.boxShadow = '';
            }
            sMove( tuijianContLi[this.index],{top:6});
            tuijianContLi[this.index].style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        }
        tuijianContLi[i].onmouseleave=function(){

            sMove( tuijianContLi[this.index],{top:8});
            tuijianContLi[this.index].style.boxShadow = '';
        }
    };

//推荐 切换
        var tuijianTitle = document.getElementById('tuijianTitle');
        var tuijianTitlePrev = tuijianTitle.getElementsByTagName('button')[0];
        var tuijianTitleNext = tuijianTitle.getElementsByTagName('button')[1];
        var len = (tuijianLiArr.length) / 5;
    // console.log(len)

        var index = 0;
        if (index == 0) {
            tuijianTitlePrev.className = 'active';
        }
        ;
        if (index == len - 1) {
            tuijianTitleNext.className = 'active';
        }
        ;

        tuijianTitlePrev.onclick = function () {
            index--;
            if (index <= 0) {
                index = 0;
            } else {
                tuijianTitlePrev.className = '';
            }
            sMove(tuijianContUl, {left: -moveLeft * index});
        };
        tuijianTitleNext.onclick = function () {
            index++;
            if (index >= len - 1) {
                index = len - 1;
            } else {
                tuijianTitleNext.className = '';
            }
            sMove(tuijianContUl, {left: -moveLeft * index});
        };
})()


//热评

;(function(w,d){
    var repingCont = d.getElementById('repingCont');
    var repingContUl = repingCont.getElementsByTagName('ul')[0];
    var repingContarr = [
        {src:'./images/reping/reping_img_03.png',
        p:'外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错',
        i:'来自某某的评价',
        h3:'小米插小米插线板小米插线板小米插线板线板',
        span:'65元'},
        {src:'./images/reping/reping_img_05.png',
            p:'外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错',
            i:'来自某某的评价',
            h3:'小米插小米插线板小米插线板小米插线板线板',
            span:'65元'},
        {src:'./images/reping/reping_img_08.png',
            p:'外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错',
            i:'来自某某的评价',
            h3:'小米插小米插线板小米插线板小米插线板线板',
            span:'65元'},
        {src:'./images/reping/reping_img_10.png',
            p:'外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错',
            i:'来自某某的评价',
            h3:'小米插小米插线板小米插线板小米插线板线板',
            span:'65元'}
    ]
    var len = repingContarr.length;

    // console.log(repingContarr.length)

    var repingContLiinnerHTML = '';
    for(var i=0;i<len;i++){
        repingContLiinnerHTML += '<li>' + '<a href=""><img src="'+ repingContarr[i].src +'" alt=""></a>' + '<p><a href="">'+ repingContarr[i].p +'</a></p>' + '<i>'+ repingContarr[i].i +'</i>' + '<h3><a href="">'+ repingContarr[i].h3 +'</a></h3>' + '<span>'+ repingContarr[i].span +'</span>' + '</li>';
    }
    repingContUl.innerHTML = repingContLiinnerHTML;

    var repingContLi = repingCont.getElementsByTagName('li');
    var len = repingContLi.length;
    for(var i=0;i<len;i++){
        repingContLi[i].index = i;
        repingContLi[i].onmouseenter = function(){

            for(var i=0;i<len;i++){
                sMove( repingContLi[i],{top:0});
                repingContLi[i].style.boxShadow = '';
            }
            sMove( repingContLi[this.index],{top:-2});
            repingContLi[this.index].style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        }
        repingContLi[i].onmouseleave = function(){

                sMove( repingContLi[this.index],{top:0});
                repingContLi[this.index].style.boxShadow = '';

        }

    }
})(window,document)



//内容
;(function (w,d) {

    var neirongContent = d.getElementById('neirongContent');

    //var contentItemParent = neirongContent.children[0];//单个轮播图的容器
    var contentParent = neirongContent.children;//单个轮播图的容器

    var len = contentParent.length;
    for(var i=0;i<len;i++){
        ContentChange( contentParent[i] );
    }

    function ContentChange( parent ) {
        // console.log( contentItemParent.className )

        var contentItemParent = parent;
        var itemContainer = contentItemParent.getElementsByTagName('ul')[0];//图片滚动的容器
        var liItems = itemContainer.getElementsByTagName('li');//单个图片项
        var dotContainer = contentItemParent.getElementsByTagName('div')[0];//小圆点容器
        var dot = dotContainer.getElementsByTagName('em');//小圆点，默认是没有，等追加完才能使用
        var btnPrev = contentItemParent.getElementsByTagName('span')[0];
        var btnNext = contentItemParent.getElementsByTagName('span')[1];
        var len = liItems.length;
        var liItemW = parseInt( getStyle( liItems[0],'width' ) );//单个容器的宽
        // console.log( liItemW );
        itemContainer.style.width = len * liItemW + 'px';//给图片滚动窗口附加宽度

        //页面初始化
        var index = 0;//控制显示哪一个li
        var dotsStr = '';
        for( var i=0;i<len;i++ ){
            dotsStr+='<em index="'+ (i) +'">'+ (i+1) +'</em>';
        }
        dotContainer.innerHTML = dotsStr;
        dot[index].className = 'active';

        for(var i=0;i<len;i++){
            contentParent[i].index = i;
            contentParent[i].onmouseenter = function(){

                sMove( contentParent[this.index],{top:-2});
                contentParent[this.index].style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                sMove(contentParent[this.index].getElementsByTagName('span')[0],{opacity:100});
                sMove(contentParent[this.index].getElementsByTagName('span')[1],{opacity:100});
            }
            contentParent[i].onmouseleave = function(){

                sMove( contentParent[this.index],{top:0});
                contentParent[this.index].style.boxShadow = '';
                sMove(contentParent[this.index].getElementsByTagName('span')[0],{opacity:0});
                sMove(contentParent[this.index].getElementsByTagName('span')[1],{opacity:0});
            }
        }
        for(var i=0;i<len;i++){
            dot[i].onclick = function () {
                //console.log( this.getAttribute('index') );
                index = this.getAttribute('index');
                //itemContainer.style.left = -( index * liItemW ) + 'px'
                //sMove( itemContainer,{ left: -( index * liItemW )})
                _changeImg()
            }
        }

        function _changeImg() {

            for(var i=0;i<len;i++){
                dot[i].className = '';
            }
            dot[index].className = 'active';
            sMove( itemContainer,{ left: -( index * liItemW )});
        }

        btnNext.onclick = function () {
            index++;
            if( index == len ){
                index = len - 1;
            };
            _changeImg();

        }
        btnPrev.onclick = function () {
            index--;
            if( index < 0 ){
                index = 0;
            };
            _changeImg();

        }
    }

})(window,document)


//侧边栏

;(function(w,d){
    var sideBar = d.getElementById('sideBar');

    window.onload=window.onscroll=window.onresize= function(){

        var Scrolltop = document.documentElement.scrollTop||document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        var offSet = sideBar.offsetHeight+71;
        sideBar.style.top = clientHeight-offSet+Scrolltop+'px';
        // console.log(sideBar.style.top);
        var oLi = sideBar.getElementsByTagName('li');

        if(Scrolltop>clientHeight){
            oLi[oLi.length-1].style.display='block';
        }else(oLi[oLi.length-1].style.display='none');
    };

    var oUl = sideBar.getElementsByTagName('ul')[0];
    var oI = oUl.getElementsByTagName('i');
    // console.log(oI.style.color)
    var oDiv = oUl.getElementsByTagName('div');
    var oLi = oUl.getElementsByTagName('li');
    var len = oLi.length;

    for(var i=0;i<len;i++){
        oLi[i].index = i;
        oLi[i].onmouseenter =function(){
            for(var i=0;i<len;i++){
                oDiv[i].style.display = 'none';
            }
            oDiv[this.index].style.display = 'block';
            oI[this.index].style.color = '#ff6700';
        }
        oLi[i].onmouseleave =function(){

            oDiv[this.index].style.display = 'none';
            oI[this.index].style.color = '#999999';
        }
    }
})(window,document)


