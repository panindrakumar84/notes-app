import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { NoteCard } from '../../components/Cards/NoteCard'
const Home = () => {
  return (
    <>
      <Navbar/>

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard title='meeting on 7th april' date='3rd Apr 2024' content="Meeting on 7th April meeting on 7th April"
          tags = "#meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
          />
          <NoteCard title='meeting on 7th april' date='3rd Apr 2024' content="Meeting on 7th April meeting on 7th April"
          tags = "#meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
          />
          <NoteCard title='meeting on 7th april' date='3rd Apr 2024' content="Meeting on 7th April meeting on 7th April"
          tags = "#meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
          />
          <NoteCard title='meeting on 7th april' date='3rd Apr 2024' content="Meeting on 7th April meeting on 7th April"
          tags = "#meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
          />

        </div>
      </div>
    </>
  )
}

export default Home