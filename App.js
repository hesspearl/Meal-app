import React, {useState} from 'react';

import * as font from 'expo-font';
import {AppLoading} from 'expo'
import MealsNavigator from './navigation/MealNavigation'
import {createStore , combineReducers} from 'redux'
import mealsReducer from './store/reducers/meals'
import {Provider } from 'react-redux'

// to combine all reducers 
const rootReducer = combineReducers({
  // name of the reducers to use as keys
  meals:mealsReducer
})
const store = createStore(rootReducer)



const fetchFonts=()=>{
   return font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
const [fontLoaded, setFontLoaded] = useState(false)

if(!fontLoaded){
  return(
  <AppLoading startAsync={fetchFonts} 
  onFinish={()=> setFontLoaded(true)}
  onError={(err)=>console.log(err)}
  />)
}

  return <Provider store={store}>
  <MealsNavigator/>
  </Provider>


}
