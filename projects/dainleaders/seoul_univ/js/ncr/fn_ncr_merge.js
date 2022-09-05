/**
 * 비교과 프로그램/동료평가 프로그램에 사용되는 기능 정의
  */

var BASE_PATH =  sessionStorage.getItem("contextRootPath");



/**
*********************************************************
@ function : 만족도 조사/동료평가 평가문항
@ comment  :
@ param    : satRschType = 만족도 조사 / 사전만족도 / 등료평가 구분
@ param    : obj = 오브젝트
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
function fnSatisOnOff(satRschType, obj) {

	// 팀이고 사용 눌렀을때-사전조사

	var scaleQusArry = "";
	/** 5점척도 **/
	var openQusArry = "";
	/** 주관식 **/
	var choiceQusArry = "";
	/** 자유형객관식 **/
	var choiceAnsQusArry = "";
	/** 자유형객관식 답변 **/

	if (satRschType == "std") {
//		scaleQusArry = '프로그램은 전반적으로 유익하였습니까?';
//		scaleQusArry += ',프로그램의 목표는 명확하였습니까?';
//		scaleQusArry += ',프로그램의 내용은 주제에 적합하게 구성되었습니까?';
//		scaleQusArry += ',프로그램 강사는 전문성 (내용과 전달력)이 높았습니까?';
//		scaleQusArry += ',프로그램이 앞으로 수업(혹은 학습)에 도움이 될 것으로 생각됩니까? ,';
//
//
//		scaleQusArry = '본 프로그램에 대해 전반적으로 만족하십니까?';
//		scaleQusArry += ',본 프로그램 내용의 수준은 적절하다고 생각하십니까?';
//		scaleQusArry += ',본 프로그램에 소요되는 시간은 적절하다고 생각하십니까?';
//		scaleQusArry += ',본 프로그램 종료후，참여 전에 가졌던 기대감에 비해 만족감은 향상되었습니까?';
//		scaleQusArry += ',본 프로그램을 통해 해당 내용과 관련된 지식이나 기술을 습득하였습니까?';
//		scaleQusArry += ',본 교육 장소 및 기타 시설에 대해 만족했습니까?';
//		scaleQusArry += ',본 프로그램이 다음에 또 진행된다면 다른 친구，선후배들에게도 추천하시겠습니까?';
//		openQusArry = '희망하는 비교과 프로그램이 있다면 자유롭게 기록해 주세요.';
//		openQusArry += ',이번 프로그램에서 만족한 점이 있다면 간략하게 기술하여 주세요.';
//		openQusArry += ',이번 프로그램에서 개선해야 할 점이 있다면 간략하게 기술하여 주세요.';
		scaleQusArry = '이 프로그램은 전체적으로 만족스러웠다';
		scaleQusArry += ',프로그램 준비와 강의 내용이 충실하였다.';
		scaleQusArry += ',교육 방법이 효과적이었다.';
		scaleQusArry += ',이 프로그램은 매우 만족스러우므로 주위에 수강을 권고하겠다.';
		scaleQusArry += ',과제나 시험에 대한 담당 강의자의 피드백은 도움이 되었다.';
		scaleQusArry += ',강의자는 결강없이 충실히 진행되었다.';
		scaleQusArry += ',이 프로그램을 통해 내 역량이 향상되었다.';
		openQusArry   = '이 프로그램에서 좋았던 점을 적어주십시오.';
		openQusArry  += ',이 프로그램에서 개선할 점이 있다면 적어주십시오.';

	}
	if (satRschType == "pre") {

		/*
		choiceQusArry = "본 프로그램에 참여하게 된 계기는 무엇입니까?";
		choiceQusArry += ",본 프로그램의 참여 목적은 무엇입니까?";
		choiceQusArry += ",본 프로그램의 본인의 참여 목적에 얼마나 도움이 될 것이라고 생각하십니까?";
		choiceQusArry += ",본 프로그램을 가장 향상될 것으로 기대하는 것은 무엇입니까?";
		choiceAnsQusArry = "1^학과차원의 독려";
		choiceAnsQusArry += ",1^친구의 권유";
		choiceAnsQusArry += ",1^새로운 프로그램에 대한 호기심";
		choiceAnsQusArry += ",1^학업에 도움";
		choiceAnsQusArry += ",1^기타";
		choiceAnsQusArry += ",2^관련된 지식 향상";
		choiceAnsQusArry += ",2^취업에 도움";
		choiceAnsQusArry += ",2^자기개발";
		choiceAnsQusArry += ",2^정서적 만족감";
		choiceAnsQusArry += ",2^기타";
		choiceAnsQusArry += ",3^매우 도움이 될 것이다.";
		choiceAnsQusArry += ",3^도움이 될 것이다.";
		choiceAnsQusArry += ",3^보통일 것이다.";
		choiceAnsQusArry += ",3^도움이 되지 않을 것이다.";
		choiceAnsQusArry += ",3^매우 도움 되지 않을 것이다.";
		choiceAnsQusArry += ",4^학습에 대한 관심 증가";
		choiceAnsQusArry += ",4^전공 학습에 도움";
		choiceAnsQusArry += ",4^시험공부에 도움";
		choiceAnsQusArry += ",4^능동적 태도 및 자신감 증진";
		choiceAnsQusArry += ",4^선후배 혹은 동료 간 유대감 강화";
		choiceAnsQusArry += ",4^학교에 대한 애교심 증대";
		choiceAnsQusArry += ",4^기타";
		*/
	}

	if (satRschType == "peer") {
		openQusArry = "[표현] 의미가 명료하고 맞춤법 띄어쓰기 등 어법에 맞는 문장을 구사하였는가?"
			+",[구성] 글의 각 단락을 논리적으로 전개하였는가?"
			+",[내용] 주제가 분명하며 내용이 인상적이고 깊이가 있는가?";
	}
	fnSatisOnOffAjax(satRschType, obj, scaleQusArry, openQusArry,choiceQusArry, choiceAnsQusArry);
}

/**
*********************************************************
@ function : 예산 tr 컨트롤
@ comment  :
@ history  : 2017-11-07 (최초작성)
			 2021 - 11-02(화면 수정)
**********************************************************
 **/
