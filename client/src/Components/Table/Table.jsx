import React from 'react'

const Table = () => {
  return (
    <div className="bg-white px-12 py-8 m-8 rounded-lg shadow-xl">
      <table className="border-spacing-2 w-full">
        <thead>
          <tr className="text-left bg-slate-100">
            <th className='border border-0 border-orange-700 p-2'>Sl NO</th>
            <th className='border border-0 border-orange-700 p-2'>Name</th>
            <th className='border border-0 border-orange-700 p-2'>DOB</th>
            <th className='border border-0 border-orange-700 p-2'>Class</th>
            <th className='border border-0 border-orange-700 p-2'>Division</th>
            <th className='border border-0 border-orange-700 p-2'>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-0 border-orange-700 p-2'>1</td>
            <td className='border border-0 border-orange-700 p-2'>Aswin</td>
            <td className='border border-0 border-orange-700 p-2'>01/03/2002</td>
            <td className='border border-0 border-orange-700 p-2'>X1</td>
            <td className='border border-0 border-orange-700 p-2'>A</td>
            <td className='border border-0 border-orange-700 p-2'>Male</td>
          </tr>
          <tr>
            <td className='border border-0 border-orange-700 p-2'>2</td>
            <td className='border border-0 border-orange-700 p-2'>Aswin</td>
            <td className='border border-0 border-orange-700 p-2'>01/03/2002</td>
            <td className='border border-0 border-orange-700 p-2'>X1</td>
            <td className='border border-0 border-orange-700 p-2'>A</td>
            <td className='border border-0 border-orange-700 p-2'>Female</td>
          </tr>
          <tr>
            <td className='border border-0 border-orange-700 p-2'>3</td>
            <td className='border border-0 border-orange-700 p-2'>Aswin</td>
            <td className='border border-0 border-orange-700 p-2'>01/03/2002</td>
            <td className='border border-0 border-orange-700 p-2'>X1</td>
            <td className='border border-0 border-orange-700 p-2'>A</td>
            <td className='border border-0 border-orange-700 p-2'>Male</td>
          </tr>
          <tr>
            <td className='border border-0 border-orange-700 p-2'>4</td>
            <td className='border border-0 border-orange-700 p-2'>Aswin</td>
            <td className='border border-0 border-orange-700 p-2'>01/03/2002</td>
            <td className='border border-0 border-orange-700 p-2'>X1</td>
            <td className='border border-0 border-orange-700 p-2'>A</td>
            <td className='border border-0 border-orange-700 p-2'>Others</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
