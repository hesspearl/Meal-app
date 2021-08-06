import React from 'react'
import {Platform} from 'react-native'
import{HeaderButton}from 'react-navigation-header-buttons'
import {  AntDesign} from '@expo/vector-icons'
import Colors from '../constant/Colors'

const CustomHeadErButton = props=>{
    return<HeaderButton {... props} 
     IconComponent={AntDesign}
     iconSize={23}
     color={Platform.OS==='android'? "white" :Colors.primaryColor}

     />
}

export default CustomHeadErButton;