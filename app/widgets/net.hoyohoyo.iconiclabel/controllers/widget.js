// import IconicFont libraries
var _fonts = {
  FontAwesome: require(WPATH('IconicFont')).IconicFont({
    font: WPATH('FontAwesome'),
    ligature: false
  }),
  LigatureSymbols: require(WPATH('IconicFont')).IconicFont({
    font: WPATH('LigatureSymbols'),
    ligature: false
  }),
  SSPika: require(WPATH('IconicFont')).IconicFont({
    font: WPATH('ti.ss-pika'),
    ligature: true
  })
};

// store of arguments
var _args = arguments[0] || {};

/**
 * using font family (default: FontAwesome)
 * @type {string}
 */
var _currentFont = 'FontAwesome';

/**
 * using icon
 * @type {string|Array.<string>}
 */
var _currentIcon = null;

// set font
if (_.has(_args, 'font') && _.has(_args.font, 'fontFamily')) {
  if (!_.has(_fonts, _args.font.fontFamily)) {
    Ti.API.info('[IconicLabel] use one of ' + _.keys(_fonts).join(', '));
  } else {
    _currentFont = _args.font.fontFamily;
  }
}
var params = {fontFamily: _fonts[_currentFont].fontfamily()};
$.icon.setFont(_.defaults(params, _args.font || {}));

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
 * change font.
 * @param {Object} font font.
 * @this {net.hoyohoyo.IconicLabel}
 */
exports.setFont = function(font) {
  if (!_.has(_fonts, font)) {
    Ti.API.info('[IconicLabel] use one of ' + _.keys(_fonts).join(', '));
    return;
  }
  _currentFont = font;
  $.icon.setFont({fontFamily: _fonts[font].fontfamily}, $.icon.font);
  if (_currentIcon !== null) {
    this.setIcon(_currentIcon);
  }
  //Ti.API.info('[IconicLabel] not support changing font after deploy.');
};

/**
 * change icon.
 * @param {string|Array.<string>} arg name of icon or array of them.
 */
exports.setIcon = function(arg) {
  _currentIcon = arg;
  if (_.isArray(arg)) {
    var ary = _.map(arg, function(value) {
      return _fonts[_currentFont].icon(value);
    });
    $.icon.setText(ary.join(''));
  } else {
    $.icon.setText(_fonts[_currentFont].icon(arg));
  }
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setText = function(text) {
  Ti.API.info('[IconicLabel] use "icon" instead of "text".');
};

// be delegated functions from Ti.UI.Label
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
