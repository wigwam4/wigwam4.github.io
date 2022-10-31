// JavaScript Document

// lnb 사이즈 전체 채우기
/*function lnbHeight() {
	var pageHeight = $(window).height();
	$('.lnb_wrap,.pp_sub_content').css('min-height', pageHeight-480);
}*/

var init = "open";
//반응형 메뉴
function responseLoad() {
	if ($(window).outerWidth() > 1024 && (init == "open" || init == "mForm")) {
		// 모바일용 이벤트 제거
		/*$('.pp_mobile_menubtn').off("click");*/
		$('.pp_1depth_gnb > a, .pp_3depth_gnb > a').off("click");

		// pc화면에서 설정 초기화
		/*$('.pp_subgnb_bg').height(320);*/
		/*$('.pp_2depth_gnb').height(320);*/
		/*$('.pp_subgnb_bg, .pp_2depth_gnb, .pp_3depth_gnb>ul').hide();*/
		$('.pp_mobile_menubtn').hide();
		$('.alert_wrap').insertAfter('.pp_tnb_wrap > .grid_content > h3');

		// 1depth 메뉴
		$('.pp_1depth_gnb > li').on({
			'mouseenter focus':function(){
				$(this).find('.pp_2depth_gnb').stop().slideDown(300);
			},
			'mouseleave blur':function(){
				$(this).find('.pp_2depth_gnb').stop().slideUp(300);
			}
		});
		
		// 3depth 메뉴
		$('.pp_3depth_gnb').on({
			'mouseenter focus':function(){
				$(this).find('ul').stop().slideDown(300);
			},
			'mouseleave blur':function(){
				$(this).find('ul').stop().slideUp(300);
			}
		});
		
		
		init = "pcForm";

	} else if ($(window).outerWidth() < 1025 && (init == "open" || init == "pcForm")) {
		//PC 이벤트 제거
		$(".pp_1depth_gnb, .pp_3depth_gnb, .pp_3depth_gnb a").off("mouseenter mouseleave");
		$(".pp_1depth_gnb, .pp_3depth_gnb, .pp_3depth_gnb a").off("focus blur");

		// 모바일환경에서 설정 초기화
		$('.pp_mobile_menubtn').show();
		$('.alert_wrap').insertAfter('.pp_mobile_menubtn');
		
		// tab-mobile -1depth on
		$('.pp_2depth_gnb').height('auto');
		/*$('.pp_gnb_wrapper').css('left', '-100%');*/
		
		var headerHeight = $('.pp_header_wrap').height();
		$('.pp_subgnb_bg').hide();
		
		// mobile slide menu
		$('.pp_mobile_menubtn').on('click',function(e){
			e.stopImmediatePropagation();
			$('body, .pp_mobile_menubtn, .pp_gnb_wrapper').stop().toggleClass('on');
			$('.pp_subgnb_bg').stop().fadeToggle(300);
		})
		
		// 2depth 메뉴
		var mainMenuAll = $('.gnb_main').children('li').children('a');
		var subMenuAll = $('.gnb_sub');

		$('.pp_1depth_gnb > li > a').on('click', function(e){
			var thisS2depth = $(this).next();
			$('.pp_1depth_gnb > li > a').removeClass('on');
			$('.pp_2depth_gnb').slideUp(300);
			$(this).toggleClass('on');
			thisS2depth.stop().slideToggle(300);

		})
		
		// 3depth 메뉴
		$('.pp_3depth_gnb > a').on('click',function(e){
			var other3depth = $('.pp_3depth_gnb > a').not($(this));
			other3depth.removeClass('on');
			other3depth.next().slideUp(300);

			$(this).stop().toggleClass('on');
			$(this).next().stop().slideToggle(300);
		})

		
		init = "mForm";
	}
}

var resizeTimer;
$(window).on('resize', function(){
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 200);
} );

function resizeEnd() {
	responseLoad();
	/*lnbHeight();*/
}

