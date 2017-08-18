import React, {Component} from "react";

import {QRScannerView} from 'ac-qrcode';
import { Container, Header, Content, Toast, Button, Text, Icon } from 'native-base';
export default class ScanScreen extends Component{
     constructor(props){
      super(props)
     }
     render(){
        return (
            < QRScannerView
                            onScanResultReceived={this.barcodeReceived.bind(this)}
            
                            renderTopBarView={() => this._renderTitleBar()}
            
                            renderBottomMenuView={() => this._renderMenu()}
                        />
                    )
                }
            
                _renderTitleBar(){
                    return(
                        <Text
                            style={{color:'white',textAlignVertical:'center', textAlign:'center',padding:12}}
                        >请对准二维码</Text>
                    );
                }
            
                _renderMenu() {
                    return (
                        <Text
                            style={{color:'white',textAlignVertical:'center', textAlign:'center',padding:12}}
                        ></Text>
                    )
                }
            
                barcodeReceived(e) {
                    alert('Type: ' + e.type + '\nData: ' + e.data);
                    //console.log(e)
                }
     }
