import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View,  Button,FlatList,AsyncStorage,TextInput,Keyboard, } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import { FloatingAction } from "react-native-floating-action";
import DialogInput from "react-native-dialog-input";
import Tab from "./components/NavTab";
import { Header } from "react-native-elements";


const actions = [
  {
    text: "Add Task",
    icon: <Icon name="plus" size={15} />,
    name: "bt_add",
    position: 1,
    color: "#D7DF01"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Insert a task", checked: false }],
      dialog: false,
      cont: 1
    };
  }

  sendInput = inputText => {
    this.setState({ dialog: false });
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

  showDialog = dialog => {
    this.setState({ dialog: dialog });
  };

  toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: "To Do List",
            style: { color: "#fff", fontSize: 20 }
          }}
          backgroundColor="#000000"
        />
        <Tab
          screenProps={{
            todos: this.state.todos,
            toggleCheck: this.toggleCheck,
            deleteTask: this.deleteTask
          }}
        />
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            this.setState({ dialog: true });
          }}
          color="#694fad"
          distanceToEdge={65}
          iconHeight={25}
          iconWidth={25}
        />
        <DialogInput
          isDialogVisible={this.state.dialog}
          title={"Insert Task"}
          hintInput={"Write Task Name"}
          submitInput={inputText => {
            this.sendInput(inputText);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
      </View>
    );
  }
}

/*export default createBottomTabNavigator({
  All: HomeScreen,
  Done: SettingsScreen,
  Unchecked: Unchecked,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'All') {
        iconName = `ios-list${focused ? '' : '-outline'}`;
      } else if (routeName === 'Done') {
        iconName = `ios-flash${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Unchecked'){
        iconName = `ios-checkbox${focused ? '': '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);*/