import React, {Component} from "react";
import {Text,Navigator} from "react-native";
import {Container, Content,Header,Title,Footer,Button, Left, Right, Body, Icon,View,Card,Image,CardItem,Toast} from "native-base";
import {Colors} from '../../resource/';
export default class DrawerScreen extends Component{
    render(){
        return(
            
            <Container style={{flex:1,backgroundColor:Colors.white_color,height:'100%'}}>
                 <Content>
                      <Text >DrawerScreen</Text>
                 </Content>
            </Container>
            
            
            
        )
    }
}