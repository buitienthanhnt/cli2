import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // npm install react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native-stack
// import { Icon } from '@expo/vector-icons';                             // chạy được cả trên web và android. xem icon: https://icons.expo.fyi || install: npm i @expo/vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';                 // xem icon https://oblador.github.io/react-native-vector-icons/
import AccountScreen from "./tabs/AccountScreen";
import HomeScreen    from "./tabs/HomeScreen";
import PaperScreen   from "./tabs/PaperScreen";
import MoreScreen from "./tabs/MoreScreen";

const Tab = createBottomTabNavigator();
const BottomTabs = ({props, route})=>{
    return(
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: 'tomato', // màu icon mặc định là xanh, dùng như này sẽ là màu cà chua.
                tabBarInactiveTintColor: 'gray', // gray cũng là màu mặc định luôn.
                headerShown: false               // ẩn phần tiêu đề bên trên của: Tab.Navigator
            })}
            // tabBarOptions={{ showLabel: false }} // ẩn bottom_tab title(tiêu đề của thanh dưới trang)
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarShowLabel: false,     // ẩn bottom_tab title(tiêu đề của thanh dưới trang)
                    tabBarIcon: ({ focused, color, size }) => {
                        return (<Icon name={"home"} size={26} color={color} />);
                    }
                }}
            />

            <Tab.Screen name="PaperScreen" component={PaperScreen}
                options={{
                    tabBarLabel: 'Papers',              
                    tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'truck' : 'list'} size={26} color={color} />
                }}
            />

            <Tab.Screen name="AccountScreen" component={AccountScreen} tabBarOptions={{ showLabel: false }}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ focused, color, size }) => (<Icon name={"bug"} size={26} color={color} />)
                }} />

            <Tab.Screen name="MoreScreen" component={MoreScreen} tabBarOptions={{ showLabel: false }}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ focused, color, size }) => (<Icon name={"windows"} size={26} color={color} />)
                }} />

        </Tab.Navigator>
    );
}

export default BottomTabs;