var trIndex =$("#ncrBudgetTable").find("tbody tr").length - 1;
var subIndex = 1;
/**tr 추가**/
function addBudget() {
	$tableTr = $("#ncrBudgetTable");
	var budgetSum = 0;

	/**예산 합계**/
	$('input[name=nbiBudgetPrice]').each(function(idx) {
			var tmpVal = $(this).val();
			if ($(this).val() == null || $(this).val() == '') {
				tmpVal = 0;
			}
			budgetSum = parseInt(budgetSum) + parseInt(uncomma(tmpVal));
	});

	budgetSum = comma(budgetSum);

	if ($tableTr.find("tbody tr").length > 5) {
		alert("예산은 5개까지 추가가능합니다.");
		return false;
	}

	/*$tableTr.find("tbody tr:last").remove();
	$tableTr.find("tbody").append(
					'<tr id="budgetTr_'+trIndex+'">'
						+'<td>'
							+'<input type="hidden" name="budgetTrCnt" id="budgetTrCnt_'+trIndex+'" value="1">'
							+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetCd" id="nbiBudgetCd" title="예산 대분류" onchange="fnBiBudgetCdSelChg(this, \'main\');" data-validation=\'{"required" : true}\' >'
								+'<option value="">예산구분을 선택해주세요.</option>'
								+'<option value="NCR_BUD_4100">인건비</option>'
								+'<option value="NCR_BUD_4200">관리운영비</option>'
								+'<option value="NCR_BUD_4300">학생경비</option>'
							+'</select>'
						+'</td>'
						+'<td>'
							+'<div class="">'
								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetSubCd" id="nbiBudgetSubCd" title="예산 항" onchange="fnBiBudgetCdSelChg(this, \'sub\');" data-validation=\'{"required" : true}\' >'
									+'<option value="">예산구분을 선택해주세요.</option>'
								+'</select>'
							+'</div>'
						+'</td>'
						+'<td>'
							+'<div class="">'
								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetThirdCd" id="nbiBudgetThirdCd" title="예산 목" onchange="fnBiBudgetCdSelChg(this, \'third\');" data-validation=\'{"required" : true}\' >'
									+'<option value="">예산구분을 선택해주세요.</option>'
								+'</select>'
							+'</div>'
						+'</td>'
						+'<td>'
							+'<div class="" id="budgetForthCdDiv_0">'
								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetForthCd" id="nbiBudgetForthCd" title="예산 세목" data-validation=\'{"required" : true}\' >'
									+'<option value="">예산구분을 선택해주세요.</option>'
								+'</select>'
							+'</div>'
						+'</td>'
						+'<td>'
							+'<div class="" id="budgetPriceDiv_0">'
								+'<input type="text" class="form-control wd_p70 ta_r dp_inline mg_r5" name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11" title="예산액" onkeyup="commaKeyUpChkSum(this);" data-validation=\'{"required" : true}\' >'
								+'<button class="btn btn-sm btn-primary" style="margin-bottom: 3px;" type="button" onclick="addSubBudget(this,\''+trIndex+'\');"><i class="fa fa-plus mg_r5"></i>추가</button>'
							+'</div>'
						+'</td>'
					+'</tr>');
	$tableTr.find("tbody").append(
				'<tr>'
					+ '<th scope="row">' + '예산 합계' + '</th>'
						+ '<td colspan="4" class="ta_c" id="budgetSum">'
						+ budgetSum + ' 원' + '</td>'
				+ '</tr>');

	trIndex++*/

	$tableTr.find("tbody tr:last").remove();
	$tableTr.find("tbody").append(
					'<tr id="budgetTr_'+trIndex+'">'
						+'<td>'
							+'<input type="hidden" name="budgetTrCnt" id="budgetTrCnt_'+trIndex+'" value="1">'
							+'<select class="form-control input-sm wd_p30 mg_r5 dp_inline" name="nbiBudgetCd" id="nbiBudgetCd" title="예산 대분류" data-validation=\'{"required" : true}\' onchange="fnCreateBudgetEtc(this);">'
								+'<option value="">예산구분을 선택해주세요.</option>'
								+'<option value="NCR_BUD_4100">교비</option>'
								+'<option value="NCR_BUD_4200">국고</option>'
								+'<option value="NCR_BUD_9999">기타</option>'
							+'</select>'
							+ '<input type="text" class="form-control wd_p30 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetMainEtc" id="nbiBudgetMainEtc" title="대분류 기타사항" value="" readonly>'
						+'</td>'
//						+'<td>'
//							+'<div class="">'
//								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetSubCd" id="nbiBudgetSubCd" title="예산 항" onchange="fnBiBudgetCdSelChg(this, \'sub\');" data-validation=\'{"required" : true}\' >'
//									+'<option value="">예산구분을 선택해주세요.</option>'
//								+'</select>'
//							+'</div>'
//						+'</td>'
//						+'<td>'
//							+'<div class="">'
//								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetThirdCd" id="nbiBudgetThirdCd" title="예산 목" onchange="fnBiBudgetCdSelChg(this, \'third\');" data-validation=\'{"required" : true}\' >'
//									+'<option value="">예산구분을 선택해주세요.</option>'
//								+'</select>'
//							+'</div>'
//						+'</td>'
//						+'<td>'
//							+'<div class="" id="budgetForthCdDiv_0">'
//								+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetForthCd" id="nbiBudgetForthCd" title="예산 세목" data-validation=\'{"required" : true}\' >'
//									+'<option value="">예산구분을 선택해주세요.</option>'
//								+'</select>'
//							+'</div>'
//						+'</td>'
						+'<td>'
							+'<div class="" id="budgetPriceDiv_0">'
								+'<input type="text" class="form-control wd_p70 ta_r dp_inline mg_r5" name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11" title="예산액" onkeyup="commaKeyUpChkSum(this);" data-validation=\'{"required" : true}\' >'
//								+'<button class="btn btn-sm btn-primary" style="margin-bottom: 3px;" type="button" onclick="addSubBudget(this,\''+trIndex+'\');"><i class="fa fa-plus mg_r5"></i>추가</button>'
							+'</div>'
						+'</td>'
					+'</tr>');
	$tableTr.find("tbody").append(
				'<tr>'
					+ '<th scope="row">' + '예산 합계' + '</th>'
						+ '<td class="ta_c" id="budgetSum">'
						+ budgetSum + ' 원' + '</td>'
				+ '</tr>');

	trIndex++

}
/**sub 예산 금액 추가*/
function addSubBudget(_obj,_trCnt) {

	var _selHtml = $(_obj).parent('div').parent('td').prev().find('select[name=nbiBudgetForthCd]').html();
	var _rowCount = $(_obj).parent('div').parent('td').children("div").length;

	$(_obj).parent('div').parent('td').prev().append(
			'<div class="pd_t5" id="budgetForthCdDiv_'+subIndex+'">'
			+'<select class="form-control input-sm wd_p80 dp_inline" name="nbiBudgetForthCd" id="nbiBudgetForthCd" title="예산 세목">'
				+_selHtml
			+'</select>'
		+'</div>'
	);
	$(_obj).parent('div').parent('td').append(
			'<div class="pd_t5 test" id="budgetPriceDiv_'+subIndex+'">'
				+'<input type="text" class="form-control wd_p70 ta_r dp_inline mg_r5" name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11"title="예산액" onkeyup="commaKeyUpChkSum(this);" value="" >'
				+'<button class="btn btn-sm btn-danger btn-danger test" style="margin-bottom: 3px;"  onclick="removeBudget(this, \'sub\', \''+_trCnt+'\');" type="button"><i class="fa fa-minus mg_r5"></i>삭제</button>'
			+'</div>'
	);

	subIndex++;

	var trCnt = parseInt(_rowCount) +1;

	$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input[name=budgetTrCnt]').val(trCnt);
	a($(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input[name=budgetTrCnt]').val());
}

/**tr 삭제**/
function removeBudget(_obj,_subYn,_trIdx) {

	if (_subYn == 'sub') {
		var _budgetTrCnt = $(_obj).parent("div").parent("td").parent("tr").children("td:eq(0)").children('input[name=budgetTrCnt]').val();
		var index= [];
		index = $(_obj).parent("div").attr("id").split("_");

		$(_obj).parent("div").parent("td").prev().children("div #budgetForthCdDiv_"+index[1]).remove();
		$(_obj).parent("div").remove();

		_budgetTrCnt = _budgetTrCnt -1;
		$("#budgetTrCnt_"+_trIdx).val(_budgetTrCnt);

	}else{
		$tableTr = $("#ncrBudgetTable");
		$("#budgetTr_"+($tableTr.find("tbody tr").length-2) ).remove();
	}

	/**예산 합계**/
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

/**기타 input란 활성화*/
function fnCreateBudgetEtc(_obj) {

	if ($(_obj).val() == 'NCR_T04_C04' || $(_obj).val() == 'NCR_T04_P02') {
		$(_obj).siblings('input[name!=budgetTrCnt]').attr('readonly',false);
		$(_obj).siblings('input[name!=budgetTrCnt]').removeAttr('style');

	}else{
		$(_obj).siblings('input[name!=budgetTrCnt]').val('');
		$(_obj).siblings('input[name!=budgetTrCnt]').attr('readonly',true);
		$(_obj).siblings('input[name!=budgetTrCnt]').attr('style','background-color:#eee;');
	}
}


/**
*********************************************************
@ function : 참여학과 추가 삭제
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function addPartDepart(npiPartiDeptCd, npiPartiDeptNm) {

	$tableTr = $("#partDepartTd");
	var _rowCount = $("#partDepartTd p").length;
	// 	console.log("check : "+_rowCount);
	var departTag = "";

	if (_rowCount > 9) {
		alert("참여학과는 10개까지만 가능 합니다.");
		return false;
	}

	if(isEmpty(npiPartiDeptCd)){ npiPartiDeptCd = "";};
	if(isEmpty(npiPartiDeptNm)){ npiPartiDeptNm = "";};

	departTag = '<div name ="partDepartDiv" id="partDepartDiv_'+_rowCount+'">';
	departTag += '<p class="ad_search_row wd_p40 mg_t10" id="partDepartP_'+_rowCount+'" >';
	departTag += '<input type="text" class="form-control" name="npiPartiDeptNm" onkeydown="fnEnterActionForDepartTd('+ "'npiPartiDept','"+ _rowCount+"'"+');"'+'id="npiPartiDeptNm_'+_rowCount+'" placeholder="검색어를 입력하세요" title="참여학과" value="'+npiPartiDeptNm+'">';
	departTag += '<button type="button" class="btn btn-primary btn_form btn_search" onclick="fnGetDeptInfo('+ "'npiPartiDept','"+ _rowCount+ "'"+ ');"><i class="fa fa-search"></i>검색</button>';
	departTag += '<input type="hidden" class="ad_formstyle" name="npiPartiDeptCd"  id="npiPartiDeptCd_'+_rowCount+'" value="'+npiPartiDeptCd+'">';
	/* departTag += '<input type="hidden" class="ad_formstyle" name="npiPartiDeptNm" id="npiPartiDeptNmData_'+_rowCount+'" value="">'; */
	departTag += '</p>';
	departTag += '</div>';

	$("#partDepartTd").append(departTag);
}
/**삭제**/
function rmvPartDepart(_obj) {
	var _rowCount = $("#partDepartTd p").length;
	var partDepartTd = document.getElementById("partDepartTd");
	var partDepartDivs = document.getElementsByName("partDepartDiv");
	var childCount = typeof partDepartDivs == "undefined" ? 0
			: partDepartDivs.length;
	partDepartTd.removeChild(partDepartDivs[childCount - 1]);
}


/**
*********************************************************
@ function : 영역 활동 코드 가져오기
@ comment  :
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnChangeAreaActCode (obj) {
	var _areaActCode = $(obj).val();
	var _areaId = obj.id;

	if (_areaId == 'npiAreaCd') {
		fnSetComnCdCombo(_areaActCode, 'npiAreaSubCd', '','선택', true);
	}else if (_areaId == 'npiAreaSubCd') {
		fnSetComnCdCombo(_areaActCode, 'npiAreaThirdCd', '','선택', true);
	}
}


/**
*********************************************************
@ function : 예산액 입력할 때마다 예산액 합계 체크
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
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
*********************************************************
@ function : 비교과 프로그램 저장
@ comment  :
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnOnClickSave(){
	var abilityDiv = "";
	var abilityCd = "";
	/** 에디터 데이터 담기
	var npiContent = CKEDITOR.instances["npiCont"].getData();
	*/
	var npiContent = $("#npiCont").val();
	$("#npiContHidden").val(npiContent);
	console.log("npiModifyCont.length: "+$("#npiModifyCont").length);
	if( $("#npiModifyCont").length > 0 ) {
		/* var npiModifyCont = CKEDITOR.instances["npiModifyCont"].getData(); */
		var npiModifyCont = $("#npiModifyCont").val();
		$("#npiModifyContHidden").val(npiModifyCont);
	}

	var deptCd = "";
	var abilityCnt = $('#abilityCnt').val();

	abilityDiv = "core";
	abilityCd ="A";

	/** 하위역량점수 퍼센트 합 상위역량점수에 셋팅 **/
	var subTotalCnt = 0;
	var checkArray = [];
	var checkCount = 0;

	for (var i = 1; i <= abilityCnt; i++) {
		if (isEmpty( $("#A00"+i+"_score").val()) ){
			tempSubAblityScore = 0;
		}else{
			tempSubAblityScore = parseInt($("#A00"+i+"_score").val());
		}
		checkArray.push(tempSubAblityScore);
	}

	/** 주요역량 값 체크 - 역량점수 중 가장 큰 값 **/
//	console.log("max: "+max);
	var max = Math.max.apply(null,checkArray);
	var maxChk = 0;
	for(var i =0;i<checkArray.length;i++){
		checkCount++;
//		console.log("checkArray["+i+"]: "+checkArray[i]);
		if(max==checkArray[i]){
			$("input[name=npiMainAbilityCd]").val('A00'+checkCount);
			maxChk++;
		}
	}

	/** 배열중 최고값과 같은것이 있다면 ( count > 1 ) **/
	if( maxChk > 1 ){
		alert("역량 비율의 최고값은 한 개여야 합니다.");
		/* 역량 비율 input focus 추가 20.12.28 bws*/
		$("input[name=A001]").focus();
		nullValidation = false;
		return false;
	}

	/** 장소 셋팅 */
	/** 장소 상세가 셀렉트 박스 */
	if( $("#npiLoc").val() != 'NCR_LOC_99' ) {
		$("input[name=npiLocDtl]").val($("#npiLocDtlSel").val());
	/** 장소 상세가 인풋박스*/
	} else {
		$("input[name=npiLocDtl]").val($("#npiLocDtlEct").val());
	}

	/** 추천대상자 eㅔ이터 셋팅 */
	/** 상대캆이 학부생 일때 */
	var npiRecomTargetDtlVar = "";
	if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T01" ) {
		/** 선택된 값 넣기 */
		$("#writeForm input[name=npiRecomTarget01]").each(function() {
			if( this.checked ) {
				npiRecomTargetDtlVar += ","+$(this).val();
			}
		});

		npiRecomTargetDtlVar = npiRecomTargetDtlVar.substring(1);
	/** 상대캆이 대학원생 일때 */
	} else if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T02" ) {
		/** 선택된 값 넣기 */
		$("#writeForm input[name=npiRecomTarget02]").each(function() {
			if( this.checked ) {
				npiRecomTargetDtlVar += ","+$(this).val();
			}
		});
		npiRecomTargetDtlVar = npiRecomTargetDtlVar.substring(1);
	/** 상대캆이 기타 일때 */
	} else if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T99" ) {
		npiRecomTargetDtlVar = $("#npiRecomTarget99").val();
	}

	$("#writeForm input[name=npiRecomTargetDtl]").val(npiRecomTargetDtlVar);

	/** 예산 콤마제어 **/
	$("input[name=nbiBudgetPrice]").each(function() {
		$(this).val(uncomma($(this).val()));
	})

	/** 참여 대학/학과 구분에 따른 처리 **/
	var joinType = $(':radio[name="npiJoinType"]:checked').val();

	if (joinType == 'COLG') {
		$("#partDepartTd_Div").empty();
	} else if (joinType == 'SUST'){
		$("#colgTableDiv").empty();
	} else if (joinType == 'ALL'){
		$("#partDepartTd_Div").empty();
		$("#colgTableDiv").empty();
	}

	// 수정중
	if ($('input[name="npiApplyFileYn"]:checked').val() == "Y") {
		if( $("#pgmKeyId").val() ==  null || $("#pgmKeyId").val() == '' ){
			//프리셋을 저장하지 않은 상태에서 비교과 프로그램을 등록할 경우 이름을 임의로 생성후 프리셋을 저장하고 진행한다.
			if( !directPreSetSave($("#npiSubject").val()+"_신청서") ){
				if( $("#pgmKeyId").val() ==  null || $("#pgmKeyId").val() == '' ){
					alert("신청서를 저장하는데 실패하였습니다. \n잠시후 다시 시도해주세요.");
					return false;
				}
			}
		}
	}

	$tableTr = $("#ncrBudgetTable");
	$("#budgetMainTrCnt").val($tableTr.find("tbody tr").length -1);

	/* 해시태그 등록 로직 추가 */
	var _tagList = '';
	$("#writeForm input[name=hashTagCont]").each(function() {
		_tagList += $(this).val();
	});
	$("#writeForm input[name=hashContent]").val(_tagList);
	/* 해시태그 등록 로직 추가 */

	$("#writeForm").submit();
}
/**
*********************************************************
@ function : 등록 전 validation
@ comment  :
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnInputValidation() {
	var nullValidation = true;
	nullValidation = fnEmptyCheckByClass();
	if(nullValidation){

		/** 역량 퍼센트 합 100 체크 */
		var abilityCd = "";
		var abilityCnt = $('#abilityCnt').val();
		var abilityScoreSum = 0;

		for (var i = 1; i <= abilityCnt; i++) {
			abilityScoreSum = abilityScoreSum + parseInt($('input[name=A00'+i+']').val());
		}

		if (abilityScoreSum != 100) {
			alert("역량의 합은 100% 여야 합니다.");
			return false;
		}

		/** 모집기간 체크 */
		if(! isCompareData('npiReqStrDate','npiReqEndDate')){nullValidation = false; return false;};
		/** 모집기간 날짜비교 */
		if (!isCompareData('npiReqStrDate', 'npiReqEndDate')) {
			return false
		};

		/** 운영기간 체크 */
		if(! isCompareData('npiActStrDate','npiActEndDate')){nullValidation = false; return false;};
		/** 운영기간 날짜비교 */
		if (!isCompareData('npiActStrDate', 'npiActEndDate')) {
			return false
		};

		/** 운영기간과 모집기간 비교**/
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //1월 == 0
		var yyyy = today.getFullYear();

		if(!$("#npiReqStrDate").val() == "" && !$("#npiActStrDate").val() == ""){
			if($("#npiReqStrDate").val() > $("#npiActStrDate").val()){
				alert("운영기간을 모집기간보다 빠르게 설정하실수 없습니다.");
				return false;
			}
		}

		/** 장소 유효성 체크 및 셋팅 */
		/** 장소 상세가 인풋박스*/
		if( $("#npiLoc").val() == 'NCR_LOC_99' ) {
			if( !$("#npiLocDtlEct").emptyCheck() ) return false;
		}

		/** 모집인원 0 이상 입력
		if ($("#npiRecrCnt").val() <= 0) {
			alert("모집인원이 0명 이상이어야 합니다.");
			nullValidation = false;
		}
		**/

		/** 참여대상 대학원일때 체크박스 체크 하였는지 확인 */
		if( $("#writeForm select[name=npiCorsLimitCd]").val() == "DIAG_T001" ) {
			if( !$("#writeForm input[name=npiCorsDtlLimitCd]").emptyCheckBox() ) return false; // 참여대상
		}

		/** 추천대상자 유효성 검사 */
		/** 상대캆이 학부생 일때 */
		if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T01" ) {
			if( !$("#writeForm input[name=npiRecomTarget01]").emptyCheckBox() ) return false; // 추천 대상자 학부생 체크 박스
		/** 상대캆이 대학원생 일때 */
		} else if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T02" ) {
			if( !$("#writeForm input[name=npiRecomTarget02]").emptyCheckBox() ) return false; // 추천 대상자 대학원생 체크 박스
		/** 상대캆이 기타 일때 */
		} else if( $("#writeForm select[name=npiRecomTargetCd]").val() == "NCR_RECOM_T99" ) {
			if( !$("#npiRecomTarget99").emptyCheck() ) return false;
		}

		if( $(':radio[name="npiJoinType"]:checked').val() == 'SUST'){
			/** 참여학과 체크 **/
			$tableTr = $("#partDepartTd");
				var _rowCount = $("#partDepartTd p").length;
				if (_rowCount > 0) {
					for (var idx = 0; idx < _rowCount; idx++) {
						if ($("#npiPartiDeptCd_" + idx).val() == '') {
							alert((parseInt(idx) + 1) + "번째 참여학과를 선택해 주세요.");
							var setHtml = '';
							setHtml +=	'<table class="table table-bordered tbl_row tbl_fixed">';
							setHtml +=		'<colgroup>';
							setHtml +=			'<col style="width:15%">';
							setHtml +=			'<col style="width:85%">';
							setHtml +=		'</colgroup>';
							setHtml +=		'<thead>';
							setHtml +=			'<tr>';
							setHtml +=				'<th scope="col" class="tbl_bgno">대학</th>';
							setHtml +=				'<th scope="col">학과</th>';
							setHtml +=			'</tr>';
							setHtml +=		'</thead>';
							setHtml +=		'<tbody id="colgTableTbody"></tbody>';
							setHtml +=	'</table>';
							$("#colgTableDiv").append(setHtml);
							$("#colgTableDiv").hide();
							nullValidation = false;
							return false;
						}
					}
				}
		}else {
			/** 참여대학 체크 **/
			$tableTr = $("#colgTableTbody");
			var _rowCount = $("#colgTableTbody tr").length;
			if (_rowCount > 0) {
				for (var idx = 0; idx < _rowCount; idx++) {
					if ($("#ncrJoinTypeClogCd_" + (parseInt(idx) + 1)).val() == '') {
						alert((parseInt(idx) + 1) + "번째 대학을 선택해 주세요.");
						nullValidation = false;
						return false;
					}
				}
			}
		}

		/** 담당자 코드 체크 **/
		if ($('#npiStfNo').val() == null || $('#npiStfNo').val() == '') {
			fnGetStaffInfo();
			nullValidation = false;
		}

		/** 신청서 Y 체크했을경우 프리셋  등록 유무 체크 **/
