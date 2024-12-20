// import data from "./data.json" with { type: "json" };
import project from "./project.js";
import modals from "./modalList.js";
import about from "./aboutMe.js";

const importData = () => {
  project.data01.map((data01) => {
    const list01 = document.querySelector(
      ".practice-section .container .projects"
    );
    list01.innerHTML += `<div class="project col-md-6 col-lg-4">
          <div class="img-box" data-list="${data01.number}">
            <img src="${data01.image}"/>
            <p class="info" data-list="${data01.number}">${data01.info}<span class="blind">자세히보기</span></p>
          </div>
          <p>${data01.name}</p>
    </div>`;
  });
  project.data.map((data) => {
    const list = document.querySelector(".port-section .container .projects");
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
  // about.work.map((work) => {
  //   const sec_parent = document.querySelector(".about-section .works ul");
  //   sec_parent.innerHTML += `<li><p><span>${work.date}</span><span>${work.name} - ${work.txt}</span></p></li>`;
  // });
  about.skill.map((skill) => {
    const sec_parent = document.querySelector(".about-section .skills ul");
    sec_parent.innerHTML += `<li><p><span>[ ${skill.name} ]</span><span>${skill.txt}</span></p></li>`;
  });
};
About(about);

// function height() {
//   window.addEventListener("DOMContentLoaded", function (ev) {
//     const { innerHeight } = window;
//     document.documentElement.style.setProperty(
//       "--app-height",
//       `${innerHeight}px`
//     );
//   });
// }
// height();
function addClass() {
  let no = 1;
  let intervalId;
  //intervalID 는 양의 정수로써 setInterval() 이 생성한 타이머를 식별할 때 사용 0부터 시작하지 않는다.
  const fun = () => {
    const targetSelector = `.contact-section .hover-target span:nth-child(${no})`;

    console.log(`Selector: ${targetSelector}`);
    const element = document.querySelector(targetSelector);
    if (element) {
      element.classList.add("selec");
    }
    // Increment and loop no
    no = no + 1;
    const totalSpans = document.querySelectorAll(
      ".contact-section .hover-target span"
    ).length;
    if (no > totalSpans) {
      no = 0;
      clearInterval(intervalId);
      console.log(intervalId);
    }
  };
  intervalId = setInterval(fun, 500);
}
// addClass();
function contactClass() {
  const contact = document.querySelector(".contact-text");
  const contact_close = document.querySelector(".contact-close");
  contact.addEventListener("click", function () {
    addClass();
    contact_close.addEventListener("click", function () {
      const Spans = document.querySelectorAll(
        ".contact-section .hover-target span"
      );
      Spans.forEach((span) => {
        span.classList.remove("selec");
      });
    });
  });
}
contactClass();
