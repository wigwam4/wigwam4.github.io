'use strict';

// canvas animation
(function(){
    const canvasOuter = document.querySelector('.canvas_area .shape_outer');
    const canvasInner = document.querySelector('.canvas_area .shape_inner');
    const canvasText = document.querySelector('.canvas_area p');
    const scrollHeight = document.querySelector('.pf_title').scrollHeight;
    let canvasData = {
        outer: {start: 0, end: 0, y1: 0, y2: 0},
        inner: {start: 0, end: 0, y1: 0, y2: 0},
        text: {start: '50%', end: '-50%', y1: 0, y2: 0},
        opacity: {start: 1, end: 0, y1: 0, y2: 0}
    }

    $('#canvas').ripples({
        dropRadius: 20,
        perturbance: 0.01,
        resolution: 480,
    });

    setCanvasData();
    playAnimation();

    window.addEventListener('resize', setCanvasData);
    window.addEventListener('scroll', playAnimation);

    function setCanvasData(){
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;

        if(windowWidth > windowHeight) {
            canvasData.inner.start = windowHeight / 2.4;
            canvasData.outer.start = windowHeight;
            canvasData.outer.end = windowWidth * 2;
        } else {
            canvasData.inner.start = windowWidth / 2.4;
            canvasData.outer.start = windowWidth;
            canvasData.outer.end = windowHeight * 2;
        }
        canvasInner.style.width = canvasInner.style.height = `${canvasData.inner.start}px`;
        canvasOuter.style.width = canvasOuter.style.height = `${canvasData.outer.start}px`;

        canvasData.inner.y2 = scrollHeight * 0.2;
        canvasData.outer.y2 = scrollHeight * 0.4;
        canvasData.text.y1 = canvasData.opacity.y1 = scrollHeight * 0.4;
        canvasData.text.y2 = canvasData.opacity.y2 = scrollHeight * 0.9;
    }

    function playAnimation(){
        let scrTop = window.scrollY;
        let scrollRatio, canvasOuterSize, canvasInnerSize, canvasOpacity, textPosition;
        
        if (scrTop >= canvasData.inner.y1 && scrTop <= canvasData.inner.y2){
            scrollRatio = scrTop / (canvasData.inner.y2 - canvasData.inner.y1); 
            canvasInnerSize = canvasData.inner.start - canvasData.inner.start * scrollRatio;
        } else if (scrTop < canvasData.inner.y1){
            canvasInnerSize = canvasData.inner.start;
        } else if (scrTop > canvasData.inner.y2){
            canvasInnerSize = canvasData.inner.end;
        }

        if (scrTop >= canvasData.outer.y1 && scrTop <= canvasData.outer.y2){
            scrollRatio = scrTop / (canvasData.outer.y2 - canvasData.outer.y1); 
            canvasOuterSize = canvasData.outer.start + (canvasData.outer.end - canvasData.outer.start) * scrollRatio;
        } else if (scrTop < canvasData.outer.y1){
            canvasOuterSize = canvasData.outer.start;
        } else if (scrTop > canvasData.outer.y2){
            canvasOuterSize = canvasData.outer.end;
        }
        
        if (scrTop >= canvasData.text.y1 && scrTop <= canvasData.text.y2){
            scrollRatio = (scrTop - canvasData.text.y1) / (canvasData.text.y2 - canvasData.text.y1); 
            canvasOpacity = 1 - scrollRatio;
            textPosition = (50 - ( 100 * scrollRatio)) + '%';
        } else if (scrTop < canvasData.text.y1){
            canvasOpacity = canvasData.opacity.start;
            textPosition = canvasData.text.start;
        } else if (scrTop > canvasData.text.y2){
            canvasOpacity = canvasData.opacity.end;
            textPosition = canvasData.text.end;
        }

        canvasInner.style.width = canvasInner.style.height = `${canvasInnerSize}px`;
        canvasOuter.style.width = canvasOuter.style.height = `${canvasOuterSize}px`;
        canvasOuter.style.opacity = canvasOpacity;
        canvasText.style.top = textPosition;
    }
})();


