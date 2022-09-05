/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// header
function headerStyle(){
	// 공통
	var windowWidth = $(window).outerWidth();
	var windowHeight = $(window).outerHeight();

	if (windowWidth < 1025) {
		/* colsole.log('테블릿, 모바일'); */
		
		/* tablet, mobile 기본 설정 */
		$('.info_link').prependTo('.gnb_wrap');
		
		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();
			$('body').toggleClass('on');
		});

	} else {
		/* colsole.log('pc'); */
		
		/* pc 기본 설정 */
		$('.info_link').insertBefore('.btn_menu');
		
		$('.btn_infolink').on('click', function(e){
			e.stopImmediatePropagation();
			$(this).next('ul').slideToggle('fast');
		});
	}

}

// 윈도우 resize 시 :
var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {

	// header
	headerStyle();
	
	// 상세검색창
	searchDetails();
}

// tab 기능 : .tab_js > .tab_list_js, .tab_cnt_js
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 책갈피 기능
function bookmark () {
	$('.bookmark_js').each(function(){
		var windowWidth = $(window).outerWidth();
		var bookmark = $(this).find('a');
		
		if( windowWidth < 1025 ) {
			// 테블릿,모바일
			bookmark.on('click',function(e){
				e.preventDefault();
				bookmark.removeClass('on');

				var target = $(this).attr('href');

				if (target.length) {
					$(this).addClass('on');
					$('html,body').animate({
						scrollTop: $(target).offset().top - 100
					}, 'slow');
				}
			})
		} else {
			// pc
			bookmark.on('click',function(e){
				e.preventDefault();
				bookmark.removeClass('on');

				var target = $(this).attr('href');

				if (target.length) {
					$(this).addClass('on');
					$('html,body').animate({
						scrollTop: $(target).offset().top - 60
					}, 'slow');
				}
			})
		}
		
		
	})
}

// selectbox
function selectBox() {
	var selectTarget = $(".select_custom");
	var selectLabel = $(".select_form > label");
	selectTarget.change(function(){
		var selectName = $(this).children("option:selected").text();
		$(this).siblings("label").text(selectName);
	});
}

// checkbox - 전체 선택
function checkAll() {
	var check = $('.tbl_check .check_only input[name="check_each"]');
	var checkAll = $('.tbl_check .check_only input[name="check_all"]');
	
	check.on('change', function(){
		var checkSelected = $('.tbl_check .check_only input[name="check_each"]:checked');
		
		if ( check.length === checkSelected.length ) {
			checkAll.prop('checked', true);
		} else {
			checkAll.prop('checked', false);
		}
	});
	
	checkAll.on('change', function(){
		if ( checkAll.is(':checked') ){
			check.prop('checked', true);
		} else {
			check.prop('checked', false);
		}
	});
	
}

// 달력 
function inputCalendar(){
	$('.search_day > input.form_style').each(function(){
		if( $(this).val() == ''){
			$(this).next().css('background-image','url(../../images/client/formstyle/icon_calendar_off.png)');
		} else {
			$(this).next().css('background-image','url(../../images/client/formstyle/icon_calendar_on.png)');
		}
	});
	
}

// 상세검색창
function searchDetails(){
	var windowWidth = $(window).outerWidth();

	if (windowWidth < 690) {
		// console.log('tablet,mobile');
		$('.search_box2 .btn_details').each(function(){
			var wrapper = $(this).parents('.search_box2');
			$(this).appendTo(wrapper);
		});
		$('.search_box2 .btn_details').on('click', function(){
			$(this).prev('.search_detail').slideToggle(300);
		});
	}

	$('.search_box2 .btn_details').on('click', function(){
		$(this).toggleClass('on');
		$(this).parent().next('.search_detail').slideToggle(300);
	});
}

// 강의목록 (아코디언)
function LectureAccordion(){
	$('.lecture_wrap').each(function(){
		var targetId = $(this).attr('id');
		var wrapper = $('#' + targetId);
		var list = wrapper.find('.lecture_tit');

		wrapper.find('.lecture_cnt').hide();

		// 페이지 진입시 기본 세팅 :
		wrapper.children('li').filter('.on').find('.lecture_cnt').show();
		wrapper.children('li').filter('.on').find('.mark').text('접기');
		$('.mark').on('click',function(){
			var tt = $(this).parents('.lecture_wrap').attr('id');
		});
		
		// 리스 클릭시 :
		list.on('click',function(){
			var thisList = $(this);
			var thisCnt = thisList.next('.lecture_cnt');
			var notThisList = list.not(thisList);
			var notThisCnt = notThisList.next('.lecture_cnt');

			if ( thisList.parent().hasClass('on') ){
				thisList.find('.mark').text('열기');
			} else {
				thisList.find('.mark').text('접기');
			}

			if ( notThisList ) {
				notThisList.parent().removeClass('on');
				notThisCnt.slideUp(300);
			}

			thisList.parent().toggleClass('on');
			thisCnt.stop().slideToggle(300);
		});
	});
}

// 테이블 hover 
function tableHover(){
	$('.td_link').on({
		'mouseenter focus':function(){
			$(this).parent().parent('tr').addClass('on');
		},
		'mouseleave blur':function(){
			$(this).parent().parent('tr').removeClass('on');
		}
	});
}

// 퍼블리싱 알림
function closeZodiacBanner(){
	const btn = document.querySelector('.zodiac_banner .btn_close');

    btn.addEventListener('click', function(){
        const banner = this.parentElement.parentElement;
        banner.style.bottom = `-${banner.clientHeight}px`;
    });
}

// 테이블 스크롤 커스텀
function tableScroll() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar("destroy");
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
			
			// 세로 스크롤
			$(".scrollx_tbl_row").mCustomScrollbar({
				axis: "y",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
		}
	}
}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 다 체크합니다.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존의 방식에 is-ie 라는 클래스도 추가해봅니다.
	classNames += ' is-ie';
	// 마찬가지로 기존의 방식에 현재 버전 표시를 추가해봅니다.
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스를 추가합니다.
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function() {

	// header
	headerStyle();
	
	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// 책갈피 기능
	bookmark();

	// selectbox
	selectBox();
	
	// checkbox - 전체 선택
	checkAll();
	
	// 달력 
	inputCalendar();
	
	// 상세검색창
	searchDetails();
	
	// 강의목록 (아코디언)
	LectureAccordion();
	
	// 테이블 hover 
	tableHover();

	// 퍼블리싱 알림
	closeZodiacBanner();

	// 브라우저 알림창 닫기
	$(".btn_browseralert_close").on("click", function() {
		$("#browser_alert").slideUp();
	});

	// select2 설정
	$(".select_search select").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		}
	});
	
	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});

	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}
	
});

$(window).on("load", function () {
	tableScroll();
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

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #d93b3b}::-moz-focus-inner{border:dotted 1px #d93b3b;}');
	});
})(document);
