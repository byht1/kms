const e={form:document.querySelector("#form"),formOne:document.querySelector(".form"),next:document.querySelector(".next"),evaporator:document.getElementsByName("evaporator")},t={company:"",name:"",position:"",address:"",phone:"",email:"",equipment:{gasifier:!1,capacity:!1,cylinder:!1,otherEquipment:""},appointment:"",evaporator:!1};e.form.addEventListener("submit",(async function(){event.preventDefault();let t=new FormData(e.form);console.log("🚀 ~ formData",t);let n=await fetch("sendmail.php",{method:"POST",body:t});if(n.ok){await n.json();alert("by")}else alert("error")})),e.form.addEventListener("input",(function(){const e=event.target;if(console.log("🚀 ~ eve",e.checked),"INPUT"===e.nodeName&&"checkbox"===e.type)return void(t.equipment[e.name]=e.checked);if("otherEquipment"===e.name)return void(t.equipment[e.name]=e.value);t[`${e.name}`]=e.value})),e.next.addEventListener("click",(function(){console.log(t)}));
//# sourceMappingURL=form.78353754.js.map
