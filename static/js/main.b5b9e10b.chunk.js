(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[0],{103:function(e,t,n){e.exports={error:"FormsControls_error__M8dca",title__error:"FormsControls_title__error__ptIoh",field:"FormsControls_field__8cceV"}},105:function(e,t,n){e.exports={paginator:"Paginator_paginator__3-u0z",pageNumber:"Paginator_pageNumber__1b4Wd",selectedPage:"Paginator_selectedPage__33A6a"}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(177),o=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"81e49f2c-a53d-4b1b-a0b9-7e0b6683c2d2"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},124:function(e,t,n){e.exports={headerMenu:"HeaderMenu_headerMenu__2E378",headerMenu__item:"HeaderMenu_headerMenu__item__35CEb"}},128:function(e,t,n){e.exports={formControl:"Login_formControl__1e2LK",btn_login:"Login_btn_login__r0kVI"}},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(4),c=n(132),a=(n(0),n(121)),o=n(103),s=n.n(o),i=n(1),u=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:a?s.a.error:"",children:c}),a&&Object(i.jsx)("span",{className:s.a.title__error,children:r})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function f(e,t,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.a,Object(r.a)({className:s.a.field,type:"text",autoComplete:"on",name:t,placeholder:e,component:c,validate:n},o)),u]})}},142:function(e,t,n){"use strict";n.r(t);n(0);var r=n(8),c=n(9),a=n(122),o=n(44),s=n(128),i=n.n(s),u=n(13),l=n(34),d=n(16),f=n(1),j=Object(a.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(f.jsx)("form",{className:i.a.formControl,onSubmit:t,children:Object(f.jsxs)("div",{children:[Object(u.c)("Email","email",[l.b],u.a),Object(u.c)("Password","password",[l.b],u.a,{type:"password"}),r&&Object(u.c)("Enter symbols from image","captcha",[l.b],u.a),r&&Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsx)("img",{src:r,alt:"captcha"})}),n&&Object(f.jsx)("div",{style:{color:"red"},children:n}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"flexStart",alignItems:"center"},children:Object(u.c)(void 0,"rememberMe",[],u.a,{type:"checkbox"},"remember me")}),Object(f.jsx)("button",{className:i.a.btn_login,children:"Login"})]})})}));t.default=function(){var e=Object(r.c)(),t=Object(r.d)((function(e){return e.auth})),n=t.isAuth,a=t.captchaUrl;return n?Object(f.jsx)(c.a,{to:d.c}):Object(f.jsx)(j,{onSubmit:function(t){e(Object(o.c)(t.email,t.password,t.rememberMe,t.captcha))},captchaUrl:a})}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o}));var r="/profile",c="/dialogs",a="/users",o="/login"},163:function(e,t,n){"use strict";n.r(t);var r=n(182),c=n(183),a=n(192),o=n(191),s=n(0),i=n.n(s),u=n(8),l=n(15),d=n(9),f=n(35),j=n(55),b=n(368),h=n(38),p=n.n(h),O=n(4),m=n(121),g=n(122),x=n(184),_=n.n(x),v=n(185),S=n.n(v),P=n(1),I=function(e){var t=e.message,n=e.likeCount;return Object(P.jsxs)("div",{className:S.a.post,children:[t,Object(P.jsx)("span",{children:n})]})},w=n(13),E=n(34),C=i.a.memo((function(e){var t=e.posts,n=e.addPost;return Object(P.jsxs)("div",{children:[Object(P.jsx)(F,{onSubmit:function(e){return n(e.newPostText)}}),t.map((function(e){return Object(P.jsx)(I,Object(O.a)({},e),e.id)}))]})})),y=Object(E.a)(10),F=function(e){var t=e.handleSubmit;return Object(P.jsxs)("form",{className:_.a.myPosts,onSubmit:t,children:[Object(P.jsx)(m.a,{component:w.b,placeholder:"write message",validate:[E.b,y],name:"newPostText"}),Object(P.jsx)("button",{children:"Add post"})]})};F=Object(g.a)({form:"AddNewPostForm"})(F);var A=C,U=Object(u.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(f.a.addPost(t))}}}))(A),T=function(e){var t=e.userStatus,n=e.updateUserStatus,r=i.a.useState(!1),c=Object(j.a)(r,2),a=c[0],o=c[1],s=i.a.useState(t),u=Object(j.a)(s,2),l=u[0],d=u[1];i.a.useEffect((function(){d(t)}),[t]);return Object(P.jsx)("div",{children:a?Object(P.jsx)("div",{children:Object(P.jsx)("input",{style:{backgroundColor:"inherit",color:"white",fontSize:"24px",outline:0,border:"none",fontWeight:"bold"},onChange:function(e){return d(e.currentTarget.value)},onBlur:function(){o(!1),n(l)},autoFocus:!0,value:l})}):Object(P.jsx)("div",{children:Object(P.jsx)("span",{onDoubleClick:function(){o(!0)},children:t||"---------"})})})},N=n(64),M=n(97),R=n.n(M),L=n(39),D=n.n(L),k=function(e){var t=e.profile,n=t.fullName,r=t.aboutMe,c=t.lookingForAJob,a=t.lookingForAJobDescription,o=t.contacts,s=e.isOwner,i=e.goToEditMode;return Object(P.jsxs)("div",{className:D.a.profileInfo,children:[Object(P.jsxs)("div",{className:D.a.profileInfo__title,children:[Object(P.jsx)(R.a,{className:D.a.profileInfo__icon}),Object(P.jsx)("p",{className:D.a.profileInfo__text,children:"Profile info"}),s&&Object(P.jsx)("button",{onClick:i,children:"edit"})]}),Object(P.jsxs)("div",{className:D.a.profileInfo__fullName,children:[Object(P.jsx)("b",{children:"Full name: "}),n]}),Object(P.jsxs)("div",{className:D.a.profileInfo__aboutMe,children:[Object(P.jsx)("b",{children:"About me:"})," ",r||Object(P.jsx)("em",{children:"nothing"})]}),Object(P.jsxs)("div",{className:D.a.profileInfo__lookingForAJob,children:[Object(P.jsx)("b",{children:"Looking for a job:"})," ",c?"yes":"no",c&&Object(P.jsxs)("div",{children:[Object(P.jsx)("b",{children:"My skills: "})," ",a]})]}),Object(P.jsxs)("div",{className:D.a.profileInfo__contacts,children:[Object(P.jsx)("b",{children:"Contacts: "}),Object.keys(o).map((function(e){return Object(P.jsx)(G,{title:e,value:o[e]},e)}))]})]})},G=function(e){var t=e.title,n=e.value;return Object(P.jsxs)("p",{style:{marginLeft:"20px"},children:[Object(P.jsx)("b",{children:t}),": ",n||Object(P.jsx)("em",{children:"nothing"})]})},B=n(46),z=n.n(B),J=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile.contacts,r=e.error;return Object(P.jsxs)("form",{onSubmit:t,children:[Object(P.jsxs)("div",{className:z.a.profileInfo__title,children:[Object(P.jsx)(R.a,{className:z.a.profileInfo__icon}),Object(P.jsx)("p",{className:z.a.profileInfo__text,children:"Profile info"}),Object(P.jsx)("button",{children:"save"}),r&&Object(P.jsx)("div",{style:{color:"red"},children:r})]}),Object(P.jsxs)("div",{className:z.a.profileInfo__fullName,children:[Object(P.jsx)("b",{children:"Full name: "}),Object(w.c)("Full name","fullName",[],w.a)]}),Object(P.jsxs)("div",{className:z.a.profileInfo__aboutMe,children:[Object(P.jsx)("b",{children:"About me:"}),Object(w.c)("About me","aboutMe",[],w.b)]}),Object(P.jsxs)("div",{className:z.a.profileInfo__lookingForAJob,children:[Object(P.jsx)("b",{children:"Looking for a job:"}),Object(w.c)("","lookingForAJob",[],w.a,{type:"checkbox"}),Object(P.jsxs)("div",{children:[Object(P.jsx)("b",{children:"My skills: "}),Object(w.c)("My skills","lookingForAJobDescription",[],w.b)]})]}),Object(P.jsxs)("div",{className:z.a.profileInfo__contacts,children:[Object(P.jsx)("b",{children:"Contacts: "}),Object.keys(n).map((function(e){return Object(P.jsx)("div",{children:Object(P.jsxs)("b",{children:[e,": ",Object(w.c)(e,"contacts.".concat(e),[],w.a)]})},e)}))]})]})})),H=function(e){var t=e.profile,n=e.userStatus,r=e.updateUserStatus,c=e.isOwner,a=e.savePhoto,o=e.saveProfile,s=i.a.useState(!1),u=Object(j.a)(s,2),l=u[0],d=u[1];if(!t)return Object(P.jsx)(N.a,{});return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:p.a.profile,children:[Object(P.jsx)("div",{className:p.a.profile__overlay}),Object(P.jsx)("div",{className:p.a.profile__container,children:Object(P.jsxs)("div",{className:p.a.profile__about,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(b.a,{className:p.a.profile__avatar,style:{border:"3px solid white",width:"150px",height:"150px"},src:t.photos.large}),Object(P.jsx)("div",{children:c&&Object(P.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&a(e.target.files[0])}})})]}),Object(P.jsxs)("div",{className:p.a.profile__fullname,children:[Object(P.jsx)("p",{children:t.fullName}),Object(P.jsx)(T,{userStatus:n,updateUserStatus:r})]})]})})]}),Object(P.jsx)("div",{className:p.a.profileData,children:Object(P.jsxs)("div",{className:p.a.profileData__container,children:[l?Object(P.jsx)(J,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){return d(!1)}))}}):Object(P.jsx)(k,{profile:t,isOwner:c,goToEditMode:function(){return d(!0)}}),Object(P.jsx)(U,{})]})})]})},W=n(16),K=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e?Number(e)===this.props.authorizedUserId&&this.props.history.push("".concat(W.c)):(e=this.props.authorizedUserId)||this.props.history.push("".concat(W.c)),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(P.jsx)(H,{profile:this.props.profile,userStatus:this.props.userStatus,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})}}]),n}(i.a.Component);t.default=Object(l.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,userStatus:e.profilePage.userStatus,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:f.c,getUserStatus:f.d,updateUserStatus:f.g,savePhoto:f.e,saveProfile:f.f}),d.h)(K)},164:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(0),a=n.n(c),o=n(8),s=n(9),i=n(131),u=n.n(i),l=n(368),d=n(22),f=n(16),j=n.p+"static/media/user.42138946.png",b=n(36),h=function(e){return e.usersPage.users},p=function(e){return e.usersPage.totalUsersCount},O=function(e){return e.usersPage.pageSize},m=function(e){return e.usersPage.currentPage},g=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.toggleFollowingInProgress},_=function(e){return e.usersPage.filter},v=n(1),S=function(e){var t=e.id,n=e.photos,r=e.name,c=e.status,a=e.followed,s=Object(o.d)(x),i=Object(o.c)();return Object(v.jsxs)("div",{children:[Object(v.jsx)(d.b,{to:"".concat(f.c,"/").concat(t),children:Object(v.jsx)(l.a,{src:null!=n.small?n.small:j})}),Object(v.jsx)("div",{children:r}),Object(v.jsx)("div",{children:c}),a?Object(v.jsx)("button",{disabled:s.some((function(e){return e===t})),onClick:function(){i(Object(b.d)(t))},children:"Unfollow"}):Object(v.jsx)("button",{disabled:s.some((function(e){return e===t})),onClick:function(){i(Object(b.b)(t))},children:"Follow"})]})},P=n(92),I=n(55),w=n(187),E=n.n(w),C=n(105),y=n.n(C),F=function(e){for(var t=e.pageSize,n=e.currentPage,r=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Object(o.d)(p),u=Math.ceil(i/t),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/s),j=a.a.useState(1),b=Object(I.a)(j,2),h=b[0],O=b[1],m=(h-1)*s+1,g=h*s;return Object(v.jsxs)("div",{className:y.a.paginator,children:[h>1&&Object(v.jsx)("button",{onClick:function(){O(h-1)},children:"PREV"}),l.filter((function(e){return e>=m&&e<=g})).map((function(e,t){return Object(v.jsx)("span",{className:E()(Object(P.a)({},y.a.selectedPage,n===e),y.a.pageNumber),onClick:function(){return r(e)},children:"".concat(e," ")},"".concat(e,"_").concat(t))})),f>h&&Object(v.jsx)("button",{onClick:function(){O(h+1)},children:"NEXT"})]})},A=n(80),U=function(e){return{}},T=a.a.memo((function(e){var t=e.onFilterChanged,n=Object(o.d)(_);return Object(v.jsx)("div",{children:Object(v.jsx)(A.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:U,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(v.jsxs)(A.b,{children:[Object(v.jsx)(A.a,{type:"text",name:"term"}),Object(v.jsxs)(A.a,{name:"friend",as:"select",children:[Object(v.jsx)("option",{value:"null",children:"All"}),Object(v.jsx)("option",{value:"true",children:"Only followed"}),Object(v.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(v.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),N=n(64);t.default=function(){var e=Object(o.d)(h),t=Object(o.d)(O),n=Object(o.d)(m),c=Object(o.d)(_),i=Object(o.d)(g),l=Object(o.c)(),d=Object(s.g)();a.a.useEffect((function(){var e=u.a.parse(d.location.search.substring(1)),a=n,o=c;e.page&&(a=Number(e.page)),e.term&&(o=Object(r.a)(Object(r.a)({},o),{},{term:e.term})),e.friend&&(o=Object(r.a)(Object(r.a)({},o),{},{friend:"null"===e.friend?null:"true"===e.friend})),l(Object(b.c)(a,t,o))}),[]),a.a.useEffect((function(){var e={};c.term&&(e.term=c.term),null!==c.friend&&(e.friend=String(c.friend)),1!==n&&(e.page=String(n)),d.push({pathname:"/users",search:u.a.stringify(e)})}),[c,n]);return Object(v.jsx)(v.Fragment,{children:i?Object(v.jsx)(N.a,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)(T,{onFilterChanged:function(e){l(Object(b.c)(1,t,e))}}),Object(v.jsx)(F,{pageSize:t,currentPage:n,onPageChanged:function(e){l(Object(b.c)(e,t,c))}}),e.map((function(e){return Object(v.jsx)(S,Object(r.a)({},e),e.id)}))]})})}},165:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(8),a=n(186),o=n.n(a),s=(n(0),n(22)),i=n(16),u=n(1),l=function(e){var t=e.name,n=e.id,r="".concat(i.a,"/").concat(n);return Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:r,children:t})})},d=function(e){var t=e.message;return Object(u.jsx)("div",{children:t})},f=n(98),j=n(122),b=n(13),h=n(34),p=Object(h.a)(50),O=Object(j.a)({form:"dialogAddMessageForm"})((function(e){var t=e.handleSubmit;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(b.c)("Write message","newMessageText",[h.b,p],b.b,{type:"password"}),Object(u.jsx)("button",{children:"Send"})]})}));t.default=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.dialogsPage})),n=t.dialogs,a=t.messages;return Object(u.jsxs)("div",{className:o.a.dialogs,children:[Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsx)(l,Object(r.a)({},e),e.id)}))}),Object(u.jsxs)("div",{children:[a.map((function(e){return Object(u.jsx)(d,Object(r.a)({},e),e.id)})),Object(u.jsx)(O,{onSubmit:function(t){e(f.a.sendMessage(t.newMessageText))}})]})]})}},168:function(e,t,n){e.exports={preloader:"Preloader_preloader__Kjxcy"}},181:function(e,t,n){e.exports={notFound:"NotFound_notFound__3ZFK1"}},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA"}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i}));var r=n(12),c={me:function(){return r.c.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:c}).then((function(e){return e.data}))},logout:function(){return r.c.delete("auth/login").then((function(e){return e.data}))}},a={follow:function(e){return r.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getProfile:function(e){return r.c.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("images",e),r.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.c.put("/profile",e).then((function(e){return e.data}))}},s={getCaptchaUrl:function(){return r.c.get("/security/get-captcha-url").then((function(e){return e.data}))}},i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n).concat(null===c?"":"&friend=".concat(c))).then((function(e){return e.data}))}}},227:function(e,t,n){},228:function(e,t,n){},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){return t.length>e?"Max length ".concat(e," symbols"):void 0}}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return O}));var r=n(10),c=n.n(r),a=n(20),o=n(62),s=n(4),i=n(33),u=n(12),l=n(21),d={posts:[{id:0,message:"postMessage",likeCount:32},{id:1,message:"postMessage",likeCount:33},{id:2,message:"postMessage",likeCount:1},{id:3,message:"postMessage",likeCount:100}],profile:null,userStatus:"",newPostText:""},f={addPost:function(e){return{type:"PROFILE:ADD_POST",newPostText:e}},setUserStatus:function(e){return{type:"PROFILE:SET_USER_STATUS",userStatus:e}},setUserProfile:function(e){return{type:"PROFILE:SET_USER_PROFILE",profile:e}},savePhotoSuccess:function(e){return{type:"PROFILE:SAVE_PHOTO_SUCCESS",photos:e}}},j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.getProfile(e);case 2:r=t.sent,n(f.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.getStatus(e);case 2:r=t.sent,n(f.setUserStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.c.updateStatus(e);case 3:t.sent.resultCode===u.a.Success&&n(f.setUserStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.savePhoto(e);case 2:(r=t.sent).resultCode===u.a.Success&&n(f.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,l.c.saveProfile(e);case 3:if((o=t.sent).resultCode!==u.a.Success){t.next=12;break}if(null==a){t.next=9;break}n(j(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(i.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE:ADD_POST":var n={id:Date.now(),message:t.newPostText,likeCount:Math.floor(100*Math.random())};return Object(s.a)(Object(s.a)({},e),{},{posts:[n].concat(Object(o.a)(e.posts)),newPostText:""});case"PROFILE:SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"PROFILE:SET_USER_STATUS":return Object(s.a)(Object(s.a)({},e),{},{userStatus:t.userStatus});case"PROFILE:SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},355:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(57),o=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,370)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},i=(n(227),n(228),n(9)),u=n(8),l=n(64),d=n(22),f=n(65),j=n.n(f),b=n(124),h=n.n(b),p=n(1),O=function(e){var t=e.items.map((function(e,t){return Object(p.jsx)("li",{className:h.a.headerMenu__item,children:e},"".concat(e,"-").concat(t))}));return Object(p.jsx)("ul",{className:h.a.headerMenu,children:t})},m=function(){return Object(p.jsx)("div",{className:j.a.header,children:Object(p.jsxs)("div",{className:j.a.header__container,children:[Object(p.jsx)(d.b,{to:"/",style:{textDecoration:"inherit",color:"inherit"},children:Object(p.jsxs)("div",{className:j.a.header__logo,children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(p.jsxs)("div",{className:j.a.header__title,children:[Object(p.jsx)("h4",{children:"olimpus"}),Object(p.jsx)("h6",{children:"BuddyPress Social Network"})]})]})}),Object(p.jsx)("div",{className:j.a.header__menu,children:Object(p.jsx)(O,{onClick:function(e){return console.log(e)},items:["Home","Community","Pages","Blog","Events","Shop"]})})]})})},g=n(4),x=n(173),_=n.n(x),v=n(174),S=n.n(v),P=n(176),I=n.n(P),w=n(175),E=n.n(w),C=n(366),y=n(16),F=function(){var e={box:{display:"flex",justifyContent:"center",alignItems:"center",height:70,width:70},icon:{fontSize:"xx-large",color:"#3f4257"},selected:{color:"blue"},active:{color:"red"}};return Object(p.jsxs)("div",{style:{position:"fixed"},children:[Object(p.jsx)(C.a,{style:Object(g.a)(Object(g.a)({},e.box),{},{backgroundColor:"#ef5a39"}),children:Object(p.jsx)(_.a,{style:Object(g.a)(Object(g.a)({},e.icon),{},{color:"white"})})}),Object(p.jsx)(C.a,{style:e.box,children:Object(p.jsx)(d.b,{to:y.c,children:Object(p.jsx)(S.a,{style:e.icon})})}),Object(p.jsx)(d.b,{to:y.a,children:Object(p.jsx)(C.a,{style:e.box,children:Object(p.jsx)(E.a,{style:e.icon})})}),Object(p.jsx)(d.b,{to:y.d,children:Object(p.jsx)(C.a,{style:e.box,children:Object(p.jsx)(I.a,{style:e.icon})})})]})},A=n(178),U=n.n(A),T=n(179),N=n.n(T),M=n(79),R=n.n(M),L=n(44),D=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.auth})),n=t.login,r=t.isAuth;return Object(p.jsxs)("div",{className:R.a.topSearchForm,children:[Object(p.jsxs)("div",{className:R.a.topSearchForm__input,children:[Object(p.jsx)("input",{type:"text",placeholder:"Search here people or pages..."}),Object(p.jsx)(U.a,{style:{fontSize:"xx-large",color:"#888da8"}})]}),r?Object(p.jsx)("div",{onClick:function(){e(Object(L.d)())},title:"logout",className:R.a.topSearchForm__login,style:{fontWeight:"bold"},children:Object(p.jsx)("div",{children:n})}):Object(p.jsx)(d.b,{to:y.b,children:Object(p.jsx)("div",{className:R.a.topSearchForm__login,children:Object(p.jsx)(N.a,{style:{fontSize:"xx-large"}})})})]})},k=(n(142),n(181)),G=n.n(k),B=function(){return Object(p.jsxs)("div",{className:G.a.notFound,children:[Object(p.jsx)("h1",{children:"PAGE NOT FOUND 404"}),Object(p.jsx)("p",{children:"What are you looking for..."}),Object(p.jsx)(d.b,{to:"/",children:Object(p.jsx)("p",{style:{marginTop:20},children:"Go to main page"})})]})},z=(n(163),n(165),n(164),n(10)),J=n.n(z),H=n(20),W={initialized:!1},K=function(){return{type:"APP:INITIALIZED_SUCCESS"}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP:INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},X=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,163))})),Y=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,165))})),V=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,164))})),Z=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,142))})),q=[{path:"".concat(y.c,"/:userId?"),Component:X},{path:y.a,Component:Y}],$=[{path:y.d,Component:V},{path:y.b,Component:Z}],ee=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.app})).initialized,n=Object(u.d)((function(e){return e.auth})).isAuth;return c.a.useEffect((function(){e(function(){var e=Object(H.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(L.b)()).then((function(){t(K())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(p.jsxs)("div",{children:[Object(p.jsx)(F,{}),Object(p.jsxs)("div",{className:"app__main",children:[Object(p.jsx)(D,{}),Object(p.jsx)(m,{}),Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.a,{exact:!0,from:"/",to:y.c}),n&&q.map((function(e){var t=e.path,n=e.Component;return Object(p.jsx)(i.b,{path:t,component:n,exact:!0},t)})),$.map((function(e){var t=e.path,n=e.Component;return Object(p.jsx)(i.b,{path:t,component:n,exact:!0},t)})),Object(p.jsx)(i.a,{to:y.b}),Object(p.jsx)(i.b,{path:"*",component:B})]})})]})]}):Object(p.jsx)(l.a,{})},te=n(15),ne=n(190),re=n(166),ce=n(98),ae=n(35),oe=n(36),se=Object(te.c)({profilePage:ae.b,dialogsPage:ce.b,usersPage:oe.a,auth:L.a,app:Q,form:re.a}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,ue=Object(te.e)(se,ie(Object(te.a)(ne.a)));window.store=ue;var le=ue;o.a.render(Object(p.jsx)(d.a,{children:Object(p.jsx)(u.a,{store:le,children:Object(p.jsx)(ee,{})})}),document.getElementById("root")),s()},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return _}));var r=n(10),c=n.n(r),a=n(20),o=n(62),s=n(4),i=n(12),u=n(21),l={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,toggleFollowingInProgress:[],filter:{term:"",friend:null}},d=function(e){return{type:"USERS:TOGGLE_FOLLOWING",userId:e}},f=function(e){return{type:"USERS:SET_USERS",users:e}},j=function(e){return{type:"USERS:SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"USERS:SET_FILTER",payload:e}},h=function(e){return{type:"USERS:SET_USERS_COUNT",totalCount:e}},p=function(e){return{type:"USERS:TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"USERS:TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},m=function(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function r(a){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(p(!0)),a(j(e)),a(b(n)),r.next=5,u.e.getUsers(e,t,n.term,n.friend);case 5:o=r.sent,a(p(!1)),a(f(o.items)),a(h(o.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===i.a.Success&&t(d(n)),t(O(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,u.b.follow.bind(u.b));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,u.b.unfollow.bind(u.b));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS:SET_USERS":return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case"USERS:TOGGLE_FOLLOWING":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){if(e.id===t.userId){if(!1===e.followed)return Object(s.a)(Object(s.a)({},e),{},{followed:!0});if(!0===e.followed)return Object(s.a)(Object(s.a)({},e),{},{followed:!1})}return e}))});case"USERS:SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"USERS:SET_USERS_COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalCount});case"USERS:TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"USERS:TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)(Object(s.a)({},e),{},{toggleFollowingInProgress:t.isFetching?[].concat(Object(o.a)(e.toggleFollowingInProgress),[t.userId]):e.toggleFollowingInProgress.filter((function(e){return e!==t.userId}))});case"USERS:SET_FILTER":return Object(s.a)(Object(s.a)({},e),{},{filter:t.payload});default:return e}}},38:function(e,t,n){e.exports={profile:"Profile_profile__3dzvr",profile__overlay:"Profile_profile__overlay__134mt",profile__container:"Profile_profile__container__1aC9S",profile__about:"Profile_profile__about__22ERX",profile__avatar:"Profile_profile__avatar__36dOz",profile__fullname:"Profile_profile__fullname__2Yk6n",profileData:"Profile_profileData__2iLhO",profileData__container:"Profile_profileData__container__3r5z1"}},39:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",profileInfo__title:"ProfileInfo_profileInfo__title__1G6S8",profileInfo__text:"ProfileInfo_profileInfo__text__3lCIf"}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p}));var r=n(10),c=n.n(r),a=n(20),o=n(4),s=n(33),i=n(21),u=n(12),l={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){return{type:"AUTH:SET_AUTH_USER_DATA",payload:{userId:e,login:t,email:n,isAuth:r}}},f=function(e){return{type:"AUTH:SET_CAPTCHA_URL",payload:{captchaUrl:e}}},j=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:(n=e.sent).resultCode===u.a.Success&&(r=n.data,a=r.id,o=r.login,s=r.email,t(d(a,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var o=Object(a.a)(c.a.mark((function a(o){var l,d;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,i.a.login(e,t,n,r);case 2:(l=c.sent).resultCode===u.a.Success?o(j()):(l.resultCode===u.b.CaptchaIsRequired&&o(h()),d=0!==l.messages.length?l.messages[0]:"Some error",o(Object(s.a)("login",{_error:d})));case 4:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}()},h=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(f(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:e.sent.resultCode===u.a.Success&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH:SET_AUTH_USER_DATA":case"AUTH:SET_CAPTCHA_URL":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},46:function(e,t,n){},64:function(e,t,n){"use strict";n(0);var r=n(168),c=n.n(r),a=n.p+"static/media/preloader.a1a99674.gif",o=n(1);t.a=function(){return Object(o.jsx)("div",{className:c.a.preloader,children:Object(o.jsx)("img",{src:a,alt:"loading"})})}},65:function(e,t,n){e.exports={header:"Header_header__1VCKf",header__container:"Header_header__container__1LBSf",header__title:"Header_header__title__3Zjy_",header__logo:"Header_header__logo__1ETZb"}},79:function(e,t,n){e.exports={topSearchForm:"TopSearchForm_topSearchForm__lH53q",topSearchForm__input:"TopSearchForm_topSearchForm__input__3UH_0",topSearchForm__login:"TopSearchForm_topSearchForm__login__Pzc_j"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(62),c=n(4),a={dialogs:[{id:0,name:"max"},{id:1,name:"tom"},{id:2,name:"eeee"},{id:3,name:"yyyy"}],messages:[{id:0,message:"message"},{id:1,message:"message"},{id:2,message:"message"},{id:3,message:"message"}]},o={sendMessage:function(e){return{type:"DIALOGS:SEND_MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS:SEND_MESSAGE":return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.newMessageText}])});default:return e}}}},[[355,1,2]]]);
//# sourceMappingURL=main.b5b9e10b.chunk.js.map