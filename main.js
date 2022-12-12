const card1 = document.getElementById("goSomewher");
// card1.style.backgroundColor = "black";
const myheader = document.querySelector(".myheader");
// console.log(myheader);
// myheader.remove();
const title1 = document.createElement("h1");
const sec11 = document.getElementById("sec1");
// sec11.prepend(title1);
// sec11.append(title1);
title1.classList.add("tismb", "bc");
// title1.classList.remove( "bc")
// title1.innerText = "هنا المثال "
// title1.setAttribute("id", "idtest")
// ------------------------------------
//Function declaration
// -----------------فانكشن نسميها ثم نستدعيها ----1
// function ggo(){
// title1.classList.remove( "bc")
// title1.innerText = "هنا المثال "
// title1.setAttribute("id", "idtest")
// }
// ggo();

// --------------تستدعى نفسها وليس لها اسم -----2
//   (function () {
//     title1.classList.remove("bc");
//     title1.innerText = "هنا المثال ";
//     title1.setAttribute("id", "idtest");
//   }
// )();
// ----------------تنفذ بعد مدة زمنيه ----3
// setTimeout( ggo , 3000) ;
// ------------------------------
//Function expression
// ----------- نضعها فى متغير ونستغنى عن الاسم ونستدعى المتغير
//-------استدعاء باسم ---1
// const extfun1 = function () {
//       title1.classList.remove("bc");
//       title1.innerText = "هنا المثال ";
//       title1.setAttribute("id", "idtest");
//     }

//     extfun1();

//----------استدعاء تلقائى-------2
// const extfun1 = (function () {
//   title1.classList.remove("bc");
//   title1.innerText = "هنا المثال ";
//   title1.setAttribute("id", "idtest");
// })();
//------------استدعاء بوقت ---3
// const extfun1 = function () {
//   title1.classList.remove("bc");
//   title1.innerText = "هنا المثال ";
//   title1.setAttribute("id", "idtest");
// }
// setTimeout( extfun1 , 3000)
//--------------arrow -------nfn
// const extfun1 =  ()=> {
//   title1.classList.remove("bc");
//   title1.innerText = "هنا المثال ";
//   title1.setAttribute("id", "idtest");
// }
// setTimeout( extfun1 , 3000)

// --------------arrow  ---callpack-----anfn

// setTimeout(() => {
//   title1.classList.remove("bc");
//   title1.innerText = "هنا المثال ";
//   title1.setAttribute("id", "idtest");
// }, 3000);

const zorar = document.getElementById("goSomewher");

// zorar.addEventListener("click", () => {
//   zorar.style.backgroundColor = "red";
//   zorar.classList.add("gfg");
// });

const fafa = document.getElementById("fffa");

zorar.addEventListener("click", () => {
  const orte = document.createElement("h1");
  orte.innerText = "dfgd";
  fafa.append(orte);

  orte.classList.add("mp");
});

const alosh1 = document.querySelector(".alosh");
alosh1.setAttribute("id", "gg");

// ---------------------

const zorarbtn = document.getElementsByClassName("btn")[0];
const bigContainer = document.querySelector(".big-container");
const ekhtrek = document.getElementById("ikht");
const leeh = document.querySelector(".contaner1");

// الطريقة الاولى
// zorarbtn.addEventListener("click", (eo) => {
//   bigContainer.style.display = "block";
// });

//---------الطريقة التانيه بعمل كلاس جديد فيه ديسبلاى بلوك

// zorarbtn.addEventListener("click", (eo) => {
//   bigContainer.classList.add("displayBlock");
//   ekhtrek.style.display = "none ";
//   leeh.style.display = "block";

//   eo.preventDefault();
// });

const obtn = document.getElementsByClassName("btn")[1];
//-------------الطريقة الاولى اخفاء العنصر مباشر
// obtn.addEventListener("click" , (eo) => {

//   bigContainer.style.display = "none";

// } )

