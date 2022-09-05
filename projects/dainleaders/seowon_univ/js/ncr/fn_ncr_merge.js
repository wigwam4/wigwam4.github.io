/**
 * 비교과 프로그램/동료평가 프로그램에 사용되는 기능 정의
 */

var BASE_PATH = sessionStorage.getItem("contextRootPath");

/**
 * ********************************************************
 * @ function : 만족도 조사/동료평가 평가문항
 * @ comment :
 * @ param : satRschType = 만족도 조사 / 사전만족도 / 등료평가 구분
 * @ param : obj = 오브젝트
 * @ history : 2017-11-07 (최초작성)
 **********************************************************
 */
function fnSatisOnOff(satRschType, obj) {
	var scaleQusArry = "";
	/** 5점척도 * */
	var openQusArry = "";
	/** 주관식 * */
	var choiceQusArry = "";
	/** 자유형객관식 * */
	var choiceAnsQusArry = "";
	/** 자유형객관식 답변 * */

	if (satRschType == "std_1") {
		scaleQusArry = '본 프로그램 내용에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램 강사에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램은 나에게 핵심역량 강화에 도움이 되고 유익했다.';
		scaleQusArry += ',향후 본 프로그램과 유사 또는 상위 프로그램 개설시 재참여 의사가 있다.';

		choiceQusArry = '본인의 성별은 무엇입니까?';
		choiceQusArry += ',귀하의 학년은 무엇입니까?';
		choiceQusArry += ',귀하의 소속 단과대학은 무엇입니까?';
		choiceQusArry += ',본 프로그램을 알게된 경로는?';

		choiceAnsQusArry += '1^남성';
		choiceAnsQusArry += ',1^여성';
		
		choiceAnsQusArry += ',2^1학년';
		choiceAnsQusArry += ',2^2학년';
		choiceAnsQusArry += ',2^3학년';
		choiceAnsQusArry += ',2^4학년';
		
		choiceAnsQusArry += ',3^인문대학';
		choiceAnsQusArry += ',3^사회과학대학';
		choiceAnsQusArry += ',3^자연과학대학';
		choiceAnsQusArry += ',3^생명과학대학';
		choiceAnsQusArry += ',3^공과대학';
		choiceAnsQusArry += ',3^예술체육대학';
		choiceAnsQusArry += ',3^치과대학';
		choiceAnsQusArry += ',3^보건복지대학';
		choiceAnsQusArry += ',3^과학기술대학';
		
		choiceAnsQusArry += ',4^교수님(FAM) 추천';
		choiceAnsQusArry += ',4^학교 홈페이지 or 학생성공지원본부 홈페이지';
		choiceAnsQusArry += ',4^SNS，EveryTime 등';
		choiceAnsQusArry += ',4^학과 게시판 or 조교 선생님';
		choiceAnsQusArry += ',4^동기，선배，후배 등';
		choiceAnsQusArry += ',4^학생성공지원본부 선생님';

		openQusArry = "본 프로그램의 참여 후기(좋은 점，부족한 점， 개선사항， 희망 프로그램)등 자유롭게 기술해 주세요.";
	}
	if(satRschType == "std_2") {
		scaleQusArry = '본 프로그램 내용에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램 강사에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램은 진로/심리(마음치유，자아성장， 진로탐색 등)를 이해하는데 도움이 되고 유익했다.';
		scaleQusArry += ',향후 본 프로그램과 유사 또는 상위 프로그램 개설시 재참여 의사가 있다.';
		
		choiceQusArry = '본인의 성별은 무엇입니까?';
		choiceQusArry += ',귀하의 학년은 무엇입니까?';
		choiceQusArry += ',귀하의 소속 단과대학은 무엇입니까?';
		choiceQusArry += ',본 프로그램을 알게된 경로는?';
		choiceQusArry += ',본 프로그램 수강 후 필요하다고 생각되는 프로그램은 무엇입니까?(최대 3개 선택)';
		
		choiceAnsQusArry += '1^남성';
		choiceAnsQusArry += ',1^여성';
		
		choiceAnsQusArry += ',2^1학년';
		choiceAnsQusArry += ',2^2학년';
		choiceAnsQusArry += ',2^3학년';
		choiceAnsQusArry += ',2^4학년';
		
		choiceAnsQusArry += ',3^인문대학';
		choiceAnsQusArry += ',3^사회과학대학';
		choiceAnsQusArry += ',3^자연과학대학';
		choiceAnsQusArry += ',3^생명과학대학';
		choiceAnsQusArry += ',3^공과대학';
		choiceAnsQusArry += ',3^예술체육대학';
		choiceAnsQusArry += ',3^치과대학';
		choiceAnsQusArry += ',3^보건복지대학';
		choiceAnsQusArry += ',3^과학기술대학';
		
		choiceAnsQusArry += ',4^교수님(FAM) 추천';
		choiceAnsQusArry += ',4^학교 홈페이지 or 학생성공지원본부 홈페이지';
		choiceAnsQusArry += ',4^SNS，EveryTime 등';
		choiceAnsQusArry += ',4^학과 게시판 or 조교 선생님';
		choiceAnsQusArry += ',4^동기，선배，후배 등';
		choiceAnsQusArry += ',4^학생성공지원본부 선생님';
		
		choiceAnsQusArry += ',5^진로검사 실시 및 결과해석';
		choiceAnsQusArry += ',5^진로상담(진로고민， 진로탐색 등) 프로그램';
		choiceAnsQusArry += ',5^진로연계 프로그램(진로특강， 진로 멘토링 등)';
		choiceAnsQusArry += ',5^심리(성격)검사 실시 및 결과해석';
		choiceAnsQusArry += ',5^심리상담(개인내적， 개인외적 등)';
		choiceAnsQusArry += ',5^심리(치료)연계 프로그램(스트레스 감소， 대인관계 증진 등)';
		choiceAnsQusArry += ',5^중독예방 및 치료 프로그램';
		choiceAnsQusArry += ',5^기타 : 9번에 기술';
		
		openQusArry = "본 프로그램의 참여 후기(좋은 점，부족한 점， 개선사항， 희망 프로그램) 등 자유롭게 기술해 주세요.";
	}
	if(satRschType == "std_3") {
		scaleQusArry = '본 프로그램 내용에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램 강사에 전반적으로 만족한다.';
		scaleQusArry += ',본 프로그램은 나에게 핵심역량 강화에 도움이 되고 유익했다.';
		scaleQusArry += ',향후 본 프로그램과 유사 또는 상위 프로그램 개설시 재참여 의사가 있다.';
		
		choiceQusArry = '본인의 성별은 무엇입니까?';
		choiceQusArry += ',귀하의 학년은 무엇입니까?';
		choiceQusArry += ',귀하의 소속 단과대학은 무엇입니까?';
		choiceQusArry += ',본 프로그램을 알게된 경로는?';
		choiceQusArry += ',본 프로그램 수강 후 필요하다고 생각되는 프로그램은 무엇입니까?(최대 3개 선택)';
		
		choiceAnsQusArry += '1^남성';
		choiceAnsQusArry += ',1^여성';
		
		choiceAnsQusArry += ',2^1학년';
		choiceAnsQusArry += ',2^2학년';
		choiceAnsQusArry += ',2^3학년';
		choiceAnsQusArry += ',2^4학년';
		
		choiceAnsQusArry += ',3^인문대학';
		choiceAnsQusArry += ',3^사회과학대학';
		choiceAnsQusArry += ',3^자연과학대학';
		choiceAnsQusArry += ',3^생명과학대학';
		choiceAnsQusArry += ',3^공과대학';
		choiceAnsQusArry += ',3^예술체육대학';
		choiceAnsQusArry += ',3^치과대학';
		choiceAnsQusArry += ',3^보건복지대학';
		choiceAnsQusArry += ',3^과학기술대학';
		
		choiceAnsQusArry += ',4^교수님(FAM) 추천';
		choiceAnsQusArry += ',4^학교 홈페이지 or 학생성공지원본부 홈페이지';
		choiceAnsQusArry += ',4^SNS，EveryTime 등';
		choiceAnsQusArry += ',4^학과 게시판 or 조교 선생님';
		choiceAnsQusArry += ',4^동기，선배，후배 등';
		choiceAnsQusArry += ',4^학생성공지원본부 선생님';
		
		choiceAnsQusArry += ',5^취업정보탐색 &취업상담';
		choiceAnsQusArry += ',5^취업역량개발 프로그램';
		choiceAnsQusArry += ',5^이력서&자기소개서 컨설팅';
		choiceAnsQusArry += ',5^면접 관련 컨설팅';
		choiceAnsQusArry += ',5^취업박람회 및 인턴십 정보';
		choiceAnsQusArry += ',5^기업 유형별 채용대비(직무특강 등)';
		choiceAnsQusArry += ',5^공무원，공기업，공공기관 채용 대비(NCS 등)';
		choiceAnsQusArry += ',5^자격증 관련(IT， 한국사 등)';
		choiceAnsQusArry += ',5^취업연계 기업 탐방 및 방문';
		choiceAnsQusArry += ',5^특강(전문가， 명사， 동문 등)';
		choiceAnsQusArry += ',5^기타 : 9번에 기술';
		
		openQusArry = "본 프로그램의 참여 후기(좋은 점，부족한 점， 개선사항， 희망 프로그램) 등 자유롭게 기술해 주세요.";
	}
	if (satRschType == "pre") {
		/** 사전 만족도는 고정 문항이 없음 * */
	}
	if (satRschType == "peer") {
		/** 동료평가는 고정 문항이 없음 * */
	}
	if(satRschType != 'pre' && satRschType != 'peer'){
		fnSatisOnOffAjax(satRschType, obj, scaleQusArry, openQusArry,
				choiceQusArry, choiceAnsQusArry,'std');
	}else{
		fnSatisOnOffAjax(satRschType, obj, scaleQusArry, openQusArry,
				choiceQusArry, choiceAnsQusArry);
	}
}

/**
 * ********************************************************
 * @ function : 예산 tr 컨트롤
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 **********************************************************
 */
var trIndex = 1;
var subIndex = 1;
/** tr 추가* */
function addBudget() {
	var budgetSum = 0;
	
	$tableTr = $("#ncrBudgetTable");
	if ($tableTr.find("tbody tr").length > 1) {
		trIndex = $tableTr.find("tbody tr").length;
	}
	
	if ($tableTr.find("tbody tr").length > 5) {
		alert("예산은 5개까지 추가가능합니다.");
		return false;
	}
	
	$tableTr
	.find("tbody")
	.append(
			'<tr id="budgetTr_'
			+ trIndex
			+ '">'
			+ '<td>'
			+ '<input type="hidden" name="budgetTrCnt" value="1">'
			+ '<select class="form-control input-sm emptyChkByClass dp_inline wd_p60 mg_r5" name="nbiMainBudgetCd" id="nbiMainBudgetCd" title="예산 대분류" onchange="fnCreateBudgetEtc(this,\'FST\');">'
			+ '<option value="">예산대분류를 선택해주세요.</option>'
			+ '<option value="NCR_T09_P01">대학회계</option>'
			+ '<option value="NCR_T09_P02">국립대학육성사업</option>'
			+ '<option value="NCR_T09_P03">대학혁신지원사업</option>'
			+ '<option value="NCR_T09_P04">LINC+</option>'
			+ '<option value="NCR_T09_P99">기타</option>'
			+ '</select>'
			+ '<input type="text" class="form-control wd_p30 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetMainEtc" id="nbiBudgetMainEtc" title="대분류 기타사항" value="" readonly>'
			+ '</td>'
			+ '</tr>');
	
	trIndex++
	
}
// 미사용
function addBudget_old() {
	var budgetSum = 0;
	/** 예산 합계* */
	$('input[name=nbiBudgetPrice]').each(function(idx) {
		var tmpVal = $(this).val();
		if ($(this).val() == null || $(this).val() == '') {
			tmpVal = 0;
		}
		budgetSum = parseInt(budgetSum) + parseInt(uncomma(tmpVal));
	});

	budgetSum = comma(budgetSum);

	$tableTr = $("#ncrBudgetTable");
	if ($tableTr.find("tbody tr").length > 1) {
		trIndex = $tableTr.find("tbody tr").length;
	}

	if ($tableTr.find("tbody tr").length > 5) {
		alert("예산은 5개까지 추가가능합니다.");
		return false;
	}

	$tableTr.find("tbody tr:last").remove();
	$tableTr
			.find("tbody")
			.append(
					'<tr id="budgetTr_'
							+ trIndex
							+ '">'
							+ '<td>'
							+ '<input type="hidden" name="budgetTrCnt" value="1">'
							+ '<select class="form-control input-sm emptyChkByClass dp_inline wd_p40 mg_r5" name="nbiMainBudgetCd" id="nbiMainBudgetCd" title="예산 대분류" onchange="fnCreateBudgetEtc(this,\'FST\');">'
							+ '<option value="">예산대분류를 선택해주세요.</option>'
							+ '<option value="NCR_T09_P01">대학회계(교비)</option>'
							+ '<option value="NCR_T09_P02">재정지원사업</option>'
							+ '<option value="NCR_T09_P99">기타</option>'
							+ '</select>'
							+ '<input type="text" class="form-control wd_p50 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetMainEtc" id="nbiBudgetMainEtc" title="대분류 기타사항" value="" readonly>'
							+ '</td>'

							+ '<td>'
							+ '<div class="pd_t5" id="budgetSubCdDiv_'
							+ trIndex
							+ '">'
							+ '<select class="form-control input-sm emptyChkByClass wd_p40 dp_inline mg_r5" name="nbiBudgetCenCd" id="nbiBudgetCenCd'
							+ trIndex
							+ '" title="예산 중분류" onchange="fnCreateBudgetEtc(this,\'SEC\')">'
							+ '<option value="">예산중분류를 선택해주세요.</option>'
							+ '</select>'
							+ '<input type="text" class="form-control wd_p50 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetCenEtc" id="nbiBudgetCenEtc" title="기타사항" value="" readonly>'
							+ '</div>'
							+ '</td>'

							+ '<td>'
							+ '<div class="pd_t5" id="budgetPriceDiv_'
							+ trIndex
							+ '">'
							+ '<input type="text" class="form-control wd_p80 ta_r dp_inline mg_r5 emptyChkByClass"  name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11"title="예산액" onkeyup="commaKeyUpChkSum(this);" value="" >'
							+ '<button class="btn btn-sm btn-primary" type="button" onclick="addSubBudget(this);"><i class="fa fa-plus mg_r5"></i>추가</button>'
							+ '</div>' + '</td>' + '</tr>');
	$tableTr.find("tbody").append(
			'<tr>' + '<th scope="row">' + '예산 합계' + '</th>'
					+ '<td colspan="3" class="ta_c" id="budgetSum">'
					+ budgetSum + ' 원' + '</td>' + '</tr>');

	trIndex++

}
/** sub 예산 금액 추가 */
function addSubBudget(_obj) {
	var _rowCount = $(_obj).parent('div').parent('td').children("div").length;
	var npiBudgetMain = $(_obj).parent('div').parent('td').siblings().eq(0)
			.children('select').val();

	$(_obj)
			.parent('div')
			.parent('td')
			.prev()
			.append(
					'<div class="pd_t5" id="budgetCenCdDiv_'
							+ subIndex
							+ '">'
							+ '<select class="form-control input-sm emptyChkByClass wd_p40 dp_inline mg_r5" name="nbiBudgetCenCd" id="nbiBudgetCenCd_'
							+ subIndex
							+ '" title="예산 중분류" onchange="fnCreateBudgetEtc(this,\'SEC\')">'
							+ '<option value="">예산중분류를 선택해주세요.</option>'
							+ '</select>'
							+ '<input type="text" class="form-control wd_p50 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetCenEtc" id="nbiBudgetCenEtc" title="중분류 기타사항" value="" readonly>'
							+ '</div>');
	fnSetComnCdCombo(npiBudgetMain, 'nbiBudgetCenCd_' + subIndex, '',
			'예산 중분류를 선택해주세요.', true);

	$(_obj)
			.parent('div')
			.parent('td')
			.append(
					'<div class="pd_t5 test" id="budgetPriceDiv_'
							+ subIndex
							+ '">'
							+ '<input type="text" class="form-control wd_p80 ta_r dp_inline mg_r5 emptyChkByClass" name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11"title="예산액" onkeyup="commaKeyUpChkSum(this);" value="" >'

							+ '<button class="btn btn-sm btn-danger btn-danger test"  onclick="removeBudget(this, \'sub\');" type="button"><i class="fa fa-minus mg_r5"></i>삭제</button>'
							+ '</div>');

	subIndex++;

	var trCnt = parseInt(_rowCount) + 1;
	// console.log("trCnt = "+trCnt);
	$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)')
			.children('input[name=budgetTrCnt]').val(trCnt);
	// console.log("최종값 =
	// "+$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input').attr('name'));
}

