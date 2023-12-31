import Gameox from "./Gamebox"
import {useState , useRef} from "react";
import "./index.css";
import List from "./list"

const TicToe = () =>{

 const [state, setState] = useState(Array(9).fill(null));
 const [isXturn, setXturn] = useState(true);
 const[notes, setNotes] = useState("");
 const[Addlist, setAddList] = useState([]);
//  const ref1 = useRef();

const handleAdd =()=>{
     const newAddList = [...Addlist, notes]
     setAddList(newAddList);
     setNotes("");
}

const [abc, setAbc] = useState("")


 const HandleClick = (index) => {

    if(!state[index]){
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "0";
        setState(copyState);
        setXturn(!isXturn);
    }
}

const Winner =() =>{
    const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    for(let i of arr){
        const[a,b,c] = i;
         if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
            return state[a];
         }
         
    }
    return false;
}
const iswin = Winner();

    return  iswin ? (<h1>{iswin} {"  "}Winner</h1>) : (
        <div >
            <div className="Board">
            <div className="row">
            {/* //passing x ki value as callback function */}
                <Gameox x={() => { HandleClick(0)}} value={state[0]}/>   
                <Gameox  x={() => { HandleClick(1)}} value={state[1]}/>
                <Gameox  x={() => { HandleClick(2)}} value={state[2]}/>
            </div>
            <div className="row">
                <Gameox  x={() => { HandleClick(3)}} value={state[3]}/>
                <Gameox  x={() => { HandleClick(4)}} value={state[4]}/>
                <Gameox  x={() => { HandleClick(5)}} value={state[5]}/>
            </div>
            <div className="row">
                <Gameox x={() => { HandleClick(6)}} value={state[6]}/>
                <Gameox  x={() => { HandleClick(7)}} value={state[7]}/>
                <Gameox  x={() => { HandleClick(8)}} value={state[8]}/>
            </div>

            {/* const elt = ref1.current
                elt.style.color ="red" */}

            <button onClick={()=>{setAbc("abcefghijkl")}}>click here</button>
         {/* //   <p ref={ref1}>checng tis color</p> */}

         <p className={abc}>Chemge the color </p>

         </div>

         <div>

               <input type="text" placeholder="enter" value={notes} onChange={(event)=>{
                setNotes(event.target.value)}}></input>


               <button onClick={handleAdd}>ADD</button>
               <p>LIST</p>

               {Addlist!=[] && Addlist.map((obj, index)=>{
                return (
                    <div>
                        <li key={index}> {obj} </li>

                    </div>
                )
               })}
              
         </div>

        </div>
)
}



export default TicToe;