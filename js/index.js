// navautoscrollup
$(function(){ 
  if ($(window).width() < 480){ //當視窗小於480時才運作
    $('.navbar #navbarNav ul li a').on('click', function(){
      $('.navbar-toggler').click();
  });
}
});

// fullpage besic
$(function(){
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    sectionsColor: ['#ffffff', '#7c6c64','#ffffff', '#ffffff','#4A6FB1'],
    sectionSelector: '.page',
    normalScrollElements:'.pdcontant',
    paddingTop: '72px',
    css3: true,
    slidesNavigation:true,
    slidesNavPosition: 'bottom',
    continuousVertical:	false
  });
});

// animation basic
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("E1BF6614B67DA44CB13B25508D63B523");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt, comp) {
    var images=comp.getImages();	
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
  }
  function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.neoscanvas();
    stage = new lib.Stage(canvas);	
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      stage.addChild(exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }	    
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {		
      var lastW, lastH, lastS=1;		
      window.addEventListener('resize', resizeCanvas);		
      resizeCanvas();		
      function resizeCanvas() {			
        var w = lib.properties.width, h = lib.properties.height;			
        var iw = window.innerWidth, ih=window.innerHeight;			
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
        if(isResp) {                
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
            sRatio = lastS;                
          }				
          else if(!isScale) {					
            if(iw<w || ih<h)						
              sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==1) {					
            sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==2) {					
            sRatio = Math.max(xRatio, yRatio);				
          }			
        }			
        canvas.width = w*pRatio*sRatio;			
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;			
        stage.scaleY = pRatio*sRatio;			
        lastW = iw; lastH = ih; lastS = sRatio;            
        stage.tickOnUpdate = false;            
        stage.update();            
        stage.tickOnUpdate = true;		
      }
    }
    makeResponsive(true,'both',true,1);	
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
//replace the window.onload in html
  $(document).ready(function(){
    init();
  });

