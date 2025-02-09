
// const prodata = document.querySelector(".sec-div1-div2");
// const productsdiv = document.querySelector(".sec-div2");
let Allproductsdiv = document.querySelector(".sec1-allproduct");


async function prodataf() {
    try {
     
      let allproductdata= await window.fetch("./allproducts.json");
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
  
        console.log(e);
      });

      
  } catch (e) {
    console.log(e);
  }
}
prodataf();