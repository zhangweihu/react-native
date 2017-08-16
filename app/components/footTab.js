import React, {Component} from "react";
import {Container, Content,Header,Title,Footer, FooterTab, Button, Left, Right, Body, Icon,View,} from "native-base";
export default class FootTab extends Component{
    render(){
          return(
               <FooterTab>
                            <Button active>
                              <Icon  active name="apps" />
                            </Button>
                            <Button >
                               <Icon name="camera" />
                            </Button>
                            <Button>
                               <Icon  name="navigate" />
                            </Button>
                            <Button>
                               <Icon name="person" />
                            </Button>
            </FooterTab>
          )

    }
}