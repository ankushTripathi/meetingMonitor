webpackJsonp([50],{77:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(80),l=a(o);t["default"]=l["default"],e.exports=t["default"]},79:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),l=a(o),r=n(2),u=a(r),i=n(7),s=a(i),c=n(4),f=a(c),d=n(3),m=a(d),p=n(1),v=a(p),g=n(8),y=a(g),C=n(6),h=a(C),_=function(e){function t(){var e,n,a,o;(0,u["default"])(this,t);for(var l=arguments.length,r=Array(l),i=0;i<l;i++)r[i]=arguments[i];return n=a=(0,f["default"])(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a.clearCloseTimer=function(){a.closeTimer&&(clearTimeout(a.closeTimer),a.closeTimer=null)},a.close=function(){a.clearCloseTimer(),a.props.onClose()},o=n,(0,f["default"])(a,o)}return(0,m["default"])(t,e),(0,s["default"])(t,[{key:"componentDidMount",value:function(){var e=this;this.props.duration&&(this.closeTimer=setTimeout(function(){e.close()},1e3*this.props.duration))}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",a=(e={},(0,l["default"])(e,""+n,1),(0,l["default"])(e,n+"-closable",t.closable),(0,l["default"])(e,t.className,!!t.className),e);return v["default"].createElement("div",{className:(0,y["default"])(a),style:t.style},v["default"].createElement("div",{className:n+"-content"},t.children),t.closable?v["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},v["default"].createElement("span",{className:n+"-close-x"})):null)}}]),t}(p.Component);_.propTypes={duration:h["default"].number,onClose:h["default"].func,children:h["default"].any},_.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},t["default"]=_,e.exports=t["default"]},80:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(){return"rcNotification_"+I+"_"+A++}Object.defineProperty(t,"__esModule",{value:!0});var l=n(19),r=a(l),u=n(9),i=a(u),s=n(5),c=a(s),f=n(2),d=a(f),m=n(7),p=a(m),v=n(4),g=a(v),y=n(3),C=a(y),h=n(1),_=a(h),E=n(6),T=a(E),k=n(10),x=a(k),N=n(23),b=a(N),M=n(157),w=a(M),O=n(8),j=a(O),P=n(79),D=a(P),A=0,I=Date.now(),S=function(e){function t(){var e,n,a,l;(0,d["default"])(this,t);for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return n=a=(0,g["default"])(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={notices:[]},a.add=function(e){var t=e.key=e.key||o();a.setState(function(n){var a=n.notices;if(!a.filter(function(e){return e.key===t}).length)return{notices:a.concat(e)}})},a.remove=function(e){a.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},l=n,(0,g["default"])(a,l)}return(0,C["default"])(t,e),(0,p["default"])(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,a=this.state.notices.map(function(e){var a=(0,w["default"])(t.remove.bind(t,e.key),e.onClose);return _["default"].createElement(D["default"],(0,c["default"])({prefixCls:n.prefixCls},e,{onClose:a}),e.content)}),o=(e={},(0,i["default"])(e,n.prefixCls,1),(0,i["default"])(e,n.className,!!n.className),e);return _["default"].createElement("div",{className:(0,j["default"])(o),style:n.style},_["default"].createElement(b["default"],{transitionName:this.getTransitionName()},a))}}]),t}(h.Component);S.propTypes={prefixCls:T["default"].string,transitionName:T["default"].string,animation:T["default"].oneOfType([T["default"].string,T["default"].object]),style:T["default"].object},S.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},S.newInstance=function(e){var t=e||{},n=t.getContainer,a=(0,r["default"])(t,["getContainer"]),o=void 0;n?o=n():(o=document.createElement("div"),document.body.appendChild(o));var l=x["default"].render(_["default"].createElement(S,a),o);return{notice:function(e){l.add(e)},removeNotice:function(e){l.remove(e)},component:l,destroy:function(){x["default"].unmountComponentAtNode(o),document.body.removeChild(o)}}},t["default"]=S,e.exports=t["default"]},87:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(){return p=p||s["default"].newInstance({prefixCls:g,transitionName:"move-up",style:{top:m},getContainer:y})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=arguments[2],a=arguments[3],l={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[n],r=o();return r.notice({key:v,duration:t,style:{},content:u["default"].createElement("div",{className:g+"-custom-content "+g+"-"+n},u["default"].createElement(f["default"],{type:l}),u["default"].createElement("span",null,e)),onClose:a}),function(){var e=v++;return function(){r.removeNotice(e)}}()}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=a(r),i=n(77),s=a(i),c=n(15),f=a(c),d=3,m=void 0,p=void 0,v=1,g="ant-message",y=void 0;t["default"]={info:function(e,t,n){return l(e,t,"info",n)},success:function(e,t,n){return l(e,t,"success",n)},error:function(e,t,n){return l(e,t,"error",n)},warn:function(e,t,n){return l(e,t,"warning",n)},warning:function(e,t,n){return l(e,t,"warning",n)},loading:function(e,t,n){return l(e,t,"loading",n)},config:function(e){void 0!==e.top&&(m=e.top,p=null),void 0!==e.duration&&(d=e.duration),void 0!==e.prefixCls&&(g=e.prefixCls),void 0!==e.getContainer&&(y=e.getContainer)},destroy:function(){p&&(p.destroy(),p=null)}},e.exports=t["default"]},88:[1822,92],92:12,1109:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(n(32),n(31)),l=a(o),r=(n(34),n(33)),u=a(r),i=(n(41),n(40)),s=a(i),c=(n(28),n(25)),f=a(c),d=(n(88),n(87)),m=a(d),p=n(1),v=a(p);m["default"].config({top:61,duration:2});var g=function(){m["default"].info("This is a normal message")},y=function(){m["default"].success("This is a message of success")},C=function(){m["default"].success("This is a prompt message for success, and it will disappear in 10 seconds",10)},h=function(){var e=m["default"].loading("Action in progress..",0);setTimeout(e,2500)},_=function(){m["default"].error("This is a message of error")},E=function(){m["default"].warning("This is message of warning")},T=function(){return v["default"].createElement("div",null," ",v["default"].createElement(l["default"],{gutter:10},v["default"].createElement(u["default"],{xs:24,md:12,lg:12},v["default"].createElement(s["default"],{title:"Basic Message"},v["default"].createElement(f["default"],{type:"primary",onClick:g},"Display normal message")),v["default"].createElement(s["default"],{title:"Typed Message"},v["default"].createElement(f["default"],{onClick:y},"Success"),v["default"].createElement(f["default"],{onClick:_},"Error"),v["default"].createElement(f["default"],{onClick:E},"Warning"))),v["default"].createElement(u["default"],{xs:24,md:12,lg:12},v["default"].createElement(s["default"],{title:"Customize Duration"},v["default"].createElement(f["default"],{onClick:C},"Customized display duration")),v["default"].createElement(s["default"],{title:"Loading Message"},v["default"].createElement(f["default"],{onClick:h},"Display a loading indicator"))))," ")};t["default"]=T,e.exports=t["default"]}});