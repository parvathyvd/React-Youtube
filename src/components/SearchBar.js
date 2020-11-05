import React from 'react';
import { Form } from 'semantic-ui-react';


class SearchBar extends React.Component {
    state = {term: ''}

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onAppSearch(this.state.term)

    }

    onInputChange = (e) => {
        this.setState({
            term : e.target.value
        })
    }


    render(){
        return(
            <div className="ui container" style={{margin: '20px 0px'}}>
            <form className="ui form" onSubmit={this.onSearchSubmit}> 
                <div className="field">
                <label>Search something on Youtube</label>
                <input type="text"  placeholder="Search" onChange={this.onInputChange} value={this.state.term}/>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar;