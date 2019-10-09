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

//   handleSubmit = event => {
//     event.preventDefault()
//     console.log("handleSubmit state", this.state)
//     let formData = {firstname: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({ submittedData: dataArray})
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
          <form>
            <input
              type="text"
              onChange={event => this.props.handleFirstNameChange(event)}
              value={this.props.formData.firstName}
            />
            <input
              type="text"
              onChange={event => this.props.handleLastNameChange(event)}
              value={this.props.formData.lastName}
            />
            <button type="submit" >Submit</button>

          </form>
        </div>
      )
    }
  }


export default Form;