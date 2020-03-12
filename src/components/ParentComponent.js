import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
 
class ParentComponent extends React.Component {
  state = {
    firstName: "John",
    lastName: "Mac",
    submittedData: []
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleSubmit = event => {
    event.preventDefault()
    console.log("handleSubmit state", this.state)
    let formData = {firstname: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({ submittedData: dataArray})
  }

    render() {
      return (
        <div>
          <Form 
            formData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <DisplayData formData={this.state} />
        </div>
      )
    }
  }
  export default ParentComponent