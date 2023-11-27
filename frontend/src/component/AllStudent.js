import React, {useState , useEffect} from "react";
import axios from 'axios'

export default function AllStudent(){

    const [students , setStudents] = useState([]);

    useEffect(()=>{
        function GetAllData(){

            axios.get("http://localhost:8070/student/").then((res)=>{
                console.log(res.data);
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
            
        }
        GetAllData();

    },[])
    


    return(
        <div className="container">
            <h1>All Student </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.stdId}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}