//		if ($('input[name="npiApplyFileYn"]:checked').val() == "Y") {
//			if( $("#pgmKeyId").val() ==  null || $("#pgmKeyId").val() == '' ){
//				alert("프리셋을 등록해주세요.");
//				return false;
//			}
//		}
		// 수정중
//		if ($('input[name="npiApplyFileYn"]:checked').val() == "Y") {
//			if( $("#pgmKeyId").val() ==  null || $("#pgmKeyId").val() == '' ){
//				//프리셋을 저장하지 않은 상태에서 비교과 프로그램을 등록할 경우 이름을 임의로 생성후 프리셋을 저장하고 진행한다.
//				if( !directPreSetSave($("#npiSubject").val()+"_신청서") ){
//					if( $("#pgmKeyId").val() ==  null || $("#pgmKeyId").val() == '' ){
//						alert("신청서를 저장하는데 실패하였습니다. \n잠시후 다시 시도해주세요.");
//						return false;
//					}
//				}
//			}
//		}

		/** 팀 선택 시, 최소, 최대인원 Check **/
		if($("#npiTeamY").is(":checked")){
			if(!$("#npiTeamMinCnt").emptyCheck()) {
				nullValidation = false;
				return false;
			}
			if(!$("#npiTeamMaxCnt").emptyCheck()) {
				nullValidation = false;
				return false;
			}

			/** 팀 선택 시, 사전조사 사용못함 **/
			if ($("#npiPreRschY").is(":checked")) {
				alert("팀 프로그램인 경우 사전조사는 진행할 수 없습니다.");
//				$("#npiPreRschN").trigger('click');
				return false;
			}
		}

		/** 사전 만족도 Null 체크 **/
		if( $('input[name=npiPreRschYn]:checked').val() == "Y"){
			if(! fnChkSatisNullchk('pre')){
				return false;
			}
		}

		/** 만족도조사 Null 체크 **/
		if( $('input[name=npiSatisRschYn]:checked').val() == "Y"){
			if(! fnChkSatisNullchk('std')){
				return false;
			}
		}

	}//nullValidation
	// return false;
	var _msg ="저장하시겠습니까?";
	if (!isEmpty($("input[name=npiKeyId]").val())) {
		_msg += "\n신청자가 있을 경우 사전조사, 만족도조사, 프리셋은 수정되지 않습니다.";
	}

	if (nullValidation) {
		if(confirm(_msg)){
			//로딩바 온
			$("#loading").show();
			return true;
		}else{
			return false;
		}
	//	return confirm("저장하시겠습니까?");
	}else{
		return nullValidation;
	}
}

/**
*********************************************************
@ function : 등록 후 결과 콜백
@ comment  :
@ param    : response
@ param    : stateMessage
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
function fnShowResult(response, stateMessage) {
	if (response.isSuccess) {
		alert('프로그램 저장에 성공하였습니다.');
		fnGoNcrProgramListAdmin(response.programGubun, response.viewType);
	} else {
		alert('프로그램 저장에 실패하였습니다.(2)');
	}
}
/**
*********************************************************
@ function : 리스트 페이지로 이동/ 수정시 해당 페이지로 리프레쉬
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
	function fnGoNcrProgramListAdmin(programGubun, viewType) {
		var basePath = sessionStorage.getItem("contextRootPath");

		//수정일때
		if (viewType == "MODIFY") {
				var _url = basePath+"/"+programGubun+"/r/m/getProgramModifyDetail.do";
				$("#detailForm").attr("action",_url).submit();

		//저장일때
		}else {
			if(programGubun.indexOf('ncr') !== -1){
				location.href = basePath+"/ncrProgramListSTF/r/m/getProgramList.do";
			}else{
				location.href = basePath+"/peerRevwListSTF/r/m/getProgramList.do";
			}
		}

	}
/**
*********************************************************
@ function : 신청서 사용 유무에 파일첨부란 제어, 필수제출여부 제어
@ comment  :
@ param    : type = Y/N 구분
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
function fnRegFileTrShow(type) {
	if (type == "Y") {
		$("#regFileTr").show();
		$('#npiApplyMustYn').prop('disabled',false);
	} else {
		$("#regFileTr").hide();
		$('#npiApplyMustYn').prop('disabled',true);
	}
}

/**
*********************************************************
@ function : 개인/팀 제어
@ comment  :
@ param    : type = Y/N 구분
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
function fnTeamCntShow(type) {
	if (type == "Y") {
		$('#npiTeamMinCnt').prop('disabled',false);
		$('#npiTeanMaxCnt').prop('disabled',false);
		$('#npiPreRschY').prop('disabled',true);
		$('#npiPreRschN').prop('disabled',true);

		// 사전조사 변경
		if($('input[name="npiPreRschYn"]:checked').val() == 'Y'){
			$("input[name=npiPreRschYn]:radio[value=N]").trigger('click');
			$('#npiPreRschY').prop('disabled',true);
			$('#npiPreRschN').prop('disabled',true);
			$("input[name=npiPreRschYn]:radio[value=N]").prop("checked", true);
		}

	} else {
		$('#npiTeamMinCnt').prop('disabled',true);
		$('#npiTeanMaxCnt').prop('disabled',true);
		$('#npiPreRschY').prop('disabled',false);
		$('#npiPreRschN').prop('disabled',false);
	}
}

/**
*********************************************************
@ function : 프로그램 불러오기
@ comment  : peerRevwRegSTF : 동료평가/ ncrProgramRegSTF : 비교과
@ param    :_programGubun = url 변수명
@ param    :_npiPeerYn = 동료평가 여부
@ history  : 2019-0221 (최초작성)
**********************************************************
**/

