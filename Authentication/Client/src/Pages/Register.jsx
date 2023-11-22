import { useState } from 'react'
import axios from'axios'


function Register() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function registerUser(e) {
    e.preventDefault()
    const response = await axios.post('http://localhost:1337/api/register',{
    method:'POST',
    headers: {
        'content-Type' : 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.data
    console.log(data)
  }

  

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
           />
           <br />

           <input 
           type="text"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder='Email'
            />
            <br />

          <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          />
          <br />

          <input type="submit" value="Register" />

        </form>
      </div>
    </>
  )
}

export default Register
