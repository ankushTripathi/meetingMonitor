webpackJsonp([51],{1003:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(9),r=a(n),o=l(5),u=a(o),d=l(2),s=a(d),i=l(7),f=a(i),c=l(4),p=a(c),m=l(3),h=a(m),v=l(1),y=a(v),w=l(8),C=a(w),E=l(166),_=a(E),b=l(6),x=a(b),g=l(15),O=a(g),S=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l};if("undefined"!=typeof window){var k=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||k}var P={xs:"480px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"},j=function(e){function t(e){(0,s["default"])(this,t);var l=(0,p["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));l.responsiveHandler=function(e){l.setState({below:e.matches}),l.state.collapsed!==e.matches&&l.setCollapsed(e.matches,"responsive")},l.setCollapsed=function(e,t){"collapsed"in l.props||l.setState({collapsed:e});var a=l.props.onCollapse;a&&a(e,t)},l.toggle=function(){var e=!l.state.collapsed;l.setCollapsed(e,"clickTrigger")},l.belowShowChange=function(){l.setState({belowShow:!l.state.belowShow})};var a=void 0;"undefined"!=typeof window&&(a=window.matchMedia),a&&e.breakpoint&&e.breakpoint in P&&(l.mql=a("(max-width: "+P[e.breakpoint]+")"));var n=void 0;return n="collapsed"in e?e.collapsed:e.defaultCollapsed,l.state={collapsed:n,below:!1},l}return(0,h["default"])(t,e),(0,f["default"])(t,[{key:"getChildContext",value:function(){return{siderCollapsed:this.props.collapsed}}},{key:"componentWillReceiveProps",value:function(e){"collapsed"in e&&this.setState({collapsed:e.collapsed})}},{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql))}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler)}},{key:"render",value:function(){var e,t=this.props,l=t.prefixCls,a=t.className,n=t.collapsible,o=t.reverseArrow,d=t.trigger,s=t.style,i=t.width,f=t.collapsedWidth,c=S(t,["prefixCls","className","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),p=(0,_["default"])(c,["collapsed","defaultCollapsed","onCollapse","breakpoint"]),m=this.state.collapsed?f:i,h=0===f||"0"===f?y["default"].createElement("span",{onClick:this.toggle,className:l+"-zero-width-trigger"},y["default"].createElement(O["default"],{type:"bars"})):null,v={expanded:o?y["default"].createElement(O["default"],{type:"right"}):y["default"].createElement(O["default"],{type:"left"}),collapsed:o?y["default"].createElement(O["default"],{type:"left"}):y["default"].createElement(O["default"],{type:"right"})},w=this.state.collapsed?"collapsed":"expanded",E=v[w],b=null!==d?h||y["default"].createElement("div",{className:l+"-trigger",onClick:this.toggle},d||E):null,x=(0,u["default"])({},s,{flex:"0 0 "+m+"px",width:m+"px"}),g=(0,C["default"])(a,l,(e={},(0,r["default"])(e,l+"-collapsed",!!this.state.collapsed),(0,r["default"])(e,l+"-has-trigger",!!d),(0,r["default"])(e,l+"-below",!!this.state.below),(0,r["default"])(e,l+"-zero-width",0===m||"0"===m),e));return y["default"].createElement("div",(0,u["default"])({className:g},p,{style:x}),y["default"].createElement("div",{className:l+"-children"},this.props.children),n||this.state.below&&h?b:null)}}]),t}(y["default"].Component);t["default"]=j,j.__ANT_LAYOUT_SIDER=!0,j.defaultProps={prefixCls:"ant-layout-sider",collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:64,style:{}},j.childContextTypes={siderCollapsed:x["default"].bool},e.exports=t["default"]},1004:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1005),r=a(n),o=l(1003),u=a(o);r["default"].Sider=u["default"],t["default"]=r["default"],e.exports=t["default"]},1005:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e){return function(t){return function(l){function a(){return(0,i["default"])(this,a),(0,m["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,v["default"])(a,l),(0,c["default"])(a,[{key:"render",value:function(){var l=e.prefixCls;return w["default"].createElement(t,(0,d["default"])({prefixCls:l},this.props))}}]),a}(w["default"].Component)}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(9),o=a(r),u=l(5),d=a(u),s=l(2),i=a(s),f=l(7),c=a(f),p=l(4),m=a(p),h=l(3),v=a(h),y=l(1),w=a(y),C=l(8),E=a(C),_=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l},b=function(e){function t(){return(0,i["default"])(this,t),(0,m["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,v["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,l=e.className,a=e.children,n=_(e,["prefixCls","className","children"]),r=void 0;w["default"].Children.forEach(a,function(e){e&&e.type&&e.type.__ANT_LAYOUT_SIDER&&(r=!0)});var u=(0,E["default"])(l,t,(0,o["default"])({},t+"-has-sider",r));return w["default"].createElement("div",(0,d["default"])({className:u},n),a)}}]),t}(w["default"].Component),x=n({prefixCls:"ant-layout"})(b),g=n({prefixCls:"ant-layout-header"})(b),O=n({prefixCls:"ant-layout-footer"})(b),S=n({prefixCls:"ant-layout-content"})(b);x.Header=g,x.Footer=O,x.Content=S,t["default"]=x,e.exports=t["default"]},1006:[1822,1289],1094:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(l(1006),l(1004)),r=a(n),o=l(1),u=a(o),d=l(1327),s=(a(d),r["default"].Header),i=r["default"].Footer,f=r["default"].Sider,c=r["default"].Content,p=function(){return u["default"].createElement("div",null,u["default"].createElement(r["default"],null,u["default"].createElement(s,null,"Header"),u["default"].createElement(c,null,"Content"),u["default"].createElement(i,null,"Footer")),u["default"].createElement(r["default"],null,u["default"].createElement(s,null,"Header"),u["default"].createElement(r["default"],null,u["default"].createElement(f,null,"Sider"),u["default"].createElement(c,null,"Content")),u["default"].createElement(i,null,"Footer")),u["default"].createElement(r["default"],null,u["default"].createElement(s,null,"Header"),u["default"].createElement(r["default"],null,u["default"].createElement(c,null,"Content"),u["default"].createElement(f,null,"Sider")),u["default"].createElement(i,null,"Footer")),u["default"].createElement(r["default"],null,u["default"].createElement(f,null,"Sider"),u["default"].createElement(c,null,u["default"].createElement(s,null,"Header"),u["default"].createElement(c,null,"Content"),u["default"].createElement(i,null,"Footer"))))};t["default"]=p,e.exports=t["default"]},1289:12,1327:12});