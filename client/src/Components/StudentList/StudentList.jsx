import React, { useEffect, useState } from "react";
import StudentService from "../../Services/StudentService";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const StudentList = () => {

  let num = 1;

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState(null);
  const [sorted, setSorted] = useState({ sorted: "name", reversed: false });

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
  }, []);

  // Sorting by name
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const studentsCopy = [...students];

    studentsCopy.sort((userA, userB) => {
      const nameA = `${userA.studName}`;
      const nameB = `${userB.studName}`;

      if (sorted.reversed) {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });
    setStudents(studentsCopy);
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <div className="bg-white md:px-8 xl:px-12 py-8 m-4 md:m-8 rounded-lg shadow-xl overflow-scroll lg:overflow-hidden">
      <table className="border-spacing-2 w-full">
        <thead>
          <tr className="text-left text-sm md:text-md bg-slate-100">
            <th className="border border-0 border-orange-700 p-2"><span>Sl no</span></th>
            <th className="border border-0 border-orange-700 p-2"><span>Admission no</span></th>
            <th
              onClick={sortByName}
              className="border border-0 border-orange-700 p-2 flex"
            >
              <span className="pr-2">Name</span>
              <span className="mt-1">{sorted.sorted === "name" ? renderArrow() : null}</span>
            </th>
            <th className="border border-0 border-orange-700 p-2">
              <span>DOB</span>
            </th>
            <th className="border border-0 border-orange-700 p-2">
              <span>Class</span>
            </th>
            <th className="border border-0 border-orange-700 p-2">
              <span>Division</span>
            </th>
            <th className="border border-0 border-orange-700 p-2">
              <span>Gender</span>
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="border border-0 border-orange-700 p-2">
                  {num++}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.admissionNo}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.studName}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.studDOB}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.studClass}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.studDivision}
                </td>
                <td className="border border-0 border-orange-700 p-2">
                  {student.studGender}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default StudentList;
