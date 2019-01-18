import React, { Component } from 'react';
import FormToggle from './FormToggle';

export default class App extends Component {
  render() {
    return (
      <>
        <FormToggle name="testing" id="testing1" value="1" type="radio" />
        <label htmlFor="testing1">Do the thing?</label>
        <br />
        <FormToggle name="testing" id="testing2" value="2" type="radio" />
        <label htmlFor="testing2">Do the thing?</label>
      </>
    );
  }
}
