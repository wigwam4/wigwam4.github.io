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


	// 스크롤시 header 스타일 정의
	$(window).on('scroll resize', function(){
		var scr = $(this).scrollTop();
		if ( windowWidth < 1025 ) {
			if ( scr > 0 ) {
				$('.page_wrap').addClass('scroll_mobile');
			} else {
				$('.page_wrap').removeClass('scroll_mobile');
			}
		} else {
			if ( scr > 0 ) {
				$('.page_wrap').addClass('scroll_pc');
				$('.header_logo').prependTo('.header_bottom');
			} else {
				$('.page_wrap').removeClass('scroll_pc');
				$('.header_logo').prependTo('.header_top');
			}
		}
	});

	// 3depth 메뉴 표시
	$('.gnb_2depth').children('li').each(function(){
		var target = $(this);
		target.children('a').children('span').hide();
		if ( target.find('.gnb_3depth').length ) {
			$('<span>펼쳐보기</span>').appendTo( target.children('a') );
		}
	});
	/*if ( windowWidth < 480 ) {
		$('.mainprogram_wrap .btn_more').insertAfter('.mainprogram_swiper');

	}*/

	if ( windowWidth < 480 ) {
		$('.mainprogram_wrap .btn_more').insertAfter('.mainprogram_swiper');
	} else {
		$('.mainprogram_wrap .btn_more').appendTo('.mainprogram_wrap .btn_rowposition .inner');
	}

	if ( windowWidth < 1025 ) {
		// console.log('tablet');

		//PC 이벤트 제거
		$(".gnb_list li").off("mouseenter mouseleave");
		$(".gnb_list li").off("focusin focusout");

		// mobile 기본설정
		$('.btn_admin').prependTo('.header_bottom');
		$('.btn_log').prependTo('.header_top');
		$('.btn_msg').insertAfter('.header_top .inner_left');
		$('.toplink_area').appendTo('.header_bottom');
		

		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();
			$('body').toggleClass('on');
		});

		// 2depth gnb
		$('.gnb_1depth > a').on('click', function(e){
			e.stopImmediatePropagation();
			var target = $(this).next('.gnb_2depth');

			if ( target.is(':visible') ) {
				$(this).removeClass('on');
				target.slideUp('fast');
			} else {
				$('.gnb_1depth > a').removeClass('on');
				$('.gnb_2depth').slideUp('fast');
				$(this).addClass('on');
				target.slideDown('fast');
			}
		});

		// 3depth gnb
		$('.gnb_2depth > li > a').on('click', function(e){
			e.stopImmediatePropagation();
			var target = $(this).next('.gnb_3depth');

			if ( target.is(':visible') ) {
				$(this).removeClass('on');
				target.slideUp('fast');
			} else {
				$('.gnb_2depth > li > a').removeClass('on');
				$('.gnb_3depth').slideUp('fast');
				$(this).addClass('on');
				target.slideDown('fast');
			}
		});

	} else {
		// console.log('pc');

		//모바일 이벤트 제거
		$('.btn_menu, .gnb_list a').off("click");

		// pc 기본설정
		$('.btn_admin').insertBefore('.btn_sitemap');
		$('.btn_log').prependTo('.header_top .inner_left');
		$('.btn_msg').appendTo('.header_top .inner_left');
		$('.toplink_area').prependTo('.header_wrap');

		// 2depth gnb
		$('.gnb_1depth').on({
			'mouseenter focusin':function(){
				$(this).find('.gnb_2depth').stop().slideDown('fast');
			},
			'mouseleave focusout':function(){
				$(this).find('.gnb_2depth').stop().slideUp('fast');
			}
		});

		// 3depth gnb
		$('.gnb_2depth > li').on({
			'mouseenter focusin':function(){
				$(this).find('.gnb_3depth').stop().slideDown('fast');
			},
			'mouseleave focusout':function(){
				$(this).find('.gnb_3depth').stop().slideUp('fast');
			}
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
}

/* header fix */
function headerFix() {
	var subVisualHeight = $(".subpage_visual").height();

	$(window).scroll(function () {
		var sticky = $(".lnb_wrap");
		var	scroll = $(window).scrollTop();

		if (scroll >= subVisualHeight) {
			sticky.addClass("fixed_menu");
			$('.header_wrap').css('box-shadow','none');
		} else {
			sticky.removeClass("fixed_menu");
			$('.header_wrap').css('box-shadow','0 4px 10px rgba(0,0,0,0.3)');
		}
	});
}

// lnb 메뉴
function lnbMenu(){

	// 서브 lnb 있을 경우 :
	$(".lnb_list").children('li').each(function(){
		var target = $(this);
		target.children('a').children('span').hide();
		if ( target.find('.sub_lnb').length ) {
			$('<span>펼쳐보기</span>').appendTo( target.children('a') );
		}
	});

	// 마우스오버시 하위메뉴 show/hide :
	$(".lnb_list").children('li').on({
		'mouseenter focus':function(){
			if ( $(this).find('.sub_lnb').length ) {
				$(this).children('a').css('border-bottom-color','rgba(0,0,0,0)');
			}
			$(this).children('a').next().stop().slideDown(300);
		},
		'mouseleave blur':function(){
			if ( $(this).hasClass('on') ) {
				$(this).children('a').css('border-bottom-color','#77314c');
			}
			$(this).children('a').next().stop().slideUp(300);
		}
	})

	// 메뉴 넘칠 경우 :
	/*if( $('.lnb_list').outerWidth() > $('.lnb_wrap').outerWidth() ) {
		$('.lnb_wrap').addClass('limited');
		$('<button type="button" class="btn_lnbnext">다음</button>').appendTo( $('.lnb_wrap') );

		$(document).on('click', '.btn_lnbnext', function(e){
			e.stopImmediatePropagation();
			$('.btn_lnbnext').remove();
			$('.lnb_list').css('margin-left', '-100%');
			$('<button type="button" class="btn_lnbprev">이전</button>').prependTo( $('.lnb_wrap') );
		});
		$(document).on('click', '.btn_lnbprev', function(e){
			e.stopImmediatePropagation();
			$('.btn_lnbprev').remove();
			$('.lnb_list').css('margin-left', 0);
			$('<button type="button" class="btn_lnbnext">다음</button>').appendTo( $('.lnb_wrap') );
		});
	}*/

}

// 사이트 맵
function sitemapMenu(){
	// 펼처보기 아이콘 추가
	$('.sitemap_list').children('ul').children('li').each(function(){
		var target = $(this);
		target.children('a').children('span').hide();
		if ( target.find('ul').length ) {
			$('<span>펼쳐보기</span>').appendTo( target.children('a') );
		}
	});

	// 클릭시 하위메뉴 show/hide
	$('.sitemap_list').children('ul').children('li').children('a').on('click',function(){
		$(this).parent('li').toggleClass('on');
		$(this).next('ul').slideToggle('fast');
	});
}

//페이지 상단 이동
function moveTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.move_top').addClass('on');
		} else {
			$('.move_top').removeClass('on');
		}
	});
	$('.move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

//swiper 메인 슬라이드
function swiperSlide() {
	var swiper = new Swiper('.mainvisual_swiper', {
		effect: "fade",
		fadeEffect: { crossFade: true },
		slidesPerView: 1,
		speed: 400,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.mainvisual_swiper .swiper-pagination',
			clickable: true,
		},
	});
	$(".mainvisual_swiper .slide_controls").on("click", function () {
		if( $(this).hasClass('paused') ){
			$(this).removeClass('paused');
			swiper.autoplay.start();
		} else {
			$(this).addClass('paused');
			swiper.autoplay.stop();
		}
	});
}


