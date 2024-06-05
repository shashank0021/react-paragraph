import { useState } from 'react'
import './App.css'
import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  const [count, setCount] = useState(0)
  const [para,setpara] = useState([])


  function paragraphs()
  {
    if(count<=0)
      {
        alert("value should be in positive")
      }
      else{
    let p=[]
    for(let i=1;i<=count;i++)
      {
        p[i]=i+': '+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      
      setpara(p)
    }

  }

  return (
    <>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <div className="text">
        <labels>
        Paragraphs : 
        </labels>
        <input type='number' onChange={(e)=> setCount(e.target.value)} />
      <button onClick={paragraphs}> GENAERATE</button>
      
      </div>


      <div className='paras'>
        {
          para.map((element) => {
           return <p className='para'>{element}</p>
          })
        }
       
      </div>


    </>
  )
}

export default App
