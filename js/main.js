'use strict';

// canvas animation
(function(){
    const canvasOuter = document.querySelector('.canvas_area .shape_outer');
    const canvasInner = document.querySelector('.canvas_area .shape_inner');
    const canvasText = document.querySelector('.canvas_area h2');
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


// Projects : 반응형 미리보기 
(function(){
    const projects = document.querySelectorAll('.project_list > li');

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


// 하단 띠 배너
(function(){
    const btn = document.querySelector('.zodiac_banner .btn_close');

    btn.addEventListener('click', function(){
        const banner = this.parentElement.parentElement;
        banner.style.bottom = `-${banner.clientHeight}px`;
    });
})();