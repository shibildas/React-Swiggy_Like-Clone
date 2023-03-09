import { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
const heading = createElement(
  "h1",
  { id: "titile", key: "welcome" },
  "Welcome React"
);
const Heading2 =()=> (
  <div className="sample" key={"heading2"}>
  <h1>
  Heading 2
  </h1></div>
);
const heading1 = createElement("ul", { id: "title", key: "ul" }, [
  createElement("li", { key: "about" }, "About"),
  createElement("li", { key: "support" }, "Support"),
  createElement("li", { key: "contact" }, "Contact"),
]);

const HeaderComponent = ()=>{
  return (<div className="headercomponent" key={"compo"}>
    <h1>First Component</h1>
    <h2>this is h2 tag</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur distinctio nobis asperiores explicabo voluptates officia, odit unde maxime quisquam expedita obcaecati aperiam, nostrum quod doloribus qui! Asperiores, eveniet facilis!</p>
    </div>);
}
const NextComponent = ()=>(
<div className="nextcomponent" key={"next"}>
    <h1>Next Component</h1>
    <Heading2/>
    {Heading2()}
    <h2>this is h2 tag</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur distinctio nobis asperiores explicabo voluptates officia, odit unde maxime quisquam expedita obcaecati aperiam, nostrum quod doloribus qui! Asperiores, eveniet facilis!</p>
    </div>
);
const container = createElement("div", { id: "container"}, [
  heading,
  heading1,<HeaderComponent/>,<NextComponent/>
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

