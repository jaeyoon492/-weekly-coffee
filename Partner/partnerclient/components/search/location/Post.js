import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
  const address = props.address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.address); // 주소
    setAddress(data.address);
  };

  return (
    <>
      <DaumPostcode
        style={{
          display: "block",
          position: "absolute",
          top: "20%",
          width: "400px",
          height: "400px",
          padding: "7px",
          zIndex: 100,
          border: "solid 1px black",
          backgroundColor: "white",
        }}
        autoClose
        onComplete={onCompletePost}
      ></DaumPostcode>
    </>
  );
};

export default Post;
