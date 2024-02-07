import { useContext } from "react";
import { DataContext } from "../App";


const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    
    return(
        
        <div className="menu">
               <img src={"https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/95399213_1110446755995290_7097007511848353792_n.png?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=jAk-dZcPzagAX9KhNKU&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfDo8ytnMlX9yM2-gdDR89qNE87mTbyc-vCf8rA_S2D3mg&oe=65E7C972"} width="250px" height="250px" alt="Logo" />
            <h1>แบบทดสอบแฟนพันธุ์แท้เพลง<br></br>Sek Loso</h1>
           
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu;