import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header";
import UserForm from "./components/userForm";
import { setFirstName, setLastName, setEmail } from "./Redux/Slices/userSlice";

function App() {
  //const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(">> APP USER STATE", userState);

  return (
    <div className="Container">
      <Header />
      <div style={{ marginLeft: "15%" }} className="row my-5 py-5 ">
        <div className=" col-6 d-flex flex-column justify-content-center">
          <div className="form-group text-center my-3 w-75">
            <label>First Name</label>
            <input
              type="text"
              className="form-control text-center"
              placeholder="Write to first name"
              onChange={(event) => dispatch(setFirstName(event.target.value))}
            />
          </div>
          <div className="form-group text-center my-3 w-75">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control text-center"
              placeholder="Write to last name"
              onChange={(event) => dispatch(setLastName(event.target.value))}
            />
          </div>
          <div className="form-group  text-center my-3 w-75">
            <label>E-Mail</label>
            <input
              type="text"
              className="form-control  text-center"
              placeholder="Write to email"
              onChange={(event) => dispatch(setEmail(event.target.value))}
            />
          </div>
        </div>
        <div className="col-6 my-5 py-5">
          <UserForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
