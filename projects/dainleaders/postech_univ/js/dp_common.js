/**
 * 2018.06.05.
 * 최초 생성.
 * by KMJ K
 */

/** 빈값 체크 */
$.fn.emptyCheck = function(type) {
	var value = $.trim(this.val() + "");
	if (!value) {
		alert($(this).attr("title") + "을(를) 입력해야 합니다.");
		// 20180621 문성훈 추가 페이지 포커스시 상단 헤드가 고정이어서 그부분에 커서가 포커스 되어서 보임
//		$(window).scrollTop($("input").offset().top - 100)
		//20181031 문성훈 포커스시 헤드고정아니여서 다시 주석
//		$("html").scrollTop(0);

		if (type == 0) {
			$(this).select();
		} else {
			$(this).focus();
		}
		return false;
	}
	return true;
};

$.fn.emptyAbilityCheck = function(type) {
	var value = $.trim(this.val() + "");
	if (!value) {
		return false;
	}
	return true;
};

/*
 * 체크박스 전체 선택 fn
 */
fn_checkAll = function(obj, byName) {
	if ($(obj).is(":checked")) {
		$("input[name=" + byName + "]").prop("checked", true);
	} else {
		$("input[name=" + byName + "]").prop("checked", false);
	}
};

/*
 * 체크박스 체크 여부에 따라 대표 체크 박스 체크/해제 fn
 */
fn_checkbox = function(className, targetId) {
	var count = 0;

	$("." + className).each(function(idx) {
		if (!$(this).is(":checked")) count++;
	});

	if (count > 0) {
		$("#" + targetId).prop("checked", false);
	} else {
		$("#" + targetId).prop("checked", true);
	}
};

resetData = function(obj) {
	$(obj).siblings("input").val("");
};

$(document).on("click", ".resetBtn", function(e) {
	e.stopImmediatePropagation();
	resetData(this);
});

var rval = "";
var timer = null;
checker = function(obj, count, textlimitName) {
	if (rval != obj.value) {
		if (textlimitName && document.getElementById(textlimitName)) {
			document.getElementById(textlimitName).innerHTML = obj.value
					.bytes();
		}
		rval = obj.value;
	}
	if (obj.value.bytes() > count) {
		alert("최대 " + count + "byte이므로 초과된 글자수는 자동으로 삭제됩니다.");
		obj.value = obj.value.cut(count, '');
		stopchecker();
	}
	if (textlimitName) {
		timer = setTimeout(function() {
			checker(obj, count, textlimitName);
		}, 10);
	} else {
		timer = setTimeout(function() {
			checker(obj, count);
		}, 10);
	}
};

stopchecker = function() {
	clearTimeout(timer);
};

String.prototype.bytes = function() {
	var str = this;
	var l = 0;
	for (var i = 0; i < str.length; i++)
		l += (str.charCodeAt(i) > 128) ? 2 : 1;

	return l;
};

String.prototype.cut = function(len, tail) {
	if (tail == null) {
		tail = '...';
	}
	var str = this;
	var l = 0;
	for (var i = 0; i < str.length; i++) {
		l += (str.charCodeAt(i) > 128) ? 2 : 1;
		if (l > len)
			return str.substring(0, i) + tail;
	}
	return str;
};

// contents를 load후 팝업
loadPopup = function(popupDivId, popupUrl, popupParams) {
	if (popupUrl != null) {
		// 해당 영역을 지우고 ajax load를 이용하여 컨텐츠를 로딩한다.
		$(popupDivId).empty();
		$(popupDivId).load(popupUrl, popupParams, function() {
			// 로딩이 완료되면 팝업을 inline으로 띄운다.
			$.magnificPopup.open({
				items : {
					src : popupDivId
				},
				type : "inline",
				enableEscapeKey : false
			});
		});
	}
};

// 팝업 닫기
closePopup = function() {
	$.magnificPopup.close();
};

// 숫자만 입력 가능
fn_numberOnly = function($obj) {
	$obj.keyup(function(event) {
		if (event.which && (event.which <= 47 || event.which >= 58)
				&& event.which != 8) {
			event.preventDefault();
		}
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
	});
};

// ajax 공통 셋팅 ERROR 메시지
$.ajaxSetup({
	error : function(req, status, error) {
		$("#loading").hide();
		console.log("### code : " + req.status + "\n### error : " + error);
		if(req.status == 500) {
			alert("현재 서비스가 원활하지 않습니다.\n잠시후 다시 이용해 주십시오.");
			console.log("500!");
			location.href = "${basePath}/login/a/n/logOut.do?requestKind=1";
		}
		if(req.status == 10001) {
//			alert("세션이 만료 되어 로그아웃 됩니다.");
			window.location.reload();
		}
	}
	, beforeSend : function(req) {
		req.setRequestHeader("IS_AJAX", "isAjax");
	}
});

// 파일 선택 후 input창에 셋팅
$(document).on("change", ".filebox .hidden", function() {
	// 값이 변경되면
	if (window.FileReader) {
		// modern browser
		var filename = $(this)[0].files[0].name;
	} else {
		// old IE
		var filename = $(this).val().split("/").pop().split("\\").pop(); // 파일명만 추출
	}
	// 추출한 파일명 삽입
	$(this).parent("label").siblings(".upload_name").val(filename);
});

// 파일 리셋 버튼

// 파일 x버튼에 onclick에 다음 함수를 걸어준다
// ex) fn_resetFile(this, '파일 태그의 아이디값');
fn_resetFile = function(obj, id) {
	var agent = navigator.userAgent.toLowerCase();
	// browser check
	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1)
			|| (agent.indexOf("msie") != -1)) {
		// IE
		$("#" + id).replaceWith($("#" + id).clone(true));
	} else {
		// Other browser
		$("#" + id).val("");
	}

	// 리셋버튼 기능
	resetData(obj);
};

fn_resetFileType = function(obj) {
	var agent = navigator.userAgent.toLowerCase();
	var fileObj = $(obj).closest("p").find("input[type=file]");
	// browser check
	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1)
			|| (agent.indexOf("msie") != -1)) {
		// IE
		fileObj.replaceWith(fileObj.clone(true));
	} else {
		// Other browser
		fileObj.val("");
	}

	// 리셋버튼 기능
	resetData(obj);
};

// datepicker 설정
function datePicker(id) {
	var dates = $("#" + id)
			.datepicker(
					{
						dateFormat : 'yy-mm-dd',
						showOn : "both",
						buttonText : "<a href='javascript:void(0);' class='ad_calendar_img'>달력열기</a>",
						closeText : '닫기',
						prevText : '이전달',
						nexttext : '다음달',
						currentText : '오늘',
						monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						changeMonth: true,
						changeYear: true,
						beforeShow: function() {
					        setTimeout(function(){
					            $('.ui-datepicker').css('z-index', 99999999999999);
					        }, 0);
						}
					});

	function getStrMonth(Month) {
		Month = Month + "";
		if (Month.length == 1) {
			Month = "0" + Month;
		}
		return Month;
	}

	function getStrDay(Day) {
		Day = Day + "";
		if (Day.length == 1) {
			Day = "0" + Day;
		}
		return Day;
	}
}
// JqGrid search용
function datePickerSearch(id) {
	var dates = $("#" + id)
	.datepicker(
			{
				dateFormat : 'yy-mm-dd',
				//showOn : "both",
				//buttonText : "<a href='javascript:void(0);' class='ad_calendar_img'>달력열기</a>", 달력이미지 주석
				closeText : '닫기',
				prevText : '이전달',
				nexttext : '다음달',
				currentText : '오늘',
				monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월',
				               '7월', '8월', '9월', '10월', '11월', '12월' ],
				monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
				                    '7월', '8월', '9월', '10월', '11월', '12월' ],
				dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
				changeMonth: true,
				changeYear: true,
				beforeShow: function() {
				        setTimeout(function(){
				            $('.ui-datepicker').css('z-index', 99999999999999);
				        }, 0);
					}
			});

	function getStrMonth(Month) {
		Month = Month + "";
		if (Month.length == 1) {
			Month = "0" + Month;
		}
		return Month;
	}

	function getStrDay(Day) {
		Day = Day + "";
		if (Day.length == 1) {
			Day = "0" + Day;
		}
		return Day;
	}
}