/** tr 삭제* */
function removeBudget(_obj, _subYn) {
	if (_subYn == 'sub') {
		var trCnt = $(_obj).parent('div').parent('td').parent('tr').children(
				'td:eq(0)').children('input[name=budgetTrCnt]').val();
		$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)')
				.children('input[name=budgetTrCnt]').val((parseInt(trCnt) - 1));
		var index = [];
		index = $(_obj).parent("div").attr("id").split("_");
		console.log(index);
		$(_obj).parent("div").parent("td").prev().children(
				"div #budgetCenCdDiv_" + index[1]).remove();
		$(_obj).parent("div").remove();
	} else {
		// budgetTr_3
		$tableTr = $("#ncrBudgetTable");
		$("#budgetTr_" + ($tableTr.find("tbody tr").length - 1)).remove();
	}

	/** 예산 합계* */
	var budgetSum = 0;
	$('input[name=nbiBudgetPrice]').each(function(idx) {
		var tmpVal = $(this).val();
		if ($(this).val() == null || $(this).val() == '') {
			tmpVal = 0;
		}
		budgetSum = parseInt(budgetSum) + parseInt(uncomma(tmpVal));
	});

	$('#budgetSum').html(budgetSum + " 원");
};

/** 예산 중분류 select 제어, 기타 input란 활성화 */
function fnCreateBudgetEtc(_obj, _category) {

	if (_category == 'FST') {
		$(_obj).parent("td").next("td").children("div").children("select")
				.each(
						function() {
							$(this).children('option').not(":eq(0)").remove();
							fnSetComnCdCombo($(_obj).val(), $(this).attr("id"),
									'', '예산 중분류를 선택해주세요.', true);
							$(this).siblings('input[name!=budgetTrCnt]').attr(
									'readonly', true);
							$(this).siblings('input[name!=budgetTrCnt]')
									.val('');
						});
	}
	if ($(_obj).val() == 'NCR_T09_P99' || $(_obj).val() == 'NCR_T10_P99'
			|| $(_obj).val() == 'NCR_T09_P99_C99') {
		$(_obj).siblings('input[name!=budgetTrCnt]').attr('readonly', false);

	} else {
		$(_obj).siblings('input[name!=budgetTrCnt]').val('');
		$(_obj).siblings('input[name!=budgetTrCnt]').attr('readonly', true);
	}

}

/**
 * ********************************************************
 * @ function : 참여학과 추가 삭제
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 **********************************************************
 */
function addPartDepart(npiPartiDeptCd, npiPartiDeptNm) {
	$tableTr = $("#partDepartTd");
	var _rowCount = $("#partDepartTd p").length;
	// console.log("check : "+_rowCount);
	var departTag = "";

	if (_rowCount > 9) {
		alert("참여학과는 10개까지만 가능 합니다.");
		return false;
	}

	if (isEmpty(npiPartiDeptCd)) {
		npiPartiDeptCd = "";
	}
	;
	if (isEmpty(npiPartiDeptNm)) {
		npiPartiDeptNm = "";
	}
	;

	departTag = '<div name ="partDepartDiv" id="partDepartDiv_' + _rowCount
			+ '">';
	departTag += '<p class="ad_search_row wd_p40 mg_t10" id="partDepartP_'
			+ _rowCount + '" >';
	departTag += '<input type="text" class="form-control" name="npiPartiDeptNm" onkeydown="fnEnterActionForDepartTd('
			+ "'npiPartiDept','"
			+ _rowCount
			+ "'"
			+ ');"'
			+ 'id="npiPartiDeptNm_'
			+ _rowCount
			+ '" placeholder="검색어를 입력하세요" title="참여학과" value="'
			+ npiPartiDeptNm + '">';
	departTag += '<button type="button" class="btn btn-primary btn_form btn_search" onclick="fnGetDeptInfo('
			+ "'npiPartiDept','"
			+ _rowCount
			+ "'"
			+ ');"><i class="fa fa-search"></i>검색</button>';
	departTag += '<input type="hidden" class="ad_formstyle" name="npiPartiDeptCd"  id="npiPartiDeptCd_'
			+ _rowCount + '" value="' + npiPartiDeptCd + '">';
	departTag += '</p>';
	departTag += '</div>';
	$("#partDepartTd").append(departTag);
}

/** 삭제* */
function rmvPartDepart() {
	var _rowCount = $("#partDepartTd p").length;
	var partDepartTd = document.getElementById("partDepartTd");
	var partDepartDivs = document.getElementsByName("partDepartDiv");
	var childCount = typeof partDepartDivs == "undefined" ? 0
			: partDepartDivs.length;
	partDepartTd.removeChild(partDepartDivs[childCount - 1]);
}

/**
 * ********************************************************
 * @ function : 영역 활동 코드 가져오기
 * @ comment :
 * @ history : 2019-05-10 (최초작성)
 **********************************************************
 */
function fnChangeAreaActCode(obj) {
	var _areaActCode = $(obj).val();
	var _areaId = obj.id;

	if (_areaId == 'npiAreaCd') {
		fnSetComnCdCombo(_areaActCode, 'npiAreaSubCd', '', '선택', true);
	} else if (_areaId == 'npiAreaSubCd') {
		fnSetComnCdCombo(_areaActCode, 'npiAreaThirdCd', '', '선택', true);
	}
}

/**
 * ********************************************************
 * @ function : 예산액 입력할 때마다 예산액 합계 체크
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 **********************************************************
 */
function commaKeyUpChkSum(obj) {
	var budgetSum = 0;
	$(obj).val(comma(uncomma($(obj).val())));

	$('input[name=nbiBudgetPrice]').each(function() {
		var tempVal = $(this).val();
		if (tempVal == null || tempVal == '') {
			tempVal = 0;
		}

		budgetSum = parseInt(budgetSum) + parseInt(uncomma(tempVal));
	})

	budgetSum = comma(budgetSum);
	$('#budgetSum').html(budgetSum + " 원");

}

/**
 * ********************************************************
 * @ function : 비교과 프로그램 저장
 * @ comment :
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnOnClickSave(viewType) {
	var abilityDiv = "";
	var abilityCd = "";
	var abilityCnt = $("#abilityCnt").val();

	if (viewType != 'LOAD_COTAIN') {
		$("#npiTitle").val($("#npiTitleNew").val());
	}

	/** 에디터 데이터 담기 * */
	var npiEduCont = CKEDITOR.instances["npiEduCont"].getData();
	$("#npiEduContHidden").val(npiEduCont);
	var npiApplPrecautions = CKEDITOR.instances["npiApplPrecautions"].getData();
	$("#npiApplPrecautionsHidden").val(npiApplPrecautions);
	var npiSupBenefit = CKEDITOR.instances["npiSupBenefit"].getData();
	$("#npiSupBenefitHidden").val(npiSupBenefit);

	if (viewType == 'MODIFY') {
		var npiModifyCont = CKEDITOR.instances["npiModifyCont"].getData();
		$("#npiModifyContHidden").val(npiModifyCont);
		if ('${programInfoMap.NPI_STAT_DB_CD}' == 'NCR_T05_P06'
				|| '${programInfoMap.NPI_STAT_DB_CD}' == 'NCR_T05_P07'
				|| '${programInfoMap.NPI_STAT_DB_CD}' == 'NCR_T05_P08') {
			if ('${sessionScope.loginVO.roleId}' == 'RLE0000024'
					|| '${sessionScope.loginVO.roleId}' == 'SUPERADMIN_01') {
				var npiEctCont = CKEDITOR.instances["npiEctCont"].getData();
				$("#npiEtcContHidden").val(npiEctCont);
			}
		}
	}

	$("#npiGradeLimit").val(conComma('npiGradeLimitChk', 'checkbox'));
	$("#npiShregLimit").val(conComma('npiShregLimitChk', 'checkbox'));
	$("#npiCampusLimit").val(conComma('npiCampusLimitChk', 'checkbox'));

	/** 메인 역량 코드 구하기 * */
	var subTotalCnt = 0;
	var checkArray = [];
	var checkCount = 0;
	var checkArraylength = 0;

	for (var i = 1; i <= abilityCnt; i++) {
		if (isEmpty($("#A00" + i + "_score").val())) {
			tempSubAblityScore = 0;
		} else {
			tempSubAblityScore = parseInt($("#A00" + i + "_score").val());
		}
		checkArray.push(tempSubAblityScore);

	}

	/** **************** 충북대 - 대표역량 지정, 비중 합 100%만 제어하므로 미사용 *********** */
	/** 주요역량 값 체크 - 역량점수 중 가장 큰 값 * */
	// var max = Math.max.apply(null,checkArray);
	// var maxChk = 0;
	// for(var i =0;i<checkArray.length;i++){
	// checkCount++;
	// if(max==checkArray[i]){
	// $("input[name=npiMainAbilityCd]").val('A00'+checkCount);
	// maxChk++;
	// }
	// }
	/** 배열중 최고값과 같은것이 있다면 ( count > 1 ) * */
	// if( maxChk > 1 ){
	// alert("역량 비율의 최고값은 한 개여야 합니다.");
	// nullValidation = false;
	// return false;
	// }
	// for(var i =0;i<checkArray.length;i++){
	// if(checkArray[i] != 0){
	// checkArraylength = checkArraylength + 1;
	// }
	// }
	// if(checkArraylength >= 3){
	// alert("역량은 두개 이상 선택할 수 없습니다. 다시 설정해 주세요.");
	// nullValidation = false;
	// return false;
	// }
	/** **************** 충북대 - 대표역량 지정, 비중 합 100%만 제어하므로 미사용 *********** */

	/** 예산 콤마제어 * */
	$("input[name=nbiBudgetPrice]").each(function() {
		$(this).val(uncomma($(this).val()));
	})

	/** 참여 대학/학과 구분에 따른 처리 * */
	var joinType = $(':radio[name="npiJoinType"]:checked').val();

	if (joinType == 'COLG') {
		$("#partDepartTd_Div").empty();
	} else if (joinType == 'SUST') {
		$("#colgTableDiv").empty();
	} else if (joinType == 'ALL') {
		$("#partDepartTd_Div").empty();
		$("#colgTableDiv").empty();
	}
	$("#writeForm").submit();
}
/**
 * ********************************************************
 * @ function : 등록 전 validation
 * @ comment :
 * @ history : 2019-05-10 (최초작성)
 *            *********************************************************
 */
/*
 * function fnInputValidationxx() { }
 */
function fnInputValidation() {

	var nullValidation = true;
	nullValidation = fnEmptyCheckByClass();

	if (nullValidation) {

		if($("#npiAbilityUseYn").val() == 'Y'){
			/** 역량 퍼센트 합 100 체크 */
			var abilityCd = "";
			var abilityCnt = $('#abilityCnt').val();
			var abilityScoreSum = 0;
			
			for (var i = 1; i <= abilityCnt; i++) {
				abilityScoreSum = abilityScoreSum
				+ parseInt($('input[name=A00' + i + ']').val());
			}
			if (abilityScoreSum != 100) {
				alert("역량의 합은 100% 여야 합니다.");
				return false;
			}
			
			if($(':radio[name="npiMainAbilityCd"]:checked').val() == '' || $(':radio[name="npiMainAbilityCd"]:checked').val() == null ){
				alert("주역량을 선택해주세요.");
				return false;
			}
		}

		/** 모집기간 체크 */
		if (!isCompareData('npiReqStrDate', 'npiReqEndDate')) {
			nullValidation = false;
			return false;
		}
		;
		/** 모집기간 날짜비교 */
		if (!isCompareData('npiReqStrDate', 'npiReqEndDate')) {
			return false
		}
		;

		/** 운영기간 체크 */
		if (!isCompareData('npiActStrDate', 'npiActEndDate')) {
			nullValidation = false;
			return false;
		}
		;
		/** 운영기간 날짜비교 */
		if (!isCompareData('npiActStrDate', 'npiActEndDate')) {
			return false
		}
		;

		/** 운영기간과 모집기간 비교* */
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; // 1월 == 0
		var yyyy = today.getFullYear();

		if (!$("#npiReqStrDate").val() == ""
				&& !$("#npiActStrDate").val() == "") {
			if ($("#npiReqStrDate").val() > $("#npiActStrDate").val()) {
				alert("운영기간을 모집기간보다 빠르게 설정하실수 없습니다.");
				return false;
			}
		}

		/** 모집인원 0 이상 입력 * */
		if ($("#npiRecrCnt").val() <= 0) {
			alert("모집인원이 0명 이상이어야 합니다.");
			nullValidation = false;
		}
		if ($(':radio[name="npiJoinType"]:checked').val() == 'SUST') {
			/** 참여학과 체크 * */
			$tableTr = $("#partDepartTd");
			var _rowCount = $("#partDepartTd p").length;
			if (_rowCount > 0) {
				for (var idx = 0; idx < _rowCount; idx++) {
					if ($("#npiPartiDeptCd_" + idx).val() == '') {
						alert((parseInt(idx) + 1) + "번째 참여학과를 선택해 주세요.");
						nullValidation = false;
						return false;
					}
				}
			}
		} else {
			/** 참여대학 체크 * */
			$tableTr = $("#colgTableTbody");
			var _rowCount = $("#colgTableTbody tr").length;
			if (_rowCount > 0) {
				for (var idx = 0; idx < _rowCount; idx++) {
					if ($("#ncrJoinTypeClogCd_" + parseInt(idx) + 1).val() != '') {
					}
				}
			}
		}

		/** 담당자 코드 체크 * */
		if ($('#npiStfNo').val() == null || $('#npiStfNo').val() == '') {
			fnGetStaffInfo();
			nullValidation = false;
			return false;
		}

		/** 신청서 Y 체크했을경우 파일 등록 유무 체크 * */
		if ($('input[name="npiApplyFileYn"]:checked').val() == "Y") {
			if ($('#applyFileDiv .file_thumbnail').length <= 0) {
				alert("신청서 파일을 등록해주세요.")
				nullValidation = false;
				return false;
			}
			;
		}


		/** 팀 선택 시, 최소, 최대인원 Check * */
		if ($("#npiTeamY").is(":checked")) {
			if (!$("#npiTMinCnt").emptyCheck()) {
				nullValidation = false;
				return false;
			}
			if (!$("#npiTMaxCnt").emptyCheck()) {
				nullValidation = false;
				return false;
			}

			/** 팀 선택 시, 사전조사 사용못함 * */
			if ($("#npiPreRschY").is(":checked")) {
				alert("팀 프로그램인 경우 사전조사는 진행할 수 없습니다.");
				// $("#npiPreRschN").trigger('click');
				return false;
			}
		}

		/** 사전 만족도 Null 체크 * */
		if ($('input[name=npiPreRschYn]:checked').val() == "Y") {
			if (!fnChkSatisNullchk('pre')) {
				return false;
			}
		}

		/** 만족도조사 Null 체크 * */
		if ($('input[name=npiSatisRschYn]:checked').val() == "Y") {
			if (!fnChkSatisNullchk('std')) {
				return false;
			}
		}
		/** 사전/사후 역량진단 Null 체크 * */
//		if ($('input[name=npiCoreDiagYn]:checked').val() == "Y") {
//			if (!fnChkNcrDiagNull()) {
//				nullValidation = false;
//			}
//		}

	}// nullValidation
	if (nullValidation) {
		if ($('#operPlanFileDiv .file_thumbnail').length <= 0) {
			alert("프로그램 운영 계획서를 첨부해주세요.");
			nullValidation = false;
			return false;
		}
	}
	
	
	if (nullValidation) {
		return confirm("저장하시겠습니까?");
	} else {
		return nullValidation;
	}
}

