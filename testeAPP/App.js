//npx expo start
//npm install expo@~51.0.5

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function App() {

  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  )
}


