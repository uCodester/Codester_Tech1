//arrow
let arrow = document.querySelector(".fa-angle-double-up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};

arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//button-lode

// let btn = document.querySelector(".bt");
// console.log(btn);

// btn.onclick = function () {
//   // console.log("ras")
//   //Creat Element

//   let parentDiv = document.createElement("div");
//   let CardDiv = document.createElement("div");
//   let pContant = document.createElement("p");
//   let spanContant = document.createElement("span");

//   //Add Class
//   parentDiv.className = "parent";
//   CardDiv.className = "Card";
//   pContant.className = "pmain";
//   spanContant.className = "smain";

//   //Text Node
//   let pText = document.createTextNode("Rasco Score Is Here");
//   pContant.appendChild(pText);
//   let spanText = document.createTextNode("Delete");
//   spanContant.appendChild(spanText);

//   parentDiv.style.cssText =
//     " width:100%;height:100%;background-color: rgb(17 17 20 / 83%);;position: fixed;z-index: 55555555;";
//   CardDiv.style.cssText =
//     " width: 300px;height: 100px;padding: 10px;border-radius: 5px;background-color: #2da3d6;margin: 43px auto;    display: flex;justify-content: space-between;align-items: center;color: white;";
//   spanContant.style.cssText =
//     "background: #c80909;padding: 5px;border-radius: 5px;cursor: pointer;";

//   // Abbend Child
//   parentDiv.appendChild(CardDiv);
//   CardDiv.appendChild(pContant);
//   CardDiv.appendChild(spanContant);

//   document.body.appendChild(parentDiv);

//   spanContant.onclick = function () {
//     parentDiv.style.display = "none";
//   };
// };

let darkIcon = document.querySelector(".fa-adjust");
let darkbody = document.getElementById("dark");
let h1dark = document.getElementsByTagName("h1");
let h12dark = document.querySelector(".smal-sport h1");
let btdark = document.querySelector(".button-lode");

console.log(h1dark);
let h1Array = Array.from(h1dark);
console.log(h1Array);

darkIcon.addEventListener("click", function () {
  darkbody.classList.toggle("darkes");
  btdark.classList.toggle("whight");
  h1Array.forEach((allHarri) => {
    allHarri.classList.toggle("whight");
  });
});
