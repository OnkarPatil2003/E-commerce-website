const nav_div4 = document.querySelector(".nav-div4");

nav_div4.addEventListener("click", () => {
  window.location.href = "/login_Registration/index.html";
});

// ^=========================

const sec2_div = document.querySelector(".sec2-div1");

async function fetop() {
  try {
    let data = await window.fetch("./datatop.json");
    let datafd = await data.json();
    datafd.map((e) => {
      sec2_div.innerHTML += `
          <div class="sec2-div-d flexcenter">
            <img src="${e.img}" alt="img">
            <p>${e.text}</p>
            <p>${e.offer}</p>
          </div>
        `;
    });

    let target = sec2_div.children;
    let collection = [...target];

    collection.forEach((e) => {
      // console.log(e);            //^====
      // e.addEventListener("click", (c) => {
      //   e.attributes("");
      // });
    });
  } catch (e) {
    console.log(e);
  }
}
fetop();

// ^=======================================================

const sec1_div = document.querySelector(".sec1_div");

let currentIndex = 0;
async function adfetching() {
  try {
    let fad = await window.fetch("./adfetch.json");
    let finalfad = await fad.json();

    finalfad.forEach((e) => {
      sec1_div.innerHTML += `
      <img src = "${e.img}" alt = "image">
       `;
    });
    const images = sec1_div.querySelectorAll("img");
    let currentPosition = 0;

    setInterval(() => {
      images[currentPosition].style.left = "-100%";
      currentPosition = (currentPosition + 1) % images.length;
      images[currentPosition].style.left = "0";
    }, 3000);
  } catch (e) {
    console.log(e);
  }
}
adfetching();

// ^====================================

// const subnav_div = document.querySelector(".subnav_div");

// async function navdata() {
//   try {
//     let ndata = await window.fetch("./navdata.json");
//     let fnavdata = await ndata.json();

//     fnavdata.forEach((e) => {
//       // console.log(e.navtext);
//       subnav_div.innerHTML += `
//       <div class="subnav_div_div bordergrey "><p class="point" >${e.navtext}</p></div>
//          `;
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }
// navdata();

// ^====================================

const prodata = document.querySelector(".sec-div1-div2");
const productsdiv = document.querySelector(".sec-div2");

async function prodataf() {
  try {
    let pdata = await window.fetch("./prodata.json");
    let fpdata = await pdata.json();
    let productsdata = await window.fetch("./products.json");
    let productdatafetch = await productsdata.json();



    fpdata.forEach((e) => {
      prodata.innerHTML += `
      <div class="s1"><p class="">${e.protext}</p></div>
         `;
    });

    productdatafetch.forEach((e) => {
      productsdiv.innerHTML += `
        <div class="product flexcenter">
            <img
              src="${e.image}"
              alt="okk"
            />
            <p>${e.title}</p>
            <p>${e.description}</p>
            <p>$ ${e.price}</p>
            <p>${e.delivery}</p>
            <div class="flexcenter">
              <p class="flexcenter"> ${e.rating.rate}
                <img
                  src="https://static.vecteezy.com/system/resources/previews/048/301/784/large_2x/white-minimalistic-star-of-3d-new-year-bright-decoration-for-christmas-and-trendy-interior-png.png"
                  alt=""
                />
              </p>
              <p>${e.rating.count} reviews</p>
            </div>
        `;
    });

    let target1 = productsdiv.children;
    let collection1 = [...target1];

    collection1.forEach((e) => {
      // console.log(e);  //^====


      e.addEventListener("click", (c) => {
        window.location.href = "./shop.html";
      });
    });
  } catch (e) {
    console.log(e);
  }
}
prodataf();

let article1dis = document.querySelector(".article1");
let article2dis = document.querySelector(".article2");
// let article3dis = document.querySelector(".article3");

const shopbutton = document.querySelector(".nav-div2-div2");
const slidebarchild = document.querySelector(".nav-div2-div0");
const nav_div2 = document.querySelector(".nav-div2");
const shopbutton2 = document.querySelector(".navis-d2");

const homebutton = document.querySelector(".nav-div2-div1");

const navbarclick = document.querySelector(".nav-img");
const articledisplay = document.querySelector(".slidebar");
const navarrowclick = document.querySelector(".nav-backarrow");
const navbarslide = document.querySelector(".navi-side_bar");
const navbarslide0 = document.querySelector(".navi-side_bar0");
console.log();
// navbarslide0.append(slidebarchild);

if (window.matchMedia("(max-width: 875px)").matches) {
  navbarslide0.append(slidebarchild);
} else {
  nav_div2.append(slidebarchild);
}

shopbutton.addEventListener("click", (e) => {
  article1dis.style.display = "none";
  article2dis.style.display = "block";
});
homebutton.addEventListener("click", (e) => {
  article1dis.style.display = "block";
  article2dis.style.display = "none";
});
navbarclick.addEventListener("click", (e) => {
  articledisplay.style.display = "block";
  navbarslide.classList.remove("navbarl_anim");
  navbarslide.classList.add("navbarr_anim");
});
navarrowclick.addEventListener("click", (e) => {
  navbarslide.classList.remove("navbarr_anim");
  navbarslide.classList.add("navbarl_anim");

  setTimeout(() => {
    articledisplay.style.display = "none";
  }, 1500);
});

let Allproductsdiv = document.querySelector(".ar2-sec1-allproduct");

async function allprodataf() {
  try {
    let allproductdata = await window.fetch("./allproducts.json");
    let allproductdatafetch = await allproductdata.json();

    allproductdatafetch.forEach((e) => {
      Allproductsdiv.innerHTML += `
          <div class="product flexcenter">
              <img
                src="${e.image}"
                alt="okk"
              />
              <p>${e.name}</p>
              <p>${e.description}</p>
              <p>$ ${e.price}</p>
              <p>${e.delivery}</p>
              <div class="flexcenter">
                <p class="flexcenter"> ${e.rating.rate}
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/048/301/784/large_2x/white-minimalistic-star-of-3d-new-year-bright-decoration-for-christmas-and-trendy-interior-png.png"
                    alt=""
                  />
                </p>
                <p>${e.rating.count} reviews</p>
              </div>
          `;
    });
  } catch (e) {
    console.log(e);
  }
}
allprodataf();

// ^====
let body = document.querySelector("body");
let nav_div3 = document.querySelector(".nav-div3");

let becomeaseller = document.createElement("div");
becomeaseller.innerHTML = `
  <p>To become a Seller You need to register Yourself first</p>
  <div><img src ="https://img.icons8.com/?size=24&id=95867&format=png" alt="cross" class="flexcenter" ></div>
`;
becomeaseller.classList.add("becomeaseller");
body.append(becomeaseller);
nav_div3.addEventListener("click", (e) => {
  becomeaseller.style.display = "block";
});
let disbecomeaseller = { ...becomeaseller.children };
let { 1: div } = disbecomeaseller;
div.addEventListener("click", (e) => {
  becomeaseller.style.display = "none";
});

// ^====