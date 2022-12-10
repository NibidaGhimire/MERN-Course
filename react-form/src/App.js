import './App.css';
// import './style.css';

function App() {
  return (
  <>
    <div className="wrapper">
      <div className="register"><h1><u>Register</u></h1></div>
    
      <div className="form">
      <form method="POST">
          <label for="name">Name:</label> <br/>
              <div className="name">  
                  <input type="text" className="inputField" name="firstname" placeholder="First Name" />
                  <input type="text" className="inputField" name="lastname" placeholder="Last Name" />
              </div><br/>
        
        <label for="email">Email:</label>
              <input  type="email" className="inputField" name="email" placeholder="Enter your email" /><br/>
        <label for="password">Password:</label>
              <input type="password" className="inputField" min="5" name="password" placeholder="Enter your password" /><br/>
          
          
          <div className="addDob">
              <div className="add" >
                  <label for="address">Address:</label>
                  <br/>
                  <select name="location" className="sadd"> 
                      <option hidden ></option>
                      <option>Kathmandu</option>
                      <option>Chitwan</option>
                      <option>Pokhara</option>
                      <option>Lalitpur</option>
                      <option>Jhapa</option>
                      <option>Solukhumbu</option>
                      <option>Kanchanpur</option>
                      <option>Dharan</option>
                      <option>Rupandehi</option>
                      <option>Janakpur</option>
                  </select>
              </div>
              <div class="dob">
                  <label for="dob">Date of birth:</label>
                  <input type="date"  class="inputField"  name="" className="sdob" /><br/>
              </div>
          </div>
          
          
              <label for="gender">Gender:</label>
            <input type="radio" name="gender" value="Male"/>Male
            <input type="radio" name="gender" value="Female"/>Female
            <input type="radio" name="gender" value="Other"/>Other<br/><br/>
          <label for="password">Profile Photo:</label> 
              <input type="file" /><br/>

          <br/><br/>
          <div className="option">
              <input type="reset" name=""/>
            <input type="submit" value="Register" name=""/>
          </div>
      </form>
      </div>
      
    </div>
  </>
  );
}

export default App;