function fnGetNcrProgramPop(_programGubun,_npiPeerYn){
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var basePath = sessionStorage.getItem("contextRootPath");
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = basePath+"/"+_programGubun+"/r/n/getProgramListPopUp.do"; // 팝업 내용을 호출하는 url
	var popupParams = {
			npiPeerYn : _npiPeerYn
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}




/***************************************
@ function : 프로그램 상태일괄 변경
@ comment  :APPROV(승인)/REJECT(반려)
@ param    :_state = 승인/반려
@ param    :_npiEtcCont = 반려사유
@ param    :_npiKeyId = 비교과 keyId
@ param    :_programGubun = url 변수명
****************************************
**/
function fnProgramModifyStateAjax(_state,_programGubun,_npiEtcCont,_npiKeyId) {

	//상태변경 update info 목록
	var infoArray = new Array();
	var resultObj = new Object();

	var succesCnt = 0;
	var unSuccesCnt = 0;
	var infoObjArray = new Array();

	//단일상태변경
	if (_npiKeyId != null && _npiKeyId != "") {
		var infoObj = new Object();

		infoObj.npiKeyId = _npiKeyId;

		infoArray.push(infoObj);

	//일괄상태변경
	}else{
		var selData = tableObject.rows({selected:true}).data();// 선택된 row에 대한 값

		for(var i=0; i < selData.length; i++){
			var infoObj = new Object();

			// 취소 상태값 변경이면 가능한 상태 인지 체크 해야함
			if( _state == 'CANCEL_AF' ) {
				// 선택한 프로그램이 상태값이  접수대기(NCR_T05_P01), 모집중(NCR_T05_P02), 모집마감(NCR_T05_P03)
				if( selData[i].NPI_STAT_DB_CD == 'NCR_T05_P01' || selData[i].NPI_STAT_DB_CD == 'NCR_T05_P02' || selData[i].NPI_STAT_DB_CD == 'NCR_T05_P03' ) {
					infoObj.npiKeyId = selData[i].NPI_KEY_ID;
					infoArray.push(infoObj);
				}
			// 취소 상태값이 아니면 진행
			} else {
				infoObj.npiKeyId = selData[i].NPI_KEY_ID;
				infoArray.push(infoObj);
			}

		}
	}

	console.log('infoArray.length: '+infoArray.length);

	if( infoArray.length != selData.length ) {
		alert("운영중, 운영마감인 상태의 프로그램은 취소할 수 없습니다.");
		return;
	}

	resultObj.jsonInfo = infoArray;
	resultObj.npiEtcCont = _npiEtcCont;
	resultObj.state = _state;

	$.ajax({
		type : "POST"
		, url : BASE_PATH+"/"+_programGubun+"/w/n/modifyProgramState.do"
		, contentType : 'application/json'
		, cache : false
		, traditional : true
		, async : false
		, dataType : 'json'
		, data : JSON.stringify(resultObj)
		,success : function(res){

			if (res.rtnCode == 0) {
				alert("상태변경 처리가 완료 되었습니다.");

				//상세보기에서 승인할 경우
				if (_state.indexOf("DETAIL") != -1) {
					var _url = "";

					//ncr 포함된 url 이면 비교과로, 그렇지 않으면 동료평가로
					if (_programGubun.indexOf("ncr") != -1) {
						_url = BASE_PATH+"/ncrProgramListSTF/r/m/getProgramList.do";
					}else{
						_url = BASE_PATH+"/peerRevwListSTF/r/m/getProgramList.do";
					}

					$("#detailForm").attr("action",_url).submit();

				//리스트에서 상태변경 할 경우
				}else {

					//반려일때 팝업 닫기
					if (_state == "REJECT") {
						$('#PROGRAM_POP_UP_CLOSE_BTN').trigger('click');
					}

					tableObject.destroy();
					callGrid();

				}



			}else{
				alert("일괄변경 처리에 실패 하였습니다.\n잠시후 다시 시도해주세요.");
			}
		}
		, error:function(request,status,error){
			alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
		}
	});
}


/**
***************************************
@ function : 반려팝업
@ comment  :
@ param : _programGubun = url 변수명
@ param : _keyId = 프로그램 키아이디
****************************************
**/
function fnProgramRejectPopUp(_programGubun, _npiKeyId){

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_programGubun+"/r/n/getProgramRejectPopUp.do";
	var popupParams = {
			npiKeyId :_npiKeyId
	}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
***************************************
@ function : 상세보기, 수정창
@ comment  :
@ param    :_programGubun = url 변수명
@ param    :_keyId = 프로그램 키아이디
@ param    :_viewType = MODIFY(수정)/DETAIL(상세)
****************************************
 **/
function fnGoModiDetailInfo(_programGubun,_keyId,_viewType){

	$('#detailForm #npiKeyId').val(_keyId);
	$('#detailForm #viewType').val(_viewType);

	var _url = BASE_PATH+"/"+_programGubun+"/r/m/getProgramModifyDetail.do";

	$('#detailForm').attr("action",_url).submit();
}

/**
***************************************
@ function : 신청자 페이지 이동
@ comment  :
@ param    : _programGubun = 프로그램 구분
@ param    : _keyId = 비교과 프로그램 키값
@ history  : 2019-05-20 (최초작성)
****************************************
**/
function fnGoRecrList(_programGubun,_keyId) {

	$('#detailForm #npiKeyId').val(_keyId);

	var _url = BASE_PATH+"/"+_programGubun+"/r/m/getProgramRecrList.do";
	$('#detailForm').attr("action",_url).submit();
}

/**
 ***************************************
@ function : 신청자 페이지 이동(
@ comment  :프로그램 운영현황
@ param    : _keyId = 비교과 프로그램 키값
@ history  : 2021-10-20 (최초작성)
 ****************************************
 **/
function fnGoRecruitList(_keyId) {
	console.log(1234444);
	$('#detailForm #npiKeyId').val(_keyId);

	var _url = BASE_PATH+"/ncrProgramListSTF/r/m/getProgramRecruitList.do";
	$('#detailForm').attr("action",_url).submit();
}


/**
*********************************************************
@ function : fnSortAddFavorite
@ comment  : 찜목록 선택
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSortAddFavorite() {
	var loginUserId = sessionStorage.getItem("sessionUserId");
	var _programGubun = $('#programGubun').val();
	if(loginUserId == ''){
		if (confirm("찜 목록 보기는 로그인이 필요한 기능 입니다. \n"
				   +"로그인 하시겠습니까?"
		)) {
			fnGoLoginPopUp('/'+_programGubun+'/a/m/goProgramApplList.do');
		}else{
			$("#sortFavorite").removeClass("on");
		}
	}else{
		var addFlag = $('input:checkbox[id="sortFavorite"]').is(":checked");
		if(addFlag){
			 $('#addFavorite').val("Y");
		}else{
			 $('#addFavorite').val("");
		}

		if(_programGubun.toUpperCase().indexOf("MY") == "-1"){
			 searchProgram();
		 }else{
			 searchMyProgramList();
		}
	}
}



/**
*********************************************************
@ function : 데이터 피커 불러오기
@ comment  :
@ history  : 2019-02-18 (최초작성)
**********************************************************
**/
$(".dtpicker").each(function() {
	var datepicker = $(this).attr('id');
	datePickerClient(datepicker);
});


/**
*********************************************************
@ function : fnSetNcrProgramAblityCategory
@ comment  : 역량별 구분 검색
@ param    : categoryVal : 구분값
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSetProgramAblityCategory(categoryVal) {
	var _programGubun = $('#programGubun').val();
	console.log("dfdf = "+categoryVal);

	if(categoryVal == 'RECOM'){
		var loginUserId = sessionStorage.getItem("sessionUserId");
		if(loginUserId == ''){
			alert("추천 프로그램 조회기능은 로그인 후에 이용 가능합니다.");
		return false;
		}
		var _url =  BASE_PATH+"/"+_programGubun+"/r/m/getDiagRsltFinAjax.do";
		jQuery.ajax({
			type: "POST",
			url: _url,
			async: false,
			dataType: "json",
			data : {
				userId   : loginUserId
			},
			success: function(r) {
				$("#ablityCategory").val(r.diagoryVal);
			},
			error: function(r) {
			}
		}) ;


	}else{
		$("#ablityCategory").val(categoryVal);
	}


	if(_programGubun.toUpperCase().indexOf("MY") == "-1"){
		 searchProgram();
	 }else{
		 searchMyProgramList();
	}

	if(categoryVal == "ALL" || categoryVal == "A001" || categoryVal == "A002" || categoryVal == "A003"){
		$(".getpanelid").attr("id" , "panel1");
  	}else{
		$(".getpanelid").attr("id" , "panel5");
  	}
}
/**
*********************************************************
@ function : searchRcrProgram
@ comment  : 리스트 검색
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function searchProgram() {

	var programTab = $("#programTab").val();
	var npcCategoryCd = $("#npcCategoryCd").val();
	var npiMainAbilityCd = $("#npiMainAbilityCd").val();

	var pageNo = $("#pageIndex").val();
	var ablityCategory = $("#ablityCategory").val();
	var ncrProgramYear = $("#ncrProgramYear").val();
	var npiAreaCd = $("#npiAreaCd").val();
	var npiReqStrDate =$("#npiReqStrDate").val();
	var npiReqEndDate =$("#npiReqEndDate").val();
	var npiActStrDate =$("#npiActStrDate").val();
	var npiActEndDate =$("#npiActEndDate").val();
	var addFavorite =$("#addFavorite").val();
	var npiPartiDeptCd =$("#npiPartiDeptCd").val();
	var npiOprtDeptCdNm =$("#npiOprtDeptCdNm").val();
	var npiSubject =$("#npiSubject").val();
	var npiOprtDeptCd = $("#programSearchForm select[name=npiOprtDeptCd]").val()

	var addReqOrdFlag =$("#addReqOrdFlag").val();
	var addReqDeadLine =$("#addReqDeadLine").val();

	var _programGubun = $('#programGubun').val();
	var diagFlag = $('#diagFlag').val();

	var npcKeyId = $("#programSearchForm select[name=npcKeyId]").val();

	var _url = BASE_PATH+"/"+_programGubun+"/a/m/getProgramApplListAjax.do";

	$.ajax({
		url : _url
		, type : "post"
		, dataType : "html"
		, data : {
			pageIndex : pageNo
			, ablityCategory : ablityCategory
			, ncrProgramYear : ncrProgramYear
			, npiAreaCd : npiAreaCd
			, npiReqStrDate : npiReqStrDate
			, npiReqEndDate : npiReqEndDate
			, npiActStrDate : npiActStrDate
			, npiActEndDate : npiActEndDate
			, addFavorite : addFavorite
			, npiPartiDeptCd : npiPartiDeptCd
			, npiOprtDeptCdNm : npiOprtDeptCdNm
			, addReqOrdFlag : addReqOrdFlag
			, addReqDeadLine : addReqDeadLine
			, npiSubject : npiSubject
			, diagFlag : diagFlag
			, programTab : programTab
			, npcCategoryCd : npcCategoryCd
			, npiMainAbilityCd : npiMainAbilityCd
			, npcKeyId : npcKeyId
			, npiOprtDeptCd : npiOprtDeptCd
		}
		, success : function(res) {
			$("#ncrProgramAjaxDiv").empty();
			$("#ncrProgramAjaxDiv").html(res);
		}
	});
}


/**
*********************************************************
@ function : 초기화
@ comment  :
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSearchReset() {
	var _programGubun = $('#programGubun').val();

	if(_programGubun.toUpperCase().indexOf("MY") == "-1"){
		location.href = BASE_PATH+"/"+_programGubun+"/a/m/goProgramApplList.do";
	 }else{
		location.href = BASE_PATH+"/"+_programGubun+"/a/m/goMyProgramList.do";
	}
}

/**
*********************************************************
@ function : fnSetAddReqDeadLine
@ comment  : 마감 임박순/신청가능
@ param    : categoryVal : 구분값
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSetProgramTerm(typeFlag) {
	var chked_val = "";
	if(typeFlag == "term1"){
		$(":radio[id='program_term1']:checked").each(function(pi,po){
			chked_val += po.value;
		});
		$("#addReqOrdFlag").val('');
		$("#addReqDeadLine").val(chked_val);

	}else if(typeFlag == "term2"){
		$(":radio[id='program_term2']:checked").each(function(pi,po){
			chked_val += po.value;
		});
		$("#addReqDeadLine").val('');
		$("#addReqOrdFlag").val(chked_val);
	}else{
		$("#addReqDeadLine").val('');
		$("#addReqOrdFlag").val('');
	}

	$("#pageIndex").val(1);
	searchProgram();
}


/**
*********************************************************
@ function : searchMyProgramList
@ comment  : 리스트 검색
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function searchMyProgramList(LoginYn) {
	var pageNo = $("#pageIndex").val();

	var programTab = $("#programTab").val();
	var npcCategoryCd = $("#npcCategoryCd").val();
	var _programGubun = $('#programGubun').val();
	var ablityCategory = $("#ablityCategory").val();

	var npiReqStrDate = $("#npiReqStrDate").val();
	var npiReqEndDate = $("#npiReqEndDate").val();
	var npiActStrDate = $("#npiActStrDate").val();
	var npiActEndDate = $("#npiActEndDate").val();

	var npcKeyId = $("#programSearchForm select[name=npcKeyId]").val();
	var npiMainAbilityCd = $("#programSearchForm select[name=npiMainAbilityCd]").val();
	var npiSubject = $("#programSearchForm input[name=npiSubject]").val();

	var stdStateCd = $("#stdStateCd").val();
	/*
	var addFavorite =$("#addFavorite").val();
	var npiPartiDeptCd =$("#npiPartiDeptCd").val();
	var npiOprtDeptCdNm =$("#npiOprtDeptCdNm").val();
	var npiTitle =$("#npiTitle").val();

	var peerLevel = $("#peerLevel").val();
	var ncrProgramYear = $("#ncrProgramYear").val();
	var npiAreaCd = $("#npiAreaCd").val();
	*/

	if(LoginYn == "N"){
		var _url = BASE_PATH+"/"+_programGubun+"/a/m/getMyProgramListAjax.do";
	}else{
		var _url = BASE_PATH+"/"+_programGubun+"/r/m/getMyProgramListAjax.do";
	}

	$.ajax({
		url : _url
		, type : "post"
		, dataType : "html"
		, data : {
			pageIndex : pageNo
			, programTab : programTab
			, npcCategoryCd : npcCategoryCd
			, ablityCategory : ablityCategory
			, npiReqStrDate : npiReqStrDate
			, npiReqEndDate : npiReqEndDate
			, npiActStrDate : npiActStrDate
			, npiActEndDate : npiActEndDate
			, npcKeyId : npcKeyId
			, npiMainAbilityCd : npiMainAbilityCd
			, npiSubject : npiSubject
			, stdStateCd : stdStateCd

			/*
			, addFavorite : addFavorite
			, npiPartiDeptCd : npiPartiDeptCd
			, npiOprtDeptCdNm : npiOprtDeptCdNm
			, peerLevel : peerLevel
			, npiTitle : npiTitle
			, ncrProgramYear : ncrProgramYear
			, npiAreaCd : npiAreaCd
			*/
		}
		, success : function(res) {
				$("#myNcrProgramAjaxDiv").empty();
				$("#myNcrProgramAjaxDiv").html(res);
		}
	});
}

/**
*********************************************************
@ function : fnSetStdStateCd
@ comment  : 학생상태 선택
@ param    : programTermVal : 전공 구분값
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSetStdStateCd(programTermVal) {

var loginUserId = sessionStorage.getItem("sessionUserId");
	if(loginUserId == ''){
		if (confirm("비교과 신청내역 확인 서비스는 로그인이 필요한 기능 입니다. \n"
				   +"로그인 하시겠습니까?"
		)) {
			fnGoLoginPopUp('/'+_programGubun+'/a/m/goProgramApplList.do');
		}
	}else{
		var chked_val = "";
		if(programTermVal == "ALL"){
			chked_val = "ALL"
		}else{
		  $(":checkbox[name='program_term']:checked").each(function(pi,po){
			  if(po.value != 'ALL'){
			    chked_val += ","+"'"+po.value+"'";
			  }
		  });
		  if(chked_val!="")chked_val = chked_val.substring(1);
		}
		if(chked_val == ''){
			chked_val = 'ALL';
		}
		$("#stdStateCd").val(chked_val);
		searchMyProgramList();
	}

}


/**
*********************************************************
@ function : 담당자  검색
@ comment  : 조회 결과가 없는 경우, 조회 결과가 2개 이상인 경우 팝업 조회. 조회 결과가 1인 경우는 값 입력.
@ history  : 2019-04-01 (최초작성)
**********************************************************
 **/
function fnGetStaffInfo(stfNmTagId) {
	var _searchStaffNm = $("#"+stfNmTagId).val();
	var _url = BASE_PATH+"/cmm/fms/getStaffList.do";

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
				// alert("다수의 검색 결과가 조회되었습니다. \n해당 담당자를 선택해주세요.");
				fnGoStaffListPopUp(stfNmTagId);

			} else if (res.stafInfoList.length == 0) {
				// alert("검색 결과가 없습니다. \n해당 담당자를 검색해 주세요.");
				fnGoStaffListPopUp(stfNmTagId);

			} else if (res.stafInfoList.length == 1) {
				alert("담당자가 입력되었습니다.");
				console.log("교번 = "+res.stafInfoList[0].staffNo);
				console.log("이름 = "+res.stafInfoList[0].korNm);
				var nmTagId = stfNmTagId.substring(0,stfNmTagId.length-2);
				fnReceiveChkStaffInfo(res.stafInfoList[0].staffNo,res.stafInfoList[0].korNm,nmTagId);
				$("#npiStfHp1").focus();
			}

		}
	});
}

