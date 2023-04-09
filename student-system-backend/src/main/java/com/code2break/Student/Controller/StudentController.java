package com.code2break.Student.Controller;

import com.code2break.Student.Dto.StudentRequest;
import com.code2break.Student.Entity.Student;
import com.code2break.Student.Service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return new ResponseEntity<List<Student>>(studentService.allStudents(), HttpStatus.OK);
    }

    @PostMapping
    public  ResponseEntity<Student> createStudent(@Valid @RequestBody StudentRequest studentRequest) {
        return new ResponseEntity<>(studentService.saveStudent(studentRequest), HttpStatus.CREATED);
    }
}