/* lnb fix */
function headerFix() {
	var headerHeight = $(".pp_header_wrap").height();
	var lnbHeight = $(".pp_lnb_wrap").height();
	var visualHeight = $(".pp_sub_visual").height();

	$(window).scroll(function () {
		var sticky = $(".pp_lnb_wrap");
		var	scroll = $(window).scrollTop();
		if (scroll >= visualHeight) {
			sticky.addClass("fixed_menu");
			$('.pp_sub_content').css('margin-top',lnbHeight);
		} else {
			sticky.removeClass("fixed_menu");
			$('.pp_sub_content').css('margin-top',0);
		}
	});
}

// lnb 메뉴
function lnbMenu(){
	var lnbList = $('.pp_lnb_list').find('li');
	var lnbListSelected = lnbList.filter('.on');
	var no = lnbListSelected.index();
	var lnbSub = $('.pp_lnb_sub').find('ul');
	var lnbSubSelected = lnbSub.eq(no);
	
	// 기본 셋팅
	lnbSub.hide();
	if(lnbSubSelected.text().length == 0){
		lnbSubSelected.parent().hide();
	}else {
		lnbSubSelected.parent().show();
		lnbSubSelected.show();
	}
	
	// lnb 메뉴에 호버시
	lnbList.on({
		'mouseenter focus' : function(){
			var no = $(this).index();
			var thisSub = lnbSub.eq(no);
			var notThisSub = lnbSub.not(thisSub);
			
			$(this).addClass('on');
			lnbList.not($(this)).removeClass('on');
			notThisSub.hide();
			
			if(thisSub.text().length == 0){
				thisSub.hide();
				thisSub.parent().hide();
			} else {
				thisSub.show();
				thisSub.parent().show();
				$(this).find('span').show();
			}
		},
		'mouseleave blur' : function(){
			var no = $(this).index();
			var thisSub = lnbSub.eq(no);
			
			$(this).removeClass('on');
			lnbListSelected.addClass('on');
			
			if(thisSub.text().length > 0){
				$(this).find('span').hide();
			}

			$('.pp_lnb_wrap').mouseleave(function(){
				lnbSub.hide();
				thisSub.hide();
				thisSub.parent().hide();
			});
			
		}
	});
	
	// lnb 서브메뉴에 호버시
	lnbSub.on({
		'mouseenter focus' : function(){
			var no = $(this).index();
			
			lnbList.removeClass('on');
			lnbList.eq(no).addClass('on');
			lnbList.eq(no).find('span').show();
		},
		'mouseleave blur' : function(){
			var no = $(this).index();
			
			lnbList.eq(no).removeClass('on');
			lnbListSelected.addClass('on');
			lnbList.eq(no).find('span').hide();
			
			$(this).hide();
			$(this).parent().hide();
		}
	})
}

//페이지 상단 이동
function moveTop() {
	$('.pp_movetop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.pp_movetop').fadeIn();
		} else {
			$('.pp_movetop').fadeOut();
		}
	});
	$('.pp_movetop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

//파일 썸네일 삭제 버튼
/*function removeThumb(){
	$('.pp_thumbnail .btn_close').on('click',function(){
		$(this).parent('.pp_thumbnail').hide();
	});
}*/


$(window).on("load", function () {
	/*lnbHeight();*/
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
	
	//메인 슬라이더 - bxslider
	/*$('.bxslider').bxSlider({
		auto: true, //회전 자동
		//mode: 'fade',
		speed: 800, //슬라이드 속도
		pause: 5000, //슬라이더 하나를 보여주는 시간 기본 400
		controls: false, // prev, next  제거
		autoControls: true, //시작,정지버튼 on
		responsive:true,
	});*/
	
	/* swiper slider */
	//swiper 메인 학습전략진단
	var swiper_col1 = new Swiper('.swiper_col1', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.pp_main_test_wrap .swiper-pagination',
			clickable: true,
		},
	});
	$(".pp_main_test_wrap .slide_start").on("click", function () {
		$(".slide_stop").removeClass("on");
		$(this).addClass("on");
		swiper_col1.autoplay.start();
	});
	$(".pp_main_test_wrap .slide_stop").on("click", function () {
		$(".slide_start").removeClass("on");
		$(this).addClass("on");
		swiper_col1.autoplay.stop();
	});


	//swiper 메인 포스테키안 활동
	var swiper_col4 = new Swiper('.swiper_col4', {
		slidesPerView: 4,
		spaceBetween: 10,
		slidesPerGroup: 1,
		roundLengths: true,
		normalizeSlideIndex: true,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.swiper_next',
			prevEl: '.swiper_prev',
		},
		breakpoints: {
			1025: {
				slidesPerView: 3
			},
			767: {
				slidesPerView: 2,
				autoHeight: true
			},
			480: {
				slidesPerView: 1,
				autoHeight: true
			}
		}
	});	
});

