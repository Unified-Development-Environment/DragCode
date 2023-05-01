(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/DragCode/",
    "verprefix": "",
    "workerjs": "/DragCode/worker.js",
    "monacoworkerjs": "/DragCode/monacoworker.js",
    "gifworkerjs": "/DragCode/gifjs/gif.worker.js",
    "serviceworkerjs": "/DragCode/serviceworker.js",
    "typeScriptWorkerJs": "/DragCode/tsworker.js",
    "pxtVersion": "7.4.21",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/DragCode/",
    "commitCdnUrl": "/DragCode/",
    "blobCdnUrl": "/DragCode/",
    "cdnUrl": "/DragCode/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "Unfied Development Environment Editor ",
    "simUrl": "/DragCode/simulator.html",
    "simserviceworkerUrl": "/DragCode/simulatorserviceworker.js",
    "simworkerconfigUrl": "/DragCode/workerConfig.js",
    "partsUrl": "/DragCode/siminstructions.html",
    "runUrl": "/DragCode/run.html",
    "docsUrl": "/DragCode/docs.html",
    "multiUrl": "/DragCode/multi.html",
    "asseteditorUrl": "/DragCode/asseteditor.html",
    "skillmapUrl": "/DragCode/skillmap.html",
    "isStatic": true
};

    var scripts = [
        "/DragCode/highlight.js/highlight.pack.js",
        "/DragCode/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/DragCode/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/DragCode/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/DragCode/target.js");
    scripts.push("/DragCode/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
