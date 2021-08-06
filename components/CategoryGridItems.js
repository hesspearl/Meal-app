import React from "react";
import { StyleSheet,
     Text,
      View,
       TouchableOpacity ,
       TouchableNativeFeedback,
       Platform
    } from "react-native";

const CategoryGridItems = props => {
    let TouchableCmp= TouchableOpacity
  
if (Platform.OS==='android' && Platform.Version >21){
    TouchableCmp=TouchableNativeFeedback
}

// merge colors with over all style settings
  return (
      <View style={styles.gridItem}>
    <TouchableCmp  onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width:0, hight: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding:20,
    justifyContent: "flex-end",
    alignItems:'flex-end'
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius:10,
    overflow:(Platform.OS==='android'&&Platform.Version>=21)?'hidden':"visible",
    elevation: 5,
  },

  text:{
     fontFamily:'open-sans-bold',
      fontSize:20,
      textAlign:'right'

    }
  
});

export default CategoryGridItems;
