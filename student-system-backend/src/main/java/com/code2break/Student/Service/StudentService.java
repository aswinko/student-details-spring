package com.code2break.Student.Service;

import com.code2break.Student.Entity.Student;
import com.code2break.Student.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    public List<Student> allStudents(){
        return studentRepository.findAll();
    }
}
