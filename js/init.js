/*
 *
 * Application Name : UnicodeNepali Conversion Tool
 * Code Name : Punte
 * Author : Ankit Pokhrel
 * Version : 1.0
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