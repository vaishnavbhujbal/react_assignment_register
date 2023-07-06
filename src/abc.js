import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';

function AddStudent() {
  const history = useNavigate(); // get the history object from React Router

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    alert('Student entry created by Teacher'); // display the alert message
    history.push('/students'); // navigate to the '/students' page
    // TODO: send the form data to the server
  }

  return (
    <div className='MainArea'>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prn">PRN</label>
          <input type="text" id="prn" name="prn" required />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" required />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="semester">Semester</label>
          <input type="text" id="semester" name="semester" required />

          <label htmlFor="year">Year</label>
          <input type="text" id="year" name="year" required />

          <label htmlFor="acadyear">Academic Year</label>
          <input type="text" id="acadyear" name="acadyear" required />

          <label htmlFor="branch">Branch</label>
          <input type="text" id="branch" name="branch" required />

          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
