/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// 헤더 메뉴 반응형
function responsiveStyle() {
	var windowWidth = $(window).outerWidth();
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5; // 동작의 구현이 시작되는 위치
	var navBarHeight = $('.nav_wrap').outerHeight();

	// header 스크롤시
	// 스크롤시 클래스 추가
	$(window).scroll(function (event) {
		didScroll = true;
	});
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	// 동작을 구현
	function hasScrolled() {
		// 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
		var st = $(this).scrollTop();

		// 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
		if(Math.abs(lastScrollTop - st) <= delta){
			return;
		}

		// 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
		if (st > lastScrollTop && st > navBarHeight){
			// Scroll Down
			$('body').addClass('scrolly');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('body').removeClass('scrolly');
			}
		}

		// lastScrollTop 에 현재 스크롤위치를 지정한다.
		lastScrollTop = st;
	}

	if (windowWidth < 1025) {
		//console.log('모바일,태블릿');

		//PC 이벤트 제거
		$('.btn_searchunified, .btn_menu, .gnb_2depth > .gnb_tit').off('click');
		$('body').removeClass('on');
		$('.btn_menu').removeClass('on');
		$('.search_area').stop().slideUp(200);
		$('.btn_alert').insertBefore('.btn_searchunified');

		// 기본 설정
		$(".btn_admin").prependTo($(".gnb_submenu > .grid_content")).wrap('<div></div>');
		$(".btn_log").prependTo($(".gnb_submenu > .grid_content")).wrap('<div></div>');

		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();

			if( $(this).hasClass('on') ){
				$('body').removeClass('on');
				$(this).removeClass('on');
			} else {
				$('body').addClass('on');
				$(this).addClass('on');
			}
		});

		// 2depth
		$('.gnb_2depth > .gnb_tit').on('click', function(){
			if( $(this).next('ul').is(':visible') ){
				$(this).parent().removeClass('on').children('ul').stop().slideUp(300);
			} else {
				$('.gnb_2depth').removeClass('on').children('ul').stop().slideUp(300);
				$(this).parent().addClass('on').children('ul').stop().slideDown(300);
			}
		});

		// 검색창 (mobile, tablet)
		$('.btn_searchunified').on('click', function(){
			// gnb 열려있을때
			if( $('.gnb_submenu').is(':visible') ){
				$('body').removeClass('on');
				$('.btn_menu').removeClass('on');
			}
			$('.search_area').stop().slideDown(200);
		});
		$('.search_area .btn_searchclose').on('click', function(){
			$('.search_area').stop().slideUp(200);
		});

	} else {
//		console.log("PC");

		//TABLET,MOBILE 이벤트 제거
		$('.btn_searchunified, .btn_menu, .gnb_2depth > .gnb_tit').off('click');
		$('body').removeClass('on');
		$('.btn_menu').removeClass('on');
		$('.search_area').stop().slideUp(200);
		$('.btn_alert').insertBefore('.user_info');

		// 기본 설정
		$(".btn_admin").appendTo($(".header_top > .grid_content"));
		$(".btn_log").appendTo($(".header_top > .grid_content"));

		// gnb
		$('.btn_menu').on('click', function(){

			if( $('.search_area').is(':visible') ){
				$('.search_area').stop().slideUp(200);
			}

			if( $(this).hasClass('on') ){
				$(this).removeClass('on');
				$('.gnb_submenu').stop().slideUp(300);
			} else {
				$(this).addClass('on');
				$('.gnb_submenu').stop().slideDown(300);
			}
		});

		// 검색창 (pc)
		$('.btn_searchunified').on('click', function(){
			// gnb 열려있을때
			if( $('.gnb_submenu').is(':visible') ){
				$('body').removeClass('on');
				$('.gnb_submenu').stop().hide();
				$('.btn_menu').removeClass('on');
			}
			$('.search_area').stop().slideDown(200);
		});
		$('.search_area .btn_searchclose').on('click', function(){
			$('.search_area').stop().slideUp(200);
		});

		// header 스크롤시
		$(window).on('scroll',function(){
			// gnb
			$('.btn_menu').removeClass('on');
			if( $('.gnb_submenu').is(':visible') ){
				$('.gnb_submenu').stop().slideUp(100);
			}
			// 검색창
			if( $('.search_area').is(':visible') ){
				$('.search_area').stop().slideUp(100);
			}
		});
	}
}

