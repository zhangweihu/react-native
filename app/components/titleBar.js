/**
 * titleBar
 */
import  React,{Component} from "react";
import PropTypes from 'prop-types'; // ES6 
import {StyleSheet,Text,TouchableOpacity} from "react-native";
import {Body, Header, Left, Right, Title,Button,Icon} from "native-base";

export default  class TitleBar extends Component{
     static propTypes = {
        leftIconPress:PropTypes.func
     }
   render(){
       return (
            
                <Header>
                <Left>
                    <TouchableOpacity onPress={()=>this.props.leftIconPress()}> 
                 
                       <Icon name={this.props.Icon} />
                    
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
                </Header>
           
            );
   }
}