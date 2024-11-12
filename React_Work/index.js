console.log("Hello React");
const parent = document.getElementById("root");
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1", {style:{color:"yellow"}}, "Prajakta Singhal");
// const l1 = React.createElement("li", {}, "Mango");
// const l2 = React.createElement("li", {}, "Apple");
// const ul = React.createElement("ul", {style:{backgroundColor: "pink"}}, [l1, l2]);
const element = <h1>Hello, World</h1>;
const l1 = <li>Mango</li>
const l2 = <li>Apple</li>
const ul = <ul>{l1}{l2}</ul>
const container = (
    <div style={{backgroundColor: "pink"}}>

        <div>
            {element}
        </div>
        
        <div>
            {ul}
        </div>
        
    </div>


)
root.render(container);


// App.jsx file 