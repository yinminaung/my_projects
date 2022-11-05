function showPanel(id) {
    const panelEl = document.getElementById(id + '_panel');
    if(panelEl.style.maxHeight) panelEl.style.maxHeight=null;
    else panelEl.style.maxHeight = panelEl.scrollHeight +"px";
}