"use strict";

$(document).ready(function () {

	//blur textbox
	$("#soThuNhat").blur(function () {
		if (!$(this).val()) {
			$("#msgError").html("Hãy nhập vào số thứ 1");
		}
		else if (isNaN($(this).val())) {
			$("#msgError").html("Nhập sai định dạng số thứ 1");
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
			$("#msgError").html("Nhập sai định dạng số thứ 2");
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
		else if (isNaN(txt1) && isNaN(txt2)){
			$("#msgError").html("Kiểm tra lại hai số đã nhập");
		}
		else if (!txt1) {
			$("#msgError").html("Hãy nhập vào số thứ 1");
		}
		else if (isNaN(txt1)) {
			$("#msgError").html("Nhập sai định dạng số thứ 1");
		}
		else if (!txt2) {
			$("#msgError").html("Hãy nhập vào số thứ 2");
		}
		else if (isNaN(txt2)) {
			$("#msgError").html("Nhập sai định dạng số thứ 2");
		}
		else if (!$("input[name='pheptinh']:checked").val()) {
			$("#msgError").html("Chưa chọn phép tính");
		}
		else {
			// $("#calculator").submit();
			var txt1 = $("#soThuNhat").val();
			var txt2 = $("#soThuHai").val();
			var pheptinh = $("input[name='pheptinh']:checked").val();
			$.ajax({
				url: "/api/tinh",
				data: {"x": txt1, "y": txt2, "pheptinh": pheptinh},
				type: "GET",
				dataType: "json",
				success: function (data) {
					$("#ketQua").val(data.result);
				}
			})
		}
	})

});