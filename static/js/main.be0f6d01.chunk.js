(this["webpackJsonpcreative-apartments"]=this["webpackJsonpcreative-apartments"]||[]).push([[0],{10:function(t,e,a){t.exports={apartments:"Apartments_apartments__2I2PM"}},11:function(t,e,a){t.exports={header:"Header_header__2RCl5",header__title:"Header_header__title__1LT5g"}},14:function(t){t.exports=JSON.parse('{"response":[{"type":"flat","id":1,"attributes":{"title":"3-\u0445 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u041c\u0438\u043d\u0441\u043a\u043e\u0439","rooms":3,"address":{"city":"Tyumen","street":"\u041c\u0438\u043d\u0441\u043a\u0430\u044f","house":"3a","room":"123"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":2,"attributes":{"first_name":"\u0412\u0430\u0441\u0438\u043b\u0438\u0439","last_name":"\u0414\u0440\u043e\u0437\u0434\u043e\u0432","middle_name":"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":2,"attributes":{"title":"1 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u0411\u0430\u0440\u0430\u0431\u0430\u0438\u043d\u0441\u043a\u043e\u0439","rooms":2,"address":{"city":"Tyumen","street":"\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a\u0430\u044f","house":"12","room":"45"},"area":34,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":10,"attributes":{"first_name":"\u041c\u0438\u0445\u0430\u0438\u043b","last_name":"\u0418\u0432\u0430\u043d\u043e\u0432","middle_name":"\u0414\u0435\u043c\u0438\u0434\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":3,"attributes":{"title":"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u041b\u0435\u043d\u0438\u043d\u0430","rooms":4,"address":{"city":"Tyumen","street":"\u041b\u0435\u043d\u0438\u043d\u0430","house":"134","room":"24"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":44,"attributes":{"first_name":"\u0421\u0442\u0435\u043f\u0430\u043d","last_name":"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432","middle_name":"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}}}]}')},15:function(t,e,a){t.exports={loader:"Spinner_loader__1T6Js",load2:"Spinner_load2__jmQXD"}},2:function(t,e,a){t.exports={apartments__item:"SingleApartment_apartments__item__K7LIM",apartments__image:"SingleApartment_apartments__image__15NIa",apartments__star:"SingleApartment_apartments__star__14Gqq",apartments__star_empty:"SingleApartment_apartments__star_empty__2Bz6-",apartments__star_filled:"SingleApartment_apartments__star_filled__2h2au",apartments__title:"SingleApartment_apartments__title__2i6JT",apartments__description:"SingleApartment_apartments__description__2L4Re",apartments__info:"SingleApartment_apartments__info__CfLko",apartments__agent:"SingleApartment_apartments__agent__-OKEF"}},26:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(5),i=a.n(s),c=a(3),o=a(4),_=a(9),m=a.n(_),l=a(12),d=a(13),p=a(14),u=[a.p+"static/media/image_1.29dd31ec.jpg",a.p+"static/media/image_2.305ae742.jpg",a.p+"static/media/image_3.680d15ea.jpg"],j=Object(o.b)("apartments/fetchAll",Object(d.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,1e3)}));case 2:return e=p.response,t.abrupt("return",e.reduce((function(t,e){return t.concat(Object(l.a)(Object(l.a)({},e),{},{image:u[e.id-1],favorites:!1}))}),[]));case 4:case"end":return t.stop()}}),t)})))),f=Object(o.c)({name:"apartments",initialState:{items:[],loading:!1},reducers:{toggleFavorites:function(t,e){var a=t.items.find((function(t){return t.id===e.payload}));a&&(a.favorites=!a.favorites)}},extraReducers:function(t){t.addCase(j.pending,(function(t,e){t.loading=!0})).addCase(j.fulfilled,(function(t,e){t.items=e.payload,t.loading=!1}))}}),b=f.reducer,g=f.actions.toggleFavorites,h=Object(o.a)({reducer:b}),O=c.c,x={Tyumen:"\u0422\u044e\u043c\u0435\u043d\u044c"},v=function(t){var e=t.city,a=t.street,n=t.house,r=t.room;return"".concat(x[e],", ").concat(a," \u0443\u043b., ").concat(n,", \u043a\u0432. ").concat(r)},y=function(t){var e=t.first_name,a=t.middle_name,n=t.last_name;return"".concat(n," ").concat(e," ").concat(a)},N=a(2),S=a.n(N),A=a(1),F=function(t){var e=t.item,a=t.onFavorite;return Object(A.jsxs)("li",{className:S.a.apartments__item,children:[Object(A.jsx)("img",{className:S.a.apartments__image,alt:e.attributes.title,src:e.image}),Object(A.jsx)("button",{type:"button",onClick:function(){a(e.id)},className:"".concat(S.a.apartments__star," ").concat(e.favorites?S.a.apartments__star_filled:S.a.apartments__star_empty)}),Object(A.jsx)("h2",{className:S.a.apartments__title,children:e.attributes.title}),Object(A.jsx)("div",{className:S.a.apartments__description,children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{className:S.a.apartments__info,children:[Object(A.jsx)("strong",{children:"\u0410\u0434\u0440\u0435\u0441:"})," ",v(e.attributes.address)]}),Object(A.jsxs)("li",{className:S.a.apartments__info,children:[Object(A.jsx)("strong",{children:"\u041a\u043e\u043c\u043d\u0430\u0442:"})," ",e.attributes.rooms]}),Object(A.jsxs)("li",{className:S.a.apartments__info,children:[Object(A.jsx)("strong",{children:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c:"})," ",e.attributes.area," \u043c\xb2"]}),Object(A.jsxs)("li",{className:S.a.apartments__agent,children:[Object(A.jsx)("strong",{children:"\u0410\u0433\u0435\u043d\u0442:"})," ",y(e.relationships.attributes)]})]})})]})},T=a(10),k=a.n(T),w=function(t){var e=t.items,a=t.onFavorite;return Object(A.jsx)("main",{className:k.a.container,children:Object(A.jsx)("ul",{className:k.a.apartments,children:e.map((function(t){return Object(A.jsx)(F,{item:t,onFavorite:a},t.id)}))})})},C=a(11),J=a.n(C),L=function(){return Object(A.jsx)("header",{className:J.a.header,children:Object(A.jsx)("h1",{className:J.a.header__title,children:"Smooth Apartments"})})},I=a(15),E=a.n(I),M=function(){return Object(A.jsx)("div",{className:E.a.loader,children:"Loading..."})};var R=function(){var t=O((function(t){return t.items})),e=O((function(t){return t.loading})),a=Object(c.b)();return Object(n.useEffect)((function(){a(j())}),[a]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L,{}),e?Object(A.jsx)(M,{}):Object(A.jsx)(w,{items:t,onFavorite:function(t){a(g(t))}})]})};a(26);i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(c.a,{store:h,children:Object(A.jsx)(R,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.be0f6d01.chunk.js.map