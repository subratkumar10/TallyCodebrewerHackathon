import React,{ useState } from 'react';
import { useNavigate } from 'react-router'
const Register = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({username:'', email: '', password: ''});
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: credentials.username, email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            // localStorage.setItem('token', json.authtoken); 
            document.cookie = "authtoken=" + json.authtoken + ";path=/";
            navigate('/', { replace: true })
        }
        else{
            alert('Invalid credentials');
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
          UserName
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            aria-describedby='emailHelp'
            value={credentials.username}
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            aria-describedby='emailHelp'
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