var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {
	responsiveStyle();
}

// lnb 메뉴
function lnbMenu(){

	// 서브 lnb 있을 경우 :
	$('.lnb_1depth').each(function(){
		var target = $(this);
		target.children('a').children('.lnb_more').hide();
		if ( target.find('.lnb_2depth').length ) {
			$('<span class="lnb_more">펼쳐보기</span>').appendTo( target.children('a') );
		}
	});

	// 마우스오버시 하위메뉴 show/hide :
	$('.lnb_1depth').on({
		'mouseenter focus':function(){
			$(this).children('a').next('.lnb_2depth').stop().slideDown(200);
		},
		'mouseleave blur':function(){
			$(this).children('a').next('.lnb_2depth').stop().slideUp(200);
		}
	})

}

// toggle class 'on'
function toggleOn(){
	$('.on_js').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('on');
	});
}

//페이지 상단 이동
function moveTop() {
	var windowWidth = $(window).outerWidth();
	$('.move_top').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.move_top').fadeIn();
		} else {
			$('.move_top').fadeOut();
		}
	});
	$('.move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children();
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

// 클릭한 영역으로 이동
function gotoin() {
	$('.goto_js').each(function(){
		var gotoTit = $(this).find('a');

		gotoTit.on('click',function(e){
			e.preventDefault();
			gotoTit.removeClass('on');

			var target = $(this).attr('href');

			if (target.length) {
				$(this).addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 220
				}, 'slow');
			}
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.acd_cnt_js').hide();
	$('.accordion_js').each(function(){
		var tabs = $(this).find('.acd_list_js');


		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		tabs.filter('.on').next('.acd_cnt_js').show();

		tabs.on('click',function(e){
			e.preventDefault();

			var thisTab = $(this);
			var thisPanel = thisTab.next('.acd_cnt_js');
			var notThisTab = tabs.not(thisTab);
			var notThisPanel = notThisTab.next();

			if(notThisTab){
				notThisTab.removeClass('on');
				notThisPanel.slideUp(300);
			}

			thisTab.toggleClass('on');
			thisPanel.stop().slideToggle(300);
		});
	})
}

//토글 체크박스 검색버튼 (check_col)
/*function checkToggle(){
	$('.search_toggle_row').each(function () {
		// 최초 로드시 선택된 체크박스가 없으면 전체 체크박스 checked
		if($(".searchtoggle_left input:checked").length == 0){
			$(".check_all").prop("checked", true);
			$(".check_all").parent().addClass("on");
		}
		// 체크박스 선택시 스타일 변경 및 전체 체크박스인지 여부 확인
		$(".searchtoggle_left .btn_check_form input[type='checkbox']").change(function() {
			if($(this).is(":checked")){
				if($(this).hasClass("check_all")){
					$(".searchtoggle_left input[type='checkbox']").prop("checked", false);
					$(".searchtoggle_left input[type='checkbox']").parent().removeClass("on");
					$(".check_all").prop("checked",true);
					$(".check_all").parent().addClass("on");
				} else {
					$(".check_all").prop("checked", false);
					$(".check_all").parent().removeClass("on");
					$(this).prop("checked",true);
					$(this).parent().addClass("on");
				}

			} else {
				$(this).parent().removeClass("on");
				if($(".searchtoggle_left input:checked").length == 0){
					$(".check_all").prop("checked",true);
					$(".check_all").parent().addClass("on");
				}
			}
		});

		//찜목록, 추천교과
		$(".searchtoggle_right .btn_check_form input[type='checkbox']").change(function () {
			if ($(this).is(":checked")) {
				$(this).parent("label").addClass("on");
			} else {
				$(this).parent().removeClass("on");
			}
		});
	});
}*/


// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var label = $(this).children('label');
		var target = $(this).children('.select_custom');
		var targetName = target.children('option:selected').text();

		label.text(targetName);
		target.on('change',function(){
			var targetName = $(this).children('option:selected').text();
			label.text(targetName);
		});
	});
}

