!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(w,t),d?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function w(){var e=b();if(j(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&o?p(e):(o=i=void 0,u)}function h(){var e=b(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(b())},h}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var O,j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){I[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(I))}),500)),j.addEventListener("submit",(function(e){var t,n;console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),window.localStorage.clear(),I={email:null!==(t=x.email)&&void 0!==t?t:"",message:null!==(n=x.message)&&void 0!==n?n:""}}));var w,T,h,k,N,x=null!==(O=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==O?O:"",I={email:null!==(w=x.email)&&void 0!==w?w:"",message:null!==(T=x.message)&&void 0!==T?T:""};h=JSON.parse(localStorage.getItem("feedback-form-state")),k=document.querySelector(".feedback-form input"),N=document.querySelector(".feedback-form textarea"),h&&(k.value=h.email,N.value=h.message)}();
//# sourceMappingURL=03-feedback.08c28c27.js.map