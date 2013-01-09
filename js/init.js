/*
 *
 * Application Name : UnicodeNepali Conversion Tool
 * Author : Ankit Pokhrel
 * Version : 1.3
 * 
 */

//Initialize
//Load Scripts
function loadScript(url){
   document.write( '<scr' + 'ipt type="text/javascript" src="' + url + '"><\/scr' + 'ipt>' );
}

var jQueryIsLoaded = typeof jQuery != "undefined";

if(!jQueryIsLoaded)	loadScript("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js");

loadScript("js/ap.unicodeNepali.js");
loadScript("http://www.google.com/jsapi");
loadScript("https://closure-library.googlecode.com/svn/trunk/closure/goog/base.js");
loadScript("js/load.js");
loadScript("js/colorPallete.js");
