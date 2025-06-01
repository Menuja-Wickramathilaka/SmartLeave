/* eslint-disable prettier/prettier */
function DashBoardPage(){

    const backonClick=(e)=>{
        e.preventDefault();
        window.history.back();
    }
    return(
        <>
        <button onClick={backonClick}>
            back
        </button>
        </>
    );
}
export default DashBoardPage;