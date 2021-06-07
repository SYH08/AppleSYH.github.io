!function t(e,n,o){function i(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[s]={exports:{}};e[s][0].call(c.exports,(function(t){return i(e[s][1][t]||t)}),c,c.exports,t,e,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(t,e,n){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],2:[function(t,e,n){"use strict";var o=t(1),i=t(3);function r(){var t=o.getWindow(),e=o.getDocument(),n=o.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch||n.maxTouchPoints>0||n.msMaxTouchPoints>0)}e.exports=i(r),e.exports.original=r},{1:1,3:3}],3:[function(t,e,n){"use strict";e.exports=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}},{}],4:[function(t,e,n){},{}],5:[function(t,e,n){"use strict";var o=function(t,e){this._target=t,this._tests={},this.addTests(e)},i=o.prototype;i.addTests=function(t){this._tests=Object.assign(this._tests,t)},i._supports=function(t){return void 0!==this._tests[t]&&("function"==typeof this._tests[t]&&(this._tests[t]=this._tests[t]()),this._tests[t])},i._addClass=function(t,e){e=e||"no-",this._supports(t)?this._target.classList.add(t):this._target.classList.add(e+t)},i.htmlClass=function(){var t;for(t in this._target.classList.remove("no-js"),this._target.classList.add("js"),this._tests)this._tests.hasOwnProperty(t)&&this._addClass(t)},e.exports=o},{}],6:[function(t,e,n){"use strict";function o(t,e){this._target=t||document.body,this._attr=e||"data-focus-method",this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var i=o.prototype;i._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},i._onKeyDown=function(t){this._focusMethod="key"},i._onMouseDown=function(t){"touch"!==this._focusMethod&&(this._focusMethod="mouse")},i._onTouchStart=function(t){this._focusMethod="touch"},i._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},i._onBlur=function(t){t.target.removeAttribute(this._attr)},i._onWindowBlur=function(t){this._focusMethod=!1},e.exports=o},{}],7:[function(t,e,n){"use strict";t(4);var o=t(5),i=t(8);e.exports=new o(document.documentElement,i),e.exports.FeatureDetect=o;var r=t(6);document.addEventListener&&document.addEventListener("DOMContentLoaded",(function(){new r}))},{4:4,5:5,6:6,8:8}],8:[function(t,e,n){"use strict";var o=t(2);e.exports={touch:o,"progressive-image":!0}},{2:2}],9:[function(t,e,n){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],10:[function(t,e,n){"use strict";var o=t(9);e.exports=function(){var t=o.getWindow().matchMedia("(prefers-reduced-motion)");return!(!t||!t.matches)}},{9:9}],11:[function(t,e,n){"use strict";e.exports={browser:{safari:!1,chrome:!1,firefox:!1,ie:!1,opera:!1,android:!1,edge:!1,edgeChromium:!1,version:{string:"",major:0,minor:0,patch:0,documentMode:!1}},os:{osx:!1,ios:!1,android:!1,windows:!1,linux:!1,fireos:!1,chromeos:!1,version:{string:"",major:0,minor:0,patch:0}}}},{}],12:[function(t,e,n){"use strict";e.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(t){return t.ua.indexOf("Edge")>-1||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===t.ua}},{name:"edgeChromium",userAgent:"Edge",version:["rv","Edg"],test:function(t){return t.ua.indexOf("Edg")>-1&&-1===t.ua.indexOf("Edge")}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(t){return t.ua.indexOf("Firefox")>-1&&-1===t.ua.indexOf("Opera")},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(t){return t.ua.indexOf("Safari")>-1&&t.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(t){return t.ua.indexOf("IE")>-1||t.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){var t=!1;return document.documentMode&&(t=parseInt(document.documentMode,10)),t}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(t){return t.ua.indexOf("Windows")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(t){return t.ua.indexOf("Macintosh")>-1}},{name:"ios",test:function(t){return t.ua.indexOf("iPhone")>-1||t.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(t){return(t.ua.indexOf("Linux")>-1||t.platform.indexOf("Linux")>-1)&&-1===t.ua.indexOf("Android")}},{name:"fireos",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android",test:function(t){return t.ua.indexOf("Android")>-1}},{name:"chromeos",userAgent:"CrOS"}]}},{}],13:[function(t,e,n){"use strict";var o=t(11),i=t(12);function r(t,e){if("function"==typeof t.parseVersion)return t.parseVersion(e);var n,o=t.version||t.userAgent;"string"==typeof o&&(o=[o]);for(var i,r=o.length,s=0;s<r;s++)if((i=e.match((n=o[s],new RegExp(n+"[a-zA-Z\\s/:]+([0-9_.]+)","i"))))&&i.length>1)return i[1].replace(/_/g,".");return!1}function s(t,e,n){for(var o,i,s=t.length,u=0;u<s;u++)if("function"==typeof t[u].test?!0===t[u].test(n)&&(o=t[u].name):n.ua.indexOf(t[u].userAgent)>-1&&(o=t[u].name),o){if(e[o]=!0,"string"==typeof(i=r(t[u],n.ua))){var a=i.split(".");e.version.string=i,a&&a.length>0&&(e.version.major=parseInt(a[0]||0),e.version.minor=parseInt(a[1]||0),e.version.patch=parseInt(a[2]||0))}else"edge"===o&&(e.version.string="12.0.0",e.version.major="12",e.version.minor="0",e.version.patch="0");return"function"==typeof t[u].parseDocumentMode&&(e.version.documentMode=t[u].parseDocumentMode()),e}return e}e.exports=function(t){var e={};return e.browser=s(i.browser,o.browser,t),e.os=s(i.os,o.os,t),e}},{11:11,12:12}],14:[function(t,e,n){"use strict";var o={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};e.exports=t(13)(o)},{13:13}],15:[function(t,e,n){"use strict";const o=t(7),i=t(14),r=t(10),s=document.documentElement.classList.contains("aow"),u=window.CSS.supports("mix-blend-mode","multiply");let a=t(16)();o.addTests({edge:i.browser.edge,"reduced-motion":r(),"inline-video":!s,"blend-mode":u,safari:a.safari,"safari-mobile":a.mobile,"safari-iphone-x":a.iphonex,"safari-ipad":a.ipad,"hero-static":r()||i.browser.edge||s}),o.htmlClass()},{10:10,14:14,16:16,7:7}],16:[function(t,e,n){"use strict";const o=t(14);e.exports=()=>{let t=(()=>{let t=[window.outerWidth,window.outerHeight];return"0.46"===(Math.min(...t)/Math.max(...t)).toFixed(2)})(),e=o.browser.safari,n=o.os.ios,i=o.os.osx,r=e&&n,s=e&&i&&12===o.browser.version.major,u=e&&i&&13===o.browser.version.major&&o.browser.version.minor<1;return{safari:e,old:s||u,mobile:r&&!t,iphonex:r&&t,ipad:e&&i&&!1===window.navigator.standalone}}},{14:14}]},{},[15]);