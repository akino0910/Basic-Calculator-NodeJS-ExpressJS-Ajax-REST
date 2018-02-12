exports.kiemTraLoi = function(soThuNhat, soThuHai, toanTu) {
	var msgError = '';

	if (soThuNhat.length === 0 && soThuHai.length === 0) {
		msgError = "Vui lòng nhập 2 số";
	}
	else if (soThuNhat.length === 0) {
		msgError = "Vui lòng nhập số thứ 1";
	}
	else if (soThuHai.length === 0) {
		msgError = "Vui lòng nhập số thứ 2";
	}
	else if (isNaN(soThuNhat) && isNaN(soThuHai)) {
		msgError = "Kiểm tra lại hai số đã nhập";
	}
	else if (isNaN(soThuNhat)) {
		msgError = "Nhập sai số thứ 1";
	}
	else if (isNaN(soThuHai)) {
		msgError = "Nhập sai số thứ 2";
	}
	else if (toanTu === undefined) {
		msgError = "Vui lòng chọn toán tử";
	}
	else {
		msgError = '';
	}
	return msgError;
};