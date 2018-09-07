import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View,  Button,FlatList,AsyncStorage,TextInput,Keyboard, } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import List from "./List";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            //iconName = `ios-list${focused ? '' : '-outline'}`;
            <Icon name="list-alt" size={24} color={tintColor} />
        }
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
          data={this.props.screenProps.todos}
          renderItem={({ item }) => (
            <List
              task={item}
              toggleCheck={this.props.screenProps.toggleCheck}
              deleteTask={this.props.screenProps.deleteTask}
            />
          )}
          keyExtractor={(item, index) => item.id}
          style={{ flex: 1, marginTop: 20, width: "100%" }}
       />
        </View>
      );
    }
  }
  