// selectbox 교수 상담 시간
function selectBoxCounsel(){
	var windowWidth = $(window).outerWidth();
	var target = $('.date_current');
	var optBox = target.find('.date_selectbox').find('a');

	if(windowWidth < 1025) {
		target.on('click',function(){
			$(this).find('.date_selectbox').stop().slideToggle(300);
		});
	}else {
		target.on({
			'mouseenter focus' : function(){
				$(this).find('.date_selectbox').stop().slideDown(300);
			},
			'mouseleave blur' : function(){
				$(this).find('.date_selectbox').stop().slideUp(300);
			}
		});
	}
	optBox.on('click',function(){
		var optSelected = $(this).text();
		$(this).parents('.date_selectbox').prev('strong').text(optSelected);
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
	var checkTxt = $('.check_row_wrap').children('.check_row').children('input:checked').next().text();

	checkBox.text(checkTxt);

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
			checkBox.text('전체');
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

			checkAll.prop('checked',false);
			$(this).prop('checked',true);

			if(checkSelected.length >= checkTotalCnt){
				checkAll.prop('checked',true);
				check.prop('checked',false);
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



// 취업상담 - 방문상담/온라인상담 라디오 버튼
function radioBtn() {
	$(".radio_btn>input[type='radio']").click(function () {
		// 버튼 클릭시 상담사 박스 on/off
		$('.counselor_box').removeClass('on');
		$(this).parent('.radio_btn').parent('div').parent('.counselor_box').addClass('on');
	});
}

// checkbox button - 찜목록 버튼
function checkBtn(){
	$('.check_btn_wrap').each(function(){
		$(this).find('input[type="checkbox"]').change(function(){
			$(this).next().toggleClass('on');
		})
	})
}

// 클릭시 on/off 버튼 : 찜하기 버튼
function toggleBtn(){
	$('.btn_toggle').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('on');
		});
	});
}
/*
//찜하기 버튼
function btnLike() {
	$('.btn_addlike').on('click', function(){
		$(this).toggleClass('on');
	});
}*/

// 진단결과 선택하기
function resultCheck1() {
	// 기본 설정
	$('.box_checklist1 .testdo_checkbox.on .check_only input').prop("checked", true);

	// 클릭시
	$(".box_checklist1 .testdo_checkbox").on("click", function(){
		$(".box_checklist1 .testdo_checkbox").removeClass("on");
		$(".box_checklist1 .testdo_checkbox .check_only input").prop("checked", false);
		$(this).addClass("on");
		$(this).find('.check_only').children('input').prop("checked", true);
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
		var resultBtn = $(this).find(".btn_worknetresult");
		resultBtn.on("click", function(){
			$(this).toggleClass('on');
			$(this).parent().next().slideToggle();
		});
	});
}

//진로탐색 기업선택하기
function selectCompany() {
	$(".company_box label").on("click", function(){
		$(".company_box").removeClass("on");
		$(".company_box .check_only input").prop("checked", false);
		$(this).parents(".company_box").addClass("on");
		$(this).siblings().prop("checked", true);
	});
}

//교과정보 추가
function addSubject() {
	$('.subject_addlist table').on('click', 'tr', function (e) {
		var el = e.target;
		if ( el.type !== "checkbox"){
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
				$(this).find(":checkbox").prop("checked", false);
			} else {
				$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
				$(this).find(":checkbox").prop("checked", true);
			}
		}
	});
}

