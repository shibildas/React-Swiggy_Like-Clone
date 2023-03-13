import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props)
        //create State
        this.state={
            userInfo:{
                name:"Brocamp",
                type:"Admin"
            }
        }
        console.log("Constructor child");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shibildas")
        const json = await data.json()
        this.setState({
            userInfo: json,
        })
        console.log(json);

            console.log("componentDidMount child " + this.props.name);
            
        
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount(){
        console.log("Unmounting About Page");
    } 

    render(){
        const {userInfo} = this.state
      
        console.log("render child"+ this.props.name);
        return (

            <>
        <h1>Profile Class Component</h1>
        <h2>Name: {userInfo?.name}</h2>
        <img src={userInfo?.avatar_url} alt="avatar" />

        </>
            )
    }




}
export default ProfileClass