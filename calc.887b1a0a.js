!function(){var t={form:document.querySelector("#form"),reset:document.querySelector(".reset"),costs:document.querySelector(".costs"),ballons:document.querySelector(".ballons"),c175:document.querySelector(".c175"),c210:document.querySelector(".c210"),c500:document.querySelector(".c500"),liquid:document.querySelector(".liquid"),liquid5:document.querySelector(".liquid5"),liquid5Box:document.querySelector("#liquid-dox"),diameter:document.querySelector(".diameter")},e=t.form,n=t.reset,o=t.costs,c=t.ballons,i=t.c175,l=t.c210,u=t.c500,r=t.liquid,d=t.liquid5,a=t.liquid5Box,s=t.diameter,m={costs:null,ballons:null,c175:null,c210:null,c500:null,liquid:null,liquid5:null,diameter:null};function q(t,e){"cof"!==t||e?m[t]=Number(e):function(){var t=m.tottalPoint;if(t<=50)return void(m.cof=.9);if(t>50&&t<=100)return void(m.cof=.85);if(t>100&&t<=150)return void(m.cof=.8);if(t>150&&t<=200)return void(m.cof=.75);m.cof=.7}()}e.addEventListener("submit",(function(){event.preventDefault();var t=event.currentTarget.elements,e=t.existing,n=t.design,v=t.devicesSvl,x=t.volume,f=t.cof;q("tottalPoint",Number(e.value)+Number(n.value)+Number(v.value)),q(x.name,x.value),q(f.name,f.value),function(){var t=m.tottalPoint,e=m.volume,n=m.cof,o=.72,c=10,i=(t*e*n*1.44).toFixed(2);m.costs=i,m.ballons=Math.ceil(Number(i)/6.36).toString(),m.c175=Math.ceil(Number(i)/133).toString(),m.c210=Math.ceil(Number(i)/159.6).toString(),m.c500=Math.ceil(Number(i)/380).toString(),m.liquid=(Number(i)/751.8).toFixed(2),m.liquid5=(Number(i)/751.8*5).toFixed(2),m.diameter=(18.8*Math.sqrt(o*t/c)).toFixed(2)}(),a.classList.remove("visually-hidden"),o.textContent="".concat(m.costs),c.textContent="".concat(m.ballons),i.textContent="".concat(m.c175),l.textContent="".concat(m.c210),u.textContent="".concat(m.c500),r.textContent="".concat(m.liquid),d.textContent="".concat(m.liquid5),s.textContent="".concat(m.diameter)})),n.addEventListener("click",(function(){e.reset(),o.textContent="",c.textContent="",i.textContent="",l.textContent="",u.textContent="",r.textContent="",d.textContent="",s.textContent="",a.classList.add("visually-hidden")}))}();
//# sourceMappingURL=calc.887b1a0a.js.map