//비교과정보 추가
function addNunsubject() {
	$(".program_footer .btn_check input").change(function(){
		if($(this).is(":checked")){
			$(this).parent().parent().prev().addClass("on");
		} else {
			$(this).parent().parent().prev().removeClass("on");
		}
	});
}

// 별점주기
function starlevel(){
	$('.starlevel_js').each(function(){
		var star = $(this).find('.star_level');
		var firstStar = star.eq(0);

		firstStar.on('click', function(){
			if ( $(this).hasClass('on') === false ) {
				/*console.log('별off');*/
				$(this).addClass('on');
			} else {
				if ( $(this).next().hasClass('on') === false ) {
					/*console.log('별on 이전별off');*/
					$(this).removeClass('on');
				} else {
					/*console.log('별on 이전별on');*/
					$(this).addClass('on');
					$(this).nextAll().removeClass('on');
				}
			}
		});

		star.not(firstStar).on('click', function(){
			$(this).addClass('on');
			$(this).prevAll().addClass('on');
			$(this).nextAll().removeClass('on');
		});
	});
}

// 글자수 표기
function letterCount(){
	$('#letter_count').keyup(function(){
		var content = $(this).val();
		$('#letter_counter').html(content.length + '/100');
	});
	$('#letter_count').keyup();
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

//가족추가
function familyList() {
	$(".family_list dl").each(function() {
		$(this).find("dt").unbind("click");
		$(this).find("dt").on("click", function() {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on');
				$(this).next('dd').slideUp();
			} else {
				$(this).addClass('on');
				$('.faqlist dt').not($(this)).removeClass('on');
				$(this).next('dd').slideDown();
			}
		});
	});
}

// 어학, 자격증 그래프 보여주기
function viewActivepoint() {
	$(".active_footer .btn_pointview").on("click", function() {
		var showGraphbox = $(this).parent().parent().next(".graph_wrap");
		$(showGraphbox).show('fast');
	});
	$(".active_wrap .graph_wrap .btn_del").on("click", function() {
		var hideGraphbox = $(this).parent(".graph_wrap");
		$(hideGraphbox).hide('fast');
	});
}

// 포트폴리오 분석결과 높이 같게 조절
function equalHeight() {
	var windowWidth = $(window).outerWidth();
	var box = $('.portfolio_wrap').find('.test_outcome').find('.testoutcome_sheet');
	var heightArray = box.map(function(){
		return $(this).height();
	}).get();
	var maxHeight = Math.max.apply( Math, heightArray );

	if ( windowWidth > 768 ) {
		// only pc
		box.height(maxHeight);
	}
}

// 페이징버튼 클릭시 페이지 상단부분으로 이동
function up(){
	$('.up_js').each(function(){
		var windowWidth = $(window).outerWidth();

		if(windowWidth < 1025) {
			$('.testlist_move').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop: 150 }, 300);
			});
		}else {
			$('.testlist_move').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop: 200 }, 300);
			});
		}

	});
}

// 콘텐츠 내 별점 셀렉트
function starLevelSelect(){
	var wrapper = $('.starlevel_select');

	wrapper.on('click', function(){
		if ( $(this).children('ul').is(':visible') ) {
			$(this).children('ul').slideUp('fast');
		} else {
			$(this).children('ul').slideDown('fast');
		}
	});
	wrapper.children('ul').children('li').on('click', function(){
		var targetSrc = $(this).children('img').attr('src');
		var targetAlt = $(this).children('img').attr('alt');

		wrapper.children('p').children('img').attr({
			src : targetSrc,
			alt : targetAlt
		});
	});
}

// hashtag
function hashtag(){
	$('.hashtag_clickable a').on('click',function(e){
		e.preventDefault();

		$(this).parent().toggleClass('on');
	});
}

// 비교과 카드형/리스트형 변환
function nonsubjectTypeChange(){
	var wrapper = $('.btntab_js').parent();
	wrapper.children('.btntab_js').on('click',function(){
		wrapper.children('.btntab_js').removeClass('on');
		$(this).addClass('on');
	});
}

