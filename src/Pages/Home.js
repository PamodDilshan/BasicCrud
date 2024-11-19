import React, { useRef, useState } from 'react';
import './Home.css'
import { type } from '@testing-library/user-event/dist/type';

const Home = () => {
  const list = [
    {
      id: 1,
      name: "Saman"
    },
  ];
  
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1)

  return (
    <div className="home">
      <h1>Gneuro Engineering PVT Limited</h1>
    
      <AddList setList={setList}/>
      <form>
      {
        lists.map((current) => (
          updateState === current.id ? <EditList current={current}/> :
          <div key={current.id}>
            <div>{current.name}</div>
            <div>
              <button onClick={() => handleSubmit(current.id)}> Edit </button> 
              <button> Delete </button>
            </div>
          </div>
        ))
      }
    </form>
    </div>
  );

  function handleSubmit(id) {
    setUpdateState(id)
  }

}

function EditList({current}){
  return(
    <>
    <input type="text" name='name' value={current.name}/>
    <button type='submit'> Update </button>
    </>
  )
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