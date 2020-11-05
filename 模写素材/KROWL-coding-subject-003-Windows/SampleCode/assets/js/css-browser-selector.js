/*
Ver: 0.1 (2017.05.13)
Author: Futaego Tam
FileName: css-browser-selector.js
License: Free
Website: https://www.futaego.com/2017/%E3%80%90microsoft-edge%E5%AF%BE%E5%BF%9C%E3%80%91%E3%80%90jquery%E4%B8%8D%E8%A6%81%E3%80%91%E3%81%AEcss-browser-selector-js/
*/

window.onload = function () {
	var ua      = window.navigator.userAgent.toLowerCase();
	var os      = '';
	var browser = '';
	var other   = '';

	//OS Check & Browser Check
	if (ua.indexOf('macintosh') != -1) {
		//Apple Device
		if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('ipod') != -1) {
			os      = 'ios';
			browser = 'safari';
		} else {
			os      = 'mac';
			browser = 'safari';
			if (ua.indexOf('firefox') != -1) {
				browser = 'firefox';
			} else if (ua.indexOf('chrome') != -1) {
				browser = 'chrome';
				if (ua.indexOf('opr') != -1) {
					browser = 'opera';
				}
			}
		}
	} else if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('ipod') != -1) {
		os      = 'ios';
		browser = 'safari';
	} else if (ua.indexOf('windows') != -1) {
		//Windows Device
		os = 'windows';
		if (ua.indexOf('firefox') != -1) {
			browser = 'firefox';
		} else if (ua.indexOf('chrome') != -1) {
			browser = 'chrome';
			if (ua.indexOf('opr') != -1) {
				browser = 'opera';
			} else if (ua.indexOf('edge') != -1) {
				browser = 'edge';
			}
		} else if (ua.indexOf('msie') != -1) {
			browser = 'ie';
			if (ua.indexOf('msie 6.') != -1) {
				browser += ',ie6';
			} else if (ua.indexOf('msie 7.') != -1) {
				browser += ',ie7';
			} else if (ua.indexOf('msie 8.') != -1) {
				browser += ',ie8';
			} else if (ua.indexOf('msie 9.') != -1) {
				browser += ',ie9';
			} else if (ua.indexOf('msie 10.') != -1) {
				browser += ',ie10';
			}
		} else if (ua.indexOf('rv:11') != -1) {
			browser = 'ie,ie11';
		}
		if (ua.indexOf('mobile') != -1) {
			other = 'mobile';
		}
	} else if (ua.indexOf('android') != -1) {
		//Android Device
		os = 'android';
		if (ua.indexOf('firefox') != -1) {
			browser = 'firefox';
		} else if (ua.indexOf('chrome') != -1) {
			browser = 'chrome';
			if (ua.indexOf('opr') != -1) {
				browser = 'opera';
			}
		} else {
			browser = 'browser';
		}
		if (ua.indexOf('mobile') != -1) {
			other = 'mobile';
		} else {
			other = 'tablet';
		}
	}

	var _html = document.querySelector('html');
	if (os != '') {
		var _os = os.split(",");
		for (var i = 0; i < _os.length; i++) _html.classList.add(_os[i]);
		_html.classList.add(os);
	}
	if (browser != '') {
		var _browser = browser.split(",");
		for (var i = 0; i < _browser.length; i++) _html.classList.add(_browser[i]);
	}
	if (other != '') {
		var _other = other.split(",");
		for (var i = 0; i < _other.length; i++) _html.classList.add(_other[i]);
	}
};
