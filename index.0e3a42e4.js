function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i,a=o("iQIUW"),f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return v.Date.now()};function h(e,t,n){var r,o,i,a,f,c,u=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function v(e){return u=e,f=setTimeout(h,t),l?m(e):a}function p(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-u>=i}function h(){var e=b();if(p(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?y(n,i-(e-u)):n}(e))}function O(e){return f=void 0,d&&r?m(e):(r=o=void 0,a)}function w(){var e=b(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return v(c);if(s)return f=setTimeout(h,t),m(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=x(t)||0,j(n)&&(l=!!n.leading,i=(s="maxWait"in n)?g(x(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:O(b())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=u.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):c.test(e)?NaN:+e}i=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:r,maxWait:t,trailing:o})};function O(){try{const e=localStorage.getItem("form-data");e&&JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}function w(e){try{const t=JSON.stringify(e);localStorage.setItem("form-data",t)}catch(e){console.error("Set state error: ",e.message)}}function E(){try{localStorage.removeItem("form-data")}catch(e){console.error("Remove key from state error: ",e.message)}}var T=o("krGWQ"),N=o("aMdlx"),S=o("04jNI"),L=o("FgVUX");!function(){let e=O();e&&Object.entries(e).forEach((([e,t])=>{T.refs.form.elements[e].value=t}))}();function M(){T.refs.modalForm.classList.toggle("is-hidden")}T.refs.addBtn.addEventListener("click",M),T.refs.closeBtn.addEventListener("click",M),T.refs.form.addEventListener("input",e(i)((e=>{const{name:t,value:n}=e.target;let r=O();r=r||{},r[t]=n,w(r)}),300)),T.refs.form.addEventListener("submit",(e=>{e.preventDefault();const{name:t,email:n,phone:r}=e.target.elements;if(""===t.value||""===n.value||""===r.value)return void a.Notify.failure("Please fill in all the areas of the form and try again");const o={};new FormData(T.refs.form).forEach(((e,t)=>{o[t]=e})),(0,S.spinnerPlay)(),(0,N.createContact)(o).then((e=>{const t=(0,L.createContactMarkup)(e);T.refs.list.insertAdjacentHTML("afterbegin",t),M()})).catch((e=>{console.log(e)})).finally((()=>{(0,S.spinnerStop)()})),e.currentTarget.reset(),E()}));
//# sourceMappingURL=index.0e3a42e4.js.map