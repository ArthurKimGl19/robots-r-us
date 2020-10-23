import React from "react";

export default function FollowButton({ robotName, buttonValue, setFollowing, handleRemoveFollowingClick, handleAddFollowingClick, following }){
  return (
  <button
    className="follow-button"
    value={robotName}
    onClick={(e) => {
      if (following.indexOf(e.target.value) !== -1) {
        let newArray = following.filter(
          (robotName) => robotName != e.target.value
        );
        setFollowing(newArray);
        handleRemoveFollowingClick(e.target.value);
      } else {
        setFollowing([...following, e.target.value]);
        handleAddFollowingClick(e.target.value);
      }
    }}
  >
    {buttonValue}
  </button>
  )
};
