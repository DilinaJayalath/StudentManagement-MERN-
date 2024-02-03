import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateStudent() {
  const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({
    name: "",
    age: "",
    gender: ""
  });
  const params = useParams();

  const getStudentData = () => {
    axios.get(`http://localhost:8070/student/get/${params.userID}`)
      .then((res) => {
        setData(res.data.user);
        setUpdatedData({
          name: res.data.user.name,
          age: res.data.user.age,
          gender: res.data.user.gender
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getStudentData();
  }, [params.userID]);

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8070/student/update/${params.userID}`, updatedData)
      .then((res) => {
        alert("User details updated successfully!");
        // Optionally, you can fetch the updated data again
        getStudentData();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <h1>Update Student Details</h1>

      <form>
        <label>Name:</label>
        <input type="text" name="name" value={updatedData.name} onChange={handleInputChange} />

        <label>Age:</label>
        <input type="text" name="age" value={updatedData.age} onChange={handleInputChange} />

        <label>Gender:</label>
        <input type="text" name="gender" value={updatedData.gender} onChange={handleInputChange} />

        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}