/**
***************************************
@ function : 직원 리스트 조회 (팝업)
@ comment  :
@ history  : 2017-11-07 (최초작성)
****************************************
 **/
function fnGoStaffListPopUp(stfNmTagId) {
	var searchStaffNm = $("#"+stfNmTagId).val();
	var nmTagId = stfNmTagId.substring(0,stfNmTagId.length-2);

	fnOpenStaffListPopUp(searchStaffNm,'',nmTagId);
}

/**
*********************************************************
@ function : 직원 리스트 조회 결과 리턴
@ comment  : fnGoStaffListPopUp 기능과 1Set 기능 입니다.
@ param    : staffNo = 직원번호
@ param    : staffNm = 직원이름
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function fnReceiveChkStaffInfo(staffNo, staffNm, stfTagId) {

	$("#"+stfTagId+"No").val(staffNo);
	$("#"+stfTagId+"Nm").val(staffNm);

	/* 왜 있지? */
//	$("#ncrStaffNoSearchFlag").val("Y");
//	$("#ncrStaffNoOrSearchName").val(staffNm);
}

/**
*********************************************************
@ function : 학생 리스트 조회 결과 리턴
@ comment  : fnGoStaffListPopUp 기능과 1Set 기능 입니다.
@ param    : stdNo = 학번
@ param    : stdNm = 학생이름
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function fnReceiveChkStdInfo(stdNo, stdNm, shregStNm, sustCdNm, shyrCdNm, genFgNm, term, stfTagId) {

	$("#"+stfTagId+"No").val(stdNo);
	$("#"+stfTagId+"Name").val(stdNm);

	/*지도교수 상담 추가상담일지용*/
	$("#cnsStdNo").val(stdNo);
	$("#cnsStdName").val(stdNm);

	$("#add_shregStNm").val(shregStNm);
	$("#add_sustCdNm").val(sustCdNm);
	$("#add_shyrCdNm").val(shyrCdNm);
	$("#add_genFgNm").val(genFgNm);
	$("#add_term").val(term);
}

/**
*********************************************************
@ function : 참여학과 검색 후 엔터 클릭시 발생하는 이벤트
@ comment  :
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
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
*********************************************************
@ function : 운영부서 검색
@ comment  : 조회 결과가 없는 경우, 조회 결과가 2개 이상인 경우 팝업 조회. 조회 결과가 1인 경우는 값 입력.
@ history  : 2019-04-01 (최초작성)
**********************************************************
 **/
 function fnGetDeptInfo(searchType, idx){
	var _url = BASE_PATH+"/cmm/fms/getDeptList.do";


	var _ncrDeptVal = "";
	var _ncrDeptNm = "";
	var _ncrDeptCd = "";
	var _ncrDeptDiv = "";

	if (searchType == "npiPartiDept") {
		_ncrDeptNm = "npiPartiDeptNm_"+idx;
		_ncrDeptCd = "npiPartiDeptCd_"+idx;
		_ncrDeptDiv = "H";
		_ncrDeptVal = $("#"+_ncrDeptNm).val();
	}else{
		if ($('input[name=npiOprtHostType]:checked').val() == 'DEPART') {
			_ncrDeptDiv = "N";
		}else{
			_ncrDeptDiv = "H";
		}

		_ncrDeptNm = "deptNm";
		_ncrDeptCd = "npiOprtDeptCd";
		_ncrDeptVal =  $("#deptNm").val();
	}


	$.ajax({
			url : _url
			, type : "POST"
			, cache : false
			, async : false
			, dataType : "json"
			, data : {
				  deptKorNm : _ncrDeptVal
				  ,deptNm : _ncrDeptVal
			}
			, success : function(res) {
				if(res.deptInfoList.length>1){
//					alert("여러개의 검색결과가 존재 합니다. 한개의 부서/학과를 선택해 주세요.");
					fnGoOpenDeptListPopup(searchType, _ncrDeptDiv, idx);

				}else if(res.deptInfoList.length == 0){
					alert("검색 결과가 없습니다. \n해당 부서를 검색해 주세요.");
					fnGoOpenDeptListPopup(searchType, _ncrDeptDiv, idx);

				}else if(res.deptInfoList.length == 1){

					if(searchType == "npiPartiDept"){
						alert("참여학과가 입력되었습니다.")
					}else{
						alert("운영부서가 입력되었습니다.");
					}

					$("#"+_ncrDeptCd).val(res.deptInfoList[0].deptCd);
					$("#"+_ncrDeptNm).val(res.deptInfoList[0].deptKorNm);

				}
			}
		});
 }

/**
*********************************************************
@ function : 운영부서/참여학과 입력 값 세팅 후 조회 팝업
@ comment  :
@ history  : 2018-11-15 (최초작성)
**********************************************************
수정일			수정자		수정내용
2021.10.21.	강수영		공통 팝업 수정 개발 반영
 **/
function fnGoOpenDeptListPopup(menuGubun, deptDiv, idx){
	var typeDiv = "DEPT";
	var deptKorNm = "";

	if(menuGubun == "npiPartiDept"){
		deptKorNm = $("#npiPartiDeptNm_" + idx).val();
	}else{
		deptKorNm = $("#deptNm").val();
	}

	fnOpenDeptListPopup(menuGubun, typeDiv, deptDiv, deptKorNm);
}


/**
*********************************************************
@ function : 전공역량일 경우 전공역량정보 가져오기
@ comment  :
@ history  : 2019-07-18 (최초작성)
**********************************************************
 **/
function fnAbilityScoreList(){
	if ($('input[name=npiOprtDeptDiv]:checked').val() == "MAJOR") {
		var programGubun = $('#programGubun').val();

		$.ajax({
			url : BASE_PATH+"/"+programGubun+"/r/n/getAbilityScoreList.do"
			, type : "POST"
			, cache : false
			, async : false
			, dataType : "json"
			, data : {
				  paramCd : $('#deptCd').val()+"C000"
			}
			, success : function(res) {

				var subTdIdx = 0;
				for (var i = 0; i < res.abiltyScoreList.length; i++) {
					$('#majorTable > tbody').children('tr:eq(1)').children('th:eq('+i+')').children('span:eq(0)').text(res.abiltyScoreList[i].CD_NM+" 역량");
					$('#majorTable > tbody').children('tr:eq(1)').children('input:eq('+i+')').attr("name",res.abiltyScoreList[i].CD_ID);

					for (var k = 0; k < res.abiltyScoreList[i].abiltyScoreSubList.length; k++) {
						$('#majorTable > tbody').children('tr:eq(2)').children('td:eq('+subTdIdx+')').text(res.abiltyScoreList[i].abiltyScoreSubList[k].CD_NM);
						$('#majorTable > tbody').children('tr:eq(3)').children('td:eq('+subTdIdx+')').children('div').children('input').attr("name",res.abiltyScoreList[i].abiltyScoreSubList[k].CD_ID);
						$('#majorTable > tbody').children('tr:eq(3)').children('td:eq('+subTdIdx+')').children('div').children('input').attr("title",res.abiltyScoreList[i].abiltyScoreSubList[k].CD_NMD);
						subTdIdx++;
					}

				}

			}
		});
	}
}