/**
 * ********************************************************
 * @ function : 등록 후 결과 콜백
 * @ comment :
 * @ param : response
 * @ param : stateMessage
 * @ history : 2017-11-07 (최초작성)
 *    *********************************************************
 */
function fnShowResult(response, stateMessage) {
	if (response.isSuccess) {
		alert('프로그램 저장에 성공하였습니다.');
		fnGoNcrProgramListAdmin(response.programGubun, response.viewType);
	} else {
		alert('프로그램 저장에 실패하였습니다.(2)');
	}
}
/**
 * ******************************************************** @ function : 리스트
 *                                                          페이지로 이동/ 수정시 해당 페이지로
 * 리프레쉬 @ comment : @ history : 2017-11-07 (최초작성)
 *      *********************************************************
 */
function fnGoNcrProgramListAdmin(programGubun, viewType) {
	var basePath = sessionStorage.getItem("contextRootPath");
	// 수정일때
	if (viewType == "MODIFY") {
		var _url = basePath + "/" + programGubun
				+ "/r/m/getProgramModifyDetail.do";
		$("#detailForm").attr("action", _url).submit();
		// 저장일때
	} else if (viewType == "INSERT") {
		if (programGubun.indexOf('ncr') !== -1) {
			location.href = basePath
					+ "/ncrProgramListSTF/r/m/getProgramList.do";
		} else {
			location.href = basePath + "/peerRevwListSTF/r/m/getProgramList.do";
		}
	} else if (viewType == "DETAIL") {
		if (programGubun.indexOf('ncr') !== -1) {
			if (programGubun.indexOf('ApprovSTF') !== -1) {
				location.href = basePath
						+ "/ncrProgramApprovSTF/r/m/getProgramList.do";
			} else {
				location.href = basePath
						+ "/ncrProgramListSTF/r/m/getProgramList.do";
			}
		}
	}

}
/**
 * ******************************************************** @ function : 신청서 사용
 *                                                          유무에 파일첨부란 제어, 필수제출여부
 * 제어 @ comment : @ param : type = Y/N 구분 @ history : 2017-11-07 (최초작성)
 *    *********************************************************
 */
function fnRegFileTrShow(type) {
	if (type == "Y") {
		$("#regFileTr").show();
		$('#npiApplyMustYn').prop('disabled', false);
	} else {
		$("#regFileTr").hide();
		$('#npiApplyMustYn').prop('disabled', true);
	}
}

/**
 * ******************************************************** @ function : 개인/팀 제어 @ comment : @ param :
 * type = Y/N 구분 @ history : 2017-11-07 (최초작성)
 *                                                          *********************************************************
 */
function fnTeamCntShow(type) {
	if (type == "Y") {
		$('#npiTMinCnt').prop('disabled', false);
		$('#npiTMaxCnt').prop('disabled', false);
	} else {
		$('#npiTMinCnt').prop('disabled', true);
		$('#npiTMaxCnt').prop('disabled', true);
	}
}

/**
 * ******************************************************** @ function : 프로그램
 * 불러오기 @ comment : peerRevwRegSTF : 동료평가/ ncrProgramRegSTF : 비교과 @ param
 * :_programGubun = url 변수명 @ param :_npiPeerYn = 동료평가 여부 @ history : 2019-0221
 *      (최초작성) *********************************************************
 */

