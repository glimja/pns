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
	fn_aaa();
	swiper();
}


/* //////////////////////////////////////////////////////////////////////////////
	
	* UI 스타일

////////////////////////////////////////////////////////////////////////////// */

function fn_aaa() {

}

function swiper(obj) {

	if (obj = ".slidecenter_type1") {
		// swiper 중앙정렬 3개
		var swiper = new Swiper($(".swiper-container" + obj), {
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

	if (obj = ".slidecenter_type2") {
		// swiper 중앙정렬 3개
		var swiper = new Swiper($(".swiper-container" + obj), {
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