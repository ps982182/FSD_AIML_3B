// console.dir(document); // Logs the document object to the console
// const div = document.getElementsByClassName("parent"); 
// console.dir(div); 
// div[0].innerHTML = "<h2 style='color:red;'>Hello Everyone</h2>"; 
// const h1 = document.createElement("h1");
// h1.innerHTML = "DOM Manipulation";
// h1.style.backgroundColor = "cyan";
// console.log(h1);
// div[0].appendChild(h1);
// const img = document.createElement("img");
// img.src = "./study_image.jpeg";
// img.style.width = "500px";
// img.style.height = "300px";
// img.setAttribute("alt","study image");
// img.style.border = "2px solid black";
// div[0].appendChild(img);


/* ---------------Event ----------------- */
const btn = document.getElementById("btn")
const disp = document.getElementById("display")
function getData()
{
    console.log("Getdata called");
    disp.innerHTML = "Get Data Called";
}
btn.addEventListener("click", getData);

/* -------------- Promise ---------------- */
const promise = new Promise(function(resolve, reject){
    let a = 10;
    let b = 20;
    if (a == b){
        resolve("Success");
    }
    else {
        reject("Failed");
    }
});
promise.then((msg)=>console.log(msg))
.catch(error=> console.log(error));

const prom = new Promise((resolve, reject) => {
   let a = 12;
   if (a>30) {
    resolve({name:"Riya", branch:"CSE(AIML)"});
   }
   else {
    reject("rejected");
   }
});
prom.then((msg)=>console.log(msg.name))
.catch(msg=>{console.log(msg)});
