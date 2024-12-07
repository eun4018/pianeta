//title
function titText() {
  const textElement = document.querySelector(".tit_text");
  const textArr = ["정서은의 포트폴리오"];

  let pipe = true; //깜박이는 커서
  let idx = 0; // 현재 타이핑된 글자의 인덱스
  let speed = 200; // 타이핑 글자 스피드
  let isTyping = true; // 아직 타이핑 되고 있는지?
  let textIdx = 0; //배열의 선택된 문자의 인덱스
  let timeoutId; //setTimeout의 ID
  let isStopped = false; //setTimeout이 멈췄는지

  const textEffect = () => {
    if (isStopped) return;
    let text = textArr[textIdx];
    if (pipe) {
      text += "|"; // 커서 깜빡이는 효과
    }
    if (isTyping) {
      if (idx < text.length) {
        //글자수가 남아있으면
        textElement.innerHTML += text[idx];
        idx++;
        // console.log(idx);
      } else {
        isTyping = false; //타이핑 완료
      }
    } else {
      //isTyping = false 일때 글자 삭제
      if (idx > 0) {
        textElement.innerHTML = text.slice(0, idx - 1);
        // 글자수가 17이므로 17을 만들어 줘야 함.
        idx--;
      } else {
        isTyping = true;
        textIdx = (textIdx + 1) % textArr.length;
        //끝으로 가면 다시 재 시작 할 수 있도록 함
      }
    }
    timeoutId = setTimeout(textEffect, speed);
  };
  textEffect();
}
titText();

document.body.addEventListener("mousemove", function (event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor2.style.left = event.clientX + "px";
  cursor2.style.top = event.clientY + "px";
  cursor3.style.left = event.clientX + "px";
  cursor3.style.top = event.clientY + "px";
});

const cursor = document.getElementById("cursor"),
  cursor2 = document.getElementById("cursor2"),
  cursor3 = document.getElementById("cursor3");

function addHoverEffect() {
  cursor2.classList.add("hover");
  cursor3.classList.add("hover");
}

function removeHoverEffect() {
  cursor2.classList.remove("hover");
  cursor3.classList.remove("hover");
}

removeHoverEffect();

const hoverTargets = document.querySelectorAll(".hover-target");
hoverTargets.forEach((target) => {
  target.addEventListener("mouseover", addHoverEffect);
  target.addEventListener("mouseout", removeHoverEffect);
});

// Utility function for toggling classes
function toggleBodyClass(buttonSelector, className, isAdd) {
  const buttons = document.querySelectorAll(buttonSelector);
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (isAdd) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  });
}

// About page
toggleBodyClass(".about-text", "about-on", true);
toggleBodyClass(".about-close", "about-on", false);

// Contact page
toggleBodyClass(".contact-text", "contact-on", true);
toggleBodyClass(".contact-close", "contact-on", false);

// practice page
toggleBodyClass(".practice", "practice-on", true);
toggleBodyClass(".practice-close", "practice-on", false);

// portfolio page
toggleBodyClass(".portfolio", "port-on", true);
toggleBodyClass(".port-close", "port-on", false);
