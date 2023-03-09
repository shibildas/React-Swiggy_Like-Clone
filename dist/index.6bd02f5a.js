const heading = React.createElement("h1", null, "Welcome React");
const heading1 = React.createElement("h1", {
    id: "title"
}, "Welcome React");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading1
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // function x() {
 //   const a=10
 // }
 // var xyz = 30;
 // x();
 //     var x = function (){
 //       console.log("Anonymous");
 //     }
 //    const fn = ()=>{
 //     console.log("Fat Arrow");
 //    }
 // fn();
 // console.log(this);
 // const obj = {
 //   fn:function(){
 //     console.log(this);
 //   },
 //   fn2:()=>{
 //     console.log(this);
 //   }
 // }
 // obj.fn();
 // obj.fn2();
 // function x(){
 //   console.log(this);
 //   function y(){
 //     console.log(this);
 //     function z(){
 //       console.log(this);
 //     }z();
 //   }y();
 // }x();
 // const person = {
 //   name: "Shibil",
 //   print: function(){
 //     console.log(this);
 //   }
 // }
 // const person2 = {
 //   name: "Kavya"
 // }
 // function x(){
 //   console.log(this);
 // }
 // person.print();
 // person.print.call();
 // person.print.call(this);
 // person.print.call(person2);
 // Function.prototype.call(this)
 // const obj = {
 //   firstName:"Shibil",
 //   printName: ()=>{
 //     console.log(this);
 //   },
 //   printName2: function (){
 //     console.log(this);
 //   }
 // }
 // obj.printName()
 // obj.printName.call()
 // obj.printName2.call()

//# sourceMappingURL=index.6bd02f5a.js.map
