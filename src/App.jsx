import './App.css'

import { StyleSheet, View } from "react-native-web";

import BemVindo from './telas/BemVindo';
import Pendencias from './telas/Pendencias';

// import { useState } from 'react'


function App() {
  
  return (
    <>
      <View style={styles.app}>
        <BemVindo />
        <Pendencias />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 400,
    backgroundColor: "lightblue"
  }
});


export default App
