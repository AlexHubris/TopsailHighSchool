function InitExternEval(appid){Gamebreak.init();}
function Y8ExternEval(allowGamePause){}
var Gamebreak={adsRunning:false,adTimeout:0,adTagBaseUrl:'',lastAdTime:0,allowGamePause:false,defaultGamKey:'y8',defaultGamValue:'default',init:function(){Gamebreak.loadScript('');Gamebreak.loadScript('');Gamebreak.drawContainer();},drawContainer:function(){},displayAds:function(){},loadScript:function(url,callback){var script=document.createElement('script');script.type='text/javascript';script.src=url;document.getElementsByTagName('head')[0].appendChild(script);},adTimeoutPassed:function(){},setTimeScale:function(value){const instance=typeof(window.gameInstance)==='undefined'?window.unityInstance:window.gameInstance;instance.SendMessage('IDNET(Idnet.cs)','SetAudio',value);if(Gamebreak.allowGamePause){instance.SendMessage('IDNET(Idnet.cs)','SetTimeScale',value);}},adTagUrl:function(){var key=Gamebreak.getQueryParam('key')||Gamebreak.defaultGamKey;var value=Gamebreak.getQueryParam('value')||Gamebreak.defaultGamValue;return[Gamebreak.adTagBaseUrl,'cust_params='+key+'%3D'+value,'description_url='+document.URL].join('&');},getQueryParam:function(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return(false);}}
window.Html5Ima=(function(){function _bind(thisObj,fn){return function(){fn.apply(thisObj,arguments);};};var Html5Ima=function(config){this.adTagUrl=config.adTagUrl;this.overlayContainer=config.overlayContainer;this.container=config.container;this.adsController=new google.outstream.AdsController(this.container,_bind(this,this.onAdLoaded),_bind(this,this.onAdDone));};Html5Ima.prototype.load=function(){this.overlayContainer.style.display='block';this.requestAds();};Html5Ima.prototype.onAdLoaded=function(){Gamebreak.lastAdTime=new Date().getTime();Gamebreak.adsRunning=true;Gamebreak.setTimeScale('0');this.adsController.showAd();};Html5Ima.prototype.onAdDone=function(){Gamebreak.setTimeScale('1');this.overlayContainer.style.display='none';Gamebreak.adsRunning=true;};Html5Ima.prototype.requestAds=function(){this.adsController.initialize();this.adsController.requestAds(this.adTagUrl);};return Html5Ima;})();