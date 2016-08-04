"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (Component, overwriteStyle) {
  function WrapComponent(props) {
    return _react2.default.createElement(Component, props);
  }

  var defaultProps = Component.defaultProps || {};
  var style = defaultProps.style || {};

  WrapComponent.propTypes = _extends({}, Component.propTypes);

  if (!WrapComponent.propTypes.style) {
    WrapComponent.propTypes.style = _react2.default.PropTypes.object.isRequired;
  }

  WrapComponent.defaultProps = _extends({}, defaultProps, {
    style: _extends({}, style, overwriteStyle)
  });
  return WrapComponent;
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];

//# sourceMappingURL=index.js.map