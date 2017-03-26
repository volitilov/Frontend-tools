function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

// my_scripts ::::::::::::::::::::::::::::::::::::::
addScript('/js/my_scripts/tittle.js');
// addScript('/js/my_scripts/head.js');

// vidjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/popup.js');
addScript('/js/widjets/sidebar.js');
addScript('/js/widjets/contextMenu.js');
addScript('/js/widjets/toolbar.js');
addScript('/js/widjets/menu.js');
addScript('/js/widjets/uploader.js');
addScript('/js/widjets/colorPicker.js');
addScript('/js/widjets/widjetCombo.js');
addScript('/js/widjets/datepicker.js');
addScript('/js/widjets/form.js');
addScript('/js/widjets/list.js');
addScript('/js/widjets/dataview.js');
addScript('/js/widjets/tree.js');

addScript('/js/widjets/slider.js');
