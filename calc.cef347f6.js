!function(){var t={form:document.querySelector("#form"),reset:document.querySelector(".reset"),costs:document.querySelector(".costs"),ballons:document.querySelector(".ballons"),c175:document.querySelector(".c175"),c210:document.querySelector(".c210"),c500:document.querySelector(".c500"),liquid:document.querySelector(".liquid"),liquid5:document.querySelector(".liquid5"),liquid5Box:document.querySelector("#liquid-dox"),diameter:document.querySelector(".diameter"),costsTwo:document.querySelector(".costs-two"),ballonsTwo:document.querySelector(".ballons-two"),c175Two:document.querySelector(".c175-two"),c210Two:document.querySelector(".c210-two"),c500Two:document.querySelector(".c500-two"),liquidTwo:document.querySelector(".liquid-two"),liquid5Two:document.querySelector(".liquid5-two"),liquid5BoxTwo:document.querySelector("#liquid-dox-two"),diameterTwo:document.querySelector(".diameter-two")},e=t.form,o=t.reset,n=t.costs,c=t.ballons,u=t.c175,l=t.c210,i=t.c500,r=t.liquid,d=t.liquid5,a=t.liquid5Box,s=t.diameter,m=t.costsTwo,q=t.ballonsTwo,x=t.c175Two,C=t.c210Two,v=t.c500Two,w=t.liquidTwo,f=t.liquid5Two,y=t.diameterTwo,b={costs:null,ballons:null,c175:null,c210:null,c500:null,liquid:null,liquid5:null,diameter:null};function S(t,e){"cof"!==t||e?("cof"===t&&e>1&&(e=1),"cof"===t&&e<.7&&(e=.7),console.log("🚀 ~ value",e),b[t]=Number(e)):function(){var t=b.tottalPoint;if(t<=50)return void(b.cof=.9);if(t>50&&t<=100)return void(b.cof=.85);if(t>100&&t<=150)return void(b.cof=.8);if(t>150&&t<=200)return void(b.cof=.75);b.cof=.7}()}e.addEventListener("submit",(function(){event.preventDefault();var t=event.currentTarget.elements,e=t.existing,o=t.design,f=t.devicesSvl,T=t.volume,N=t.cof;S("tottalPoint",Number(e.value)+Number(o.value)+Number(f.value)),S(T.name,T.value),S(N.name,N.value),function(){var t=b.tottalPoint,e=b.volume,o=b.cof,n=.72,c=10,u=(t*e*o*1.44).toFixed(2);b.costs=u,b.ballons=(Number(u)/6.36).toFixed(2),b.c175=(Number(u)/133).toFixed(2),b.c210=(Number(u)/159.6).toFixed(2),b.c500=(Number(u)/380).toFixed(2),b.liquid=(Number(u)/751.8).toFixed(2),b.liquid5=(Number(u)/751.8*5).toFixed(2),b.diameter=(18.8*Math.sqrt(n*t/c)).toFixed(2)}(),a.classList.remove("visually-hidden"),n.textContent="".concat(b.costs),c.textContent="".concat(b.ballons),u.textContent="".concat(b.c175),l.textContent="".concat(b.c210),i.textContent="".concat(b.c500),r.textContent="".concat(b.liquid),d.textContent="".concat(b.liquid5),s.textContent="".concat(b.diameter),m.textContent="".concat(b.costs),q.textContent="".concat(b.ballons),x.textContent="".concat(b.c175),C.textContent="".concat(b.c210),v.textContent="".concat(b.c500),w.textContent="".concat(b.liquid),y.textContent="".concat(b.diameter)})),o.addEventListener("click",(function(){e.reset(),n.textContent="",c.textContent="",u.textContent="",l.textContent="",i.textContent="",r.textContent="",d.textContent="",s.textContent="",m.textContent="",q.textContent="",x.textContent="",C.textContent="",v.textContent="",w.textContent="",f.textContent="",y.textContent="",a.classList.add("visually-hidden")}))}();
//# sourceMappingURL=calc.cef347f6.js.map