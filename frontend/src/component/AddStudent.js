import React,{useState} from "react";

function AddStudent(){

    return(
        <div className="container">
            <form action="#" method="POST">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="IT22588128"></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Dlina"></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Age</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="21"></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Male"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default AddStudent;