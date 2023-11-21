import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card">
      {userData && (
        <>
          <div className="img-box">
            <img src={userData.picture.large} />
          </div>
          <div className="content">
            <h3>
              {userData.name.first}
              <span>{userData.name.last}</span>
            </h3>
            <br />

            <div>
              {" "}
              <h3>{userData.gender}</h3>{" "}
            </div>
            <br />

            <h3>{userData.phone}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
