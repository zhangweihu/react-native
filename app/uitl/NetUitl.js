import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
export  class NetUitl extends Component{
  
   constructor(props){
            super(props)
            this.state ={
                isLoading: true
            }
   }
  //get 请求
   static get(url,callback){
       fetch(url)
       .then((response)=>response.json())
       .then((responseJson)=>{
             callback(responseJson);
       }).done()
     
   }
   //post请求 json
   static postJson(url,data,callback){
        let params = {
            method:'post',
            header:{
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url,params)
        .then((response) => response.json())
        .then((responseJson) => {
           callback(JSON.parse(responseJson));
        }).done()
       
   }
   //post请求 json
   static postForm(url,data,callback){
    let params = {
        method:'post',
        header:{
             'Accept': 'application/json',
             'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)
    };
    fetch(url,params)
    .then((response) => response.json())
    .then((responseJson) => {
        callback(JSON.parse(responseJson));
    }).done()
   
}

}
module.exports = NetUitl
