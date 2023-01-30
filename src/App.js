
import Bar from "./lib/Bar";
import Line from "./lib/Line";
import Pie from "./lib/Pie";
import { barData } from "./data/MockData";
import { lineData } from "./data/MockData";
import { pieData } from "./data/MockData"; 

export default function App() {
  return (


 
    <div>

    <div style ={{height: 500}}>

      <Bar data={barData}/>
      

    </div>

    <div style={{height: 500}}>

      <Line data={lineData}/>
    </div>
   
    <div style={{height: 500}}>

      <Pie data={pieData}/>
    </div>
  
    

    </div>
  )
}