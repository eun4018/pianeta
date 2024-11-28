// import data from "./data.json" with { type: "json" };
import data from "./data.js";
console.log(data);
// const list = document.querySelector(".project");
// const createList = (data) => {
//   const list = document.querySelector(".port-section .container .row");
//   list.innerHTML += `<div class="project col-md-6 col-lg-4" id="${data.id}"><img src="${data.image}"/>
//   <p>${data.name}</p></div>`;
// };
const importData = () => {
  data.data.map((data) => {
    const list = document.querySelector(".port-section .container .row");
    list.innerHTML += `<div class="project col-md-6 col-lg-4" id="${data.id}">
    <div class="img-box"><img src="${data.image}"/></div>
    <p>${data.name}</p></div>`;
  });
};

importData(data);
