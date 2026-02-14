import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GasStationPOSMockup from './gas_station_posmockup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GasStationPOSMockup />
    </>
  )
}

export default App
