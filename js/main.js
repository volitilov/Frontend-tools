function addScript(src){
	var script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.head.appendChild(script);
}

// main_scripts ::::::::::::::::::::::::::::::::::::
addScript('/js/rules/jquery.slim.min.js');
addScript('/js/rules/jquery-ui.min.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::
addScript('/js/my_scripts/tittle.js');

// vidjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/popup.js');