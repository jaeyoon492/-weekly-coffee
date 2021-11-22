import React, { useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import Post from "./location/Post";

interface Prop {
  addData: (data: string) => void;
}

const Search = ({ addData }: Prop) => {
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (address !== "") {
      addData(address);
    }
  }, [address]);

  return (
    <>
      {address === "" && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          검색
        </button>
      )}

      {popup && (
        <>
          <Post address={address} setAddress={setAddress}></Post>
        </>
      )}
    </>
  );
};

export default Search;
