(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[3],{341:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(112);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},342:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},343:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},344:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=n(e);if(t){var c=n(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return i(this,r)}}r.d(t,"a",(function(){return c}))},345:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},346:function(e,t,r){"use strict";var n=r(42),o=r(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),c=(0,n(r(44)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=c},347:function(e,t,r){e.exports={profile:"Profile_profile__3dzvr",profile__overlay:"Profile_profile__overlay__134mt",profile__container:"Profile_profile__container__1aC9S",profile__about:"Profile_profile__about__22ERX",profile__avatar:"Profile_profile__avatar__36dOz",profile__fullname:"Profile_profile__fullname__2Yk6n",profileData:"Profile_profileData__2iLhO",profileData__container:"Profile_profileData__container__3r5z1"}},348:function(e,t,r){},349:function(e,t,r){},350:function(e,t,r){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",profileInfo__title:"ProfileInfo_profileInfo__title__1G6S8",profileInfo__text:"ProfileInfo_profileInfo__text__3lCIf"}},351:function(e,t,r){},355:function(e,t,r){"use strict";var n=r(1),o=r(12),i=r(0),c=(r(4),r(56)),a=r(114),s=r(111),l=Object(s.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=i.forwardRef((function(e,t){var r=e.alt,a=e.children,s=e.classes,u=e.className,f=e.component,b=void 0===f?"div":f,p=e.imgProps,d=e.sizes,j=e.src,h=e.srcSet,m=e.variant,O=void 0===m?"circle":m,_=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,x=function(e){var t=e.src,r=e.srcSet,n=i.useState(!1),o=n[0],c=n[1];return i.useEffect((function(){if(t||r){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,r]),o}({src:j,srcSet:h}),y=j||h,g=y&&"error"!==x;return v=g?i.createElement("img",Object(n.a)({alt:r,src:j,srcSet:h,sizes:d,className:s.img},p)):null!=a?a:y&&r?r[0]:i.createElement(l,{className:s.fallback}),i.createElement(b,Object(n.a)({className:Object(c.a)(s.root,s.system,s[O],u,!g&&s.colorDefault),ref:t},_),v)}));t.a=Object(a.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},357:function(e,t,r){"use strict";r.r(t);var n=r(342),o=r(343),i=r(345),c=r(344),a=r(0),s=r.n(a),l=r(341),u=r(347),f=r.n(u),b=r(19),p=r(113),d=r(5),j=r(101),h=r(102),m=r(348),O=r.n(m),_=r(349),v=r.n(_),x=r(2),y=function(e){var t=e.message,r=e.likeCount;return Object(x.jsxs)("div",{className:v.a.post,children:[t,Object(x.jsx)("span",{children:r})]})},g=r(31),P=r(77),S=s.a.memo((function(e){var t=e.posts,r=e.addPost;return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{onSubmit:function(e){return r(e.newPostText)}}),t.map((function(e){return Object(x.jsx)(y,Object(d.a)({},e),e.id)}))]})})),I=Object(P.a)(10),N=function(e){var t=e.handleSubmit;return Object(x.jsxs)("form",{className:O.a.myPosts,onSubmit:t,children:[Object(x.jsx)(j.a,{component:g.b,placeholder:"write message",validate:[P.b,I],name:"newPostText"}),Object(x.jsx)("button",{children:"Add post"})]})};N=Object(h.a)({form:"AddNewPostForm"})(N);var k=S,w=Object(b.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(p.a.addPost(t))}}}))(k),A=function(e){var t=e.userStatus,r=e.updateUserStatus,n=s.a.useState(!1),o=Object(l.a)(n,2),i=o[0],c=o[1],a=s.a.useState(t),u=Object(l.a)(a,2),f=u[0],b=u[1];s.a.useEffect((function(){b(t)}),[t]);return Object(x.jsx)("div",{children:i?Object(x.jsx)("div",{children:Object(x.jsx)("input",{style:{backgroundColor:"inherit",color:"white",fontSize:"24px",outline:0,border:"none",fontWeight:"bold"},onChange:function(e){return b(e.currentTarget.value)},onBlur:function(){c(!1),r(f)},autoFocus:!0,value:f})}):Object(x.jsx)("div",{children:Object(x.jsx)("span",{onDoubleClick:function(){c(!0)},children:t||"---------"})})})},z=r(355),C=r(115),D=r(350),F=r.n(D),E=r(346),M=r.n(E),R=function(e){var t=e.profile,r=t.fullName,n=t.aboutMe,o=t.lookingForAJob,i=t.lookingForAJobDescription,c=t.contacts,a=e.isOwner,s=e.goToEditMode;return Object(x.jsxs)("div",{className:F.a.profileInfo,children:[Object(x.jsxs)("div",{className:F.a.profileInfo__title,children:[Object(x.jsx)(M.a,{className:F.a.profileInfo__icon}),Object(x.jsx)("p",{className:F.a.profileInfo__text,children:"Profile info"}),a&&Object(x.jsx)("button",{onClick:s,children:"edit"})]}),Object(x.jsxs)("div",{className:F.a.profileInfo__fullName,children:[Object(x.jsx)("b",{children:"Full name: "}),r]}),Object(x.jsxs)("div",{className:F.a.profileInfo__aboutMe,children:[Object(x.jsx)("b",{children:"About me:"})," ",n||Object(x.jsx)("em",{children:"nothing"})]}),Object(x.jsxs)("div",{className:F.a.profileInfo__lookingForAJob,children:[Object(x.jsx)("b",{children:"Looking for a job:"})," ",o?"yes":"no",o&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My skills: "})," ",i]})]}),Object(x.jsxs)("div",{className:F.a.profileInfo__contacts,children:[Object(x.jsx)("b",{children:"Contacts: "}),Object.keys(c).map((function(e){return Object(x.jsx)(U,{title:e,value:c[e]},e)}))]})]})},U=function(e){var t=e.title,r=e.value;return Object(x.jsxs)("p",{style:{marginLeft:"20px"},children:[Object(x.jsx)("b",{children:t}),": ",r||Object(x.jsx)("em",{children:"nothing"})]})},T=r(351),J=r.n(T),L=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,r=e.profile.contacts,n=e.error;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{className:J.a.profileInfo__title,children:[Object(x.jsx)(M.a,{className:J.a.profileInfo__icon}),Object(x.jsx)("p",{className:J.a.profileInfo__text,children:"Profile info"}),Object(x.jsx)("button",{children:"save"}),n&&Object(x.jsx)("div",{style:{color:"red"},children:n})]}),Object(x.jsxs)("div",{className:J.a.profileInfo__fullName,children:[Object(x.jsx)("b",{children:"Full name: "}),Object(g.c)("Full name","fullName",[],g.a)]}),Object(x.jsxs)("div",{className:J.a.profileInfo__aboutMe,children:[Object(x.jsx)("b",{children:"About me:"}),Object(g.c)("About me","aboutMe",[],g.b)]}),Object(x.jsxs)("div",{className:J.a.profileInfo__lookingForAJob,children:[Object(x.jsx)("b",{children:"Looking for a job:"}),Object(g.c)("","lookingForAJob",[],g.a,{type:"checkbox"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My skills: "}),Object(g.c)("My skills","lookingForAJobDescription",[],g.b)]})]}),Object(x.jsxs)("div",{className:J.a.profileInfo__contacts,children:[Object(x.jsx)("b",{children:"Contacts: "}),Object.keys(r).map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("b",{children:[e,": ",Object(g.c)(e,"contacts."+e,[],g.a)]})},e)}))]})]})})),V=function(e){var t=e.profile,r=e.userStatus,n=e.updateUserStatus,o=e.isOwner,i=e.savePhoto,c=e.saveProfile,a=s.a.useState(!1),u=Object(l.a)(a,2),b=u[0],p=u[1];if(!t)return Object(x.jsx)(C.a,{});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:f.a.profile,children:[Object(x.jsx)("div",{className:f.a.profile__overlay}),Object(x.jsx)("div",{className:f.a.profile__container,children:Object(x.jsxs)("div",{className:f.a.profile__about,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(z.a,{className:f.a.profile__avatar,src:t.photos.large}),Object(x.jsx)("div",{children:o&&Object(x.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})})]}),Object(x.jsxs)("div",{className:f.a.profile__fullname,children:[Object(x.jsx)("p",{children:t.fullName}),Object(x.jsx)(A,{userStatus:r,updateUserStatus:n})]})]})})]}),Object(x.jsx)("div",{className:f.a.profileData,children:Object(x.jsxs)("div",{className:f.a.profileData__container,children:[b?Object(x.jsx)(L,{initialValues:t,profile:t,onSubmit:function(e){c(e).then((function(){return p(!1)}))}}):Object(x.jsx)(R,{profile:t,isOwner:o,goToEditMode:function(){return p(!0)}}),Object(x.jsx)(w,{})]})})]})},q=r(13),B=r(9),G=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(x.jsx)(V,{profile:this.props.profile,userStatus:this.props.userStatus,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})}}]),r}(s.a.Component);t.default=Object(q.d)(Object(b.b)((function(e){return{profile:e.profilePage.profile,userStatus:e.profilePage.userStatus,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:p.c,getUserStatus:p.d,updateUserStatus:p.g,savePhoto:p.e,saveProfile:p.f}),B.g)(G)}}]);
//# sourceMappingURL=3.012f87b0.chunk.js.map