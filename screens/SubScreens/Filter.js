import React, { useState ,useEffect , useCallback} from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Colors from "../../constant/Colors";
import DefaultText from '../../components/DefaultText'
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButtons'
import {useDispatch} from 'react-redux'
import { setFilters } from "../../store/actions/meals";

const FilterSwitch = props => {
return  <View style={styles.filterContainer}>
    <DefaultText style={{fontSize:18}}>{props.text}</DefaultText>
    <Switch
      value={props.value}
      onValueChange={props.onChange}
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Colors.primaryColor}
    />
  </View>;
};

const Filter = props => {

  console.log(Filter.navigationOptions)

 const [isGlutenFree, setIsGlutenFree] = useState(false);
 const [isLactoseFree, setIsLactoseFree] = useState(false);
 const [isVegan, setIsVegan] = useState(false);
 const [isVegetarian, setIsVegetarian] = useState(false);

 const dispatch=useDispatch()
 
 const saveFilter= useCallback(()=>{
  const appliedFilter={
    glutenFree:isGlutenFree,
    lactoseFree:isGlutenFree,
    vegan:isVegan,
    vegetarian:isVegetarian

  }

  dispatch(setFilters(appliedFilter))
 } , [isVegetarian,isGlutenFree,isLactoseFree,isVegan , dispatch])

 useEffect(() => {
   props.navigation.setParams({save:saveFilter})
  
 }, [saveFilter])


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter</Text>
      <FilterSwitch
        text="Gluten Free"
        value={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
        <FilterSwitch
        text="Lactose Free"
        value={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
        <FilterSwitch
        text="Vegan"
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
        <FilterSwitch
        text="Vegetarian"
        value={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};
 Filter.navigationOptions= navData =>{
   return{  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
    <Item title='Menu'
    iconName='menu-unfold' 
    onPress={()=>{navData.navigation.toggleDrawer()}}
    />
  </HeaderButtons>,
  
   
  headerRight: ( 
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
    <Item title='save'
    iconName='save' 
    onPress={navData.navigation.getParam("save")
    }
    />
  </HeaderButtons>)
  
}
 }


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical:15
  }
});

export default Filter;
