!function(){var e={form:document.querySelector("#form"),formOne:document.querySelector(".form"),formTwo:document.querySelector(".formTwo"),formThree:document.querySelector(".formThree"),btnBack:document.querySelector(".button-back"),btnBackTwo:document.querySelector(".button-backTwo")},n={company:"",name:"",position:"",address:"",phone:"",email:"",equipment:{gasifier:!1,capacity:!1,cylinder:!1,otherEquipment:""},appointment:"",evaporator:!1,min:"",max:"",volumeCylinder:"",volumeGasifier:"",pressure:"",additionalEquipment:"",location:"",gas:"",number:"",movable:"",designing:"",construction:"",assembling:"",oebugging:"",to:"",others:""};e.form.addEventListener("input",(function(){var e=event.target;if("INPUT"===e.nodeName&&"checkbox"===e.type)return void(n.equipment[e.name]=e.checked);if("otherEquipment"===e.name)return void(n.equipment[e.name]=e.value);n["".concat(e.name)]=e.value})),e.formOne.addEventListener("submit",(function(){event.preventDefault(),e.formOne.classList.add("visually-hidden"),e.formTwo.classList.remove("visually-hidden"),window.scrollTo(0,0)})),e.formTwo.addEventListener("submit",(function(){event.preventDefault(),e.formTwo.classList.add("visually-hidden"),e.formThree.classList.remove("visually-hidden"),window.scrollTo(0,0);var o=n.appointment,t=n.equipment;t.gasifier,t.capacity,t.cylinder,t.otherEquipment;console.log("🚀 ~ appointment",o)})),e.formThree.addEventListener("submit",(function(){event.preventDefault(),e.formTwo.classList.add("visually-hidden"),e.formThree.classList.remove("visually-hidden"),window.scrollTo(0,0)})),e.btnBack.addEventListener("click",(function(){e.formOne.classList.remove("visually-hidden"),e.formTwo.classList.add("visually-hidden"),window.scrollTo(0,0)})),e.btnBackTwo.addEventListener("click",(function(){e.formTwo.classList.remove("visually-hidden"),e.formThree.classList.add("visually-hidden"),window.scrollTo(0,0)}))}();
//# sourceMappingURL=form.b9962272.js.map