// ????????? ????????????
(function(){
	setScrollEffect('.fadeup', 1);
    
    function setScrollEffect(selector, extra){
        checkVisibility(selector, extra);
        window.addEventListener('scroll', function(){
            checkVisibility(selector, extra);
        });
    }
    function checkVisibility(selector, extra){
        const selectors = document.querySelectorAll(selector);
        const windowHeight = document.documentElement.clientHeight;

        selectors.forEach(function(e, i){
            let scrTop = window.scrollY;
            let eTop = window.pageYOffset + e.getBoundingClientRect().top;
            let minShow = eTop - windowHeight * extra;
            if (scrTop >= minShow){
                e.classList.add('on');
            }
        });
    }
})();


// Projects : Tab
(function(){
    const tabLists = document.querySelectorAll('.tablist_js > li');
    const tabContents = document.querySelectorAll('.tabcnt_js > div');
    const tabContentOn = document.querySelector(document.querySelector('.tablist_js > li.on').querySelector('a').getAttribute('href'));

    tabContentOn.style.display = 'block';
    tabLists.forEach(function(tabList){
        tabList.addEventListener('click', function(e){
            e.preventDefault();
            showContent(e);
            moveHighLight(e);
        });
    });

    function showContent(e){
        const target = e.target.getAttribute('href');
        tabContents.forEach((tabContent) => {
            tabContent.style.display = 'none';
        });
        document.querySelector(target).style.display = 'block';
    }
    function moveHighLight(e){
        const target = e.currentTarget;
        tabLists.forEach((tabList) => {
            tabList.classList.remove('on');
        });
        target.classList.add('on');
    }
})();


// Projects : ????????? ???????????? 
(function(){
    const projects = document.querySelectorAll('.project_list > li:not(.tab_except)');

    projects.forEach((project) => {
        const previewBox = project.querySelector('.preview_box');
        const types = project.querySelectorAll('.responsive_type > li');
        const typeOn = project.querySelector('.responsive_type > li.on > a').classList;
        
        previewBox.classList.add(typeOn);
        types.forEach(function(type){
            type.addEventListener('click', function(e){
                e.preventDefault();
                showContent(e);
                moveHighLight(e);
            });
        });

        function showContent(e){
            const target = e.target.classList;
            previewBox.classList.remove('pc','tablet','mobile');
            previewBox.classList.add(target);
        }
        function moveHighLight(e){
            const target = e.currentTarget;
            types.forEach((type) => {
                type.classList.remove('on');
            });
            target.classList.add('on');
        }
    });
    
})();


// ?????? ??? ??????
(function(){
    const btn = document.querySelector('.zodiac_banner .btn_close');

    btn.addEventListener('click', function(){
        const banner = this.parentElement.parentElement;
        banner.style.bottom = `-${banner.clientHeight}px`;
    });
})();


