(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[50],{1676:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i,o=n(8),c=n(9),r=n(1),l=n(6),u=n(2),d=n(111),a=n(13),s=n(19),j=n(452),b=n(125),O=n(130),x=n(47),f=n(281),h=n(282),p=n(317),v=n(0),m=Object(l.e)(u.B)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep}));function k(){var e=Object(s.a)().account,t=Object(a.b)().t,n=Object(x.n)(),i=Object(r.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(x.a)(e),tokens:e}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(e){return e.liquidityToken}))}),[i]),l=Object(b.f)(null!==e&&void 0!==e?e:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(e){var t,n=e.liquidityToken;return null===(t=y[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(e){return e.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(e){return!e}))),T=w.map((function(e){return Object(o.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(v.jsx)(p.a,{children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(h.b,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),Object(v.jsxs)(m,{children:[e?A?Object(v.jsx)(u.Gc,{color:"textSubtle",textAlign:"center",children:Object(v.jsx)(f.a,{children:t("Loading")})}):(null===T||void 0===T?void 0:T.length)>0?T.map((function(e,t){return Object(v.jsx)(j.b,{pair:e,mb:t<T.length-1?"16px":0},e.liquidityToken.address)})):Object(v.jsx)(u.Gc,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(v.jsx)(u.Gc,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!A&&Object(v.jsxs)(u.eb,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(v.jsx)(u.Gc,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(v.jsx)(u.v,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:t("Find other LP tokens")})]})]}),Object(v.jsx)(u.C,{style:{textAlign:"center"},children:Object(v.jsx)(u.v,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(v.jsx)(u.a,{color:"white"}),children:t("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=50.eec70b71.chunk.js.map