import React, { Component } from "react";
import { connect } from "react-redux";
import { newId,checkLetter,checkePassword,ValidateEmail,validatePhone,isExistPhone } from "../Authtications/function";
import { addUser } from "../redux/actions/actions";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fName: "",
      lName: "",
      mail: "",
      password: "",
      department: "",
      phone: 0,
      id: 0,
      checker:'',
      bool:0
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      fName: this.state.fNname,
      lName: this.state.lName,
      mail: this.state.mail,
      phone: this.state.phone,
      password: this.state.password,
      department: this.state.department,
      id: newId(),
    };

    console.log(user);
    this.props.addUser(user);
    this.props.history.push("/home");
  };
  render() {
    // const error=this.state.checker.length>1?(<div className="alert alert-danger mt-5" role="alert">{this.state.checker}</div>):(null)
    // const Example = props => <div className={props.bool}/>Hello</div>
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">user name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">first name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">email</label>
                <input
                  type="text"
                  className="form-control"
                  name="mail"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">phone number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label>select department</label>
                <select
                  className="form-control"
                  name="department"
                  onChange={this.handleChange}
                >
                  <option value="Software Arch">Software Arch</option>
                  <option value="Back End">Back End</option>
                  <option value="Front End">Front End</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Create user
                </button>
              </div>
              <div  style={this.state.bool ? { display: 'block' } : { display: 'none' }}>
               <div className="alert alert-danger mt-5" role="alert">{this.state.checker}</div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addUser })(CreateUser);