$(document).ready(function () {
	responseLoad();
	headerFix();
	lnbMenu();
	moveTop();
	/*removeThumb();*/
	
	/*gnb_keyboard_access('.pp_gnb_wrap');*/
	$('.pp_gnb_wrapper').accessibleMegaMenu();
	
	// top btn hide
	$(".pp_top_btn").hide();
	// fade in #gotop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.pp_top_btn').fadeIn();
		} else {
			$('.pp_top_btn').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.pp_top_btn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// tab -모양만
	$('.pp_shapetab > li > a, .pp_s_shapetab > li > a, .pp_txttab > li > a').click(function () {
		$('.pp_shapetab > li > a, .pp_s_shapetab > li > a, .pp_txttab > li > a').removeClass('on');
		$(this).addClass('on');
	});

	//tab
	$('.pp_showtab, .pp_showtab_btn, .pp_s_showtab, .pp_program_tab').each(function () {
		var $active, $content, $links = $(this).find('a');

		$active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
		$active.addClass('on');

		$content = $($active[0].hash);

		$links.not($active).each(function () {
			$(this.hash).hide();
		});

		$(this).on('click', 'a', function (e) {
			$active.removeClass('on');
			$content.hide();

			$active = $(this);
			$content = $(this.hash);

			$active.addClass('on');
			$content.show();

			showTabdetail(); //온라인, 오프라인 상태 따라 검색조건 영역 변경

			e.preventDefault();
		});
	});
	
	// tab - 기본 텝 기능
	$('.tab_wrap_js').each(function(){
		var tabs = $(this).children('.tab_js').children('li').children('a');
		var panels = $(this).children('.panel_js').children('div');
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
	
	// tab - 기본 텝 기능
	$('.pp_main_gallery').each(function(){
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
	
	// tab - 아래로 컨텐츠 보여주기 (테이블형식)
	$('.showtab_js').each(function(){
		var tabs = $(this).find('.showtab_dt_js');
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
	
	// tab - 아래로 컨텐츠 보여주기 (일반)
	$('.slidetab_js').each(function(){
		var tabs = $(this).find('dt');
		tabs.on('click',function(e){
			e.preventDefault();

			var thisTab = $(this);
			var thisPanel = thisTab.next();
			var notThisTab = tabs.not(thisTab);
			var notThisPanel = notThisTab.next();

			if(notThisTab){
				notThisTab.removeClass('on');
				notThisPanel.slideUp('fast');
			}
			
			thisTab.toggleClass('on');
			thisPanel.stop().slideToggle('fast');
		});
	})
	
	// 이미지 라이트박스	
	$('.pp_openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});
	// magnific popup
		$('.gallery_pop').on('click', function () {
			$(this).next().magnificPopup('open');
		});
		$('.gallery_pop').each(function () {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: true
				},
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true,
					duration: 300, // don't foget to change the duration also in CSS
					opener: function(element) {
						return element.find('img');
					}
				}
			});
		});
	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}
	
	// 소개 - 인재상 및 핵심역량 정의 slide
		$('.talent1').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent1_detail').addClass('on');
		});
		
		$('.talent2').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent2_detail').addClass('on');
		});
		$('.talent3').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent3_detail').addClass('on');
		});
		$('.talent4').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent4_detail').addClass('on');
		});
		$('.talent5').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent5_detail').addClass('on');
		});
		$('.talent6').click(function(){
			$('.talent_kinds').removeClass('on');
			$('.talent_details').removeClass('on');
			$(this).addClass('on');
			$('.talent6_detail').addClass('on');
		});
	
	
	// 별점주기 - 고도화
	$('.starlevel_js').each(function(){
		var star = $(this).find('.pp_starlevel');
		star.on('click',function(){
			star.removeClass('on');
			$(this).addClass('on');
			$(this).prevAll().addClass('on');
			return false;
		});
	});
	
	// 별점주기
	$(".star_rating span").click(function () {
		$(this).parent().children("span").removeClass("on");
		$(this).addClass("on").prevAll("span").addClass("on");
		return false;
	});

	// 피드백 box show, hide
	$(".pp_review_tit .btn").each(function () {
		$(this).on("click", function () {
			$(this).parent().next(".pp_review_hidden").slideToggle();
		});
	});

	// 알림
	$('.alert_wrap').children('.alert_box').hide();
	$('.alert_wrap').on('click', function(e){
        e.stopImmediatePropagation();
		$(this).children('.alert_box').stop().slideToggle(200);
	});
	
	// 진단결과 선택하기
	
	$(".box_checklist1 .testdo_checkbox").on("click", function(){
		$(".box_checklist1 .testdo_checkbox").removeClass("on");
		$(this).addClass("on");
	});
	// 진단결과 선택하기 ( 2개까지 )
	$(".box_checklist2 .testdo_checkbox").on("click", function(){ 
		if($(".box_checklist2 .testdo_checkbox.on").length >= 2){ 
		if($(this).hasClass("on")) { 
			$(this).removeClass("on"); 
		} else { 
		alert("2개이상 선택할 수 없습니다."); 
		} 
		} else { 
		if($(this).hasClass("on")) { 
		$(this).removeClass("on"); 
		} else { 
		$(this).addClass("on"); 
		} 
		} 
	}); 
	// 퍼블리싱 알림
	(function(){
		const btn = document.querySelector('.zodiac_banner .btn_close');

		btn.addEventListener('click', function(){
			const banner = this.parentElement.parentElement;
			banner.style.bottom = `-${banner.clientHeight}px`;
		});
	})();
		
});