// ?????? ?????????
(function(){
    const canvas = document.getElementById('canvas_smile');
    const ctx = canvas.getContext('2d');
    const myImg = new Image();
    const gra = ctx.createLinearGradient(0,canvas.height/2,canvas.width,canvas.height/2);

    gra.addColorStop(0,'#5BA675');
    gra.addColorStop(1,'#0A46BF');
    ctx.lineCap = 'round'; 
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000'; 
    myImg.src = '../img/bgSmile.png'; 
    
    myImg.onload = function(){
        const myPat = ctx.createPattern(myImg,'repeat');
        
        // ??????
        ctx.arc(300,200,100,0,Math.PI*2);
        ctx.fillStyle = myPat;
        ctx.fill();

        // ??? L
        ctx.beginPath(); ctx.moveTo(275,190); ctx.bezierCurveTo(275,165,300,165,300,190); ctx.bezierCurveTo(300,215,275,215,275,190); ctx.closePath();
        ctx.fillStyle = '#fff'; ctx.fill();
        ctx.stroke();

        // ??? R
        ctx.beginPath(); ctx.moveTo(300,190); ctx.bezierCurveTo(300,165,325,165,325,190); ctx.bezierCurveTo(325,215,300,215,300,190); ctx.closePath();
        ctx.fillStyle = '#fff'; ctx.fill();
        ctx.stroke();

        // ????????? L
        ctx.beginPath(); ctx.moveTo(287,192); ctx.bezierCurveTo(287,180,300,180,300,192); ctx.bezierCurveTo(300,204,287,204,287,192); ctx.closePath();
        ctx.fillStyle = '#000'; ctx.fill();

        // ????????? R
        ctx.beginPath(); ctx.moveTo(306 ,192); ctx.bezierCurveTo(306,180,319,180,319,192); ctx.bezierCurveTo(319,204,306,204,306,192); ctx.closePath();
        ctx.fillStyle = '#000'; ctx.fill();

        // ????????? L
        ctx.beginPath(); ctx.moveTo(275,194); ctx.bezierCurveTo(273,164,302,164
        ,300,188); ctx.closePath();
        ctx.fillStyle = '#fff'; ctx.fill();
        ctx.stroke();

        // ????????? R
        ctx.beginPath(); ctx.moveTo(300,190); ctx.bezierCurveTo(300,165,325,165,325,190); ctx.closePath();
        ctx.fillStyle = '#fff'; ctx.fill();
        ctx.stroke();

        // ?????????
        ctx.beginPath(); ctx.arc(269,188,5,0,Math.PI*1); ctx.stroke();
        ctx.beginPath(); ctx.arc(331,188,5,0,Math.PI*1); ctx.stroke();

        // ?????????
        ctx.fillStyle = '#000';
        ctx.fillRect(247,200,3,3); ctx.fillRect(240,215,3,3); ctx.fillRect(255,215,3,3);
        ctx.fillRect(347,200,3,3); ctx.fillRect(340,215,3,3); ctx.fillRect(355,215,3,3);

        // ???
        ctx.beginPath(); ctx.arc(300,220,20,0,Math.PI*1);
        ctx.stroke();

        // ??????
        ctx.beginPath(); ctx.moveTo(220,130); ctx.bezierCurveTo(174,200,260,180,260,130); ctx.bezierCurveTo(260,90,230,100,245,145); ctx.bezierCurveTo(260,180,280,160,295,130); ctx.bezierCurveTo(320,80,280,70,280,110); ctx.bezierCurveTo(280,160,300,160,330,110); ctx.bezierCurveTo(345,85,330,80,310,110); ctx.bezierCurveTo(270,180,330,160,350,130); ctx.bezierCurveTo(370,100,350,80,335,120); ctx.bezierCurveTo(320,160,330,180,365,160); ctx.bezierCurveTo(400,140,400,80,358,135); ctx.bezierCurveTo(335,170,360,200,405,170);
        ctx.stroke();

        // ??????
        ctx.strokeStyle = gra;

        ctx.shadowColor = '#0A46BF'; ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.moveTo(450,100); ctx.arcTo(500,100,500,130,25); ctx.lineTo(500,150); 
        ctx.moveTo(550,100); ctx.arcTo(500,100,500,130,25); ctx.lineTo(500,150);  
        ctx.moveTo(550,100); ctx.arcTo(500,100,500,30,25); ctx.lineTo(500,50); 
        ctx.moveTo(450,100); ctx.arcTo(500,100,500,30,25); ctx.lineTo(500,50);
        ctx.stroke();

        ctx.shadowColor = '#5BA675'; ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.moveTo(50,300); ctx.arcTo(100,300,100,330,25); ctx.lineTo(100,350); 
        ctx.moveTo(150,300); ctx.arcTo(100,300,100,330,25); ctx.lineTo(100,350);  
        ctx.moveTo(150,300); ctx.arcTo(100,300,100,230,25); ctx.lineTo(100,250); 
        ctx.moveTo(50,300); ctx.arcTo(100,300,100,230,25); ctx.lineTo(100,250);
        ctx.stroke();
    }
})();