function fnGetNcrProgramPop(_programGubun, _npiPeerYn) {
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var basePath = sessionStorage.getItem("contextRootPath");
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = basePath + "/" + _programGubun
			+ "/r/n/getProgramListPopUp.do"; // 팝업 내용을 호출하는 url
	var popupParams = {
		npiPeerYn : _npiPeerYn
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/*******************************************************************************
 * @ function : 프로그램 상태일괄 변경 @ comment :APPROV(승인)/REJECT(반려) @ param :_state =
 * 승인/반려 @ param :_npiEtcCont = 반려사유 @ param :_npiKeyId = 비교과 keyId @ param
 *       :_programGubun = url 변수명 ***************************************
 */
function fnProgramModifyStateAjax(_state, _programGubun, _npiEtcCont, _npiKeyId, _npiStfNm, _npiStaffOffice, _npiTitle) {
	// 상태변경 update info 목록
	var infoArray = new Array();
	var resultObj = new Object();
	var succesCnt = 0;
	var unSuccesCnt = 0;
	var infoObjArray = new Array();
	var recieveInfo = _npiStfNm+"^"+_npiStaffOffice+"|";

	// 단일상태변경
	if (_npiKeyId != null && _npiKeyId != "") {
		var infoObj = new Object();
		infoObj.npiKeyId = _npiKeyId;
		infoObj.npiTitle = _npiTitle;
		infoObj.recieveInfo = recieveInfo;
		infoArray.push(infoObj);

		// 일괄상태변경
	} else {
		var selData = tableObject.rows({
			selected : true
		}).data();// 선택된 row에 대한 값

		for (var i = 0; i < selData.length; i++) {
			var infoObj = new Object();
			infoObj.npiKeyId = selData[i].NPI_KEY_ID;
			infoObj.npiTitle = selData[i].NPI_TITLE;
			infoObj.npiOprtDeptNm = selData[i].NPI_OPRT_DEPT_CD_NM;
			infoObj.npiStfNo = selData[i].NPI_STF_NO;
			infoObj.recieveInfo = selData[i].NPI_STF_NM;+"^"+selData[i].NPI_STAFF_OFFICE+"|";
			infoArray.push(infoObj);
		}
	}

	resultObj.jsonInfo = infoArray;
	resultObj.npiEtcCont = _npiEtcCont;
	resultObj.state = _state;

	$.ajax({
		type : "POST",
		url : BASE_PATH + "/" + _programGubun + "/w/n/modifyProgramState.do",
		contentType : 'application/json',
		cache : false,
		traditional : true,
		async : false,
		dataType : 'json',
		data : JSON.stringify(resultObj),
		success : function(res) {
			if (res.rtnCode == 0) {
				alert("상태변경 처리가 완료 되었습니다.");
				// 상세보기에서 승인할 경우
				if ($("#viewType").val() == 'DETAIL') {
					$("#detailForm").submit();
					// 리스트에서 상태변경 할 경우
				} else {
					// 반려일때 팝업 닫기
					if (_state == "NCR_T05_P08") {
						$('#PROGRAM_POP_UP_CLOSE_BTN').trigger('click');
					}
					tableObject.destroy();
					callGrid();
				}

			} else {
				alert("일괄변경 처리에 실패 하였습니다.\n잠시후 다시 시도해주세요.");
			}
		},
		error : function(request, status, error) {
			alert("code = " + request.status + " message = "
					+ request.responseText + " error = " + error); // 실패 시 처리
		}
	});
}

/**
 * ************************************** @ function : 반려팝업 @ comment : @ param :
 * _programGubun = url 변수명 @ param : _keyId = 프로그램 키아이디
 *                                        ***************************************
 */
function fnProgramRejectPopUp(_programGubun, _npiKeyId) {

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH + "/" + _programGubun
			+ "/r/n/getProgramRejectPopUp.do";
	var popupParams = {
		npiKeyId : _npiKeyId
	}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * **************************************
 * @ function : 상세보기, 수정창
 * @ comment :
 * @ param :_programGubun = url 변수명
 * @ param :_keyId = 프로그램 키아이디
 * @ param :_viewType =MODIFY(수정)/DETAIL(상세)
 ****************************************
 */
function fnGoModiDetailInfo(_programGubun, _keyId, _viewType) {
	$('#detailForm #npiKeyId').val(_keyId);
	$('#detailForm #viewType').val(_viewType);

	var _url = BASE_PATH + "/" + _programGubun+ "/r/m/getProgramModifyDetail.do";

	$('#detailForm').attr("action", _url).submit();
}

/**
 * **************************************
 * @ function : 신청자 페이지 이동
 * @ comment :
 * @ param : _programGubun = 프로그램 구분
 * @ param : _keyId = 비교과 프로그램 키값
 * @ history : 2019-05-20 (최초작성)
 ****************************************
 */
function fnGoRecrList(_programGubun, _keyId) {
	$('#detailForm #npiKeyId').val(_keyId);

	var _url = BASE_PATH + "/" + _programGubun + "/r/m/getProgramRecrList.do";
	$('#detailForm').attr("action", _url).submit();
}

/**
 * **************************************
 * @ function : 신청자 페이지 이동(상담)
 * @ comment :
 * @ param : _programGubun = 프로그램 구분
 * @ param : _keyId = 비교과 프로그램 키값
 * @ history : 2019-05-20 (최초작성)
 ****************************************
 */
function fnGoCounselRecrList(_programGubun, _keyId) {
	$('#detailForm #npiKeyId').val(_keyId);

	var _url = BASE_PATH + "/" + _programGubun + "/r/m/getProgramRecrList.do";
	$('#detailForm').attr("action", _url).submit();
}

/**
 * ********************************************************
 * @ function : fnSortAddFavorite
 * @ comment : 찜목록 선택
 * @ history : 2019-05-10 (최초작성)
 *                   *********************************************************
 */
function fnSortAddFavorite(_domType) {
	var loginUserId = sessionStorage.getItem("sessionUserId");
	var _programGubun = $('#programGubun').val();
	$("#ablityCategory").val('ALL');

	if (loginUserId == '') {
		if (confirm("찜 목록 보기는 로그인이 필요한 기능 입니다. \n" + "로그인 하시겠습니까?")) {
			fnGoLoginPopUp('/' + _programGubun + '/a/m/goProgramApplList.do');
		} else {
			$("#sortFavorite").removeClass("on");
		}
	} else {

		if (_domType == 'BTN') {
			if ($("#addFavorite").val() == 'Y') {
				$("#addFavorite").val("");
			}else{
				$("#addFavorite").val("Y");
			}

		}else {
			var addFlag = $('input:checkbox[id="sortFavorite"]').is(":checked");
			if (addFlag) {
				$('#addFavorite').val("Y");
			} else {
				$('#addFavorite').val("");
			}
		}

		if (_programGubun.toUpperCase().indexOf("MY") == "-1") {
			searchProgram();
		} else {
			searchMyProgramList();
		}
	}
}

/**
 * ********************************************************
 * @ function : 데이터 피커 불러오기
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 **********************************************************
 */
$(".dtpicker").each(function() {
	var datepicker = $(this).attr('id');
	datePickerClient(datepicker);
});

/**
 * ********************************************************
 * @ function : fnSetNcrProgramAblityCategory
 * @ comment : 역량별 구분 검색
 * @ param : categoryVal : 구분값
 * @ history : 2019-05-10 (최초작성)
 *     *********************************************************
 */
function fnSetProgramAblityCategory(categoryVal) {
	var _programGubun = $('#programGubun').val();
	$("#addFavorite").val('N');

	if (categoryVal == 'RECOM') {
		var loginUserId = sessionStorage.getItem("sessionUserId");
		if (loginUserId == '') {
			alert("추천 프로그램 조회기능은 로그인 후에 이용 가능합니다.");
			return false;
		}

		var _url = BASE_PATH + "/" + _programGubun+ "/r/m/getDiagRsltFinAjax.do";
		jQuery.ajax({
			type : "POST",
			url : _url,
			async : false,
			dataType : "json",
			data : {
				userId : loginUserId
			},
			success : function(r) {
				$("#ablityCategory").val(r.diagoryVal);
			},
			error : function(r) {
			}
		});

	} else {
		$("#ablityCategory").val(categoryVal);
	}

	if (_programGubun.toUpperCase().indexOf("MY") == "-1") {
		searchProgram();
	} else {
		searchMyProgramList();
	}

	if (categoryVal == "ALL" || categoryVal == "A001" || categoryVal == "A002"
			|| categoryVal == "A003") {
		$(".getpanelid").attr("id", "panel1");
	} else {
		$(".getpanelid").attr("id", "panel5");
	}
}

/**
 * ********************************************************
 * @ function : searchRcrProgram
 * @ comment : 리스트 검색
 * @ history : 2019-05-10 (최초작성)
 *                  *********************************************************
 */
function searchProgram(_listType) {
	$("#listLoadIngBoxDiv").show();
	var pageNo = $("#pageIndex").val();
	var ablityCategory = $("#ablityCategory").val();
	var ncrProgramYear = $("#ncrProgramYear").val();
	var npiAreaCd = $("#npiAreaCd").val();
	var npiReqStrDate = $("#npiReqStrDate").val();
	var npiReqEndDate = $("#npiReqEndDate").val();
	var npiActStrDate = $("#npiActStrDate").val();
	var npiActEndDate = $("#npiActEndDate").val();
	var addFavorite = $("#addFavorite").val();
	var npiPartiDeptCd = $("#npiPartiDeptCd").val();
	var npiOprtDeptCdNm = $("#npiOprtDeptCdNm").val();
	var npiTitle = $("#npiTitle").val();
	var addReqOrdFlag = $("#addReqOrdFlag").val();
	var addReqDeadLine = $("#addReqDeadLine").val();
	var _programGubun = $('#programGubun').val();
	var diagFlag = $('#diagFlag').val();
	var listType = $('#listType').val();

	var _url = BASE_PATH + "/" + _programGubun
			+ "/a/m/getProgramApplListAjax.do";

	$.ajax({
		url : _url,
		type : "post",
		dataType : "html",
		data : {
			pageIndex : pageNo,
			ablityCategory : ablityCategory,
			ncrProgramYear : ncrProgramYear,
			npiAreaCd : npiAreaCd,
			npiReqStrDate : npiReqStrDate,
			npiReqEndDate : npiReqEndDate,
			npiActStrDate : npiActStrDate,
			npiActEndDate : npiActEndDate,
			addFavorite : addFavorite,
			npiPartiDeptCd : npiPartiDeptCd,
			npiOprtDeptCdNm : npiOprtDeptCdNm,
			addReqOrdFlag : addReqOrdFlag,
			addReqDeadLine : addReqDeadLine,
			npiTitle : npiTitle,
			diagFlag : diagFlag,
			listType : listType
		},
		success : function(res) {
			$("#ncrProgramAjaxDiv").empty();
			$("#ncrProgramAjaxDiv").html(res);
			$("#listLoadIngBoxDiv").hide();
		}
	});
}

/**
 * ********************************************************
 * @ function : 초기화
 * @ comment :
 * @ history : 2019-05-10 (최초작성)
 **********************************************************
 */
function fnSearchReset() {
	var _programGubun = $('#programGubun').val();

	if (_programGubun.toUpperCase().indexOf("MY") == "-1") {
		location.href = BASE_PATH + "/" + _programGubun
				+ "/a/m/goProgramApplList.do";
	} else {
		location.href = BASE_PATH + "/" + _programGubun
				+ "/a/m/goMyProgramList.do";
	}
}

/**
 * ********************************************************
 * @ function : fnSetAddReqDeadLine
 * @ comment : 마감 임박순
 * @ param : categoryVal : 구분값
 * @ history : 2019-05-10 (최초작성)
 **********************************************************
 */
function fnSetProgramTerm(obj,typeFlag) {
	var chked_val = "";
	if (typeFlag == "order") {
		$("input[name=program_order]:checked").each(function(pi, po) {
			chked_val += po.value;
		});
		$("#addReqDeadLine").val(chked_val);
	} else if (typeFlag == "chk") {
		$("input[name=program_chk]:checked").each(function(pi, po) {
			chked_val += po.value;
		});
		$("#addReqOrdFlag").val(chked_val);
	} else {
		$("#addReqDeadLine").val('');
		$("#addReqOrdFlag").val('');
	}
	
	searchProgram();
}

/**
 * ********************************************************
 * @ function : searchMyProgramList
 * @ comment : 리스트 검색
 * @ history : 2019-05-10 (최초작성)
 **********************************************************
 */
function searchMyProgramList(LoginYn) {
	$("#listLoadIngBoxDiv").show();
	var pageNo = $("#pageIndex").val();
	var ablityCategory = $("#ablityCategory").val();
	var ncrProgramYear = $("#ncrProgramYear").val();
	var npiAreaCd = $("#npiAreaCd").val();
	var npiReqStrDate = $("#npiReqStrDate").val();
	var npiReqEndDate = $("#npiReqEndDate").val();
	var npiActStrDate = $("#npiActStrDate").val();
	var npiActEndDate = $("#npiActEndDate").val();
	var addFavorite = $("#addFavorite").val();
	var npiPartiDeptCd = $("#npiPartiDeptCd").val();
	var npiOprtDeptCdNm = $("#npiOprtDeptCdNm").val();
	var npiTitle = $("#npiTitle").val();
	var _programGubun = $('#programGubun').val();
	var stdStateCd = $("#stdStateCd").val();
	var peerLevel = $("#peerLevel").val();
	var listType = $("#listType").val();

	if (LoginYn == "N") {
		var _url = BASE_PATH + "/" + _programGubun
				+ "/a/m/getMyProgramListAjax.do";
	} else {
		var _url = BASE_PATH + "/" + _programGubun
				+ "/r/m/getMyProgramListAjax.do";
	}

	$.ajax({
		url : _url,
		type : "post",
		dataType : "html",
		data : {
			pageIndex : pageNo,
			ablityCategory : ablityCategory,
			ncrProgramYear : ncrProgramYear,
			npiAreaCd : npiAreaCd,
			npiReqStrDate : npiReqStrDate,
			npiReqEndDate : npiReqEndDate,
			npiActStrDate : npiActStrDate,
			npiActEndDate : npiActEndDate,
			addFavorite : addFavorite,
			npiPartiDeptCd : npiPartiDeptCd,
			npiOprtDeptCdNm : npiOprtDeptCdNm,
			stdStateCd : stdStateCd,
			npiTitle : npiTitle,
			peerLevel : peerLevel,
			listType : listType
		},
		success : function(res) {
			$("#myNcrProgramAjaxDiv").empty();
			$("#myNcrProgramAjaxDiv").html(res);
			$("#listLoadIngBoxDiv").hide();
		}
	});
}

/**
 * ********************************************************
 * @ function : fnSetStdStateCd
 * @ comment : 학생상태 선택
 * @ param : programTermVal : 전공 구분값
 * @ history : 2019-05-10 (최초작성)
 **********************************************************
 */
function fnSetStdStateCd(programTermVal) {

	var loginUserId = sessionStorage.getItem("sessionUserId");
	if (loginUserId == '') {
		if (confirm("비교과 신청내역 확인 서비스는 로그인이 필요한 기능 입니다. \n" + "로그인 하시겠습니까?")) {
			fnGoLoginPopUp('/' + _programGubun + '/a/m/goProgramApplList.do');
		}
	} else {
		var chked_val = "";
		if (programTermVal == "ALL") {
			chked_val = "ALL"
		} else {
			$(":checkbox[name='program_term']:checked").each(function(pi, po) {
				if (po.value != 'ALL') {
					chked_val += "," + "'" + po.value + "'";
				}
			});
			if (chked_val != "")
				chked_val = chked_val.substring(1);
		}
		if (chked_val == '') {
			chked_val = 'ALL';
		}
		$("#stdStateCd").val(chked_val);
		searchMyProgramList();
	}

}

/**
 * ********************************************************
 * @ function : 담당자 검색
 * @ comment : 조회 결과가 없는 경우, 조회 결과가 2개 이상인 경우 팝업 조회. 조회 결과가 1인 경우는 값 입력.
 * @ history : 2019-04-01 (최초작성)
 **********************************************************
 */
function fnGetStaffInfo(stfNmTagId) {
	var _searchStaffNm = $("#" + stfNmTagId).val();
	var _url = BASE_PATH + "/cmm/fms/getStaffList.do";

	$.ajax({
		url : _url,
		type : "POST",
		cache : false,
		async : false,
		dataType : "json",
		data : {
			searchOpener : _searchStaffNm,
			searchCondition : 'addKorNm'
		},
		success : function(res) {
			if (res.stafInfoList.length > 1) {
				alert("다수의 검색 결과가 조회되었습니다. \n해당 담당자를 선택해주세요.");
				fnGoStaffListPopUp(stfNmTagId);

			} else if (res.stafInfoList.length == 0) {
				alert("검색 결과가 없습니다. \n해당 담당자를 검색해 주세요.");
				fnGoStaffListPopUp(stfNmTagId);

			} else if (res.stafInfoList.length == 1) {
				alert("담당자가 입력되었습니다.");
				console.log("교번 = " + res.stafInfoList[0].staffNo);
				console.log("이름 = " + res.stafInfoList[0].korNm);
				var nmTagId = stfNmTagId.substring(0, stfNmTagId.length - 2);
				fnReceiveChkStaffInfo(res.stafInfoList[0].staffNo,
						res.stafInfoList[0].korNm, nmTagId);
				$("#npiStfHp1").focus();
			}

		}
	});
}

/**
 * **************************************
 * @ function : 직원 리스트 조회 (팝업)
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 ****************************************
 */
function fnGoStaffListPopUp(stfNmTagId) {
	var searchStaffNm = $("#" + stfNmTagId).val();
	var nmTagId = stfNmTagId.substring(0, stfNmTagId.length - 2);

	$('#POPUP_OPEN_BTN').trigger('click');
	fnOpenStaffListPopUp(searchStaffNm, '', nmTagId);
}

/**
 * ********************************************************
 * @ function : 직원 리스트 조회 결과 리턴
 * @ comment : fnGoStaffListPopUp 기능과 1Set 기능 입니다.
 * @ param : staffNo = 직원번호
 * @ param : staffNm = 직원이름
 * @ history : 2017-11-07 (최초작성)
 **********************************************************
 */
function fnReceiveChkStaffInfo(staffNo, staffNm, stfTagId) {

	$("#" + stfTagId + "No").val(staffNo);
	$("#" + stfTagId + "Nm").val(staffNm);

	/* 왜 있지? */
	// $("#ncrStaffNoSearchFlag").val("Y");
	// $("#ncrStaffNoOrSearchName").val(staffNm);
}

/**
 * ********************************************************
 * @ function : 학생 리스트 조회 결과 리턴
 * @ comment : fnGoStaffListPopUp 기능과 1Set 기능 입니다.
 * @ param : stdNo = 학번
 * @ param : stdNm = 학생이름
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function fnReceiveChkStdInfo(stdNo, stdNm, shregStNm, sustCdNm, shyrCdNm,
		genFgNm, term, stfTagId) {
	$("#" + stfTagId + "No").val(stdNo);
	$("#" + stfTagId + "Name").val(stdNm);

	/* 비교과 신청자추가 상담 추가상담일지용 */
	$("#npsAddStdNo").val(stdNo);
	$("#npsAddStdName").val(stdNm);

	/* 지도교수 상담 추가상담일지용 */
	$("#cnsStdNo").val(stdNo);
	$("#cnsStdName").val(stdNm);

	$("#add_shregStNm").val(shregStNm);
	$("#add_sustCdNm").val(sustCdNm);
	$("#add_shyrCdNm").val(shyrCdNm);
	$("#add_genFgNm").val(genFgNm);
	$("#add_term").val(term);
}

/**
 * ********************************************************
 * @ function : 참여학과 검색 후 엔터 클릭시 발생하는 이벤트
 * @ comment :
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnEnterActionForDepartTd(type, idx, key) {
	if (event.keyCode == 13) {
		var _rowCount = $("#partDepartTd p").length;
		var moveIdx = "";
		fnGetDeptInfo(type, idx);
		moveIdx = (parseInt(idx) + parseInt(1));
		$("#npiPartiDeptNm" + moveIdx).focus();
	}
}

/**
 * ********************************************************
 * @ function : 운영부서 검색
 * @ comment : 조회 결과가 없는 경우, 조회 결과가 2개 이상인 경우 팝업 조회. 조회 결과가 1인 경우는 값 입력.
 * @ history : 2019-04-01 (최초작성)
 **********************************************************
 */
function fnGetDeptInfo(searchType, idx) {
	var _url = BASE_PATH + "/cmm/fms/getDeptList.do";

	var _ncrDeptVal = "";
	var _ncrDeptNm = "";
	var _ncrDeptCd = "";
	var _ncrDeptDiv = "";

	if (searchType == "npiPartiDept") {
		_ncrDeptNm = "npiPartiDeptNm_" + idx;
		_ncrDeptCd = "npiPartiDeptCd_" + idx;
		_ncrDeptDiv = "H";
		_ncrDeptVal = $("#" + _ncrDeptNm).val();
	} else {
		_ncrDeptNm = "deptNm";
		_ncrDeptCd = "npiOprtDeptCd";
		_ncrDeptVal = $("#npiOprtDeptNm").val();
	}

	$.ajax({
		url : _url,
		type : "POST",
		cache : false,
		async : false,
		dataType : "json",
		data : {
			deptKorNm : _ncrDeptVal,
			deptNm : _ncrDeptVal
		},
		success : function(res) {
			if (res.deptInfoList.length > 1) {
				// alert("여러개의 검색결과가 존재 합니다. 한개의 부서/학과를 선택해 주세요.");
				$('#POPUP_OPEN_BTN').trigger('click');
				fnGoOpenDeptListPopup(searchType, idx, _ncrDeptDiv);

			} else if (res.deptInfoList.length == 0) {
				alert("검색 결과가 없습니다. \n해당 부서를 검색해 주세요.");
				$('#POPUP_OPEN_BTN').trigger('click');
				fnGoOpenDeptListPopup(searchType, idx, _ncrDeptDiv);

			} else if (res.deptInfoList.length == 1) {

				if (searchType == "npiPartiDept") {
					alert("참여학과가 입력되었습니다.")
				} else {
					alert("담당부서가 입력되었습니다.");
				}
				$("#" + _ncrDeptCd).val(res.deptInfoList[0].deptCd);
				$("#" + _ncrDeptNm).val(res.deptInfoList[0].deptKorNm);

			}
		}
	});
}

/**
 * ********************************************************
 * @ function : 운영부서/참여학과 입력 값 세팅 후 조회 팝업
 * @ comment :
 * @ history : 2018-11-15 (최초작성)
 **********************************************************
 */
function fnGoOpenDeptListPopup(_searchType, idx, deptDiv) {
	var deptNm = "";
	if (_searchType == "npiPartiDept") {
		deptNm = $("#npiPartiDeptNm_" + idx).val();
	} else {
		deptNm = $("#deptNm").val();
	}

	fnOpenDeptListPopup(_searchType, deptNm, idx, deptDiv);

}

/**
 * ********************************************************
 * @ function : 전공역량일 경우 전공역량정보 가져오기
 * @ comment :
 * @ history : 2019-07-18 (최초작성)
 * *********************************************************
 */
function fnAbilityScoreList() {
	if ($('input[name=npiOprtDeptDiv]:checked').val() == "MAJOR") {
		var programGubun = $('#programGubun').val();

		$
				.ajax({
					url : BASE_PATH + "/" + programGubun
							+ "/r/n/getAbilityScoreList.do",
					type : "POST",
					cache : false,
					async : false,
					dataType : "json",
					data : {
						paramCd : $('#deptCd').val() + "C000"
					},
					success : function(res) {

						var subTdIdx = 0;
						for (var i = 0; i < res.abiltyScoreList.length; i++) {
							$('#majorTable > tbody').children('tr:eq(1)')
									.children('th:eq(' + i + ')').children(
											'span:eq(0)').text(
											res.abiltyScoreList[i].CD_NM
													+ " 역량");
							$('#majorTable > tbody').children('tr:eq(1)')
									.children('input:eq(' + i + ')').attr(
											"name",
											res.abiltyScoreList[i].CD_ID);

							for (var k = 0; k < res.abiltyScoreList[i].abiltyScoreSubList.length; k++) {
								$('#majorTable > tbody')
										.children('tr:eq(2)')
										.children('td:eq(' + subTdIdx + ')')
										.text(
												res.abiltyScoreList[i].abiltyScoreSubList[k].CD_NM);
								$('#majorTable > tbody')
										.children('tr:eq(3)')
										.children('td:eq(' + subTdIdx + ')')
										.children('div')
										.children('input')
										.attr(
												"name",
												res.abiltyScoreList[i].abiltyScoreSubList[k].CD_ID);
								$('#majorTable > tbody')
										.children('tr:eq(3)')
										.children('td:eq(' + subTdIdx + ')')
										.children('div')
										.children('input')
										.attr(
												"title",
												res.abiltyScoreList[i].abiltyScoreSubList[k].CD_NMD);
								subTdIdx++;
							}

						}

					}
				});
	}
}

/**
 * ********************************************************
 * @ function : 비교과 프로그램 신청하기(신청, 대기신청)
 * @ comment :
 * @ param : _formData = 신청정보
 * @ history : 2019-02-21 (최초작성)
 **********************************************************
 */
function fnStdProgramApplySubmit(_formData) {

	var programGubun = $('#programGubun').val();
	var npiTeamYn = $('input[name=npiTeamYn]').val();
	var _url = BASE_PATH + "/" + programGubun + "/w/n/createProgramReqStd.do";
	if (confirm("신청하시겠습니까?")) {
		$.ajax({
			type : "POST",
			url : _url,
			cache : false,
			async : false,
			data : _formData,
			processData : false,
			contentType : false,
			success : function(res) {
				var alertMsg = "";
				// 팀원신청이면
				if (npiTeamYn == 'NCR_T02_C02') {
					for (var i = 0; i < res.rstMap.rstList.length; i++) {
						if (i == 0) {
							alertMsg = res.rstMap.rstList[i].npsStdNo
						} else {
							alertMsg = alertMsg + "\n"
									+ res.rstMap.rstList[i].npsStdNo
						}
					}
					alert("신청이 완료되었습니다.\n\n" + alertMsg);
					if (res.rstMap.failCnt != res.rstMap.totalCnt) {
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');
					}

				} else {
					// 신청성공
					if (res.rstMap.sts == "SUCCESS_APL"
							|| res.rstMap.sts == "SUCCESS_WAIT") {
						if (res.rstMap.sts == "SUCCESS_APL") {
							alert("신청이 완료되었습니다.");
							console.log("승인대기으로 신청 완료");

						} else if (res.rstMap.sts == "SUCCESS_WAIT") {
							alert("대기신청이 완료되었습니다.");
							console.log("대기신청으로 신청 완료");
						}
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');

						// 신청실패
					} else if (res.rstMap.sts == "FAIL_APL_DONE") {
						alert("이미 신청한 프로그램입니다.");
					} else if (res.rstMap.sts == "FAIL_APL") {
						alert("모집 및 대기인원이 전부 찼습니다. 다른활동을 신청해주세요.");
					} else {
						alert("신청에 실패하였습니다. 잠시후 다시 시도해 주세요.");
					}

				}

			}
		});

	}

}

/**
 * ********************************************************
 * @ function : 목록으로 가기
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 **********************************************************
 */
function fnGoApplyList(_viewType) {
	var programGubun = $('#programGubun').val();
	var path = "";

	if (programGubun.toLowerCase().indexOf('ncr') !== -1) {
		path = "myNcrProgram";
	} else {
		path = "myPeerProgram";
	}

	if (_viewType == 'MODIFY') {
		$("#listForm").attr("action",
				BASE_PATH + "/" + path + "/a/m/goMyProgramList.do").submit();
	} else {
		$("#listForm").attr("action",
				BASE_PATH + "/" + programGubun + "/a/m/goProgramApplList.do")
				.submit();
	}
}

/**
 * ********************************************************
 * @ function : 사전만족도 팝업창
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 **********************************************************
 */
function fnPreSurveyPopUp() {
	var programGubun = $('#programGubun').val();

	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH + "/" + programGubun
			+ "/r/n/getProgramSurveyPopUp.do";
	var popupParams = {
		preSgmKeyId : $('#insertForm input[name=preSgmKeyId]').val(),
		npiPreRschYn : $('#insertForm input[name=npiPreRschYn]').val(),
		npiKeyId : $('#insertForm input[name=npiKeyId]').val(),
		npiApplyFileYn : $('#insertForm input[name=npiApplyFileYn]').val(),
		npiTeamYn : $('#insertForm input[name=npiTeamYn]').val(),
		npiTMaxCnt : $('#insertForm input[name=npiTMaxCnt]').val(),
		surveyDiv : 'pre'
	}; // 팝업 호출시의 파라미터
	clientLoadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 사전(사후)조사/사전(사후)역량진단 팝업창
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 **********************************************************
 */
function fnPreApplyPopUp() {
	var programGubun = $('#programGubun').val();
	
	$.ajaxSetup({
		cache : false
	});
	
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH + "/" + programGubun
	+ "/r/n/getProgramDiagSurveyPopUp.do";
	var popupParams = {
			npiKeyId : $('#insertForm input[name=npiKeyId]').val(),

			preSgmKeyId : $('#insertForm input[name=preSgmKeyId]').val(),
			npiPreRschYn : $('#insertForm input[name=npiPreRschYn]').val(),
			
			preCoreDiagKey : $("#insertForm input[name=preCoreDiagKey]").val(),
			npiCoreDiagYn : $("#insertForm input[name=npiCoreDiagYn]").val(),
			
			npiApplyFileYn : $('#insertForm input[name=npiApplyFileYn]').val(),
			npiTeamYn : $('#insertForm input[name=npiTeamYn]').val(),
			npiTMaxCnt : $('#insertForm input[name=npiTMaxCnt]').val(),
			surveyDiv : 'pre'
	}; // 팝업 호출시의 파라미터
	clientLoadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 팀원추가 팝업창
 * @ comment :
 * @ history : 2019-05-28 (최초작성)
 **********************************************************
 */
function fnTeammatePopUp() {
	var programGubun = $('#programGubun').val();

	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH + "/" + programGubun + "/r/n/getTeammatePopUp.do";
	var popupParams = {
		npiTMaxCnt : $('#insertForm input[name=npiTMaxCnt]').val(),
		npiKeyId : $('#insertForm input[name=npiKeyId]').val(),
		npiPartiDeptCd : $('#insertForm input[name=npiPartiDeptCd]').val()
	};
	clientLoadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 프로그램 신청정보 수정하기
 * @ comment :
 * @ param : _formData = 신청정보
 * @ param : _viewType = 취소/수정 여부
 * @ history : 2019-02-21 (최초작성)
 *    *********************************************************
 */
function fnStdProgramModify(_formData, _viewType) {
	var programGubun = $('#programGubun').val();

	var _msg = "수정";

	if (_viewType == "CANCEL") {
		_msg = "취소";
	}

	var _url = BASE_PATH + "/" + programGubun + "/w/n/modifyStdReqProgramInfoAjax.do";

	if (confirm(_msg + "하시겠습니까?")) {

		$.ajax({
			type : "POST",
			url : _url,
			cache : false,
			async : false,
			data : _formData,
			processData : false,
			contentType : false,
			success : function(res) {
				if (res.rtnCode == 0) {
					alert(_msg + "되었습니다.");
					fnGoApplyList("MODIFY");
				} else {
					alert(_msg + "에 실패하였습니다.(1)");
				}

			}
		});

	}
}

/**
 * ********************************************************
 * @ function : 역량점수 그래프
 * @ comment :
 * @ history : 2019-05-22 (최초작성)
 *     *********************************************************
 */
function fnDetailViewAblityGraph(divNm, dataArry, categoriesArry) {
	var options = {
		chart : {
			height : 250,
			type : 'bar',
			background : 'transparent'
		},
		plotOptions : {
			bar : {
				horizontal : false,
				columnWidth : '40%',
				distributed : true
			},
		},
		dataLabels : {
			enabled : false
		},
		stroke : {
			show : true,
			width : 2,
			colors : [ 'transparent' ]
		},
		colors : [ '#d93655', '#9dcd57', '#0487d9', '#f2b84c', '#855ea8' ],
		series : [ {
			name : [ '획득점수' ],
			data : dataArry
		}, ],
		xaxis : {
			categories : categoriesArry,
		},
		fill : {
			opacity : 1

		},
		legend : {
			position : 'bottom',
			horizontalAlign : 'right',
			floating : true,
			offsetY : 0 - 25,
			offsetX : 0 - 5
		},
	};

	var chart = new ApexCharts(document.querySelector("#" + divNm), options);
	chart.render();
	$("#ablityAvtGraphLoadBox").hide();
}

/**
 * ********************************************************
 * @ function : 역량점수 그래프
 * @ comment :
 * @ history : 2019-05-22 (최초작성)
 * *********************************************************
 */
function fnDetailViewAblityDountGraph(ablityScoreArry, categoriesArry) {
	var options = {
		series : ablityScoreArry,
		labels : categoriesArry,
		chart : {
			height : '100%',
			type : 'donut',
		},
		colors : [ '#d93655', '#9dcd57', '#0487d9', '#f2b84c', '#855ea8',
				'#088A85', '#FA58F4', '#000000' ],
		responsive : [ {
			breakpoint : 480,
			options : {
				chart : {
					width : 400
				},
				legend : {
					position : 'bottom'
				}
			}
		} ]
	};
	var chart = new ApexCharts(document.querySelector("#ablityDountGraphDiv"),
			options);
	chart.render()
	$("#ablityDountGraphLoadingBox").hide();
}

/**
 * ********************************************************
 * @ function : 운영계획서 인쇄
 * @ comment :
 * @ param : _npiKeyId = 프로그램 keyId
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function onActRepoPrint(_npiKeyId) {
	var programGubun = $('#programGubun').val();

	window
			.open(
					BASE_PATH + "/" + programGubun
							+ "/r/m/getProgramModifyDetail.do?npiKeyId="
							+ _npiKeyId + "&viewType=REPO",
					"_blank",
					"toolbar=no,directories=no,scrollbars=yes,resizable=no,status=no,menubar=no,width=870, height=830, left=100");
}

/**
 * ********************************************************
 * @ function : 교수업적평가 반영여부 선택에 따른 교수업적평가 구분 제어
 * @ comment :
 * @ param : _value = 반영여부
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function fnChangeProfEval(_value) {

	if (_value == "Y") {
		$('#npiProfEvalDiv').attr("disabled", false);
	} else {
		$('#npiProfEvalDiv').val("");
		$('#npiProfEvalDiv').attr("disabled", true);
	}

}

/**
 * ********************************************************
 * @ function : 신청자 내역에서 학생역량점수 추가
 * @ comment :
 * @ param : _npiKeyId = 프로그램 keyId
 * @ param : _stdNo = 학번
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function fnStdAbilityAdd(_npsKeyId, _stdNo) {

	var abilityCnt = $('#abilityCnt').val();
	var programGubun = $('#programGubun').val();

	var rstParamObj = new Object();
	var paramsArray = [];

	for (var i = 1; i <= abilityCnt; i++) {
		var infoObj = new Object();

		if ($('#npiOprtDeptDiv').val() == "DEPART") {
			infoObj.sahAbilityCd = "A00" + i;
			infoObj.sahScore = isEmpty($('#A00' + i + '_' + _npsKeyId).val()) ? 0
					: $('#A00' + i + '_' + _npsKeyId).val();

		} else if ($('#npiOprtDeptDiv').val() == "MAJOR") {
			infoObj.sahAbilityCd = $('#npiOprtDeptCd').val() + "C00" + i;
			infoObj.sahScore = isEmpty($(
					'#' + $('#npiOprtDeptCd').val() + "C00" + i + "_"
							+ _npsKeyId).val()) ? 0 : $(
					'#' + $('#npiOprtDeptCd').val() + "C00" + i + "_"
							+ _npsKeyId).val();

			if (parseInt(infoObj.sahScore) > 0) {
				paramsArray.push(infoObj);
			}
		}
		rstParamObj.stdAbiltyScoreList = paramsArray;
		rstParamObj.npsKeyId = _npsKeyId;
		rstParamObj.sahStdNo = _stdNo;

		var _url = BASE_PATH + "/" + programGubun
				+ "/w/n/modifyStdAbilityAdd.do";
		$.ajax({
			url : _url,
			type : "post",
			contentType : 'application/json',
			cache : false,
			traditional : true,
			async : false,
			dataType : "json",
			data : JSON.stringify(rstParamObj),
			success : function(res) {

				if (res.sts = "SUCCESS") {

					alert("해당 학생에게 역량점수가 부여되었습니다.");

					tableObject.destroy();
					callGrid();

				} else {
					alert("역량점수 부여가 되지 않았습니다.\n 잠시후 다시 시도해 주세요.");
				}
			}
		});
	}
}

/**
 * ********************************************************
 * @ function : 참여시간 및 난이도 선택시 역량 환산점수 계산
 * @ comment :
 * @ param : _value = 반영여부
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function fnCalMileageScore() {
	var npiCounselYn = $('input[name="npiCounselYn"]:checked').val();
	var npiPartyTime = $('#npiPartyTime').val();
	var npiLevel = $('#npiLevel').val();
	var npiStanMileScore = $('#npiStanMileScore').val();
	var npiMaxAckCnt = $('#npiMaxAckCnt').val();
	var sum = "0";

	if (npiCounselYn == "Y") {
		if (isEmpty(npiStanMileScore)) {
			$("#abilitySumValTag").text("기준 마일리지를 입력해주세요");
		} else if (isEmpty(npiMaxAckCnt)) {
			$("#abilitySumValTag").text("최대 인정 횟수를 입력해주세요.");
		} else {
			$("#abilitySumValTag").text(npiStanMileScore + "점");
			$('input[name=npiAbilitySum]').val(npiStanMileScore);
		}
	} else {
		if (isEmpty(npiPartyTime)) {
			$("#abilitySumValTag").text("참여시간을 입력해주세요");
		} else if (isEmpty(npiLevel)) {
			$("#abilitySumValTag").text("난이도를 선택해주세요.");
		} else {
			var calcNpiLevel = 0;
			if(npiLevel == 'NCR_T04_C01') {
				calcNpiLevel = 2.5;
			}else if(npiLevel == 'NCR_T04_C02'){
				calcNpiLevel = 2;
			}else if(npiLevel == 'NCR_T04_C03'){
				calcNpiLevel = 1.5;
			}else if(npiLevel == 'NCR_T04_C04'){
				calcNpiLevel = 1;
			}
			$("#abilitySumValTag").text(parseInt(npiPartyTime*calcNpiLevel)+"점");
			$('input[name=npiAbilitySum]').val(npiPartyTime*calcNpiLevel);
		}
	}
}

/**
 * ********************************************************
 * @ function : 하위역량 입력값의 합을 상위역량 퍼센트에 넣어줌(청운VER)
 * @ comment :
 * @ param : _cdDiv = 전공/핵심 역량 구분
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
/*
 * function fnCalUpAbilityScore(_cdDiv) { var abilityCnt =
 * $('#abilityCnt').val(); var deptCd = $('#deptCd').val(); var abilityCd =
 * _cdDiv == 'major' ? 'C' : 'A';
 *
 *//** 하위역량 퍼센트 합 상위역량점수에 셋팅 * */
/*
 * var subTotalCnt = 0; var checkArray = []; var checkCount = 0; var inputValSum =
 * 0;
 *
 *//** 역량 퍼센트 합 100 체크 */
/*
 * var abilityCd = ""; if ($("input[name=npiOprtDeptDiv]:checked").val() ==
 * "DEPART") { abilityCd ="A";
 *
 * }else if($("input[name=npiOprtDeptDiv]:checked").val() == "MAJOR") {
 * abilityCd =$('#deptCd').val()+"C"; }
 *
 *
 * for (var i = 1; i <= abilityCnt; i++) { var upAbility = 0; for (var k = 1; k <=
 * 2; k++) { var lowerScore = $('#'+_cdDiv+'Table >
 * tbody').children('tr:last').children('td:eq('+subTotalCnt+')').children('div').children('input').val();
 * upAbility = parseInt(upAbility)+ parseInt(isEmpty(lowerScore) ? 0 :
 * lowerScore); $('input[name='+deptCd+abilityCd+'00'+i+']').val(upAbility);
 * $('#'+_cdDiv+'Ability'+i).text(upAbility);
 *
 * subTotalCnt++; } }
 *
 * var abilityCnt = $('#abilityCnt').val(); var abilityScoreSum = 0;
 *
 * for (var i = 1; i <= abilityCnt; i++) { abilityScoreSum = abilityScoreSum +
 * parseInt($('input[name='+abilityCd+'00'+i+']').val()); }
 *
 * if (abilityScoreSum > 100) { alert("역량 비율의 합은 100% 여야 합니다."); } }
 */

/**
 * ********************************************************
 * @ function : 하위역량 입력값의 합을 상위역량 퍼센트에 넣어줌(대진 VER)
 * @ comment :
 * @ param : _cdDiv = 전공/핵심 역량 구분
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */

function fnCalAbilityScore(obj) {
	console.log("11 : " + obj);
	var tempAblityScore = obj.value;
	console.log("22 : " + tempAblityScore);
	var tempAblityName = obj.name;
	console.log("33 : " + tempAblityName);
	var abilityCnt = $('#abilityCnt').val();
	var abilityCntlength = 0;
	var abilitySumCntlength = 0;
	var tempSubAblityScore = 0;
	var sumAblityScore = 0;

	for (var i = 1; i <= abilityCnt; i++) {
		if (isEmpty($("#A00" + i + "_score").val())) {
			tempSubAblityScore = 0;
		} else {
			tempSubAblityScore = parseInt($("#A00" + i + "_score").val());
		}
		sumAblityScore += tempSubAblityScore;
	}

	if (parseInt(sumAblityScore) > 100) {
		alert("합산 역량이 100%를 초과 합니다. 다시 설정해 주세요.");
		$("#" + tempAblityName + "_score").val('');
		return false;
	} else if (parseInt(sumAblityScore) == 100) {
		for (var i = 1; i <= abilityCnt; i++) {
			if (isEmpty($("#A00" + i + "_score").val())) {
				$("#A00" + i + "_score").val("0");
				$("#A00" + i + "_spanTag").text("0");
			}
		}
	}

	$("#" + tempAblityName + "_spanTag").text(tempAblityScore);
	// (%)계
	$("#sumAbilityPer").text(sumAblityScore);

	// 산출 역량점수
	var abilityScore = parseInt($("#abilitySumValTag").text());

	var scoreForAbility = 0;
	var sumScoreAbility = 0;

	if (tempAblityScore == '') {
		tempAblityScore = '0';
	}
	// scoreForAbility = Math.round(abilityScore *
	// (parseInt(tempAblityScore)/100));
	scoreForAbility = (abilityScore * (parseInt(tempAblityScore) / 100))
			.toFixed(1);
	$("#scoreForAbility_" + tempAblityName).text(scoreForAbility);

	for (var i = 1; i <= abilityCnt; i++) {
		if (isEmpty($("#scoreForAbility_A00" + i).text())) {
			sumScoreAbility += 0;
		} else {
			sumScoreAbility += parseFloat($("#scoreForAbility_A00" + i).text());
		}
	}

	$("#sumScoreAbility").text(Math.round(sumScoreAbility));
}

/**
 * ********************************************************
 * @ function : 운영주체 변동에 따라 전공역량/핵심역량 입력란 노출
 * @ comment :
 * @ param : npiOprtDeptDiv = 운영주체 구분값
 * @ param : _viewType = 페이지 로드상태(READY)
 * @ history : 2019-07-17 (최초작성)
 * *********************************************************
 */
function fnCtrlAbilitySetting(_npiOprtDeptDiv, _viewType) {

	// 승인대기, 반려 아닐 경우 이벤트 막기
	if (!isEmpty($('#npiStatDbCd').val())
			&& $('#npiStatDbCd').val() != 'NCR_T05_P00'
			&& $('#npiStatDbCd').val() != 'NCR_T05_P08') {

		if (_npiOprtDeptDiv == "DEPART" || _npiOprtDeptDiv == ""
				|| _npiOprtDeptDiv == null) {
			$('#majorDiv').hide();
			$('#coreDiv').show();
		} else if (_npiOprtDeptDiv == "MAJOR") {
			$('#coreDiv').hide();
			$('#majorDiv').show();
		}
	} else {

		if (_npiOprtDeptDiv == "DEPART" || _npiOprtDeptDiv == ""
				|| _npiOprtDeptDiv == null) {
			if (_viewType != 'READY') {
				$('#deptCd').val('');
				$('#deptNm').val('');
				$('div[name=partDepartDiv]').remove();
			}

			$('#coreDiv').show();
			$('#coreTable > tbody').children('tr:last').children('td')
					.children('div').children('input').addClass(
							'emptyChkByClass');
			$('#majorDiv').hide();
			$('#majorTable > tbody').children('tr:last').children('td')
					.children('div').children('input').removeClass(
							'emptyChkByClass');

		} else if (_npiOprtDeptDiv == "MAJOR") {

			if (_viewType != 'READY') {
				$('#deptCd').val('');
				$('#deptNm').val('');
				$('div[name=partDepartDiv]').remove();
			}
			$('#coreDiv').hide();
			$('#coreTable > tbody').children('tr:last').children('td')
					.children('div').children('input').removeClass(
							'emptyChkByClass');
			$('#majorDiv').show();
			$('#majorTable > tbody').children('tr:last').children('td')
					.children('div').children('input').addClass(
							'emptyChkByClass');

			$('#npiProfEvalYn_N').trigger('click');
			$('input[name=npiProfEvalYn]:not(:checked)').attr("disabled", true);
		}
	}

}

/**
 * ********************************************************
 * @ function : 과제물파일 제출
 * @ comment :
 * @ param : npiOprtDeptDiv = 운영주체 구분값
 * @ history : 2019-07-17  (최초작성)
 * *********************************************************
 */
function fnStdProgramAttach(_npsKeyId) {

	var _url = BASE_PATH + "/myNcrProgram/w/n/createStdFileAttach.do";
	if (confirm("첨부파일을 저장하시겠습니까?")) {
		$("#attachForm")
				.ajaxForm(
						{
							url : _url,
							type : "POST",
							dataType : "json",
							success : function(res) {

								if (res.rtnCode == "0") {
									alert("첨부파일 업로드에 성공하였습니다.");
									location.href = BASE_PATH
											+ "myNcrProgram/a/m/getProgramDetail.do?npsKeyId="
											+ _npsKeyId;
								} else {
									alert("첨부파일 업로드에 실패하였습니다.(2)");
								}
							},
							clearForm : false,
							resetForm : false,
							semantic : false,
							error : function(_xmlHttpRequest, _stateMessage,
									_errorObject) {
								alert("첨부파일 업로드에 실패하였습니다.(1)");
							}
						});

		$("#attachForm").submit();
	}

}

/**
 * ********************************************************
 * @ function : 신청서/과제물 파일리스트 조회 팝업
 * @ comment :
 * @ param : npiOprtDeptDiv = 운영주체 구분값
 * @ history : 2019-07-17 (최초작성)
 **********************************************************
 */
function fnApplyFileListPop(_npsKeyId, _fileSectionName, _stdNo, _korNm) {
	var _programGubun = $('#programGubun').val();

	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/" + _programGubun
			+ "/r/n/getRecrStdFileList.do";
	var popupParams = {
		npsKeyId : _npsKeyId,
		fimSectionName : _fileSectionName,
		stdNo : _stdNo,
		korNm : _korNm
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);

}

/**
 * ********************************************************
 * @ function : 역량정의 팝업
 * @ comment :
 * @ history : 2019-08-19 (최초작성)
 **********************************************************
 */
function fnGetAbilityDef() {
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/" + $("#programGubun").val()
			+ "/r/n/getAbilityDefPopUp.do";
	var popupParams = {} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 학생상태 반려 팝업
 * @ comment :
 * @ history : 2019-08-19 (최초작성)
 *    *********************************************************
 */
function fnRefusePopUp(_npsState, _npsKeyId) {

	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/" + $("#programGubun").val()+ "/r/n/getRefusePopUp.do";
	var popupParams = {
		npsState : _npsState,
		npsKeyId : _npsKeyId
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 계획서, 결과보고서 출력 유비폼 적용
 * @ comment :
 * @ history : 2019-08-19 (최초작성)
 **********************************************************
 */
function fnPlanUBF(_npiKeyId) {
	var _params = new Object();

	var _url = document.location.protocol + "//" + document.location.host
			+ "/UBIFORM/UView5/index.jsp";

	var n = new Date().getTime();
	var _id = "UBIFORM_" + n;

	var width = 900;
	var height = 700;
	var posx = (screen.width - width) / 2;
	var posy = (screen.height - height) / 2;
	var position = "width="
			+ width
			+ ",height="
			+ height
			+ ",top="
			+ posy
			+ ",left="
			+ posx
			+ ",resizable=0,status=0,scrollbars=no,toolbar=no,location=no,directories=no";

	var _window = window.open("", _id, position);
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", _url);
	form.setAttribute("target", _id);

	_params.projectName = "CHUNGWOON";
	_params.formName = "ncrProgramPlanPrint";
	_params.npiKeyId = _npiKeyId;

	console.log("UBF_Open .2 _params =", _params);

	for ( var _idx in _params) {
		if (_params.hasOwnProperty(_idx)) {
			var _input = document.createElement("input");
			_input.type = 'hidden';
			_input.name = _idx;
			_input.value = encodeURI(_params[_idx]);
			form.appendChild(_input);
		}
	}

	console.log("portfolio . form:", form);
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
}

/**
 * ********************************************************
 * @ function : 대표이미지 미리보기
 * @ comment :
 * @ history : 2019-08-19 (최초작성)
 *      *********************************************************
 */
// function fnOnChangeFileNmImg(obj, fileType) {
function fnOnChangeFileNmImg(obj, fileType, delYn) {
	// if (obj.value != "") {
	// var fileObjs = document.getElementsByName(obj.name);
	//
	// if(!fnChkUploadFileType(obj,fileType)){
	// return false;
	// }
	//
	// if(obj.files){
	// var reader = new FileReader();
	// reader.onload = function (e) {
	// console.log(e.target.result);
	// $("#"+obj.name+'_idx').attr('src', e.target.result);
	// }
	// reader.readAsDataURL(obj.files[0]);
	// console.log("obj.files[0] : "+obj.files[0]);
	// }
	// }

	if (obj.value != "") {
		console.log("obj.value : " + obj.value);
		console.log("obj.name : " + obj.name);

		var fileObjs = document.getElementsByName(obj.name);
		var pTagRowCnt = document
				.getElementsByName(obj.name + '_link_file_del');
		if (!fnChkUploadFileType(obj, fileType)) {
			return false;
		}

		var tagIdx = $('#' + obj.name + '_idx').val();
		var addFileInputHtml = "";
		var fileNm = obj.value.substring(obj.value.lastIndexOf("\\") + 1,
				obj.value.length);
		var appendFileNameHtml = '';
		var delTagIdx = (tagIdx - 1);

		appendFileNameHtml += '<p class="link_file_del file_box" name="'
				+ obj.name
				+ '_link_file_del" style="width:310px; height:180px;">';
		appendFileNameHtml += '<img id="'
				+ obj.name
				+ '_img"  href="javascript:void(0);" alt="'
				+ fileNm
				+ '" scr="'
				+ BASE_PATH
				+ '/contents/images/client/main/no_img.png" style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; ">';

		if (delYn == 'Y') {
			appendFileNameHtml += '<button type="button" title="삭제" id="'
					+ obj.name
					+ '_del" class="link_del" onclick="fnDelAddImgFileData(this.id,'
					+ "'','" + "ADMIN" + "'"
					+ ')"><i class="fa fa-close"></i></button>';
		}
		appendFileNameHtml += '</p>';
		if ($('#' + obj.name + '_label').parents("p").parents("td").children(
				"p").length > 2) {
			if (!isEmpty($('#npiKeyId').val())) {
				$('#' + obj.name + '_label').parents("p").parents("td")
						.children("p:last").children('button').click();
				// addFileInputHtml += '<input type="file" name="'+obj.name+'"
				// id="'+obj.name+'" class="hidden"
				// onchange="fnOnChangeFileNmImg(this,'+"'"+fileType+"','"+delYn+"'"+')">';
				// $('#'+obj.name+'_idx').parents("p").append(addFileInputHtml);

			} else {
				$('#' + obj.name + '_label').parents("p").parents("td")
						.children("p:last").remove();
			}
		}
		$('#' + obj.name + '_label').parents("p").parents("td").append(
				appendFileNameHtml);

		if (obj.files) {
			var reader = new FileReader();
			reader.onload = function(e) {
				console.log(e.target.result);
				$("#" + obj.name + '_img').attr('src', e.target.result);
			}
			reader.readAsDataURL(obj.files[0]);
			console.log("obj.files[0] : " + obj.files[0]);
		}

	}
}

function fnDelAddImgFileData(objId, fileSubId, staffType) {

	if (isEmpty(fileSubId) == false) {
		var _url = BASE_PATH + "/cmm/fms/removeFileData.do";
		jQuery.ajax({
			type : "POST",
			url : _url,
			dataType : "json",
			data : {
				fileSubId : fileSubId
			},
			success : function(r) {
				if (r.rtnCode == '0') {
					var delObjId = objId.replace('_del', '');
					$("#" + objId).parents("p").remove();
				} else {
					alert("첨부파일 삭제에 실패 하였습니다.");
					return false;
				}
			},
			error : function(r) {
			}
		});

	} else {
		var delObjId = objId.replace('_del', '');
		$("#" + objId).parents("p").remove();
	}
}

/**
 * ********************************************************
 * @ function : 참여대학/학과 인풋변경
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */

function fnChangeJoinType(typeVlaue) {
	$("#colgPartDepartTr").hide();
	$("#partDepartTr").hide();
	if (typeVlaue == 'COLG') {
		$("#colgPartDepartTr").show();
	} else if (typeVlaue == 'SUST') {
		$("#partDepartTr").show();
	}
}

/**
 * ********************************************************
 * @ function : 참여대학 삭제
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */

function removeColgPartDepart() {
	var _rowCount = parseInt($("#colgTableTbodyList tr").length)
			+ (parseInt($("#colgTableTbody tr").length));
	$("#COLG_TR_" + _rowCount).remove();
	if (_rowCount == 0 || _rowCount == 1) {
		$("#colgTableDiv").hide();
	}
}

/**
 * ********************************************************
 * @ function : 참여학과 체크박스 셋팅
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */

function fnSetSustChkBoxForClogTd(colgCd, rowIndex) {
	var viewId = 'COLG_TD_' + rowIndex
	fnSetClogForSustCdCheckBox(colgCd, viewId, '', '참여학과', 'npiPartiDeptCd',
			true);
}

/**
 * ********************************************************
 * @ function : 참여학과 체크박스 조회
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */

function fnSetClogForSustCdCheckBox(clogCd, viewId, chkdValue, titleValue,
		valueName, useAsync, viewType) {
	var basePath = sessionStorage.getItem("contextRootPath");
	var _url = basePath + "/ncrProgramRegSTF/r/n/getColgSustCdList.do";
	var async = isNullObject(useAsync) ? true : useAsync;
	var targetView = $("#td_" + viewId);

	if (typeof targetView == "undefined") {
		return;
	}

	if (targetView.html() != '') {
		targetView.empty();
	}

	jQuery
			.ajax({
				async : async,
				type : "POST",
				url : _url,
				dataType : "json",
				data : {
					clogCd : clogCd
				},
				success : function(r) {
					if (r.beanlist.length > 0) {
						for (var idx = 0; idx < r.beanlist.length; idx++) {
							var obj = r.beanlist[idx];
							var checked = '';
							if (chkdValue == "") {
								checked = 'checked';
							} else {
								checked = chkdValue.indexOf(obj.DEPT_CD) != -1 ? 'checked'
										: '';
							}
							if (viewType == 'MODIFY') {
								targetView
										.append('<p class="ad_input_row">'
												+ '<input name="'
												+ valueName
												+ '" class="check '
												+ viewId
												+ 'Check '
												+ viewId
												+ 'All" id="'
												+ viewId
												+ idx
												+ '" type="checkbox" value="'
												+ obj.DEPT_CD
												+ '" title="'
												+ titleValue
												+ '" '
												+ checked
												+ ' onchange="partiDeptCdChkChg(this, \''
												+ obj.DEPT_KOR_NM
												+ '\')">'
												+ '<label class="check_label check_black" for="'
												+ viewId
												+ idx
												+ '">'
												+ obj.DEPT_KOR_NM
												+ '</label>'
												+ '</p>');
								if ($("#" + viewId + idx).is(":checked")) {
									targetView
											.append('<input type="hidden" name="npiPartiDeptNm" value="'
													+ obj.DEPT_KOR_NM + '">');
								}
							} else {
								targetView
										.append('<p class="ad_input_row">'
												+ '<input name="'
												+ valueName
												+ '" class="check '
												+ viewId
												+ 'Check '
												+ viewId
												+ 'All" id="'
												+ viewId
												+ idx
												+ '" type="checkbox" value="'
												+ obj.DEPT_CD
												+ '" title="'
												+ titleValue
												+ '" '
												+ checked
												+ ' onchange="partiDeptCdChkChg(this, \''
												+ obj.DEPT_KOR_NM
												+ '\')">'
												+ '<label class="check_label check_black" for="'
												+ viewId
												+ idx
												+ '">'
												+ obj.DEPT_KOR_NM
												+ '</label>'
												+ '</p>'
												+ '<input type="hidden" name="npiPartiDeptNm" value="'
												+ obj.DEPT_KOR_NM + '">');
							}
						}
					}
				},
				error : function(r) {
					console.log("학과코드 오류가 발생하였습니다.()");
				}
			});
}

/**
 * ********************************************************
 * @ function : 프로그램 코드 등록/수정 팝업
 * @ history : 2019-0221 (최초작성)
 * *********************************************************
 */
function fnNcrProgramCodeMngPopUp(codeType, viewType, pciKeyId) {
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var basePath = sessionStorage.getItem("contextRootPath");
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = basePath
			+ "/ncrProgramCodeMng/r/n/getProgramCodeListDetailPopUp.do"; // 팝업
																			// 내용을
																			// 호출하는
																			// url
	var popupParams = {
		viewType : viewType,
		pciKeyId : pciKeyId,
		codeType : codeType
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 구분별 입력칸 DISPLAY 관리
 * @ history : 2019-0221 (최초작성)
 * *********************************************************
 */
function fnShowMngDiv(val, typeNm) {
	if (typeNm == 'npiCounselYn') {
		$("#npiCounselY_Tr").hide();
		$("#npiCounselN_Tr").hide();
		if (val == 'Y') {
			$("#npiCounselY_Tr").show();
			$("#npiPartyTime").val('');
			$("#npiLevel").val('');
			$("#npiPartyTime").removeClass('emptyChkByClass');
			$("#npiLevel").removeClass('emptyChkByClass');

			$("#npiStanMileScore").addClass('emptyChkByClass');
			$("#npiMaxAckCnt").addClass('emptyChkByClass');

			$("#npiApplyMustYn").attr("disabled", true);
			$("#npiApplyFileY").attr("disabled", true);
			$("#npiHomeWorkY").attr("disabled", true);
			$("#npiApplCertiY").attr("disabled", true);
			$("#npiPreRschY").attr("disabled", true);
			$("#npiSatisRschY").attr("disabled", true);

		} else {
			$("#npiCounselN_Tr").show();
			$("#npiStanMileScore").val('');
			$("#npiMaxAckCnt").val('');
			$("#npiStanMileScore").removeClass('emptyChkByClass');
			$("#npiMaxAckCnt").removeClass('emptyChkByClass');

			$("#npiPartyTime").addClass('emptyChkByClass');
			$("#npiLevel").addClass('emptyChkByClass');

			$("#npiApplyMustYn").attr("disabled", false);
			$("#npiApplyFileY").attr("disabled", false);
			$("#npiHomeWorkY").attr("disabled", false);
			$("#npiApplCertiY").attr("disabled", false);
			$("#npiPreRschY").attr("disabled", false);
			$("#npiSatisRschY").attr("disabled", false);

		}

	} else if (typeNm == 'npiCodeType') {
		$(".npiTitle_NEW_SubDiv").hide();
		$(".npiTitle_CON_SubDiv").hide();

		// $("#npiUpProgramCdSel option:eq(0)").prop("selected", true);
		// $("#select2-chosen-1").text("상위 프로그램을 선택해 주세요.");
		//
		// $("#npiProgramCdSel option:eq(0)").prop("selected", true);
		// $("select#npiProgramCdSel option").remove();
		// $("#select2-chosen-2").text("중위 프로그램을 선택해 주세요.");
		// $("#npiProgramCd").val("");

		if (val == 'NEW') {
			$(".npiTitle_NEW_SubDiv").show();
			$("#npiProgramTitleSelCon option:eq(0)").prop("selected", true);
			$("select#npiProgramTitleSelCon option").remove();
			$("#npiProgramTitleSelCon").removeClass('emptyChkByClass');
			$("#npiTitleNew").addClass('emptyChkByClass');
			$("input[name=npiOperatCntTypeCON]").prop("disabled", true);
			$("input[name=npiOperatCntTypeNEW]").prop("disabled", false);

		} else {
			$(".npiTitle_CON_SubDiv").show();
			$("#npiTitleNew").val("");
			$("#npiTitleNew").removeClass('emptyChkByClass');
			$("input[name=npiOperatCntTypeCON]").prop("disabled", false);
			$("input[name=npiOperatCntTypeNEW]").prop("disabled", true);
			$("#npiProgramTitleSelCon").addClass('emptyChkByClass');
			fnSetNcrProgramTitle();
		}

	} else if (typeNm == 'npiType') {
		$("#npiTypeSubDiv").hide();

		if (val == 'NCR_T02_C02') {
			$("#npiTypeSubDiv").show();
			$("#npiTMinCnt").addClass('emptyChkByClass');
			$("#npiTMaxCnt").addClass('emptyChkByClass');
			$("#npiPreRschN").trigger("click");
			$("#npiPreRschY").attr("disabled",true);
			$("#npiCoreDiagN").trigger("click");
			$("#npiCoreDiagY").attr("disabled",true);

		} else {
			$("#npiTypeSubDiv").hide();
			$("#npiTMinCnt").val('');
			$("#npiTMaxCnt").val('');
			$("#npiTMinCnt").removeClass('emptyChkByClass');
			$("#npiTMaxCnt").removeClass('emptyChkByClass');
			$("#npiPreRschY").attr("disabled",false);
			$("#npiCoreDiagY").attr("disabled",false);
		}
	}
}

function fnSetUpNcrProgramCode(upCode, selValue) {
	if (isEmpty(selValue)) {
		$("select#npiProgramCdSel option").remove();
	}
	var progracmCnt = fnGetNcrProgramSubCode(upCode, "npiProgramCdSel",
			selValue, '중위프로그램을 선택해주세요', false);
	// 중위 코드 있으면 유효성 추가
	// if ($("#npiProgramCdSel option").length > 1){
	// $("#npiProgramCdSel").addClass("emptyChkByClass");
	// }else{
	// $("#npiProgramCdSel").removeClass("emptyChkByClass");
	// }
}

function fnSetNcrProgramTitle(programCd, selValue) {
	if (isEmpty(selValue)) {
		$("select#npiProgramTitleSelCon option").remove();
	}
	var progracmCnt = fnGetNcrProgramTitle(programCd, "npiProgramTitleSelCon",
			selValue, '프로그램명을 선택해주세요', false);
}

/**
 * ********************************************************
 * @ function : fnSetUpNcrProgramCodeCnt
 * @ comment : 프로그램 상위코드 갯수 조회
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnSetUpNcrProgramCodeCnt(upCode) {
	var upCodeCnt = 0;
	var _url = BASE_PATH + "/ncrProgramRegSTF/r/n/getNcrProgramCodeCnt.do";
	$.ajax({
		url : _url,
		type : "post",
		async : false,
		dataType : 'json',
		data : {
			pscCousCd : upCode
		},
		success : function(res) {
			upCodeCnt = parseInt(res.programCodeCnt) + parseInt(1);
		}
	});
	return upCodeCnt;
}

/**
 * ********************************************************
 * @ function : fnGetNcrProgramTitle
 * @ comment : 프로그램 명
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnGetNcrProgramTitle(comnCdPcodeId, viewId, selValue, allValue,
		useAsync) {
	var basePath = sessionStorage.getItem("contextRootPath");

	if (typeof basePath == "undefined" && basePath(allValue)
			|| basePath == null || basePath == 'null') {
		basePath = basePathClient;
	}
	var _url = basePath + "/ncrProgramRegSTF/r/n/getNcrProgramTitleSel.do";
	var async = isNullObject(useAsync) ? true : useAsync;
	var targetView = $("#" + viewId);

	// if(comnCdPcodeId == ""){return false;}

	if (typeof targetView == "undefined") {
		return;
	}

	if (typeof allValue != "undefined" && !isEmpty(allValue)) {
		targetView.children().remove().end().append(
				'<option value="">' + allValue + '</option>');
	}

	jQuery.ajax({
		async : async,
		type : "POST",
		url : _url,
		dataType : "json",
		data : {
		// programCd : comnCdPcodeId
		},
		success : function(r) {
			if (r.beanlist.length > 0) {
				for (var idx = 0; idx < r.beanlist.length; idx++) {
					var obj = r.beanlist[idx];
					if (typeof selValue != "undefined"
							&& selValue == obj.NPI_KEY_ID) {
						targetView.append("<option value='" + obj.NPI_KEY_ID
								+ "' selected>" + obj.NPI_TITLE + "</option>");
					} else {
						targetView.append("<option value='" + obj.NPI_KEY_ID
								+ "'>" + obj.NPI_TITLE + "</option>");
					}
				}
			}
		},
		error : function(r) {
			console.log("프로그램 조회중 오류가 발생하였습니다.(" + comnCdPcodeId + ")");
		}
	});
	return;
}

/**
 * ********************************************************
 * @ function : fnGetNcrProgramSubCode
 * @ comment : 프로그램 중분류 코드값
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnGetNcrProgramSubCode(comnCdPcodeId, viewId, selValue, allValue,
		useAsync) {
	var basePath = sessionStorage.getItem("contextRootPath");

	if (typeof basePath == "undefined" && basePath(allValue)
			|| basePath == null || basePath == 'null') {
		basePath = basePathClient;
	}
	var _url = basePath + "/ncrProgramRegSTF/r/n/getNcrProgramCodeSel.do";
	var async = isNullObject(useAsync) ? true : useAsync;
	var targetView = $("#" + viewId);

	if (comnCdPcodeId == "") {
		return false;
	}

	if (typeof targetView == "undefined") {
		return;
	}

	if (typeof allValue != "undefined" && !isEmpty(allValue)) {
		targetView.children().remove().end().append(
				'<option value="">' + allValue + '</option>');
	}

	jQuery.ajax({
		async : async,
		type : "POST",
		url : _url,
		dataType : "json",
		data : {
			pscCousCd : comnCdPcodeId
		},
		success : function(r) {
			if (r.beanlist.length > 0) {
				for (var idx = 0; idx < r.beanlist.length; idx++) {
					var obj = r.beanlist[idx];
					if (typeof selValue != "undefined"
							&& selValue == obj.PSC_SUBJ_CD) {
						targetView
								.append("<option value='" + obj.PSC_SUBJ_CD
										+ "' selected>" + obj.PSC_SUBJ_NM
										+ "</option>");
					} else {
						targetView.append("<option value='" + obj.PSC_SUBJ_CD
								+ "'>" + obj.PSC_SUBJ_NM + "</option>");
					}
				}
			}
		},
		error : function(r) {
			console.log("중분류 프로그램 조회중 오류가 발생하였습니다.(" + comnCdPcodeId + ")");
		}
	});
	return;
}

/**
 * ********************************************************
 * @ function : fnSetProgramCode
 * @ comment : 프로그램 코드 셋팅
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnSetProgramCode(porgramCd) {
	// $("#npiProgramCd").val(porgramCd);
	var npiCodeType = $('input[name="npiCodeType"]:checked').val();
	if (npiCodeType == "NEW") {
		fnSetProgramCntPtag(porgramCd);
	}
}

/**
 * ********************************************************
 * @ function : fnSetProgramCntPtag
 * @ comment : 프로그램 차수 조회
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnSetProgramCntPtag(programSubCode) {
	var npiCodeType = $('input[name="npiCodeType"]:checked').val();
	if (npiCodeType == "NEW") {
		$("#npiProgramChaCnt").val("1");
		$("#programCodeCntPtagNew").text("1");
	} else {
		var upCodeCnt = 0;
		var _url = BASE_PATH + "/ncrProgramRegSTF/r/n/getNcrProgramChaCnt.do";
		$.ajax({
			url : _url,
			type : "post",
			async : false,
			dataType : 'json',
			data : {
				programSubCode : programSubCode
			},
			success : function(res) {
				subCodeCnt = parseInt(res.programCodeCnt) + parseInt(1);
				$("#npiProgramChaCnt").val(subCodeCnt);
				$("#programCodeCntPtagCon").text(subCodeCnt);

			}
		});
	}

}

/**
 * ********************************************************
 * @ function : 연계 교과목 추가 삭제
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function addConRcrProgram(rcrProgramCd, rcrPrrogramCdNm) {
	$tableTr = $("#conRrcProgramTd");
	var _rowCount = $("#conRrcProgramTd p").length;
	// console.log("check : "+_rowCount);
	var conRcrProgramTag = "";
	if (_rowCount >= 3) {
		alert("연계 교과목 설정은 3개까지만 가능 합니다.");
		return false;
	}

	if (isEmpty(rcrProgramCd)) {
		rcrProgramCd = "";
	}
	;
	if (isEmpty(rcrPrrogramCdNm)) {
		rcrPrrogramCdNm = "";
	}
	;

	conRcrProgramTag = '<div name ="conRcrProgramDiv" id="conRcrProgramDiv_'
			+ _rowCount + '">';
	conRcrProgramTag += '<p class="ad_search_row mg_t10" id="conRcrProgramP_'
			+ _rowCount + '" >';
	conRcrProgramTag += '<input type="text" class="form-control" name="npiConRcrProgramCodeNm" id="npiConRcrProgramCodeNm_'
			+ _rowCount
			+ '" placeholder="검색어를 입력하세요" title="연계교과목" value="'
			+ rcrPrrogramCdNm + '">';
	conRcrProgramTag += '<button type="button" class="btn btn-primary btn_form btn_search" onclick="fnOpenConRcrProgramPopUp('
			+ "'"
			+ _rowCount
			+ "'"
			+ ');"><i class="fa fa-search"></i>검색</button>';
	conRcrProgramTag += '<input type="hidden" class="ad_formstyle" name="npiConRcrProgramCode"  id="npiConRcrProgramCode_'
			+ _rowCount + '" value="' + rcrProgramCd + '">';
	conRcrProgramTag += '</p>';
	conRcrProgramTag += '</div>';
	$("#conRrcProgramTd").append(conRcrProgramTag);
}

/** 삭제* */
function removeConRcrProgram() {
	var _rowCount = $("#conRrcProgramTd p").length;
	var conRrcProgramTd = document.getElementById("conRrcProgramTd");
	var conRcrProgramDiv = document.getElementsByName("conRcrProgramDiv");
	var childCount = typeof conRcrProgramDiv == "undefined" ? 0
			: conRcrProgramDiv.length;
	conRrcProgramTd.removeChild(conRcrProgramDiv[childCount - 1]);
}

/**
 * ********************************************************
 * @ function : 연계교과목 조회 팝업창
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 * *********************************************************
 */
function fnOpenConRcrProgramPopUp(idx) {
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/ncrProgramRegSTF/r/n/goConRcrProgramPopUp.do";
	var popupParams = {
		idx : idx
	}; // 팝업 호출시의 파라미터업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 연계 비교과목 추가 삭제
 * @ comment :
 * @ history : 2017-11-07 (최초작성)
 * *********************************************************
 */
function addConNcrProgram(ncrProgramCd, ncrPrrogramCdNm) {

	$tableTr = $("#conNrcProgramTd");
	var _rowCount = $("#conNrcProgramTd p").length;
	// console.log("check : "+_rowCount);
	var conNcrProgramTag = "";
	if (_rowCount >= 3) {
		alert("연계 비교과목 설정은 3개까지만 가능 합니다.");
		return false;
	}

	if (isEmpty(ncrProgramCd)) {
		ncrProgramCd = "";
	}
	;
	if (isEmpty(ncrPrrogramCdNm)) {
		ncrPrrogramCdNm = "";
	}
	;

	conNcrProgramTag = '<div name ="conNcrProgramDiv" id="conNcrProgramDiv_'
			+ _rowCount + '">';
	conNcrProgramTag += '<p class="ad_search_row mg_t10" id="conNcrProgramP_'
			+ _rowCount + '" >';
	conNcrProgramTag += '<input type="text" class="form-control" name="npiConNcrProgramCodeNm" id="npiConNcrProgramCodeNm_'
			+ _rowCount
			+ '" placeholder="검색어를 입력하세요" title="연계비교과목" value="'
			+ ncrPrrogramCdNm + '">';
	conNcrProgramTag += '<button type="button" class="btn btn-primary btn_form btn_search" onclick="fnOpenConNcrProgramPopUp('
			+ "'"
			+ _rowCount
			+ "'"
			+ ');"><i class="fa fa-search"></i>검색</button>';
	conNcrProgramTag += '<input type="hidden" class="ad_formstyle" name="npiConNcrProgramCode"  id="npiConNcrProgramCode_'
			+ _rowCount + '" value="' + ncrProgramCd + '">';
	conNcrProgramTag += '</p>';
	conNcrProgramTag += '</div>';
	$("#conNrcProgramTd").append(conNcrProgramTag);
}

/** 삭제* */
function removeConNcrProgram() {
	var _rowCount = $("#conNrcProgramTd p").length;
	var conNrcProgramTd = document.getElementById("conNrcProgramTd");
	var conNcrProgramDiv = document.getElementsByName("conNcrProgramDiv");
	var childCount = typeof conNcrProgramDiv == "undefined" ? 0
			: conNcrProgramDiv.length;
	conNrcProgramTd.removeChild(conNcrProgramDiv[childCount - 1]);
}

/**
 * ********************************************************
 * @ function : 연계비교과목 조회 팝업창
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 * *********************************************************
 */
function fnOpenConNcrProgramPopUp(idx) {
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/ncrProgramRegSTF/r/n/goConNcrProgramPopUp.do";
	var popupParams = {
		idx : idx
	}; // 팝업 호출시의 파라미터업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * ********************************************************
 * @ function : 계획성 평가 계산
 * @ comment :
 * @ history : 2019-02-18 (최초작성)
 * *********************************************************
 */

function fnSetCalcPlanScore() {
	var tempScore = 0;
	var calScore = 0;
	for (var idx = 1; idx <= 11; idx++) {
		if (isEmpty($('input[name="npePlanEvalQus' + idx + '"]:checked').val())) {
			tempScore = 0;
		} else {
			tempScore = $('input[name="npePlanEvalQus' + idx + '"]:checked')
					.val();
		}
		calScore += parseInt(tempScore);
	}

	$("#planQusSumTd").text(calScore + "점");
	$("#npeSumScore").val(calScore);

	$("#planQusAvgTd").text(
			(parseInt(calScore) / parseInt(11)).toFixed(1) + "점");
	$("#npeAvgScore").val((parseInt(calScore) / parseInt(11)).toFixed(1));
}

function fnSetRcrProgramModify(rcrProgramCd, rcrPrrogramCdNm) {
	var rcrProgramCdArry = [];
	var rcrProgramCdNmArry = [];

	if (!(isEmpty(rcrProgramCd) && isEmpty(rcrPrrogramCdNm))) {
		rcrProgramCdArry = rcrProgramCd.split(",");
		rcrProgramCdNmArry = rcrPrrogramCdNm.split(",");
	}

	for (var idx = 0; idx < rcrProgramCdArry.length; idx++) {
		addConRcrProgram(rcrProgramCdArry[idx], rcrProgramCdNmArry[idx]);
	}
}

function fnSetNcrProgramModify(ncrProgramCd, ncrPrrogramCdNm) {
	var ncrProgramCdArry = [];
	var ncrProgramCdNmArry = [];

	if (!(isEmpty(ncrProgramCd) && isEmpty(ncrPrrogramCdNm))) {
		ncrProgramCdArry = ncrProgramCd.split(",");
		ncrProgramCdNmArry = ncrPrrogramCdNm.split(",");
	}

	for (var idx = 0; idx < ncrProgramCdArry.length; idx++) {
		addConNcrProgram(ncrProgramCdArry[idx], ncrProgramCdNmArry[idx]);
	}
}

/**
 * **************************************
 * @ function : 팀 코드 인풋 추가
 * @ comment :
 * @ param : teamNm
 * @ param : teamCd
 * @ history : 2019-02-20 (최초작성)
 * ***************************************
 */
function fnAddNcrTeamCdList(teamNm, teamCd) {
	$tableTr = $("#teamMngInputTd");
	var _rowCount = $("#teamMngInputTd div .removable_input").length;
	var teamInputTag = "";
	if (isEmpty(teamNm)) {
		teamNm = '';
	}
	if (isEmpty(teamCd)) {
		teamCd = '';
	}

	teamInputTag += '<div class="col-xs-4 mg_t10"  id="ncrTeamDivTag_'
			+ _rowCount + '" >';
	teamInputTag += '	<div class="removable_input">';
	teamInputTag += '		<input type="text" class="form-control" name="ncrTeamNm" id="ncrTeamNm_'
			+ _rowCount + '" placeholder="" value="' + teamNm + '">';
	teamInputTag += '		<input type="hidden" name="ncrTeamKeyId" id="ncrTeamKeyid_'
			+ _rowCount + '" value="' + teamCd + '">';
	teamInputTag += ' 		<button type="button" onclick="fnDelNcrTeamCodeInfo('
			+ "'" + teamCd + "','" + _rowCount + "'" + ')" >x</button>';
	teamInputTag += '	</div>';
	teamInputTag += '</div>';
	$("#teamMngInputTd").append(teamInputTag);
}

/**
 * **************************************
 * @ function : 프로그램 이력 팝업
 * @ comment :
 * @ param :
 * @ history : 2019-05-07 (최초작성)
 * ***************************************
 */
function fnOpenNcrHisPopUp(npiKeyId, npsStdNo) {
	var _programGubun = $('#programGubun').val();
	$('#POPUP_OPEN_BTN').trigger('click');

	$.ajaxSetup({
		cache : false
	});

	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/" + _programGubun
			+ "/r/n/goNcrProgramHisListPopUp.do";
	var popupParams = {
		npiKeyId : npiKeyId,
		npsStdNo : npsStdNo
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 * **************************************
 * @ function : 포트폴리오 팝업
 * @ comment :
 * @ param :
 * @ history : 2019-05-07 (최초작성)
 * ***************************************
 */
function fnOpenPortfolioPopUp(stdNo, ck, _portType) {
	var url = BASE_PATH + "/cmm/fms/goOnPrintPopUp.do?stdNo=" + stdNo
			+ "&p1=Y&p2=Y&p3=Y&p4=Y&p5=Y&p6=Y&p7=Y&adPopYn=" + ck
			+ "&portType=" + _portType
	window
			.open(
					url,
					"selectPrintForm",
					"toolbar=no,directories=no,scrollbars=yes,resizable=no,status=no,menubar=no,width=1200, height=830, left=100");
}

/**
 * **************************************
 * @ function : 상담이력 팝업
 * @ comment :
 * @ param :
 * @ history : 2019-05-07 (최초작성)
 * ***************************************
 */
function fnOpenCounselHisPopUp(npiKeyId, npsStdNo) {
	var _programGubun = $('#programGubun').val();
	$('#POPUP_OPEN_BTN').trigger('click');

	$.ajaxSetup({
		cache : false
	});

	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH + "/" + _programGubun
			+ "/r/n/goCounselHisListPopUp.do";
	var popupParams = {
		npiKeyId : npiKeyId,
		npsStdNo : npsStdNo
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);

}

/**
 * ********************************************************
 * @ function : fnChkAttendanceYn
 * @ comment : 출석부 종결 여부 확인
 * @ history : 2019-05-10 (최초작성)
 * *********************************************************
 */
function fnChkAttendanceYn(npiKeyId) {
	var rtnIsSuccess = false;
	var _url = BASE_PATH + "/cmm/fms/chkAttendanceYn.do";
	$.ajax({
		url : _url,
		type : "post",
		async : false,
		dataType : 'json',
		data : {
			npiKeyId : npiKeyId
		},
		success : function(res) {
			if (res.addendanctYn == "Y") {
				rtnIsSuccess = true;
			} else {
				rtnIsSuccess = false;
			}

		}
	});

	return rtnIsSuccess;
}

/**
 * 참여 대학/학과 구분에서 대학별 학과 체크박스 클릭할때 히든 nm값 삭제 추가
 *
 */
function partiDeptCdChkChg(_obj, _deptNm) {
	if ($(_obj).is(":checked")) {
		$(_obj).parent("p").after(
				'<input type="hidden" name="npiPartiDeptNm" value="' + _deptNm
						+ '">');
	} else {
		$(_obj).parent("p").next('input').remove();
	}
}

/**
 * ********************************************************
 * @ function : 신청자 현황 그래프
 * @ comment :
 * @ history : 2019-05-22 (최초작성)
 * *********************************************************
 */
function fnApplyStdStateGraph(divNm, dataArry, categoriesArry) {
	var options = {
		series : dataArry,
		chart : {
			type : 'bar',
			height : 220,
			stacked : true
		},
		colors : [ '#FF4560','#008FFB' ],
		plotOptions : {
			bar : {
				horizontal : true,
				barHeight : '80%',
			},
		},
		dataLabels : {
			enabled : false
		},
		stroke : {
			width : 1,
			colors : [ "#fff" ]
		},

		grid : {
			xaxis : {
				lines : {
					show : false
				}
			}
		},
		yaxis : {
			min : -100,
			max : 100,
			title : {},
		},
		tooltip : {
			shared : false,
			x : {
				formatter : function(val) {
					return val
				}
			},
			y : {
				formatter : function(val) {
					return Math.abs(val) + "%"
				}
			}
		},
		xaxis : {
			categories : [ '1학년', '2학년', '3학년', '4학년'],
			labels : {
				formatter : function(val) {
					return Math.abs(Math.round(val)) + "%"
				}
			}
		},
//		legend :{
//			inverseOrder : true
//		}
	};

	var chart = new ApexCharts(document.querySelector("#" + divNm), options);
	chart.render();
	$("#applyStdStateDivGraphLoading").hide();
}

/*
*********************************************************
@ function : 신청자 평균 역량 그래프
@ comment  :
@ history  : 2020-11-10 (최초작성)
**********************************************************
*/
function drawApplyStdAvgAbilityGraph(divNm,dataArry, categoryNm){
	var options = {
        series: [{
        data: dataArry
        ,name : '평균'
      }],
        chart: {
        type: 'bar',
        height: 235
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: categoryNm
      }
      };

      var chart = new ApexCharts(document.querySelector("#"+divNm), options);
      chart.render();
}
