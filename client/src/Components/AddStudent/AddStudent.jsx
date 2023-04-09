import React, { useState } from "react";
import "./addStudent.css";
import { useForm } from "react-hook-form";
import StudentService from "../../Services/StudentService";
import SuccessAlert from "../Alert/SuccessAlert";

const AddStudent = () => {
  // const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // React form hook validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [studentInfo, setStudentInfo] = useState({
    studName: "",
    studDOB: "",
    studClass: "",
    studDivision: "",
    studGender: "",
  });

  const onSubmit = (data) => {
    setStudentInfo(data);
    // console.log(data)

    StudentService.saveStudent(data)
      .then((response) => {
        // console.log(response);
        if (response.status === 201) {
          setShowSuccessModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(data)
    // console.log(studentInfo)
  };

  const handleChange = (e) => {
    e.preventDefault();
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SuccessAlert
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
      <div className="form py-6 px-4 md:px-6 xl:px-12 m-4 xl:m-8 bg-white border border-0 rounded-lg shadow-xl">
        <h4 className="text-2xl text-center font-bold mb-6 text-orange-800">
          Student Details
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="form-field py-1">
              <div className="mb-2">
                <label className="pr-2" htmlFor="studName">
                  Name
                </label>
              </div>
              <input
                type="text"
                id="studName"
                className="w-full bg-slate-100 p-2"
                name="studName"
                onInput={(e) => handleChange(e)}
                value={studentInfo.studName}
                placeholder="Name"
                {...register("studName", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Allowed only letters and spaces.",
                  },
                })}
              />
            </div>
            <p className="text-rose-800">{errors.studName?.message}</p>
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="studDOB">
                  DOB
                </label>
              </div>
              <input
                type="date"
                id="studDOB"
                className="w-full bg-slate-100 p-2"
                name="studDOB"
                onInput={(e) => handleChange(e)}
                {...register("studDOB", { required: "DOB is required." })}
              />
            </div>
            <p className="text-rose-800">{errors.studDOB?.message}</p>
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="studClass">
                  Class
                </label>
              </div>
              <select
                name="studClass"
                onInput={(e) => handleChange(e)}
                className="w-full bg-slate-100 p-2"
                id="studClass"
                defaultValue=""
                {...register("studClass", { required: "Class is required." })}
              >
                <option disabled value="">
                  Select class
                </option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="V1">V1</option>
                <option value="V11">V11</option>
                <option value="V111">V111</option>
                <option value="1X">1X</option>
                <option value="X">X</option>
                <option value="X11">X11</option>
                <option value="X12">X12</option>
              </select>
            </div>
            <p className="text-rose-800">{errors.studClass?.message}</p>
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="studDivision">
                  Division
                </label>
              </div>
              <select
                name="studDivision"
                onInput={(e) => handleChange(e)}
                className="w-full bg-slate-100 p-2 "
                id="studDivision"
                defaultValue=""
                {...register("studDivision", {
                  required: "Division is required",
                })}
              >
                <option disabled hidden value="">
                  Select division
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <p className="text-rose-800">{errors.studDivision?.message}</p>

            <div className="form-field py-3">
              <div className="mb-1">
                <label className="pr-2" htmlFor="studGender">
                  Gender
                </label>
              </div>
              <div className="flex pl-0">
                <div className="pr-3 flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="studGender"
                    value="male"
                    onInput={(e) => handleChange(e)}
                    className="w-4 h-4"
                    {...register("studGender", {
                      required: "Gender is required",
                    })}
                  />
                  <label htmlFor="male" className="pl-2">
                    Male
                  </label>
                </div>

                <div className="pr-3 flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="studGender"
                    value="female"
                    onInput={(e) => handleChange(e)}
                    className="w-4 h-4"
                    {...register("studGender", {
                      required: "Gender is required",
                    })}
                  />
                  <label htmlFor="female" className="px-1">
                    Female
                  </label>
                </div>

                <div className="pr-3 flex items-center">
                  <input
                    type="radio"
                    id="others"
                    name="studGender"
                    value="others"
                    onInput={(e) => handleChange(e)}
                    className="w-4 h-4"
                    {...register("studGender", {
                      required: "Gender is required",
                    })}
                  />
                  <label htmlFor="others" className="px-1">
                    Others
                  </label>
                </div>
              </div>
              <p className="text-rose-800">{errors.studGender?.message}</p>
            </div>
            <div className="form-field flex justify-center mt-4">
              <button
                // type="submit"
                // onClick={saveStudent}
                className="bg-orange-700 text-white rounded-lg p-2 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
