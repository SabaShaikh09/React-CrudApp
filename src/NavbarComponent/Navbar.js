import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import {useState} from 'react';

let Navbar = () => {

  let [searchId, setUser] = useState();

  const update = (e) => {
      setUser(e.target.value);
      console.log(searchId);
  }

    return(
      <div>
        <nav className="Nav">
        <NavLink to="#">Student Management System</NavLink>
        <NavLink to="/">Home</NavLink> 
             <NavLink to="/students/showall"><HomeIcon></HomeIcon></NavLink> 
            <NavLink to="/students/showall">Show Students</NavLink>
            <NavLink to="/students/add">Add  Student</NavLink> 
           
        </nav>

        <div className="d-flex justify-content-center mt-3">

<input type="number" onChange={update} value={searchId} placeholder="Enter ID "></input>
<NavLink to={`/student/search/${searchId}`}> 
    <button className="btn btn-info mx-2" >Search</button>
</NavLink>

</div>
     </div>
    
   
    
    );
}

export default Navbar;