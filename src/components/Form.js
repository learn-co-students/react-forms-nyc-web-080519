import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     checkbox: false,
//     submittedData: []
//   }

 

//   handleCheckbox = event => {
//     this.setState({ checkbox: !event.target.checked })
//   }


//   getInitialState =  () => {
//     return {
//       checkbox: false
//     };
//   }


//   render() {
//     return (
//       <form onSubmit={event => this.handleSubmit(event)}>
//         <input type="text" name="firstName" onChange={event => props.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => props.handleLastNameChange(event)} value={this.state.lastName} />
//         <input type="checkbox"  onClick={this.handleCheckbox} checked={ !this.state.checkbox} />
//         <button type="submit" >Submit</button>
//       </form>
//     )
//   }
// }

  class Form extends React.Component {
    render() {
      return (
        <div>
          <form onSubmit={event => this.props.handleSubmit(event)}>
            <input
              type="text" name="firstName"
              onChange={event => this.props.handleChange(event)}
              value={this.props.formData.firstName}
            />
            <input
              type="text" name="lastName"
              onChange={event => this.props.handleChange(event)}
              value={this.props.formData.lastName}
            />
            <button type="submit" >Submit</button>

          </form>
        </div>
      )
    }
  }


export default Form;