/**
 * 更改程序入口
 */
import { AppRegistry } from "react-native";
import AppNavigator from './app/index';
//如果使用template 创建，需要将‘MarnoRN’替换成你自己项目的名称
AppRegistry.registerComponent('demo', () => AppNavigator);