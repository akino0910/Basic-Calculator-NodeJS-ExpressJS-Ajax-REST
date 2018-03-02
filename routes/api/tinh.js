const express = require('express');
const router = express.Router();
const Calculator = require('../../models/calculator');

router.get('/', function (req, res, next) {
	const soThuNhat = req.query.x;
	const soThuHai = req.query.y;
	const pheptinh = req.query.pheptinh;

	var calculator = new Calculator(Number(soThuNhat), Number(soThuHai), pheptinh);
	var kq = calculator.tinhKetQua();

	var rs = {};

	rs.result = kq;

	res.status(200).send(rs);

});

module.exports = router;