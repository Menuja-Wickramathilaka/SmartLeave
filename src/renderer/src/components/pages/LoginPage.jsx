/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Scl_Logo.png';
import { useState } from 'react';

function LoginPage() {

    const navigate = useNavigate();

    const [useUsername, setUserName] = useState('');
    const [usePassword, setPassword] = useState('');
    const [useError, setError] = useState('');  

    const handleLogin =(e)=>{
        e.preventDefault();

        const valideUserName = 'admin';
        const validePassword = '1234';

        if(useUsername==valideUserName && usePassword==validePassword){
            setError('');
            navigate('/dashboard');
        }else{
            setError('Invalid username or password');
        }
        
    }
  return (
    <>
    
        <div className="flex flex-col  items-center h-screen bg-[url(../assets/images/background.jpg)] bg-cover bg-center lg:pt-30 pt-20  ">
              <div className="absolute inset-0 bg-black/50"></div> 
              
              <div className="flex  w-[50vh] lg:w-[70vh] h-[15vh]  z-10 justify-between items-center pt-10 ">
                <div className="w-1/2  items-center flex">
                    <img src={logo} alt="" className='w-40 lg:w-50'/>
                </div>
                 <div className="w-1/2 justify-center items-center flex pr-12">
                    <p className="text-white font-sans text-4xl font-semibold lg:text-5xl text-shadow-lg/30">SmartLeave</p>
                </div>
              </div>

              <div className='flex bg-[#CFE0C3]/75 border  rounded-2xl shadow-lg p-4 lg:p-10 z-10 w-[60vh] h-[40vh] shadow-lg/30 flex-col items-center mt-30'>
                <h1 className='text-3xl font-semibold'>LOGIN</h1>
                <div className='lg:mt-8 grid flex mt-2'>
                    <form className="grid grid-flow-col grid-rows-3 gap-6" onSubmit={handleLogin}>
                        <div >
                            <input type="text" 
                            className='border border-white rounded-full bg-white shadow-lg/30 w-80 px-3 h-8' 
                            placeholder='UserName'
                            onChange={(e)=>setUserName(e.target.value)} />
                        </div>
                        
                        <div >
                            <input type="password" 
                            className='border border-white rounded-full bg-white shadow-lg/30 w-80 px-3 h-8' 
                            placeholder='Password'
                            onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                       
                        
                        <div className='flex justify-center items-center ' >
                            <button type="submit" className='bg-[#1F363D] text-white px-10 py-1  rounded-full shadow-lg/30'  >
                                Login
                            </button>
                        </div>
                         
                     </form>
                     <div className='flex justify-center items-center mt-2 '>
                         {useError && <p className="text-red-600">{useError}</p>}
                     </div>
                     
                </div>
                
              </div>
               
        </div>
    </>
  )
}

export default LoginPage
