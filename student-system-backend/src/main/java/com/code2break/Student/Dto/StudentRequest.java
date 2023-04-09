package com.code2break.Student.Dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class StudentRequest {

    @NotEmpty(message = "Name field shouldn't be empty")
    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "Allowed only letters and spaces.")
    private String studName;

    @NotEmpty(message = "DOB field shouldn't be empty")
    private String studDOB;

    @NotEmpty(message = "Class field shouldn't be empty")
    private String studClass;

    @NotEmpty(message = "Division field shouldn't be empty")
    private String studDivision;

    @NotEmpty(message = "Gender field shouldn't be empty")
    private  String studGender;
}
