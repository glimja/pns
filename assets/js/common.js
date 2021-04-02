/* //////////////////////////////////////////////////////////////////////////////
	
	* onload
	* 화면 로드 후 onload 함수 실행

////////////////////////////////////////////////////////////////////////////// */

$(function(){
	//개발단 화면 로드후 실행
	onload();
});


/* //////////////////////////////////////////////////////////////////////////////
	
	* 온로드 실행 함수

////////////////////////////////////////////////////////////////////////////// */
function onload(){
	swiper();
	fn_quickTop();
	fn_chkboxAll();
	sortListObj();
	dropDeletArea();
	dragYmove();
}



/* //////////////////////////////////////////////////////////////////////////////
	
	* UI 스타일

////////////////////////////////////////////////////////////////////////////// */

function fn_chkboxAll(){
	// 체크박스 전체선택 전체해제
	$('#checkuncheck_all').on('click', function(){
		// 클릭 되었을때
		if($('#checkuncheck_all').prop('checked')){
			$("input[name=myagreecheck]:checkbox").prop("checked", true);    
		// 클릭 안 되었을때
		} else{
			$("input[name=myagreecheck]:checkbox").prop("checked", false);
		}
	});
}


function swiper(obj) {

	if (obj = ".slidecenter_typecenter") {
		// swiper 중앙정렬 3개
		var swiper = new Swiper($(".swiper-container" + obj), {
			centeredSlides: true,
			spaceBetween: -10,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: false,
			speed: 600,
			loop: false,
			slidesPerView: 'auto',
			initialSlide: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true, // indicator
				// type: 'fraction', // number page
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	if (obj = ".slidecenter_type2") {
		// swiper 중앙정렬 1개
		var swiper = new Swiper($(".swiper-container" + obj), {
			observer: true,
			observeParents: true,
			autoHeight: true,
			watchSlidesProgress: true,
			speed: 800,
			slidesPerView: 'auto',
			centerSlides: true,
			spaceBetween: 16,
			touchAngle: 35,
			pagination: {
				el: '.swiper-pagination',
				clickable: true, // indicator
				// type: 'fraction', // number page
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	if (obj = ".slidecenter_type3") {
		// swiper 중앙정렬 1개
		var swiper = new Swiper($(".swiper-container" + obj), {
			observer: true,
			observeParents: true,
			autoHeight: true,
			watchSlidesProgress: true,
			speed: 800,
			slidesPerView: 'auto',
			centerSlides: true,
			spaceBetween: 10,
			touchAngle: 35,
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	// clickable: true, // indicator
			// 	type: 'fraction', // number page
			// },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});		
	}

	if (obj = ".bgimages-thumbs") {
		var bgimagesThumbs = new Swiper($(".swiper-container" + obj), {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
	}

	if (obj = ".bgimages-top") {
		var bgimagesTop = new Swiper($(".swiper-container" + obj), {
			spaceBetween: 10,
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			thumbs: {
			  swiper: bgimagesThumbs
			}
		});
	}
}

// 상단으로 이동 top 버튼
function fn_quickTop() {
var $quickTop = $('.mo_quicktopMove');

$quickTop.off().on('click', function () {
	$('html, body').stop().animate({
		scrollTop: 0
	}, 100, function () {
		// focus 처리
		$('.navbar').attr('tabindex', '0').focus()
	})
})

$(window).on('scroll', function () {
	var st = $(this).scrollTop();
	if (st >= 500) {
		$quickTop.fadeIn();
	} else {
		$quickTop.fadeOut();
	}
});
}

//form - datapicker
function setDatepicker(obj) {
	$.datepicker.setDefaults({
		dateFormat: 'yy년mm월dd일',
		showMonthAfterYear: true,
		changeYear: false,
		changeMonth: false,
		showOn: "both",
		buttonText: "날짜선택",
		yearSuffix: '.',
		monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
		monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		/*
		//주말 비활성
		beforeShowDay: function(date){
			var day = date.getDay();
			return [(day != 0 && day != 6)];
		},
		*/
		//maxDate: 0, //오늘이후날짜 비활성
		//minDate: 0, //오늘이전날짜 비활성
	});
	$('#' + obj + '').datepicker();
	
	$('.openDatePicker').datepicker();

	$(".dateNotBefore").datepicker({
		minDate: 0,
	});
	$(".dateNotNext").datepicker({
		maxDate: 0,
	});
}
//dim : create
function createOverlay() {
	if($('.overlay').length > 0){ return;}
	$("body").css({ "overflow": "hidden" }).prepend("<div class='overlay'></div>");
};

//dim : remove
function removeOverlay() {
	$("body").css({ "overflow": "" });
	$(".overlay").addClass("blind");
	$(".overlay").remove();
};
// popup : 모달 팝업창 지연
function openLayer3delay(obj, btn) {
	setTimeout(function () {
		$(obj).addClass("active").show();
		//모달안에 모달
		if ($(btn).parents("div").hasClass("layer_wrap3")) {
			$(btn).parents(".layer_wrap3").css({ "z-index": "98" });
			$(obj).parents(".layer_wrap3").css({ "z-index": "100" });
			$(obj).before("<div class='overlay'></div>");
		} else if ($(btn).parents("div").hasClass("full_layer_wrap")) {
			$(obj).before("<div class='overlay'></div>");
		} else {
			createOverlay();
		}
	}, 1000); // 팝업 뜨는 딜레이 시간
}

//popup : 모달
function openLayer3(obj, btn) {
	$(obj).addClass("active").show();
	//모달안에 모달
	if ($(btn).parents("div").hasClass("layer_wrap3")) {
		$(btn).parents(".layer_wrap3").css({ "z-index": "98" });
		$(obj).parents(".layer_wrap3").css({ "z-index": "100" });
		$(obj).before("<div class='overlay'></div>");
	} else if ($(btn).parents("div").hasClass("full_layer_wrap")) {
		$(obj).before("<div class='overlay'></div>");
	} else {
		createOverlay();
	}
}

// 드래그 드롭 삭제
function sortListObj() {
	$("#sortdroplist").sortable({
		connectWith: '#deleteArea',
		update: function(event, ui) {
			//Run this code whenever an item is dragged and dropped out of this list
			var order = $(this).sortable('serialize');
		},
		helper: 'clone'
	});
}
// 드래그 드롭 삭제 영역
function dropDeletArea() {
	$("#deleteArea").droppable({
		accept: '#sortdroplist > li',
		activeClass: 'dropArea',
		hoverClass: 'dropAreaHover',
		drop: function(event, ui) {
			ui.draggable.remove();
			alert('Delete OK?')
		}
	});
}

// 드래그 드롭 좌우 이동 막기
function dragYmove() {
	$( "#sortable_ymove" ).sortable({
		connectWith: "#sortable_ymove",
		containment: "#sortable_ymove"
	}).disableSelection();
}