// import data from "./data.json" with { type: "json" };
import project from "./project.js";
import modals from "./modalList.js";
import about from "./aboutMe.js";

const importData = () => {
  project.data01.map((data01) => {
    const list01 = document.querySelector(".practice-section .container .row");
    list01.innerHTML += `<div class="project col-md-6 col-lg-4">
          <div class="img-box" data-list="${data01.number}">
            <img src="${data01.image}"/>
            <p class="info" data-list="${data01.number}">${data01.info}<span class="blind">자세히보기</span></p>
          </div>
          <p>${data01.name}</p>
    </div>`;
  });
  project.data.map((data) => {
    const list = document.querySelector(".port-section .container .row");
    list.innerHTML += `<div class="project col-md-6 col-lg-4">
    <div class="img-box" data-list="${data.id}"><img src="${data.image}"/>
    <p class="info" data-list="${data.id}">${data.info}<span class="blind">자세히보기</span></p></div>
    <p>${data.name}</p></div>`;
  });
};

const importModal = () => {
  const projects = document.querySelectorAll(".project .img-box");
  projects.forEach((div) => {
    const Modals = document.querySelector("#myModal");
    const modalbox = document.querySelector("#myModal .modal-content");
    div.addEventListener("click", function (e) {
      let value = e.currentTarget.dataset.list;
      console.log(e.currentTarget);
      document.body.classList.add("project-on");
      Modals.classList.add("modal-on");
      modals.career01.map((career01) => {
        if (value === career01.number) {
          modalbox.innerHTML += `<div id="${career01.number}" class="modals">
          <div class="tit">
                  <div class="left_tit">
                    <p>${career01.name}</p>
                    <p class="txt">${career01.txt}</p>
                  </div>
                  <ul class="right_tit">
                    <li><a href="${career01.link}" target="_blank">메인</a></li>
                    <li><a href="${career01.link01}" target="_blank">서브 1</a></li>
                    <li><a href="${career01.link02}" target="_blank">소스보기</a></li>
                  </ul>
          </div>
          <div class="img_box">
            <picture>
                <source srcset="${career01.image_mo}" media="(max-width:720px)">
                <source srcset="${career01.image_pc}" media="(max-width:1280px)">
                <source srcset="${career01.image_pc}">
                <img class="bg-img" src="${career01.image_pc}" alt="${career01.name}">
              </picture>
          </div>
        </div>`;
        }
      });
      modals.career.map((career) => {
        if (value === career.id) {
          modalbox.innerHTML += `<div id="${career.id}" class="modals">
          <div class="tit">
                  <div class="left_tit">
                    <p>${career.name}</p>
                    <p class="txt">${career.txt}</p>
                  </div>
                  <ul class="right_tit">
                    <li><a href="${career.link}" target="_blank">메인</a></li>
                    <li><a href="${career.link01}" target="_blank">서브 1</a></li>
                    <li><a href="${career.link02}" target="_blank">소스보기</a></li>
                  </ul>
          </div>
          <div class="img_box">
            <picture>
                <source srcset="${career.image_mo}" media="(max-width:720px)">
                <source srcset="${career.image_pc}" media="(max-width:1280px)">
                <source srcset="${career.image_pc}">
                <img class="bg-img" src="${career.image_pc}" alt="${career.name}">
              </picture>
          </div>
        </div>`;
        }
      });
      //right_tit 유무
      const check = () => {
        const Link_check = document.querySelectorAll(".right_tit > li > a");
        Link_check.forEach((value) => {
          const Link_value = value.getAttribute("href");
          if (Link_value === "") {
            value.parentElement.remove();
          }
        });
      };
      check();
      //modal close
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

const About = () => {
  about.intro.map((intro) => {
    const sec_parent = document.querySelector(".about-section .about ul");
    sec_parent.innerHTML += `<li>${intro.txt}</li>`;
  });
  const intro_txt = document.createElement("p");
  document.querySelector(".about-section .about").append(intro_txt);
  intro_txt.innerHTML += `찢어주겨도 모자른 새끼들`;
  about.work.map((work) => {
    const sec_parent = document.querySelector(".about-section .works ul");
    sec_parent.innerHTML += `<li>${work.txt}</li>`;
  });
  about.skill.map((work) => {
    const sec_parent = document.querySelector(".about-section .skills ul");
    sec_parent.innerHTML += `<li>${work.txt}</li>`;
  });
};
About(about);
