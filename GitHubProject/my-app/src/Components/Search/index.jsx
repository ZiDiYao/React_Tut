import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron"> 

        <h3 className='jumbortron-heading'>  Search Github Users </h3> 
        <div> 
            <input type="text" placeholder='enter the name that u search'/> <br /> <button name='btn'> Search</button>

        </div>

      </section>
    )
  }
}
