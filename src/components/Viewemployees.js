// import React from 'react'
// import Employee from './Employee'


// const Viewemployees = ({employees}) => {
  

//   return (
//     <div>
//       <table class="table table-dark" align="center">
//   <thead>
//     <tr>
//       <th scope="col">Employee Id</th>
//       <th scope="col">Employee Name</th>
//       <th scope="col">Employee Address</th>
//       <th scope="col">Employee Mobile</th>
      
//       <th scope="col">Option</th>
//     </tr>
//   </thead>
//        {employees.map(function fn(employee,index)
//        {
//             return(
//             <tbody>
//                 <tr key={index}>
//                 <th scope="row">{employee.id} </th>
//                 <td>{employee.name}</td>
//                 <td>{employee.address}</td>
//                 <td>{employee.mobile}</td>        
//                 <td>
//                     <button type="button" class="btn btn-warning"  onClick={() => editEmployee(employee)} >Edit</button>  
//                     <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Delete</button>
//                 </td>
//                 </tr>
//             </tbody>
//             );
//             })}
//             </table>
//     </div>
//   )
// }

// export default Viewemployees
