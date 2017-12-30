document.getElementById('menu').onlcick = function (e) {
    // 浏览器target
    e = e || window.event;
    var target = e.target || e.srcElement;

    var pageId, hrefparts;

    // 只关心hrefs, 非链接点击则退出
    if (target.nodeName !== 'A') {
        return;
    }

    // 从链接中找出页面ID
    hrefparts = target.href.split('/');
    pageid = hrefparts[hrefparts.length - 1];
    pageid = pageid.replace('.html', '');

    // 更新页面
    ajaxRequest('xhr.php?page=' + pageid, updatePageContents);

    // 浏览器阻止默认行为并取消冒泡
    if (typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.returnValue = false;
        e.cancelBubble = true;
    }
}