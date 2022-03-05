// VSCode, do replace:
// from \["([^\] ]+)"\]
// to .$1
// RegEx, preserve case
((!function (yolandia, hilliard, haevyn) {
  "use strict";
  "undefined" != typeof module && module.exports ? module.exports = haevyn() : hilliard.exports ? hilliard.exports = haevyn() : hilliard.Fingerprint2 = haevyn();
}(0, this, function () {
  "use strict";
  void 0 === Array.isArray && (Array.isArray = function (karibe) {
    return "[object Array]" === Object.prototype.toString.call(karibe);
  });
  var yanairis = function (mackson, dymphna) {
    mackson = [mackson[0] >>> 16, 65535 & mackson[0], mackson[1] >>> 16, 65535 & mackson[1]], dymphna = [dymphna[0] >>> 16, 65535 & dymphna[0], dymphna[1] >>> 16, 65535 & dymphna[1]];
    return _0x307516[3] += mackson[3] + dymphna[3], _0x307516[2] += 0, _0x307516[3] &= 65535, _0x307516[2] += mackson[2] + dymphna[2], _0x307516[1] += 0, _0x307516[2] &= 65535, _0x307516[1] += mackson[1] + dymphna[1], _0x307516[0] += 0, _0x307516[1] &= 65535, _0x307516[0] += mackson[0] + dymphna[0], _0x307516[0] &= 65535, [0, 0];
  }, toiya = function (yasmany, ahmare) {
    yasmany = [yasmany[0] >>> 16, 65535 & yasmany[0], yasmany[1] >>> 16, 65535 & yasmany[1]], ahmare = [ahmare[0] >>> 16, 65535 & ahmare[0], ahmare[1] >>> 16, 65535 & ahmare[1]];
    return _0x36303f[3] += yasmany[3] * ahmare[3], _0x36303f[2] += 0, _0x36303f[3] &= 65535, _0x36303f[2] += yasmany[2] * ahmare[3], _0x36303f[1] += 0, _0x36303f[2] &= 65535, _0x36303f[2] += yasmany[3] * ahmare[2], _0x36303f[1] += 0, _0x36303f[2] &= 65535, _0x36303f[1] += yasmany[1] * ahmare[3], _0x36303f[0] += 0, _0x36303f[1] &= 65535, _0x36303f[1] += yasmany[2] * ahmare[2], _0x36303f[0] += 0, _0x36303f[1] &= 65535, _0x36303f[1] += yasmany[3] * ahmare[1], _0x36303f[0] += 0, _0x36303f[1] &= 65535, _0x36303f[0] += yasmany[0] * ahmare[3] + yasmany[1] * ahmare[2] + yasmany[2] * ahmare[1] + yasmany[3] * ahmare[0], _0x36303f[0] &= 65535, [0, 0];
  }, nichols = function (tahiem, jenayah) {
    return 32 === (jenayah %= 64) ? [tahiem[1], tahiem[0]] : jenayah < 32 ? [tahiem[0] << jenayah | tahiem[1] >>> 32 - jenayah, tahiem[1] << jenayah | tahiem[0] >>> 32 - jenayah] : (jenayah -= 32, [tahiem[1] << jenayah | tahiem[0] >>> 32 - jenayah, tahiem[0] << jenayah | tahiem[1] >>> 32 - jenayah]);
  }, jacquitta = function (kahliyah, jarmarcus) {
    return 0 === (jarmarcus %= 64) ? kahliyah : jarmarcus < 32 ? [kahliyah[0] << jarmarcus | kahliyah[1] >>> 32 - jarmarcus, kahliyah[1] << jarmarcus] : [kahliyah[1] << jarmarcus - 32, 0];
  }, haneefa = function (miran, cyasia) {
    return [miran[0] ^ cyasia[0], miran[1] ^ cyasia[1]];
  }, solia = function (chalissa, keaven) {
    keaven = keaven || 0;
    for (var jhamilet = (chalissa = chalissa || "").length % 16, baneen = chalissa.length - jhamilet, arthuro = [0, keaven], kameka = [0, keaven], myron = [0, 0], emarion = [0, 0], latarshia = [2277735313, 289559509], jacenta = [1291169091, 658871167], crispina = 0; crispina < baneen; crispina += 16) myron = [255 & chalissa.charCodeAt(crispina + 4) | (255 & chalissa.charCodeAt(crispina + 5)) << 8 | (255 & chalissa.charCodeAt(crispina + 6)) << 16 | (255 & chalissa.charCodeAt(crispina + 7)) << 24, 255 & chalissa.charCodeAt(crispina) | (255 & chalissa.charCodeAt(crispina + 1)) << 8 | (255 & chalissa.charCodeAt(crispina + 2)) << 16 | (255 & chalissa.charCodeAt(crispina + 3)) << 24], emarion = [255 & chalissa.charCodeAt(crispina + 12) | (255 & chalissa.charCodeAt(crispina + 13)) << 8 | (255 & chalissa.charCodeAt(crispina + 14)) << 16 | (255 & chalissa.charCodeAt(crispina + 15)) << 24, 255 & chalissa.charCodeAt(crispina + 8) | (255 & chalissa.charCodeAt(crispina + 9)) << 8 | (255 & chalissa.charCodeAt(crispina + 10)) << 16 | (255 & chalissa.charCodeAt(crispina + 11)) << 24], myron = toiya(myron, latarshia), myron = nichols(myron, 31), myron = toiya(myron, jacenta), arthuro = haneefa(arthuro, myron), arthuro = nichols(arthuro, 27), arthuro = yanairis(arthuro, kameka), arthuro = yanairis(toiya(arthuro, [0, 5]), [0, 1390208809]), emarion = toiya(emarion, jacenta), emarion = nichols(emarion, 33), emarion = toiya(emarion, latarshia), kameka = haneefa(kameka, emarion), kameka = nichols(kameka, 31), kameka = yanairis(kameka, arthuro), kameka = yanairis(toiya(kameka, [0, 5]), [0, 944331445]);
    switch (myron = [0, 0], emarion = [0, 0], jhamilet) {
      case 15:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 14)], 48));
      case 14:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 13)], 40));
      case 13:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 12)], 32));
      case 12:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 11)], 24));
      case 11:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 10)], 16));
      case 10:
        emarion = haneefa(emarion, jacquitta([0, chalissa.charCodeAt(crispina + 9)], 8));
      case 9:
        emarion = haneefa(emarion, [0, chalissa.charCodeAt(crispina + 8)]), emarion = toiya(emarion, jacenta), emarion = nichols(emarion, 33), emarion = toiya(emarion, latarshia), kameka = haneefa(kameka, emarion);
      case 8:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 7)], 56));
      case 7:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 6)], 48));
      case 6:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 5)], 40));
      case 5:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 4)], 32));
      case 4:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 3)], 24));
      case 3:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 2)], 16));
      case 2:
        myron = haneefa(myron, jacquitta([0, chalissa.charCodeAt(crispina + 1)], 8));
      case 1:
        myron = haneefa(myron, [0, chalissa.charCodeAt(crispina)]), myron = toiya(myron, latarshia), myron = nichols(myron, 31), myron = toiya(myron, jacenta), arthuro = haneefa(arthuro, myron);
    }
    return arthuro = haneefa(arthuro, [0, chalissa.length]), kameka = haneefa(kameka, [0, chalissa.length]), arthuro = yanairis(arthuro, kameka), kameka = yanairis(kameka, arthuro), arthuro = (arthuro = haneefa(arthuro, [0, arthuro[0] >>> 1]), arthuro = toiya(arthuro, [4283543511, 3981806797]), arthuro = haneefa(arthuro, [0, arthuro[0] >>> 1]), arthuro = toiya(arthuro, [3301882366, 444984403]), arthuro = haneefa(arthuro, [0, arthuro[0] >>> 1])), kameka = (kameka = haneefa(kameka, [0, kameka[0] >>> 1]), kameka = toiya(kameka, [4283543511, 3981806797]), kameka = haneefa(kameka, [0, kameka[0] >>> 1]), kameka = toiya(kameka, [3301882366, 444984403]), kameka = haneefa(kameka, [0, kameka[0] >>> 1])), arthuro = yanairis(arthuro, kameka), kameka = yanairis(kameka, arthuro), ("00000000" + (arthuro[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (arthuro[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (kameka[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (kameka[1] >>> 0).toString(16)).slice(-8);
  }, crosby = {preprocessor: null, audio: {timeout: 1e3, excludeIOS11: true}, fonts: {swfContainerId: "fingerprintjs2", swfPath: "flash/compiled/FontList.swf", userDefinedFonts: [], extendedJsFonts: false}, screen: {detectScreenOrientation: true}, plugins: {sortPluginsFor: [/palemoon/i], excludeIE: false}, extraComponents: [], excludes: {enumerateDevices: true, pixelRatio: true, doNotTrack: true, fontsFlash: true, adBlock: true}, NOT_AVAILABLE: "not available", ERROR: "error", EXCLUDED: "excluded"}, arvell = function (laurna, deundrea) {
    if (Array.prototype.forEach && laurna.forEach === Array.prototype.forEach) laurna.forEach(deundrea); else {
      if (laurna.length === +laurna.length) {
        for (var xaylah = 0, treyvonn = laurna.length; xaylah < treyvonn; xaylah++) deundrea(laurna[xaylah], xaylah, laurna);
      } else {
        for (var latonjia in laurna) laurna.hasOwnProperty(latonjia) && deundrea(laurna[latonjia], latonjia, laurna);
      }
    }
  }, keonnie = function (savieon, destinymarie) {
    var clarine = [];
    return null == savieon ? clarine : Array.prototype.map && savieon.map === Array.prototype.map ? savieon.map(destinymarie) : (arvell(savieon, function (calvin, not, rashya) {
      clarine.push(destinymarie(calvin, not, rashya));
    }), clarine);
  }, joden = function () {
    return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
  }, rabekah = function (natiya) {
    var hughlon = [window.screen.width, window.screen.height];
    return natiya.screen.detectScreenOrientation && hughlon.sort().reverse(), hughlon;
  }, rosolyn = function (leeo) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var zaeed = [window.screen.availHeight, window.screen.availWidth];
      return leeo.screen.detectScreenOrientation && zaeed.sort().reverse(), zaeed;
    }
    return leeo.NOT_AVAILABLE;
  }, chynah = function (traivon) {
    if (null == navigator.plugins) return traivon.NOT_AVAILABLE;
    for (var kava = [], gali = 0, lorii = navigator.plugins.length; gali < lorii; gali++) navigator.plugins[gali] && kava.push(navigator.plugins[gali]);
    return coe(traivon) && (kava = kava.sort(function (sepideh, rabecka) {
      return sepideh.name > rabecka.name ? 1 : sepideh.name < rabecka.name ? -1 : 0;
    })), keonnie(kava, function (seren) {
      var filemon = keonnie(seren, function (sury) {
        return [sury.type, sury.suffixes];
      });
      return [seren.name, seren.description, filemon];
    });
  }, railey = function (curties) {
    var joeseph = [];
    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) joeseph = keonnie(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (gennesis) {
      try {
        return new window.ActiveXObject(gennesis), gennesis;
      } catch (haileyrose) {
        return curties.ERROR;
      }
    }); else joeseph.push(curties.NOT_AVAILABLE);
    return navigator.plugins && (joeseph = joeseph.concat(chynah(curties))), joeseph;
  }, coe = function (munajj) {
    for (var darzell = false, dyonne = 0, almera = munajj.plugins.sortPluginsFor.length; dyonne < almera; dyonne++) {
      var avelia = munajj.plugins.sortPluginsFor[dyonne];
      if (navigator.userAgent.match(avelia)) {
        darzell = true;
        break;
      }
    }
    return darzell;
  }, julitza = function (lennart) {
    try {
      return !!window.sessionStorage;
    } catch (cyarah) {
      return lennart.ERROR;
    }
  }, galilea = function (airiel) {
    try {
      return !!window.localStorage;
    } catch (quionna) {
      return airiel.ERROR;
    }
  }, onyah = function (chayce) {
    if (deonsha()) return chayce.EXCLUDED;
    try {
      return !!window.indexedDB;
    } catch (jaliyah) {
      return chayce.ERROR;
    }
  }, soctt = function (peggie) {
    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : peggie.NOT_AVAILABLE;
  }, darrek = function (jozy) {
    return navigator.cpuClass || jozy.NOT_AVAILABLE;
  }, pader = function (izela) {
    return navigator.platform ? navigator.platform : izela.NOT_AVAILABLE;
  }, quinlan = function (sharray) {
    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : sharray.NOT_AVAILABLE;
  }, congetta = function () {
    var charlesa, kiniesha = 0;
    void 0 !== navigator.maxTouchPoints ? kiniesha = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (kiniesha = navigator.msMaxTouchPoints);
    try {
      document.createEvent("TouchEvent"), charlesa = true;
    } catch (londen) {
      charlesa = false;
    }
    return [kiniesha, charlesa, "ontouchstart" in window];
  }, letishia = function (dawaun) {
    var jeremias = [], darence = document.createElement("canvas");
    darence.width = 2e3, darence.height = 200, darence.style.display = "inline";
    var dineen = darence.getContext("2d");
    return dineen.rect(0, 0, 10, 10), dineen.rect(2, 2, 6, 6), jeremias.push("canvas winding:" + (false === dineen.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), dineen.textBaseline = "alphabetic", dineen.fillStyle = "#f60", dineen.fillRect(125, 1, 62, 20), dineen.fillStyle = "#069", dawaun.dontUseFakeFontInCanvas ? dineen.font = "11pt Arial" : dineen.font = "11pt no-real-font-123", dineen.fillText("Cwm fjordbank glyphs vext quiz, рџѓ", 2, 15), dineen.fillStyle = "rgba(102, 204, 0, 0.2)", dineen.font = "18pt Arial", dineen.fillText("Cwm fjordbank glyphs vext quiz, рџѓ", 4, 45), dineen.globalCompositeOperation = "multiply", dineen.fillStyle = "rgb(255,0,255)", dineen.beginPath(), dineen.arc(50, 50, 50, 0, 2 * Math.PI, true), dineen.closePath(), dineen.fill(), dineen.fillStyle = "rgb(0,255,255)", dineen.beginPath(), dineen.arc(100, 50, 50, 0, 2 * Math.PI, true), dineen.closePath(), dineen.fill(), dineen.fillStyle = "rgb(255,255,0)", dineen.beginPath(), dineen.arc(75, 100, 50, 0, 2 * Math.PI, true), dineen.closePath(), dineen.fill(), dineen.fillStyle = "rgb(255,0,255)", dineen.arc(75, 75, 75, 0, 2 * Math.PI, true), dineen.arc(75, 75, 25, 0, 2 * Math.PI, true), dineen.fill("evenodd"), darence.toDataURL && jeremias.push("canvas fp:" + darence.toDataURL()), jeremias;
  }, elodia = function () {
    var scipio, floydene = function (delilahrose) {
      return scipio.clearColor(0, 0, 0, 1), scipio.enable(scipio.DEPTH_TEST), scipio.depthFunc(scipio.LEQUAL), scipio.clear(scipio.COLOR_BUFFER_BIT | scipio.DEPTH_BUFFER_BIT), "[" + delilahrose[0] + ", " + delilahrose[1] + "]";
    };
    if (!(scipio = keveen())) return null;
    var nishtha = [], fendi = scipio.createBuffer();
    scipio.bindBuffer(scipio.ARRAY_BUFFER, fendi);
    var davidallen = new Float32Array([-0.2, -0.9, 0, .4, -0.26, 0, 0, .732134444, 0]);
    scipio.bufferData(scipio.ARRAY_BUFFER, davidallen, scipio.STATIC_DRAW), fendi.itemSize = 3, fendi.numItems = 3;
    var ngun = scipio.createProgram(), nicte = scipio.createShader(scipio.VERTEX_SHADER);
    scipio.shaderSource(nicte, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), scipio.compileShader(nicte);
    var khason = scipio.createShader(scipio.FRAGMENT_SHADER);
    scipio.shaderSource(khason, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), scipio.compileShader(khason), scipio.attachShader(ngun, nicte), scipio.attachShader(ngun, khason), scipio.linkProgram(ngun), scipio.useProgram(ngun), ngun.vertexPosAttrib = scipio.getAttribLocation(ngun, "attrVertex"), ngun.offsetUniform = scipio.getUniformLocation(ngun, "uniformOffset"), scipio.enableVertexAttribArray(ngun.vertexPosArray), scipio.vertexAttribPointer(ngun.vertexPosAttrib, fendi.itemSize, scipio.FLOAT, false, 0, 0), scipio.uniform2f(ngun.offsetUniform, 1, 1), scipio.drawArrays(scipio.TRIANGLE_STRIP, 0, fendi.numItems);
    try {
      nishtha.push(scipio.canvas.toDataURL());
    } catch (cionne) {}
    nishtha.push("extensions:" + (scipio.getSupportedExtensions() || []).join(";")), nishtha.push("webgl aliased line width range:" + floydene(scipio.getParameter(scipio.ALIASED_LINE_WIDTH_RANGE))), nishtha.push("webgl aliased point size range:" + floydene(scipio.getParameter(scipio.ALIASED_POINT_SIZE_RANGE))), nishtha.push("webgl alpha bits:" + scipio.getParameter(scipio.ALPHA_BITS)), nishtha.push("webgl antialiasing:" + (scipio.getContextAttributes().antialias ? "yes" : "no")), nishtha.push("webgl blue bits:" + scipio.getParameter(scipio.BLUE_BITS)), nishtha.push("webgl depth bits:" + scipio.getParameter(scipio.DEPTH_BITS)), nishtha.push("webgl green bits:" + scipio.getParameter(scipio.GREEN_BITS)), nishtha.push("webgl max anisotropy:" + function (hae) {
      var tehran = hae.getExtension("EXT_texture_filter_anisotropic") || hae.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || hae.getExtension("MOZ_EXT_texture_filter_anisotropic");
      if (tehran) {
        var nectarios = hae.getParameter(tehran.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        return 0 === nectarios && (nectarios = 2), nectarios;
      }
      return null;
    }(scipio)), nishtha.push("webgl max combined texture image units:" + scipio.getParameter(scipio.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), nishtha.push("webgl max cube map texture size:" + scipio.getParameter(scipio.MAX_CUBE_MAP_TEXTURE_SIZE)), nishtha.push("webgl max fragment uniform vectors:" + scipio.getParameter(scipio.MAX_FRAGMENT_UNIFORM_VECTORS)), nishtha.push("webgl max render buffer size:" + scipio.getParameter(scipio.MAX_RENDERBUFFER_SIZE)), nishtha.push("webgl max texture image units:" + scipio.getParameter(scipio.MAX_TEXTURE_IMAGE_UNITS)), nishtha.push("webgl max texture size:" + scipio.getParameter(scipio.MAX_TEXTURE_SIZE)), nishtha.push("webgl max varying vectors:" + scipio.getParameter(scipio.MAX_VARYING_VECTORS)), nishtha.push("webgl max vertex attribs:" + scipio.getParameter(scipio.MAX_VERTEX_ATTRIBS)), nishtha.push("webgl max vertex texture image units:" + scipio.getParameter(scipio.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), nishtha.push("webgl max vertex uniform vectors:" + scipio.getParameter(scipio.MAX_VERTEX_UNIFORM_VECTORS)), nishtha.push("webgl max viewport dims:" + floydene(scipio.getParameter(scipio.MAX_VIEWPORT_DIMS))), nishtha.push("webgl red bits:" + scipio.getParameter(scipio.RED_BITS)), nishtha.push("webgl renderer:" + scipio.getParameter(scipio.RENDERER)), nishtha.push("webgl shading language version:" + scipio.getParameter(scipio.SHADING_LANGUAGE_VERSION)), nishtha.push("webgl stencil bits:" + scipio.getParameter(scipio.STENCIL_BITS)), nishtha.push("webgl vendor:" + scipio.getParameter(scipio.VENDOR)), nishtha.push("webgl version:" + scipio.getParameter(scipio.VERSION));
    try {
      var pape = scipio.getExtension("WEBGL_debug_renderer_info");
      pape && (nishtha.push("webgl unmasked vendor:" + scipio.getParameter(pape.UNMASKED_VENDOR_WEBGL)), nishtha.push("webgl unmasked renderer:" + scipio.getParameter(pape.UNMASKED_RENDERER_WEBGL)));
    } catch (lyman) {}
    return scipio.getShaderPrecisionFormat ? (arvell(["FLOAT", "INT"], function (sherene) {
      arvell(["VERTEX", "FRAGMENT"], function (locksley) {
        arvell(["HIGH", "MEDIUM", "LOW"], function (prestyn) {
          arvell(["precision", "rangeMin", "rangeMax"], function (megghan) {
            var lawrin = scipio.getShaderPrecisionFormat(scipio[locksley + "_SHADER"], scipio[prestyn + "_" + sherene])[megghan];
            "precision" !== megghan && (megghan = "precision " + megghan);
            var blakeleigh = ["webgl ", locksley.toLowerCase(), " shader ", prestyn.toLowerCase(), " ", sherene.toLowerCase(), " ", megghan, ":", lawrin].join("");
            nishtha.push(blakeleigh);
          });
        });
      });
    }), rocelia(scipio), nishtha) : (rocelia(scipio), nishtha);
  }, telicia = function () {
    try {
      var aldous = keveen(), yehuda = aldous.getExtension("WEBGL_debug_renderer_info"), lemya = aldous.getParameter(yehuda.UNMASKED_VENDOR_WEBGL) + "~" + aldous.getParameter(yehuda.UNMASKED_RENDERER_WEBGL);
      return rocelia(aldous), lemya;
    } catch (tykee) {
      return null;
    }
  }, assane = function () {
    var lesandro = document.createElement("div");
    lesandro.innerHTML = "&nbsp;", lesandro.className = "adsbox";
    var kelvin = false;
    try {
      document.body.appendChild(lesandro), kelvin = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(lesandro);
    } catch (zymere) {
      kelvin = false;
    }
    return kelvin;
  }, jeresiah = function () {
    if (void 0 !== navigator.languages) try {
      if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return true;
    } catch (glenna) {
      return true;
    }
    return false;
  }, izaah = function () {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
  }, shakalia = function () {
    var keanen, jearlean = navigator.userAgent.toLowerCase(), naod = navigator.oscpu, addi = navigator.platform.toLowerCase();
    if (keanen = jearlean.indexOf("windows phone") >= 0 ? "Windows Phone" : jearlean.indexOf("windows") >= 0 || jearlean.indexOf("win16") >= 0 || jearlean.indexOf("win32") >= 0 || jearlean.indexOf("win64") >= 0 || jearlean.indexOf("win95") >= 0 || jearlean.indexOf("win98") >= 0 || jearlean.indexOf("winnt") >= 0 || jearlean.indexOf("wow64") >= 0 ? "Windows" : jearlean.indexOf("android") >= 0 ? "Android" : jearlean.indexOf("linux") >= 0 || jearlean.indexOf("cros") >= 0 || jearlean.indexOf("x11") >= 0 ? "Linux" : jearlean.indexOf("iphone") >= 0 || jearlean.indexOf("ipad") >= 0 || jearlean.indexOf("ipod") >= 0 || jearlean.indexOf("crios") >= 0 || jearlean.indexOf("fxios") >= 0 ? "iOS" : jearlean.indexOf("macintosh") >= 0 || jearlean.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows" !== keanen && "Windows Phone" !== keanen && "Android" !== keanen && "iOS" !== keanen && "Other" !== keanen && -1 === jearlean.indexOf("cros")) return true;
    if (void 0 !== naod) {
      if ((naod = naod.toLowerCase()).indexOf("win") >= 0 && "Windows" !== keanen && "Windows Phone" !== keanen) return true;
      if (naod.indexOf("linux") >= 0 && "Linux" !== keanen && "Android" !== keanen) return true;
      if (naod.indexOf("mac") >= 0 && "Mac" !== keanen && "iOS" !== keanen) return true;
      if ((-1 === naod.indexOf("win") && -1 === naod.indexOf("linux") && -1 === naod.indexOf("mac")) != ("Other" === keanen)) return true;
    }
    return addi.indexOf("win") >= 0 && "Windows" !== keanen && "Windows Phone" !== keanen || ((addi.indexOf("linux") >= 0 || addi.indexOf("android") >= 0 || addi.indexOf("pike") >= 0) && "Linux" !== keanen && "Android" !== keanen || ((addi.indexOf("mac") >= 0 || addi.indexOf("ipad") >= 0 || addi.indexOf("ipod") >= 0 || addi.indexOf("iphone") >= 0) && "Mac" !== keanen && "iOS" !== keanen || !(addi.indexOf("arm") >= 0 && "Windows Phone" === keanen) && (!(addi.indexOf("pike") >= 0 && jearlean.indexOf("opera mini") >= 0) && ((addi.indexOf("win") < 0 && addi.indexOf("linux") < 0 && addi.indexOf("mac") < 0 && addi.indexOf("iphone") < 0 && addi.indexOf("ipad") < 0 && addi.indexOf("ipod") < 0) !== ("Other" === keanen) || void 0 === navigator.plugins && "Windows" !== keanen && "Windows Phone" !== keanen))));
  }, maleeha = function () {
    var artavian, janier = navigator.userAgent.toLowerCase(), abrea = navigator.productSub;
    if (janier.indexOf("edge/") >= 0 || janier.indexOf("iemobile/") >= 0) return false;
    if (janier.indexOf("opera mini") >= 0) return false;
    if (("Chrome" === (artavian = janier.indexOf("firefox/") >= 0 ? "Firefox" : janier.indexOf("opera/") >= 0 || janier.indexOf(" opr/") >= 0 ? "Opera" : janier.indexOf("chrome/") >= 0 ? "Chrome" : janier.indexOf("safari/") >= 0 ? janier.indexOf("android 1.") >= 0 || janier.indexOf("android 2.") >= 0 || janier.indexOf("android 3.") >= 0 || janier.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : janier.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") || "Safari" === artavian || "Opera" === artavian) && "20030107" !== abrea) return true;
    var shaleia, davany = eval.toString().length;
    if (37 === davany && "Safari" !== artavian && "Firefox" !== artavian && "Other" !== artavian) return true;
    if (39 === davany && "Internet Explorer" !== artavian && "Other" !== artavian) return true;
    if (33 === davany && "Chrome" !== artavian && "AOSP" !== artavian && "Opera" !== artavian && "Other" !== artavian) return true;
    try {
      throw "a";
    } catch (dalanna) {
      try {
        dalanna.toSource(), shaleia = true;
      } catch (jermika) {
        shaleia = false;
      }
    }
    return shaleia && "Firefox" !== artavian && "Other" !== artavian;
  }, demetrous = function () {
    var fieldon = document.createElement("canvas");
    return !(!fieldon.getContext || !fieldon.getContext("2d"));
  }, chlorene = function () {
    if (!demetrous()) return false;
    var kaneshia = keveen(), kayliann = !!window.WebGLRenderingContext && !!kaneshia;
    return rocelia(kaneshia), kayliann;
  }, ziara = function () {
    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
  }, deonsha = function () {
    return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2;
  }, kiyuana = function () {
    return void 0 !== window.swfobject;
  }, stanleigh = function () {
    return window.swfobject.hasFlashPlayerVersion("9.0.0");
  }, tosheba = function (shizuyo, saviour) {
    window.___fp_swf_loaded = function (carlitha) {
      shizuyo(carlitha);
    };
    var braulia = saviour.fonts.swfContainerId;
    !function (wandalene) {
      var yarisbeth = document.createElement("div");
      yarisbeth.setAttribute("id", wandalene.fonts.swfContainerId), document.body.appendChild(yarisbeth);
    }();
    var yael = {onReady: "___fp_swf_loaded"};
    window.swfobject.embedSWF(saviour.fonts.swfPath, braulia, "1", "1", "9.0.0", false, yael, {allowScriptAccess: "always", menu: "false"}, {});
  }, keveen = function () {
    var dravid = document.createElement("canvas"), margarette = null;
    try {
      margarette = dravid.getContext("webgl") || dravid.getContext("experimental-webgl");
    } catch (iyaunna) {}
    return margarette || (margarette = null), margarette;
  }, rocelia = function (antavius) {
    var loudes = antavius.getExtension("WEBGL_lose_context");
    null != loudes && loudes.loseContext();
  }, joshus = [{key: "userAgent", getData: function (pearlina) {
    pearlina(navigator.userAgent);
  }}, {key: "webdriver", getData: function (evenny, francois) {
    evenny(null == navigator.webdriver ? francois.NOT_AVAILABLE : navigator.webdriver);
  }}, {key: "language", getData: function (daonna, daishaun) {
    daonna(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || daishaun.NOT_AVAILABLE);
  }}, {key: "colorDepth", getData: function (avril, chelsia) {
    avril(window.screen.colorDepth || chelsia.NOT_AVAILABLE);
  }}, {key: "deviceMemory", getData: function (shiro, grenda) {
    shiro(navigator.deviceMemory || grenda.NOT_AVAILABLE);
  }}, {key: "pixelRatio", getData: function (vincenta, nakylah) {
    vincenta(window.devicePixelRatio || nakylah.NOT_AVAILABLE);
  }}, {key: "hardwareConcurrency", getData: function (yadhir, aneesha) {
    yadhir(soctt(aneesha));
  }}, {key: "screenResolution", getData: function (dazon, tiairra) {
    dazon(rabekah(tiairra));
  }}, {key: "availableScreenResolution", getData: function (loweta, tenneil) {
    loweta(rosolyn(tenneil));
  }}, {key: "timezoneOffset", getData: function (nhia) {
    nhia((new Date).getTimezoneOffset());
  }}, {key: "timezone", getData: function (wiltz, markiel) {
    window.Intl && window.Intl.DateTimeFormat ? wiltz((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || markiel.NOT_AVAILABLE) : wiltz(markiel.NOT_AVAILABLE);
  }}, {key: "sessionStorage", getData: function (jacarie, jaen) {
    jacarie(julitza(jaen));
  }}, {key: "localStorage", getData: function (susan, srikar) {
    susan(galilea(srikar));
  }}, {key: "indexedDb", getData: function (chamiya, darold) {
    chamiya(onyah(darold));
  }}, {key: "addBehavior", getData: function (santangela) {
    santangela(!!window.HTMLElement.prototype.addBehavior);
  }}, {key: "openDatabase", getData: function (wyman) {
    wyman(!!window.openDatabase);
  }}, {key: "cpuClass", getData: function (perrine, novelle) {
    perrine(darrek(novelle));
  }}, {key: "platform", getData: function (kwabene, audrone) {
    kwabene(pader(audrone));
  }}, {key: "doNotTrack", getData: function (donyale, durrel) {
    donyale(quinlan(durrel));
  }}, {key: "plugins", getData: function (nakeda, mckinleigh) {
    ziara() ? mckinleigh.plugins.excludeIE ? nakeda(mckinleigh.EXCLUDED) : nakeda(railey(mckinleigh)) : nakeda(chynah(mckinleigh));
  }}, {key: "canvas", getData: function (pierra, bellani) {
    demetrous() ? pierra(letishia(bellani)) : pierra(bellani.NOT_AVAILABLE);
  }}, {key: "webgl", getData: function (hartli, ryanchristopher) {
    chlorene() ? hartli(elodia()) : hartli(ryanchristopher.NOT_AVAILABLE);
  }}, {key: "webglVendorAndRenderer", getData: function (tyreek) {
    chlorene() ? tyreek(telicia()) : tyreek();
  }}, {key: "adBlock", getData: function (daeshawn) {
    daeshawn(assane());
  }}, {key: "hasLiedLanguages", getData: function (santasia) {
    santasia(jeresiah());
  }}, {key: "hasLiedResolution", getData: function (jaymison) {
    jaymison(izaah());
  }}, {key: "hasLiedOs", getData: function (joevan) {
    joevan(shakalia());
  }}, {key: "hasLiedBrowser", getData: function (jerrad) {
    jerrad(maleeha());
  }}, {key: "touchSupport", getData: function (tselane) {
    tselane(congetta());
  }}, {key: "fonts", getData: function (bracen, joynell) {
    var saier = ["monospace", "sans-serif", "serif"], ofek = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", vocDecoder(1e3), "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
    joynell.fonts.extendedJsFonts && (ofek = ofek.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), ofek = (ofek = ofek.concat(joynell.fonts.userDefinedFonts)).filter(function (princton, rosealina) {
      return ofek.indexOf(princton) === rosealina;
    });
    var miking = document.getElementsByTagName("body")[0], denetrice = document.createElement("div"), zamar = document.createElement("div"), ronicka = {}, badi = {}, tysie = function () {
      var laconya = document.createElement("span");
      return laconya.style.position = "absolute", laconya.style.left = "-9999px", laconya.style.fontSize = "72px", laconya.style.fontStyle = "normal", laconya.style.fontWeight = "normal", laconya.style.letterSpacing = "normal", laconya.style.lineBreak = "auto", laconya.style.lineHeight = "normal", laconya.style.textTransform = "none", laconya.style.textAlign = "left", laconya.style.textDecoration = "none", laconya.style.textShadow = "none", laconya.style.whiteSpace = "normal", laconya.style.wordBreak = "normal", laconya.style.wordSpacing = "normal", laconya.innerHTML = "mmmmmmmmmmlli", laconya;
    }, jerona = function (arnita, coire) {
      var chantise = tysie();
      return chantise.style.fontFamily = "'" + arnita + "'," + coire, chantise;
    }, earic = function (radin) {
      for (var sidon = false, jeziyah = 0; jeziyah < saier.length; jeziyah++) if (sidon = radin[jeziyah].offsetWidth !== ronicka[saier[jeziyah]] || radin[jeziyah].offsetHeight !== badi[saier[jeziyah]]) return sidon;
      return sidon;
    }, adhara = function () {
      for (var etsub = [], uzayr = 0, dashan = saier.length; uzayr < dashan; uzayr++) {
        var zhamira = tysie();
        zhamira.style.fontFamily = saier[uzayr], denetrice.appendChild(zhamira), etsub.push(zhamira);
      }
      return etsub;
    }();
    miking.appendChild(denetrice);
    for (var dannon = 0, mariyonna = saier.length; dannon < mariyonna; dannon++) ronicka[saier[dannon]] = adhara[dannon].offsetWidth, badi[saier[dannon]] = adhara[dannon].offsetHeight;
    var amelyah = function () {
      for (var marsenio = {}, ceonna = 0, eshe = ofek.length; ceonna < eshe; ceonna++) {
        for (var winson = [], markesa = 0, nyzir = saier.length; markesa < nyzir; markesa++) {
          var randoph = jerona(ofek[ceonna], saier[markesa]);
          zamar.appendChild(randoph), winson.push(randoph);
        }
        marsenio[ofek[ceonna]] = winson;
      }
      return marsenio;
    }();
    miking.appendChild(zamar);
    for (var samhith = [], maisyn = 0, milik = ofek.length; maisyn < milik; maisyn++) earic(amelyah[ofek[maisyn]]) && samhith.push(ofek[maisyn]);
    miking.removeChild(zamar), miking.removeChild(denetrice), bracen(samhith);
  }, pauseBefore: true}, {key: "fontsFlash", getData: function (alexaundrea, braiden) {
    return kiyuana() ? stanleigh() ? braiden.fonts.swfPath ? void tosheba(function (segundo) {
      alexaundrea(segundo);
    }, braiden) : alexaundrea("missing options.fonts.swfPath") : alexaundrea("flash not installed") : alexaundrea("swf object not loaded");
  }, pauseBefore: true}, {key: "audio", getData: function (natayshia, tomica) {
    var caydance = tomica.audio;
    if (caydance.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return natayshia(tomica.EXCLUDED);
    var cowanda = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (null == cowanda) return natayshia(tomica.NOT_AVAILABLE);
    var mattan = new cowanda(1, 44100, 44100), tarus = mattan.createOscillator();
    tarus.type = "triangle", tarus.frequency.setValueAtTime(1e4, mattan.currentTime);
    var connee = mattan.createDynamicsCompressor();
    arvell([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function (hattiemae) {
      void 0 !== connee[hattiemae[0]] && "function" == typeof connee[hattiemae[0]].setValueAtTime && connee[hattiemae[0]].setValueAtTime(hattiemae[1], mattan.currentTime);
    }), tarus.connect(connee), connee.connect(mattan.destination), tarus.start(0), mattan.startRendering();
    var raquelle = setTimeout(function () {
      return console.warn("Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: \"" + navigator.userAgent + '".'), mattan.oncomplete = function () {}, mattan = null, natayshia("audioTimeout");
    }, caydance.timeout);
    mattan.oncomplete = function (sanyiah) {
      var shaquill;
      try {
        clearTimeout(raquelle), shaquill = sanyiah.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (kemarley, leniel) {
          return kemarley + Math.abs(leniel);
        }, 0).toString(), tarus.disconnect(), connee.disconnect();
      } catch (jennika) {
        return void natayshia(jennika);
      }
      natayshia(shaquill);
    };
  }}, {key: "enumerateDevices", getData: function (akillian, mckinli) {
    if (!joden()) return akillian(mckinli.NOT_AVAILABLE);
    navigator.mediaDevices.enumerateDevices().then(function (rithvika) {
      akillian(rithvika.map(function (doloris) {
        return "id=" + doloris.deviceId + ";gid=" + doloris.groupId + ";" + doloris.kind + ";" + doloris.label;
      }));
    }).catch(function (alnesha) {
      akillian(alnesha);
    });
  }}], branwen = function (rukaya) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200");
  };
  return branwen.get = function (orletta, solon) {
    solon ? orletta || (orletta = {}) : (solon = orletta, orletta = {}), function (makua, leesa) {
      if (null == leesa) return makua;
      var tc, freyah;
      for (freyah in leesa) null == (tc = leesa[freyah]) || Object.prototype.hasOwnProperty.call(makua, freyah) || (makua[freyah] = tc);
    }(orletta, crosby), orletta.components = orletta.extraComponents.concat(joshus);
    var vimala = {data: [], addPreprocessedComponent: function (ijanay, nicholas) {
      "function" == typeof orletta.preprocessor && (nicholas = orletta.preprocessor(ijanay, nicholas)), vimala.data.push({key: ijanay, value: nicholas});
    }}, annabellee = -1, sheldon = function (tavare) {
      if ((annabellee += 1) >= orletta.components.length) solon(vimala.data); else {
        var maleaha = orletta.components[annabellee];
        if (orletta.excludes[maleaha.key]) sheldon(false); else {
          if (!tavare && maleaha.pauseBefore) return annabellee -= 1, void setTimeout(function () {
            sheldon(true);
          }, 1);
          try {
            maleaha.getData(function (tymell) {
              vimala.addPreprocessedComponent(maleaha.key, tymell), sheldon(false);
            }, orletta);
          } catch (french) {
            vimala.addPreprocessedComponent(maleaha.key, String(french)), sheldon(false);
          }
        }
      }
    };
    sheldon(false);
  }, branwen.getPromise = function (angelic) {
    return new Promise(function (jangelo, geana) {
      branwen.get(angelic, jangelo);
    });
  }, branwen.getV18 = function (alissabeth, annel) {
    return null == annel && (annel = alissabeth, alissabeth = {}), branwen.get(alissabeth, function (majorie) {
      for (var reddington = [], osariemen = 0; osariemen < majorie.length; osariemen++) {
        var denahi = majorie[osariemen];
        if (denahi.value === (alissabeth.NOT_AVAILABLE || "not available")) reddington.push({key: denahi.key, value: "unknown"}); else {
          if ("plugins" === denahi.key) reddington.push({key: "plugins", value: keonnie(denahi.value, function (taleiyah) {
            var cidnie = keonnie(taleiyah[2], function (hassani) {
              return hassani.join ? hassani.join("~") : hassani;
            }).join(",");
            return [taleiyah[0], taleiyah[1], cidnie].join("::");
          })}); else {
            if (-1 !== ["canvas", "webgl"].indexOf(denahi.key) && Array.isArray(denahi.value)) reddington.push({key: denahi.key, value: denahi.value.join("~")}); else {
              if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(denahi.key)) {
                if (!denahi.value) continue;
                reddington.push({key: denahi.key, value: 1});
              } else denahi.value ? reddington.push(denahi.value.join ? {key: denahi.key, value: denahi.value.join(";")} : denahi) : reddington.push({key: denahi.key, value: denahi.value});
            }
          }
        }
      }
      var latony = solia(keonnie(reddington, function (leola) {
        return leola.value;
      }).join("~~~"), 31);
      annel(latony, reddington);
    });
  }, branwen.x64hash128 = solia, branwen.VERSION = "2.1.4", branwen;
}), function (chanley, mirtha) {
  var pritesh = "model", aleksei = "name", quetcy = "type", zen = "vendor", lucine = "version", laith = "mobile", quinlyn = "tablet", cruzita = "smarttv", stanislaw = {extend: function (hakeema, janacia) {
    var hermilinda = {};
    for (var abry in hakeema) janacia[abry] && janacia[abry].length % 2 == 0 ? hermilinda[abry] = janacia[abry].concat(hakeema[abry]) : hermilinda[abry] = hakeema[abry];
    return hermilinda;
  }, has: function (zakarii, shellena) {
    return "string" == typeof zakarii && -1 !== shellena.toLowerCase().indexOf(zakarii.toLowerCase());
  }, lowerize: function (anavel) {
    return anavel.toLowerCase();
  }, major: function (artorias) {
    return "string" == typeof artorias ? artorias.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
  }, trim: function (malira) {
    return malira.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }}, maricelis = {rgx: function (khare, shielah) {
    for (var rontavia, robertanthony, lorrenda, bethel, alyvia, lorria, tomar = 0; tomar < shielah.length && !alyvia;) {
      var giuliana = shielah[tomar], bertilla = shielah[tomar + 1];
      for (rontavia = robertanthony = 0; rontavia < giuliana.length && !alyvia;) if (alyvia = giuliana[rontavia++].exec(khare)) {
        for (lorrenda = 0; lorrenda < bertilla.length; lorrenda++) lorria = alyvia[++robertanthony], "object" == typeof (bethel = bertilla[lorrenda]) && bethel.length > 0 ? 2 == bethel.length ? "function" == typeof bethel[1] ? this[bethel[0]] = bethel[1].call(this, lorria) : this[bethel[0]] = bethel[1] : 3 == bethel.length ? "function" != typeof bethel[1] || bethel[1].exec && bethel[1].test ? this[bethel[0]] = lorria ? lorria.replace(bethel[1], bethel[2]) : void 0 : this[bethel[0]] = lorria ? bethel[1].call(this, lorria, bethel[2]) : void 0 : 4 == bethel.length && (this[bethel[0]] = lorria ? bethel[3].call(this, lorria.replace(bethel[1], bethel[2])) : void 0) : this[bethel] = lorria || void 0;
      }
      tomar += 2;
    }
  }, str: function (hardik, aireonna) {
    for (var tramine in aireonna) if ("object" == typeof aireonna[tramine] && aireonna[tramine].length > 0) {
      for (var mariannah = 0; mariannah < aireonna[tramine].length; mariannah++) if (stanislaw.has(aireonna[tramine][mariannah], hardik)) return "?" === tramine ? void 0 : tramine;
    } else {
      if (stanislaw.has(aireonna[tramine], hardik)) return "?" === tramine ? void 0 : tramine;
    }
    return hardik;
  }}, cybil = {browser: {oldsafari: {version: {"1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/"}}}, device: {amazon: {model: {"Fire Phone": ["SD", "KF"]}}, sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}}, os: {windows: {version: {ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM"}}}}, trezdon = {browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [aleksei, lucine], [/(opios)[\/\s]+([\w\.]+)/i], [[aleksei, "Opera Mini"], lucine], [/\s(opr)\/([\w\.]+)/i], [[aleksei, "Opera"], lucine], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [aleksei, lucine], [/(konqueror)\/([\w\.]+)/i], [[aleksei, "Konqueror"], lucine], [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i], [[aleksei, "IE"], lucine], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[aleksei, "Edge"], lucine], [/(yabrowser)\/([\w\.]+)/i], [[aleksei, "Yandex"], lucine], [/(Avast)\/([\w\.]+)/i], [[aleksei, "Avast Secure Browser"], lucine], [/(AVG)\/([\w\.]+)/i], [[aleksei, "AVG Secure Browser"], lucine], [/(puffin)\/([\w\.]+)/i], [[aleksei, "Puffin"], lucine], [/(focus)\/([\w\.]+)/i], [[aleksei, "Firefox Focus"], lucine], [/(opt)\/([\w\.]+)/i], [[aleksei, "Opera Touch"], lucine], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[aleksei, "UCBrowser"], lucine], [/(comodo_dragon)\/([\w\.]+)/i], [[aleksei, /_/g, " "], lucine], [/(windowswechat qbcore)\/([\w\.]+)/i], [[aleksei, "WeChat(Win) Desktop"], lucine], [/(micromessenger)\/([\w\.]+)/i], [[aleksei, "WeChat"], lucine], [/(brave)\/([\w\.]+)/i], [[aleksei, "Brave"], lucine], [/(whale)\/([\w\.]+)/i], [[aleksei, "Whale"], lucine], [/(qqbrowserlite)\/([\w\.]+)/i], [aleksei, lucine], [/(QQ)\/([\d\.]+)/i], [aleksei, lucine], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [aleksei, lucine], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [aleksei, lucine], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [aleksei, lucine], [/(MetaSr)[\/\s]?([\w\.]+)/i], [aleksei], [/(LBBROWSER)/i], [aleksei], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [lucine, [aleksei, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [lucine, [aleksei, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[aleksei, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [aleksei, lucine], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [lucine, [aleksei, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[aleksei, /(.+)/, "$1 WebView"], lucine], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[aleksei, /(.+(?:g|us))(.+)/, "$1 $2"], lucine], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [lucine, [aleksei, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[aleksei, "Sailfish Browser"], lucine], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [aleksei, lucine], [/(dolfin)\/([\w\.]+)/i], [[aleksei, "Dolphin"], lucine], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[aleksei, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[aleksei, "Chrome"], lucine], [/(coast)\/([\w\.]+)/i], [[aleksei, "Opera Coast"], lucine], [/fxios\/([\w\.-]+)/i], [lucine, [aleksei, "Firefox"]], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [lucine, [aleksei, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [lucine, aleksei], [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i], [[aleksei, "GSA"], lucine], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [aleksei, [lucine, maricelis.str, cybil.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [aleksei, lucine], [/(navigator|netscape)\/([\w\.-]+)/i], [[aleksei, "Netscape"], lucine], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [aleksei, lucine]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", stanislaw.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", stanislaw.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", stanislaw.lowerize]]], device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [pritesh, zen, [quetcy, quinlyn]], [/applecoremedia\/[\w\.]+ \((ipad)/], [pritesh, [zen, "Apple"], [quetcy, quinlyn]], [/(apple\s{0,1}tv)/i], [[pritesh, "Apple TV"], [zen, "Apple"], [quetcy, cruzita]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [zen, pritesh, [quetcy, quinlyn]], [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i], [pritesh, [zen, "Amazon"], [quetcy, quinlyn]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[pritesh, maricelis.str, cybil.device.amazon.model], [zen, "Amazon"], [quetcy, laith]], [/android.+aft([bms])\sbuild/i], [pritesh, [zen, "Amazon"], [quetcy, cruzita]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [pritesh, zen, [quetcy, laith]], [/\((ip[honed|\s\w*]+);/i], [pritesh, [zen, "Apple"], [quetcy, laith]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [zen, pritesh, [quetcy, laith]], [/\(bb10;\s(\w+)/i], [pritesh, [zen, "BlackBerry"], [quetcy, laith]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [pritesh, [zen, "Asus"], [quetcy, quinlyn]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[zen, "Sony"], [pritesh, "Xperia Tablet"], [quetcy, quinlyn]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [pritesh, [zen, "Sony"], [quetcy, laith]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [zen, pritesh, [quetcy, "console"]], [/android.+;\s(shield)\sbuild/i], [pritesh, [zen, "Nvidia"], [quetcy, "console"]], [/(playstation\s[34portablevi]+)/i], [pritesh, [zen, "Sony"], [quetcy, "console"]], [/(sprint\s(\w+))/i], [[zen, maricelis.str, cybil.device.sprint.vendor], [pritesh, maricelis.str, cybil.device.sprint.model], [quetcy, laith]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [zen, [pritesh, /_/g, " "], [quetcy, laith]], [/(nexus\s9)/i], [pritesh, [zen, "HTC"], [quetcy, quinlyn]], [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i], [pritesh, [zen, "Huawei"], [quetcy, laith]], [/android.+(bah2?-a?[lw]\d{2})/i], [pritesh, [zen, "Huawei"], [quetcy, quinlyn]], [/(microsoft);\s(lumia[\s\w]+)/i], [zen, pritesh, [quetcy, laith]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [pritesh, [zen, "Microsoft"], [quetcy, "console"]], [/(kin\.[onetw]{3})/i], [[pritesh, /\./g, " "], [zen, "Microsoft"], [quetcy, laith]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [pritesh, [zen, "Motorola"], [quetcy, laith]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [pritesh, [zen, "Motorola"], [quetcy, quinlyn]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[zen, stanislaw.trim], [pritesh, stanislaw.trim], [quetcy, cruzita]], [/hbbtv.+maple;(\d+)/i], [[pritesh, /^/, "SmartTV"], [zen, "Samsung"], [quetcy, cruzita]], [/\(dtv[\);].+(aquos)/i], [pritesh, [zen, "Sharp"], [quetcy, cruzita]], [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[zen, "Samsung"], pritesh, [quetcy, quinlyn]], [/smart-tv.+(samsung)/i], [zen, [quetcy, cruzita], pritesh], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[zen, "Samsung"], pritesh, [quetcy, laith]], [/sie-(\w*)/i], [pritesh, [zen, "Siemens"], [quetcy, laith]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[zen, "Nokia"], pritesh, [quetcy, laith]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [pritesh, [zen, "Acer"], [quetcy, quinlyn]], [/android.+([vl]k\-?\d{3})\s+build/i], [pritesh, [zen, "LG"], [quetcy, quinlyn]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[zen, "LG"], pritesh, [quetcy, quinlyn]], [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i], [[zen, "LG"], pritesh, [quetcy, cruzita]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [pritesh, [zen, "LG"], [quetcy, laith]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [zen, pritesh, [quetcy, quinlyn]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [pritesh, [zen, "Lenovo"], [quetcy, quinlyn]], [/(lenovo)[_\s-]?([\w-]+)/i], [zen, pritesh, [quetcy, laith]], [/linux;.+((jolla));/i], [zen, pritesh, [quetcy, laith]], [/((pebble))app\/[\d\.]+\s/i], [zen, pritesh, [quetcy, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [zen, pritesh, [quetcy, laith]], [/crkey/i], [[pritesh, "Chromecast"], [zen, "Google"], [quetcy, cruzita]], [/android.+;\s(glass)\s\d/i], [pritesh, [zen, "Google"], [quetcy, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [pritesh, [zen, "Google"], [quetcy, quinlyn]], [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i], [pritesh, [zen, "Google"], [quetcy, laith]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[pritesh, /_/g, " "], [zen, "Xiaomi"], [quetcy, laith]], [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i], [[pritesh, /_/g, " "], [zen, "Xiaomi"], [quetcy, quinlyn]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [pritesh, [zen, "Meizu"], [quetcy, laith]], [/(mz)-([\w-]{2,})/i], [[zen, "Meizu"], pritesh, [quetcy, laith]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [pritesh, [zen, "OnePlus"], [quetcy, laith]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [pritesh, [zen, "RCA"], [quetcy, quinlyn]], [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i], [pritesh, [zen, "Dell"], [quetcy, quinlyn]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [pritesh, [zen, "Verizon"], [quetcy, quinlyn]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[zen, "Barnes & Noble"], pritesh, [quetcy, quinlyn]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [pritesh, [zen, "NuVision"], [quetcy, quinlyn]], [/android.+;\s(k88)\sbuild/i], [pritesh, [zen, "ZTE"], [quetcy, quinlyn]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [pritesh, [zen, "Swiss"], [quetcy, laith]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [pritesh, [zen, "Swiss"], [quetcy, quinlyn]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [pritesh, [zen, "Zeki"], [quetcy, quinlyn]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[zen, "Dragon Touch"], pritesh, [quetcy, quinlyn]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [pritesh, [zen, "Insignia"], [quetcy, quinlyn]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [pritesh, [zen, "NextBook"], [quetcy, quinlyn]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[zen, "Voice"], pritesh, [quetcy, laith]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[zen, "LvTel"], pritesh, [quetcy, laith]], [/android.+;\s(PH-1)\s/i], [pritesh, [zen, "Essential"], [quetcy, laith]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [pritesh, [zen, "Envizen"], [quetcy, quinlyn]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [zen, pritesh, [quetcy, quinlyn]], [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i], [pritesh, [zen, "MachSpeed"], [quetcy, quinlyn]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [zen, pritesh, [quetcy, quinlyn]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [pritesh, [zen, "Rotor"], [quetcy, quinlyn]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [zen, pritesh, [quetcy, quinlyn]], [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [pritesh, [quetcy, laith]], [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [pritesh, [quetcy, quinlyn]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[quetcy, stanislaw.lowerize], zen, pritesh], [/[\s\/\(](smart-?tv)[;\)]/i], [[quetcy, cruzita]], [/(android[\w\.\s\-]{0,9});.+build/i], [pritesh, [zen, "Generic"]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [lucine, [aleksei, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [lucine, [aleksei, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [aleksei, lucine], [/rv\:([\w\.]{1,9}).+(gecko)/i], [lucine, aleksei]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [aleksei, lucine], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [aleksei, [lucine, maricelis.str, cybil.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[aleksei, "Windows"], [lucine, maricelis.str, cybil.os.windows.version]], [/\((bb)(10);/i], [[aleksei, "BlackBerry"], lucine], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [aleksei, lucine], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[aleksei, "Symbian"], lucine], [/\((series40);/i], [aleksei], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[aleksei, "Firefox OS"], lucine], [/crkey\/([\d\.]+)/i], [lucine, [aleksei, "Chromecast"]], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [aleksei, lucine], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[aleksei, "Chromium OS"], lucine], [/(sunos)\s?([\w\.\d]*)/i], [[aleksei, "Solaris"], lucine], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [aleksei, lucine], [/(haiku)\s(\w+)/i], [aleksei, lucine], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[lucine, /_/g, "."], [aleksei, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[aleksei, "Mac OS"], [lucine, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [aleksei, lucine]]}, kashiya = function (alvino, lovie) {
    if ("object" == typeof alvino && (lovie = alvino, alvino = void 0), !(this instanceof kashiya)) return new kashiya(alvino, lovie).getResult();
    var yostin = alvino || (chanley && chanley.navigator && chanley.navigator.userAgent ? chanley.navigator.userAgent : ""), eliz = lovie ? stanislaw.extend(trezdon, lovie) : trezdon;
    return this.getBrowser = function () {
      var ren = {name: void 0, version: void 0};
      return maricelis.rgx.call(ren, yostin, eliz.browser), ren.major = stanislaw.major(ren.version), ren;
    }, this.getCPU = function () {
      var jehilyn = {architecture: void 0};
      return maricelis.rgx.call(jehilyn, yostin, eliz.cpu), jehilyn;
    }, this.getDevice = function () {
      var meta = {vendor: void 0, model: void 0, type: void 0};
      return maricelis.rgx.call(meta, yostin, eliz.device), meta;
    }, this.getEngine = function () {
      var jaylarose = {name: void 0, version: void 0};
      return maricelis.rgx.call(jaylarose, yostin, eliz.engine), jaylarose;
    }, this.getOS = function () {
      var vaniya = {name: void 0, version: void 0};
      return maricelis.rgx.call(vaniya, yostin, eliz.os), vaniya;
    }, this.getResult = function () {
      return {ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU()};
    }, this.getUA = function () {
      return yostin;
    }, this.setUA = function (jaquelyne) {
      return yostin = jaquelyne, this;
    }, this;
  };
  kashiya.VERSION = "0.7.23", kashiya.BROWSER = {NAME: aleksei, MAJOR: "major", VERSION: lucine}, kashiya.CPU = {ARCHITECTURE: "architecture"}, kashiya.DEVICE = {MODEL: pritesh, VENDOR: zen, TYPE: quetcy, CONSOLE: "console", MOBILE: laith, SMARTTV: cruzita, TABLET: quinlyn, WEARABLE: "wearable", EMBEDDED: "embedded"}, kashiya.ENGINE = {NAME: aleksei, VERSION: lucine}, kashiya.OS = {NAME: aleksei, VERSION: lucine}, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = kashiya), exports.UAParser = kashiya) : chanley && (chanley.UAParser = kashiya);
  var dariana = chanley && (chanley.jQuery || chanley.Zepto);
  if (dariana && !dariana.ua) {
    var tirek = new kashiya;
    dariana.ua = tirek.getResult(), dariana.ua.get = function () {
      return tirek.getUA();
    }, dariana.ua.set = function (gwyneth) {
      tirek.setUA(gwyneth);
      var lavont = tirek.getResult();
      for (var ceslie in lavont) dariana.ua[ceslie] = lavont[ceslie];
    };
  }
}("object" == typeof window ? window : this), function () {
  var options = {
    excludes: {
      userAgent: false,
      enumerateDevices: false,
      fontsFlash: true
    },
    preprocessor: function (key, value) {
        if ("userAgent" == key) {
          var uaprsr = UAParser(value);
          return uaprsr.os.name + "_" + uaprsr.os.version + "_" + uaprsr.engine.name + "_" + uaprsr.browser.name + "_" + uaprsr.device.type;
        }
      return "enumerateDevices" == key && "object" == typeof value
        ? value.map(x => x.replace(/g?id=[^;]+;/g, ""))
        : value;
    },
    extraComponents: [
      {
        key: "_geo",
        getData: function (fn, _) {
          fn("geolocation" in navigator);
        }
      },
      {
        key: "_sensor",
        getData: function (fn, _) {
          fn({
            gyroscope: "Gyroscope" in window,
            accelerometer: "Accelerometer" in window,
            magnetometer: "Magnetometer" in window,
            absorient: "AbsoluteOrientationSensor" in window,
            relorient: "RelativeOrientationSensor" in window
          });
        }
      }
    ]
  };

  Fingerprint2.get(options, function (fngrprntArr) {
    try {
      for (var fngrprntObj = {}, i = 0; i < fngrprntArr.length; i++)
        fngrprntObj[fngrprntArr[i].key] = fngrprntArr[i].value;

      var scriptQueryStringParams = {};

      if (document.getElementById("ddg_script_f"))
        for (var params = document.getElementById("ddg_script_f").getAttribute("src").split("?").pop().split("&"), j = 0; j < params.length; j++) {
          var kvp = params[j].split("=");
          
          scriptQueryStringParams[kvp[0]] = kvp[1];
        }

      fngrprntObj.context = void 0 !== scriptQueryStringParams.context ? scriptQueryStringParams.context : "normal";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/.well-known/ddos-guard/mark/");
      xhr.send(JSON.stringify(fngrprntObj));
    } catch {}
  });
}()));

