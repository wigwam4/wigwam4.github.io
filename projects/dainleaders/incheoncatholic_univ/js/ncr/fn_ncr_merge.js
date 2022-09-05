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
	var scaleQusArry = "";
	/** 5점척도 **/
	var openQusArry = "";
	/** 주관식 **/
	var choiceQusArry = "";
	/** 자유형객관식 **/
	var choiceAnsQusArry = "";
	/** 자유형객관식 답변 **/

	if (satRschType == "std") {
			scaleQusArry = '본 프로그램에 대해 전반적으로 만족하십니까?';
			scaleQusArry += ',본 프로그램 내용의 수준은 적절하다고 생각하십니까?';
			scaleQusArry += ',본 프로그램에 소요되는 시간은 적절하다고 생각하십니까?';
			scaleQusArry += ',본 프로그램 종료후，참여 전에 가졌던 기대감에 비해 만족감은 향상되었습니까?';
			scaleQusArry += ',본 프로그램을 통해 해당 내용과 관련된 지식이나 기술을 습득하였습니까?';
			scaleQusArry += ',본 교육 장소 및 기타 시설에 대해 만족했습니까?';
			scaleQusArry += ',본 프로그램이 다음에 또 진행된다면 다른 친구，선후배들에게도 추천하시겠습니까?';
			openQusArry = '희망하는 비교과 프로그램이 있다면 자유롭게 기록해 주세요.';
			openQusArry += ',이번 프로그램에서 만족한 점이 있다면 간략하게 기술하여 주세요.';
			openQusArry += ',이번 프로그램에서 개선해야 할 점이 있다면 간략하게 기술하여 주세요.';
		}
	if (satRschType == "pre") {
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
**********************************************************
 **/
var trIndex = 1;
var subIndex = 1;
/**tr 추가**/
function addBudget() {
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

	$tableTr = $("#ncrBudgetTable");
	if ($tableTr.find("tbody tr").length > 1) {
		trIndex = $tableTr.find("tbody tr").length;
	}

	if ($tableTr.find("tbody tr").length > 5) {
		alert("예산은 5개까지 추가가능합니다.");
		return false;
	}


	$tableTr.find("tbody tr:last").remove();
	$tableTr.find("tbody").append(
					'<tr id="budgetTr_'+trIndex+'">'
						+'<td>'
						+'<input type="hidden" name="budgetTrCnt" value="1">'
						+'<select class="form-control input-sm emptyChkByClass dp_inline wd_p30 mg_r5" name="nbiBudgetCd" id="nbiBudgetCd" title="예산 대분류" onchange="fnCreateBudgetEtc(this);">'
							+'<option value="">예산구분을 선택해주세요.</option>'
							+'<option value="NCR_T04_P01" >교비</option>'
							+'<option value="NCR_T04_P02" >기타</option>'
						+'</select>'
						+'<input type="text" style="background-color:#eee;" class="form-control wd_p40 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetMainEtc" id="nbiBudgetMainEtc" title="대분류 기타사항" value="" readonly>'
						+'<button class="btn btn-sm btn-danger btn-danger mg_l5 dp_inline"  onclick="removeBudget(this);" type="button"><i class="fa fa-minus mg_r5"></i>삭제</button>'
					+'</td>'
					+'<td>'
					+'<div class="pd_t5" id="budgetSubCdDiv_0">'
						+'<select class="form-control input-sm emptyChkByClass wd_p50 dp_inline mg_r5" name="nbiBudgetSubCd" id="nbiBudgetSubCd" title="예산 소분류" onchange="fnCreateBudgetEtc(this)">'
							+'<option value="">예산구분을 선택해주세요.</option>'
							+'<option value="NCR_T04_C01">강사료</option>'
							+'<option value="NCR_T04_C02">교재비/인쇄비</option>'
							+'<option value="NCR_T04_C03">행사진행비</option>'
							+'<option value="NCR_T04_C04">기타</option>'
						+'</select>'
						+'<input type="text" style="background-color:#eee;" class="form-control wd_p40 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetSubEtc" id="nbiBudgetSubEtc" title="기타사항" value="" readonly>'
						+'</div>'
					+'</td>'
					+'<td>'
						+'<div class="pd_t5" id="budgetPriceDiv_0">'
							+'<input type="text" class="form-control wd_p80 ta_r dp_inline mg_r5 emptyChkByClass"  name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11"title="예산액" onkeyup="commaKeyUpChkSum(this);" value="" >'
							+'<button class="btn btn-sm btn-primary" type="button" onclick="addSubBudget(this);"><i class="fa fa-plus mg_r5"></i>추가</button>'
						+'</div>'
					+'</td>'
					+ '</tr>');
	$tableTr.find("tbody").append(
				'<tr>'
					+ '<th scope="row">' + '예산 합계' + '</th>'
						+ '<td colspan="2" class="ta_c" id="budgetSum">'
						+ budgetSum + ' 원' + '</td>'
				+ '</tr>');

	trIndex++

}
/**sub 예산 금액 추가*/
function addSubBudget(_obj) {
	var _rowCount = $(_obj).parent('div').parent('td').children("div").length;

	$(_obj).parent('div').parent('td').prev().append(
			'<div class="pd_t5" id="budgetSubCdDiv_'+subIndex+'">'
			+'<select class="form-control input-sm emptyChkByClass wd_p50 dp_inline mg_r5" name="nbiBudgetSubCd" id="nbiBudgetSubCd" title="예산 소분류" onchange="fnCreateBudgetEtc(this)">'
				+'<option value="">예산구분을 선택해주세요.</option>'
				+'<option value="NCR_T04_C01">강사료</option>'
				+'<option value="NCR_T04_C02">교재비/인쇄비</option>'
				+'<option value="NCR_T04_C03">행사진행비</option>'
				+'<option value="NCR_T04_C04">기타</option>'
			+'</select>'
			+'<input type="text" style="background-color:#eee;" class="form-control wd_p40 input-sm dp_inline" onkeyup="chkByte(this, 1000)" name="nbiBudgetSubEtc" id="nbiBudgetSubEtc" title="기타사항" value="" readonly>'
		+'</div>'
	);
	$(_obj).parent('div').parent('td').append(
			'<div class="pd_t5 test" id="budgetPriceDiv_'+subIndex+'">'
				+'<input type="text" class="form-control wd_p80 ta_r dp_inline mg_r5 emptyChkByClass" name="nbiBudgetPrice" id="nbiBudgetPrice" maxlength="11"title="예산액" onkeyup="commaKeyUpChkSum(this);" value="" >'
				+'<button class="btn btn-sm btn-danger btn-danger test"  onclick="removeBudget(this, \'sub\');" type="button"><i class="fa fa-minus mg_r5"></i>삭제</button>'
			+'</div>'
	);

	subIndex++;

	var trCnt = parseInt(_rowCount) +1;
	console.log("trCnt = "+trCnt);
	$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input[name=budgetTrCnt]').val(trCnt);
	console.log("최종값 = "+$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input').attr('name'));
}

/**tr 삭제**/
function removeBudget(_obj,_subYn) {
	if (_subYn == 'sub') {
		var trCnt = $(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input[name=budgetTrCnt]').val();
		$(_obj).parent('div').parent('td').parent('tr').children('td:eq(0)').children('input[name=budgetTrCnt]').val((parseInt(trCnt)-1) ); 
		
		var index= [];
		index = $(_obj).parent("div").attr("id").split("_");

		$(_obj).parent("div").parent("td").prev().children("div #budgetSubCdDiv_"+index[1]).remove();
		$(_obj).parent("div").remove();
	}else{
		$(_obj).parent("td").parent("tr").remove();
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
function addPartDepart() {
	var npiOprtDeptDiv = $('input[name=npiOprtDeptDiv]:checked').val();

	if (npiOprtDeptDiv == "MAJOR") {
		$('div[name=partDepartDiv]').remove();
		alert("운영주체가 학과인 경우 학과 학생만 신청 가능하여 참여학과 설정이 불필요합니다.");
		return false;
	}

	$tableTr = $("#partDepartTd");
	var _rowCount = $("#partDepartTd p").length;
	// 	console.log("check : "+_rowCount);
	var departTag = "";

	if (_rowCount > 9) {
		alert("참여학과는 10개까지만 가능 합니다.");
		return false;
	}

	departTag = '<div name ="partDepartDiv" id="partDepartDiv_'+_rowCount+'">';
	departTag += '<p class="ad_search_row wd_p40 mg_t10" id="partDepartP_'+_rowCount+'" >';
	departTag += '<input type="text" class="form-control" name="npiPartiDeptNmTmp" onkeydown="fnEnterActionForDepartTd('+ "'npiPartiDept','"+ _rowCount+"'"+');"'+'id="npiPartiDeptNm_'+_rowCount+'" placeholder="검색어를 입력하세요" title="참여학과" value="">';
	departTag += '<button type="button" class="btn btn-primary btn_form btn_search" onclick="fnGetDeptInfo('+ "'npiPartiDept','"+ _rowCount+ "'"+ ');"><i class="fa fa-search"></i>검색</button>';
	departTag += '<input type="hidden" class="ad_formstyle" name="npiPartiDeptCdTmp"  id="npiPartiDeptCd_'+_rowCount+'" value="">';
// 	departTag += '<input type="text" name="ncrPartDepartNmSearchFlag"   id="ncrPartDepartNmSearchFlag_'+_rowCount+'" value="N">';
// 	departTag += '<input type="text" name="ncrPartDepartNmOrSearchName" id="ncrPartDepartNmOrSearchName_'+_rowCount+'" value="">';
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

	/** 에디터 데이터 담기 **/
	var npiContent = CKEDITOR.instances["npiCont"].getData();
	$("#npiContHidden").val(npiContent);
	var npiNeedsContent = CKEDITOR.instances["npiNeedsCont"].getData();
	$("#npiNeedsContHidden").val(npiNeedsContent);
	var npiEduContent = CKEDITOR.instances["npiEduCont"].getData();
	$("#npiEduContHidden").val(npiEduContent);
	var npiBenefitContent = CKEDITOR.instances["npiBenefitCont"].getData();
	$("#npiBenefitContHidden").val(npiBenefitContent);

	$("#npiGradeLimit").val(conComma('npiGradeLimitChk','checkbox'));

	/** 운영주체가 학과면 운영부서를 참여학과에 넣어줌 **/
	var deptCd = "";
	var abilityCnt = $('#abilityCnt').val();

	if ($("input[name=npiOprtDeptDiv]:checked").val() == "DEPART") {
		$("#npiPartiDeptCd").val(conComma('npiPartiDeptCdTmp','text'));
		$("#npiPartiDeptNm").val(conComma('npiPartiDeptNmTmp','text'));

		abilityDiv = "core";
		abilityCd ="A";

		if ($('#viewType').val() == 'MODIFY' || $('#viewType').val() == 'LOAD') {
			$('input[name=npiAbilitySum]').val($('input[name=coreNpiAbilitySum]').val());
		}

	}else if($("input[name=npiOprtDeptDiv]:checked").val() == "MAJOR") {
		$("#npiPartiDeptCd").val($('input[name=deptCd]').val());
		$("#npiPartiDeptNm").val($('input[name=deptNm]').val());

		abilityDiv = "major";
		abilityCd ="C";
		deptCd = $('#deptCd').val();

		if ($('#viewType').val() == 'MODIFY' || $('#viewType').val() == 'LOAD') {
			$('input[name=npiAbilitySum]').val($('input[name=majorNpiAbilitySum]').val());
		}
	}


	/** 하위역량점수 퍼센트 합 상위역량점수에 셋팅 **/
	var subTotalCnt = 0;
	var checkArray = [];
	var checkCount = 0;

	for (var i = 1; i <= abilityCnt; i++) {
		var upAbility = 0;
		for (var k = 1; k <= 2; k++) {
			var lowerAbility = $('#'+abilityDiv+'Table > tbody').children('tr:last').children('td:eq('+subTotalCnt+')').children('div').children('input').val();
			if (isEmpty(lowerAbility)) {
				$('#'+abilityDiv+'Table > tbody').children('tr:last').children('td:eq('+subTotalCnt+')').children('div').children('input').val(0);
				lowerAbility = 0;
			}

			upAbility = parseInt(upAbility)+ parseInt(lowerAbility);

			$('input[name='+deptCd+abilityCd+'00'+i+']').val(upAbility);
			subTotalCnt++;
		}

		checkArray.push($('input[name='+deptCd+abilityCd+'00'+i+']').val());
	}

	/** 주요역량 값 체크 - 역량점수 중 가장 큰 값 **/
	var max = Math.max.apply(null,checkArray);
	var maxChk = 0;
	for(var i =0;i<checkArray.length;i++){
		checkCount++;
		if(max==checkArray[i]){
			$("input[name=npiMainAbilityCd]").val(deptCd+abilityCd+'00'+checkCount);
			maxChk++;
		}
	}

	/** 배열중 최고값과 같은것이 있다면 ( count > 1 ) **/
	if( maxChk > 1 ){
		alert("역량 비율의 최고값은 한 개여야 합니다.");
		nullValidation = false;
		return false;
	}

	/** 예산 콤마제어 **/
	$("input[name=nbiBudgetPrice]").each(function() {
		$(this).val(uncomma($(this).val()));
	})


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

		/** 운영부서 체크 **/
		if ($('#writeForm input[name=deptCd]').val() == null || $('#writeForm input[name=deptCd]').val() == '') {
			fnGetDeptInfo('dept');
			nullValidation = false;
		}

		/** 역량 퍼센트 합 100 체크 */
		//운영주체가 학과면 운영부서를 참여학과에 넣어줌
		var abilityCd = "";
		if ($("input[name=npiOprtDeptDiv]:checked").val() == "DEPART") {
			abilityCd ="A";

		}else if($("input[name=npiOprtDeptDiv]:checked").val() == "MAJOR") {
			abilityCd =$('#deptCd').val()+"C";
		}

		var abilityCnt = $('#abilityCnt').val();
		var abilityScoreSum = 0;

		for (var i = 1; i <= abilityCnt; i++) {
			var abilityVal = $('input[name='+abilityCd+'00'+i+']').val();
			abilityVal = isEmpty(abilityVal) ? 0 : abilityVal;
			
			abilityScoreSum = abilityScoreSum + parseInt($('input[name='+abilityCd+'00'+i+']').val());
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

		/** 모집인원 0 이상 입력 **/
		if ($("#npiRecrCnt").val() <= 0) {
			alert("모집인원이 0명 이상이어야 합니다.");
			nullValidation = false;
		}

		/** 참여학과 체크 **/
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

		/** 담당자 코드 체크 **/
		if ($('#npiStfNo').val() == null || $('#npiStfNo').val() == '') {
			fnGetStaffInfo();
			nullValidation = false;
		}
		/** 신청서 Y 체크했을경우 파일 등록 유무 체크 **/
		if ($('input[name="npiApplyFileYn"]:checked').val() == "Y") {
			if ($('.file_box').length <= 0) {
				alert("신청서 파일을 등록해주세요.")
				nullValidation = false;
			};
		}

		/** 팀 선택 시, 최소, 최대인원 Check **/
		if($("#npiTeamY").is(":checked")){
			if(!$("#npiTMinCnt").emptyCheck()) {
				nullValidation = false;
				return false;
			}
			if(!$("#npiTMaxCnt").emptyCheck()) {
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

	if (nullValidation) {
		return confirm("저장하시겠습니까?");
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
		fnGoNcrProgramListAdmin(response.programGubun,response.viewType);
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
		$('#npiTMinCnt').prop('disabled',false);
		$('#npiTMaxCnt').prop('disabled',false);
		$('input[name=npiWaitCnt]').val('');
		$('input[name=npiWaitCnt]').prop('disabled',true);
	} else {
		$('#npiTMinCnt').prop('disabled',true);
		$('#npiTMaxCnt').prop('disabled',true);
		$('input[name=npiWaitCnt]').prop('disabled',false);
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
			infoObj.npiKeyId = selData[i].NPI_KEY_ID;
			infoArray.push(infoObj);
		}
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
	var npiTitle =$("#npiTitle").val();
	var addReqOrdFlag =$("#addReqOrdFlag").val();
	var addReqDeadLine =$("#addReqDeadLine").val();
	var _programGubun = $('#programGubun').val();
	var diagFlag = $('#diagFlag').val();


	var _url = BASE_PATH+"/"+_programGubun+"/a/m/getProgramApplListAjax.do";

	$.ajax({
		url : _url
		, type : "post"
		, dataType : "html"
		, data : {
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
			diagFlag : diagFlag
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
@ comment  : 마감 임박순
@ param    : categoryVal : 구분값
@ history  : 2019-05-10 (최초작성)
**********************************************************
**/
function fnSetProgramTerm(typeFlag) {
	var chked_val = "";
	if(typeFlag == "term1"){
		$(":checkbox[id='program_term1']:checked").each(function(pi,po){
		 	   chked_val += po.value;
		  });
		$("#addReqDeadLine").val(chked_val);
	}else if(typeFlag == "term2"){
		$(":checkbox[id='program_term2']:checked").each(function(pi,po){
		 	   chked_val += po.value;
		  });
		$("#addReqOrdFlag").val(chked_val);
	}else{
		$("#addReqDeadLine").val('');
		$("#addReqOrdFlag").val('');
	}
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
	var npiTitle =$("#npiTitle").val();
	var _programGubun = $('#programGubun').val();
	var stdStateCd = $("#stdStateCd").val();
	var peerLevel = $("#peerLevel").val();

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
			peerLevel : peerLevel
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
				alert("다수의 검색 결과가 조회되었습니다. \n해당 담당자를 선택해주세요.");
				fnGoStaffListPopUp(stfNmTagId);

			} else if (res.stafInfoList.length == 0) {
				alert("검색 결과가 없습니다. \n해당 담당자를 검색해 주세요.");
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

	$('#POPUP_OPEN_BTN').trigger('click');
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
		if ($('input[name=npiOprtDeptDiv]:checked').val() == 'MAJOR') {
			_ncrDeptDiv = "M";
		}else{
			_ncrDeptDiv = "N";
		}
		
		_ncrDeptNm = "deptNm";
		_ncrDeptCd = "deptCd";
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
					 $('#POPUP_OPEN_BTN').trigger('click');
					fnGoOpenDeptListPopup(searchType,idx,_ncrDeptDiv);

				}else if(res.deptInfoList.length == 0){
					alert("검색 결과가 없습니다. \n해당 부서를 검색해 주세요.");
					$('#POPUP_OPEN_BTN').trigger('click');
					fnGoOpenDeptListPopup(searchType,idx,_ncrDeptDiv);

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
 **/
function fnGoOpenDeptListPopup(_searchType, idx, deptDiv){
	var deptNm = "";
	if(_searchType == "npiPartiDept"){
		deptNm = $("#npiPartiDeptNm_" + idx).val();
	}else{
		deptNm = $("#deptNm").val();
	}

	fnOpenDeptListPopup(_searchType, deptNm, idx, deptDiv);

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
	var _url = BASE_PATH+"/ncrProgramAppl/a/n/createProgramReqStd.do";
	//var _url = BASE_PATH+"/cmm/fms/getStaffListPopUp.do";
	if( confirm("신청하시겠습니까?" ) ) {
	$.ajax({
		  url: _url,
          data: _formData,
          dataType: 'text',
          processData: false,
          /*contentType: false,*/
          contentType: "application/x-www-form-urlencoded;",
          type: 'POST'
			, success : function(res) {
				//팀원신청이면
				if (npiTeamYn == 'Y') {
					var tStdNo = "";
					for (var i = 0; i < res.rstMap.rstList.length; i++) {
						tStdNo = tStdNo + "," + res.rstMap.rstList[i].npsStdNo;
					}
					if (res.rstMap.sts == "SUCCESS_APL") {
						alert("신청이 완료되었습니다.\n("+tStdNo.substring(1)+")");
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');

					}else if(res.rstMap.sts == "FAIL_APL_FAIL"){
						alert("신청에 실패하였습니다. 모집인원을 확인해 주세요.\n("+tStdNo.substring(1)+")");
					}
					
				}else{
					//신청성공(산청, 대기신청)
					console.log(res);
					if( res.rstMap.sts == "SUCCESS_APL" || res.rstMap.sts == "SUCCESS_WAIT" ) {
						if(res.rstMap.sts == "SUCCESS_APL"){
							alert("신청이 완료되었습니다.");
							console.log("승인대기로 신청 완료");

						}else if(res.rstMap.sts == "SUCCESS_WAIT"){
							alert("대기신청이 완료되었습니다.");
							console.log("대기신청으로 신청 완료");
						}
						$("#popCloseBtn").trigger("click");
						fnGoApplyList('MODIFY');

					//신청실패(1.이미 신청한 프로그램일 경우  2.모집인원, 대기인원이 모두 마감되었을 경우)
					}else if(res.rstMap.sts == "FAIL_APL_DONE" ) {
						alert("이미 신청한 프로그램입니다.");
					}else if (res.rstMap.sts == "FAIL_APL" ){
						alert("모집인원 및 대기인원이 전부 찼습니다. 다른 프로그램을 신청해주세요.");
					}else {
						alert("신청에 실패하였습니다. 잠시후 다시 시도해 주세요.");
					}

				}

			}
		});
	}
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
	if (programGubun.toLowerCase().indexOf('ncr') !== -1) {
		path = "myNcrProgram";
	}else{
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
			,npiOperModeCd : $('#insertForm input[name=npiOperModeCd]').val()
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

	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+programGubun+"/r/n/getTeammatePopUp.do";
	var popupParams = {
			npiTMaxCnt : $('#insertForm input[name=npiTMaxCnt]').val()
			,npiKeyId : $('#insertForm input[name=npiKeyId]').val()
			,npiPartiDeptCd : $('#insertForm input[name=npiPartiDeptCd]').val()
			,npiGradeLimit : $('#insertForm input[name=npiGradeLimit]').val()
			,npiOprtDeptDiv : $('#insertForm input[name=npiOprtDeptDiv]').val()
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

		$.ajax({
			type : "POST"
			, url : _url
			, cache : false
			, async : false
			, data : _formData
			, processData : false
			, contentType : false
			, success : function( res ) {
				if (res.rtnCode == 0) {
					alert(_msg+"되었습니다.");
					fnGoApplyList("MODIFY");
				}else{
					alert(_msg+"에 실패하였습니다.(1)");
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
		}

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
		var _sahScore = 0;

		if ($('#npiOprtDeptDiv').val() == "DEPART") {
			infoObj.sahAbilityCd = "A00"+i;
			infoObj.sahScore = isEmpty($('#A00'+i+'_'+_npsKeyId).val()) ? 0 : $('#A00'+i+'_'+_npsKeyId).val();
			_sahScore = isEmpty($('#A00'+i+'_'+_npsKeyId).val()) ? 0 : $('#A00'+i+'_'+_npsKeyId).val();

		}else if($('#npiOprtDeptDiv').val() == "MAJOR"){
			infoObj.sahAbilityCd = $('#npiOprtDeptCd').val()+"C00"+i;
			infoObj.sahScore = isEmpty($('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val()) ? 0 : $('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val();
			_sahScore = isEmpty($('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val()) ? 0 : $('#'+$('#npiOprtDeptCd').val()+"C00"+i+"_"+_npsKeyId).val();

			if (parseInt(_sahScore) <= 0) {
				alert('입력한  역량점수가 없습니다.');
				return false;
			}
		}
		paramsArray.push(infoObj);
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
				if(res.rtnCode == "0") {
					alert("해당 학생에게 역량점수가 부여되었습니다.");
					tableObject.destroy();
					callGrid();
				} else {
					alert("역량점수 부여가 되지 않았습니다.\n 잠시후 다시 시도해 주세요.");
				}
			}
		});
}

/**
 *********************************************************
@ function : 참여시간 및 난이도 선택시 역량 환산점수 계산
@ comment  :
@ param    : _value = 반영여부
@ history  : 2017-11-07 (최초작성)
 **********************************************************
 **/
function fnCalAbilityScore() {

	var npiPartyTime = $('input[name=npiPartyTime]').val();
	var npiLevel = $('select[name=npiLevel]').val();
	var sum = "0";

	if (isEmpty(npiPartyTime)) {
		npiPartyTime = 0;
	}
	if (isEmpty(npiLevel)) {
		npiLevel = 0;
	}

	sum = (parseInt(npiPartyTime) * parseInt(npiLevel)) * 10;

	$('.abilitySumVal').text(sum+" 점");
	$('input[name=npiAbilitySum]').val(sum);
}

/**
 *********************************************************
@ function : 하위역량 입력값의 합을 상위역량 퍼센트에 넣어줌
@ comment  :
@ param    : _cdDiv = 전공/핵심 역량 구분
@ history  : 2017-11-07 (최초작성)
 **********************************************************
 **/
function fnCalUpAbilityScore(_cdDiv) {
	var abilityCnt = $('#abilityCnt').val();
	var deptCd = $('#deptCd').val();
	var abilityCd = _cdDiv == 'major' ? 'C' : 'A';

	/** 하위역량 퍼센트 합 상위역량점수에 셋팅 **/
	var subTotalCnt = 0;
	var checkArray = [];
	var checkCount = 0;
	var inputValSum = 0;
	
	/** 역량 퍼센트 합 100 체크 */
	var abilityCd = "";
	if ($("input[name=npiOprtDeptDiv]:checked").val() == "DEPART") {
		abilityCd ="A";

	}else if($("input[name=npiOprtDeptDiv]:checked").val() == "MAJOR") {
		abilityCd =$('#deptCd').val()+"C";
	}

	for (var i = 1; i <= abilityCnt; i++) {
		var upAbility = 0;
		for (var k = 1; k <= 2; k++) {
			var lowerScore = $('#'+_cdDiv+'Table > tbody').children('tr:last').children('td:eq('+subTotalCnt+')').children('div').children('input').val();
			upAbility = parseInt(upAbility)+ parseInt(isEmpty(lowerScore) ? 0 : lowerScore);
			$('input[name='+deptCd+abilityCd+'00'+i+']').val(upAbility);
			$('#'+_cdDiv+'Ability'+i).text(upAbility);

			subTotalCnt++;
		}
	}
	
	var abilityCnt = $('#abilityCnt').val();
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

