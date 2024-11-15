import React, { useRef, useState } from 'react';
import './Home.css'

const Home = () => {
  const list = [
    {
      id: 1,
      name: "Saman"
    },
  ];
  
  const [lists, setList] = useState(list);

  return (
    <div className="home">
      <h1>Gneuro Engineering PVT Limited</h1>
      <AddList setList={setList}/>
      {
        lists.map((current) => (
          <div key={current.id}>
            <div>{current.name}</div>
            <div>
              <button> Edit </button> 
              <button> Delete </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}
function AddList({setList}) {
    const nameRef = useRef()

    function handleSubmit(event){
      event.preventDefault();
      const name = event.target.elements.name.value;
      const newlist = {
        id: 3,
        name
      }
      setList((prevList)=> {
        return prevList.concat(newlist )
      })
      nameRef.current.value= ""
    }
  return(
    <form className='addForm' onSubmit={handleSubmit}>
      <input type='text' name='name' placeholder='Enter Name' ref={nameRef}/>
      <button type='submit'>Add</button>
    </form>
  )
}


export default Home;
