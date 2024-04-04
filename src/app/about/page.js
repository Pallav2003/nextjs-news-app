"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch("https://api.github.com/users/Pallav2003");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>About Us from Github API</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Username: {userData.login}</p>
          <p>Location: {userData.location}</p>
          <p>
            Avatar:{" "}
            <img src={userData.avatar_url} alt="User Avatar" className="w-24" />
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
