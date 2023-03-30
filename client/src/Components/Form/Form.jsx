import React, { useState } from 'react'
import '../Form/form.css'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [studentInfo, setStudentInfo] = useState()
  const onSubmit = (data) => {
    setStudentInfo(data)
    console.log(data)
  }
  console.log(errors)
  return (
    <div className="form py-6 px-10 m-8 bg-white border border-0 rounded-lg shadow-xl">
      <pre>{JSON.stringify(studentInfo, undefined, 2)}</pre>
      <h4 className="text-2xl text-center font-bold mb-6 text-orange-800">
        Student Details
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="form-field py-1">
            <div className="mb-2">
              <label className="pr-2" htmlFor="name">
                Name
              </label>
            </div>
            <input
              type="text"
              id="name"
              className="w-full bg-slate-100 p-2"
              name="name"
              placeholder="Name"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[a-zA-Z\s]*$/i,
                  message: 'Allowed only letters and spaces.',
                },
              })}
            />
          </div>
          <p className="text-rose-800">{errors.name?.message}</p>
          <div className=" form-field py-3">
            <div className="mb-2">
              <label className="pr-2" htmlFor="dob">
                DOB
              </label>
            </div>
            <input
              type="date"
              id="dob"
              className="w-full bg-slate-100 p-2"
              name="dob"
              {...register('dob', { required: 'DOB is required.' })}
            />
          </div>
          <p className="text-rose-800">{errors.dob?.message}</p>
          <div className=" form-field py-3">
            <div className="mb-2">
              <label className="pr-2" htmlFor="class">
                Class
              </label>
            </div>
            <select
              name="class"
              className="w-full bg-slate-100 p-2"
              id="class"
              {...register('class', { required: 'Class is required.' })}
            >
              <option disabled selected value>
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
          <p className="text-rose-800">{errors.class?.message}</p>
          <div className=" form-field py-3">
            <div className="mb-2">
              <label className="pr-2" htmlFor="division">
                Division
              </label>
            </div>
            <select
              name="division"
              className="w-full bg-slate-100 p-2 "
              id="division"
              {...register('division', { required: 'Division is required' })}
            >
              <option disabled hidden selected value>
                Select division
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <p className="text-rose-800">{errors.division?.message}</p>

          <div className="form-field py-3">
            <div className="mb-1">
              <label className="pr-2" htmlFor="division">
                Gender
              </label>
            </div>
            <div className="flex pl-0">
              <div className="pr-2">
                <label htmlFor="male" className="pr-2">
                  Male
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  {...register('gender', { required: 'Gender is required' })}
                />
              </div>

              <div className="pr-2">
                <label htmlFor="female" className="px-2">
                  Female
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  {...register('gender', { required: 'Gender is required' })}
                />
              </div>

              <div className="pr-2">
                <label htmlFor="others" className="px-2">
                  Others
                </label>
                <input
                  type="radio"
                  id="others"
                  name="gender"
                  value="others"
                  {...register('gender', { required: 'Gender is required' })}
                />
              </div>
            </div>
              <p className="text-rose-800">{errors.gender?.message}</p>
          </div>
          <div className="form-field flex justify-center mt-4">
            <button
              type="submit"
              className="bg-orange-700 text-white rounded-lg p-2 w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
