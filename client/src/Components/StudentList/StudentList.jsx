import React, { useEffect, useState } from 'react'
import StudentService from '../../Services/StudentService';

const StudentList = () => {

  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        // calling api
        const response = await StudentService.getAllStudents();
        setStudents(response.data);
      } catch (error) {
          console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [])
  

  return (
    <div className="bg-white md:px-8 xl:px-12 py-8 m-4 md:m-8 rounded-lg shadow-xl overflow-scroll lg:overflow-hidden">
      <table className="border-spacing-2 w-full">
        <thead>
          <tr className="text-left text-sm md:text-md bg-slate-100">
            <th className='border border-0 border-orange-700 p-2'>Sl NO</th>
            <th className='border border-0 border-orange-700 p-2'>Name</th>
            <th className='border border-0 border-orange-700 p-2'>DOB</th>
            <th className='border border-0 border-orange-700 p-2'>Class</th>
            <th className='border border-0 border-orange-700 p-2'>Division</th>
            <th className='border border-0 border-orange-700 p-2'>Gender</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {students.map((student, index) => (
              
              <tr key={index}>
                <td className='border border-0 border-orange-700 p-2'>{student.admissionNo}</td>
                <td className='border border-0 border-orange-700 p-2'>{student.studName}</td>
                <td className='border border-0 border-orange-700 p-2'>{student.studDOB}</td>
                <td className='border border-0 border-orange-700 p-2'>{student.studClass}</td>
                <td className='border border-0 border-orange-700 p-2'>{student.studDivision}</td>
                <td className='border border-0 border-orange-700 p-2'>{student.studGender}</td>
              </tr>
            ))}
            
          </tbody>
        )}
      </table>
    </div>
  )
}

export default StudentList
