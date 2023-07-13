import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit"; // Material Design Bootstrap taking button as btn

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false); // When user click on start game then setTimeOut will be false
    inputRef.current.value && setName(inputRef.current.value); // Here reading the value provided in the input field
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
        marginTop: "300px",
      }}
    >
      <input
        type="text"
        placeholder="Enter Your Name 😊"
        ref={inputRef}
        className="form-control"
      />
      <MDBBtn style={{ width: "100%" }} className="mt-2" onClick={handleClick}>
        Start Game
      </MDBBtn>
    </div>
  );
};

export default Start;