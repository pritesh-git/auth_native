import React, { useState } from "react";
import {StyleSheet,Text,TextInput,View,Dimensions,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Axios from 'axios'
const { width: WIDTH } = Dimensions.get("window");

export default function App() {
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    Axios.post('http://psReqCenter.requestbox/postLogin',{email, password})
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name={"ios-person-outline"} size={28} color={"rgba(255,255,255,0.7"} style={styles.inputIcon}/>
        <TextInput style={styles.input} keyboardType={"email-address"} placeholder={"Username/Email"} placeholderTextColor={"rgba(255,255,255,0.7)"} underlineColorAndroid={"transparent"} onChangeText={(val)=>setEmail(val)} />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={"ios-lock-outline"} size={28} color={"rgba(255,255,255,0.7"} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={showPass} placeholderTextColor={"rgba(255,255,255,0.7)"} underlineColorAndroid={"transparent"} onChangeText={ (val)=>setPassword(val)} keyboardType={'number-pad'} />
        <TouchableOpacity style={styles.btnEye} onPress={() => { setShowPass(!showPass), setPress(!press); } } >
          <Icon name={press ? "ios-eye-off-outline" : "ios-eye-outline"} size={26} color={"rgba(255,255,255,0.7)"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingLeft: 45,
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});
