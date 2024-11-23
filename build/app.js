"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var app = (0, _express["default"])();
var port = 3000;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.status(200).json({
    message: "I am babel in node JS",
    status: "Succes"
  });
});
app.listen(port, function () {
  console.log("server running at http://localhost:".concat(port));
});
//# sourceMappingURL=app.js.map