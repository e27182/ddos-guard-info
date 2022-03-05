// VSCode, do replace:
// from \["([^\] ]+)"\]
// to .$1
// RegEx, preserve case
(function loadJs() {
  var scriptEl = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.src = "/.well-known/ddos-guard/check?context=captcha";
  scriptEl.id = "ddg_script_f";
  scriptEl.async = true;
  scriptEl.defer = true;
  document.getElementsByTagName("head")[0].appendChild(scriptEl);
}());

var getCookie = function (kshaun) {
  var kynzleigh = document.cookie.match(new RegExp("(?:^|; )" + kshaun.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return kynzleigh ? decodeURIComponent(kynzleigh[1]) : undefined;
},

getAjax = function (url) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", url);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();

  return xhr;
},

isWebDriver = function () {
  try {
    var findCDCinDocument = function () {
      var regex = /^\$cdc_/;
      
      for (field in document) {
        if (regex.test(field)) return true;
      }

      return false;
    },
    isChrome = function () {
      return navigator.userAgent.indexOf("Chrome") > -1;
    },
    isFirefox = function () {
      return navigator.userAgent.indexOf("Firefox") > -1;
    };

    if (navigator.webdriver || findCDCinDocument() || navigator.languages.length === 0) return true;

    if (isChrome() && /HeadlessChrome/.test(window.navigator.userAgent)) return true;

    if (isFirefox() && window.document.documentElement.getAttribute("webdriver")) return true;

  } catch {}
  return false;
},

cb = function () {
  var ddg3 = getCookie("__ddg3");
  if (ddg3) {
    var isWDint = Number(isWebDriver());
    if (typeof hcaptcha !== "undefined")
      getAjax("/.well-known/ddos-guard/hc?ddg3=" + ddg3 + "&id=" + hcaptcha.getResponse() + "&depricated=" + isWDint);
    else if (typeof grecaptcha !== "undefined")
      getAjax("/.well-known/ddos-guard/rc?ddg3=" + ddg3 + "&id=" + grecaptcha.getResponse() + "&depricated=" + isWDint);
  }

  document.getElementById("g-recaptcha") && (document.getElementById("g-recaptcha").style.display = "none");
  document.getElementById("h-captcha") && (document.getElementById("h-captcha").style.display = "none");

  var dgLoadEl = document.getElementById("dg-load");
  if (dgLoadEl)
    dgLoadEl.style.display = "block";
  
  setTimeout(function () { document.location.reload(true); }, 2000);
};

