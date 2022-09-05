var BASE_PATH =  sessionStorage.getItem("contextRootPath");


//팝업창으로 실행시 clientSubTemplate가 다시 로드 되는게 아니라 기존것을 사용하여서 테이블 가로스클롤을 적용시키기 위해 추가
function ScrollReady() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 custom
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".pp_scrollx_tbl, .pp_scrollx_tbl_sm, .pp_scrollx_tbl_md , .pp_scrollx_tbl_lg, .pp_scrollx_tbl_xl").off(mCustomScrollbar);
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".pp_scrollx_tbl_lg, .pp_scrollx_tbl_xl").mCustomScrollbar({
				axis:"x",
				theme:"dark",
				advanced:{
					autoExpandHorizontalScroll:true
				}
			});
			$(".pp_scrollx_tbl, .pp_scrollx_tbl_sm, .pp_scrollx_tbl_md").mCustomScrollbar({
				axis:"x",
				theme:"dark",
				advanced:{
					autoExpandHorizontalScroll:false
				}
			});
		};
	};
}
//기본 DIV 호출
function getDataDivHtml(pageNo, _url, searchKey, portFoloiGbn, viewType) {
	//console.log("pageNo = " + pageNo);
	//console.log("_url = " + _url);
	//console.log("searchKey = " + searchKey);
	//console.log("portFoloiGbn = " + portFoloiGbn);
	//console.log("viewType = " + viewType);
	$.ajax({
		url : _url
		,type : "POST"
		,dataType : "html"
		,async : true
		,data : {
			searchKey : searchKey
		    ,portFoloiGbn : portFoloiGbn
		    ,pageIndex : pageNo
		    ,viewType : viewType
		}
		, success : function(res) {
			if(portFoloiGbn == "BASIC_USER_INFO"){
				$("#userBasicInfoDiv").html(res);
			}else if(portFoloiGbn == "HOPE_EMPLOY_INFO"){
				$("#hopeEmployStyleDiv").html(res);
			}else if(portFoloiGbn == "RESUME_INFO"){
				$("#resumeInfoDiv").html(res);
			}else if(portFoloiGbn == "COVERLETTER_INFO"){
				$("#coverLetterInfoDiv").html(res);
			}else if(portFoloiGbn == "MAJOR_RCR_PROGRAM_INFO"){
				$("#majorRcrProgramInfoDiv").html(res);
			}else if(portFoloiGbn == "MAJOR_NCR_PROGRAM_INFO"){
				$("#majorNcrProgramInfoDiv").html(res);
			}else if(portFoloiGbn == "CORE_RCR_PROGRAM_INFO"){
				$("#coreRcrProgramInfoDiv").html(res);
			}else if(portFoloiGbn == "CORE_NCR_PROGRAM_INFO"){
				$("#coreNcrProgramInfoDiv").html(res);

			}else if(portFoloiGbn == "MAJOR_PROGRAM_GRAPH"){
				$("#majorProgramGraphDiv").html(res);
			}else if(portFoloiGbn == "CORE_PROGRAM_GRAPH"){
				$("#coreProgramGraphDiv").html(res);
			}else if(portFoloiGbn == "DIAG_GRAPH"){
				$("#diagAnalyDiv").html(res);
			}
		}
	});	
}

fnCoverLetterPopup  = function (_popType,_resumeSeq,_stdNo,_repYn){
	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup";
	var popupUrl	= BASE_PATH+"/portfolio/r/n/mergeCoverLetterPopup.do";
	var popupParams = {
			popType:_popType,
			resumeSeq:_resumeSeq,
			clStdNo:_stdNo,
			clRepYn:_repYn
	}; // 팝업 호출시의 파라미터
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}

fnResumePopup = function (_popType,_resumeSeq,_stdNo,_repYn){
	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup"; 
	var popupUrl	= BASE_PATH+"/portfolio/r/n/mergeResumePopup.do";
	var popupParams = {
			popType:_popType,
			resumeSeq:_resumeSeq,
			stdNo:_stdNo,
			repYn:_repYn
	}; // 팝업 호출시의 파라미터
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}

fnHopeEmployPopup = function (_popType){

	if ($('#stdNo').val() == null || $('#stdNo').val() == '') {
		alert("로그인 후 등록가능합니다.");
		fnGoLoginPopUp(BASE_PATH+"/portfolio/a/m/getPortfolio.do");
		return false;
	}

	$.ajaxSetup({cache:false});
	var popupDivId = "#layerPopup";
	var popupUrl	= BASE_PATH+"/portfolio/r/n/mergeHopeEmployPopup.do";
	var popupParams = {
			popType :_popType
	}; // 팝업 호출시의 파라미터
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}

