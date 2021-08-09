import React, { Component } from 'react'

 class Greeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
      return this.state.isLoggedIn  && <div>welcome swathi</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div> welcome swathi</div> : 
        //     <div>welcome guest</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>welcome swathi</div>
        // } else {
        //     message = <div>welcome guest</div>
        // }
        // return<div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Swathi</div>
        // } else {
        //    return <div> Welcome Guest</div>
        // }
        // return (
        //     <div>
        //     <div> Welcome Swathi</div>
        //     <div> Welcome Guest</div>
        //     </div>
            
        // )
    }
}

export default Greeting
