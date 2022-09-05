// JavaScript Document

// top 버튼
function moveTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('#back-to-top').tooltip('show');
}

//Date picker
function dataPicker() {
	$('.btDtpicker').datepicker({
		changeMonth: true,
		changeYear: true,
		autoclose: true,
		format: "yyyy-mm-dd",
		language: 'kr'
	});
}

function selectboxChange() {
	$("#getCode").each(function(){
		var str = "";
		$(this).children( "option:selected" ).each(function() {
			str += $( this ).text() + " ";
		});
		$(this).siblings('span').children('strong').text( str );
	});
}

function popupModal() {
	/*var url = $(this).attr('data-url');*/
	$('.btn_modal').on('click', function(e){
		$('.modal').modal({
			remote : url
		});
	});
}

// 버튼 클릭시 클래스 on 제어
function on_js(){
	$('.on_js').on('click', function(){
		$(this).toggleClass('on');
	});
}

// tab 모양만
function showTab(){
	$('.showtab_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// tab 클릭시 이동
function moveTab () {
	$('.movetab_js').each(function(){
		var movetab = $(this).find('li');

		movetab.on('click',function(e){
			e.preventDefault();
			movetab.removeClass('on');

			var target = $(this).find('a').attr('href');

			if (target.length) {
				$(this).addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 40
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

/* gnb scroll fix */
function gnbScrollFix(){
	$('.sidebar-menu > .treeview > a').on('click',function(e){
		e.preventDefault();
		var gnbHeight = $('.main-sidebar').height();
		var gnbClicked = $(this).offset().top;

		if( gnbClicked > gnbHeight / 2 ){
			$('.main-sidebar').animate({
				scrollTop: $(this).offset().top
			}, 'slow');
		}
		
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
	moveTop();
	dataPicker();
	// on_js();
	showTab();
	moveTab();
	accordion();
	gnbScrollFix();

	// 브라우저 알림창 닫기
	$(".browser_alert_close").on("click", function() {
		$("#browser_alert").slideUp();
	});

	//tab
	$('.ad_showtab').each(function () {
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

			e.preventDefault();
		});
	});

	// select2
	$(".select2").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		}
	});




});

$(window).on('load', function () {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			// $(".tbl_scroll, .tbl_scroll_xs, .tbl_scroll_sm, .tbl_scroll_md, .tbl_scroll_lg").off(mCustomScrollbar);
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			
			$(".tbl_scroll_lg").mCustomScrollbar({
				axis: "x",
				theme: "dark-thin",
				advanced: {
					autoExpandScrollbar: "true",
				}
			});
		
			$(".tbl_scroll, .tbl_scroll_xs, .tbl_scroll_sm, .tbl_scroll_md").mCustomScrollbar({
				axis: "x",
				theme: "dark-thin",
				advanced: {
					autoExpandHorizontalScroll: false
				},
			});
			/* 메뉴 세로 스크롤 : 
			$(".main-sidebar").mCustomScrollbar({
				axis: "y",
				theme: "dark-thin",
				advanced: {
					autoExpandHorizontalScroll: false
				},
			});
			*/
		}
	}
});

