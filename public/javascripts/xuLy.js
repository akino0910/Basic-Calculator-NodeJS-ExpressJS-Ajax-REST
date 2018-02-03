"use strict";

$(document).ready(function (){
	$("#soThuNhat").blur(function () {
		if (isNaN($(this).val())) {
			$("#msgError").html("Nhập sai số thứ 1");
		}
	})
	$("#soThuHai").blur(function () {
		if (isNaN($(this).val())) {
			$("#msgError").html("Nhập sai số thứ 2");
		}
	})
});