//-------------الطريقة التانيه ازالة كلاس البلوك
// obtn.addEventListener("click", (eo) => {
//   // bigContainer.classList.remove("displayBlock");
//   ekhtrek.style.display = "block ";
//   leeh.style.display = "none";

//   setTimeout(() => {
//     bigContainer.classList.remove("displayBlock");
//   }, 1000);
// });

// _________________dialog

// const dia = document.querySelector("dialog");

// zorarbtn.addEventListener("click", (eo) => {
//   dia.showModal();
// });

// obtn.addEventListener("click", (eo) => {
//   dia.close();
// });

// -----------------cute allert ------------

//zorarbtn.addEventListener("click" , (eo) => {

//eo.preventDefault();

// cuteAlert({
//   type: "success",
//   title: "Success Title",
//   message: "Success Message",
//   buttonText: "Okay"
// })

// ---------
// cuteAlert({
//   type: "error",
//   title: "Error Title",
//   message: "Error Message",
//   buttonText: "Okay"
// })
//  ----------
// cuteToast({
//   type: "success", // or 'info', 'error', 'warning'
//   message: "Toast Message",
//   timer: 5000
// })

// })

// ---------------Array----

// const courses = ["HTML", "CSS", "JavaScript"];

// courses[2] = "python"; // استبدال
// courses[2] += 44; // اضافة داخل عنصر

// console.log(courses[2]);
// console.log(courses.length);
// console.table(courses);
// console.log(courses.indexOf("CSS"));

// alert("hello!");

// const title = document.getElementsByTagName("h1");
// console.log(title);
// console.log(Array.from("tittle 1"));
// console.log(Array.from(title));

// const titleArray = Array.from(title);
// console.log(titleArray);

// -------------------
// const liforeach = document.getElementsByTagName("li");
// const li22 = Array.from(liforeach);
// console.log(li22);
// li22.forEach((item) => {
//   item.style.color = "red";
// });

// ---------------ح
// const pforeach = document.getElementsByTagName("p");
// const p22 = Array.from(pforeach);
// p22.forEach(item => {
//   item.style.backgroundColor = "blue"
//   p22[0].style.fontSize= "40px"
//   item.classList.add("big")
// })

// const sectionq = document.querySelectorAll("section")
// console.log(sectionq)  // nodeList = Array
// sectionq.forEach(item => {
//   item.style.backgroundColor= "gray"
//   sectionq[0].style.backgroundColor= "gold"

// })

// ------------

//----------------  - شغلنا كل الكروت
//ولكن هذة الطريقة تصلح فقط اذا كان العناصر ثابته فى html
const zAll = document.querySelectorAll(".nAll");
// console.log(zAll);

// الاستماع للزر
// zAll.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     bigContainer.classList.add("displayBlock");
//     ekhtrek.style.display = "none ";
//     leeh.style.display = "block";

//     eo.preventDefault();
//   });
// });

const hnaAll = document.querySelector(".hna");
// console.log(hnaAll);
hnaAll.addEventListener("click", (eo) => {
  ekhtrek.style.display = "block ";
  leeh.style.display = "none";

  setTimeout(() => {
    bigContainer.classList.remove("displayBlock");
  }, 1000);
});

// ---------------------------IF

// if (0 < 1) {
//   console.log("سبحان الله");
// }

// if (1 > 0) {
//   console.log("يارب");
// } else {
//   console.log("الحمد لله");
// }

// const num = "7";

// if (num === 7) {
//   console.log("first");
// } else {
//   console.log("hhhk");
// }

// if (num != "7") {
//   console.log("first");
// } else if (num === "7") {
//   console.log("hhhk");
// } else {
//   console.log("alo");
// }

// num === 7 ? console.log("too") : console.log("alo");

// ----------------------------

// انشاء كارت جديد بالضعط على زر