// datepicker client 설정
function datePickerClient(id) {
	var dates = $("#" + id)
			.datepicker(
					{
						dateFormat : 'yy-mm-dd',
						showOn : "both",
						buttonText : "<a href='javascript:void(0);' class='pp_calendar_img'>달력열기</a>",
						closeText : '닫기',
						prevText : '이전달',
						nexttext : '다음달',
						currentText : '오늘',
						monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						changeMonth: true,
						changeYear: true,
					});

	function getStrMonth(Month) {
		Month = Month + "";
		if (Month.length == 1) {
			Month = "0" + Month;
		}
		return Month;
	}

	function getStrDay(Day) {
		Day = Day + "";
		if (Day.length == 1) {
			Day = "0" + Day;
		}
		return Day;
	}
}

// datepicker client 설정
function datePickerCns(id) {
	var dates = $("#" + id)
			.datepicker(
					{
						dateFormat : 'yy-mm-dd',
						showOn : "both",
						buttonText : "<a href='javascript:void(0);' class='cs_calendar_img'>달력열기</a>",
						closeText : '닫기',
						prevText : '이전달',
						nexttext : '다음달',
						currentText : '오늘',
						monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						changeMonth: true,
						changeYear: true,
					});

	function getStrMonth(Month) {
		Month = Month + "";
		if (Month.length == 1) {
			Month = "0" + Month;
		}
		return Month;
	}

	function getStrDay(Day) {
		Day = Day + "";
		if (Day.length == 1) {
			Day = "0" + Day;
		}
		return Day;
	}
}

// datePicker 특허전용
function datePickerPat(id) {
	var dates = $("#" + id)
			.datepicker(
					{
						dateFormat : 'yymmdd',
						showOn : "both",
						buttonText : "<a href='javascript:void(0);' class='ad_calendar_img'>달력열기</a>",
						closeText : '닫기',
						prevText : '이전달',
						nexttext : '다음달',
						currentText : '오늘',
						monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						changeMonth: true,
						changeYear: true,
					});

	function getStrMonth(Month) {
		Month = Month + "";
		if (Month.length == 1) {
			Month = "0" + Month;
		}
		return Month;
	}

	function getStrDay(Day) {
		Day = Day + "";
		if (Day.length == 1) {
			Day = "0" + Day;
		}
		return Day;
	}
}

// 체크박스 체크
$.fn.emptyCheckBox = function() {

	if (!$(this).is(":checked")) {
		alert($(this).attr("title") + " 값을 체크해 주세요.");
		//상단으로 올리기
		$("html").scrollTop(0);
		$(this).focus();
		return false;
	}
	return true;
};

//체크박스 체크 alert 없이
$.fn.emptyCheckBoxNoAlert = function() {

	if (!$(this).is(":checked")) {
		$("html").scrollTop(0);
		$(this).focus();
		return false;
	}
	return true;
};

// 바이트 체크
$.fn.byteCheck = function(maxByte) {
	var codeByte = 0;
	var objLength = $(this).val().length;
	var stsBool = true;

	for (var i = 0; i < objLength; i++) {
		var oneChar = escape($(this).val().charAt(i));
		if (oneChar.length == 1) {
			codeByte++;
		} else if (oneChar.indexOf("%u") != -1) {
			codeByte += 3;
		} else if (oneChar.indexOf("%") != -1) {
			codeByte++;
		}

		if (Number(codeByte) > Number(maxByte)) {
			alert($(this).attr("title") + "의 입력 가능한 바이트수를 초과하였습니다.\n(byte제한: "
					+ maxByte + " byte)");
			// 글자수 삭제
			var objText = $(this).val().substring(0, i);
			$(this).val(objText);
			$(this).focus();
			stsBool = false;
			break;
		}
	}

	return stsBool;
};

// 숫자만 입력 클래스로
$(document).on("keyup focusout", ".numberOnly", function(e) {
	this.value = this.value.replace(/[^0-9]/g, "");
});

// 첨부파일 다운로드
fn_fileDownload = function(basePath, fileId, fileNo) {
	if(fileId != null){
		location.href = basePath + "/cmm/fms/fileDownload.do?fileId=" + fileId+ "&fileNo=" + fileNo;
	}
};

//첨부파일 다운로드 파일명을 커스텀
fn_fileDownloadByFileNameCustom = function(basePath, fileId, fileNo, customFileName) {
	if(fileId != null){
		location.href = basePath + "/cmm/fms/fileDownload.do?fileId=" + fileId+ "&fileNo=" + fileNo + "&customFileName=" + encodeURI(encodeURIComponent(customFileName)) ;
	}
};


// 입력 문자 바이트 체크
// obj: 자바스크립트 object
// maxByte: 체크할 byte수 (DB Byte)
function chkByte(obj, maxByte) {
	var str = obj.value;
	var str_len = str.length;

	var rbyte = 0;
	var rlen = 0;
	var one_char = "";
	var str2 = "";

	for (var i = 0; i < str_len; i++) {
		one_char = str.charAt(i);
		if (escape(one_char).length > 4) {
			rbyte += 3; // 한글3Byte
		} else if (str.charCodeAt(i) == 10) {
			rbyte += 2; // 엔터는 2byte
		} else {
			rbyte++; // 영문 등 나머지 1Byte
		}

		if (rbyte <= maxByte) {
			rlen = i + 1; // return할 문자열 갯수
		}
	}

	if (rbyte > maxByte) {
		var max = Math.floor(maxByte / 3);
		alert("한글 " + max + "자 / 영문 " + maxByte + "자를 초과 입력할 수 없습니다.");
		str2 = str.substr(0, rlen - 1); // 문자열 자르기
		obj.value = str2;
		chkByte(obj, maxByte);
	}
}

//입력 문자 바이트 체크 한글 2byte체크 SMS 발송용
//obj: 자바스크립트 object
//maxByte: 체크할 byte수 (DB Byte)
function chkTwoByte(obj, maxByte) {
	var str = obj.value;
	var str_len = str.length;

	var rbyte = 0;
	var rlen = 0;
	var one_char = "";
	var str2 = "";

	for (var i = 0; i < str_len; i++) {
		one_char = str.charAt(i);
		if (escape(one_char).length > 4) {
			rbyte += 2; // 한글3Byte
		} else if (str.charCodeAt(i) == 10) {
			rbyte += 2; // 엔터는 2byte
		} else {
			rbyte++; // 영문 등 나머지 1Byte
		}

		if (rbyte <= maxByte) {
			rlen = i + 1; // return할 문자열 갯수
		}
	}

	if (rbyte > maxByte) {
		var max = Math.floor(maxByte / 2);
		alert("한글 " + max + "자 / 영문 " + maxByte + "자를 초과 입력할 수 없습니다.");
		str2 = str.substr(0, rlen - 1); // 문자열 자르기
		obj.value = str2;
		chkTwoByte(obj, maxByte);
	}
}