//swiper 메인 비교과
function swiperSlide1() {
	var swiper = new Swiper('.mainprogram_swiper .swiper-container', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		/*loop: true,
		loopFillGroupWithBlank: true,*/
		navigation: {
			nextEl: '.mainprogram_swiper .swiper_next',
			prevEl: '.mainprogram_swiper .swiper_prev',
		},
		breakpoints: {
			1280: {
				spaceBetween: 15
			},
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15
			},
			480: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 15
			}
		}
	});
}

//swiper 메인 진단소개
function swiperSlide2() {
	var swiper = new Swiper('.testintro_swiper.swiper-container', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.testintro_swiper .swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.testintro_swiper .swiper_next',
			prevEl: '.testintro_swiper .swiper_prev',
		}
	});
}

//swiper 메인 진행중인 진단
function swiperSlide3() {
	var swiper = new Swiper('.mytest_swiper .swiper-container', {
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.mytest_swiper .swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.mytest_swiper .swiper_next',
			prevEl: '.mytest_swiper .swiper_prev',
		}
	});
}

//swiper 메인 진행중인 설문
function swiperSlide4() {
	var swiper = new Swiper('.mysurvey_swiper .swiper-container', {
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.mysurvey_swiper .swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.mysurvey_swiper .swiper_next',
			prevEl: '.mysurvey_swiper .swiper_prev',
		}
	});
}

