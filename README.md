IconicLabel
====

Iconic label widget implements k0sukey/TiIconicFont library for [Titanium](http://www.appcelerator.com/platform) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html).

How to Use
----
* Download and deploy the widget under `app/widgets/net.hoyohoyo.iconiclabel`.
* Download @k0sukey's js files to `app/widgets/net.hoyohoyo.iconiclabel/lib/`.
* Download font (.ttf) files to `app/widgets/net.hoyohoyo.iconiclabel/assets/font/`.
* Add the widget as a dependency to your `app/config.json` file like so:

```javascript
	…
	"dependencies": {
		"net.hoyohoyo.iconiclabel": "1.0"
	}
```

* Use the widget in a view with `Widget` tag like so:

```xml
<Widget id="symbol" src="net.hoyohoyo.iconiclabel" />
```

* Set style in a tss file like so: (You can use just like Ti.UI.Label.)

```css
'#symbol': {
	top: 100,
	left: 100,
	font: {fontFamily: 'FontAwesome', fontSize: 22},
	icon: 'play'
}
```

Credits
----
### TiIconicFont
https://github.com/k0sukey/TiIconicFont

Thanks for the nice library.

### Font Awesome
http://fortawesome.github.com/Font-Awesome

Version 2.0 of the Font Awesome font, CSS, and LESS files are licensed under CC BY 3.0:
http://creativecommons.org/licenses/by/3.0/
A mention of 'Font Awesome - http://fortawesome.github.com/Font-Awesome'
in human-readable source code is considered acceptable attribution (most common on the
web). If human readable source code is not available to the end user, a mention in an 'About'
or 'Credits' screen is considered acceptable (most common in desktop or mobile software).
### Ligature Symbols
http://kudakurage.com/ligature_symbols/

You can get Ligature Symbols for free. This Font is licensed under the SIL Open Font License for download and using.
Ligature Symbols has broad support for the modern browser (Chrome, Safari, Firefox, iOS - Mobile Safari, Android Browser).