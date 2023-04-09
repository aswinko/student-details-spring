import React from 'react'
import AddStudent from './AddStudent/AddStudent'
import StudentList from './StudentList/StudentList'
import SuccessAlert from './Alert/SuccessAlert'

function StudentPage() {

  return (
    <div className="container mx-auto flex w-full flex-col md:flex-row">
      <div className="left w-full md:w-5/12">
        <AddStudent />
      </div>
      <div className="right w-full pt-2">
            <StudentList />
      </div>
    </div>
  )
}

export default StudentPage
