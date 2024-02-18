import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Radio } from "antd";
import school from "../../../img/armypublicschool.jpg";
import aps from "../../../img/aps4.jpg";
import banner from "../../../img/Banner.jpg";
import admin from "../../../img/adminnew.jpg";
import "./DLogin.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AdminLogin,
  StudentLogin,
  TeacherLogin,
} from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

const DLogin = () => {


  // ************************************************
  // State variables
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Student");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });

  //Redux dispatch hook
  const dispatch = useDispatch();

  //redux selector hook to access state
  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  //Redux selector hook to access state 
  const { data } = useSelector((store) => store.auth);

  // Navigation hook
  const navigate = useNavigate();

  //Function to handle form submission
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //Logic to dispatch login action based on user type
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Student") {
        let data = {
          ...formvalue,
          studentID: formvalue.ID,
        };
        dispatch(StudentLogin(data)).then((res) => {
          // Handle login success and failure 
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Teacher") {
        let data = {
          ...formvalue,
          teacherID: formvalue.ID,
        };
        console.log(data, placement);
        dispatch(TeacherLogin(data)).then((res) => {

          //Handle login success and faiure
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);
            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);
            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {

          // Handle login success and failure
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };


   //Function to handle radio button change
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };


  // Redirect to the user is already authenticated
  if (data?.isAuthenticated === true) {
    return <Navigate to={"/dashboard"} />;
  }

  // Slider images
  const images = [
    { url: school },
    { url: aps },
    { url: banner }
  ];

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
        <h1>Army Public School</h1>
        <SimpleImageSlider
        width={700}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
          {/* <img src={school} alt="banner" /> */}
          
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Student" className={"radiobutton"}>
                Student
              </Radio.Button>
              <Radio.Button value="Teacher" className={"radiobutton"}>
                Teacher
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
