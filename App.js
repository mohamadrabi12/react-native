import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo"
var board = ["question","question","question","question","question","question","question","question","question"]
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isCross:true
    }
  }
  drawItem(number){
    if(board[number]=="question" && this.winGame()==""){
      if(this.state.isCross)
        board[number] = "cross"
      else  
        board[number] = "circle"
      this.setState({isCross:!this.state.isCross})  
      if(this.winGame()!="")
      Alert.alert(this.winGame()+" Won The Game")   
    }
  }
  resetGame = () => {
    this.setState({isCross:true}) 
    board=["question","question","question","question","question","question","question","question","question"]
  }
  chooseItemColor = (number) => {
    if(board[number]=="cross")
      return "blue"
    else if(board[number]=="circle")
      return "yellow"
    return "lime"  
  }
  winGame = () => {
    if(board[0] != "question" && board[0] == board[1] && board[1] == board[2]){
      return board[0]
    }else if(board[3] != "question" && board[3] == board[4] && board[4] == board[5]){
      return board[3]
    }else if(board[6] != "question" && board[6] == board[7] && board[7] == board[8]){
      return board[6]
    }else if(board[0] != "question" && board[0] == board[3] && board[3] == board[6]){
      return board[0]
    }else if(board[1] != "question" && board[1] == board[4] && board[4] == board[7]){
      return board[1]
    }else if(board[2] != "question" && board[2] == board[5] && board[5] == board[8]){
      return board[2]
    }else if(board[0] != "question" && board[0] == board[4] && board[4] == board[8]){
      return board[0]
    }else if(board[2] != "question" && board[2] == board[4] && board[4] == board[6]){
      return board[2]
    }else{
      return ""
    }
  }
  render(){
    return (
          <View style={styles.container}>
                    <Text style={{color:"red",fontSize:30,backgroundColor:"white"}}>Tic Tac Toe</Text>
              <View style={{flexDirection:"row"}}>              
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(0)}>
                      <Entypo name={board[0]} size={32} color={this.chooseItemColor(0)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}}  onPress={() => this.drawItem(1)}>
                      <Entypo name={board[1]} size={32} color={this.chooseItemColor(1)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(2)}>
                      <Entypo name={board[2]} size={32} color={this.chooseItemColor(2)} />
                  </TouchableOpacity>          
              </View>              
              <View style={{flexDirection:"row"}}>              
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(3)}>
                      <Entypo name={board[3]} size={32} color={this.chooseItemColor(3)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}}  onPress={() => this.drawItem(4)}>
                      <Entypo name={board[4]} size={32} color={this.chooseItemColor(4)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(5)}>
                      <Entypo name={board[5]} size={32} color={this.chooseItemColor(5)} />
                  </TouchableOpacity>            
              </View>           
              <View style={{flexDirection:"row"}}>              
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(6)}>
                      <Entypo name={board[6]} size={32} color={this.chooseItemColor(6)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}}  onPress={() => this.drawItem(7)}>
                      <Entypo name={board[7]} size={32} color={this.chooseItemColor(7)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={{margin:30,padding:20}} onPress={() => this.drawItem(8)}>
                      <Entypo name={board[8]} size={32} color={this.chooseItemColor(8)} />
                  </TouchableOpacity>           
              </View>              
              <TouchableOpacity style={{margin:30,flexDirection:"row",padding:20,backgroundColor:"white",width:200,borderRadius:20}} onPress={()=>this.resetGame()}>
                      <Text style={{color:"red",fontSize:30,textAlign:'center'}}>Restart</Text>
              </TouchableOpacity>                 
          </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});