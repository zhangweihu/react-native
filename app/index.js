/**
 * 
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Root } from "native-base";
import HomeScreen from './screen/home/HomeScreen';
import cameraScreen from './screen/camera/cameraScreen';
import ToastScreen from './screen/toast/toastScreen';
import ScanScreen from "./screen/scan/scanScreen";
import DrawerScreen from "./screen/drawer/drawerScreen";
const AppNavigator   = StackNavigator({      //StackNavigator 类似顶部导航条，用来跳转页面和传递参数。
        Main: {screen: HomeScreen,
               navigationOptions:{   //navigationOptions配置属性
               //  title:'', //title设置 导航栏和标签栏的title
               //  header:none, //header设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了
                // headerTitle:'',// headerTitle设置导航栏标题
                // headerBackTitle:null,//headerBackTitle设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                // headerTruncatedBackTitle:'',//设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。              
                // headerRight:'',//设置导航条右侧
                // headerLeft:'',//设置导航条左侧


                }
        },
        // Drawer: {screen: DrawerScreen},
        // Notification: {screen: NotificationScreen},
        // Scanner:{screen:QRScannerScreen}
        camera:{screen:cameraScreen},
        toast:{screen:ToastScreen,
            navigationOptions:{   //navigationOptions配置属性
                //  title:'', //title设置 导航栏和标签栏的title
                //  header:none, //header设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了
                  headerTitle:'Toast',// headerTitle设置导航栏标题
                 // headerBackTitle:null,//headerBackTitle设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                 // headerTruncatedBackTitle:'',//设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。              
                 // headerRight:'',//设置导航条右侧
                 // headerLeft:'',//设置导航条左侧
 
 
                 }
        },
        Scanner:{screen:ScanScreen},
        drawer:{screen:DrawerScreen}
    }, {
        headerMode: 'none',
    }
);
// const tabNavigator = TabNavigator({  //TabNavigator类似底部标签栏，用来区分模块。
//      home:{screen: HomeScreen},
//      camera:{screen:cameraScreen},
//      toast:{screen:ToastScreen},
//      Scanner:{screen:ScanScreen}
// })
// const drawerNavigator =DrawerNavigator({ //DrawerNavigator从App左侧滑出一个页面

// })
export default () =>
<Root>
  <AppNavigator />
</Root>

