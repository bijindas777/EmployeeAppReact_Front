import axios from "axios";
import { useEffect,useState } from "react";
import Form from 'react-bootstrap/Form'
import './Employee.css';

function Employee() {

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [address,setAddress] =useState("");
  const [mobile,setMobile] = useState("");
  const[employees,setUsers] = useState([]);

  useEffect(()=>{
    (async () => await Load())();
  },[]);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/api/employees"
    );
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://127.0.0.1:8000/api/save",
      {
      
        name: name,
        address: address,
        mobile: mobile
      
      });
        alert("Employee Registation Successfully");
        setId("");
        setName("");
        setAddress("");
        setMobile("");
        Load();
      
      }
  catch(err)
      {
        alert("User Registation Failed");
      }
 }
 async function editEmployee(employees)
   {
    setName(employees.name);
    setAddress(employees.address);
    setMobile(employees.mobile);
    setId(employees.id);
    
   }
 
 
 
   async function DeleteEmployee(id)
   {
      
        await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
        alert("Employee deleted Successfully");
        Load();
  
   }
 
 
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        
        await axios.put("http://127.0.0.1:8000/api/update/"+ employees.find(u => u.id === id).id || id,
       {
         id: id,
         name: name,
         address: address,
         mobile: mobile
      
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
      
       }
   catch(err)
       {
         alert("User Registation Failed");
       }
  }
  return (
    <div className="App">
<div className="container mt-4">
 <h1>Employee </h1>
<form className="FormMain">
  <div className="form-group">
    <label for="exampleInputEmail1">Employee Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter Name"
    value={name}
    onChange={(event)=>{
      setName(event.target.value);
    }}
    />
  </div>
  <div class="form-group">
    <label for="exampleInputAddress">Employee Address</label>
    <input type="text" class="form-control" id="address"  placeholder="Enter Address"
    value={address}
    onChange={(event)=>{
      setAddress(event.target.value);
    }}
    />
  </div>

  <div class="form-group">
    <label for="exampleInputMobile">Employee Mobile</label>
    <input type="text" class="form-control" id="mobile"  placeholder="Enter Mobile"
    value={mobile}
    onChange={(event)=>{
      setMobile(event.target.value);
    }}
    />
  </div>
  <div>
  <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
  <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
 

  </div>
</form>
</div>

<table class="table table-List mt-4" align="center ">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Employee Address</th>
      <th scope="col">Employee Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {employees.map(function fn(employee)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{employee.id} </th>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
                <td>{employee.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editEmployee(employee)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
    </div>


  );
}

export default Employee;