// fancybox basic
$(function(){
  var images = {
    1: [
        {src :'images/videsign/payeasy_1.jpg',opts : {caption : 'LOGO發想'}},
        {src :'images/videsign/payeasy_2.jpg',opts : {caption : 'LOGO設計完稿'}},
        {src :'images/videsign/payeasy_3.jpg',opts : {caption : 'VI套用'}}
       ],
    2: [
        {src :'images/videsign/neohao_1.jpg',opts : {caption : 'LOGO發想'}},
        {src :'images/videsign/neohao_2.jpg',opts : {caption : 'LOGO設計完稿'}},
        {src :'images/videsign/neohao_3.jpg',opts : {caption : 'VI套用'}}
       ],
    3: [
        {src :'images/videsign/tripesso_1.jpg',opts : {caption : '雜誌稿(台灣)'}},
        {src :'images/videsign/tripesso_2.jpg',opts : {caption : 'LOGO設計完稿'}},
        {src :'images/videsign/tripesso_3.jpg',opts : {caption : 'VI套用'}}
       ],
    4: [
        {src :'images/videsign/UW_1.jpg',opts : {caption : 'LOGO發想'}},
        {src :'images/videsign/UW_2.jpg',opts : {caption : 'LOGO設計完稿'}},
        {src :'images/videsign/UW_3.jpg',opts : {caption : 'VI套用'}}
       ],
    5: [
        {src :'images/videsign/nughty_1.jpg',opts : {caption : 'LOGO發想'}},
        {src :'images/videsign/nughty_2.jpg',opts : {caption : 'LOGO設計完稿'}},
        {src :'images/videsign/nughty_3.jpg',opts : {caption : 'VI套用'}}
       ]
};
var images2 = {
    1: [
        {src :'images/graphicdesign/payeasy_1.jpg',opts : {caption : '雜誌封面封底'}},
        {src :'images/graphicdesign/payeasy_2.jpg',opts : {caption : '雜誌索引頁'}},
        {src :'images/graphicdesign/payeasy_3.jpg',opts : {caption : '雜誌內頁'}},
        {src :'images/graphicdesign/payeasy_4.jpg',opts : {caption : '雜誌內頁'}},
        {src :'images/graphicdesign/payeasy_5.jpg',opts : {caption : '雜誌內頁'}},
        {src :'images/graphicdesign/payeasy_6.jpg',opts : {caption : '雜誌內頁'}},
        {src :'images/graphicdesign/payeasy_7.jpg',opts : {caption : '雜誌內頁'}},
        {src :'images/graphicdesign/payeasy_8.jpg',opts : {caption : '刮刮卡'}}
       ],
    2: [
        {src :'images/graphicdesign/cosmosbank_1.jpg',opts : {caption : '手冊封面'}},
        {src :'images/graphicdesign/cosmosbank_2.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_3.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_4.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_5.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_6.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_7.jpg',opts : {caption : '手冊內頁'}},
        {src :'images/graphicdesign/cosmosbank_8.jpg',opts : {caption : '手冊封底'}},
        {src :'images/graphicdesign/cosmosbank_9.jpg',opts : {caption : '活動立牌'}},
        {src :'images/graphicdesign/cosmosbank_10.jpg',opts : {caption : '活動桌卡'}}
       ],
    3: [
        {src :'images/graphicdesign/puma_1.jpg',opts : {caption : '會場立牌'}},
        {src :'images/graphicdesign/puma_2.jpg',opts : {caption : '會場立牌'}}
       ],
    4: [
        {src :'images/graphicdesign/mazeltrading_1.jpg',opts : {caption : '會場FLYER'}}
       ],
    5: [
        {src :'images/graphicdesign/migo_1.jpg',opts : {caption : '雜誌稿(台灣)'}},
        {src :'images/graphicdesign/migo_2.jpg',opts : {caption : '會刊廣告(中國)'}},
        {src :'images/graphicdesign/migo_3.jpg',opts : {caption : '會展易拉展(中國)'}},
        {src :'images/graphicdesign/migo_4.jpg',opts : {caption : '會展大立牌(中國)'}},
        {src :'images/graphicdesign/migo_5.jpg',opts : {caption : '會展背板(中國)'}},
        {src :'images/graphicdesign/migo_6.jpg',opts : {caption : '徵才雜誌稿(台灣)'}},
        {src :'images/graphicdesign/migo_7.jpg',opts : {caption : '西安會展DM(中國)'}},
        {src :'images/graphicdesign/migo_8.jpg',opts : {caption : '政大活動看板(台灣)'}}
       ]
};
var images3 = {
    1: [
        {src :'images/webdesign/lotos_1.jpg',opts : {caption : '首頁'}},
        {src :'images/webdesign/lotos_2.jpg',opts : {caption : '品牌故事頁'}},
        {src :'images/webdesign/lotos_3.jpg',opts : {caption : '經營理念頁'}},
        {src :'images/webdesign/lotos_4.jpg',opts : {caption : '產品系列頁'}},
        {src :'images/webdesign/lotos_5.jpg',opts : {caption : '單品頁(一)'}},
        {src :'images/webdesign/lotos_6.jpg',opts : {caption : '單品頁(二)'}}
       ],
    4: [
        {src :'images/webdesign/SUSHI_1.jpg',opts : {caption : '手機版集團首頁'}},
        {src :'images/webdesign/SUSHI_2.jpg',opts : {caption : '手機版TAKEOUT首頁'}},
        {src :'images/webdesign/SUSHI_3.jpg',opts : {caption : '手機版TAKEOUT單品頁'}},
        {src :'images/webdesign/SUSHI_4.jpg',opts : {caption : '手機版TAKEOUT系列頁'}},
        {src :'images/webdesign/SUSHI_5.jpg',opts : {caption : '手機版TAKEOUT據點頁'}},
        {src :'images/webdesign/SUSHI_6.jpg',opts : {caption : '手機版定食8首頁'}},
        {src :'images/webdesign/SUSHI_7.jpg',opts : {caption : '手機版定食8產品頁'}},
        {src :'images/webdesign/SUSHI_8.jpg',opts : {caption : '手機版定食8套餐頁'}},
        {src :'images/webdesign/SUSHI_9.jpg',opts : {caption : '手機版定食8單品頁'}},
        {src :'images/webdesign/SUSHI_10.jpg',opts : {caption : '手機版定食8據點頁'}},
        {src :'images/webdesign/SUSHI_11.jpg',opts : {caption : '手機版定食8公仔頁'}},
        {src :'images/webdesign/SUSHI_12.jpg',opts : {caption : '手機版火鍋首頁'}},
        {src :'images/webdesign/SUSHI_13.jpg',opts : {caption : '手機版火鍋消息頁'}},
        {src :'images/webdesign/SUSHI_14.jpg',opts : {caption : '手機版火鍋介紹引導頁'}},
        {src :'images/webdesign/SUSHI_15.jpg',opts : {caption : '手機版火鍋介紹頁(一)'}},
        {src :'images/webdesign/SUSHI_16.jpg',opts : {caption : '手機版火鍋介紹頁(二)'}},
        {src :'images/webdesign/SUSHI_17.jpg',opts : {caption : '手機版火鍋產品引導頁'}},
        {src :'images/webdesign/SUSHI_18.jpg',opts : {caption : '手機版火鍋產品頁(一)'}},
        {src :'images/webdesign/SUSHI_19.jpg',opts : {caption : '手機版火鍋產品頁(二)'}},
        {src :'images/webdesign/SUSHI_20.jpg',opts : {caption : '手機版火鍋產品頁(三)'}},
        {src :'images/webdesign/SUSHI_21.jpg',opts : {caption : '手機版火鍋單品頁'}},
        {src :'images/webdesign/SUSHI_22.jpg',opts : {caption : '手機版火鍋據點頁'}}
       ],
    5: [
        {src :'images/webdesign/Marilyn_1.jpg',opts : {caption : '手機版首頁'}},
        {src :'images/webdesign/Marilyn_2.jpg',opts : {caption : '手機版品牌故事頁'}},
        {src :'images/webdesign/Marilyn_3.jpg',opts : {caption : '手機版加入會員頁'}},
        {src :'images/webdesign/Marilyn_4.jpg',opts : {caption : '手機版系列引導頁'}},
        {src :'images/webdesign/Marilyn_5.jpg',opts : {caption : '手機版系列頁'}},
        {src :'images/webdesign/Marilyn_6.jpg',opts : {caption : '手機版單品頁'}},
        {src :'images/webdesign/Marilyn_7.jpg',opts : {caption : '手機版據點頁'}},
        {src :'images/webdesign/Marilyn_8.jpg',opts : {caption : '手機版優惠頁'}},
        {src :'images/webdesign/Marilyn_9.jpg',opts : {caption : '手機版最新消息頁'}},
        {src :'images/webdesign/Marilyn_10.jpg',opts : {caption : '手機版媒體報導頁'}}
       ],
    2: [
        {src :'images/webdesign/mazeltrading_1.jpg',opts : {caption : '首頁(一)'}},
        {src :'images/webdesign/mazeltrading_2.jpg',opts : {caption : '首頁(二)'}},
        {src :'images/webdesign/mazeltrading_3.jpg',opts : {caption : '公司簡介'}},
        {src :'images/webdesign/mazeltrading_4.jpg',opts : {caption : '產品頁(一)'}},
        {src :'images/webdesign/mazeltrading_5.jpg',opts : {caption : '產品頁(二)'}},
        {src :'images/webdesign/mazeltrading_6.jpg',opts : {caption : '聯絡我們'}}
       ],
    3: [
        {src :'images/webdesign/adtc_1.jpg',opts : {caption : '首頁'}},
        {src :'images/webdesign/adtc_2.jpg',opts : {caption : '聯絡我們'}},
        {src :'images/webdesign/adtc_3.jpg',opts : {caption : '公司簡介'}},
        {src :'images/webdesign/adtc_4.jpg',opts : {caption : '服務項目(一)'}},
        {src :'images/webdesign/adtc_5.jpg',opts : {caption : '服務項目(二)'}},
        {src :'images/webdesign/adtc_6.jpg',opts : {caption : '媒體消息'}},
        {src :'images/webdesign/adtc_7.jpg',opts : {caption : '常見問題'}}
       ]
};
var images4 = {
  1: [
        {src :'images/eventsitedesign/tripresso_1.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/tripresso_2.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/tripresso_3.jpg',opts : {caption : '活動促銷頁'}}
     ],
  2: [
        {src :'images/eventsitedesign/starbucks_1.jpg',opts : {caption : '夏日特調活動'}}
     ],
  3: [
        {src :'images/eventsitedesign/gohappy_1.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_2.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_3.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_4.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_5.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_6.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_7.jpg',opts : {caption : '手機版 活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_8.jpg',opts : {caption : '活動促銷頁'}},
        {src :'images/eventsitedesign/gohappy_9.jpg',opts : {caption : '手機版 活動促銷頁'}}
     ],
  4: [
        {src :'images/eventsitedesign/makeupforever_1.jpg',opts : {caption : '桌機版 免費兌換活動頁'}},
        {src :'images/eventsitedesign/makeupforever_2.jpg',opts : {caption : '手機版 免費兌換活動頁'}},
        {src :'images/eventsitedesign/makeupforever_3.jpg',opts : {caption : '桌機版 美拍募集活動頁'}},
        {src :'images/eventsitedesign/makeupforever_4.jpg',opts : {caption : '手機版 美拍募集活動頁'}},
        {src :'images/eventsitedesign/makeupforever_5.jpg',opts : {caption : '桌機版 母親節活動促銷頁'}},
        {src :'images/eventsitedesign/makeupforever_6.jpg',opts : {caption : '手機版 母親節活動促銷頁'}},
        {src :'images/eventsitedesign/makeupforever_7.jpg',opts : {caption : '桌機版 免費兌換活動頁'}},
        {src :'images/eventsitedesign/makeupforever_8.jpg',opts : {caption : '手機版 免費兌換活動頁'}},
        {src :'images/eventsitedesign/makeupforever_9.jpg',opts : {caption : '91APP活動促銷頁'}},
        {src :'images/eventsitedesign/makeupforever_10.jpg',opts : {caption : '91APP活動促銷頁'}},
        {src :'images/eventsitedesign/makeupforever_11.jpg',opts : {caption : '91APP活動促銷頁'}},
        {src :'images/eventsitedesign/makeupforever_12.jpg',opts : {caption : '91APP活動促銷頁'}}
   ]
};
var images5 = {
  1: [
        {src :'images/bannerdesign/unt_1.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_2.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_3.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_4.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_5.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_6.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_7.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_8.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_9.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/unt_10.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}}
     ],
  2: [
        {src :'images/bannerdesign/naruko_1.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/naruko_2.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/naruko_3.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/naruko_4.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/naruko/01/20161123.html',type :'iframe',opts : {caption : 'HTML5 Banner'}},
        {src :'images/bannerdesign/naruko/02/20161220_3muses.html',type :'iframe',opts : {caption : 'HTML5 Banner'}}
     ],
  3: [
        {src :'images/bannerdesign/MAYBELLINE_1.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/MAYBELLINE_2.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/MAYBELLINE_3.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/MAYBELLINE_4.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}},
        {src :'images/bannerdesign/MAYBELLINE_5.gif',opts : {caption : 'Flash Banner(為方便顯示已轉Gif)'}}
     ],
  4: [
        {src :'images/bannerdesign/philosophy_1.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_2.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_3.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_4.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_5.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_6.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_7.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_8.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_9.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_10.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_11.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_12.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_13.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_14.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_15.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_16.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_17.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_18.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_19.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_20.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_21.jpg',opts : {caption : 'FB Banner'}},
        {src :'images/bannerdesign/philosophy_22.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_23.jpg',opts : {caption : '購物平台Banner'}},
        {src :'images/bannerdesign/philosophy_24.jpg',opts : {caption : '購物平台Banner'}}
     ],
  5: [
        {src :'images/bannerdesign/newptrte_1.jpg',opts : {caption : '購物平台Banner'}}
     ],
  6: [
        {src :'images/bannerdesign/migo_1.jpg',opts : {caption : '官網靜態Banner'}},
        {src :'images/bannerdesign/migo_2.jpg',opts : {caption : '官網靜態Banner'}},
        {src :'images/bannerdesign/migo_3.jpg',opts : {caption : '官網靜態Banner'}},
        {src :'images/bannerdesign/migo_4.jpg',opts : {caption : '官網靜態Banner'}},
        {src :'images/bannerdesign/migo_5.jpg',opts : {caption : '官網靜態Banner'}},
        {src :'images/bannerdesign/migo_6.jpg',opts : {caption : '官網靜態Banner'}}
     ],
  7: [
        {src :'images/bannerdesign/makeupforever/01/html5banner_300x250.html',type :'iframe',opts : {caption : 'HTML5 Banner'}},
        {src :'images/bannerdesign/makeupforever/02/html5banner_300x250.html',type :'iframe',opts : {caption : 'HTML5 Banner'}}
     ]
};

$("ul[id^=open_fancybox] li").click(function() {
 _aryImg = $(this).parent().attr("id").split("_");
    $.fancybox.open(eval(_aryImg[2])[ $(this).index() + 1], {
        padding : 0
    });
    
    return false;
    });
});