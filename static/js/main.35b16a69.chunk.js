(this.webpackJsonpdfluid=this.webpackJsonpdfluid||[]).push([[0],{15:function(e,t,a){e.exports={big_title:"Snap_big_title__3UbS5"}},16:function(e,t,a){e.exports={Section_1:"Section1_Section_1__FEFF-"}},22:function(e,t,a){},23:function(e,t,a){},3:function(e,t,a){e.exports={Section_2:"Section2_Section_2__2ZOTV",backImg:"Section2_backImg__2c3nK",backImg_box:"Section2_backImg_box__ddFIy",backImg_title:"Section2_backImg_title__NqMQG",backImg_desc:"Section2_backImg_desc__1inMy",backImg_line:"Section2_backImg_line__48B8D",backImg_descBottom:"Section2_backImg_descBottom__kIp_q"}},43:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a.n(c),n=a(14),s=a.n(n),o=(a(22),a(23),a(15)),r=a.n(o),l=a(0),d=function(){return Object(l.jsxs)("div",{className:r.a.big_title,children:["Snap photos and share like ",Object(l.jsx)("br",{})," never before"]})},m=a(4),u=function(e){var t=e.options,a=e.index;return Object(l.jsxs)("div",{className:a%2?"Group Group_2":"Group",children:[Object(l.jsx)("img",{src:t.url,srcSet:"".concat(t.url,"@2x.png 2x,").concat(t.url,"@3x.png 3x"),className:"profile",alt:t.title}),Object(l.jsx)("div",{className:a%2?"sm_title sm_title_2":"sm_title",children:t.title}),Object(l.jsx)("div",{className:a%2?"g_desc g_desc_2":"g_desc",children:t.detail}),Object(l.jsx)("div",{className:a%2?"Learn_more Learn_more-2":"Learn_more",children:"LEARN MORE"})]})},_=a(16),b=a.n(_),g=[{id:1,url:"img/kang1.png",title:"\uac15\ud558\ub298s",detail:"2020\ub144 \uc81c56\ud68c \ubc31\uc0c1\uc608\uc220\ub300\uc0c1 TV\ubd80\ubb38 \ub0a8\uc790 \ucd5c\uc6b0\uc218\uc5f0\uae30\uc0c1 (\ub3d9\ubc31\uaf43 \ud544 \ubb34\ub835)"},{id:2,url:"img/han.png",title:"\ud55c\ud6a8\uc8fc",detail:"2016\ub144 MBC \uc5f0\uae30\ub300\uc0c1 \ubbf8\ub2c8\uc2dc\ub9ac\uc988\ubd80\ubb38 \uc5ec\uc790 \ucd5c\uc6b0\uc218\uc5f0\uae30\uc0c1"},{id:3,url:"img/gwan.png",title:"\uad8c\uc0c1\uc6b0",detail:"2011\ub144 \uc81c6\ud68c \uc544\uc2dc\uc544\ubaa8\ub378\uc0c1\uc2dc\uc0c1\uc2dd \uc544\uc2dc\uc544\uc2a4\ud0c0\uc0c1"}],j=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){i(g.sort((function(){return Math.random()-.5})))}),[]),Object(l.jsx)("div",{className:b.a.Section_1,children:a.map((function(e,t){return Object(l.jsx)(u,{options:e,index:t},e.id)}))})},p=a(17),h=a.n(p),f=a(3),x=a.n(f),O=function(){var e=Object(c.useState)({url:"",alt:""}),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){h.a.get("https://api.unsplash.com/photos/random?client_id=".concat("RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM","&client_secret=").concat("oBOMkDmHrJicTHkT1RUBrpa4ZbL7f8MzrcOU2HTPRZ0")).then((function(e){var t,a;t=e.data.urls.full,a=e.data.alt_description,localStorage.getItem("url")?i({url:localStorage.getItem("url"),alt:localStorage.getItem("alt")}):(i({url:t,alt:a}),window.localStorage.setItem("url",JSON.stringify(t)),window.localStorage.setItem("alt",JSON.stringify(a)))})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:x.a.Section_2,children:[Object(l.jsx)("img",{src:a.url,className:x.a.backImg,alt:a.alt}),Object(l.jsxs)("div",{className:x.a.backImg_box,children:[Object(l.jsx)("div",{className:x.a.backImg_title,children:"Sed ut perspiciatis unde omnis"}),Object(l.jsx)("div",{className:x.a.backImg_desc,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."}),Object(l.jsx)("div",{className:x.a.backImg_line}),Object(l.jsx)("div",{className:x.a.backImg_descBottom,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates distinctio natus inventore maxime sunt accusantium eveniet consequuntur eos et soluta ullam blanditiis a earum odit, tempora, nisi, eaque sit sequi."})]})]})};var I=function(){return Object(l.jsx)("div",{className:"wrap",children:Object(l.jsxs)("div",{className:"Screen",children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{}),Object(l.jsx)(O,{})]})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.35b16a69.chunk.js.map