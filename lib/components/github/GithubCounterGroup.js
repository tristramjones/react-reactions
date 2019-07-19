'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/styles');

var _strings = require('../../helpers/strings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    group: {
      padding: '5px 10px',
      borderRight: '1px solid #ddd',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
      fontSize: '14px',
      color: '#3D76C2',
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: '3px 0 0 3px',
      '&:active': {
        background: '#f2f8fa'
      }
    },
    emoji: {
      fontSize: '15px',
      marginTop: '1px'
    },
    tooltip: {
      maxWidth: '250px',
      wordBreak: 'break-word',
      wordWrap: 'normal',
      whiteSpace: 'nowrap',
      font: 'normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",\n      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      color: '#fff',
      background: 'rgba(0,0,0,0.8)',
      borderRadius: '3px',
      padding: '5px 8px',
      position: 'absolute',
      top: '100%',
      left: '15px',
      marginTop: '4px',
      opacity: '0',
      transition: 'opacity 0.1s ease-in-out',
      '&:hover': {
        opacity: '1'
      }
    }
  };
}); /* eslint-disable no-shadow */


var GithubCounterGroup = function GithubCounterGroup(_ref) {
  var emoji = _ref.emoji,
      count = _ref.count,
      onSelect = _ref.onSelect,
      names = _ref.names;

  var classes = useStyles();
  var handleClick = function handleClick() {
    onSelect(emoji);
  };

  return _react2.default.createElement(
    'div',
    { className: classes.group, onClick: handleClick },
    _react2.default.createElement(
      'span',
      { className: classes.emoji },
      emoji
    ),
    ' ',
    count,
    _react2.default.createElement(
      'div',
      { className: classes.tooltip },
      (0, _strings.listOfNames)(names)
    )
  );
};

exports.default = GithubCounterGroup;