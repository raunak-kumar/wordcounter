(this.webpackJsonpwordcounter=this.webpackJsonpwordcounter||[]).push([[0],{19:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(7),s=n.n(o),a=(n(19),n(2)),c=(n(9),n(0));function l(e){var t=Object(i.useState)(60),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(i.useState)(!1),l=Object(a.a)(s,2),u=l[0],d=l[1];return Object(i.useEffect)((function(){var e=setInterval((function(){1===r&&d(!0),r<=0?clearInterval(e):o(r-1)}),1e3);return function(){clearInterval(e)}})),Object(i.useEffect)((function(){u&&e.isTimeZero(u)}),[u]),Object(c.jsxs)("div",{className:"timer",children:[r>0&&Object(c.jsx)("div",{children:r}),0===r&&Object(c.jsx)("div",{children:"Click Reset to Restart The Game!!!"})]})}var u=n(14),d=n(8),p=n.n(d);p.a.setAppElement("#root");var f={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:"rgba(255,255,255,0.3)"}};function h(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1];return Object(i.useEffect)((function(){o(e.time)}),[e.time]),Object(c.jsxs)(p.a,{isOpen:r,style:f,children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#810000"},children:[Object(c.jsx)("h2",{children:"Speed Checker"}),Object(c.jsx)("h3",{style:{cursor:"pointer"},children:Object(c.jsx)("span",{onClick:function(){return o(!1)},children:"X"})})]}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column"},children:[Object(c.jsxs)("h4",{style:{color:"#1F441E"},children:["Total Correctly Typed Words : ",e.wordDetails.correct]}),Object(c.jsxs)("h4",{style:{color:"#BE0000"},children:["Total Incorrectly Typed Words : ",e.wordDetails.incorrect]})]})]})}function m(e){return Object(c.jsx)("span",{className:e.letterInfo.status,children:e.letterInfo.testLetter})}var b=["Business meetings, and professional recordings can contain sensitive data, so security is something a transcription company should not overlook when providing services. Companies should therefore follow the various laws and industry best practice, especially so when serving law firms, government agencies or courts. Medical Transcription specifically is governed by HIPAA, which elaborates data security practices and compliance measures to be strictly followed, failure of which leads to legal action and penalties. Transcription security includes maintaining confidentiality of the data through information security practices including limiting access with passwords and ensuring a secure environment for data and appropriate methods of disposal of all materials and deletion of files. Personnel may be required to sign non-disclosure agreements on a regular basis as well as take various oaths regarding confidentiality and accuracy.","Self-confidence is a tricky subject for many people. For some, it's impossible to feel good about themselves without outside validation. When you're in a situation where the people in your life aren't helping you to feel better about yourself, this can become a problem in your day to day life. Most insecurity stems from feelings of not being attractive or feelings of loneliness. If your insecurity doesn't necessarily stem from a lack of interaction, but more a lack of feeling attractive, there are other options that will help you online. Sometimes the best way to put your insecurities to rest can simply be to get an honest opinion.","There are multiple support groups online where you can share a picture of yourself with other members and they will give honest feedback on your appearance. In most cases, they will point out good qualities that you may have missed in yourself. But you can trust them to be honest and many members give very valuable style and posture advice to increase your attractiveness. These practical tips and unbiased opinions from supportive strangers will immediately help you feel better about yourself, and if the tips are implemented it will also improve your self-esteem in the long-run.","A transcription service is a business which converts speech (either live or recorded) into a written or electronic text document. Transcription services are often provided for business, legal, or medical purposes. The most common type of transcription is from a spoken-language source into text such as a computer file suitable for printing as a document such as a report. Common examples are the proceedings of a court hearing such as a criminal trial (by a court reporter) or a physician's recorded voice notes (medical transcription)."],j=b[Math.floor(Math.random()*b.length)],y=j.split(" "),g=j.split("");function v(e){var t=Object(i.useState)({}),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(i.useState)(!0),l=Object(a.a)(s,2),d=l[0],p=l[1],f=Object(i.useState)(g.map((function(e,t){return{testLetter:e,status:"notVisited"}}))),b=Object(a.a)(f,2),v=b[0],O=b[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"output",contentEditable:!0,suppressContentEditableWarning:!0,children:v.map((function(e,t){return Object(c.jsx)(m,{letterInfo:e},t)}))}),Object(c.jsx)("div",{id:"input",contentEditable:!e.timeZero,onInput:function(t){t.preventDefault();var n=t.target.innerText,i=n.length,r=i-1;n[0]===j[0]&&d&&(e.isToggleTimer(!0),p(!1));var s=Object(u.a)(v);0===i?O(g.map((function(e,t){return{testLetter:e,status:"notVisited"}}))):(n[r]===v[r].testLetter?s[r].status="correct":s[r].status="incorrect",O(s));var a=0,c=0;n.split(" ").map((function(e,t){e.trim()===y[t]?a++:c++})),o({correct:a,incorrect:c})},onPaste:function(e){return e.preventDefault(),!1}}),!0===e.timeZero&&Object(c.jsx)(h,{wordDetails:r,time:e.timeZero})]})}var O=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(!1),s=Object(a.a)(o,2),u=s[0],d=s[1];return Object(c.jsxs)("div",{className:"App",children:[!1===n&&Object(c.jsx)("div",{className:"timer",children:"60"}),!0===n&&Object(c.jsx)(l,{isTimeZero:function(e){d(e)}}),Object(c.jsx)("div",{id:"textArea",children:Object(c.jsx)(v,{isToggleTimer:function(e){r(e)},timeZero:u})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return window.location.reload()},children:"Reset"})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),o(e),s(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),w()},9:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.dcfbca5e.chunk.js.map