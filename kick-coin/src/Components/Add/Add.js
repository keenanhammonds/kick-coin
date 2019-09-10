import React, {Component} from "react"

class Add extends Component{
    constructor(){
        super();
        this.state = {
            shoeName: ''
        }
    }
  
    shoeChangeHandler = event => {
        this.setState({
          shoeName: event.target.value
        });
        console.log(this.state)
      }

    render(){
        return(
            <div className="form-container">
                <div className="form-item"><input className="form-input" onChange={this.shoeChangeHandler} type="text" placeholder="Shoe Name"></input></div>
               <div className="form-item"><input className="form-input" onChange={this.urlChangeHandler} type="text" placeholder="where's the picture?" ></input></div>
            </div>
        )
    }
}

export default Add