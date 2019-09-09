import React, {Component} from "react";

class Search extends Component{
    render(){
        return(
            <div className="inner-search-container">
                <input className="searchbox" placeholder="Search A Sneaker" type="text"></input>
            </div>
        )
    }
}

export default Search;