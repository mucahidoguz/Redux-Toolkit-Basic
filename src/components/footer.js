import React from "react";

const Footer = (props) => {
  return (
    <div className="container my-4"
    style={{marginTop:"400px"}}>
      <div
        className="row"
        style={{
          color: "white",
          width: "100%",
          height: "100%",
          border: "4px solid black",
          borderRadius: "5px"
        }}
      >
        <strong className=" py-4"
          style={{
            textShadow: "5px -5px 10px red ",
            fontSize: "xxx-large",
            fontFamily: "Jokerman",
            color: "black",
            backgroundColor: "Beige",
            textAlign:"center"
            
          }}
        >
          REDUX   TOOLKIT
        </strong>
      </div>
    </div>
  );
};

export default Footer;
