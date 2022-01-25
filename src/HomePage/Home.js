import CardList from "../CardListComponent/CardList";
import './Home.css';

function Home(){

    return(
      <section>
          <div>
              <p className="pname">Student Management System (SMS) provides a simple interface for maintenance of student information. </p>
              <p className="pname">It can be used by educational institutes or colleges to maintain the records of students easily. </p>

              </div>
            <CardList></CardList>
       
        



      </section>
    );

}
export default Home;