function lessoncard() {
    let array = [
        {
            img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/lessons-individual-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1",
            h2:"INDIVIDUAL LESSONS",
            p1:"Get all the attention you need with a one-to-one lesson.",
            p2:"Your golf coach for one-off sessions or a series of sessions will ensure you focus on what matters to you and your game in order to reach your goals whether it be performance or results based."
        },
        {
            img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/03/lessons-group-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1",
            h2:"GROUP LESSONS",
            p1:"Fancy learning the game with friends? Or want to get involved in a social atmosphere with likeminded players?",
            p2:"Our group sessions are ideal for you. Suitable for beginners and improving golfers, enjoy a bit of friendly competition whilst you learn the beautiful game.",
        },
        {
            img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/03/lessons-junior-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1",
            h2:"JUNIOR LESSONS",
            p1:"Lessons at Sidcup Family Golf can be tailored to any age or ability, designed to help your child to not only learn golf but, essential social skills and above all…have fun!",
            p2:"We have the perfect facilities to develop young players, from complete beginners through to elite youth performance.",
        },
    ];

    let selecth1 = document.querySelectorAll(".headd h1");
    let lesscard = document.querySelector(".lesscard");

    function updateCard(idx){
        lesscard.innerHTML = `
            <img id="img1" src="${array[idx].img}">
            <div class="lesscontent">
                <h2>${array[idx].h2}</h2>
                <p>${array[idx].p1}</p>
                <p>${array[idx].p2}</p>
                <button class="bttn1 butn">CONTACT OUR PROS</button>
            </div>
            <img id="img2" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg">
        `;

        gsap.from(lesscard,{
            scale: 0.9,
            duration: 0.5,
            ease: "linear",
        });

        selecth1.forEach(h => {
            h.style.color = "white";
            h.style.textDecoration = "none";
        });
        selecth1[idx].style.color = "#a0d120";
        selecth1[idx].style.textDecoration = "underline";
    }

    updateCard(0);

    selecth1.forEach((elem,idx)=>{
        elem.addEventListener("click",()=>{
            updateCard(idx);
        });
    });
}
lessoncard();
