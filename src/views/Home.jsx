import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {deleteUser} from '../redux/actions/actions'

class Home extends Component {

  render() {
    console.log(this.props);
    const { users } = this.props;
    const userView=users.map(user=>{
      return(
        <div className="col-md-4 mb-4" key={user.id}>
        <div className="card text-center">
          <div className="card-header">
            <h4>{user.name}</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">{user.mail}</h5>
            <p className="card-text">{user.department}</p>
            <div className="text-center">
              <Link className="btn btn-primary mr-2" to={`/home/edituser/${user.id}`}>
                Edit user
              </Link>
              <button className="btn btn-danger ml-2" onClick={(e)=>{this.props.deleteUser(user.id)}}>delete user</button>
            </div>
          </div>
        </div>
      </div>
    )
    })
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
              {userView}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
      return{
        users: state.users
      }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    deleteUser:(id)=>{dispatch(deleteUser(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)