//swiper 메인 채용정보
function swiperSlide5() {
	var swiper = new Swiper('.mainemployment_wrap .swiper-container', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		/*loop: true,
		loopFillGroupWithBlank: true,*/
		navigation: {
			nextEl: '.mainemployment_wrap .swiper_next',
			prevEl: '.mainemployment_wrap .swiper_prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2
			},
			480: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20
			}
		}
	});
}

//swiper 메인 공지사항
function swiperSlide6() {
	var swiper = new Swiper('.mainnotice_wrap .swiper-container', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.mainnotice_wrap .swiper_next',
			prevEl: '.mainnotice_wrap .swiper_prev',
		},
		breakpoints: {
			1024: {
				spaceBetween: 15,
			},
			768: {
				spaceBetween: 15,
			},
			480: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 15,
			}
		}
	});
}



/*function swiperSlide2() {
	var swiper = new Swiper('.mainnotice_wrap .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 10,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.mainnotice_wrap .swiper_next',
			prevEl: '.mainnotice_wrap .swiper_prev',
		},
		breakpoints: {
			1025: {
				slidesPerView: 2
			},
			480: {
				slidesPerView: 1,
				autoHeight: true
			}
		}
	});
}*/

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
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

// 셀렉트 텝
function tabSelect(){
	$('.tab_js').each(function(){

		if ( $(this).find('.tab_select_js').is(':visible') ) {
			var tabs = $(this).find('.tab_select_js').children('select');
			var panels = $(this).children('.tab_cnt_js').children('div');
			var lastTab = tabs.children('option:selected');
			var lastPanel = $(lastTab.val());
			panels.hide();
			lastPanel.show();

			tabs.on('click',function(e){
				e.preventDefault();
				var thisTab = $(this).children('option:selected');
				var thisPanel = $(thisTab.val());
				lastTab.prop('selected',false);
				thisTab.prop('selected',true);
				lastPanel.hide();
				thisPanel.show();

				lastTab = thisTab;
				lastPanel = thisPanel;
			});

		}

	});
}

// tab 세로형 (진단결과 내 역량별 설명)
function tabListRow (){
	$('.capainfo_wrap').each(function(){
		var windowWidth = $(window).outerWidth();
		var target = $(this).children('.tab_list_row').children('li');
		var no = $(this).children('.tab_list_row').children('li').length;
		var calWd = no / $(this).width() * 100;
		var calHg = $(this).height() / no;

		if ( windowWidth < 1025 ) {
			target.outerWidth('calWd + "%"');
		} else {
			target.outerHeight(calHg);
		}

	});
}

// 책갈피 기능
function bookmark () {
	$('.bookmark_js').each(function(){
		var bookmark = $(this).find('a');

		bookmark.on('click',function(e){
			e.preventDefault();
			bookmark.parent('li').removeClass('on');

			var target = $(this).attr('href');

			if (target.length) {
				$(this).parent('li').addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 80
				}, 'slow');
			}
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.accordion_js').each(function(){
		var targetId = $(this).attr('id');
		var wrapper = $('#' + targetId);
		var acd_list = wrapper.find('.acd_list_js');

		wrapper.find('.acd_cnt_js').hide();

		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		acd_list.filter('.on').next('.acd_cnt_js').show();

		acd_list.on('click',function(){
			var thisList = $(this);
			var thisCnt = thisList.next('.acd_cnt_js');
			var notThisList = acd_list.not(thisList);
			var notThisCnt = notThisList.next();

			if(notThisList){
				notThisList.removeClass('on');
				notThisCnt.slideUp(300);
			}

			thisList.toggleClass('on');
			thisCnt.stop().slideToggle(300);
		});
	})
}

