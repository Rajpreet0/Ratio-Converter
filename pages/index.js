import { useEffect, useState } from "react";


const Home = () => {

  const [ratioValue, setRatioValue] = useState();
  const [solution, setSolution] = useState();
  const [ratio, setRatio] = useState();


  const Calculate = (e) => {
    e.preventDefault();
    if(ratio == '100'){
      setSolution(ratioValue/100);
    } else if(ratio == '50') {
      setSolution( ratioValue/50);
    } else if(ratio == '10'){
      setSolution(ratioValue/10);
    } else {
      console.log("Error")
    }

    setRatioValue(0);
  }

 


  return (
    <div className="flex bg-gray-500 text-white min-h-screen flex-col items-center p-2">
      <h1 className='text-2xl tracking-widest md:text-4xl'>Ratio Converter</h1>
      <form>
        <div className='flex mt-[40px]'>
            <input 
            value={ratioValue}
            onChange={(e) => setRatioValue(e.target.value)}
            className='p-2 rounded bg-gray-600 shadow-inner outline-none text-white' 
            placeholder='Value (cm)'
            type='number'></input>
            <select className='ml-[15px] bg-gray-600 rounded p-2 outline-none'
            value={ratio} onChange={(e) => setRatio(e.target.value)}>
                <option selected disabled hidden>Select</option>
                <option value="10">1:10</option>
                <option value="50">1:50</option>
                <option value="100">1:100</option>
            </select>
        </div>
        <button 
        onClick={Calculate}
        className='mt-[15px] bg-gray-700 p-2 rounded-xl cursor-pointer hover:scale-105 transition-all'>Calculate</button>
      </form>
      <p className="text-xl">Ergebnis: {solution}</p>
      <h1 className="mt-[40px] text-2xl tracking-wider underline">List</h1>
      <table class="w-[70%] text-center bg-gray-700 rounded-xl m-4 text-xl md:w-[50%]">
         <thead>
            <tr>
              <th className="py-2">Value</th>
              <th >Ratio</th>
              <th>Calculation</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td>513.5</td>
                <td >1:50</td>
                <td>10.27</td>
              </tr>
              <tr>
                <td>88.5</td>
                <td >1:50</td>
                <td>1.77</td>
              </tr>
              <tr>
                <td>36.5</td>
                <td >1:50</td>
                <td>0.73</td>
              </tr>
              <tr>
                <td>138.5</td>
                <td >1:50</td>
                <td>2.77</td>
              </tr>
              <tr>
                <td>338.5</td>
                <td >1:50</td>
                <td>6.77</td>
              </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Home


