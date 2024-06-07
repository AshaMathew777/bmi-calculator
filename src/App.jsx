
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setbmi] = useState(null)
  const [heading, setHeading] = useState('BMI Value');
  


  //conditional rendering
  const [isWeight,setisWeight] = useState(true)
  const [isHeight,setisHeight] = useState(true)

  const Validate = (e)=>{
   //console.log(e.target.value); 
   //console.log(e.target.name); 

   let value=e.target.value
   let name=e.target.name
   console.log(!!value.match(/^[0-9]*$/));
    
   if(!!value.match(/^[0-9]*$/)){
    if(name=="weight"){
      setWeight(value)
      setisWeight(true)
     }
     else{
      setHeight(value)
      setisHeight(true)
     }
   }
   else{

    if(name=="weight"){
      setWeight(value)
      setisWeight(false)
   }
   else{
      setHeight(value)
      setisHeight(false)
   }
  }
}
  const handleReset =()=>{
    setWeight(0)
    setHeight(0)
    setbmi(null)
    setisWeight(true)
    setisHeight(true)
    setHeading('BMI Value')
    
  }
  const calculateBmi = () => {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setbmi(bmiValue);
      console.log(bmiValue);
      setHeading(bmiValue)
      
  }




  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light p-4 rounded' style={{width:'400px',backgroundImage:`url("https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg")`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'right'}}>
        <h1 className='d-flex justify-content-center align-items-center'>Body Mass Index</h1>
        {/* <p>“Body mass Index is value derived from the mass and height of a person”</p> */}


        <div className='mt-4 rounded shadow bg-info d-flex justify-content-center align-items-center p-2'>
          <h4 id='setHeading' className='fs-1 fw-bolder text-primary'>{heading}</h4>
          
          

        </div>

        <form className='mt-4'>
          <div className='mb-3'>

          <TextField id="outlined-basic" value={weight || ""} name='weight' label="Enter your Weight " variant="outlined" className='w-100 mt-1' onChange={(e)=>Validate(e)}/>
          {!isWeight &&<p className='text-danger'>*invalid input</p>}
          </div>
          <div className='mb-3'>
          <TextField id="outlined-basic" value={height || ""} name='height' label="Enter your Height" variant="outlined"  className='w-100 mt-1' onChange={(e)=>Validate(e)}/>
           {!isHeight &&<p className='text-danger'>*invalid input</p>}
          </div>
          <div className='d-flex justify-content-between w-100 mt-4'>
          <Button variant="contained" color="success" style={{width:'170px',height:'60px'}} onClick={calculateBmi} disabled={isWeight&&isHeight?false:true} >Calculate</Button>
          <Button variant="outlined"  style={{width:'170px',height:'60px' ,borderColor:'black',color:'darkblue'}} onClick={handleReset}>Reset</Button>

          </div>

        </form>
      </div>
        </div> 
    </>
  )
}

export default App