// 브라우저 알림창
function browserAlert(){
	$(".browseralert_close").on("click", function() {
		$("#browseralert").slideUp();
	});
}

// 바로가기 등록
function shortcutSelect(){
	var wrapper = $('#shortcut_select');

	// 기본 설정
	wrapper.find('.check_only input:checked').parents('tr').find('td').addClass('td_selected');

	// 클릭시
	wrapper.find('.check_only').on('change',function(){
		var target = $(this).find('input');
		var targetChecked = wrapper.find('.check_only input:checked');

		// 체크 표시
		if( target.is(':checked') ){
			target.prop('checked', true);
			$(this).parents('tr').find('td').addClass('td_selected');

		} else {
			target.prop('checked', false);
			$(this).parents('tr').find('td').removeClass('td_selected');
		}

		// 갯수 제한
		if( targetChecked.length > 6 ){
			alert('최대 6개 메뉴를 선택해주세요.');
			target.prop('checked', false);
			$(this).parents('tr').find('td').removeClass('td_selected');
		}
	});
}

// 포트폴리오 공개범위 설정
function portfolioDisclosure(){
	var wrapper = $('#portfolioDisclosure');

	// 기본 설정
	wrapper.find('.check_only input:checked').parents('tr').find('td').addClass('td_selected');

	// 클릭시
	wrapper.find('.check_only').on('change',function(){
		var target = $(this).find('input');
		var targetChecked = wrapper.find('.check_only input:checked');

		// 체크 표시
		if( target.is(':checked') ){
			target.prop('checked', true);
			$(this).parents('tr').find('td').addClass('td_selected');

		} else {
			target.prop('checked', false);
			$(this).parents('tr').find('td').removeClass('td_selected');
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

	// toggle class 'on' : sitemap
	toggleOn();

	// 페이징버튼 클릭시 페이지 상단부분으로 이동
	up();

	//gnb 메뉴 반응형 동작
	responsiveStyle();

	//페이지 상단으로 이동
	moveTop();

	//lnb 메뉴
	lnbMenu();

	//tab
	/*tabList();*/

	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// 클릭한 영역으로 이동
	gotoin();

	// accordion
	accordion();

	// tab -모양만
	/*showTab();*/

	//토글 체크박스 검색버튼
	/*checkToggle();*/

	//tab 연동
	/*tabgoto();*/

	// selectbox
	selectBox();

	// selectbox 교수 상담 시간
	selectBoxCounsel();

	// 체크박스 토글(row) : 검색창 셀렉트박스
	checkToggleRow();

	//체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	//라디오 토글
	radioToggle();

	// 취업상담 - 방문상담/온라인상담 라디오 버튼
	radioBtn();

	// checkbox button - 찜목록
	checkBtn();

	// 클릭시 on/off 버튼 : 찜하기 버튼
	toggleBtn();

	// 진단결과 선택하기
	resultCheck1();

	// 역량도향상 선택하기
	resultCheck2();

	// 워크넷 진단 결과보기
	worknetResult();

	//교과정보 추가
	addSubject();

	//비교과프로그램 추가
	addNunsubject();

	// 별점주기
	starlevel();

	// 글자수 표기
	letterCount();

	//FAQ
	/*faqList();*/

	//가족추가
	familyList();

	// 진로탐색 기업선택
	selectCompany();

	// 비교과 그래프 보여주기
	/*viewProgrampoint();*/

	// 어학, 자격증 그래프 보여주기
	viewActivepoint();

	// 포트폴리오 분석결과 높이 같게 조절
	equalHeight();

	// 콘텐츠 내 별점 셀렉트
	starLevelSelect();

	// hashtag
	hashtag();

	// 비교과 카드형/리스트형 변환
	nonsubjectTypeChange();

	// 브라우저 알림창
	browserAlert();

	// 바로가기 등록
	shortcutSelect();

	// 포트폴리오 공개범위 설정
	portfolioDisclosure();

	// 퍼블리싱 알림
	closeZodiacBanner();

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


