// import data from "./data.json" with { type: "json" };
import project from "./project.js";
import modals from "./modalList.js";

console.log(modals);
const importData = () => {
  project.data01.map((data01) => {
    const list01 = document.querySelector(".practice-section .container .row");
    list01.innerHTML += `<div class="project col-md-6 col-lg-4">
    <div class="img-box" data-list="${data01.number}"><img src="${data01.image}"/>
      <p class="info" data-list="${data01.number}">${data01.info}<span>자세히보기</span></p></div>
    <p>${data01.name}</p></div>`;
  });
  project.data.map((data) => {
    const list = document.querySelector(".port-section .container .row");
    list.innerHTML += `<div class="project col-md-6 col-lg-4">
    <div class="img-box" data-list="${data.id}"><img src="${data.image}"/>
    <p class="info" data-list="${data.id}">${data.info}<span>자세히보기</span></p></div>
    <p>${data.name}</p></div>`;
  });
};

const importModal = () => {
  const projects = document.querySelectorAll(".project .img-box");
  projects.forEach((div) => {
    const Modals = document.querySelector("#myModal");
    const modalbox = document.querySelector("#myModal .modal-content");
    div.addEventListener("click", function (e) {
      let value = e.target.dataset.list;
      console.log(value);
      document.body.classList.add("project-on");
      Modals.classList.add("modal-on");
      modals.career01.map((career01) => {
        if (value === career01.number) {
          modalbox.innerHTML += `<div id="${career01.number}" class="modals">
              <p>${career01.name}</p></div>`;
        }
      });
      modals.career.map((career) => {
        if (value === career.id) {
          modalbox.innerHTML += `<div id="${career.id}" class="modals">
              <p>${career.name}</p></div>`;
        }
      });
      const CloseBtn = Modals.querySelector(".close");
      CloseBtn.addEventListener("click", function () {
        document.body.classList.remove("project-on");
        Modals.classList.remove("modal-on");
        const modal_child = Modals.querySelectorAll(".modals");
        modal_child.forEach((child) => {
          child.remove();
        });
      });
    });
  });
};
importData(project);
importModal(modals);
