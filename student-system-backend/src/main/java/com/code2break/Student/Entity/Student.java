package com.code2break.Student.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Student {
    @Id
    private ObjectId id;
    @Generated
    private String admissionNo;

    private String studName;
    private String studDOB;
    private String studClass;
    private String studDivision;
    private  String studGender;

}
