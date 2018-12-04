import React, { Component } from 'react'
// import {persons} from '../data/person';
import CardItem from './CardItem';

class Cards extends Component {
  
  render() {
    console.log('Cards')
    return (
      this.props.persons.map(person => {
        return (
          <CardItem key={person.id} {...person} />
        )
      })
    );
  }
}

export default Cards;

