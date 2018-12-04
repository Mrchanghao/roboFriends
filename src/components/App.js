import React, { Component } from 'react'
import SearchBox from './SearchBox'
import Cards from './Cards';
import Scroll from './Scroll';

import {connect} from 'react-redux';
import {setSearchField, requestPersons} from '../actions';
import Loader from './Loader';
import Header from './Header';

class App extends Component {

  componentDidMount() {
    this.props.requestPersons()
  }


  handleChange = (e) => {
    
    this.props.setSearchField(e.target.value);
  }

  render() {
    const {search} = this.props;
    const filterPersons = this.props.persons.filter(person => {
      return person.name.toLowerCase().includes(search.searchField.toLowerCase())
    });

  if(this.props.loading) {
    return <Loader />
  } else {
    return (
      <div className='tc'> 
        <Header />
        <SearchBox handleChange={this.handleChange} />
        <Scroll>
          <Cards persons={filterPersons} />
        </Scroll>
      </div>
    )
   }
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    persons: state.persons.persons,
    loading: state.persons.loading
  }
}

export default connect(mapStateToProps, {setSearchField, requestPersons})(App);

