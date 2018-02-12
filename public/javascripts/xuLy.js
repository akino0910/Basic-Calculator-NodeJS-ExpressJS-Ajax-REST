"use strict";

$(document).ready(function (){

	//blur textbox
	$("#soThuNhat").blur(function () {
		if (!$(this).val()) {
			$("#msgError").html("Hãy nhập vào số thứ 1");
		}
		else if (isNaN($(this).val())) {
			$("#msgError").html("Ô nhập thứ 1 chỉ có thể là số");
		}
		else {
			$("#msgError").html(null);
		}
	});

	$("#soThuHai").blur(function () {
		if (!$(this).val()) {
			$("#msgError").html("Hãy nhập vào số thứ 2");
		}
		else if (isNaN($(this).val())) {
			$("#msgError").html("Ô nhập thứ 2 chỉ có thể là số");
		}
		else {
			$("#msgError").html(null);
		}
	});

	//click event

	$("#btnTinh").click(function () {

		var txt1 = $("#soThuNhat").val();
		var txt2 = $("#soThuHai").val();

		if (!txt1 && !txt2) {
			$("#msgError").html("Vui lòng nhập 2 số trước");
		}
		else if (!txt1) {
			$("#msgError").html("Hãy nhập vào số thứ 1");
		}
		else if (isNaN(txt1)) {
			$("#msgError").html("Ô nhập thứ 1 chỉ có thể là số");
		}
		else if (!txt2) {
			$("#msgError").html("Hãy nhập vào số thứ 2");
		}
		else if (isNaN(txt2)) {
			$("#msgError").html("Ô nhập thứ 2 chỉ có thể là số");
		}
		else if (!$("input[name='toanTu']:checked").val()) {
			$("#msgError").html("Chưa chọn phép tính");
		}
		else {
			$("#calculator").submit();
		}
	})


});