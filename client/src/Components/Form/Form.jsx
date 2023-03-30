import React from 'react'
import '../Form/form.css'

const Form = () => {
  return (
    <div className="form py-6 px-10 m-8 bg-white border border-0 rounded-lg shadow-xl">
      <h4 className="text-2xl text-center font-bold mb-6 text-orange-800">Student Details</h4>
      <form action="" method="post">
        <div className="form-group">
            <div className="form-field py-1">
              <div className="mb-2">
                <label className="pr-2" htmlFor="name">Name</label>
              </div>
              <input type="text" id="name" className='w-full bg-slate-100 p-2' name="name" placeholder="Name" />
            </div>
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="dob">DOB</label>
              </div>
              <input type="date" id='dob' className='w-full bg-slate-100 p-2' name="dob" />
            </div>
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="class">Class</label>
              </div>
              <select name="class" className='w-full bg-slate-100 p-2' id="class">
                <option value="A" disabled selected>Select class</option>
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
            <div className=" form-field py-3">
              <div className="mb-2">
                <label className="pr-2" htmlFor="division">Division</label>
              </div>
              <select name="division" className='w-full bg-slate-100 p-2 ' id="division">
                <option value="A" disabled selected>Select division</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-field flex justify-center mt-4">
              <button type='submit' className='bg-orange-700 text-white rounded-lg p-2 w-full' name='submit'>Submit</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Form
