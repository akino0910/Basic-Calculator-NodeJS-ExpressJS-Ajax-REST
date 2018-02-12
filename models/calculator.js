function tinhToan(soThuNhat, soThuHai, toanTu) {
	this.soThuNhat = soThuNhat;
	this.soThuHai = soThuHai;
	this.toanTu = toanTu;

	this.tinhKetQua = function () {
		var ketQua = 0;
		switch (this.toanTu) {
			case '+':
				ketQua = soThuNhat + soThuHai;
				break;
			case '-':
				ketQua = soThuNhat - soThuHai;
				break;
			case '*':
				ketQua = soThuNhat * soThuHai;
				break;
			case '/':
				ketQua = soThuNhat / soThuHai;
				break;
		}
		if (isNaN(ketQua)) {
			ketQua = 0;
		}
		return ketQua;
	}
}

module.exports = tinhToan;