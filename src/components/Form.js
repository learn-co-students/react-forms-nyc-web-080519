import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    fullName: ''
  }


  handleSubmit = (event) => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName}

    this.setState({fullName: `${formData.firstName} ${formData.lastName}`}) 
    
  }
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <form onSubmit={event=> this.handleSubmit(event)}>
        
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type='submit' name='submit'/>

      </form>
        Full Name: {this.state.fullName}

      </div>
    )
  }
}

export default Form;