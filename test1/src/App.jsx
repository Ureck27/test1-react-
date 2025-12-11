
function App(){
 // const Show =()=>{
    // var str ;
    // str = document.getElementById("sshow").value;
 // }
  const Show =()=>{
         document.getElementById("T").innerHTML=document.getElementById("sshow").value;
  }
  return(
 
      <div >
         <h1 id="T"></h1>
         <br />
         <input type="text" id="sshow"/>
         <br />
         <button onClick={Show}> submet</button>

      </div>
 
  )
}
  
export default App;
