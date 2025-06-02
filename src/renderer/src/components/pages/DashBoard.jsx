/* eslint-disable prettier/prettier */
import LogoConmponent from "../components/Logo";
import LogoutIcon from '@mui/icons-material/Logout';
function DashBoardPage(){

    const backonClick=(e)=>{
        e.preventDefault();
        window.history.back();
    }
    return(
        <>

        <div className="flex flex-col  items-center h-screen bg-[url(../assets/images/background.jpg)] bg-cover bg-center   ">
        <div className="z-10 h-15 w-full bg-[#D9D9D9] shadow-md flex items-center justify-end px-10">  
            <p className="px-10">Last sync: 2 days ago</p> 
            <button className="text-white rounded-full bg-[#70A9A1] w-30 h-10  ">Sync</button>
        </div>
        <div className="absolute inset-0 bg-black/50"></div> 


        <div className="z-10 flex w-full justify-end px-10">
            <button onClick={backonClick} className="text-white  rounded-full bg-[#70A9A1] w-35 h-12 mt-8 hover:bg-red-800">
           <LogoutIcon /> Logout
        </button>
        </div>
       <LogoConmponent />
       <div className="border border-white w-full h-96 flex  z-10 mt-20">
        
        </div> 
        </div>
       
        </>
    );
}
export default DashBoardPage;