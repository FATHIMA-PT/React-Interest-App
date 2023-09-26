import { Stack, TextField,Button} from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0);
  const [principle,setPrinciple] = useState(0);
  const [rate,setRate] = useState(0);
  const [year,setYear] = useState(0);
  const [validprinciple,setvalidprinciple] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)

  const handleCalculate =(e) =>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!")
    }else{
      setInterest(Math.floor(principle*rate/100*year))
    }
  }

  const validateUserInput = (e)=>{
    // {key} = object -destructuring
      const {name,value} = e.target
      if(!!value.match(/^[0-9]+$/)){
        // valid expression
        if(name === "principle"){
          setPrinciple(value)
          setvalidprinciple(true)
        }else if(name === 'rate'){
           setRate(value)
           setValidRate(true)
        }else{
            setYear(value)
            setValidYear(true)
        }
      }else{
        // invalid expression
        if(name === "principle"){
          setPrinciple(value)
          setvalidprinciple(false)
        }else if(name === 'rate')
        {
          setRate(value)
          setValidRate(false)
       }else{
        setYear(value)
        setValidYear(false)
       }
      }
  }

  const handleReset = ()=>{
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
     
     <div style={{width:'600px'}} className='bg-light p-5 rounded '>
     <h3>Simple Interest Calculator</h3>
     <p >Calculate your simple interest easily</p>
     <div style={{height:'150px'}} className='interest-card w-100 bg-warning d-flex flex-column justify-content-center align-items-center rounded shadow text-light mt-3'>
      <h1> ₹ {' '} {interest}</h1>
      <p>Total Simple Interest</p>

     </div>

    <form className='mt-5' onSubmit={handleCalculate}>
      <div className='mb-3'>
      <TextField id="outlined-basic1" label="₹ Principle Amount" variant="outlined" className='w-100' value={principle || ""} onChange={(e)=>validateUserInput(e)} name='principle'/>
      </div>
     {!validprinciple &&
       <div className='mb-3 text-danger fw-bolder'>
       *Invalid Principle Amount
     </div>
     }

      <div className='mb-3'>
      <TextField id="outlined-basic2" label="Rate Of Interest (p.a) %" variant="outlined" className='w-100' value={rate || ""} onChange={(e)=>validateUserInput(e)} name='rate' />
      </div>
      {!validRate &&
        <div className='mb-3 text-danger fw-bolder'>
        *Invalid Rate 
      </div> 
      }
      

      <div className='mb-5'>
      <TextField id="outlined-basic3" label="Time Period" variant="outlined" className='w-100' value={year || ""} onChange={(e)=>validateUserInput(e)} name='year'/>
      </div>
      {!validYear &&
        <div className='mb-3 text-danger fw-bolder'>
        *Invalid Time Period
      </div>
      }


      <Stack direction="row" spacing={2}>
      <Button type='submit' style={{height:'70px',width:'250px'}} className='bg-dark' variant="contained" disabled={validprinciple && validRate && validYear?false:true}>Calculate</Button>
      <Button onClick={handleReset} style={{height:'70px',width:'250px'}}  variant="outlined">Reset</Button>
      </Stack>

    </form>
     </div>

    </div>
  );
}

export default App;
