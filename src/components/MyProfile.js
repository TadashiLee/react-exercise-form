import React, {Component} from 'react';
import './myProfile.less';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class MyProfile extends Component {
  
  state = {
    name: '',
    gender: 'male',
    description:'',
    check:false,
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]:event.target.value,
    });
  };

  handleCheckChange = (event)=>{
    this.setState({
      check:event.target.checked,
    });
  };

  handleFormSubmit=()=>{
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="container">
        <h1>My Form</h1>
        <form className="my-form" onSubmit={this.handleFormSubmit}>
        <div class="form-row"></div>
          <div className="form-group col-md-4">
          <label htmlFor="name">Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={(e)=>this.handleFieldChange("name", e)}
                className="form-control"
                id="name"
              />
          </div>

          <div className="form-group col-md-4">
              <label htmlFor="gender">Gender</label>
              <select value={this.state.gender} onChange={(e)=>this.handleFieldChange("gender", e)} id="gender" className="form-control">
                <option value ="male">Male</option>
                <option value ="female">Female</option>
              </select>
          </div>
          <div className="form-group col-md-4">
          <label htmlFor="description">Gender</label>
            <textarea value={this.state.description} onChange={(e)=>this.handleFieldChange("description", e)} id='discription'  className="form-control"></textarea>
          </div>
          <div className="form-group col-md-4">
          <p><input type="checkbox"
             name="category" 
             value="{this.state.check}" 
             onChange={(e)=>this.handleCheckChange(e)}/>I have ready the terms of conduct </p>
          </div>
          <input type="submit" 
          value="Submit" 
          className="btn btn-primary" 
          disabled={!this.state.name ||!this.state.gender ||!this.state.description ||!this.state.check}
          />
        </form>
      </div>
    );
  }
}

export default MyProfile;