// UI 가이드 책갈피
function ui_navi () {
	$('.ui_navi').each(function(){
		var targetEach = $(this).find('a');

		targetEach.on('click',function(e){
			e.preventDefault();
			targetEach.removeClass('on');

			var target = $(this).attr('href');

			if (target.length) {
				$(this).addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 80
				}, 'slow');
			}
		})
	})
}

// 클릭시 클래스 'on' 제어
function toggleOnClick(){
	$('.on_js').on('click',function(){
		$(this).toggleClass('on');
	});
}

// hover시 클래스 'on' 제어
function toggleOnHover(){
	var windowWidth = $(window).outerWidth();

	if( windowWidth > 1024 ) {
		$('.hv_js').on({
			'mouseenter focusin':function(){
				$(this).addClass('on');
			},
			'mouseleave focusout':function(){
				$(this).removeClass('on');
			}
		});
	}
}

// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var target = $(this).children('select');
		var targetName = target.children('option:selected').text();
		var label = target.siblings('label');

		target.children('option:selected').attr('selected','selected');
		label.text(targetName);

		target.on('change',function(){
			var thisTarget = $(this).children('select');
			var thisTargetName = $(this).children('option:selected').text();

			/*target.children('option').removeAttr('selected');*/
			thisTarget.children('option:selected').attr('selected','selected');
			label.text(thisTargetName);
		});
	});
}

// 체크박스 토글(row) : 검색창 셀렉트박스
function checkToggleRow(){
	// 클릭시 셀렉트 박스 보여졌다 사라지는 동작
	$('.show_checktxt').on('click',function(){
		$('.check_row_wrap').slideToggle(300);
	})

	var checkBox = $('.show_checktxt');
	var check = $('input:checkbox[name=check_row]');
	var checkAll = $('input:checkbox[name=checkall_row]');
	var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
	var checkTotalCnt = $('input:checkbox[name=check_row]').length;

	// '전체'외 나머지 선택시
	check.on('change', function(){
		var checkSelected = $('input:checkbox[name=check_row]:checked');
		var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
		var showCheck = checkSelected.next().html();

		checkBox.text(showCheck);

		if(checkSelected.length == checkTotalCnt){
			check.prop('checked',false);
			checkAll.prop('checked',true);
			checkBox.text('전체');
		}else if(checkSelected.length >= 2){
			checkAllSelected.prop('checked',false);
			checkBox.text('다중선택');
		}else if(checkSelected.length >= 1){
			checkAllSelected.prop('checked',false);
			checkBox.text(showCheck);
		}else{
			checkAll.prop('checked',true);
		}
	});

	// '전체' 선택시
	checkAll.on('change', function(){
		checkAll.prop('checked',true);
		checkBox.text('전체');
		check.prop('checked',false);
	});
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol(){
	$('.check_col_wrapper').each(function(){
		var checkAll = $(this).find('input[name="checkall_col"]');
		var check = $(this).find('input[name="check_col"]');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			check.prop('checked',false);
			$(this).prop('checked',true);
		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');

			if( checkSelected.length >= checkTotalCnt ){
				checkAll.prop('checked',true);
				check.prop('checked',false);
			} else if( checkSelected.length == 0 ){
				checkAll.prop('checked',true);
				check.prop('checked',false);
			} else {
				checkAll.prop('checked',false);
			}
		})
	})
}