//브라우저 하위버전 접속시 알림창 닫기
$('.pp_upgradeinfo_close').on('click', function () {
	$('#pp_iever_upgradeinfo').slideUp();
});

// gnb 키보드 접근성
$(".pp_gnb_wrapper").accessibleMegaMenu({
	/* prefix for generated unique id attributes, which are required 
               to indicate aria-owns, aria-controls and aria-labelledby */
	uuidPrefix: "accessible-megamenu",

	/* css class used to define the megamenu styling */
	menuClass: "nav-menu",

	/* css class for a top-level navigation item in the megamenu */
	topNavItemClass: "nav-item",

	/* css class for a megamenu panel */
	panelClass: "sub-nav",

	/* css class for a group of items within a megamenu panel */
	panelGroupClass: "sub-nav-group",

	/* css class for the hover state */
	hoverClass: "hover",

	/* css class for the focus state */
	focusClass: "focus",

	/* css class for the open state */
	openClass: "open"
});

//취업상담 검색조건영역  show, hide
function showTabdetail() {
	$('.pp_searchterm1, .pp_searchterm2').hide();
	if ($('.pp_term1 > a').hasClass('on')) {
		$('.pp_searchterm2').hide();
		$('.pp_searchterm1').show();
	}
	if ($('.pp_term2 > a').hasClass('on')) {
		$('.pp_searchterm1').hide();
		$('.pp_searchterm2').show();
	}
}

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
		set_css(':focus{outline:dotted 1px #797979}::-moz-focus-inner{border:dotted 1px #797979;}');
	});

})(document);