//콤마 찍기
function comma(str){
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 콤마 풀기
function uncomma(str){
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

//input 값 입력시 콤마 찍기 키업 이벤트로
function commaKeyUp(obj){
	obj.value = comma(uncomma(obj.value));
}

//가로스크롤
$(document).on("mousewheel", ".rowScrollEvent", function(e) {
	e.preventDefault();
	e.stopImmediatePropagation();
	var wheelDelta = e.originalEvent.wheelDelta;
	if(wheelDelta > 0){
		//console.log("up");
		$(this).scrollLeft(-wheelDelta*5 + $(this).scrollLeft());
	}else{
		//console.log("down");
		$(this).scrollLeft(-wheelDelta*5 + $(this).scrollLeft());
	}
});

//input[type=file] 초기화
fn_clearFileBox = function(id){
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		// ie 일때 input[type=file] init.
		$("#"+id).replaceWith( $("#"+id).clone(true) );
		$("#"+id+"Name").val("");
	} else {
		// other browser 일때 input[type=file] init.
		$("#"+id).val("");
		$("#"+id+"Name").val("");
	}
}

fn_check_reg_exp_tel = function(formId,tagId){
	var telChk = /^\d{2,3}-\d{3,4}-\d{4}$/;
	var flag = true;
	if(!telChk.test($('#'+formId+" "+'#'+tagId).val())){
		alert("전화번호 형식이 올바르지 않습니다.\n - 를 포함한 숫자만 입력하세요.");
		$('#'+formId+" "+'#'+tagId).focus();
		flag = false;
	}
	return flag;
};

fn_check_reg_exp_cel = function(formId, tagId){
	var celChk = /^\d{3}-\d{3,4}-\d{4}$/;
	var flag = true;
	if(!celChk.test($('#'+formId+" "+'#'+tagId).val())){
		alert("휴대전화 형식이 올바르지 않습니다.\n - 를 포함한 숫자만 입력하세요.");
		$('#'+formId+" "+'#'+tagId).focus();
		flag = false;
	}
	return flag;
};

fn_check_reg_exp_email = function(formId, tagId){
	var emailChk = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	var flag = true;
	if(!emailChk.test($('#'+formId+" "+'#'+tagId).val())){
		alert("이메일 형식이 올바르지 않습니다.");
		$('#'+formId+" "+'#'+tagId).focus();
		flag = false;
	}
	return flag;
};

sessionInvalidate = function() {
	$.ajax({
		url : sessionStorage.getItem("contextRootPath") + "/login/a/n/sessionInvalidateForDevAjax.do"
		, success : function() {
			console.log("session invalidate success!");
		}
	});
};

//휴대폰 번호 자동으로 하이픈 넣기
function fnReplaceHpNumber(hPNumber) {
	var orHpNum = "";
	var regNumber = /^[0-9]*$/;
	var replaceHpNumber = "";
	orHpNum = hPNumber.replace(/\-/g,'');

	if(!regNumber.test(orHpNum)) {
	    console.log("휴대폰 양식이 올바르지 않습니다. 확인 부탁 드립니다.");
	    return;
	}

	replaceHpNumber = orHpNum.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3")
	return replaceHpNumber;
}

/**
 * Null 체크
 * @param el
 * @returns
 */
function isEmpty(el) {
	return (el == null || el == "" || typeof el == "undefined") ? true : false;
}

/**
* 검색폼 초기화
* @param _fromId = 폼아이디
*/
function fnFormReset(_fromId){
	$("#"+_fromId)[0].reset();
}

//종료일 시작일 체크
function dateOverCk(strDate , endDate , alertText) {
	if(alertText == null || alertText == ''){
		alertText = '';
	}
	if(endDate < strDate && (strDate != '' && endDate != '')){
		alert(alertText+" 종료일이 시작일보다 클 수 없습니다.");
		return false;
	} else {
		return true;
	}
}


function fnOnChangeFileNm(obj, delYn, maxCnt, fileType, staffType) {
	var objNm = obj.name.substring(0, obj.name.length -1);

	if (obj.value != "") {
		var fileObjs = document.getElementsByName(objNm);
		var pTagRowCnt = document.getElementsByName(objNm+'_link_file_del');
		if(parseInt(maxCnt) < (parseInt(pTagRowCnt.length)+parseInt(1))){
			alert("파일첨부는 " +maxCnt+ "개 까지 가능 합니다.");
			obj.value = "" ;
			return false;
		}
//		if(!fnChkUploadFileType(obj,fileType)){
//			return false;
//		}

		var tagIdx = $('#'+objNm+'_idx').val();
		++tagIdx;
		var addFileInputHtml ="";
		var fileNm = "";
			fileNm =  obj.value.substring(obj.value.lastIndexOf("\\") + 1,  obj.value.length);
		var appendFileNameHtml = '';
		var delTagIdx = (tagIdx-1);

		//학생 파일이면
		if (staffType == "CLIENT") {
			addFileInputHtml += '<input type="file" name="'+objNm+tagIdx+'" id="'+objNm+'_'+tagIdx+'" class="hidden" onchange="fnOnChangeFileNm(this,'+"'"+delYn+"'"+",'"+maxCnt+"'"+",'"+fileType+"','"+staffType+"'"+')">';
			$('#'+objNm+'_label').attr('for', objNm+'_'+tagIdx);
			$('#'+objNm).parent().append(addFileInputHtml);

			appendFileNameHtml += '<p class="pp_file_linkbox" name="'+objNm+'_link_file_del" id="'+objNm+'_'+delTagIdx+'_link_file_delDiv">';

			appendFileNameHtml += '<a class="pp_file_link" href="javascript:void(0);" title="'+fileNm+'">'+fileNm+'</a>';

			if(delYn == 'Y'){
				appendFileNameHtml += '<a href="javascript:void(0);" title="닫기" id="'+objNm+'_'+delTagIdx+'_del" class="btn_reset" onclick="fnDelAddFileData(this.id, '+"'-1', '', '','"+staffType+"', ''"+')">X</a>';
			}
			appendFileNameHtml += '</p>';

			$('#'+objNm+'_idx').parent("div").parent("div").append(appendFileNameHtml);
//			$('#'+obj.name+'_label').parents("li").children("div #applyFileDiv").append(appendFileNameHtml);
			$('#'+objNm+'_idx').val(tagIdx);

		//관리자 파일이면
		}else {
//			addFileInputHtml += '<input type="file" name="'+obj.name+'" id="'+obj.name+'_'+tagIdx+'" class="hidden" onchange="fnOnChangeFileNm(this,'+"'"+delYn+"'"+",'"+maxCnt+"'"+",'"+fileType+"','"+staffType+"'"+')">';
//			$('#'+obj.name+'_label').attr('for', obj.name+'_'+tagIdx);
//			$('#'+obj.id).parents("p").append(addFileInputHtml);
//
//			appendFileNameHtml += '<p class="link_file_del file_box" name="'+obj.name+'_link_file_del">';
//			appendFileNameHtml += '<a href="javascript:void(0);" class="link_file" title="'+fileNm+'">'+fileNm+'</a>';
//
//			if(delYn == 'Y'){
//				if(obj.id == obj.name){
//					appendFileNameHtml += '<button type="button" title="삭제" id="'+obj.name+'_del" class="link_del" onclick="fnDelAddFileData(this.id,'+"'','"+staffType+"'"+')"><i class="fa fa-close"></i></button>';
//				}else{
//					appendFileNameHtml += '<button type="button" title="삭제" id="'+obj.name+'_'+delTagIdx+'_del" class="link_del" onclick="fnDelAddFileData(this.id,'+"'','"+staffType+"'"+')"><i class="fa fa-close"></i></button>';
//				}
//			}
//			appendFileNameHtml += '</p>';
//			$('#'+obj.name+'_label').parents("p").parents("td").append(appendFileNameHtml);
//			$('#'+obj.name+'_idx').val(tagIdx);
		}

	}

}

/**
 * Null Object 체크
 * @param el
 * @returns
 */
function isNullObject(el) {
	return (el == null || el == "undefined" || typeof el == "undefined") ? true : false;
}

/**
 * 공통코드 조회
 * @param comnCdPcodeId = 조회할 코드
 * @param viewId        = 보여질 셀렉트 박스 ID
 * @param selValue      = 선택될 코드값
 * @param allValue      = 기본 노출값
 * @param useAsync      = ture / false
 * @returns
 */
function fnSetComnCdCombo(comnCdPcodeId, viewId, selValue, allValue, useAsync, basePathClient) {
	var basePath = sessionStorage.getItem("contextRootPath");
	if(typeof basePath == "undefined" && basePath(allValue) || basePath == null || basePath == 'null') {
		basePath = basePathClient;
	}
	var _url = basePath+"/cmm/fms/getCodeListAjax.do"; // 만들어야 함
	var async = isNullObject(useAsync) ? true : useAsync;
	var targetView = $("#"+viewId);
	if(comnCdPcodeId == ""){return false;}
	if(typeof targetView == "undefined") {return;}

	if(typeof allValue != "undefined" && !isEmpty(allValue)) {
		targetView.children().remove().end().append('<option value="">'+allValue+'</option>') ;
	}

	jQuery.ajax({
		async: async,
		type: "POST",
		url: _url,
		dataType: "json",
		data : {
			comnCdPcodeId : comnCdPcodeId
		},
		success: function(r) {
			if (r.beanlist.length > 0) {
				for(var idx=0; idx<r.beanlist.length; idx++) {
					var obj = r.beanlist[idx];
					if(typeof selValue != "undefined" && selValue == obj.codeId) {
						targetView.append("<option value='"+obj.codeId+"' selected>"+obj.codeName+"</option>");
					} else {
						targetView.append("<option value='"+obj.codeId+"'>"+obj.codeName+"</option>");
					}
				}
			} else {
				alert("공통코드 조회중 오류가 발생하였습니다.("+comnCdPcodeId+")");
			}
		},
		error: function(r) {
			console.log("공통코드 조회중 오류가 발생하였습니다.("+comnCdPcodeId+")");
			//alert("공통코드 조회중 오류가 발생하였습니다.("+comnCdPcodeId+")");
		}
	});

}

function fnChkUploadFileType(obj,fileType) {
	if(fileType == "img"){
		if (!/(\.gif|\.jpg|\.jpeg|\.png)$/i.test(obj.value)){
			alert("첨부 가능 파일 포멧이 아닙니다. \n"
				+"이미지 파일 확장자 : gif, jpg, png \n"
				+"만 업로드 가능합니다."
				);
			obj.value = "" ;
			return false ;
		}
	}else if(fileType =="office"){
		if (!/(\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.pdf)$/i.test(obj.value)){
			alert("첨부 가능 파일 포멧이 아닙니다. \n"
					+"오피스문서 파일 확장자 : doc, docx, xls, xlsx, ppt, pptx, pdf \n"
					+"만 업로드 가능합니다."
					);
				obj.value = "" ;
				return false ;
			}
	}else if(fileType =="video"){
		if (!/(\.mp4)$/i.test(obj.value) ){
			alert("첨부 가능 파일 포멧이 아닙니다. \n"
				+"동영상 파일 확장자 : mp4 \n"
				+"만 업로드 가능합니다."
				);
				obj.value = "" ;
				return false ;
		}
	}else if(fileType =="zip"){
		if (!/(\.zip)$/i.test(obj.value)){
			alert("첨부 가능 파일 포멧이 아닙니다. \n"
				+"실행파일 파일 확장자 : zip (실행파일은 압축해서 올려주세요) \n"
				+"만 업로드 가능합니다."
				);
			obj.value = "" ;
			return false ;
		}
	}
return true;
}

function fnDelAddFileData(objId, keyId, fileId, fileNo, staffType, basePath) {
	if(keyId == '-1') {
		if(staffType == 'CLIENT'){
			var delObjId = objId.replace('_del','');
			$("#"+delObjId+"_link_file_delDiv").remove();
			$("#"+delObjId).remove();
		}
		// 관리자 수정필요
		else{
			var delObjId = objId.replace('_del','');
			$("#"+objId).parents("p").remove();
			$("#"+delObjId).remove();
		}
	}
	else {
		console.log("### basePath : " + basePath);
		var _url = basePath+"/cmm/fms/removeStudyDataFile.do";
		jQuery.ajax({
			type: "POST",
			url: _url,
			dataType: "json",
			data : {
				fileId : fileId
				, fileNo : fileNo
				, keyId : keyId
			},
			success: function(r) {
				console.log("### rtnCode : " + r.rtnCode);
				if (r.rtnCode == '0') {
					if(staffType == 'CLIENT'){
						var delObjId = objId.replace('_del','');
						$("#"+delObjId+"_link_file_delDiv").remove();
						$("#"+delObjId).remove();
					}
					// 관리자 수정필요
					else{
						var delObjId = objId.replace('_del','');
						$("#"+objId).parents("p").remove();
						$("#"+delObjId).remove();
					}
				} else {
				 alert("첨부파일 삭제에 실패 하였습니다.");
				 return false;
				}
			},error: function(r) {
			}
		});
	}
}

/**
 * 레포팅 툴 Html 그래프 만들기 함수 div영역 넣기_학습스타일
 *
 */
function getStudyHtmlUBFStr(_divStr) {

var _cssHtml = "";

	_cssHtml += '<!DOCTYPE html>';
	_cssHtml += '<html lang=\'ko\'>';
	_cssHtml += '<head>';
	_cssHtml += '	<title>포항공과대학교 포스테키안</title>';
	_cssHtml += '	<link href=\'https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap\' rel=\'stylesheet\'>';
	_cssHtml += '	<style>';
	_cssHtml += '		* {';
	_cssHtml += '			margin: 0; padding: 0;';
	_cssHtml += '		}';
	_cssHtml += '		html,body {';
	_cssHtml += '			width: 100%; min-width: 320px; height: 100%;';
	// _cssHtml += '			width: 794px; min-width: 320px; height: 100%;';
	_cssHtml += '			background: transparent;';
	_cssHtml += '			-ms-text-size-adjust: 100%;';
	_cssHtml += '			-webkit-text-size-adjust: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		html{';
	_cssHtml += '			font-family: \'Noto Sans KR\', \'맑은고딕\',\'돋움\',\'Apple SD Gothic Neo\', sans-serif;';
	_cssHtml += '			font-size: 14px; line-height: 1em; color: #393636;';
	_cssHtml += '		}';
	_cssHtml += '		body {';
	_cssHtml += '			width: 100%;';
	_cssHtml += '			background: #ffffff;';
	_cssHtml += '			-webkit-font-smoothing: antialiased;';
	_cssHtml += '			-webkit-text-size-adjust: none;';
	_cssHtml += '			word-break: break-all;';
	_cssHtml += '		}';
	_cssHtml += '		table {';
	_cssHtml += '			border-spacing: 0;';
	_cssHtml += '			border-collapse: collapse;';
	_cssHtml += '			border: 0;';
	_cssHtml += '		}';
	_cssHtml += '		th,td {';
	_cssHtml += '			padding: 0;';
	_cssHtml += '			vertical-align: middle;';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		legend,caption {';
	_cssHtml += '			display: none;';
	_cssHtml += '		}';
	_cssHtml += '		.grid_content {';
	_cssHtml += '			overflow: hidden;';
	// _cssHtml += '			width: 1200px;';
	_cssHtml += '			width: 794px;';
	// _cssHtml += '			width: 100%;';
	_cssHtml += '			margin: 0 auto;';
	_cssHtml += '		}';
	_cssHtml += '		.mg_t20 {margin-top: 20px !important;}';
	_cssHtml += '		.pd_0 {padding: 0 !important;}';
	_cssHtml += '		.wd_p0{width:0% !important;}';
	_cssHtml += '		.wd_p1{width:1% !important;}';
	_cssHtml += '		.wd_p2{width:2% !important;}';
	_cssHtml += '		.wd_p3{width:3% !important;}';
	_cssHtml += '		.wd_p4{width:4% !important;}';
	_cssHtml += '		.wd_p5{width:5% !important;}';
	_cssHtml += '		.wd_p6{width:6% !important;}';
	_cssHtml += '		.wd_p7{width:7% !important;}';
	_cssHtml += '		.wd_p8{width:8% !important;}';
	_cssHtml += '		.wd_p9{width:9% !important;}';
	_cssHtml += '		.wd_p10{width:10% !important;}';
	_cssHtml += '		.wd_p11{width:11% !important;}';
	_cssHtml += '		.wd_p12{width:12% !important;}';
	_cssHtml += '		.wd_p13{width:13% !important;}';
	_cssHtml += '		.wd_p14{width:14% !important;}';
	_cssHtml += '		.wd_p15{width:15% !important;}';
	_cssHtml += '		.wd_p16{width:16% !important;}';
	_cssHtml += '		.wd_p17{width:17% !important;}';
	_cssHtml += '		.wd_p18{width:18% !important;}';
	_cssHtml += '		.wd_p19{width:19% !important;}';
	_cssHtml += '		.wd_p20{width:20% !important;}';
	_cssHtml += '		.wd_p21{width:21% !important;}';
	_cssHtml += '		.wd_p22{width:22% !important;}';
	_cssHtml += '		.wd_p23{width:23% !important;}';
	_cssHtml += '		.wd_p24{width:24% !important;}';
	_cssHtml += '		.wd_p25{width:25% !important;}';
	_cssHtml += '		.wd_p26{width:26% !important;}';
	_cssHtml += '		.wd_p27{width:27% !important;}';
	_cssHtml += '		.wd_p28{width:28% !important;}';
	_cssHtml += '		.wd_p29{width:29% !important;}';
	_cssHtml += '		.wd_p30{width:30% !important;}';
	_cssHtml += '		.wd_p31{width:31% !important;}';
	_cssHtml += '		.wd_p32{width:32% !important;}';
	_cssHtml += '		.wd_p33{width:33% !important;}';
	_cssHtml += '		.wd_p34{width:34% !important;}';
	_cssHtml += '		.wd_p35{width:35% !important;}';
	_cssHtml += '		.wd_p36{width:36% !important;}';
	_cssHtml += '		.wd_p37{width:37% !important;}';
	_cssHtml += '		.wd_p38{width:38% !important;}';
	_cssHtml += '		.wd_p39{width:39% !important;}';
	_cssHtml += '		.wd_p40{width:40% !important;}';
	_cssHtml += '		.wd_p41{width:41% !important;}';
	_cssHtml += '		.wd_p42{width:42% !important;}';
	_cssHtml += '		.wd_p43{width:43% !important;}';
	_cssHtml += '		.wd_p44{width:44% !important;}';
	_cssHtml += '		.wd_p45{width:45% !important;}';
	_cssHtml += '		.wd_p46{width:46% !important;}';
	_cssHtml += '		.wd_p47{width:47% !important;}';
	_cssHtml += '		.wd_p48{width:48% !important;}';
	_cssHtml += '		.wd_p49{width:49% !important;}';
	_cssHtml += '		.wd_p50{width:50% !important;}';
	_cssHtml += '		.wd_p51{width:51% !important;}';
	_cssHtml += '		.wd_p52{width:52% !important;}';
	_cssHtml += '		.wd_p53{width:53% !important;}';
	_cssHtml += '		.wd_p54{width:54% !important;}';
	_cssHtml += '		.wd_p55{width:55% !important;}';
	_cssHtml += '		.wd_p56{width:56% !important;}';
	_cssHtml += '		.wd_p57{width:57% !important;}';
	_cssHtml += '		.wd_p58{width:58% !important;}';
	_cssHtml += '		.wd_p59{width:59% !important;}';
	_cssHtml += '		.wd_p60{width:60% !important;}';
	_cssHtml += '		.wd_p61{width:61% !important;}';
	_cssHtml += '		.wd_p62{width:62% !important;}';
	_cssHtml += '		.wd_p63{width:63% !important;}';
	_cssHtml += '		.wd_p64{width:64% !important;}';
	_cssHtml += '		.wd_p65{width:65% !important;}';
	_cssHtml += '		.wd_p66{width:66% !important;}';
	_cssHtml += '		.wd_p67{width:67% !important;}';
	_cssHtml += '		.wd_p68{width:68% !important;}';
	_cssHtml += '		.wd_p69{width:69% !important;}';
	_cssHtml += '		.wd_p70{width:70% !important;}';
	_cssHtml += '		.wd_p71{width:71% !important;}';
	_cssHtml += '		.wd_p72{width:72% !important;}';
	_cssHtml += '		.wd_p73{width:73% !important;}';
	_cssHtml += '		.wd_p74{width:74% !important;}';
	_cssHtml += '		.wd_p75{width:75% !important;}';
	_cssHtml += '		.wd_p76{width:76% !important;}';
	_cssHtml += '		.wd_p77{width:77% !important;}';
	_cssHtml += '		.wd_p78{width:78% !important;}';
	_cssHtml += '		.wd_p79{width:79% !important;}';
	_cssHtml += '		.wd_p80{width:80% !important;}';
	_cssHtml += '		.wd_p81{width:81% !important;}';
	_cssHtml += '		.wd_p82{width:82% !important;}';
	_cssHtml += '		.wd_p83{width:83% !important;}';
	_cssHtml += '		.wd_p84{width:84% !important;}';
	_cssHtml += '		.wd_p85{width:85% !important;}';
	_cssHtml += '		.wd_p86{width:86% !important;}';
	_cssHtml += '		.wd_p87{width:87% !important;}';
	_cssHtml += '		.wd_p88{width:88% !important;}';
	_cssHtml += '		.wd_p89{width:89% !important;}';
	_cssHtml += '		.wd_p90{width:90% !important;}';
	_cssHtml += '		.wd_p91{width:91% !important;}';
	_cssHtml += '		.wd_p92{width:92% !important;}';
	_cssHtml += '		.wd_p93{width:93% !important;}';
	_cssHtml += '		.wd_p94{width:94% !important;}';
	_cssHtml += '		.wd_p95{width:95% !important;}';
	_cssHtml += '		.wd_p96{width:96% !important;}';
	_cssHtml += '		.wd_p97{width:97% !important;}';
	_cssHtml += '		.wd_p98{width:98% !important;}';
	_cssHtml += '		.wd_p99{width:99% !important;}';
	_cssHtml += '		.wd_p100{width:100% !important;}';
	_cssHtml += '		.tbl table{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '			background: #fff;';
	_cssHtml += '			font-size: 11px; letter-spacing: 0.5px;';
	_cssHtml += '			border-top: 1px solid #7f7f7f;';
	_cssHtml += '		}';
	_cssHtml += '		.tbl table th{';
	_cssHtml += '			padding: 14px 20px;';
	_cssHtml += '			line-height: 1.5em; word-break: keep-all;';
	_cssHtml += '			font-weight: 500;';
	_cssHtml += '			background: #d9d9d9;';
	_cssHtml += '			border-bottom: 1px solid #7f7f7f;';
	_cssHtml += '			border-left: 1px solid #7f7f7f;';
	_cssHtml += '			border-right: 1px solid #7f7f7f;';
	_cssHtml += '			cursor: default;';
	_cssHtml += '		}';
//	_cssHtml += '		.tbl table th:first-child{';
//	_cssHtml += '			border-left: none;';
//	_cssHtml += '		}';
//	_cssHtml += '		.tbl table thead th:last-child{';
//	_cssHtml += '			border-right: none;';
//	_cssHtml += '		}';
	_cssHtml += '		.tbl table td{';
	_cssHtml += '			padding: 12px 20px; text-align: center; line-height: 1.4em;';
	_cssHtml += '			border-bottom: 1px solid #7f7f7f;';
	_cssHtml += '			border-left: 1px solid #7f7f7f;';
	_cssHtml += '			border-right: 1px solid #7f7f7f;';
	_cssHtml += '			cursor: default;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl table th{';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl table td{';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl table th{';
	_cssHtml += '			padding: 14px 10px;';
	_cssHtml += '			text-align: center;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl table thead th, .pp_rowcol_tbl table tbody th{';
	_cssHtml += '			background: #d9d9d9;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_tit_left {';
	_cssHtml += '			font-weight: 600; color: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_tit_right {';
	_cssHtml += '			font-weight: 600; color: #5fcae5;';
	_cssHtml += '			border-left: 0;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_left {';
	_cssHtml += '			position: relative;';
	_cssHtml += '			border-left: 0;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_left p {';
	_cssHtml += '			position: absolute; top: 12px; right: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_right {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_right p {';
	_cssHtml += '			position: absolute; top: 12px; left: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #5fcae5;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_tit {';
	_cssHtml += '			font-weight: 600; color: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_bar {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_bar p {';
	_cssHtml += '			position: absolute; top: 10px; left: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph2 .pp_graph_tit {';
	_cssHtml += '			color: #38b9da;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph2 .pp_graph_bar p {';
	_cssHtml += '			background: #38b9da;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph3 .pp_graph_tit {';
	_cssHtml += '			color: #a98146;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph3 .pp_graph_bar p {';
	_cssHtml += '			background: #a98146;';
	_cssHtml += '		}';
	_cssHtml += '	</style>';
	_cssHtml += '</head>';
	_cssHtml += '<body>';
	_cssHtml += '	<section class=\'grid_content mg_t20\'>';

	_cssHtml += _divStr;

	_cssHtml += '	</section>';
	_cssHtml += '</body>';
	_cssHtml += '</html>';


	return _cssHtml;

}

/**
 * 레포팅 툴 Html 그래프 만들기 함수 div영역 넣기_자기주도
 *
 */
function getLeadHtmlUBFStr(_divStr) {

	var _cssHtml = "";

	_cssHtml += '<!DOCTYPE html>';
	_cssHtml += '<html lang=\'ko\'>';
	_cssHtml += '<head>';
	_cssHtml += '	<title>포항공과대학교 포스테키안</title>';
	_cssHtml += '	<link href=\'https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap\' rel=\'stylesheet\'>';
	_cssHtml += '	<style>';
	_cssHtml += '		* {';
	_cssHtml += '			margin: 0; padding: 0;';
	_cssHtml += '		}';
	_cssHtml += '		html,body {';
	_cssHtml += '			width: 810px; min-width: 320px; height: 100%;';
	// _cssHtml += '			width: 794px; min-width: 320px; height: 100%;';
	_cssHtml += '			background: transparent;';
	_cssHtml += '			-ms-text-size-adjust: 100%;';
	_cssHtml += '			-webkit-text-size-adjust: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		html{';
	_cssHtml += '			font-family: \'Noto Sans KR\', \'맑은고딕\',\'돋움\',\'Apple SD Gothic Neo\', sans-serif;';
	_cssHtml += '			font-size: 14px; line-height: 1em; color: #393636;';
	_cssHtml += '		}';
	_cssHtml += '		body {';
	_cssHtml += '			width: 100%';
	_cssHtml += '			background: #ffffff;';
	_cssHtml += '			-webkit-font-smoothing: antialiased;';
	_cssHtml += '			-webkit-text-size-adjust: none;';
	_cssHtml += '			word-break: break-all;';
	_cssHtml += '		}';
	_cssHtml += '		table {';
	_cssHtml += '			border-spacing: 0;';
	_cssHtml += '			border-collapse: collapse;';
	_cssHtml += '			border: 0;';
	_cssHtml += '		}';
	_cssHtml += '		th,td {';
	_cssHtml += '			padding: 0;';
	_cssHtml += '			vertical-align: middle;';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		legend,caption {';
	_cssHtml += '			display: none;';
	_cssHtml += '		}';
	_cssHtml += '		.grid_content {';
	_cssHtml += '			overflow: hidden;';
	// _cssHtml += '			width: 1200px;';
	_cssHtml += '			width: 100%;';
	// _cssHtml += '			width: 100%;';
	_cssHtml += '			margin: 0 auto;';
	_cssHtml += '		}';
	_cssHtml += '		.mg_t20 {margin-top: 20px !important;}';
	_cssHtml += '		.pd_0 {padding: 0 !important;}';
	_cssHtml += '		.wd_p0{width:0% !important;}';
	_cssHtml += '		.wd_p1{width:1% !important;}';
	_cssHtml += '		.wd_p2{width:2% !important;}';
	_cssHtml += '		.wd_p3{width:3% !important;}';
	_cssHtml += '		.wd_p4{width:4% !important;}';
	_cssHtml += '		.wd_p5{width:5% !important;}';
	_cssHtml += '		.wd_p6{width:6% !important;}';
	_cssHtml += '		.wd_p7{width:7% !important;}';
	_cssHtml += '		.wd_p8{width:8% !important;}';
	_cssHtml += '		.wd_p9{width:9% !important;}';
	_cssHtml += '		.wd_p10{width:10% !important;}';
	_cssHtml += '		.wd_p11{width:11% !important;}';
	_cssHtml += '		.wd_p12{width:12% !important;}';
	_cssHtml += '		.wd_p13{width:13% !important;}';
	_cssHtml += '		.wd_p14{width:14% !important;}';
	_cssHtml += '		.wd_p15{width:15% !important;}';
	_cssHtml += '		.wd_p16{width:16% !important;}';
	_cssHtml += '		.wd_p17{width:17% !important;}';
	_cssHtml += '		.wd_p18{width:18% !important;}';
	_cssHtml += '		.wd_p19{width:19% !important;}';
	_cssHtml += '		.wd_p20{width:20% !important;}';
	_cssHtml += '		.wd_p21{width:21% !important;}';
	_cssHtml += '		.wd_p22{width:22% !important;}';
	_cssHtml += '		.wd_p23{width:23% !important;}';
	_cssHtml += '		.wd_p24{width:24% !important;}';
	_cssHtml += '		.wd_p25{width:25% !important;}';
	_cssHtml += '		.wd_p26{width:26% !important;}';
	_cssHtml += '		.wd_p27{width:27% !important;}';
	_cssHtml += '		.wd_p28{width:28% !important;}';
	_cssHtml += '		.wd_p29{width:29% !important;}';
	_cssHtml += '		.wd_p30{width:30% !important;}';
	_cssHtml += '		.wd_p31{width:31% !important;}';
	_cssHtml += '		.wd_p32{width:32% !important;}';
	_cssHtml += '		.wd_p33{width:33% !important;}';
	_cssHtml += '		.wd_p34{width:34% !important;}';
	_cssHtml += '		.wd_p35{width:35% !important;}';
	_cssHtml += '		.wd_p36{width:36% !important;}';
	_cssHtml += '		.wd_p37{width:37% !important;}';
	_cssHtml += '		.wd_p38{width:38% !important;}';
	_cssHtml += '		.wd_p39{width:39% !important;}';
	_cssHtml += '		.wd_p40{width:40% !important;}';
	_cssHtml += '		.wd_p41{width:41% !important;}';
	_cssHtml += '		.wd_p42{width:42% !important;}';
	_cssHtml += '		.wd_p43{width:43% !important;}';
	_cssHtml += '		.wd_p44{width:44% !important;}';
	_cssHtml += '		.wd_p45{width:45% !important;}';
	_cssHtml += '		.wd_p46{width:46% !important;}';
	_cssHtml += '		.wd_p47{width:47% !important;}';
	_cssHtml += '		.wd_p48{width:48% !important;}';
	_cssHtml += '		.wd_p49{width:49% !important;}';
	_cssHtml += '		.wd_p50{width:50% !important;}';
	_cssHtml += '		.wd_p51{width:51% !important;}';
	_cssHtml += '		.wd_p52{width:52% !important;}';
	_cssHtml += '		.wd_p53{width:53% !important;}';
	_cssHtml += '		.wd_p54{width:54% !important;}';
	_cssHtml += '		.wd_p55{width:55% !important;}';
	_cssHtml += '		.wd_p56{width:56% !important;}';
	_cssHtml += '		.wd_p57{width:57% !important;}';
	_cssHtml += '		.wd_p58{width:58% !important;}';
	_cssHtml += '		.wd_p59{width:59% !important;}';
	_cssHtml += '		.wd_p60{width:60% !important;}';
	_cssHtml += '		.wd_p61{width:61% !important;}';
	_cssHtml += '		.wd_p62{width:62% !important;}';
	_cssHtml += '		.wd_p63{width:63% !important;}';
	_cssHtml += '		.wd_p64{width:64% !important;}';
	_cssHtml += '		.wd_p65{width:65% !important;}';
	_cssHtml += '		.wd_p66{width:66% !important;}';
	_cssHtml += '		.wd_p67{width:67% !important;}';
	_cssHtml += '		.wd_p68{width:68% !important;}';
	_cssHtml += '		.wd_p69{width:69% !important;}';
	_cssHtml += '		.wd_p70{width:70% !important;}';
	_cssHtml += '		.wd_p71{width:71% !important;}';
	_cssHtml += '		.wd_p72{width:72% !important;}';
	_cssHtml += '		.wd_p73{width:73% !important;}';
	_cssHtml += '		.wd_p74{width:74% !important;}';
	_cssHtml += '		.wd_p75{width:75% !important;}';
	_cssHtml += '		.wd_p76{width:76% !important;}';
	_cssHtml += '		.wd_p77{width:77% !important;}';
	_cssHtml += '		.wd_p78{width:78% !important;}';
	_cssHtml += '		.wd_p79{width:79% !important;}';
	_cssHtml += '		.wd_p80{width:80% !important;}';
	_cssHtml += '		.wd_p81{width:81% !important;}';
	_cssHtml += '		.wd_p82{width:82% !important;}';
	_cssHtml += '		.wd_p83{width:83% !important;}';
	_cssHtml += '		.wd_p84{width:84% !important;}';
	_cssHtml += '		.wd_p85{width:85% !important;}';
	_cssHtml += '		.wd_p86{width:86% !important;}';
	_cssHtml += '		.wd_p87{width:87% !important;}';
	_cssHtml += '		.wd_p88{width:88% !important;}';
	_cssHtml += '		.wd_p89{width:89% !important;}';
	_cssHtml += '		.wd_p90{width:90% !important;}';
	_cssHtml += '		.wd_p91{width:91% !important;}';
	_cssHtml += '		.wd_p92{width:92% !important;}';
	_cssHtml += '		.wd_p93{width:93% !important;}';
	_cssHtml += '		.wd_p94{width:94% !important;}';
	_cssHtml += '		.wd_p95{width:95% !important;}';
	_cssHtml += '		.wd_p96{width:96% !important;}';
	_cssHtml += '		.wd_p97{width:97% !important;}';
	_cssHtml += '		.wd_p98{width:98% !important;}';
	_cssHtml += '		.wd_p99{width:99% !important;}';
	_cssHtml += '		.wd_p100{width:100% !important;}';
	_cssHtml += '		.tbl table{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '			background: #fff;';
	_cssHtml += '			font-size: 11px; letter-spacing: 0.5px;';
	_cssHtml += '			border-top: 1px solid #7f7f7f;';
	_cssHtml += '		}';
	_cssHtml += '		.tbl table th{';
	_cssHtml += '			padding: 14px 20px;';
	_cssHtml += '			line-height: 1.5em; word-break: keep-all;';
	_cssHtml += '			font-weight: 500;';
	_cssHtml += '			background: #d9d9d9;';
	_cssHtml += '			border-bottom: 1px solid #7f7f7f;';
	_cssHtml += '			border-left: 1px solid #7f7f7f;';
	_cssHtml += '			border-right: 1px solid #7f7f7f;';
	_cssHtml += '			cursor: default;';
	_cssHtml += '		}';
//	_cssHtml += '		.tbl table th:first-child{';
//	_cssHtml += '			border-left: none;';
//	_cssHtml += '		}';
//	_cssHtml += '		.tbl table thead th:last-child{';
//	_cssHtml += '			border-right: none;';
//	_cssHtml += '		}';
	_cssHtml += '		.tbl table td{';
	_cssHtml += '			padding: 12px 20px; text-align: center; line-height: 1.4em;';
	_cssHtml += '			border-bottom: 1px solid #7f7f7f;';
	_cssHtml += '			border-left: 1px solid #7f7f7f;';
	_cssHtml += '			border-right: 1px solid #7f7f7f;';
	_cssHtml += '			cursor: default;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl table th{';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_row_tbl table td{';
	_cssHtml += '			text-align: left;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl{';
	_cssHtml += '			width: 100%;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl table th{';
	_cssHtml += '			padding: 14px 10px;';
	_cssHtml += '			text-align: center;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_rowcol_tbl table thead th, .pp_rowcol_tbl table tbody th{';
	_cssHtml += '			background: #d9d9d9;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_tit_left {';
	_cssHtml += '			font-weight: 600; color: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_tit_right {';
	_cssHtml += '			font-weight: 600; color: #5fcae5;';
	_cssHtml += '			border-left: 0;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_left {';
	_cssHtml += '			position: relative;';
	_cssHtml += '			border-left: 0;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_left p {';
	_cssHtml += '			position: absolute; top: 12px; right: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_right {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_multigraph .pp_bar_right p {';
	_cssHtml += '			position: absolute; top: 12px; left: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #5fcae5;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_tit {';
	_cssHtml += '			font-weight: 600; color: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_bar {';
	_cssHtml += '			position: relative;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_bargraph .pp_graph_bar p {';
	_cssHtml += '			position: absolute; top: 10px; left: 0;';
	_cssHtml += '			height: 24px;';
	_cssHtml += '			background: #c5116c;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph2 .pp_graph_tit {';
	_cssHtml += '			color: #38b9da;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph2 .pp_graph_bar p {';
	_cssHtml += '			background: #38b9da;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph3 .pp_graph_tit {';
	_cssHtml += '			color: #a98146;';
	_cssHtml += '		}';
	_cssHtml += '		.pp_resultgraph3 .pp_graph_bar p {';
	_cssHtml += '			background: #a98146;';
	_cssHtml += '		}';
	_cssHtml += '	</style>';
	_cssHtml += '</head>';
	_cssHtml += '<body>';
	_cssHtml += '	<section class=\'grid_content mg_t20\'>';

	_cssHtml += _divStr;

	_cssHtml += '	</section>';
	_cssHtml += '</body>';
	_cssHtml += '</html>';


	return _cssHtml;

}

$(document).on("click", "#btnUpload", function(e) {
	// 파일 찾기 버튼 클릭시 탐색기 호출할 임시 <input type="file"> element 생성.
	createFileObjectForButton(this.name);
	// 클릭 event등록..
	$('#input_file_temp').click();
});

createFileObjectForButton = function(idPrefix){
	// 임시	<input type="file"> 생성..
	html = "<input type='file' name='file' id='input_file_temp' class='hidden' ";
	html += "onchange='fileFindChange(\""+ idPrefix+"\", this.files)' multiple />";

	$('#uploadDiv').append(html);
}

/**
* [파일찾기] 탐색기에서 파일을 선택 한경우.
*/
fileFindChange = function(idPrefix, files)	{
	var isUploadable = checkUploadable(idPrefix, files);
	

	// upload가능 할 경우..
	if( isUploadable ) {
		var fileCount = 0;
		
		if(idPrefix.toLowerCase().indexOf("client2") != -1){
			$("p[id^='"+ idPrefix + "_']").each(function() {
				fileCount++;
			});
		}else if(idPrefix.toLowerCase().indexOf("client") != -1){
			$("tr[id^='"+ idPrefix + "_']").each(function() {
				fileCount++;
			});
		}else{
			$("p[id^='"+ idPrefix + "_']").each(function() {
				fileCount++;
			});
		}
		
		for( var i = 0; i < files.length; i++ ){

			var fileSno = parseInt(i+fileCount+11).toString();

			var dt = new DataTransfer();
			dt.items.add( files[i] );

			addFileToList(idPrefix, fileSno, files[i].name, files[i].size, dt.files);
		}
	}

	// 탐색기 호출용 임시 file element 삭제
	$("#input_file_temp").remove();
}



/**
 * 업로드 목록에 파일 Component 생성
 * @param idPrefix : 파일 구분 값.
 * @param fileSno : 파일 순번
 * @param fileName : 물리파일의 명
 * @param fileSize : 물리파일의 크기
 * @param fileSize : 물리파일의 크기
 * @param file : 실제 파일 내용
 * @param fileElName : 파일 object의 name
 */
addFileToList = function(idPrefix, fileSno, fileName, fileSize, file) {

	var fileItemIdFull = idPrefix + "_"+fileSno;
	var fileSizeStr = getFileSizeStr(fileSize);

	var html = "";
	
	if(idPrefix.toLowerCase().indexOf("client2") != -1){
		html += "<p class='pp_file_linkbox' id='"+ fileItemIdFull + "'>";
		html += "<input type='file' name='"+idPrefix+fileSno+"' id='"+idPrefix+"input_file_"+fileSno+"' class='hidden' />";
		html += "<a href='javascript:void(0);' class='pp_file_link'><i class='fa fa-file-o'></i>"+fileName+"</a>";
		html += "<a href='javascript:void(0)' class='btn_reset' title='파일 삭제' id='fileDelBtn"+fileSno+"' onclick='deleteFileToList(\""+fileItemIdFull+"\");'>X</a>"
		html += "<i class='fa fa-times-circle'></i></button>";
		html += "</p>";
	}else if(idPrefix.toLowerCase().indexOf("client") != -1){
		html += "<tr id='"+ fileItemIdFull + "' class='sub'>";
		html += "<th scope='row'>과제물"+(fileSno-10)+"</th>";
		html += "<td>";
		html += "<p class='pp_file_linkbox'>"
		html += "<input type='file' name='"+idPrefix+fileSno+"' id='"+idPrefix+"input_file_"+fileSno+"' class='hidden' />";
		html += "<a href='javascript:void(0);' class='pp_file_link'><i class='fa fa-file-o'></i>"+fileName+"</a>";
		html += "<a href='javascript:void(0)' class='btn_reset' title='삭제' id='fileDelBtn"+fileSno+"' onclick='deleteFileToList(\""+fileItemIdFull+"\");'>X</a>"
		html += "</p>"
		html += "</td>";
		html += "</tr>";
	}else{
		html += "<p id='"+ fileItemIdFull + "'>";
		html += "<input type='file' name='"+idPrefix+fileSno+"' id='"+idPrefix+"input_file_"+fileSno+"' class='hidden' />";
		html += "<a href='javascript:void(0);' class='ad_filelink mg_l5'><i class='fa fa-file-o'></i>"+fileName+"</a>";
		html += "<button type='button' class='btn_reset font_gray va_m mg_l5' title='파일 삭제' id='fileDelBtn"+fileSno+"' onclick='deleteFileToList(\""+fileItemIdFull+"\");'>";
		html += "<i class='fa fa-times-circle'></i></button>";
		html += "</p>";
	}

	$('#uploadDiv').append(html);

	// 파일 부여 : important!!!
	$("#"+idPrefix+"input_file_"+fileSno).prop("files", file);
}

deleteFileToList = function(fileItemIdFull){
	$("#"+fileItemIdFull).remove();
	var num = fileItemIdFull.substring(fileItemIdFull.length-2);
	var html = "";
	$("p[id^='multiFile_']").each(function() {
		var chNum = this.id.substring(this.id.length-2);
		if(num < chNum){
			$(this).attr('id','multiFile_'+(chNum-1));
			$(this).children('input').attr('name','multiFile'+(chNum-1));
			$(this).children('input').attr('id','multiFileinput_file_'+(chNum-1));
			$(this).children('.btn_reset').attr('id','fileDelBtn'+(chNum-1));
			$(this).children('.btn_reset').attr('onclick','deleteFileToList("multiFile_'+(chNum-1)+'");');
		}
	});
}

/**
 * 파일 사이즈 display값 조회.
 */
getFileSizeStr = function(fileSize) {

	var fileSizeKb = fileSize / 1024; // 파일 사이즈(단위 :kb)
	var fileSizeMb = fileSizeKb / 1024;	// 파일 사이즈(단위 :Mb)
	var fileSizeGb = fileSizeMb / 1024;	// 파일 사이즈(단위 :Gb)

	var fileSizeStr = "0 Byte";

	if ((1024*1024*1024) <= fileSize) {	// 파일 용량이 1기가 이상인 경우
		//console.log("fileSizeGb="+fileSizeMb.toFixed(2));
		fileSizeStr = fileSizeGb.toFixed(2) + " Gb";
	} else if ((1024*1024) <= fileSize) {	// 파일 용량이 1메가 이상인 경우
		//console.log("fileSizeMb="+fileSizeMb.toFixed(2));
		fileSizeStr = fileSizeMb.toFixed(2) + " Mb";
	} else if ((1024) <= fileSize) {
		//console.log("fileSizeKb="+parseInt(fileSizeKb));
		fileSizeStr = parseInt(fileSizeKb) + " Kb";
	} else {
		//console.log("fileSize="+parseInt(fileSize));
		fileSizeStr = parseInt(fileSize) + " Byte(s)";
	}

	return fileSizeStr;
}



/**
 * 개별 파일 업로드 용량
 * @param idPrefix
 * @returns {Number}
 */
getUploadSize = function(idPrefix) {
	return 2*1024;
}

/**
 * 총 파일 업로드 용량
 * @param idPrefix
 * @returns {Number}
 */
getMaxUploadSize = function(idPrefix) {
	return 2*1024;
}


checkUploadable = function(idPrefix, files) {
	// 등록 가능한 파일 사이즈 MB
	var uploadSize = getUploadSize();
	// 등록 가능한 총 파일 사이즈 MB
	var maxUploadSize = getMaxUploadSize();

	// 등록할 전체 파일 사이즈
	var totalFileSize = 0;

	/*// 업로드 가능 파일 유형 조회
	var extType = $('#'+idPrefix+'type').val();*/

	// 파일 업로드 최대 개수 검사.
	var maxUploadFileCount = parseInt($('#'+idPrefix+"_max_count").val());

	var fileCount = 0;
	if(idPrefix.toLowerCase().indexOf("client2") != -1){
		$("p[id^='"+ idPrefix + "_']").each(function() {
			fileCount++;
		});
	}else if(idPrefix.toLowerCase().indexOf("client") != -1){
		$("tr[id^='"+ idPrefix + "_']").each(function() {
			fileCount++;
		});
	}else{
		$("p[id^='"+ idPrefix + "_']").each(function() {
			fileCount++;
		});
	}

	if( fileCount + files.length>maxUploadFileCount){
		alert("첨부파일은 최대 ["+maxUploadFileCount+"]개 까지만 업로드 가능합니다.");
		return false;
	}

	/*// 다중파일 등록
	if (files != null) {
		// 파일 Drag영역 view 처리.
		setViewOfFileList(idPrefix);


		for (var i = 0; i < files.length; i++) {
			// 파일 이름
			var fileName = files[i].name;
			var fileNameArr = fileName.split("\.");
			// 확장자
			var ext = fileNameArr[fileNameArr.length - 1];

			var fileSize = files[i].size; // 파일 사이즈(단위 :byte)

			if (fileSize <= 0) {
				return;
			}

			// 총 파일 용량 조회.
			var totalFileSize = parseInt($('#'+idPrefix+'totalFileSize').html());

			// 업로드 타입 별 가능 확장자 조회
			var extArray = FileUploadDL.getValidExtType(extType)

			// 업로드 타입 별 가능 확장자 확인.
			if ($.inArray(ext.toLowerCase(), extArray) < 0) {
				// 확장자 체크
				alert("등록이 불가능한 파일 형태 입니다.("+fileName+") \r\n 등록 가능한 확장자는 ["+ extArray.join(",")+"] 입니다.");
				return false;
			} else if (fileSize > uploadSize*1024*1024) {
				// 파일 사이즈 체크
				if( uploadSize > 1024 ) {
					alert("등록이 불가능한 용량입니다.\n업로드 가능한	용량은 [" + (uploadSize/1024) + " Gb]입니다.");
				} else {
					alert("등록이 불가능한 용량입니다.\n업로드 가능한	용량은 [" + uploadSize + " Mb]입니다.");
				}
				return	false;
			} else if ((totalFileSize+fileSize) > (maxUploadSize*1024*1024) ) {
				// 파일 사이즈 체크
				if( maxUploadSize > 1024 ) {
					alert("등록이 불가능한 용량입니다.\n총 업로드 가능한	용량은 [" + (uploadSize/1024) + " Gb]입니다. 이 파일을 추가하면 총용량은 ["+ FileUploadDL.getFileSizeStr(totalFileSize+totalFileSize) +"]입니다.");
				} else {
					alert("등록이 불가능한 용량입니다.\n총 업로드 가능한	용량은 [" + uploadSize + " Mb]입니다. 이 파일을 추가하면 총용량은 ["+ FileUploadDL.getFileSizeStr(totalFileSize+totalFileSize) +"]입니다.");
				}
				return	false;
			}
		}
	}*/

	return true;
}


