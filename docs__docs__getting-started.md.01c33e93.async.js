(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{Rsk4:function(e,t,n){"use strict";n.r(t);var r=n("9og8"),a=n("WmNS"),l=n.n(a),u=n("LtsZ");t["default"]={"useSetState-demo":{component:Object(u["dynamic"])({loader:function(){var e=Object(r["a"])(l.a.mark((function e(){var t,r,a,u,o,s;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("K+nK"),e.next=3,n.e(6).then(n.bind(null,"+L6B"));case 3:return e.t0=t,e.next=6,Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"2/Rp"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=t,e.next=11,Promise.resolve().then(n.bind(null,"tJVT"));case 11:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.t4=t,e.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return e.t5=e.sent,u=(0,e.t4)(e.t5),e.next=20,Promise.all([n.e(0),n.e(3),n.e(4),n.e(5),n.e(8)]).then(n.bind(null,"gdfu"));case 20:return e.sent,e.next=23,n.e(7).then(n.bind(null,"/7QA"));case 23:return o=e.sent,s=function(){var e=(0,o.useSetState)({value1:1,value2:1}),t=(0,a["default"])(e,2),n=t[0],l=t[1];return u["default"].createElement(u["default"].Fragment,null,u["default"].createElement("div",null,u["default"].createElement("div",null,JSON.stringify(n)),u["default"].createElement(r["default"],{onClick:function(){return l((function(e){return{value1:e.value1+1}}))},type:"primary"},"add value1"),u["default"].createElement(r["default"],{onClick:function(){return l((function(e){return{value2:e.value2+1}}))},type:"primary",style:{margin:"14px"}},"add value2")),u["default"].createElement("div",null,u["default"].createElement(r["default"],{onClick:function(){return l({value1:1})}},"reset value1"),u["default"].createElement(r["default"],{onClick:function(){return l({value2:1})},style:{margin:"14px"}},"reset value2"),u["default"].createElement(r["default"],{onClick:function(){return l({value1:1,value2:1})},type:"danger"},"reset all value")))},e.abrupt("return",s);case 26:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\r\nimport { Button } from 'antd';\r\nimport { useSetState } from 'nsne-react-hooks';\r\n\r\nexport default () => {\r\n  const [state, setState] = useSetState<{\r\n    value1: number;\r\n    value2: number;\r\n  }>({\r\n    value1: 1,\r\n    value2: 1,\r\n  });\r\n\r\n  return (\r\n    <>\r\n      <div>\r\n        <div>{JSON.stringify(state)}</div>\r\n        <Button\r\n          onClick={() =>\r\n            setState(prevState => ({ value1: prevState.value1 + 1 }))\r\n          }\r\n          type=\"primary\"\r\n        >\r\n          add value1\r\n        </Button>\r\n        <Button\r\n          onClick={() =>\r\n            setState(prevState => ({ value2: prevState.value2 + 1 }))\r\n          }\r\n          type=\"primary\"\r\n          style={{ margin: '14px' }}\r\n        >\r\n          add value2\r\n        </Button>\r\n      </div>\r\n      <div>\r\n        <Button onClick={() => setState({ value1: 1 })}>reset value1</Button>\r\n        <Button\r\n          onClick={() => setState({ value2: 1 })}\r\n          style={{ margin: '14px' }}\r\n        >\r\n          reset value2\r\n        </Button>\r\n        <Button\r\n          onClick={() => setState({ value1: 1, value2: 1 })}\r\n          type=\"danger\"\r\n        >\r\n          reset all value\r\n        </Button>\r\n      </div>\r\n    </>\r\n  );\r\n};"}},dependencies:{antd:{version:"4.15.6",css:"antd/dist/antd.css"},react:{version:"16.x"},"nsne-react-hooks":{version:"0.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"useSetState-demo"}},"useToggle-demo":{component:Object(u["dynamic"])({loader:function(){var e=Object(r["a"])(l.a.mark((function e(){var t,r,a,u,o,s;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("K+nK"),e.next=3,n.e(6).then(n.bind(null,"+L6B"));case 3:return e.t0=t,e.next=6,Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"2/Rp"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=t,e.next=11,Promise.resolve().then(n.bind(null,"tJVT"));case 11:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.t4=t,e.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return e.t5=e.sent,u=(0,e.t4)(e.t5),e.next=20,Promise.all([n.e(0),n.e(3),n.e(4),n.e(5),n.e(8)]).then(n.bind(null,"gdfu"));case 20:return e.sent,e.next=23,n.e(7).then(n.bind(null,"/7QA"));case 23:return o=e.sent,s=function(){var e=(0,o.useToggle)(!0),t=(0,a["default"])(e,2),n=t[0],l=t[1];return u["default"].createElement("div",null,u["default"].createElement("div",null,n?"true":"false"),u["default"].createElement(r["default"],{type:"primary",onClick:l},"Toggle"),u["default"].createElement(r["default"],{onClick:function(){return l(!0)},style:{margin:"0 14px"}},"set true"),u["default"].createElement(r["default"],{onClick:function(){return l(!1)}},"set false"))},e.abrupt("return",s);case 26:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\r\nimport { Button } from 'antd';\r\nimport { useToggle } from 'nsne-react-hooks';\r\n\r\nexport default () => {\r\n  const [toggle, setToggle] = useToggle(true);\r\n\r\n  return (\r\n    <div>\r\n      <div>{toggle ? 'true' : 'false'}</div>\r\n      <Button type=\"primary\" onClick={setToggle}>Toggle</Button>\r\n      <Button onClick={() => setToggle(true)} style={{ margin: '0 14px' }}>set true</Button>\r\n      <Button onClick={() => setToggle(false)}>set false</Button>\r\n    </div>\r\n  );\r\n};\r\n"}},dependencies:{antd:{version:"4.15.6",css:"antd/dist/antd.css"},react:{version:"16.x"},"nsne-react-hooks":{version:"0.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"useToggle-demo"}}}},Zc68:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("dEAq"),u=n("ZpkN");n("Rsk4");t["default"]=e=>(a.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},a.a.createElement(l["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),a.a.createElement("p",null,"nsne-react-hooks \u662f\u4e00\u4e2a React Hooks \u5e93"),a.a.createElement("h2",{id:"\u5b89\u88c5"},a.a.createElement(l["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),a.a.createElement(u["a"],{code:"# npm \u5b89\u88c5\r\nnpm install nsne-react-hooks --save\r\n\r\n# yarn \u5b89\u88c5\r\nyarn add nsne-react-hooks",lang:"unknown"}),a.a.createElement("h2",{id:"\u4f7f\u7528"},a.a.createElement(l["AnchorLink"],{to:"#\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528"),a.a.createElement(u["a"],{code:"import {useToggle} from 'react-use';\r\n\r\nconst Demo = () => {\r\n  const [on, toggle] = useToggle(true);\r\n\r\n  return (\r\n    <div>\r\n      <div>{on ? 'ON' : 'OFF'}</div>\r\n      <button onClick={toggle}>Toggle</button>\r\n      <button onClick={() => toggle(true)}>set ON</button>\r\n      <button onClick={() => toggle(false)}>set OFF</button>\r\n    </div>\r\n  );\r\n};",lang:"unknown"}),a.a.createElement("h2",{id:"\u6309\u9700\u52a0\u8f7d"},a.a.createElement(l["AnchorLink"],{to:"#\u6309\u9700\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6309\u9700\u52a0\u8f7d"),a.a.createElement("p",null,"\u53ef\u4ee5\u4f7f\u7528 babel-plugin-import \u6765\u8fdb\u884c\u6309\u9700\u52a0\u8f7d\u3002"))))},x2v5:function(e){e.exports=JSON.parse("{}")}}]);