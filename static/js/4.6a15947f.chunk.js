/*! For license information please see 4.6a15947f.chunk.js.LICENSE.txt */
(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[4],{341:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(112);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,c=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},342:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},343:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},344:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}n.d(t,"a",(function(){return i}))},345:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},353:function(e,t,n){e.exports={paginator:"Paginator_paginator__3-u0z",pageNumber:"Paginator_pageNumber__1b4Wd",selectedPage:"Paginator_selectedPage__33A6a"}},354:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},355:function(e,t,n){"use strict";var r=n(1),o=n(12),c=n(0),i=(n(4),n(56)),a=n(114),s=n(111),u=Object(s.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=c.forwardRef((function(e,t){var n=e.alt,a=e.children,s=e.classes,l=e.className,f=e.component,p=void 0===f?"div":f,g=e.imgProps,b=e.sizes,d=e.src,h=e.srcSet,y=e.variant,j=void 0===y?"circle":y,m=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,O=function(e){var t=e.src,n=e.srcSet,r=c.useState(!1),o=r[0],i=r[1];return c.useEffect((function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),o}({src:d,srcSet:h}),P=d||h,w=P&&"error"!==O;return v=w?c.createElement("img",Object(r.a)({alt:n,src:d,srcSet:h,sizes:b,className:s.img},g)):null!=a?a:P&&n?n[0]:c.createElement(u,{className:s.fallback}),c.createElement(p,Object(r.a)({className:Object(i.a)(s.root,s.system,s[j],l,!w&&s.colorDefault),ref:t},m),v)}));t.a=Object(a.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(l)},358:function(e,t,n){"use strict";n.r(t);var r=n(342),o=n(343),c=n(345),i=n(344),a=n(19),s=n(148),u=n(0),l=n.n(u),f=n(5),p=n.p+"static/media/user.42138946.png",g=n(355),b=n(22),d=n(2),h=function(e){var t=e.id,n=e.photos,r=e.name,o=e.status,c=e.followed,i=e.toggleFollowingInProgress,a=e.unfollow,s=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsx)(b.b,{to:"/profile/".concat(t),children:Object(d.jsx)(g.a,{src:null!=n.small?n.small:p})}),Object(d.jsx)("div",{children:r}),Object(d.jsx)("div",{children:o}),c?Object(d.jsx)("button",{disabled:i.some((function(e){return e===t})),onClick:function(){return a(t)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:i.some((function(e){return e===t})),onClick:function(){return s(t)},children:"Follow"})]})},y=n(116),j=n(341),m=n(353),v=n.n(m),O=n(354),P=n.n(O),w=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,a=Math.ceil(t/n),s=[],u=1;u<=a;u++)s.push(u);var f=Math.ceil(a/i),p=l.a.useState(1),g=Object(j.a)(p,2),b=g[0],h=g[1],m=(b-1)*i+1,O=b*i;return Object(d.jsxs)("div",{className:v.a.paginator,children:[b>1&&Object(d.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),s.filter((function(e){return e>=m&&e<=O})).map((function(e,t){return Object(d.jsx)("span",{className:P()(Object(y.a)({},v.a.selectedPage,r===e),v.a.pageNumber),onClick:function(){return o(e)},children:"".concat(e," ")},"".concat(e,"_").concat(t))})),f>b&&Object(d.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},S=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return Object(u.createElement)(h,Object(f.a)(Object(f.a)({},t),{},{key:t.id,follow:e.follow,unfollow:e.unfollow,toggleFollowingInProgress:e.toggleFollowingInProgress}))}))]})},x=n(115),C=n(13),_=function(e){return e.usersPage.users},z=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},R=function(e){return e.usersPage.toggleFollowingInProgress},E=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:this.props.isFetching?Object(d.jsx)(x.a,{}):Object(d.jsx)(S,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,follow:this.props.follow,unfollow:this.props.unfollow,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,toggleFollowingInProgress:this.props.toggleFollowingInProgress})})}}]),n}(l.a.Component);t.default=Object(C.d)(Object(a.b)((function(e){return{users:_(e),totalUsersCount:z(e),pageSize:k(e),currentPage:F(e),isFetching:I(e),toggleFollowingInProgress:R(e)}}),{follow:s.b,unfollow:s.d,getUsers:s.c}))(E)}}]);
//# sourceMappingURL=4.6a15947f.chunk.js.map