/**
*********************************************************
@ function : 비교과 프로그램 신청하기(신청, 대기신청)
@ comment  :
@ param : _formData = 신청정보
@ history  : 2019-02-21 (최초작성)
**********************************************************
 **/
function fnStdProgramApplySubmit(_formData){

	var programGubun = $('#programGubun').val();
	var npiTeamYn = $('input[name=npiTeamYn]').val();
	var _url = BASE_PATH+"/"+programGubun+"/w/n/createProgramReqStd.do";


//	if( confirm("신청하시겠습니까?" ) ) {

		$.ajax({
			type : "POST"
			, url : _url
			, cache : false
			, async : false
			, data : _formData
			, processData : false
			, contentType : false
			, success : function( res ) {
				var alertMsg = "";

				//팀원신청이면
				if (npiTeamYn == 'Y') {
					/*
					for (var i = 0; i < res.rstMap.rstList.length; i++) {
						if (i == 0) {
							alertMsg = res.rstMap.rstList[i].rtnMsg
						}else{
							alertMsg = alertMsg + "\n"+res.rstMap.rstList[i].rtnMsg
						}
					}
					alert("신청이 완료되었습니다.\n\n"+alertMsg);

					if (res.rstMap.failCnt != res.rstMap.totalCnt) {
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');
					}
					*/

					//신청성공
					if( res.rstMap.sts == "SUCCESS_APL_T" || res.rstMap.sts == "SUCCESS_WAIT_T" ) {

						if(res.rstMap.sts == "SUCCESS_APL_T"){
							alert("신청이 완료되었습니다.");
						}else if(res.rstMap.sts == "SUCCESS_WAIT_T"){
							alert("대기신청이 완료되었습니다.");
						}
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');

					//신청실패
					}else if(res.rstMap.sts == "FAIL_APL_DONE_T" ) {
						alert("이미 신청한 프로그램입니다.");
					}else if (res.rstMap.sts == "FAIL_APL_T" ){
						alert("모집 및 대기인원이 전부 찼습니다. 다른활동을 신청해주세요.");
					}else {
						alert("신청에 실패하였습니다. 잠시후 다시 시도해 주세요.");
					}


				}else{
					//신청성공
					if( res.rstMap.sts == "SUCCESS_APL" || res.rstMap.sts == "SUCCESS_WAIT" ) {
						if(res.rstMap.sts == "SUCCESS_APL"){
							alert("신청이 완료되었습니다.");
							console.log("승인대기으로 신청 완료");

						}else if(res.rstMap.sts == "SUCCESS_WAIT"){
							alert("대기신청이 완료되었습니다.");
							console.log("대기신청으로 신청 완료");
						}
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');

					//신청실패
					}else if(res.rstMap.sts == "FAIL_APL_DONE" ) {
						alert("이미 신청한 프로그램입니다.");
					}else if (res.rstMap.sts == "FAIL_APL" ){
						alert("모집 및 대기인원이 전부 찼습니다. 다른활동을 신청해주세요.");
					}else {
						alert("신청에 실패하였습니다. 잠시후 다시 시도해 주세요.");
					}

				}

			}
		});

//	}

}

/**
*********************************************************
@ function : 목록으로 가기
@ comment  :
@ history  : 2019-02-18 (최초작성)
**********************************************************
 **/
function fnGoApplyList(_viewType) {

	var programGubun = $('#programGubun').val();

	var path = "";

	if (programGubun.toLowerCase().indexOf('bk21') !== -1) {
		path = "myBk21NcrProgram";
	}else if (programGubun.toLowerCase().indexOf('ncr') !== -1) {
		path = "myNcrProgram";
	} else {
		path = "myPeerProgram";
	}

	if (_viewType == 'MODIFY') {
		$("#listForm").attr("action", BASE_PATH+"/"+path+"/a/m/goMyProgramList.do").submit();
	}else {
		$("#listForm").attr("action", BASE_PATH+"/"+programGubun+"/a/m/goProgramApplList.do").submit();
	}
}

/**
*********************************************************
@ function : 사전만족도 팝업창
@ comment  :
@ history  : 2019-02-18 (최초작성)
**********************************************************
 **/
function fnPreSurveyPopUp() {
	var programGubun = $('#programGubun').val();

	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+programGubun+"/r/n/getProgramSurveyPopUp.do";
	var popupParams = {
			preSgmKeyId : $('#insertForm input[name=preSgmKeyId]').val()
			,npiPreRschYn : $('#insertForm input[name=npiPreRschYn]').val()
			,npiKeyId : $('#insertForm input[name=npiKeyId]').val()
			,npiApplyFileYn : $('#insertForm input[name=npiApplyFileYn]').val()
			,npiTeamYn : $('#insertForm input[name=npiTeamYn]').val()
			,npiTMaxCnt : $('#insertForm input[name=npiTMaxCnt]').val()
			,surveyDiv :'pre'
	}; // 팝업 호출시의 파라미터
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}


/**
*********************************************************
@ function : 팀원추가 팝업창
@ comment  :
@ history  : 2019-05-28 (최초작성)
**********************************************************
 **/
function fnTeammatePopUp() {
	var programGubun = $('#programGubun').val();
	var _teamMaxCnt = $('#insertForm input[name=npiTeanMaxCnt]').val()

	if( $('#ncrTeamMemberDiv .ncrTeamMemberTag').length >= _teamMaxCnt-1 ) {
		alert('팀원 최대 인원을 초과 하였습니다.');
		return;
	}

	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+programGubun+"/r/n/getTeammatePopUp.do";
	var popupParams = {
		teamMaxCnt : _teamMaxCnt
		/*
		npiKeyId : $('#insertForm input[name=npiKeyId]').val()
		, npiCorsLimitCd : $('#insertForm input[name=npiCorsLimitCd]').val()
		, npiCorsDtlLimitCd : $('#insertForm input[name=npiCorsDtlLimitCd]').val()
		, npiTeanMaxCnt : $('#insertForm input[name=npiTeanMaxCnt]').val()
		, npiPartiDeptCd : $('#insertForm input[name=npiPartiDeptCd]').val()
		*/
	};
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}


/**
*********************************************************
@ function : 프로그램 신청정보 수정하기
@ comment  :
@ param    : _formData = 신청정보
@ param    : _viewType = 취소/수정 여부
@ history  : 2019-02-21 (최초작성)
**********************************************************
 **/
function fnStdProgramModify(_formData,_viewType){
	var programGubun = $('#programGubun').val();

	var _msg = "수정";

	if (_viewType == "CANCEL") {
		_msg = "취소";
	}

	var _url = BASE_PATH+"/"+programGubun+"/w/n/modifyStdReqProgramInfoAjax.do";

	if( confirm(_msg+"하시겠습니까?" ) ) {

		// 수정시 프리셋 저장 되어야함
		if( _viewType == 'MODIFY' ) {
			if( !ncrDownToWord() ) {
				return false;
			}
		}

		$.ajax({
			type : "POST"
			, url : _url
			, cache : false
			, async : false
			, data : _formData
			, processData : false
			, contentType : false
			, success : function( res ) {

				// 취소 시
				if( _viewType == "CANCEL" ) {

					if (res.rtnCode == 0) {
						alert(_msg+"되었습니다.");
						fnGoApplyList("MODIFY");
					}else{
						alert(_msg+"에 실패하였습니다.(1)");
					}
				// 수정시 체크
				} else {

					if (res.rtnCode == 0) {
						alert(_msg+"되었습니다.");
						fnGoApplyList("MODIFY");
					}else{
						alert(_msg+"에 실패하였습니다.(1)");
					}

				}


			}
		});

	}
}

/**
*********************************************************
@ function : 역량점수 그래프
@ comment  :
@ history  : 2019-05-22 (최초작성)
**********************************************************
 **/
function fnDetailViewAblityGraph(divNm, dataArry, categoriesArry) {
	var options = {
			chart: {
	            height: 250,
	            type: 'bar',
	            background: 'transparent'
	        },
	        plotOptions: {
	            bar: {
	                horizontal: false,
	                columnWidth: '40%',
	                distributed: true
	            },
	        },
	        dataLabels: {
	            enabled: false
	        },
	        stroke: {
	            show: true,
	            width: 2,
	            colors: ['transparent']
	        },
	        colors: ['#d93655','#9dcd57','#0487d9','#f2b84c','#855ea8'],
			series : [
			            {
							name : ['획득점수'],
							data : dataArry
						},
			],
	        xaxis: {
	            categories: categoriesArry,
	        },
	        fill: {
	            opacity: 1

	        },
	        legend: {
				position: 'bottom',
				horizontalAlign: 'right',
				floating: true,
				offsetY: 0-25,
				offsetX: 0-5
			},
		};

	var chart = new ApexCharts(document.querySelector("#" + divNm), options);
	chart.render();
}

/**
*********************************************************
@ function : 운영계획서 인쇄
@ comment  :
@ param    : _npiKeyId = 프로그램 keyId
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function onActRepoPrint(_npiKeyId){
	var programGubun = $('#programGubun').val();

	window.open(BASE_PATH+"/"+programGubun+"/r/m/getProgramModifyDetail.do?npiKeyId="+_npiKeyId+"&viewType=REPO"
				, "_blank"
				, "toolbar=no,directories=no,scrollbars=yes,resizable=no,status=no,menubar=no,width=870, height=830, left=100"
			);
}


/**
*********************************************************
@ function : 교수업적평가 반영여부 선택에 따른 교수업적평가 구분 제어
@ comment  :
@ param    : _value = 반영여부
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function fnChangeProfEval(_value) {

	if (_value == "Y") {
		$('#npiProfEvalDiv').attr("disabled",false);
	}else {
		$('#npiProfEvalDiv').val("");
		$('#npiProfEvalDiv').attr("disabled",true);
	}

}

/**
*********************************************************
@ function : 신청자 내역에서 학생역량점수 추가
@ comment  :
@ param    : _npiKeyId = 프로그램 keyId
@ param    : _stdNo = 학번
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/
function fnStdAbilityAdd(_npsKeyId, _stdNo){

	var abilityCnt = $('#abilityCnt').val();
	var programGubun = $('#programGubun').val();

	var rstParamObj = new Object();
	var paramsArray = [];


	for (var i = 1; i <= abilityCnt; i++) {
		var infoObj = new Object();

		if ($('#npiOprtDeptDiv').val() == "DEPART") {
			infoObj.sahAbilityCd = "A00"+i;
			infoObj.sahScore = isEmpty($('#A00'+i+'_'+_npsKeyId).val()) ? 0 : $('#A00'+i+'_'+_npsKeyId).val();

		}else if($('#npiOprtDeptDiv').val() == "MAJOR"){
			infoObj.sahAbilityCd = $('#npiOprtDeptCd').val()+"C00"+i;
			infoObj.sahScore = isEmpty($('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val()) ? 0 : $('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val();

			if (parseInt(infoObj.sahScore) > 0) {
				paramsArray.push(infoObj);
			}
		}
	rstParamObj.stdAbiltyScoreList = paramsArray;
	rstParamObj.npsKeyId = _npsKeyId;
	rstParamObj.sahStdNo = _stdNo;


	var _url = BASE_PATH+"/"+programGubun+"/w/n/modifyStdAbilityAdd.do";
	$.ajax({
			url : _url
			, type : "post"
			, contentType : 'application/json'
			, cache : false
			, traditional : true
			, async : false
			, dataType : "json"
			, data : JSON.stringify(rstParamObj)
			, success : function(res) {

				if(res.sts = "SUCCESS") {

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
 *********************************************************
@ function : 참여시간 및 난이도 선택시 역량 환산점수 계산
@ comment  :
@ param    : _value = 반영여부
@ history  : 2017-11-07 (최초작성)
 **********************************************************
 **/
