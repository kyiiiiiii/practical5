import React, {Component} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import HomeScreen from "./screens/Homescreen";
import Calculate from "./screens/CalculateScreen";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props=> <CustomDrawerComponent {...props}/>}
        >
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={20} color={color} />
            ),
            drawerLabelStyle:{
              fontSize: 23
            }
          }}
        />
        <Drawer.Screen 
          name="Calculate"
          component={Calculate}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="man-outline" size={20} color={color} />
            ),
            drawerLabelStyle:{
              fontSize: 23
            }
          }}  
        />  
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

class CustomDrawerComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={{flex:1}}>
        <DrawerContentScrollView>
          <View style={{alignItems:'center', backgroundColor: 'pink'}}>
            <Image
              style={{
                width: 80,
                height: 80
              }}
              source={require('./assets/images/utarlogo.png')}
            />
            <Text>My Profile Picture</Text>
          </View>

          <View style={{backgroundColor: '#fff', flex: 1, paddingTop: 10}}>
            <DrawerItemList {...this.props} />
          </View>
        </DrawerContentScrollView>

        <DrawerContentScrollView>
          <View style={{borderTopWidth: 1, borderTopColor: 'grey'}} />
          <TouchableOpacity style={{paddingVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Ionicons name="exit-outline" size={23}/>  
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 23,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    );
  }
}

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  text: {
    fontSize: 48,
    color: 'black'
  },
  input: {
    textAlign: 'center',
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10
  }
});