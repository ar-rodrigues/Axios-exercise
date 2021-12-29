import React,{useState, useEffect} from 'react';
import ApiDataServices from './services/api'

function App() {
  const [data, setData] = useState()

  useEffect(()=>{
    const fetch = async ()=>{
      try {
        const response = await ApiDataServices.getAll();
        console.log(response)
        setData(response.data);
      } catch (err){
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetch()
  }, [])
  return (
    <main>
    <h1>This is: </h1>
      {data}
    </main>
  );
}

export default App;


