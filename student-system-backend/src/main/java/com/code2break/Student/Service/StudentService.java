package com.code2break.Student.Service;

import com.code2break.Student.Dto.StudentRequest;
import com.code2break.Student.Entity.Student;
import com.code2break.Student.Repository.StudentRepository;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private StudentRepository studentRepository;

    //Function for get all students
    public List<Student> allStudents(){
        return studentRepository.findAll();
    }

    //function for Save students
    @Transactional
    public Student saveStudent(StudentRequest studentRequest) {
        Student student= Student
                .build(ObjectId.get(), generateAdmissionNumber(), studentRequest.getStudName(),
                        studentRequest.getStudDOB(), studentRequest.getStudClass(),
                        studentRequest.getStudDivision(), studentRequest.getStudGender());
        return mongoTemplate.save(student);
    }


    //Generate Admission number like ("R-000")
    public String generateAdmissionNumber() {
        Document lastRecord = mongoTemplate.getCollection("students")
                .find()
                .sort(com.mongodb.client.model.Sorts.descending("admissionNo"))
                .limit(1)
                .first();

        if (lastRecord == null) {
            return "R-001";
        } else {
            String lastAdmissionNumber = lastRecord.getString("admissionNo");
            int number = Integer.parseInt(lastAdmissionNumber.substring(2));
            return String.format("R-%03d", number+1);
        }
    }
}
