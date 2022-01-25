import './Card.css';


function Card(props){
    return(
      
        <div className="myCard">
          <figure className="Imagee">
            <img src={props.imgPath} alt="random pictures"></img>
            <figcaption>{props.title}</figcaption>
           </figure>
            <a href={props.infoLink}>Click here for more info</a>
        </div>
    );
}

export default Card;