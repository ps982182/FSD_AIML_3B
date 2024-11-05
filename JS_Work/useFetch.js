// console.log("Hello Fetch");
// function fetchData(){
// const response = fetch("https://dummyjson.com/recipes");
// response.then(data=>{
//     console.log(data);
//     data.json().then((res=>{
//         console.log(res.recipes[0].name);
//         for (let i = 0; i < res.recipes.length; i++) {
//             show += `<li>${res.recipes[i].id+ " " +res.recipes[i].name + " " + res.recipes[i].ingredients}</li>`
//         }
//         document.getElementById("show").innerHTML = show;
//     }))
// })
// .catch(error=>console.log(error))
// .finally(()=>console.log("Hi, finally closed all the resources"));
// }

function fetchData() {
    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("showData");
            tableBody.innerHTML = ""; 

            data.recipes.forEach(recipe => {
                const row = `
                    <tr>
                        <td>${recipe.id}</td>
                        <td>${recipe.name}</td>
                        <td>${recipe.ingredients.join(", ")}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.log("Error fetching data:", error))
        .finally(() => console.log("Data fetch completed"));
}
