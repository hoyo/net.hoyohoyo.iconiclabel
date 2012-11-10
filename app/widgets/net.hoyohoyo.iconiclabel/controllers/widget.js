var _args = arguments[0] || {};

// require TiIconicFont
var _if = require(WPATH('IconicFont'));
var _font = {
  FontAwesome: _if.IconicFont({font: WPATH('FontAwesome')}),
  LigatureSymbols: _if.IconicFont({font: WPATH('LigatureSymbols')})
};

// set font family (default: FontAwesome)
var _family = _font.FontAwesome.fontfamily();
if (!_.has(_args, 'font')) {
  $.icon.setFont({fontFamily: _family});
} else {
  if (_.has(_args.font, 'fontFamily')) {
    if (!_.has(_font, _args.font.fontFamily)) {
      Ti.API.info('[IconicLabel] use one of ' + _.keys(_font).join(', '));
    } else {
      _family = _font[_args.font.fontFamily].fontfamily();
    }
  }
  $.icon.setFont(_.extend(_args.font, {fontFamily: _family}));
}

// set properties to Ti.UI.Label
_.each(_args, function(value, key) {
  switch (key) {
    case 'font':
      break;
    case 'icon':
      exports.setIcon(value);
      break;
    case 'text':
      exports.setText(value);
      break;
    default:
      if (_.has($.icon, key)) {
        $.icon[key] = value;
      } else {
        Ti.API.info('[IconcFont] wrong parameter. (' + key + ')');
      }
      break;
  }
});

/**
 * override for alert.
 * @param {Object} font font.
 */
exports.setFont = function(font) {
  Ti.API.info('[IconicLabel] not support changing font after deploy.');
};

/**
 * change icon.
 * @param {string} name name of icon.
 */
exports.setIcon = function(name) {
  $.icon.setText(_font[_family].icon(name));
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setText = function(text) {
  Ti.API.info('[IconicLabel] use "icon" instead of "text".');
};

// be delegated functions from Ti.UI.Label
exports = _.extend($.icon, exports);
var funcs = [
  'add',
  'addEventListener',
  'animate',
  'applyProperties',
  'convertPointToView',
  'fireEvent',
  'getAccessibilityHidden',
  'getAccessibilityHint',
  'getAccessibilityLabel',
  'getAccessibilityValue',
  'getAnchorPoint',
  'getAnimatedCenter',
  'getAutoLink',
  'getBackgroundColor',
  'getBackgroundDisabledColor',
  'getBackgroundDisabledImage',
  'getBackgroundFocusedColor',
  'getBackgroundFocusedImage',
  'getBackgroundGradient',
  'getBackgroundImage',
  'getBackgroundLeftCap',
  'getBackgroundPaddingBottom',
  'getBackgroundPaddingLeft',
  'getBackgroundPaddingRight',
  'getBackgroundPaddingTop',
  'getBackgroundRepeat',
  'getBackgroundSelectedColor',
  'getBackgroundSelectedImage',
  'getBackgroundTopCap',
  'getBorderColor',
  'getBorderRadius',
  'getBorderWidth',
  'getBottom',
  'getBubbleParent',
  'getCenter',
  'getChildren',
  'getColor',
  'getEllipsize',
  'getFocusable',
  'getFont',
  'getHeight',
  'getHighlightedColor',
  'getHorizontalWrap',
  'getHtml',
  'getKeepScreenOn',
  'getLayout',
  'getLeft',
  'getMinimumFontSize',
  'getOpacity',
  'getRect',
  'getRight',
  'getShadowColor',
  'getShadowOffset',
  'getSize',
  'getSoftKeyboardOnFocus',
  'getText',
  'getTextAlign',
  'getTextid',
  'getTop',
  'getTouchEnabled',
  'getTransform',
  'getVerticalAlign',
  'getVisible',
  'getWidth',
  'getWordWrap',
  'getZIndex',
  'hide',
  'remove',
  'removeEventListener',
  'setAccessibilityHidden',
  'setAccessibilityHint',
  'setAccessibilityLabel',
  'setAccessibilityValue',
  'setAnchorPoint',
  'setAutoLink',
  'setBackgroundColor',
  'setBackgroundDisabledColor',
  'setBackgroundDisabledImage',
  'setBackgroundFocusedColor',
  'setBackgroundFocusedImage',
  'setBackgroundGradient',
  'setBackgroundImage',
  'setBackgroundLeftCap',
  'setBackgroundPaddingBottom',
  'setBackgroundPaddingLeft',
  'setBackgroundPaddingRight',
  'setBackgroundPaddingTop',
  'setBackgroundRepeat',
  'setBackgroundSelectedColor',
  'setBackgroundSelectedImage',
  'setBackgroundTopCap',
  'setBorderColor',
  'setBorderRadius',
  'setBorderWidth',
  'setBottom',
  'setBubbleParent',
  'setCenter',
  'setColor',
  'setEllipsize',
  'setFocusable',
  'setHeight',
  'setHighlightedColor',
  'setHorizontalWrap',
  'setHtml',
  'setKeepScreenOn',
  'setLayout',
  'setLeft',
  'setMinimumFontSize',
  'setOpacity',
  'setRight',
  'setShadowColor',
  'setShadowOffset',
  'setSoftKeyboardOnFocus',
  'setTextAlign',
  'setTextid',
  'setTop',
  'setTouchEnabled',
  'setTransform',
  'setVerticalAlign',
  'setVisible',
  'setWidth',
  'setWordWrap',
  'setZIndex',
  'show',
  'toImage'
];
_.each(funcs, function(func) {
  exports[func] = $.icon[func];
});
