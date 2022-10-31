// JavaScript Document

$(document).ready(function () {	
	
	gnbOnclass();
	
	// top btn hide 
	$('.ad_gotop').hide();
	// fade in #gotop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.ad_gotop').fadeIn();
		} else {
			$('.ad_gotop').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.ad_gotop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	// 토글버튼
	$('.btn_toggle').on('click',function() {
		if ($(this).children('input').is(':checked')) {
			$(this).children('span').text('Pick me');
		} else {
			$(this).children('span').text('픽미');
		}
	});
	// tab (일반)
	$('.tab_wrap_js').each(function(){
		var tabs = $(this).find('.tab_js').children('li').children('a');
		var panels = $(this).find('.panel_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
	// tab - 아래로 컨텐츠 보여주기 (테이블)
	$('.showtab_js').each(function(){
		var tabs = $(this).find('.showtab_dt_js');
		$('.showtab_dd_js').hide();
		tabs.on('click',function(e){
			e.preventDefault();

			var thisTab = $(this);
			var thisPanel = thisTab.next();
			var notThisTab = tabs.not(thisTab);
			var notThisPanel = notThisTab.next();

			if(notThisTab){
				notThisPanel.slideUp('fast');
			}

			thisPanel.stop().slideToggle('fast');
		});
	})
});

//gnb menu
function gnbOnclass () {
	var twodepth = $('.ad_aside_twodepth > li > a');
	var threedepth = $('.ad_aside_threedepth > li > a');
	
	//$('.ad_aside_onedepth').find('a').removeClass('on');	
	twodepth.each(function(){
		if($(this).hasClass('on')) {
			$(this).parent().parent().siblings('a').addClass('on');
		}
	});
	threedepth.each(function(){
		if($(this).hasClass('on')) {
			$(this).parent().parent().siblings('a').addClass('on');
			$(this).parent().parent().parent().parent().siblings('a').addClass('on');
		}
	});
};

$(window).load(function () {
	/* // gnb
	$('.ad_aside_onedepth > li > a').on('click', function(e){
		e.preventDefault();
	});
	$('.ad_aside_twodepth > li > a').on('click', function(e){
		e.preventDefault();
	});
	$('.ad_aside_threedepth > li > a').on('click', function(e){
		e.preventDefault();
	});
	
	$('.ad_aside_onedepth > li > a').on('click', function(e){
		if($(this).hasClass('ad_dropdown')) {
			if($(this).next().is(':hidden')){
				$('.ad_aside_onedepth>li>a').removeClass('on');
				$(this).addClass('on');
				$(this).parent().parent().find('ul').slideUp();
				$(this).next().slideDown();
			} else {
				$(this).next().slideUp();
			}
		} else {
			$('.ad_aside_onedepth > li > a').removeClass('on');
			$(this).parent().siblings('li').find('ul').slideUp();
			$(this).addClass('on');
		}

		//$.cookie('open_items', 'the_value');
		openItems = [];
		$(".ad_aside_onedepth > li > a").each(function(index, item) {
			if ($(item).hasClass('on')) {
				openItems[0]=index;
			}
		});
		$.cookie('open_items', openItems.join(','));
		
		var alinkHref = $(this).attr('href')
		if ( alinkHref.indexOf("void") == -1 ){
			location.href = alinkHref;
		}
	});

	$('.ad_aside_twodepth > li > a').on('click', function () {
		if($(this).hasClass('ad_subdropdown')) {
			if($(this).next().is(':hidden')){
				$('.ad_aside_twodepth>li>a').removeClass('on');
				$(this).addClass('on');
				$(this).parent().parent().find('ul').slideUp();
				$(this).next().slideDown();
			} else {
				$(this).next().slideUp();
			}
		} else {
			$('.ad_aside_twodepth>li>a').removeClass('on');
			$(this).parent().siblings('li').find('ul').slideUp();
			$(this).addClass('on');
		}
		//$.cookie('open_items', 'the_value');
		openItems = [];
		$(".ad_aside_onedepth > li > a").each(function (index, item) {
			if ($(item).hasClass('on')) {
				openItems[0] = index;
			}
		});
		$(".ad_aside_twodepth > li > a").each(function (index, item) {
			if ($(item).hasClass('on')) {
				openItems[1] = index;
			}
		});
		$.cookie('open_items', openItems.join(','));
		
		var alinkHref = $(this).attr('href')
		if ( alinkHref.indexOf("void") == -1 ){
			location.href = alinkHref;
		}
	});

	$('.ad_aside_threedepth > li > a').on('click', function () {
		$('.ad_aside_threedepth > li > a').removeClass('on');
		$(this).addClass('on');
		//$.cookie('open_items', 'the_value');
		openItems = [];
		$(".ad_aside_onedepth > li > a").each(function (index, item) {
			if ($(item).hasClass('on')) {
				openItems[0] = index;
			}
		});
		$(".ad_aside_twodepth > li > a").each(function (index, item) {
			if ($(item).hasClass('on')) {
				openItems[1] = index;
			}
		});
		$(".ad_aside_threedepth > li > a").each(function (index, item) {
			if ($(item).hasClass('on')) {
				openItems[2] = index;
			}
		});
		$.cookie('open_items', openItems.join(','));
		
		var alinkHref = $(this).attr('href')
		if ( alinkHref.indexOf("void") == -1 ){
			location.href = alinkHref;
		}
	});	
	
	if( $.cookie('open_items') && $.cookie('open_items').length > 0 ) {
		previouslyOpenItems = $.cookie('open_items');
		openArray = previouslyOpenItems.split(',');
		if ( openArray.length >= 1 ){
			$(".ad_aside_onedepth > li > a").eq(openArray[0]).addClass('on').siblings('ul').toggle();
		}
		if ( openArray.length >= 2 ){
			$(".ad_aside_twodepth > li > a").eq(openArray[1]).addClass('on').siblings('ul').toggle();
		}
		if ( openArray.length >= 3 ){
			$(".ad_aside_threedepth > li > a").eq(openArray[2]).addClass('on');
		}
	};*/
	
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 custom
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".pp_scrollx_tbl, .pp_scrollx_tbl_xs, .pp_scrollx_tbl_sm, .pp_scrollx_tbl_md , .pp_scrollx_tbl_lg, .pp_scrollx_tbl_xl").off(mCustomScrollbar);
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".pp_scrollx_tbl_lg, .pp_scrollx_tbl_xl").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
			$(".pp_scrollx_tbl, .pp_scrollx_tbl_xs, .pp_scrollx_tbl_sm, .pp_scrollx_tbl_md").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: false
				}
			});
		}
	}

});

// 멀티셀렉트박스 높이 option개수에 따라 유동적으로 변함
$(function () {
	$(".ad_multiselect").css("height", parseInt($(".ad_multiselect option").length) * 16);
});

//브라우저 하위버전 접속시 알림창 닫기
$('.pp_upgradeinfo_close').on('click', function () {
	$('#pp_iever_upgradeinfo').slideUp();
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
	var style_element = d.createElement('STYLE'),
		dom_events = 'addEventListener' in d,
		add_event_listener = function (type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		set_css = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move - 익스플로러에서 select box style에 영향을 줌
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/

	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #797979}::-moz-focus-inner{border:dotted 1px #797979;}');
	});
})(document);