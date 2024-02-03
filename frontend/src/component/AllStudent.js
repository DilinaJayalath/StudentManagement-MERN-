import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllStudent() {
  const [students, setStudents] = useState([]);
  const [originalStudents, setOriginalStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getAllData = () => {
    axios.get("http://localhost:8070/student/")
      .then((res) => {
        setStudents(res.data);
        setOriginalStudents(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (studentId) => {
    axios.delete(`http://localhost:8070/student/delete/${studentId}`)
      .then(() => {
        alert("Student deleted successfully!");
        getAllData();
        setSearchQuery(''); // Clear the search query after deletion
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter students based on the search query as you type
    const filteredStudents = originalStudents.filter(student =>
      student.name.toLowerCase().includes(query) ||student.stdId.toLowerCase().includes(query)
    );
    setStudents(filteredStudents);
  };

  return (
    <div className="container">
      <h1>All Students</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

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