function fnCalAbilityScore(obj) {

//	var npiPartyTime = $('input[name=npiPartyTime]').val();
//	var npiLevel = $('select[name=npiLevel]').val();
//	var sum = "0";
//
//	if (isEmpty(npiPartyTime)) {
//		npiPartyTime = 0;
//	}
//	if (isEmpty(npiLevel)) {
//		npiLevel = 0;
//	}
//
//	sum = (parseInt(npiPartyTime) * parseInt(npiLevel)) * 10;
//
//	$('.abilitySumVal').text(sum+" 점");
//	$('input[name=npiAbilitySum]').val(sum);
	var tempAblityScore = obj.value;
	var tempAblityName = obj.name;
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
			}
		}
	}

}

/**
 *********************************************************
@ function : 하위역량 입력값의 합을 상위역량 퍼센트에 넣어줌
@ comment  :
@ param    : _cdDiv = 전공/핵심 역량 구분
@ history  : 2017-11-07 (최초작성)
 **********************************************************
 **/
function fnCalUpAbilityScore() {

	var abilityCnt = $('#abilityCnt').val();
	var abilityCd ="A";

	/** 하위역량 퍼센트 합 **/
	var abilityScoreSum = 0;

	for (var i = 1; i <= abilityCnt; i++) {
		abilityScoreSum = abilityScoreSum + parseInt($('input[name='+abilityCd+'00'+i+']').val());
	}
	if (abilityScoreSum > 100) {
		alert("역량 비율의 합은 100% 여야 합니다.");
	}

}


/**
 *********************************************************
@ function : 운영주체 변동에 따라 전공역량/핵심역량 입력란 노출
@ comment  :
@ param    : npiOprtDeptDiv = 운영주체 구분값
@ param    : _viewType = 페이지 로드상태(READY)
@ history  : 2019-07-17 (최초작성)
 **********************************************************
 **/
function fnCtrlAbilitySetting(_npiOprtDeptDiv,_viewType) {

	//승인대기, 반려 아닐 경우 이벤트 막기
	if (!isEmpty($('#npiStatDbCd').val())
			&& $('#npiStatDbCd').val() != 'NCR_T05_P00' &&  $('#npiStatDbCd').val() != 'NCR_T05_P08') {

		if (_npiOprtDeptDiv == "DEPART" || _npiOprtDeptDiv == "" || _npiOprtDeptDiv == null) {
			$('#majorDiv').hide();
			$('#coreDiv').show();
		}else if(_npiOprtDeptDiv == "MAJOR"){
			$('#coreDiv').hide();
			$('#majorDiv').show();
		}
	}else{

		if (_npiOprtDeptDiv == "DEPART" || _npiOprtDeptDiv == "" || _npiOprtDeptDiv == null) {
			if (_viewType != 'READY') {
				$('#deptCd').val('');
				$('#deptNm').val('');
				$('div[name=partDepartDiv]').remove();
			}

			$('#coreDiv').show();
//			$('#coreTable > tbody').children('tr:last').children('td').children('div').children('input').addClass('emptyChkByClass');
			$('#majorDiv').hide();
//			$('#majorTable > tbody').children('tr:last').children('td').children('div').children('input').removeClass('emptyChkByClass');

		}else if(_npiOprtDeptDiv == "MAJOR"){

			if (_viewType != 'READY') {
				$('#deptCd').val('');
				$('#deptNm').val('');
				$('div[name=partDepartDiv]').remove();
			}
			$('#coreDiv').hide();
//			$('#coreTable > tbody').children('tr:last').children('td').children('div').children('input').removeClass('emptyChkByClass');
			$('#majorDiv').show();
//			$('#majorTable > tbody').children('tr:last').children('td').children('div').children('input').addClass('emptyChkByClass');

			$('#npiProfEvalYn_N').trigger('click');
			$('input[name=npiProfEvalYn]:not(:checked)').attr("disabled",true);
		}
	}

}

/**
 *********************************************************
@ function : 과제물파일 제출
@ comment  :
@ param    : npiOprtDeptDiv = 운영주체 구분값
@ history  : 2019-07-17 (최초작성)
 **********************************************************
 **/
function fnStdProgramAttach(_npsKeyId) {

	var _url = BASE_PATH+"/myNcrProgram/w/n/createStdFileAttach.do";
	if (confirm("첨부파일을 저장하시겠습니까?")) {
		$("#attachForm").ajaxForm(
				{
					url : _url,
					type : "POST",
					dataType : "json",
					success : function(res){

						if (res.rtnCode == "0") {
							alert("첨부파일 업로드에 성공하였습니다.");
							location.href = BASE_PATH+"myNcrProgram/a/m/getProgramDetail.do?npsKeyId="+_npsKeyId;
						}else{
							alert("첨부파일 업로드에 실패하였습니다.(2)");
						}
					},
					clearForm : false,
					resetForm : false,
					semantic : false,
					error : function(_xmlHttpRequest, _stateMessage, _errorObject) {
						alert("첨부파일 업로드에 실패하였습니다.(1)");
					}
				});

		$("#attachForm").submit();
	}

}


/**
 *********************************************************
@ function : 신청서/과제물 파일리스트 조회 팝업
@ comment  :
@ param    : npiOprtDeptDiv = 운영주체 구분값
@ history  : 2019-07-17 (최초작성)
 **********************************************************
 **/
function fnApplyFileListPop(_npsKeyId, _fileSectionName,_stdNo,_korNm){
	var _programGubun = $('#programGubun').val();

	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH+"/"+_programGubun+"/r/n/getRecrStdFileList.do";
	var popupParams = {
			npsKeyId : _npsKeyId
			,fimSectionName : _fileSectionName
			,stdNo: _stdNo
			,korNm : _korNm
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);

}

/**
 *********************************************************
@ function : 역량정의 팝업
@ comment  :
@ history  : 2019-08-19 (최초작성)
 **********************************************************
 **/
function fnGetAbilityDef(){
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH+"/"+$("#programGubun").val()+"/r/n/getAbilityDefPopUp.do";
	var popupParams = {
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);
}

/**
 *********************************************************
@ function : 학생상태 반려 팝업
@ comment  :
@ history  : 2019-08-19 (최초작성)
 **********************************************************
 **/
function fnRefusePopUp(_npsState, _npsKeyId) {

	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});
	var popupDivId = "#layerPopup"; // 팝업이 들어가는 div의 id
	var popupUrl = BASE_PATH+"/"+$("#programGubun").val()+"/r/n/getRefusePopUp.do";
	var popupParams = {
			npsState : _npsState
			,npsKeyId : _npsKeyId
	} // 팝업 호출시의 파라미터
	loadPopup(popupDivId, popupUrl, popupParams);

}


/**
 *********************************************************
@ function : 계획서, 결과보고서 출력 유비폼 적용
@ comment  :
@ history  : 2019-08-19 (최초작성)
 **********************************************************
 **/
function fnPlanUBF(_npiKeyId) {
	var _params = new Object();

	var _url = document.location.protocol + "//" + document.location.host + "/UBIFORM/UView5/index.jsp";

	var n = new Date().getTime();
	var _id = "UBIFORM_" + n;

	var width=900;
	var height=700;
	var posx=(screen.width-width)/2;
	var posy=(screen.height-height)/2;
	var position="width="+width+",height="+height+",top="+posy+",left="+posx+",resizable=0,status=0,scrollbars=no,toolbar=no,location=no,directories=no";

	var _window = window.open( "", _id, position );
	var form = document.createElement( "form" );
	form.setAttribute( "method", "post" );
	form.setAttribute( "action", _url );
	form.setAttribute( "target", _id );

	_params.projectName = "CHUNGWOON";
	_params.formName = "ncrProgramPlanPrint";
	_params.npiKeyId = _npiKeyId;

	console.log( "UBF_Open .2 _params =", _params );

	for ( var _idx in _params ) {
		if ( _params.hasOwnProperty( _idx ) ) {
			var _input = document.createElement( "input" );
			_input.type = 'hidden';
			_input.name = _idx;
			_input.value = encodeURI( _params[ _idx ] );
			form.appendChild( _input );
		}
	}

	console.log( "portfolio . form:", form );
	document.body.appendChild( form );
	form.submit();
	document.body.removeChild( form );
}


/**
 *********************************************************
@ function : 대표이미지 미리보기
@ comment  :
@ history  : 2019-08-19 (최초작성)
 **********************************************************
 **/
//function fnOnChangeFileNmImg(obj, fileType) {
	function fnOnChangeFileNmImg(obj, fileType, delYn) {
//	if (obj.value != "") {
//		var fileObjs = document.getElementsByName(obj.name);
//
//		if(!fnChkUploadFileType(obj,fileType)){
//			return false;
//		}
//
//		if(obj.files){
//			var reader = new FileReader();
//			reader.onload = function (e) {
//				console.log(e.target.result);
//				$("#"+obj.name+'_idx').attr('src', e.target.result);
//			}
//			reader.readAsDataURL(obj.files[0]);
//			console.log("obj.files[0] : "+obj.files[0]);
//		}
//	}


	if (obj.value != "") {
		console.log("obj.value : "+obj.value);
		console.log("obj.name : "+obj.name);

		var fileObjs = document.getElementsByName(obj.name);
		var pTagRowCnt = document.getElementsByName(obj.name+'_link_file_del');
		if(!fnChkUploadFileType(obj,fileType)){
			return false;
		}

		var tagIdx = $('#'+obj.name+'_idx').val();
		var addFileInputHtml ="";
		var fileNm =obj.value.substring(obj.value.lastIndexOf("\\") + 1,  obj.value.length);
		var appendFileNameHtml = '';
		var delTagIdx = (tagIdx-1);

		appendFileNameHtml += '<p class="link_file_del file_box" name="'+obj.name+'_link_file_del" style="width:310px; height:180px;">';
		appendFileNameHtml += '<img id="'+obj.name+'_img"  href="javascript:void(0);" alt="'+fileNm+'" scr="'+BASE_PATH+'/contents/images/client/main/no_img.png" style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; ">';

		if(delYn == 'Y'){
				appendFileNameHtml += '<button type="button" title="삭제" id="'+obj.name+'_del" class="link_del" onclick="fnDelAddImgFileData(this.id,'+"'','"+"ADMIN"+"'"+')"><i class="fa fa-close"></i></button>';
		}
		appendFileNameHtml += '</p>';
		if ($('#'+obj.name+'_label').parents("p").parents("td").children("p").length > 2) {
			if (!isEmpty($('#npiKeyId').val())) {
				$('#'+obj.name+'_label').parents("p").parents("td").children("p:last").children('button').click();
//				addFileInputHtml += '<input type="file" name="'+obj.name+'" id="'+obj.name+'" class="hidden" onchange="fnOnChangeFileNmImg(this,'+"'"+fileType+"','"+delYn+"'"+')">';
//				$('#'+obj.name+'_idx').parents("p").append(addFileInputHtml);

			}else{
				$('#'+obj.name+'_label').parents("p").parents("td").children("p:last").remove();
			}
		}
		$('#'+obj.name+'_label').parents("p").parents("td").append(appendFileNameHtml);

		if(obj.files){
			var reader = new FileReader();
			reader.onload = function (e) {
				console.log(e.target.result);
				$("#"+obj.name+'_img').attr('src', e.target.result);
			}
			reader.readAsDataURL(obj.files[0]);
			console.log("obj.files[0] : "+obj.files[0]);
		}

	}
}

	function fnDelAddImgFileData(objId, fileSubId, staffType) {


		if(isEmpty(fileSubId) == false) {
			var _url = BASE_PATH+"/cmm/fms/removeFileData.do";
			jQuery.ajax({
				type: "POST",
				url: _url,
				dataType: "json",
				data : {
					fileSubId   : fileSubId
				},
				success: function(r) {
					if (r.rtnCode == '0') {
						var delObjId = objId.replace('_del','');
						$("#"+objId).parents("p").remove();
					} else {
					 alert("첨부파일 삭제에 실패 하였습니다.");
					 return false;
					}
				},error: function(r) {
				}
			}) ;

		}else{
				var delObjId = objId.replace('_del','');
				$("#"+objId).parents("p").remove();
		}
	}