const addBro = document.querySelector("#addbro");
const flexBro = document.querySelector("#flexbro");
const newproduct = `       
<div class="card mycard" style="width: 18rem;">
            <img style="border-radius:5px ;" src="woch.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" id="goSomewher" class=" nAll btn btn-primary">Go somewhere</a>
            </div>
          </div>
`;
flexBro.style.border = "5px solid red";
// flexBro.style.backgroundColor = "red"

addBro.addEventListener("click", (eo) => {
  flexBro.innerHTML += newproduct;
});

// -----------------------

//اوتوماتيكى  الطريقة الصحيحة للاستماع على الكارت الجديد

flexBro.addEventListener("click", (eo) => {
  if (eo.target.classList == " nAll btn btn-primary") {
    // console.log("first")
    bigContainer.classList.add("displayBlock");
    ekhtrek.style.display = "none ";
    leeh.style.display = "block";

    eo.preventDefault();
  }
});

// -------------------level 3

// -------------shang mode by togel

{
  const mode = document.querySelector(".mode");
  const dark = document.querySelector(".dark");
  const heder1 = document.querySelector("header");
  const body = document.querySelector("body");

  mode.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

// ul hover li color ---------

{
  const ulcolor = document.getElementById("ulcolor");
  const liChangColor = document.getElementById("liChangColor");

  liChangColor.addEventListener("mousemove", (eo) => {
    ulcolor.style.display = "block";
  });
  liChangColor.addEventListener("mouseout", (eo) => {
    ulcolor.style.display = "none";
  });
}

//--------header color change bg
{
  const myheadercolor = document.querySelector("body > header");
  const ulBgHeader = document.getElementById("ulBgHeader");

  ulBgHeader.addEventListener("click", (eo) => {
    const random = Math.round(Math.random() * 360);
    myheadercolor.style.backgroundColor = `hsl(${random}, 76%, 72%)`;

    const frstH1 = document.querySelector("body > header > h1");

    frstH1.style.backgroundColor = `hsl(${random}, 76%, 72%)`;

    const changmood1 = document.querySelector(
      "body > header > nav > ul > li.mode"
    );
    changmood1.style.backgroundColor = `hsl(${random}, 50%, 50%)`;
  });
}

//--------h1 color change bg  from list

{
  const ulBgTitle = document.getElementById("ulBgTitle");

  ulBgTitle.addEventListener("click", (eo) => {
    const random = Math.round(Math.random() * 360);
    const allh1not1 = document.querySelectorAll("h1:not(body > header > h1)");
    allh1not1.forEach((item) => {
      item.style.backgroundColor = `hsl(${random}, 50%, 50%)`;
    });
  });
}
//-----h1 color change text from list --- another way

{
  const changcolor = () => {
    return Math.round(Math.random() * 360);
  };
  const ulColorTitle = document.getElementById("ulColorTitle");
  ulColorTitle.addEventListener("click", (eo) => {
    const allh1not1 = document.querySelectorAll("h1:not(body > header > h1)");

    let station = changcolor();

    allh1not1.forEach((item) => {
      item.style.color = `hsl(${station}, 50%, 50%)`;
    });
  });
}
//-----section bg color change from list --- another way
// {
// const ulBgsection = document.getElementById("ulBgsection")
// const allsections = document.querySelectorAll("section")
// const treecolorArray = ["#50C9CE","#EE5980","#9883E5"]
// let i = 0

// ulBgsection.addEventListener("click" , (eo) => {

//   allsections.forEach(item => {
//     item.style.backgroundColor= treecolorArray[i]
//   });
// //---short if ---&-- normal if
//   (treecolorArray.length-1  > i )? i++ : i = 0 ;
// //   if (treecolorArray.length-1  > i ) {
// //     i++
// //   }else{
// //     i = 0
// //   }
//  })

// }

//-----section bg color change from list ---with random hsl from 3 items
// {
//   const ulBgsection = document.getElementById("ulBgsection");
//   const treecolorArray = ["#50C9CE", "#EE5980", "#9883E5"];

//   //لو حطيت كود الراندم هنا هيفضل قيمة الراندوم اول قيمه وبس
//   // const random = Math.floor(Math.random() * treecolorArray.length);

//   ulBgsection.addEventListener("click", (eo) => {
//     const allsections = document.querySelectorAll("section");
//     // لو عاوز كل السكاشن تاخد لون واحد عشوائي حط الراندوم هنا
//     const random = Math.floor(Math.random() * treecolorArray.length);

//     allsections.forEach((item) => {
//       // لو عاوز كل سكشن يكون بلون مختلف عشوائ حط الراندوم فى اللوب
//       // const random = Math.floor(Math.random() * treecolorArray.length);

//       item.style.backgroundColor = treecolorArray[random];
//     });
//   });
// }

//-----section bg color change  ---with random rgb 255 255 255

// {
// ulBgsection.addEventListener("click", (eo) => {
//   const allsections = document.querySelectorAll("section");

//   // اذا اردت توحيد اللون ضع المتغيرات هنا  r g b

//   allsections.forEach((item) => {

//    let r = Math.round(Math.random() * 255);
//   let g = Math.round(Math.random() * 255);
//   let b = Math.round(Math.random() * 255);

//     item.style.backgroundColor = `rgb(${r},${g},${b})`;

//   });
// });

// }

// -----section bg color change  ---with random rgb 255 255 255 by return function

// {

//   const randum255 = () => {
//     return Math.round(Math.random() * 255);
//    }
// ulBgsection.addEventListener("click", (eo) => {
//   const allsections = document.querySelectorAll("section");

//   // اذا اردت توحيد اللون ضع المتغيرات هنا  r g b

//   allsections.forEach((item) => {
//     let r = randum255()
//     let g = randum255()
//     let b = randum255()

//     item.style.backgroundColor = `rgb(${r},${g},${b})`;

//   });
// });

// }

// -----section bg color change  ---with random hxa #548548 by return function

// هذا الكود يحول الرقم الى هيكسا ديسمال عن طريق تحويلة اولا الى سترينج
// {
// ulBgsection.addEventListener("click", (eo) => {
//   const random1 = Math.random().toString(16).slice(2,8)

// const allsections = document.querySelectorAll("section");
// allsections.forEach(item => {

//  item.style.backgroundColor= `#${random1}`

// });

// });

// }

//   نفس المثال بطريقة الريترن لون عشوائى لكل سكشن  forEach
// {
// const randomf = () => {
//   return Math.random().toString(16).slice(2,8)
// }

// ulBgsection.addEventListener("click", (eo) => {
// const allsections = document.querySelectorAll("section");
// allsections.forEach(item => {
//  item.style.backgroundColor= `#${randomf()}`
// });
// });

// }
// نفس المثال بطريقة الريترن لون موحد  لكل سكشن  forEach

// {
// const randomf = () => {
//   return Math.random().toString(16).slice(2,8)
// }

// ulBgsection.addEventListener("click", (eo) => {
// const allsections = document.querySelectorAll("section");
// let station = randomf()
// allsections.forEach(item => {
//  item.style.backgroundColor= `#${station}`
// });
// });

// }
// -----section bg color change  ---with random hxa #548548 by for loob

// {
// const randomf = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };

// ulBgsection.addEventListener("click", (eo) => {
//   const allsections = document.querySelectorAll("section");
//   const station = randomf();

//   for (let i = 0; i < allsections.length; i++) {
//     const item = allsections[i];
//     item.style.backgroundColor = station;
//   }
// });

// }

// -----section bg color change  ---with random hxa #548548 by (for of , for in , whill)

const randomf = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

ulBgsection.addEventListener("click", (eo) => {
  const allsections = document.querySelectorAll("section");
  const station = randomf();

  // ------------------for of
  // for (const i of allsections) {
  //   const item = i;
  //   item.style.backgroundColor = station
  // }

  // ------------------------------Error :(    for in

  // for (const i in allsections) {
  //   const item = allsections[i];
  //   item.style.backgroundColor = station
  // }

  //------------------------whill----

  let i = 0;
  while (i < allsections.length) {
    const item = allsections[i];
    item.style.backgroundColor = station;
    i++;
  }

  //---------------------do---whill----

  // let i = 0
  // do {
  //   const item = allsections[i];
  //   item.style.backgroundColor = station
  //   i++

  // } while (i < allsections.length);

  //--------------------;;----

  // let i = 0
  // for (;;) {

  //   if (i < allsections.length) {
  //     const item = allsections[i];
  //     item.style.backgroundColor = station;
  //     i++
  //   }else{
  //     {break}
  //   }

  // }

  // });

  // ----------------------- Auto writing -- setInterval &  clearInterval

  // {
  // let i = 1
  // const autowrit = () => {
  //   const title = "لا اله الا الله - محمد رسول الله  "
  //   const h1header = document.getElementById("h1header").innerText= title.slice(0,i)
  //   i++

  //   if (i > title.length  ) {
  //     clearInterval(stopFun)
  //     // i = 1
  //   }
  //  }
  // const stopFun = setInterval( autowrit , 300)
});

// ------------------------ image--from list

i = 1;
mybutton.addEventListener("click", (eo) => {
  const galaryArray = [
    `<img id="vedio1" src="icooo.jpg" alt=""> `,
    `<img id="vedio1" src="1.png" alt=""> `,
    `<img id="vedio1" src="fff.png" alt="">`,
    ` <img id="vedio1" src="fff3.png" alt="">`,
    `<img id="vedio1" src="DaveSouth_Ultra-futuristic_Ducati_Bertone_Superbike_large_chunk_ade9b6f6-10d1-4736-bf57-82d29920d223.png" alt="">`,
  ];
  galary.innerHTML = galaryArray[i];

  i++;

  if (i == galaryArray.length) {
    i = 0;
  }

  hartbom();
});

// --------------snow---------to body

// setInterval(cteatSnowflake, 100)
// function cteatSnowflake() {
//   const snow_flake = document.createElement("i");
//   snow_flake.classList.add("icon-snowflake-o");
//   // snow_flake.classList.add("snow1");
//   snow_flake.style.left = Math.random()*96 + 'vw';
//   snow_flake.style.animationDuration = Math.random() * 5 + 2 + 's';
//   snow_flake.style.opacity = Math.random();
//   snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

//   document.body.prepend(snow_flake);

//   setTimeout(() => {
//     snow_flake.remove();
//    },2000)
// }

//---------------------------snow 2 galary section

// setInterval(cteatSnowflake2, 100);

function cteatSnowflake2() {
  const snow_flake2 = document.createElement("i");
  snow_flake2.classList.add("icon-snowflake-o");
  // snow_flake.classList.add("snow1");
  snow_flake2.style.left = Math.random() * 96 + "vw";
  snow_flake2.style.animationDuration = Math.random() * 5 + 2 + "s";
  snow_flake2.style.opacity = Math.random();
  snow_flake2.style.fontSize = Math.random() * 10 + 10 + "px";

  let alosh = document.getElementsByClassName("alosh")[0];
  alosh.prepend(snow_flake2);

  setTimeout(() => {
    snow_flake2.remove();
  }, 2000);
}

// ------ speech tex-----------
// {
//   const texts = document.querySelector(".texts");

//   window.SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   const recognition = new SpeechRecognition();
//   recognition.interimResults = true;

//   let p = document.createElement("p");

//   recognition.addEventListener("result", (e) => {
//     texts.appendChild(p);
//     const text = Array.from(e.results)
//       .map((result) => result[0])
//       .map((result) => result.transcript)
//       .join("");

//     p.innerText = text;
//     if (e.results[0].isFinal) {
//       if (text.includes("how are you")) {
//         p = document.createElement("p");
//         p.classList.add("replay");
//         p.innerText = "I am fine";
//         texts.appendChild(p);
//       }
//       if (
//         text.includes("what's your name") ||
//         text.includes("what is your name")
//       ) {
//         p = document.createElement("p");
//         p.classList.add("replay");
//         p.innerText = "My Name is Cifar";
//         texts.appendChild(p);
//       }
//       if (text.includes("open my YouTube")) {
//         p = document.createElement("p");
//         p.classList.add("replay");
//         p.innerText = "opening youtube channel";
//         texts.appendChild(p);
//         console.log("opening youtube");
//         window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
//       }
//       p = document.createElement("p");
//     }
//   });

//   recognition.addEventListener("end", () => {
//     recognition.start();
//   });

//   recognition.start();
// }
// rundom hart --------------------re useble function

const rundomhart = document.getElementById("rundomhart");
const containerhart = document.getElementById("containerhart");

const hartbom = () => {
  const babahart = document.createElement("div");
  containerhart.append(babahart);

  const creatRandomhart = setInterval(() => {
    const hartHtml = document.createElement("div");
    babahart.append(hartHtml);

    hartHtml.classList.add("hart");
    hartHtml.innerHTML = "&#129505;";
    hartHtml.style.left = Math.random() * 96 + "vw";
    hartHtml.style.fontSize = Math.random() * 20 + 10 + "px";
    // hartHtml.style.animationDuration = Math.random() * 0.5 + 1 + "s";
    hartHtml.style.animationDuration = `${(Math.random() + 0.5) * 2}s `;

    // اضافة شكل اخر
    const hartHtml2 = document.createElement("div");
    babahart.append(hartHtml2);
    hartHtml2.classList.add("hart");
    hartHtml2.innerHTML = "&#129506;";
    hartHtml2.style.left = Math.random() * 96 + "vw";
    hartHtml2.style.fontSize = Math.random() * 20 + 10 + "px";
    // hartHtml.style.animationDuration = Math.random() * 0.5 + 1 + "s";
    hartHtml2.style.animationDuration = `${(Math.random() + 0.5) * 2}s `;
  }, 50);

  setTimeout(() => {
    clearInterval(creatRandomhart);
  }, 3000);

  setTimeout(() => {
    babahart.remove();
  }, 5000);
};

rundomhart.addEventListener("click", (eo) => {
  hartbom();
});

// ----------------js accordion

const allplus = document.querySelectorAll(".plus");
allplus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "contentq"
      )[0];
    content.classList.toggle("contentActive");

    if (content.classList.contains("contentActive")) {
      content.style.height = `  ${content.scrollHeight + 20}px `;
    } else {
      content.style.height = `0`;
    }

    //---------+&-

    item.classList.toggle("hidePlaus");
    if (item.classList.contains("hidePlaus")) {
      item.innerText = "ــ";
      item.style.transform = "translateY(-4px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0px)";
    }
  });
});

