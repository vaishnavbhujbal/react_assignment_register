import React from "react";

function Form() {
  

 

  return (
    <div className="main">
      <p className="sign" align="center">
        Register
      </p>
      <form className="form1">
    
        <br />
        <div className="Container" align="center">
        
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          required
        />
        <br />
        <br />

        <input
          type="text"
          id="lname"
          align="center"
          name="lname"
          placeholder="Last Name"
          required
        />
        <br />
        <br />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Confirm Password"
          required
        />
        <br />
        <br />

        <button type="submit">Register</button>
        <br />
        </div>
      </form>
    </div>
  );
}

export default Form;