/**
 *********************************************************
@ function : 교과 외 프로그램 프로그램 선택 하기
@ comment  :
@ history  : 2020-01-13 (최초작성)
 **********************************************************
 **/
function npcKeyChg(obj) {

	var _val = $(obj).val();

	if( _val != '' ) {
		var _valArr = _val.split('^');
		$("#npcKeyId").val(_valArr[0]);
		$("#npcCategoryCdNm").text(_valArr[1]);
	} else {
		$("#npcKeyId").val("");
		$("#npcCategoryCdNm").text("");
	}

}

/**
 *********************************************************
@ function : 교과 외 프로그램 프로그램 참여대상 셀렉트 박스 체인지
@ comment  :
@ history  : 2020-01-13 (최초작성)
 **********************************************************
 **/
function corsLimitChg(obj) {

	var npiCorsLimitCd01 = "DIAG_T001";
	var npiCorsLimitCd02 = "DIAG_T002";


	var objVal = $(obj).val();

	/** 참여대상 체크박스 전체 선택하기 */
	$("input[name=npiCorsDtlLimitCd]").each(function() {
		this.checked = true;
	});

	/** 상태값 대학원생 일때 */
	if( objVal == npiCorsLimitCd01 ) {
		$(".npiCorsDtlLimitCd").removeClass("hidden");
	/** 상태값 학부생 일때 */
	} else if( objVal == npiCorsLimitCd02 ) {
		$(".npiCorsDtlLimitCd").addClass("hidden");
	/** 상태값 전체 일때 */
	} else {
		$(".npiCorsDtlLimitCd").addClass("hidden");
	}

}

/**
 *********************************************************
@ function : 비교과 프로그램 프로그램 추천참여자 셀렉트 박스 체인지
@ comment  :
@ history  : 2020-02-20 (최초작성)
 **********************************************************
 **/
function recomTargetChg(obj) {

	var objVal = $(obj).val();

	var npiRecomTargetCd01 = "NCR_RECOM_T01";
	var npiRecomTargetCd02 = "NCR_RECOM_T02";
	var npiRecomTargetCd99 = "NCR_RECOM_T99";

	/** 빈값으로 셋팅 */
	$("input[name=npiRecomTarget01]").each(function() {
		this.checked = true;
	});
	$("input[name=npiRecomTarget02]").each(function() {
		this.checked = true;
	});
	$("input[name=npiRecomTarget99]").val("");

	/** 상세 부분 전체 다 보이게 하기_초기 값*/
	$(".npiRecomTarget01").removeClass("hidden");
	$(".npiRecomTarget02").removeClass("hidden");
	$("#npiRecomTarget99").removeClass("hidden");

	/** 상태값 학부생 일때 */
	if( objVal == npiRecomTargetCd01 ) {
		$(".npiRecomTarget02").addClass("hidden");
		$("#npiRecomTarget99").addClass("hidden");
	/** 상태값 대학원생 일때 */
	} else if( objVal == npiRecomTargetCd02 ) {
		$(".npiRecomTarget01").addClass("hidden");
		$("#npiRecomTarget99").addClass("hidden");
	/** 상태값 기타 일때 */
	} else if( objVal == npiRecomTargetCd99 ) {
		$(".npiRecomTarget01").addClass("hidden");
		$(".npiRecomTarget02").addClass("hidden");
	/** 상태값 전체 일때 */
	} else {
		$(".npiRecomTarget01").addClass("hidden");
		$(".npiRecomTarget02").addClass("hidden");
		$("#npiRecomTarget99").addClass("hidden");
	}

}



/**
*********************************************************
@ function : 참여대학/학과 인풋변경
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/

function fnChangeJoinType(typeVlaue) {
	$("#colgPartDepartTr").hide();
	$("#partDepartTr").hide();
	if (typeVlaue == 'COLG') {
		$("#colgPartDepartTr").show();
	} else if (typeVlaue == 'SUST'){
		$("#partDepartTr").show();
	}
}

/**
*********************************************************
@ function : 참여대학 삭제
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/

function removeColgPartDepart() {
	var _rowCount = parseInt($("#colgTableTbodyList tr").length)+(parseInt($("#colgTableTbody tr").length));
	$("#COLG_TR_"+_rowCount).remove();
	if (_rowCount == 0 || _rowCount == 1) {
		$("#colgTableDiv").hide();
	}
}

/**
*********************************************************
@ function : 참여학과 체크박스 셋팅
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
 **/

function fnSetSustChkBoxForClogTd(colgCd , rowIndex) {
	var viewId = 'COLG_TD_'+rowIndex;

	fnSetClogForSustCdCheckBox(colgCd, viewId, '', '참여학과', 'npiPartiDeptCd' , true);

}

/**
*********************************************************
@ function : 참여학과 체크박스 조회
@ comment  :
@ history  : 2017-11-07 (최초작성)
**********************************************************
**/
function fnSetClogForSustCdCheckBox(clogCd, viewId, chkdValue, titleValue, valueName, useAsync)  {
	var basePath = sessionStorage.getItem("contextRootPath");
	var _url = basePath+"/ncrProgramRegSTF/r/n/getColgSustCdList.do";
	var async = isNullObject(useAsync) ? true : useAsync;
	var targetView = $("#td_"+viewId);

	if(typeof targetView == "undefined") {
		return;
	}

	if(targetView.html() != ''){
		targetView.empty();
	}

	jQuery.ajax({
		async: async,
		type: "POST",
		url: _url,
		dataType: "json",
		data : {
			clogCd   : clogCd
		},
		success: function(r) {
			if (r.beanlist.length > 0) {
				for(var idx=0; idx<r.beanlist.length; idx++) {
					var obj = r.beanlist[idx];
					var checked ='';
						if(chkdValue == ""){
							checked = 'checked';
						}else{
							checked = chkdValue.indexOf(obj.DEPT_CD) != -1 ? 'checked' : '';
						}
					targetView.append(
							'<p class="ad_input_row">'
							+'<input name="'+valueName+'" class="check '+viewId+'Check '+viewId+'All" id="'+viewId+idx+'" type="checkbox" value="'+obj.DEPT_CD+'" title="'+titleValue+'" '+checked+' onchange="partiDeptCdChkChg(this, \''+obj.DEPT_KOR_NM+'\')">'
							+'<label class="check_label check_black" for="'+viewId+idx+'">'+obj.DEPT_KOR_NM+'</label>'
							+'</p>'
							+'<input type="hidden" name="npiPartiDeptNm" value="'+obj.DEPT_KOR_NM+'">'
					);
				}
			}
		},
		error: function(r) {
			console.log("학과코드 오류가 발생하였습니다.()");
		}
	}) ;
}

/**
*********************************************************
@ function : 예산 분류 코드값 변경
@ comment  :
@ history  : 2020-01-04 (최초작성)
**********************************************************
**/
function fnBiBudgetCdSelChg(obj, level) {

	var basePath = sessionStorage.getItem("contextRootPath");
	var _selResetTxt = "<option value=''>예산구분을 선택해주세요.</option>";
	var _cdId = $(obj).val();
	var _selTarget = $(obj);
	var _url = basePath+"/cmm/fms/getCodeListAjax.do";


	var chgTarget = "";

	// 대분류 변경시
	if( level == 'main' ) {
		console.log("main");
		// 값 리셋
		// 예산 서목 리셋
		_selTarget.parent("td").next().next().next().find("select[name=nbiBudgetForthCd]").empty();
		_selTarget.parent("td").next().next().next().find("select[name=nbiBudgetForthCd]").append(_selResetTxt);
		// 예산 목 리셋
		_selTarget.parent("td").next().next().find("select[name=nbiBudgetThirdCd]").empty();
		_selTarget.parent("td").next().next().find("select[name=nbiBudgetThirdCd]").append(_selResetTxt);
		// 예산 항 셋팅
		chgTarget = _selTarget.parent("td").next().find("select[name=nbiBudgetSubCd]");
		chgTarget.empty();
		chgTarget.append(_selResetTxt);
	// 예산 항 변경시
	} else if( level == 'sub' ) {
		console.log("sub");
		// 값 리셋
		// 예산 세목 리셋
		_selTarget.parent("div").parent("td").next().next().find("select[name=nbiBudgetForthCd]").empty();
		_selTarget.parent("div").parent("td").next().next().find("select[name=nbiBudgetForthCd]").append(_selResetTxt);
		// 예산 목 셋팅

		console.log(_selTarget.parent("div").parent("td").next().find("select[name=nbiBudgetThirdCd]").html());
		chgTarget = _selTarget.parent("div").parent("td").next().find("select[name=nbiBudgetThirdCd]");
		console.log("chgTarget: "+chgTarget.html());
		chgTarget.empty();
		chgTarget.append(_selResetTxt);
	// 예산 목 변경시
	} else {
		console.log("third");
		// 값 리셋
		// 예산 세목 셋팅
		chgTarget = _selTarget.parent("div").parent("td").next().find("select[name=nbiBudgetForthCd]");
		chgTarget.empty();
		chgTarget.append(_selResetTxt);
	}

	if(_cdId == '') return;

	// 조회
	jQuery.ajax({
		async: true,
		type: "POST",
		url: _url,
		dataType: "json",
		data : {
			comnCdPcodeId   : _cdId
		},
		success: function(r) {
			if (r.beanlist.length > 0) {

				for(var idx=0; idx<r.beanlist.length; idx++) {
					var row = r.beanlist[idx];
					chgTarget.append("<option value='"+row.cdId+"'>"+row.cdNm+"</option>");
				}
			} else {
				alert("공통코드 조회중 오류가 발생하였습니다.("+comnCdPcodeId+")");
			}
		},
		error: function(r) {
			console.log("공통코드 조회중 오류가 발생하였습니다.("+comnCdPcodeId+")");
		}
	});

}

/**
 *  참여 대학/학과 구분에서 대학별 학과 체크박스 클릭할때 히든 nm값 삭제 추가
 *
 */
function partiDeptCdChkChg(_obj, _deptNm) {

	if( $(_obj).is(":checked") ) {
		$(_obj).parent("p").after('<input type="hidden" name="npiPartiDeptNm" value="'+_deptNm+'">');
	} else {
		$(_obj).parent("p").next('input').remove();
	}

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

		} else {
			$("#npiTypeSubDiv").hide();
			$("#npiTMinCnt").val('');
			$("#npiTMaxCnt").val('');
			$("#npiTMinCnt").removeClass('emptyChkByClass');
			$("#npiTMaxCnt").removeClass('emptyChkByClass');
		}
	}
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
								+ "' selected>" + obj.NPI_SUBJECT + "</option>");
					} else {
						targetView.append("<option value='" + obj.NPI_KEY_ID
								+ "'>" + obj.NPI_SUBJECT + "</option>");
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
