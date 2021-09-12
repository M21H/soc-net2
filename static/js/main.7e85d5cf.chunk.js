(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[1],{107:function(e,t,n){e.exports={preloader:"Preloader_preloader__Kjxcy"}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r,c=n(0),a=n.n(c),o=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,271))})),u=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,274))})),s=a.a.lazy((function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,272))})),i=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,270))})),l=a.a.lazy((function(){return n.e(8).then(n.bind(null,273))}));!function(e){e.MAIN_ROUTE="/",e.PROFILE_ROUTE="/profile",e.DIALOGS_ROUTE="/dialogs",e.USERS_ROUTE="/users",e.LOGIN_ROUTE="/login",e.CHAT_ROUTE="/chat"}(r||(r={}));var d=[{path:"".concat(r.PROFILE_ROUTE,"/:userId?"),component:o,exact:!0},{path:r.DIALOGS_ROUTE,component:u,exact:!0},{path:r.USERS_ROUTE,component:s,exact:!1},{path:r.CHAT_ROUTE,component:l,exact:!0}],f=[{path:r.USERS_ROUTE,component:s,exact:!1},{path:r.LOGIN_ROUTE,component:i,exact:!0}]},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s}));var r=n(9),c={me:function(){return r.c.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:c}).then((function(e){return e.data}))},logout:function(){return r.c.delete("auth/login").then((function(e){return e.data}))}},a={follow:function(e){return r.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getProfile:function(e){return r.c.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("images",e),r.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.c.put("/profile",e).then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return r.c.get("/security/get-captcha-url").then((function(e){return e.data}))}},s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n).concat(null===c?"":"&friend=".concat(c))).then((function(e){return e.data}))}}},265:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var r=n(31),c=n.n(r),a=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,376)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},o=n(0),u=n.n(o),s=n(23),i=n(90),l=n(22),d=n(46),f=n.n(d),h=n(74),p=n.n(h),j=n(2),O=function(e){var t=e.items.map((function(e,t){return Object(j.jsx)("li",{className:p.a.headerMenu__item,children:e},"".concat(e,"-").concat(t))}));return Object(j.jsx)("ul",{className:p.a.headerMenu,children:t})},b=n(11),g=function(){return Object(j.jsx)("div",{className:f.a.header,children:Object(j.jsxs)("div",{className:f.a.header__container,children:[Object(j.jsx)(l.b,{to:b.a.PROFILE_ROUTE,style:{textDecoration:"inherit",color:"inherit"},children:Object(j.jsxs)("div",{className:f.a.header__logo,children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(j.jsxs)("div",{className:f.a.header__title,children:[Object(j.jsx)("h4",{children:"olimpus"}),Object(j.jsx)("h6",{children:"BuddyPress Social Network"})]})]})}),Object(j.jsx)("div",{className:f.a.header__menu,children:Object(j.jsx)(O,{onClick:function(e){return console.log(e)},items:["Home","Community","Pages","Blog","Events","Shop"]})})]})})},S=n(4),E=n(112),m=n.n(E),x=n(113),v=n.n(x),w=n(115),T=n.n(w),_=n(114),I=n.n(_),R=n(116),U=n.n(R),C=n(285),y=n(286),A=function(){var e={box:{display:"flex",justifyContent:"center",alignItems:"center",height:70,width:70},icon:{fontSize:"xx-large",color:"#3f4257"},selected:{color:"blue"},active:{color:"red"}};return Object(j.jsxs)("div",{style:{position:"fixed"},children:[Object(j.jsx)(C.a,{style:Object(S.a)(Object(S.a)({},e.box),{},{backgroundColor:"#ef5a39"}),children:Object(j.jsx)(m.a,{style:Object(S.a)(Object(S.a)({},e.icon),{},{color:"white"})})}),Object(j.jsx)(l.b,{to:b.a.PROFILE_ROUTE,children:Object(j.jsx)(C.a,{style:e.box,children:Object(j.jsx)(y.a,{children:Object(j.jsx)(v.a,{style:e.icon})})})}),Object(j.jsx)(l.b,{to:b.a.DIALOGS_ROUTE,children:Object(j.jsx)(C.a,{style:e.box,children:Object(j.jsx)(y.a,{children:Object(j.jsx)(I.a,{style:e.icon})})})}),Object(j.jsx)(l.b,{to:b.a.USERS_ROUTE,children:Object(j.jsx)(C.a,{style:e.box,children:Object(j.jsx)(y.a,{children:Object(j.jsx)(T.a,{style:e.icon})})})}),Object(j.jsx)(l.b,{to:b.a.CHAT_ROUTE,children:Object(j.jsx)(C.a,{style:e.box,children:Object(j.jsx)(y.a,{children:Object(j.jsx)(U.a,{style:e.icon})})})})]})},P=n(118),L=n.n(P),F=n(119),G=n.n(F),D=n(55),M=n.n(D),k=n(44),N=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.auth})),n=t.login,r=t.isAuth;return Object(j.jsxs)("div",{className:M.a.topSearchForm,children:[Object(j.jsxs)("div",{className:M.a.topSearchForm__input,children:[Object(j.jsx)("input",{type:"text",placeholder:"Search here people or pages..."}),Object(j.jsx)(L.a,{style:{fontSize:"xx-large",color:"#888da8"}})]}),r?Object(j.jsx)("div",{onClick:function(){e(Object(k.d)())},title:"logout",className:M.a.topSearchForm__login,style:{fontWeight:"bold"},children:Object(j.jsx)("div",{children:n})}):Object(j.jsx)(l.b,{to:b.a.LOGIN_ROUTE,children:Object(j.jsx)("div",{className:M.a.topSearchForm__login,children:Object(j.jsx)(G.a,{style:{fontSize:"xx-large"}})})})]})},B=n(5),H=n.n(B),J=n(10),z={initialized:!1},W=function(){return{type:"APP:INITIALIZED_SUCCESS"}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP:INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Q=n(7),Y=u.a.lazy((function(){return n.e(10).then(n.bind(null,377))})),X=function(){var e=Object(s.d)((function(e){return e.auth})).isAuth;return Object(j.jsx)(u.a.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)(j.Fragment,{children:e?Object(j.jsxs)(Q.d,{children:[Object(j.jsx)(Q.a,{from:b.a.LOGIN_ROUTE&&b.a.LOGIN_ROUTE,to:b.a.PROFILE_ROUTE}),b.b.map((function(e){return Object(j.jsx)(Q.b,Object(S.a)({},e),e.path)})),Object(j.jsx)(Q.b,{path:"*",component:Y})]}):Object(j.jsxs)(Q.d,{children:[Object(j.jsx)(Q.a,{from:b.a.MAIN_ROUTE,to:b.a.PROFILE_ROUTE,exact:!0}),b.c.map((function(e){return Object(j.jsx)(Q.b,Object(S.a)({},e),e.path)})),Object(j.jsx)(Q.a,{to:b.a.LOGIN_ROUTE})]})})})},Z=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.app})).initialized;return u.a.useEffect((function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(k.b)()).then((function(){t(W())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{}),Object(j.jsxs)("div",{style:{marginLeft:70},children:[Object(j.jsx)(N,{}),Object(j.jsx)(g,{}),Object(j.jsx)(X,{})]})]}):Object(j.jsx)(i.a,{})},V=n(41),q=n(120),$=n(105),ee=n(84),te=n(85),ne=n(79),re=n(83),ce=Object(V.c)({profilePage:ne.b,dialogsPage:te.b,usersPage:re.a,auth:k.a,app:K,form:$.a,chat:ee.a}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,oe=Object(V.e)(ce,ae(Object(V.a)(q.a)));window.store=oe;n(265);c.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(s.a,{store:oe,children:Object(j.jsx)(Z,{})})}),document.getElementById("root")),a()},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return O}));var r=n(5),c=n.n(r),a=n(10),o=n(4),u=n(47),s=n(14),i=n(9),l={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){return{type:"AUTH:SET_AUTH_USER_DATA",payload:{userId:e,login:t,email:n,isAuth:r}}},f=function(e){return{type:"AUTH:SET_CAPTCHA_URL",payload:{captchaUrl:e}}},h=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:(n=e.sent).resultCode===i.a.Success&&(r=n.data,a=r.id,o=r.login,u=r.email,t(d(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var o=Object(a.a)(c.a.mark((function a(o){var l,d;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.a.login(e,t,n,r);case 2:(l=c.sent).resultCode===i.a.Success?o(h()):(l.resultCode===i.b.CaptchaIsRequired&&o(j()),d=0!==l.messages.length?l.messages[0]:"Some error",o(Object(u.a)("login",{_error:d})));case 4:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}()},j=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(f(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:e.sent.resultCode===i.a.Success&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH:SET_AUTH_USER_DATA":case"AUTH:SET_CAPTCHA_URL":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},46:function(e,t,n){e.exports={header:"Header_header__1VCKf",header__container:"Header_header__container__1LBSf",header__title:"Header_header__title__3Zjy_",header__logo:"Header_header__logo__1ETZb"}},55:function(e,t,n){e.exports={topSearchForm:"TopSearchForm_topSearchForm__lH53q",topSearchForm__input:"TopSearchForm_topSearchForm__input__3UH_0",topSearchForm__login:"TopSearchForm_topSearchForm__login__Pzc_j"}},74:function(e,t,n){e.exports={headerMenu:"HeaderMenu_headerMenu__2E378",headerMenu__item:"HeaderMenu_headerMenu__item__35CEb"}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return b}));var r=n(5),c=n.n(r),a=n(10),o=n(28),u=n(4),s=n(47),i=n(9),l=n(14),d={posts:[{id:0,message:"postMessage",likeCount:32},{id:1,message:"postMessage",likeCount:33},{id:2,message:"postMessage",likeCount:1},{id:3,message:"postMessage",likeCount:100}],profile:null,userStatus:"",newPostText:""},f={addPost:function(e){return{type:"PROFILE:ADD_POST",newPostText:e}},setUserStatus:function(e){return{type:"PROFILE:SET_USER_STATUS",userStatus:e}},setUserProfile:function(e){return{type:"PROFILE:SET_USER_PROFILE",profile:e}},savePhotoSuccess:function(e){return{type:"PROFILE:SAVE_PHOTO_SUCCESS",photos:e}}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.getProfile(e);case 2:r=t.sent,n(f.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.getStatus(e);case 2:r=t.sent,n(f.setUserStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.c.updateStatus(e);case 3:t.sent.resultCode===i.a.Success&&n(f.setUserStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.savePhoto(e);case 2:(r=t.sent).resultCode===i.a.Success&&n(f.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,l.c.saveProfile(e);case 3:if((o=t.sent).resultCode!==i.a.Success){t.next=12;break}if(null==a){t.next=9;break}n(h(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(s.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE:ADD_POST":var n={id:Date.now(),message:t.newPostText,likeCount:Math.floor(100*Math.random())};return Object(u.a)(Object(u.a)({},e),{},{posts:[n].concat(Object(o.a)(e.posts)),newPostText:""});case"PROFILE:SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"PROFILE:SET_USER_STATUS":return Object(u.a)(Object(u.a)({},e),{},{userStatus:t.userStatus});case"PROFILE:SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},83:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return m}));var r=n(5),c=n.n(r),a=n(10),o=n(28),u=n(4),s=n(9),i=n(14),l={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,toggleFollowingInProgress:[],filter:{term:"",friend:null}},d=function(e){return{type:"USERS:TOGGLE_FOLLOWING",userId:e}},f=function(e){return{type:"USERS:SET_USERS",users:e}},h=function(e){return{type:"USERS:SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"USERS:SET_FILTER",payload:e}},j=function(e){return{type:"USERS:SET_USERS_COUNT",totalCount:e}},O=function(e){return{type:"USERS:TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"USERS:TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function r(a){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(O(!0)),a(h(e)),a(p(n)),r.next=5,i.e.getUsers(e,t,n.term,n.friend);case 5:o=r.sent,a(O(!1)),a(f(o.items)),a(j(o.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},S=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===s.a.Success&&t(d(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(n,e,i.b.follow.bind(i.b));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(n,e,i.b.unfollow.bind(i.b));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS:SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"USERS:TOGGLE_FOLLOWING":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId&&(e.followed=!e.followed),e}))});case"USERS:SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"USERS:SET_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalCount});case"USERS:TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"USERS:TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{toggleFollowingInProgress:t.isFetching?[].concat(Object(o.a)(e.toggleFollowingInProgress),[t.userId]):e.toggleFollowingInProgress.filter((function(e){return e!==t.userId}))});case"USERS:SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}}},84:function(e,t,n){"use strict";n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return w}));var r=n(5),c=n.n(r),a=n(10),o=n(28),u=n(4),s=[],i=null,l=function(){console.log("CLOSE WS"),setTimeout(f,3e3)},d=function(e){var t=JSON.parse(e.data);s.forEach((function(e){return e(t)}))},f=function(){var e,t,n,r;null===(e=i)||void 0===e||e.removeEventListener("close",l),null===(t=i)||void 0===t||t.close(),null===(n=i=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"))||void 0===n||n.addEventListener("close",l),null===(r=i)||void 0===r||r.addEventListener("message",d)},h=function(){f()},p=function(){var e,t,n;s=[],null===(e=i)||void 0===e||e.removeEventListener("close",l),null===(t=i)||void 0===t||t.removeEventListener("message",d),null===(n=i)||void 0===n||n.close()},j=function(e){return s.push(e),function(){s=s.filter((function(t){return t!==e}))}},O=function(e){s=s.filter((function(t){return t!==e}))},b=function(e){var t;null===(t=i)||void 0===t||t.send(e)},g={messages:[]},S=function(e){return{type:"CHAT:SET_MESSAGES",payload:e}},E=null,m=function(e){if(null===E)return E=function(t){e(S(t))}},x=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),j(m(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(m(t)),p();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT:SET_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),Object(o.a)(t.payload))});default:return e}}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(28),c=n(4),a={dialogs:[{id:0,name:"max"},{id:1,name:"tom"},{id:2,name:"eeee"},{id:3,name:"yyyy"}],messages:[{id:0,message:"message"},{id:1,message:"message"},{id:2,message:"message"},{id:3,message:"message"}]},o={sendMessage:function(e){return{type:"DIALOGS:SEND_MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS:SEND_MESSAGE":return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.newMessageText}])});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(117),o=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"81e49f2c-a53d-4b1b-a0b9-7e0b6683c2d2"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},90:function(e,t,n){"use strict";n(0);var r=n(107),c=n.n(r),a=n.p+"static/media/preloader.a1a99674.gif",o=n(2);t.a=function(){return Object(o.jsx)("div",{className:c.a.preloader,children:Object(o.jsx)("img",{src:a,alt:"loading"})})}}},[[266,2,3]]]);
//# sourceMappingURL=main.7e85d5cf.chunk.js.map