/* 대표 이력서 등록 */
representResume = function(obj,_resumeSeq, _stdNo, _resumeDiv){
	var _msg="";
	var _div ="";
	var _repYn = "";
	
	if (_resumeDiv == "RESM") {
		_div = "대표 이력서로 설정";
	}else{
		_div = "대표 자기소개서로 설정";
	}
	
	if($(obj).hasClass('on') && _resumeDiv == "RESM"){
		_div = "대표 이력서를 해제";
		_repYn = "Y";
	}else if($(obj).hasClass('on') && _resumeDiv == "CL"){
		_div = "대표 자기소개서를 해제"
		_repYn = "Y";
	}
	
	
	_msg= _div+"하시겠습니까?";
	
	
	if( confirm(_msg) ){
		$.post(BASE_PATH+"/portfolio/w/n/updateRepresentResume.do"
			,{resumeSeq:_resumeSeq,stdNo:_stdNo,resumeDiv : _resumeDiv,repYn : _repYn}
			,function(result){
				if( result == 'success'){
					alert(_div+"하였습니다.");

					if($(obj).hasClass('on')){
						$(obj).removeClass('on');
					}else{
						$(obj).addClass('on');
					}
					// location.reload();
					location.href =  BASE_PATH+"/portfolio/a/m/getPortfolio.do";
				} else {
					alert(_div+"하는데 실패하였습니다.\n잠시후 다시 시도해주세요");
				}
			}
		);
	}
}

/* 이력서 삭제 */
removeResume = function(_resumeSeq){
	if( confirm("이력서를 삭제 하시겠습니까?") ){
		$.post(BASE_PATH+"/portfolio/w/n/deleteResumeList.do"
			,{resumeSeq:_resumeSeq}
			,function(result){
				if( result == 'success'){
					alert("삭제되었습니다.");
					location.reload();
				} else {
					alert("이력서를 삭제 하는데 실패하였습니다.\n잠시후 다시 시도해주세요");
				}
			}
		);
	}
}


/* 포트폴리오 공유 URL 팝업*/
sharePortfolio = function (_stdNo){
	var sessionUserId = sessionStorage.getItem("sessionUserId");
	var basePath = sessionStorage.getItem("contextRootPath");
	
	if(sessionUserId == ''){
		if (confirm("공유하기는 로그인이 필요한 기능 입니다. \n"+"로그인 하시겠습니까?")) {
			fnGoLoginPopUp(basePath+'portfolio/a/m/getPortfolio.do');
			return;
		}else{
			return;
		}
	}
	$.ajaxSetup({cache:false});
	var popupDivId	= "#layerPopup";	// 팝업이 들어가는 div의 id
	var popupUrl	= BASE_PATH+"/portfolio/a/n/sharePortfolioPopup.do";	// 팝업 내용을 호출하는 url
	var popupParams = { stdNo : _stdNo
	};	// 팝업 호출시의 파라미터
	clientLoadPopup (popupDivId, popupUrl, popupParams);
}


/* 선택출력 팝업 */
function selectPrint(stdNo){
	var sessionUserId = sessionStorage.getItem("sessionUserId");
	var basePath = sessionStorage.getItem("contextRootPath");
	
	if(sessionUserId == ''){
		if (confirm("공유하기는 로그인이 필요한 기능 입니다. \n"+"로그인 하시겠습니까?")) {
			fnGoLoginPopUp(basePath+'portfolio/a/m/getPortfolio.do');
			return;
		}else{
			return;
		}
	}

	var popupDivId	= "#layerPopup";	// 팝업이 들어가는 div의 id
	var popupUrl	= BASE_PATH+"/portfolio/a/n/selectPrintPopup.do";	// 팝업 내용을 호출하는 url
	var popupParams = {
			stdNo : stdNo
	};	// 팝업 호출시의 파라미터

	clientLoadPopup(popupDivId, popupUrl, popupParams);
}

/* 전체출력 팝업 */
function onPrint(stdNo , ck){
	var sessionUserId = sessionStorage.getItem("sessionUserId");
	var basePath = sessionStorage.getItem("contextRootPath");
	var encStdNo = "";
	if(ck != 'admin') {
		if(sessionUserId == ''){
			if (confirm("공유하기는 로그인이 필요한 기능 입니다. \n"+"로그인 하시겠습니까?")) {
				fnGoLoginPopUp(basePath+'portfolio/a/m/getPortfolio.do');
				return;
			}else{
				return;
			}
		}
	}
	for(var i=0; i<stdNo.length;i++){
		encStdNo += stdNo.substr(i,2)+"학";
		i++;
	}
	var url	= BASE_PATH+"/cmm/fms/goOnPrintPopUp.do?stdNo="+encodeURI(encodeURIComponent(encStdNo))+"&p1=Y&p2=Y&p3=Y&p4=Y&p5=Y&p6=Y&p7=Y&adPopYn="+ck;
	window.open(url,"selectPrintForm","titlebar=no,location=no,toolbar=no,directories=no,scrollbars=yes,resizable=no,status=no,menubar=no,width=1000, height=830, left=100");
}