//라디오 토글
function radioToggle() {
	$(".radio_toggle>input[type='radio']").click(function () {
		var previousRadio = $(this).data('storedRadio');
		if (previousRadio) {
			$(this).prop('checked', !previousRadio);
			$(this).data('storedRadio', !previousRadio);
		} else {
			$(this).data('storedRadio', true);
			$(".radio_toggle>input[type=radio]:not(:checked)").data("storedRadio", false);
		}
		if ($(this).is(":checked")){
			$(".radio_toggle").removeClass("on");
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
	});
}

// checkbox button - 찜목록 버튼
function checkBtn(){
	$('.check_btn_wrap').each(function(){
		$(this).find('input[type="checkbox"]').on('change', function(){
			$(this).next().toggleClass('on');
		})
	})
}

// 진단결과 선택하기
function resultCheck1() {
	$(".box_checklist1 .testdo_checkbox").on("click", function(){
		$(".box_checklist1 .testdo_checkbox").removeClass("on");
		$(this).addClass("on");
	});
}

// 역량도향상 선택하기 2개까지 선택 가능
function resultCheck2() {
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
}

// 워크넷 진단 결과보기
function worknetResult() {
	$(".worknet_box").each(function() {
		var resultBtn = $(this).find(".btn");
		resultBtn.on("click", function(){
			$(this).toggleClass('on');
			$(this).parent().parent().next().slideToggle();
		});
	});
}

// 카드형,리스트형 활성화
function cardSwitch(){
	$('.programlist_row .searchtoggle_right').each(function(){
		var card = $(this).children('button');

		card.on('click',function(e){
			e.preventDefault();
			card.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 진로탐색 : 기업
function targetSelectCorp() {
	$(".corp_radio input").change(function(){
		if($(this).parent().parent().hasClass("company_box")){
			var companyName = $(this).parent().prev().children().find("dt").text();
			companyName = companyName.trim();
			/*alert(companyName + "를 목표기업으로 설정합니다.");*/
			$(".company_box").removeClass("on");
			if($(".corp_radio input").is(":checked")){
				$(this).closest("div").addClass("on");
			}
		}
	});
}

// 진로탐색 : 학과 (롤모델)
function targetSelectRole() {
	$(".role_radio input").change(function(){
		if($(this).parent().parent().hasClass("role_box")) {
			var RoleName = $(this).parent().prev().children("p").text();
			//alert(RoleName + "를 롤모델로 설정합니다.");
			$(".role_box").removeClass("on");
			if($(".role_radio input").is(":checked")){
				$(this).closest("div").addClass("on");
			}
		}
	});
}

// 채용정보
function jobnfoCardHover(){
	$('.jobinfo_card').children('a').on({
		'mouseenter focus' : function(){
			$(this).parent().addClass('on');
		},
		'mouseleave blur' : function(){
			$(this).parent().removeClass('on');
		}
	});
}

// 글자수 표기 1000자 제한
function letterCount1000(){
	var wrapper = $('#letter_count1000');

	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 1000;

		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('댓글은 1000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}
	});
	wrapper.find('textarea').keyup();
}

// 글자수 표기 2000자 제한
function letterCount2000(){
	var wrapper = $('#letter_count2000');

	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 2000;

		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('상담 내용은 2000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}
	});
	wrapper.find('textarea').keyup();
}

// 핵심역량검사 : 글자수 100자이상 2000자이하 제한
function testLetterCount(){

	$('.test_lettercount').each(function(){
		var wrapper = $(this);

		wrapper.find('textarea').keyup(function() {
			var countLength = $(this).val().length;
			var conuntLimit = 2000;

			wrapper.find('.letter_counter').html(countLength + '/' + conuntLimit);

			if (countLength > conuntLimit) {
				alert('답변은 2000자 이내로 작성하여 주십시오');
				$(this).val($(this).val().substr(0, conuntLimit));
				$('.letter_counter').html(conuntLimit + '/' + conuntLimit);
			}
		});

		wrapper.find('textarea').on('focusout', function(){
			var countLength = $(this).val().length;

			if (countLength < 100) {
				alert('답변은 100자 이상 작성하여 주십시오');
				$(this).css('border-color','#f64f2e');
			} else {
				$(this).css('border-color','#d0ccc9');
			}
		});

		wrapper.find('textarea').keyup();
	});

}

// input 텝키 사용
function tabEnter(){
	$('.check_row').keypress(function(e){
		if((e.keyCode ? e.keyCode : e.which) == 13){
			$(this).find('input').trigger('click');
		}
	});
}

// 학습유형 진단결과
function typeTestResult(){
	var wrapper = $('.typeresult_wrap');
	var no = wrapper.children('.type_list').children('div').children('div').filter('.on').parent().index();

	wrapper.children('.type_result').children('div').hide();
	wrapper.children('.type_result').children('div').eq(no).show();
}

// 독서인증현황
function readStep(){
	var no = $('.readstep_wrap').children('.readstep_list').children('li').filter('.on').length;
	var target = $('.readstep_wrap').find('.readstep_line').children('.step_point').children('span');

	target.removeClass('on').eq(no).prevAll().addClass('on');

}

// 답글 남기기 (토론광장)
function reply(){
	var targetBox = $('.letter_count').find('.re_tit');
	targetBox.hide();

	$('.btn_rereply').on('click',function(){
		var scrTop = $('.rewrite_box').offset().top;
		var txt = $(this).parent().prev().find('.re_id').text();

		targetBox.slideDown(300).find('span').text('@' + txt);

		$('body,html').animate({
			scrollTop: scrTop
		}, 800);
		return false;
	});

	targetBox.find('.btn_del').on('click',function(){
		$(this).parent().slideUp(300);
	});
}

// 대표 이력서 설정
/*function setBasicPortfolio(){
	$('.resume_wrap').each(function(){
		var wrapper = $(this);
		var btn = wrapper.find('.btn_setbasic');
		btn.on('click', function(){
			wrapper.children('li').removeClass('on');
			$(this).parent().parent().parent().addClass('on');
			btn.removeClass('on');
			$(this).addClass('on');
		});
	});
}*/

// 전공 마일스톤 소개
function milestoneAccordion(){
	var list = $('.milestone_wrap').find('.milestone_tit');
	var contents = $('.milestone_wrap').find('.milestone_cnt');

	// 기본 설정
	contents.hide();
	list.filter('.on').next().show();
	list.filter('.on').find('button').text('닫기');

	// 클릭시
	list.find('button').on('click', function(){
		var thisList = $(this).parent();

		if( thisList.hasClass('on') ) {
			thisList.removeClass('on').next().slideUp(400);
			thisList.find('button').text('열기');
		} else {
			list.removeClass('on').find('button').text('열기');
			contents.slideUp(400);
			thisList.addClass('on').next().slideDown(400);
			thisList.find('button').text('닫기');
		}
	});

}

// 진로탐색
function cardSelect(){
	$('.cardselect_wrap').each(function(){
		var card = $(this).find('.card_select');
		card.on('click', function(){
			card.not($(this)).removeClass('on');
			$(this).addClass('on');
		});
	});

}

// 페이징버튼 클릭시 페이지 상단부분으로 이동
function testUp(){
	var windowWidth = $(window).outerWidth();
	var target = $('.testlist_wrap').find('.testlist_move').not('.disabled');

	if(windowWidth < 1025) {
		target.on('click', function(e){
			e.preventDefault();
			$('body,html').animate({scrollTop: 150 }, 300);
		});
	}else {
		target.on('click', function(e){
			e.preventDefault();
			$('body,html').animate({scrollTop: 200 }, 300);
		});
	}
}

//개인정보수집 동의서
function privacy(){
	var checkAll = $('.privacyagree_box').children('.check_row').children('input');
	var checkEach = $('.privacy_list').find('.check_row').find('input');
	var checkTotal = checkEach.length;

	checkAll.on('change',function(){
		if($(this).is(':checked')){
			checkEach.prop('checked', true);
		}else {
			checkEach.prop('checked', false);
		}
	});

	checkEach.on('change',function(){
		var checkSelected = checkEach.filter(':checked');
		if(checkSelected.length >= checkTotal){
			checkAll.prop('checked',true);
		}else {
			checkAll.prop('checked',false);
		}

	})
}

// 상세검색창
function searchDetails(){
	var windowWidth = $(window).outerWidth();

	if (windowWidth < 690) {
		// console.log('tablet,mobile');
		$('.search_box3 .btn_details').each(function(){
			var wrapper = $(this).parents('.search_box3');
			$(this).appendTo(wrapper);
		});
		$('.search_box3 .btn_details').on('click', function(){
			$(this).prev('.search_detail').slideToggle(300);
		});
	}

	$('.search_box3 .btn_details').on('click', function(){
		$(this).toggleClass('on');
		$(this).parent().next('.search_detail').slideToggle(300);
	});
}

// 공지사항 리스트
function noticeHoverEvent(){
	var windowWidth = $(window).outerWidth();
	if (windowWidth > 1024) {
		$('.data_list .col_2 a, .notice_list .col_3 a').on({
			'mouseenter focus':function(){
				$(this).parent().parent().addClass('on');
			},
			'mouseleave blur':function(){
				$(this).parent().parent().removeClass('on');
			}
		});
	}
}

// 스크롤 패럴럭스
function setScrollEffect(selector, extra) {
	checkVisibility();
	$(window).on('scroll resize', function() {
		checkVisibility();
	});

	function checkVisibility() {
		$(selector).each(function(){
			var target = $(this);
			var scrollTop = $(document).scrollTop();
			var minShow = target.offset().top - $(window).height() * extra;

			if ( scrollTop >= minShow ){
				target.addClass('on');
			}
		});
	}
}

// 비교과 프로그램 카드(hover)
function programCardHover(){
	var windowWidth = $(window).outerWidth();
	var target = $('.programcard_list').not('.programcard_addlist');


	if( windowWidth > 1024 ) {
		// 비교과 프로그램
		target.find('.previewimg_box').find('a').add( target.find('dt').find('a') ).on({
			'mouseenter focus' : function(){
				$(this).parents('.programcard_list').addClass('hover');
			},
			'mouseleave blur' : function(){
				$(this).parents('.programcard_list').removeClass('hover');
			}
		})
		// 비교과 이수 계획 추가
		$('.programcard_addlist .previewimg_box a').on('click', function(){
			$(this).parents('.programcard_addlist').toggleClass('selected');
		});
	}

}

// 비교과 그래프
function showProgramGraph(){
	$('.programcard_list').find('.graph_wrap').hide();

	$('.program_footer').children('a').on('click', function(){
		var wrapper = $(this).parent('.program_footer').parent('.programcard_list');
		var capaGraph = wrapper.find('.capaview_graph');
		var typeGraph = wrapper.find('.typeview_graph');

		if( $(this).hasClass('btn_capaview') ){
			if( $(this).hasClass('on') ){
				$(this).removeClass('on');
			} else {
				wrapper.find('.btn_typeview').removeClass('on');
				$(this).addClass('on');
			}
			typeGraph.hide('fast');
			capaGraph.toggle('fast');
		} else if( $(this).hasClass('btn_typeview') ){
			if( $(this).hasClass('on') ){
				$(this).removeClass('on');
			} else {
				wrapper.find('.btn_capaview').removeClass('on');
				$(this).addClass('on');
			}
			capaGraph.hide('fast');
			typeGraph.toggle('fast');
		}
	});
}

// 비교과 프로그램 테이블(hover)
function programTableHover(){
	var windowWidth = $(window).outerWidth();

	if( windowWidth > 1024 ) {
		$('.programlist_wrap .nun_tit').on({
			'mouseenter focus' : function(){
				$(this).parents('ul').addClass('on');
			},
			'mouseleave blur' : function(){
				$(this).parents('ul').removeClass('on');
			}
		});
	}
}

// 방문상담 시간테이블
function timeTableCustom(){
	var targetChecked = $('.tbl_time .check_row input:checked');
	targetChecked.next().text('상담 선택');
	targetChecked.parent().parent().addClass('on');

	$('.tbl_time .check_row').on('click',function(){
		var target = $(this).find('input').not(':disabled');
		if( target.is(':checked') ){
			target.prop('checked',false).parent().parent().removeClass('on');
			target.next().text('상담 가능');
		} else {
			target.prop('checked',true).parent().parent().addClass('on');
			target.next().text('상담 선택');
		}
	});
}

// 방문상담 셀렉트 포커스
function selectFocusOn(){
	$('.selectfocus_js select').on({
		'focusin' : function(){
			$(this).parent().addClass('on');
		},
		'focusout' : function(){
			$(this).parent().removeClass('on');
		}
	});
	$('.selectfocus_js select option').on('click', function(){
		$(this).parent().focusout();
	});
}

// 취업상담 상담사 선택
function selectCounselor() {
	// 기본 설정
	$('.counselorcard_list .check_only input[type="radio"]:checked').parents('.counselorcard_list').addClass('on');
	
	// 클릭시
	$('.counselorcard_list .check_only input[type="radio"]').click(function () {
		// 버튼 클릭시 상담사 박스 on/off
		$('.counselorcard_list').removeClass('on');
		$(this).parents('.counselorcard_list').addClass('on');
	});
}

// 상담이력 테이블 - 버튼에 호버시 테이블 row on/off
function tableHover(){
	var windowWidth = $(window).outerWidth();

	if (windowWidth > 1024) {
		$('.tbl_hover_js table a, .tbl_hover_js table button').parents('td').on({
			'mouseenter focus' : function(){
				$(this).parents('tr').css('background','#f0f3f7');
			},
			'mouseleave blur' : function(){
				$(this).parents('tr').css('background','#fff');
			}
		});
	}
}

// 상담 가능 시간 팝업
function scheduleSelect(){
	var target = $('.schedule_wrap .counsel_status input').not(':disabled');
	var targetSelected = $('.schedule_wrap .counsel_status input:checked');
	targetSelected.parent().parent('td').addClass('on');

	target.on('click',function(){
		target.prop('checked',false).parent().parent('td').removeClass('on');
		$(this).prop('checked',true).parent().parent('td').addClass('on');
	});
}


/*
$(".first_menu").on("click", function(e) {
	e.stopImmediatePropagation();

	var _navHref = $(this).next("div").children("ul").children("li").children("a:eq(0)").attr("href");

	if ($(this).next("div").children("ul").children("li").children("ul").length > 0) {
		_navHref = $(this).next("div").children("ul").children("li").children("ul").children("li").children("a:eq(0)").attr("href");
	}

	location.href= _navHref;
})
*/

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
		}
	}
}


// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {

	// header
	headerStyle();

	//headerFix
	//headerFix();

	//lnb 메뉴
	lnbMenu();

	// 사이트 맵
	sitemapMenu();

	//페이지 상단으로 이동
	moveTop();

	//swiper
	swiperSlide();
	swiperSlide1();
	swiperSlide2();
	swiperSlide3();
	swiperSlide4();
	swiperSlide5();
	swiperSlide6();

	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// 셀렉트 텝
	tabSelect();

	// tab 세로형 (진단결과 내 역량별 설명)
	tabListRow();

	// 책갈피 기능
	bookmark();

	// accordion
	accordion();

	// UI 가이드 책갈피
	ui_navi ();

	// 클릭시 클래스 'on' 제어
	toggleOnClick();

	// hover시 클래스 'on' 제어
	toggleOnHover();

	// selectbox
	selectBox();

	// 체크박스 토글(row) : 검색창 셀렉트박스
	checkToggleRow();

	//체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	//라디오 토글
	radioToggle();

	// checkbox button - 찜목록
	checkBtn();

	// 진단결과 선택하기
	resultCheck1();

	// 역량도향상 선택하기
	resultCheck2();

	// 워크넷 진단 결과보기
	worknetResult();

	// 카드형,리스트형 활성화
	cardSwitch();

	// 진로탐색 기업, 롤모델 선택
	targetSelectCorp();
	targetSelectRole();

	// 채용정보
	jobnfoCardHover();

	// 글자수 표기
	letterCount1000();
	letterCount2000();
	testLetterCount();

	// input 텝키 사용
	tabEnter();

	// 학습유형 진단결과
	typeTestResult();

	// 독서인증현황
	readStep();

	// 답글 남기기 (토론광장)
	reply();

	// 대표 이력서 설정
	/*setBasicPortfolio();*/

	// 전공 마일스톤 소개
	milestoneAccordion();

	// 진로탐색
	cardSelect();

	// 페이징버튼 클릭시 페이지 상단부분으로 이동
	testUp();

	//개인정보수집 동의서
	/*privacy();*/

	// 상세검색창
	searchDetails();

	// 공지사항 리스트
	noticeHoverEvent();

	// 스크롤 패럴럭스
	setScrollEffect('.fadeup', 1.1);
	setScrollEffect('.fadein', 1.1);

	// 비교과 프로그램 카드(hover)
	programCardHover();

	// 비교과 그래프
	showProgramGraph();

	// 비교과 프로그램 테이블(hover)
	programTableHover();

	// 방문상담 시간테이블
	timeTableCustom();

	// 방문상담 셀렉트 포커스
	selectFocusOn();

	// 취업상담 상담사 선택
	selectCounselor();

	// 상담이력 테이블 - 버튼에 호버시 테이블 row on/off
	tableHover();

	// 상담 가능 시간 팝업
	scheduleSelect();

	// 퍼블리싱 알림
	closeZodiacBanner();

	$(window).on('resize', function () {
		headerStyle();
	});

	// 브라우저 알림창 닫기
	$(".browser_alert_close").on("click", function() {
		$("#browser_alert").slideUp();
	});

	// select2 설정
	$(".sel_search_row select").select2({
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
		set_css(':focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}');
	});
})(document);


