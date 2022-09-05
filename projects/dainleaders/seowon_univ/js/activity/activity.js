var BASE_PATH =  sessionStorage.getItem("contextRootPath");


/*
 * ***************************************
@ function : 엔터키 눌릴시 검색
@ comment  :
****************************************
 * */
$(document).keypress(function(event) {
	var keycode = event.keyCode || event.which;
    if(event.keyCode == 13) {
    	$('#searchBtn').trigger('click');
    }
});


/*
***************************************
@ function : 엑셀샘플 다운로드
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnDownExcelSample(_menu){
	var _url = BASE_PATH+"/"+_menu+"/r/n/getActivitySampleExcelDown.do";

	if (_menu == 'certiInfo') {
		//fn_fileDownload(BASE_PATH,'CERTILANG00000000');
		location.href = BASE_PATH+"/sample/certilang_upload_sample_new.xlsx";
	}else if(_menu == 'langInfo'){
		//fn_fileDownload(BASE_PATH,'CERTILANG00000001');
		location.href = BASE_PATH+"/sample/certilang_upload_sample_new.xlsx";
	}else if(_menu == 'trainingSTF'){
		location.href = BASE_PATH+"/sample/training_act_req_sample.xlsx";
	}else {
		$("#excelSampleDownForm").attr({"action" : _url, "target" : "excelView"}).submit();
	}

}

/*
***************************************
@ function : 엑셀양식 다운로드
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnDownExcelForm(_menu){
	var _url = BASE_PATH+"/"+_menu+"/r/n/getActivitySampleExcelDown.do";
	var _urlForForm = BASE_PATH+"/"+_menu+"/r/n/getActivityFormExcelDown.do";

	if (_menu == 'certiSTF') {
		//fn_fileDownload(BASE_PATH,'CERTILANG00000000');
		//location.href = BASE_PATH+"/sample/certilang_upload_sample_new.xlsx";
		$("#excelDownForm").attr({"action" : _urlForForm, "target" : "excelView"}).submit();
	} else if (_menu == 'langSTF') {
		//fn_fileDownload(BASE_PATH,'CERTILANG00000001');
		//location.href = BASE_PATH+"/sample/certilang_upload_sample_new.xlsx";
		$("#excelDownForm").attr({"action" : _urlForForm, "target" : "excelView"}).submit();
	} else if (_menu == 'clubSTF') {
		$("#excelDownForm").attr({"action" : _urlForForm, "target" : "excelView"}).submit();
	} else if (_menu == 'trainingSTF'){
		location.href = BASE_PATH+"/sample/training_act_req_sample.xlsx";
	} else {
		$("#excelSampleDownForm").attr({"action" : _url, "target" : "excelView"}).submit();
	}
}

/*
***************************************
@ function : 엑셀양식 업로드
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnExcelUpload(_menu) {

	fn_resetFile(null, "fileExcelUpload");
	$("#excelUploadForm input[name=fileExcelUpload]").trigger("click");
}

$("#excelUploadForm input[name=fileExcelUpload]").on("change", function() {

	var _menu = $("input[name=menu]").val();
	var _subMenu = $("input[name=subMenu]").val();

	//자격증/어학/동아리 신청 데이터 업로드일 경우
	var _url = BASE_PATH+"/"+_menu+"/w/n/createActivityUploadExcel.do";

	console.log("subMenu = "+_subMenu);

	//자격증/어학 정보 업로드일 경우
	if (_subMenu == "certiLangInfo") {
		/*_url = BASE_PATH+"/"+_menu+"/w/n/createCertiLangUploadExcel.do";*/
		_url = BASE_PATH+"/"+_menu+"/w/n/createCertiLangClubUploadExcel.do";
	//동아리 정보 업로드일 경우
	} else if (_subMenu == "clubInfo") {
		_url = BASE_PATH+"/"+_menu+"/w/n/createCertiLangClubUploadExcel.do";
	}

	if( $("#excelUploadForm input[name=fileExcelUpload]").val() != "" ) {

		var formData = new FormData();
		formData.append("fileExcel", $("#excelUploadForm input[name=fileExcelUpload]")[0].files[0]);

		$.ajax({
			url: _url
			, async : false
			, cache : false
			, enctype : "multipart/form-data"
			, processData : false
			, contentType : false
			, data : formData
			, type: "post"
			, success : function( res ) {
				var _totalCnt = res.result.uploadTotalCnt;
				var _failCnt = res.result.uploadFailCnt;
				var _successCnt = parseInt(_totalCnt)-parseInt(_failCnt);
				var _failMsg = "";

				if( _totalCnt != 0 && _failCnt == 0 ) {
					alert("추가되었습니다.\n\n"
							+"총 건수 : "+_totalCnt+"건 \n"
							+"성공 : "+_successCnt+"건 \n"
							+"실패 : "+_failCnt+"건 \n");

				} else {

					_failMsg = "항목이 입력되지 않았거나 입력하신 정보가 맞지 않아 실패하였습니다.\n\n"
						+"총 건수 : "+_totalCnt+"건 \n"
						+"성공 : "+_successCnt+"건 \n"
						+"실패 : "+_failCnt+"건";

//					for (var i = 0; i < res.result.errData.length; i++) {
//						if (i = 0) {
//							_failMsg = _failMsg + res.result.errData[i].errCode;
//						}else {
//							_failMsg = _failMsg + ","+res.result.errData[i].errCode;
//						}
//					}

					alert(_failMsg);
				}

				tableObject.destroy();
				callGrid();
			}
		});

	}
});



