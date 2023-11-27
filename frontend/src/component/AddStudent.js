import React,{useState} from "react";
import axios from 'axios';

function AddStudent(){

    const [stdID , setID] = useState("");
    const [name , setName]= useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    
    function sendData(e){
        e.preventDefault();
        const newStudent ={
            stdID,
            name,
            age,
            gender
        }
        console.log(newStudent);
        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            
           
            setID("");
            setName("");
            setAge("");
            setGender("");

            alert("Student added successfully");

        }).catch((err)=>{
           
            alert(err.message); 
        })
    }


    

    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="IT22588128"
                    onChange={(e)=>{
                        setID(e.target.value);
                    }}
                    ></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Dlina"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    ></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Age</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="21"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    ></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Male"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}
                    ></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default AddStudent;