/* 그래프 */
function drawProgramGraph(chartDataArry,chartTitleArry, divNm){
	var chartData = new Array();
	// 차트데이터 생성
	var graphColor = ['#D0F5A9','#A9BCF5','#0A9696','#FF8200', '#0000FF', '#AE5E1A', '#7A00FC', '#FF1493', '#28E7FF','#009933']
	for(var idx= 0; idx < chartDataArry.length; idx++  ){
		var chartArray = {
						  "graphColor": graphColor[idx]
						  ,"category": chartTitleArry[idx]
						  ,"data": chartDataArry[idx]
						  ,"title": chartTitleArry[idx]
		};
		chartData.push(chartArray);
	}
	
	// 각 그래프 객체 설정

	//X 축 기준값 설정
	var chart = new AmCharts.AmSerialChart();
	    chart.dataProvider = chartData;
		chart.categoryField = "category";
		chart.fontSize = 12;
		chart.fontFamily = "NanumGothic";

	//y 축 기준값 설정
	var valueAxis = new AmCharts.ValueAxis();
		valueAxis.autoGridCount = false;
		valueAxis.axisColor = "#000000";
		valueAxis.baseValue = 0;
		valueAxis.gridCount = 5;
		valueAxis.gridThickness = 1;
	
	var graph = new AmCharts.AmGraph();
		graph.balloonText = "[[title]]:[[value]]";
		graph.fillAlphas = 2;
		graph.id = "title";
		graph.titleField = "title";
		graph.type = "column";
		graph.fillColorsField = "graphColor";
		graph.lineColorField = "graphColor";
		graph.columnWidth = 0.7;
		graph.valueField = "data";

	chart.addGraph(graph);
	chart.addValueAxis(valueAxis);
	chart.dataProvider = chartData;
	// 차트 그리기
	chart.write(divNm);
}

/* 그래프 */
function drawProgramGraphTwoLine(chartDataArry, chartDataTitleArry, chartDataArry2, chartDataTitleArry2, chartCategoryTitleArry, chartTitleArry, divNm){
	var chartData = new Array();
	// 차트데이터 생성
	var graphColor = ['#FF6600','#FCD202','#0A9696','#FF8200', '#0000FF', '#AE5E1A', '#7A00FC', '#FF1493', '#28E7FF','#009933']
	
	for(var idx= 0; idx < chartDataArry.length; idx++  ){
		var chartArray = {
						  "category": chartCategoryTitleArry[idx]
						  ,"graphColor": graphColor[0]
						  ,"data": chartDataArry[idx]
						  ,"dataTitle": chartDataTitleArry[idx]
						  ,"graphColor2": graphColor[1]
						  ,"data2": chartDataArry2[idx]
						  ,"dataTitle2": chartDataTitleArry2[idx]
		
		};
		chartData.push(chartArray);
	}
	// 각 그래프 객체 설정
	//X 축 기준값 설정
	var chart = new AmCharts.AmSerialChart();
	    chart.dataProvider = chartData;
		chart.categoryField = "category";
		chart.fontSize = 12;
		chart.fontFamily = "NanumGothic";

	//y 축 기준값 설정
	var valueAxis = new AmCharts.ValueAxis();
		valueAxis.autoGridCount = false;
		valueAxis.axisColor = "#000000";
		valueAxis.baseValue = 0;
		valueAxis.gridCount = 5;
		valueAxis.gridThickness = 1;

	// legend (명각) 객체
	var legend = new AmCharts.AmLegend();
		legend.enabled = true;
		legend.useGraphSettings = true;
		legend.align = "center";
		legend.markerSize = 9;
		legend.valueWidth = 45;
		legend.autoMargins = false;
		legend.marginLeft = 0;
		legend.marginRight = 0;
		legend.spacing = 0;
	
	var graph = new AmCharts.AmGraph();
		graph.balloonText = "[[dataTitle]]:[[value]]";
		graph.fillAlphas = 1;
		graph.id = "title";
		graph.title = chartTitleArry[0];
		graph.type = "column";
		graph.fillColorsField = "graphColor";
		graph.lineColorField = "graphColor";
		graph.columnWidth = 0.7;
		graph.valueField = "data";
	
		
	var graph2 = new AmCharts.AmGraph();
		graph2.balloonText = "[[dataTitle2]]:[[value]]";
		graph2.fillAlphas = 2;
		graph2.id = "title2";
		graph2.title = chartTitleArry[1];
		graph2.type = "column";
		graph2.fillColorsField = "graphColor2";
		graph2.lineColorField = "graphColor2";
		graph2.columnWidth = 0.7;
		graph2.valueField = "data2";
		
	// legend (명각) 객체
	var legend = new AmCharts.AmLegend();
		legend.enabled = true;
		legend.useGraphSettings = true;
		legend.align = "center";
		legend.markerSize = 9;
		legend.valueWidth = 45;
		legend.autoMargins = false;
		legend.marginLeft = 0;
		legend.marginRight = 0;
		legend.spacing = 0;
			
	chart.addGraph(graph);
	chart.addGraph(graph2);
	chart.addLegend(legend);
	chart.addValueAxis(valueAxis);
	chart.dataProvider = chartData;
	// 차트 그리기
	chart.write(divNm);
}


