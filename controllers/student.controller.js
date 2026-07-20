const Student = require("../models/student.model");

// Get All Students
exports.getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json(students);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Get Student By ID
exports.getStudentById = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json(student);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Create Student
exports.createStudent = async (req, res) => {

    try {

        const student = new Student(req.body);

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update Student
exports.updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.json(student);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete Student
exports.deleteStudent = async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};