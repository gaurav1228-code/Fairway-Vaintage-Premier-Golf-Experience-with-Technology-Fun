let cur = document.querySelector("#cursor");
let blurrr = document.querySelector("#cursor-blur");
let navh4 = document.querySelectorAll("#nav h4");
function navbar() {
  gsap.to("#nav", {
    height: "100px",
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub: 2,
    },
  });
}
function main() {
  gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -30%",
      end: "top -80%",
      scrub: 1,
    },
  });
}
function mouse() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to(cur, {
      x: dets.x + 15,
      y: dets.y + 15,
      duration: 0.4,
      ease: "back.out(1)",
      overwrite: "auto",
    });
    gsap.to(blurrr, {
      x: dets.x - 200,
      y: dets.y - 200,
      duration: 0.4,
      ease: "back.out(1)",
      overwrite: "auto",
    });
  });

  navh4.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(cur, {
        scale: 3,
        backgroundColor: "transparent",
        cursor: "pointer",
        border: "1px solid #fff",
        duration: 0.3,
        ease: "power2.out",
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(cur, {
        scale: 1,
        backgroundColor: "#95C11E",
        border: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  let footer = document.querySelectorAll(".footer a");

  footer.forEach((elem1) => {
    elem1.addEventListener("mouseenter", () => {
      gsap.to(cur, {
        scale: 3,
        backgroundColor: "transparent",
        cursor: "pointer",
        border: "1px solid #fff",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(elem1, {
        color: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    elem1.addEventListener("mouseleave", () => {
      gsap.to(cur, {
        scale: 1,
        backgroundColor: "#95C11E",
        border: "none",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(elem1, {
        color: "#000",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}
function scroller() {
  gsap.to(".scroller-inner", {
    xPercent: -100,
    repeat: -1,
    duration: 40,
    ease: "linear",
  });
}
function card() {
  let cards = document.querySelectorAll(".card");
  let lays = document.querySelectorAll(".lay");
  const maxAngle = 15;

  lays.forEach((lay) => {
    // Mouse enter
    lay.addEventListener("mouseenter", (e) => {
      let c = lay.closest(".card");
      let overlay = c.querySelector(".overlay");

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(c.querySelectorAll(".h1, h3"), {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(cur, {
        scale: 3,
        backgroundColor: "transparent",
        cursor: "pointer",
        border: "2px solid #95C11E",
        duration: 0.3,
        ease: "back.out(1)",
      });
    });

    // Mouse move (rotation effect)
    lay.addEventListener("mousemove", (e) => {
      let rect = lay.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let centerX = rect.width / 2;
      let centerY = rect.height / 2;

      let rotateX = ((y - centerY) / centerY) * maxAngle;
      let rotateY = ((x - centerX) / centerX) * maxAngle;

      // Apply rotation only to the current card (not all)
      let c = lay.closest(".card");
      gsap.to(c, {
        rotateX: -rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    });

    // Mouse leave
    lay.addEventListener("mouseleave", (e) => {
      let c = lay.closest(".card");
      let overlay = c.querySelector(".overlay");

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(c.querySelectorAll(".h1, h3"), {
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(cur, {
        scale: 1,
        backgroundColor: "#95C11E",
        border: "none",
        duration: 0.3,
        ease: "back.out(1)",
      });

      // Reset rotation only for this card
      gsap.to(c, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}
function faq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      faqItems.forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
}
function smallcard() {
  const array = [
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-nearest-pin.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "Warm Up",
      para: "Analyse multiple data points including ball speed, launch angle & distance. This is a popular way for players to start their practice session.",
    },
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-longest-drive-1024x576.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "Longest Drive",
      para: "Tee it high and let it fly in the game mode which is all about distance! Settle that age old debate once and for all…",
    },
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-nearest-pin.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "Nearest The Pin",
      para: "Feeling dialled in? Put it to the test…Try and hit the ball as close as you can to the pin to win!",
    },
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-points-game-1024x576.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "My Practice",
      para: "Stores shot data over time allowing you to learn more about your golf game and specific characteristics of each club in your bag.",
    },
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-virtual-golf-1024x576.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "Virtual Golf",
      para: "Play the world’s most iconic courses including Pebble Beach, St Andrews, Torrey Pines and Royal St George’s, play solo or against mates.",
    },
    {
      image: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/tt-points-game-1024x576.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      name: "Approach Challenge",
      para: "Take aim at the pin in a mode that targets your approach game. Hit consistently close approach shots to lead you to victory.",
    },
  ];
  document.querySelectorAll(".slider").forEach(slider => {
    slider.innerHTML = "";
    array.forEach((elem, idx) => {
      slider.innerHTML += `
        <div id="${idx}" class="cardd">
          <div class="overlay"></div>
          <div class="hover">
            <p>${elem.para}</p>
          </div>
          <img src="${elem.image}" />
          <h3 id="heading">${elem.name}</h3>
        </div>
      `;
    });
  });
  gsap.to(".slider", {
    xPercent: -50,  
    repeat: -1,
    duration: 30,
    ease: "linear",
  });
}

// golflessons page












navbar();
main();
mouse();
scroller();
card();
faq();
smallcard();
