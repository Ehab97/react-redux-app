import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/actions/actions";
class EditUser extends Component {
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
      // id: 0,
      // userUpdate:{}
    };
    this.name=React.createRef();
     this.input = React.createRef();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.alue,
    });
  };
  handleSubmit = (e) => {
      e.preventDefault();
      // let id=match.params.id;
      const user = this.props.user;
      let userUpdate = {
        name: this.state.name,
        fName: this.state.fNname,
        lName: this.state.lName,
        mail: this.state.mail,
        phone: this.state.phone,
        password: this.state.password,
        department: this.state.department,
        // id: match.params.id,
      };
      //  userUpdate={...userUpdate,user}
      console.log(userUpdate,user);
    // this.props.updateUser(userUpdate);
    // this.props.history.push("/home");
  };
  render() {
    const user = this.props.user;
    
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
                  defaultValue={user.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">first name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.fName}
                  name="fName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">last name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.lName}
                  name="lName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">email</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.mail}
                  name="mail"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">phone number</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.phone}
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label>select department</label>
                <select
                  className="form-control"
                  defaultValue={this.state.department}
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
                  defaultValue={user.password}
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  save
                </button>
              </div>
              <div className="alert alert-danger mt-5" role="alert"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    user: state.users.find((user) => user.id == id),
  };
};
export default connect(mapStateToProps)(EditUser);
