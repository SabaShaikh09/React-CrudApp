//import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';

import { Typography } from '@material-ui/core';


const foot={
    backgroundColor: 'brown',
    border: '4px solid black',
    textAlign:' center',
    padding: '5px',
    color:'white',
    fontFamily: 'Island Moments',
    height:'300px',
    width:'100%'
}
const Icons1={
    marginLeft:' 35%',
    marginRight:'10%'
}
const Icons={
    padding:'10px',
    color:' white'
}

function Footer(){
    return(
       
    
     //  <footer className="foot">

     <footer style={foot}>

        <p>Author: Neosoft TEchnologies
        <a href="mailto:hege@example.com">saba.shaikh@gmail.com</a></p>
        <p>@Copyright 2022 Saba Shaikh</p>
        <div style={Icons}>
            <div style={Icons1}>
            <p>@<AttachEmailIcon></AttachEmailIcon>Contact Emailid</p>
                <p>@<CallIcon></CallIcon>022-234252688</p>
            </div>
            <div style={Icons1}>
            <p>@<InstagramIcon></InstagramIcon> Follow us on  </p>
                <p>@<FacebookIcon></FacebookIcon>follow us on</p>
            </div>
                
                
            </div>
       
        </footer>
    );
}

export default Footer;