import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  const getAllData = () => {
    axios.get("http://localhost:8070/student/")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (studentId) => {
    // Make a DELETE request to delete the student with the given ID
    axios.delete(`http://localhost:8070/student/delete/${studentId}`)
      .then((res) => {
        alert("Student deleted successfully!");
        // Update the students list after deletion
        getAllData();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <h1>All Students</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.stdId}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <Link to={`/update/${student._id}`} className="btn btn-success">
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
