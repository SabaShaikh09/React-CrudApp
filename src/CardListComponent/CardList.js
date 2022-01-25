import './CardList.css';
import Card from '../CardComponent/Card';
import CardArray from './CardArray';
import CardArr from './CardArr';

function CardList(){
    return(
      <div>
  <section className="myList">{
    CardArray.map(ele=>
          
              <Card imgPath={ele.myPath} title={ele.myTitle} infoLink={ele.myLink}></Card>
          )//map ended
    }</section>
    <div>
              <p className="pname">Student information system deals with all kind of student details,</p> 
              <p className="pname">academic related reports, college details, course details, curriculum, batch details,</p>
               <p className="pname">placement details and other resource related details too.</p>
          </div>
          <section className="myList">
              {/* <Card imgPath="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shalimarmumbai.com%2Fdastarkhwan.htm&psig=AOvVaw09zwv3agLlnox6BFW_X4_c&ust=1641398520871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCCj5O8mPUCFQAAAAAdAAAAABAk" title="beautiful scenary" infoLink="https://babeljs.io/"></Card>
              <Card imgPath="https://picsum.photos/id/67/200/300" title="mountains" infoLink="https://en.wikipedia.org/wiki/Kangchenjunga"></Card>
              <Card imgPath="https://picsum.photos/id/45/200/300" title="taxi yellow" infoLink="https://www.imdb.com/title/tt0075314/"></Card> */}

               <Card imgPath={CardArr[0].myPath} title={CardArr[0].myTitle} infoLink={CardArr[0].myLink}></Card>
              <Card imgPath={CardArr[1].myPath} title={CardArr[1].myTitle} infoLink={CardArr[1].myLink}></Card>
              <Card imgPath={CardArr[2].myPath} title={CardArr[2].myTitle} infoLink={CardArr[2].myLink}></Card>
             
           {/* <section>
           {
              CardArray.forEach(obj=>(<b>{obj.myTitle}</b>))
          }
         </section>  */}
          
          </section>
          </div>
    );
}

export default CardList;