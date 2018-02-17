function swapColorStyleSheet(colorStyleSheetName){
	document.getElementById('colorOptions').setAttribute('href', colorStyleSheetName);
	localStorage.setItem("colorCssKey", colorStyleSheetName)
}
function swapFontSizeStyleSheet(fontStyleSheetName){
	document.getElementById('fontSizeOptions').setAttribute('href', fontStyleSheetName);
	localStorage.setItem("fontCssKey", fontStyleSheetName)
}

function loadCustomStyles(){
 if (localStorage.key(0) == "colorCssKey" || localStorage.key(1) == "colorCssKey" ){
	document.getElementById('colorOptions').setAttribute('href', localStorage.getItem("colorCssKey"))
    }
 if (localStorage.key(0) == "fontCssKey" || localStorage.key(1) == "fontCssKey" ){
	document.getElementById('fontSizeOptions').setAttribute('href', localStorage.getItem("fontCssKey"))
    }   
}


/*
    storage methods
	cut down request for user data
	remembers data for the user - shopping cart, style, userdetails
	local 5mb file - data cache

	short term mem
	session storage does not retain over copy paste links or open in new tab or after browser closed - 
 
    long term mem
    data persist over browser closed and  copy paste link

	.length - number of items stored
	.clear() - deletes storage
	.key() - keys are stored in ABC order, key(0) returns name of first key
	.setItem("key1","value1") -
	.getItem("key1")
	.removeItem("key1")




*/
