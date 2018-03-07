"use strict";

$(document).ready(function () {

	//blur textbox
	$("#num1").blur(function () {
		if (!$(this).val()) {
			$("#msgError").html("Please input number 1");
		}
		else if (isNaN($(this).val())) {
			$("#msgError").html("Bad format number 1");
		}
		else {
			$("#msgError").html(null);
		}
	});

	$("#num2").blur(function () {
		if (!$(this).val()) {
			$("#msgError").html("Please input number 2");
		}
		else if (isNaN($(this).val())) {
			$("#msgError").html("Bad format number 2");
		}
		else {
			$("#msgError").html(null);
		}
	});

	//click event

	$("#btnCal").click(function () {

		var num1 = $("#num1").val();
		var num2 = $("#num2").val();

		if (!num1 && !num2) {
			$("#msgError").html("Please input both number");
		}
		else if (isNaN(num1) && isNaN(num2)) {
			$("#msgError").html("Bad format both number");
		}
		else if (!num1) {
			$("#msgError").html("Please input number 1");
		}
		else if (isNaN(num1)) {
			$("#msgError").html("Bad format number 1");
		}
		else if (!num2) {
			$("#msgError").html("Please input number 2");
		}
		else if (isNaN(num2)) {
			$("#msgError").html("Bad format number 2");
		}
		else if (!$("input[name='operator']:checked").val()) {
			$("#msgError").html("Please choose operator");
		}
		else {
			// $("#calculator").submit();
			var num1 = $("#num1").val();
			var num2 = $("#num2").val();
			var operator = $("input[name='operator']:checked").val();

			$.ajax({
				url: "/api/calculate",
				data: $('form').serialize(),
				type: "GET",
				dataType: "json",
				success: function (data) {
					$("#result").val(data.result);
				}
			})
		}
	})

});