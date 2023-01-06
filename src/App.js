import { useSelector, useDispatch } from "react-redux";
import { showUser } from "./redux/action";
import './App.css';

function App() {
  const { posts, loading, user } = useSelector((state) => 
    ({ ...state.data })
  );
  const dispatch = useDispatch();

  const users = (posts ? posts.data : null);
  const singleUser = (user ? user.data : null);

  const userImg = (singleUser ? singleUser.avatar : "user_img.png"); 
  const userName = (singleUser ? singleUser.first_name + " " + singleUser.last_name : "Name"); 
  const userEmail = (singleUser ? singleUser.email : "User Info"); 

  // console.log("User", user);
  if(loading){
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="App">

        <div className="card">
          <img className="image" src={userImg} alt="Avatar" />
          <div className="container">
            <h3>{userName}</h3>
            <p>{userEmail}</p>
          </div>
        </div>
        
        {
          users && users.map((user, idx) => 
            <button className="button-17" key={idx} onClick={() => dispatch(showUser(user.id))}>{user.id}</button>
          )
        }

    </div>
  );
}

export default App;
