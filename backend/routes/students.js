const router = require("express").Router();
let student = require("../models/student");

router.route("/add").post((req,res)=>{
    const stdId = req.body.stdID;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new student({
        stdId,
        name,
        age,
        gender
    })


    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })


})


router.route("/").get((req,res)=>{
      student.find().then((students)=>{
        res.json(students);
      }).catch((err)=>{
        console.log(err);
      })
})



router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {stdID, name , age , gender} = req.body;

    const updateStudent ={
        stdID ,
        name ,
        age ,
        gender
    }

    const update = await student.findByIdAndUpdate(userId , updateStudent).then(()=>{
            res.status(200).send({
            status:"User Updated"
        })
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({
                status:" Error with upadating data",
                error: err.message
            })
    })


})


router.route("/delete/:id").delete(async(req,res)=>{
    const userId = req.params.id;

    const deleteUser = await student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({
            status:"User Deleted",
        })
            }).catch((err)=>{
                console.log(err.message),
                res.status(500).send({
                    status:"Error with deleteing data",
                    error:err.message
        })
    })
})


router.route("/get/:id").get(async(req,res)=>{
    const userId = req.params.id;

    const user = await student.findById(userId).then((students)=>{
        res.status(200).send({
            status:"data Fetched",
            user:students
        })
            
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({
                status:"Error with get data",
                error:err.message
            })
    })
})



module.exports = router;