import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
function App() {
  return (
    <div className="App">
       <div className="padding">
    <div className="col-md-8">
      <div className="card">
        <img
          className="card-img-top"
          src="https://i.imgur.com/K7A78We.jpg"
          alt="Card cap"
        />
        <div className="card-body little-profile text-center">
          <div className="pro-img">
           <ProfilePhoto/>
          </div>
          <FullName/>
          <Address/>
          <a href="#item" className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded">
            Follow
          </a>
          <div className="row text-center m-t-20">
            <div className="col-lg-4 col-md-4 m-t-20">
              <h3 className="m-b-0 font-light">34</h3>
              <small>Articles</small>
            </div>
            <div className="col-lg-4 col-md-4 m-t-20">
              <h3 className="m-b-0 font-light">434K</h3>
              <small>Followers</small>
            </div>
            <div className="col-lg-4 col-md-4 m-t-20">
              <h3 className="m-b-0 font-light">5454</h3>
              <small>Following</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
