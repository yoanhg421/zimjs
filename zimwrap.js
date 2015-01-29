
// ZIM js Interactive Media modules by Dan Zen http://danzen.com (c) 2014
// zimwrap.js creates global wrapper functions for less typing http://zimjs.com
// free to use - donations welcome of course! http://zimjs.com/donate

////////////////  ZIM WRAP  //////////////

// zimwrap.js creates global wrapper functions for less typing

// set var zon=true before calling zim scripts to show script comments
if (typeof zon === "undefined") zon = false; // comments from zim scripts

/*--
zog(item1, item2, etc.) ~ log
a wrapper for console.log()
--*/
var zog = console.log.bind(console);
if (zon) zog("ZIM WRAP - zog zid zss zgo zum zot zop zil");

/*--
zid(string)             ~ id
short version of document.getElementById(s)
--*/
function zid(s) {
	return document.getElementById(s);	
}

/*--
zss(string)             ~ css
short version of document.getElementById(s).style
so you can do zss("logo").top = "10px"; // for instance
--*/
function zss(s) {
	if (document.getElementById(s)) {return document.getElementById(s).style;}
	else if (zon) zog("zim wrap - zss(): id not found");
}

/*--
zgo(url, target, modal) ~ go
short version of either window.location.href or window.open
--*/
function zgo(u,t,m) {
	if (zot(t) && t != "" && t != "_self") {
		window.location.href = u;
	} else {
		if (zot(m)) { // not modal
			window.open(u,"_blank");
		} else {
			window.open(u,"_blank","modal=yes,alwaysRaised=yes");			
		}			
	}
}

/*--
zum(string)             ~ num
converts "10px string from styles to number 10, for instance
if there is no value then this will return 0
--*/
function zum(s) {
	if (zot(s)) return;
	return Number(String(s).replace(/[^\d\.\-]/g, ''));	
}

/*--
zot(value)              ~ not
test to see if value has no value (value must exist as var or parameter)
or if value has been set to null
good for setting function defaults: if (zot(speed)) speed=1;
--*/
function zot(v) {
	if (v === null) return true;
	return typeof v === "undefined";
}

/*--
zop(e)                  ~ stop
stop event propagation - just easier to remember than below
must pass it e || window.event from your event function
--*/
function zop(e) {
	if (zot(e)) return;	
	if (e.stopImmediatePropagation) e.stopImmediatePropagation();
	if (window.event) window.event.cancelBubble=true;	
}

/*--
zil()                   ~ still
stop keys from moving content - arrows, spacebar, pgup, pgdown, home, end
stop scroll wheel from moving content - scrolling the canvas for instance
do once at start - usually in the template for full scale mode
returns an array of references to three listeners: [keydown, mousewheel and DOMMouseScroll]
use these to removeEventListeners
--*/
function zil() {
	
	var a = function(e) {if (!e) e = event; if (e.keyCode && (e.keyCode >= 32 && e.keyCode <= 40)) e.preventDefault();}
	var b = function(e) {if (!e) e = event; e.preventDefault();}
	var c = b;
	window.addEventListener("keydown", a);
	window.addEventListener("mousewheel", b);
	window.addEventListener("DOMMouseScroll", c);
	return [a, b, c];	
}