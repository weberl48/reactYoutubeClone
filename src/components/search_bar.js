import React,{ Component } from 'react';

//new class with all of the functionality React.Component has
class SearchBar extends Component {
  //state is a js object, each instance of a class based componet has a copy of state. initalized using constructor function
  constructor(props) {
    //calling parent method Componet with super
    super(props);
    //state set as this.state
    this.state = { term:'' }
  }
  //methods
  render() {
    //manipulate state with this.setState method built into react
    //this.state.term is set to inputs value
    return (
    <div className='search-bar'>
      <input
            value = {this.state.term}
            onChange={(event) => this.onInputChange( event.target.value )} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