/*
***************************************
@ function : 반려팝업
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnOpenRejectPopUp(_menu){
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false
	});

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_menu+"/r/n/getRejectPopUp.do";
	var popupParams = {}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/*
***************************************
@ function : 개별 반려팝업
@ param    :_menu = 메뉴구분
@ param    :_oamStdNo = 학번
@ param    :_korNm = 이름
@ param    :_oamKeyId = 자기주도활동 key
@ comment  :
****************************************
 * */
function fnOpenRejectIndiPopUp(_menu, _oamStdNo, _korNm, _oamKeyId){
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false,
		data : {
			oamStdNo : _oamStdNo,
			korNm : _korNm,
			oamKeyId : _oamKeyId
		}
	});

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_menu+"/r/n/getRejectIndiPopUp.do";
	var popupParams = {}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/*
***************************************
@ function : 개별 반려 내용 확인 팝업
@ param    :_menu = 메뉴구분
@ param    :_oamKeyId = 자기주도활동 key
@ comment  :
****************************************
 * */
function fnOpenRejectInfoPopUp(_menu, _oamKeyId){
	$('#POPUP_OPEN_BTN').trigger('click');
	$.ajaxSetup({
		cache : false,
		data : {
			oamKeyId : _oamKeyId
		}
	});

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_menu+"/r/n/getRejectInfoPopup.do";
	var popupParams = {}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/*
***************************************
@ function : 상태일괄 변경
@ comment  :APPROVE(승인)/REJECT(반려)
@ param    :_menu = 메뉴구분
@ param    :_state = 승인/반려
@ param    :_oamReasonCont = 반려사유
****************************************
 * */
function fnModifyStateAjax(_menu,_oamReasonCont) {

	var selData = tableObject.rows({selected:true}).data();// 선택된 row에 대한 값
	var selActState = $('#selActState').val();
	var chkCnt = 0; /**선택된 학생 총카운트*/
	var count = 0; /**수정가능 학생 카운트*/

	//상태변경 update info 목록
	var infoArray = new Array();
	var abilityInfo = new Object();
	var abilityInfoArray = new Array();

	var resultObj = new Object();
	var abilityNum = 1;
	var addMileageVal = 0;
	var abilityScoreVal = 0;


	for(var i=0; i < selData.length; i++){
		chkCnt++
		var infoObj = new Object();
		var _stsVal = selData[i].OAM_STATE;
		var finMileage = isEmpty($("#finMileage_"+selData[i].OAM_KEY_ID).val()) ? 0 : $("#finMileage_"+selData[i].OAM_KEY_ID).val()
		var isOkStdState = false;

		infoObj.oamKeyId = selData[i].OAM_KEY_ID;


		/**선택한 상태가 승인대기이면*/
		if(selActState == "OAMSATECD01") {

			/**학생 상태값이 반려, 승인 일때 수정이 가능*/
			if( _stsVal == "OAMSATECD03" || _stsVal == "OAMSATECD02" ) {
				count++;
				isOkStdState = true;
			}
		}

		/**선택한 상태가 승인 또는 반려이면*/
		else if(selActState == "OAMSATECD02" || selActState == "OAMSATECD03") {

			/**학생 상태값이 승인대기일때만 수정가능*/
			if( _stsVal == "OAMSATECD01") {
				count++;
				isOkStdState = true;
			}
		}

		console.log("### 총 카운트: "+chkCnt);
		console.log("### 수정가능 카운트: "+count);

		/**상태변경 가능 학생 있는지 체크*/
		if( count == 0 ) {
			alert("현재 상태에 적용할 수 있는 학생이 없습니다.");
			return;
		}

		//변경가능한 상태인 학생만 체크
		if (isOkStdState == true) {

			/******봉사활동 경우 */
			if (_menu.indexOf('service') > -1){

				infoObj.oamFinMileage = finMileage;
				infoObj.stdNo = selData[i].STD_NO;
				console.log(infoObj);

			/******수상실적 경우*/
			} else if (_menu.indexOf('award') > -1) {
				if (selData[i].OAM_DTL_TYPE_CD == 'IN') {
					infoObj.oamFinMileage = 1000;
					infoObj.totalMileage = 1000;
				} else if (selData[i].OAM_DTL_TYPE_CD == 'OUT') {
					infoObj.oamFinMileage = 2000;
					infoObj.totalMileage = 2000;
				}
				infoObj.stdNo = selData[i].STD_NO;
				console.log(infoObj);

			/******동아리 경우*/
			} else if (_menu.indexOf('club') > -1) {

				var oamFruitage = Number(selData[i].OAM_FRUITAGE);

				infoObj.oamFinMileage = oamFruitage * 100;
				infoObj.totalMileage = oamFruitage * 100;

				infoObj.stdNo = selData[i].STD_NO;
				console.log(infoObj);

			/******자격증 경우*/
			}else if (_menu.indexOf('certi') > -1) {
				/*infoObj.totalMileage = selData[i].CLC_MILEAGE;
				infoObj.oamFinMileage = selData[i].CLC_MILEAGE;*/

				infoObj.oamFinMileage = 1000;
				infoObj.totalMileage = 1000;

				infoObj.stdNo = selData[i].STD_NO;
				console.log(infoObj);

			/******어학 경우*/
			}else if (_menu.indexOf('lang') > -1) {
				/*infoObj.totalMileage = selData[i].CLC_MILEAGE;
				infoObj.oamFinMileage = selData[i].CLC_MILEAGE;*/

				infoObj.oamFinMileage = 500;
				infoObj.totalMileage = 500;

				infoObj.stdNo = selData[i].STD_NO;
				console.log(infoObj);
			}

			infoArray.push(infoObj);

		}//if isOkStdState end
	}//for end


	resultObj.stateInfoList = infoArray;
	resultObj.oamReasonCont = _oamReasonCont;
	resultObj.oamTypeCd = $('#oamTypeCd').val();
	resultObj.oamState = selActState;
	resultObj.stdState = _stsVal;


	$.ajax({
		type : "POST"
		, url : BASE_PATH+"/"+_menu+"/w/n/modifyActStdMultiState.do"
		, contentType : 'application/json'
		, async : false
		, dataType : 'json'
		, data : JSON.stringify(resultObj)
		, success : function(res){

			if (res.rtnCode == 0) {
				alert("일괄 상태변경을 성공하였습니다.");

				if (!isEmpty(_oamReasonCont)) {
					$('#ACT_POP_UP_CLOSE_BTN').trigger('click');
				}

				tableObject.destroy();
				callGrid();

			}else{
				alert("일괄 상태변경을 실패하였습니다.");
			}
		}
		, error:function(request,status,error){
			alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
		}
	});
}

/*
***************************************
@ function : 삭제
@ param    :_menu = 메뉴구분
****************************************
 * */
function fnDelOamData(_menu) {

	var selData = tableObject.rows({selected:true}).data();// 선택된 row에 대한 값

	if(selData.length < 1){
		alert("하나 이상의 row를 선택해 주세요.");
		return;
	}

	var infoArray = new Array();

	for(var i=0; i < selData.length; i++){
		var infoObj = new Object();

		infoObj.oamKeyId = selData[i].OAM_KEY_ID;
		infoObj.oamState = selData[i].OAM_STATE;
		infoObj.fileNum = Number(selData[i].FILE_CNT);
		infoArray.push(infoObj);

		//alert('infoObj.oamKeyId : ' + infoObj.oamKeyId + ', infoObj.oamState : ' + infoObj.oamState + ', infoObj.fileNum : ' + infoObj.fileNum);
	}

	if (confirm("정말 삭제하시겠습니까?\n삭제가 되면 데이터는 복구가 불가능합니다.")) {
		$.ajax({
			type : "POST"
			, url : BASE_PATH+"/"+_menu+"/w/n/removeOamData.do"
			, contentType : 'application/json'
			, async : false
			, dataType : 'json'
			, data : JSON.stringify(infoArray)
			, success : function(res){

				if (res.rtnCode == 0) {
					alert("삭제를 성공하였습니다.");
					tableObject.destroy();
					callGrid();

				}else{
					alert("삭제가 실패하였습니다.");
				}
			}
			, error:function(request,status,error){
				alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
			}
		});
	}
}

/*
***************************************
@ function : 반려 버튼을 통한 개별 반려
@ comment  : REJECT(반려)
@ param    : _menu = 메뉴구분
@ param    : _state = 반려
@ param    : _oamReasonCont = 반려사유
****************************************
 * */
function fnModifyIndiStateAjax(_menu, _oamReasonCont) {

	var selActState = 'OAMSATECD03';
	var resultObj = new Object();

	resultObj.oamKeyId = $('#oamKeyId').val();
	resultObj.oamReasonCont = _oamReasonCont;
	resultObj.oamTypeCd = $('#oamTypeCd').val();
	resultObj.oamState = selActState;

	console.log(resultObj);

	$.ajax({
		type : "POST"
		, url : BASE_PATH+"/"+_menu+"/w/n/modifyActStdIndiState.do"
		, contentType : 'application/json'
		, async : false
		, dataType : 'json'
		, data : JSON.stringify(resultObj)
		, success : function(res){

			if (res.rtnCode == 0) {
				alert("일괄 상태변경을 성공하였습니다.");

				if (!isEmpty(_oamReasonCont)) {
					$('#ACT_POP_UP_CLOSE_BTN').trigger('click');
				}

				tableObject.destroy();
				callGrid();

			}else{
				alert("일괄 상태변경을 실패하였습니다.");
			}
		}
		, error:function(request,status,error){
			alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
		}
	});
}

/*
***************************************
@ function : 학생 첨부파일 일괄 다운로드
@ comment  :
@ param    :
@ param    :
@ param    :
@ history  : 2019-02-20 (최초작성)
****************************************
 * */
function fnFileAllDownload(_fimReferKeyId,_menu,_stdNo,_korNm) {

	var _url = BASE_PATH+"/"+_menu+"/r/n/getActivityFileAllDown.do";

	$.ajax({
		url : _url
		, type : "POST"
		, dataType : "json"
		, async : false
		, data : {
			fimReferKeyId : _fimReferKeyId
		}
		, success : function(res) {
			var isSuccess = res.isSuccess;
			var path = res.path;
			if(isSuccess == "false") {
				alert("파일이 없습니다.");
			}else if(isSuccess == "true") {
				$("#allDownForm input[name=path]").val(res.path);
				$("#allDownForm input[name=stdNo]").val(_stdNo);
				$("#allDownForm input[name=korNm]").val(_korNm);
				$("#allDownForm").attr("action",BASE_PATH+"/"+_menu+"/r/n/allActFileDownload.do");

				$("#allDownForm").submit();
			}else {
				alert("파일다운에 실패했습니다.");
			}
		}
	});

}


/*
***************************************
@ function : 자격증/어학 정보 등록 팝업
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnCertiLangInfoPopUp(_menu,_keyId,_viewType){

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_menu+"/r/n/getCertiLangPopUp.do";
	var popupParams = {
			viewType : _viewType
			, clcCodeKeyId : _keyId
	}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/*
***************************************
@ function : 동아리 정보 등록 팝업
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnClubInfoPopUp(_menu,_keyId,_viewType){

	var popupDivId = "#layerPopup";
	var popupUrl = BASE_PATH+"/"+_menu+"/r/n/getClubPopUp.do";
	var popupParams = {
			viewType : _viewType
			, ccmCodeKeyId : _keyId
	}

	loadPopup(popupDivId, popupUrl, popupParams);
}

/*
***************************************
@ function : 자격증/어학 정보 등록/수정
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnCreateCertiLangAjax(_menu,_viewType,_abilityCnt) {

	var _url = "";
	var _msg = "";
	var _clcMileage = $('#clcMileage').val();
	var abilityScore = 0;

	if (!fnEmptyCheckByClass()) {
		return false;
	}

	if (_viewType == "MODIFY") {
		_url = BASE_PATH+"/"+_menu+"/w/n/modifyCertiLangInfo.do";
		_msg = "수정";
	}else {
		_url = BASE_PATH+"/"+_menu+"/w/n/createCertiLangInfo.do";
		_msg = "저장";
	}

	if (confirm(_msg+"하시겠습니까?")) {

		$("#insertCLForm").ajaxForm(
				{
					url : _url,
					type : "POST",
					dataType : "json",
					success : function(res) {

						if (res.rtnCode == 0) {
							alert(_msg+"을 성공하였습니다.");
							$('#closePopBtn').trigger('click');
							tableObject.destroy();
							callGrid();

						}else if(res.rtnCode == -2){
							alert("같은 이름의 자격증/어학점수가 존재합니다.\n"+_msg+"을 실패하였습니다.(3)");
						}else{
							alert(_msg+"을 실패하였습니다.(2)");
						}
					},
					clearForm : false,
					resetForm : false,
					semantic : false,
					error : function(_xmlHttpRequest, _stateMessage, _errorObject) {
						alert(_msg+"에 실패하였습니다.(1)");
					}
				});
		$("#insertCLForm").submit();
	};
}

/*
***************************************
@ function : 동아리 정보 등록/수정
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnCreateClubAjax(_menu,_viewType,_abilityCnt) {

	var _url = "";
	var _msg = "";
	var _ccmMileage = $('#ccmMileage').val();
	var abilityScore = 0;

	if (!fnEmptyCheckByClass()) {
		return false;
	}

	if (_viewType == "MODIFY") {
		_url = BASE_PATH+"/"+_menu+"/w/n/modifyClubInfo.do";
		_msg = "수정";
	}else {
		_url = BASE_PATH+"/"+_menu+"/w/n/createClubInfo.do";
		_msg = "저장";
	}

	if (confirm(_msg+"하시겠습니까?")) {

		$("#insertCLForm").ajaxForm(
				{
					url : _url,
					type : "POST",
					dataType : "json",
					success : function(res) {

						if (res.rtnCode == 0) {
							alert(_msg+"을 성공하였습니다.");
							$('#closePopBtn').trigger('click');
							tableObject.destroy();
							callGrid();

						}else if(res.rtnCode == -2){
							alert("같은 이름의 동아리가 존재합니다.\n"+_msg+"을 실패하였습니다.(3)");
						}else{
							alert(_msg+"을 실패하였습니다.(2)");
						}
					},
					clearForm : false,
					resetForm : false,
					semantic : false,
					error : function(_xmlHttpRequest, _stateMessage, _errorObject) {
						alert(_msg+"에 실패하였습니다.(1)");
					}
				});
		$("#insertCLForm").submit();
	};
}

/*
***************************************
@ function : 자격증/어학 정보 삭제
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnDeleteCertiLangAjax(_menu,_keyId) {

	var _url = BASE_PATH+"/"+_menu+"/w/n/modifyCertiLangInfo.do";

	if (confirm("삭제하시겠습니까?\n삭제 후 복구가 불가능합니다.")) {

		$.ajax({
			type : "POST"
			, url : _url
			, dataType : 'json'
			, data : {
				clcDelYn : 'Y'
				,clcCodeKeyId : _keyId
			}
			,success : function(res){

				if (res.rtnCode == 0) {
					alert("삭제를 성공하였습니다.");
					tableObject.destroy();
					callGrid();

				}else{
					alert("삭제를 실패하였습니다.(2)");
				}
			}
			, error:function(request,status,error){
				alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
			}
		});

	};

}

/*
***************************************
@ function : 동아리 정보 삭제
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnDeleteClubAjax(_menu,_keyId) {

	var _url = BASE_PATH+"/"+_menu+"/w/n/modifyClubInfo.do";

	if (confirm("삭제하시겠습니까?\n삭제 후 복구가 불가능합니다.")) {

		$.ajax({
			type : "POST"
			, url : _url
			, dataType : 'json'
			, data : {
				ccmDelYn : 'Y'
				,ccmCodeKeyId : _keyId
			}
			,success : function(res){

				if (res.rtnCode == 0) {
					alert("삭제를 성공하였습니다.");
					tableObject.destroy();
					callGrid();

				}else{
					alert("삭제를 실패하였습니다.(2)");
				}
			}
			, error:function(request,status,error){
				alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
			}
		});

	};

}

/*
***************************************
@ function : 자격증/어학 정보 목록조회 페이지 진입
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnGoCertiLangInfoList(_menu) {

	location.href = BASE_PATH+"/"+_menu+"/r/m/getCertiLangInfoList.do";
}

/*
***************************************
@ function : 동아리 정보 목록조회 페이지 진입
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnGoClubInfoList(_menu) {

	location.href = BASE_PATH+"/"+_menu+"/r/m/getClubInfoList.do";
}


/*
***************************************
@ function : 일괄삭제
@ param    :_menu = 메뉴구분
@ comment  :
****************************************
 * */
function fnRemoveAct(_menu) {

	var selData = tableObject.rows({selected:true}).data();// 선택된 row에 대한 값
	var infoArray = new Array();

	for(var i=0; i < selData.length; i++){
		var infoObj = new Object();

		infoObj.oamKeyId = selData[i].OAM_KEY_ID;
		infoArray.push(infoObj);
	}

	if (confirm("삭제하시겠습니까?")) {

		$.ajax({
			type : "POST"
			, url : BASE_PATH+"/"+_menu+"/w/n/removeActStdMulti.do"
			, contentType : 'application/json'
			, async : false
			, dataType : 'json'
			, data : JSON.stringify(infoArray)
			,success : function(res){

				if (res.rtnCode == 0) {
					alert("일괄삭제를 성공하였습니다.");
					tableObject.destroy();
					callGrid();

				}else{
					alert("일괄삭제를 실패하였습니다.");
				}
			}
			, error:function(request,status,error){
				alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
			}
		});
	}

}


/**
*********************************************************
@ function : 역량점수 추가
@ comment  :
@ param    : _npiKeyId = 프로그램 keyId
@ history  : 2019-07-15 (최초작성)
**********************************************************
 **/
function fnStdAbilityAdd(_referKeyId, _stdNo){

	var abilityCnt = $('#abilityCnt').val();
	var programGubun = $('#menu').val();

	var rstParamObj = new Object();
	var paramsArray = [];


	for (var i = 1; i <= abilityCnt; i++) {
		var infoObj = new Object();

		if ($('#A00'+i+"_"+_referKeyId).val() == null || $('#A00'+i+"_"+_referKeyId).val() == '') {
			$('#A00'+i+"_"+_referKeyId).val(0);
		}

		infoObj.sahAbilityCd = "A00"+i;
		infoObj.sahScore = $('#A00'+i+"_"+_referKeyId).val();

		paramsArray.push(infoObj);
	}
	rstParamObj.stdAbiltyScoreList = paramsArray;
	rstParamObj.sahReferKeyId = _referKeyId;
	rstParamObj.sahStdNo = _stdNo;

	if (confirm("해당 학생에게 역량점수를 부여하시겠습니까?")) {
		var _url = BASE_PATH+"/"+programGubun+"/w/n/modifyStdActAbilityAdd.do";

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
}


/**
*********************************************************
@ function : 마일리지 점수 추가
@ comment  :
@ param    : _referKeyId
@ param    : _stdNo
@ history  : 2019-07-15 (최초작성)
**********************************************************
 **/
function fnStdMileageAdd(_referKeyId, _stdNo){


	var rstParamObj = new Object();
	var paramsArray = [];
	var addMileage = $('#addMileage_'+_referKeyId).val();
	var finMileage = $('#finMileage_'+_referKeyId).val();

	console.log("referKeyId"+_referKeyId);
	console.log("finMileage : "+finMileage);

	if (isEmpty(addMileage)) {
		alert("마일리지 점수를 입력해 주세요.");
		$('#addMileage_'+_referKeyId).focus();
		return false;
	}

	rstParamObj.mhSocre = $('#addMileage_'+_referKeyId).val();
	rstParamObj.mhReferKeyId = _referKeyId;
	rstParamObj.mhStdNo = _stdNo;

	rstParamObj.oamFinMileage = parseInt(addMileage)+parseInt(finMileage);
	console.log(">> "+JSON.stringify(rstParamObj));


	if (confirm("해당 학생에게 마일리지 점수를 부여하시겠습니까?")) {
		var _url = BASE_PATH+"/serviceSTF/w/n/modifyStdActMileageAdd.do";

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
					alert("해당 학생에게 마일리지 점수가 부여되었습니다.");
					tableObject.destroy();
					callGrid();

				} else {
					alert("마일리지 점수 부여가 되지 않았습니다.\n 잠시후 다시 시도해 주세요.");
				}
			}
		});
	}

}


