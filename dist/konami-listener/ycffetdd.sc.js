/*! Built with http://stenciljs.com */

window['konami-listener'].loadStyles("konami-listener","[data-konami-listener-host]{display:none;position:absolute;top:0;left:0;bottom:0;right:0}.active[data-konami-listener-host]{display:block}\nkonami-listener.hydrated{visibility:inherit}");
window["konami-listener"].loadComponents("ycffetdd",function(t,e,i,s){"use strict";class n{constructor(){this.keys=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],this.accepted=[...new Set(this.keys)],this.input=[]}handleKey(t){let{key:e}=t;this.accepted.includes(e)&&(this.keys[this.input.length]===e?this.onMatch(e):this.reset())}onMatch(t){this.input.push(t),10===this.input.length&&this.onFullMatch()}onFullMatch(){this.matched.emit(),this.el.classList.add("active"),this.reset()}reset(){this.input.length&&(this.input=[])}render(){return e("div",null,e("slot",null))}}t["konami-listener"]=n},["konami-listener",[["el",7,0,1],["input",5,0,1]],{},[["matched"]]]);;