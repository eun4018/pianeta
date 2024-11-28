// import data from "./data.json" with { type: "json" };
import project from "./project.js";
import modals from "./modalList.js";
// console.log(project);
console.log(modals);

const importData = () => {
  project.data.map((data) => {
    const list = document.querySelector(".port-section .container .row");
    list.innerHTML += `<div class="project col-md-6 col-lg-4" data-list="${data.id}">
    <div class="img-box"><img src="${data.image}"/></div>
    <p>${data.name}</p></div>`;
    //modal

    const importModal = () => {
      modals.career.map((career) => {
        // const modalbox = document.querySelector("#myModal .modal-content");
        // console.log(data.id);
        // modalbox.innerHTML += `<div id="${career.id}" class="modals"><div class="img-box"><img src="${career.image}"/></div>
        //       <p>${career.name}</p></div>`;
        const projects = document.querySelectorAll(".project");

        projects.forEach((div) => {
          const modalbox = document.querySelector("#myModal .modal-content");
          div.addEventListener("click", function (e) {
            let value = e.target.dataset.list;
            console.log(value);
            if (value === career.id) {
              modalbox.innerHTML += `<div id="${career.id}" class="modals">
              <p>${career.name}</p></div>`;
            }
            const Modals = document.querySelector("#myModal");
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
      });
    };
    importModal(modals);
  });
};

importData(project);

// const importModal = () => {
//     modals.career.map((career) => {
//       const modalbox = document.querySelector("#myModal .modal-content");
//       console.log(data.id);
//       modalbox.innerHTML += `<div id="${career.id}" class="modals"><div class="img-box"><img src="${career.image}"/></div>
//               <p>${career.name}</p></div>`;
//     });
//   };
//   // console.log(data.id);
//   importModal(modals);
