/* eslint-disable prettier/prettier */
import logo from '../../assets/images/Scl_Logo.png';

function LogoConmponent(){
    return(
        <>
          <div className="flex  w-[50vh] lg:w-[70vh] h-[15vh]  z-10 justify-between items-center pt-10 ">
                        <div className="w-1/2  items-center flex">
                            <img src={logo} alt="" className='w-40 lg:w-50'/>
                        </div>
                         <div className="w-1/2 justify-center items-center flex pr-12">
                            <p className="text-white font-sans text-4xl font-semibold lg:text-5xl text-shadow-lg/30">SmartLeave</p>
                        </div>
      </div>
        </>
    );
}

export default LogoConmponent;