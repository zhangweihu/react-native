/**
 * titleBar
 */
import  React,{Component} from "react";
import {StyleSheet,Text} from "react-native";
import {Body, Header, Left, Right, Title,Button,Icon} from "native-base";

export default  class TitleBar extends Component{

   render(){
       return (
            
                <Header>
                <Left>
                    <Button transparent>
                       <Icon name={this.props.Icon} />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
                </Header>
           
            );
   }
}