import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  useEffect(()=> {
    console.log('Bu Her render edildiginde calisir')
  })

  useEffect(()=>{
    console.log('bu ilk render edildiginde calisir ')
  }, [])

  useEffect(()=>{
    console.log('bu ilk render edildiginde ve firstName state i degistiginde calisir')
  }, [
    firstName
  ])

  useEffect(()=>{
    console.log('bu ilk render edildiginde ve lastName state i degistiginde calisir')
  }, [
    lastName
  ])

  useEffect(()=> {
    console.log('bu ilk render edildiginde ve firstName ya da lastName degisitiginde render edilir')
  }, [
    firstName,
    lastName
  ])

  return (
    <>
      <button onClick={()=>setFirstName('yunus emre')}>Isimi Degistir</button>
      <button onClick={()=>setLastName('er')}>soyadi Degistir</button>
    </>
  )
}

export default App