// --------Digital Clock

const digitalClock = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString();
  let ampm = "am";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "pm";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours == 0) {
    hours = `12`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  let clock = `
<div id="Date">
  ${date}
</div>
<div id="time">
  ${hours} : ${min} : ${sec}  ${ampm}
</div>
`;
  clockContainer.innerHTML = clock;
};
setInterval(digitalClock, 1000);

// ------------slider

// const sliderimg = document.getElementsByClassName("slider-cont")[0];
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const arrimg = [
//   `<img class="srcimg" src="./slider-img/backgr9.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/comfort1.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/backgr6.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/fitar1.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/fiterman1.jpg"  alt="">`,
// ];

// let x = 0;
// sliderimg.innerHTML += arrimg[x];
// prev.setAttribute("disabled", "");
// sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

// next.addEventListener("click", (eo) => {
//   prev.removeAttribute("disabled");
//   x++;
//   sliderimg.innerHTML += arrimg[x];
//   sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

//   allnumSlider
//     .getElementsByClassName("activeNume")[0]
//     .classList.remove("activeNume");
//   allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");

//   if (x + 1 == arrimg.length) {
//     next.setAttribute("disabled", "");
//   }
// });

// prev.addEventListener("click", (eo) => {
//   next.removeAttribute("disabled");
//   x--;
//   sliderimg.innerHTML += arrimg[x];
//   sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

//   if (x == 0) {
//     prev.setAttribute("disabled", "");
//   }

//   allnumSlider
//     .getElementsByClassName("activeNume")[0]
//     .classList.remove("activeNume");
//   allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");
// });

// const numSlider = document.querySelectorAll(".numSlider");
// const allnumSlider = document.getElementsByClassName("allnumSlider")[0];

// numSlider.forEach((item, index) => {
//   item.addEventListener("click", (eo) => {
//     allnumSlider
//       .getElementsByClassName("activeNume")[0]
//       .classList.remove("activeNume");
//     eo.target.classList.add("activeNume");

//     sliderimg.innerHTML += arrimg[index];
//     sliderimg.innerHTML += `<p>fotos ${index + 1} of ${arrimg.length} </p>`;
//     x = index;

//     if (index == arrimg.length - 1) {
//       next.setAttribute("disabled", "");
//       prev.removeAttribute("disabled", "");
//     } else if (index == 0) {
//       prev.setAttribute("disabled", "");
//       next.removeAttribute("disabled", "");
//     } else {
//       next.removeAttribute("disabled", "");
//       prev.removeAttribute("disabled", "");
//     }
//   });
// });

// // ------------------slider auto

// const sliderimg = document.getElementsByClassName("slider-cont")[0];
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const arrimg = [
//   `<img class="srcimg" src="./slider-img/backgr9.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/comfort1.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/backgr6.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/fitar1.jpg" alt="">`,
//   `<img class="srcimg" src="./slider-img/fiterman1.jpg"  alt="">`,
// ];

// let x = 0;
// sliderimg.innerHTML += arrimg[x];
// prev.setAttribute("disabled", "");
// sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

// next.addEventListener("click", (eo) => {
//   prev.removeAttribute("disabled");
//   x++;
//   sliderimg.innerHTML += arrimg[x];
//   sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

//   allnumSlider
//     .getElementsByClassName("activeNume")[0]
//     .classList.remove("activeNume");
//   allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");

//   if (x + 1 == arrimg.length) {
//     next.setAttribute("disabled", "");
//   }
// });

// prev.addEventListener("click", (eo) => {
//   next.removeAttribute("disabled");
//   x--;
//   sliderimg.innerHTML += arrimg[x];
//   sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

//   if (x == 0) {
//     prev.setAttribute("disabled", "");
//   }

//   allnumSlider
//     .getElementsByClassName("activeNume")[0]
//     .classList.remove("activeNume");
//   allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");
// });

// const numSlider = document.querySelectorAll(".numSlider");
// const allnumSlider = document.getElementsByClassName("allnumSlider")[0];



// setInterval(() => {
//   sliderimg.innerHTML += arrimg[x];
//   x++;
//   if (x == arrimg.length) {
//     x = 0;
//   }
//   allnumSlider
//     .getElementsByClassName("activeNume")[0]
//     .classList.remove("activeNume");
//   allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");
// }, 1000);




// numSlider.forEach((item, index) => {
//   item.addEventListener("click", (eo) => {
//     allnumSlider
//       .getElementsByClassName("activeNume")[0]
//       .classList.remove("activeNume");
//     eo.target.classList.add("activeNume");

//     sliderimg.innerHTML += arrimg[index];
//     sliderimg.innerHTML += `<p>fotos ${index + 1} of ${arrimg.length} </p>`;
//     x = index;

//     if (index == arrimg.length - 1) {
//       next.setAttribute("disabled", "");
//       prev.removeAttribute("disabled", "");
//     } else if (index == 0) {
//       prev.setAttribute("disabled", "");
//       next.removeAttribute("disabled", "");
//     } else {
//       next.removeAttribute("disabled", "");
//       prev.removeAttribute("disabled", "");
//     }
//   });
// });
