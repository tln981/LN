import React from 'react'
const users=[{
  firstName: 'Nam',
  lastname: 'Tran',
  email:'tln9815571@gmail.com',
},
{
  firstName: 'Na',
  lastname: 'Tra',
  email:'tln981571@gmail.com',
},
{
  firstName: 'm',
  lastname: 'n',
}
]
function getFullName(first, last)
{
  return first + " " + last
}
function User(props) {
  const user=props.use
   const elenment=user.email? <div><h1>{getFullName(user.firstName,user.lastname)}</h1> <div style={{color:'gray'}}>{user.email}</div></div>:<div><h1>{getFullName(user.firstName,user.lastname)}</h1> <div style={{color:'red'}}><i>khong co email</i></div></div>
  
 
  return elenment
}
function App(){
const e=users.map(user =>{
  return <User use={user} />
})
return e
}
export default App;
