import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity,ToastAndroid, ScrollView} from 'react-native';
import Loading from '../components/Loading';
import Clipboard from '@react-native-clipboard/clipboard';

type propsType={
avatar:String,
uid: String,
username :String,
address: JSON,
email: String,
date_of_birth:String,
first_name:String,
id:String,
gender:String,
password:string,
phone_number: string,
social_insurance_number:String,subscription:JSON,
}

const HomeLayout = ({ avatar, uid, username, address ,email,date_of_birth,first_name,id,gender,password,phone_number,social_insurance_number,subscription}:propsType) => {
    const [showPassword, setShowPassword] = useState(false);
  const password_final = password; // Replace with your actual password

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCopyToClipboard = async () => {
    await Clipboard.setString(password_final);
 ToastAndroid.show('Password copied to clipboard!', ToastAndroid.SHORT);
  };
  const copyPhone = async ()=>{
    await Clipboard.setString(phone_number);
    ToastAndroid.show('Phone Number copied to clipboard!', ToastAndroid.SHORT);
  }
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width:'100%',alignItems:'center',}}>
{
    avatar ? 
    <>
<View style={{height:160,width:170,marginTop:10,borderRadius:500,borderColor:'black',borderWidth:2}}>

<Image source={{ uri: avatar }} style={{width: 170,height:140}}/>
    </View>
<Text style={{fontSize: 18,marginLeft: 20, marginTop:10, fontWeight:500}}>{username}</Text>
    </>

    :
<>
<Text><Loading/></Text>
</>
}

</View>
<View style={styles.line}></View>
<View style={{marginTop:1}}>
    <Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Unique-id:</Text>
<Text style={styles.inputprofdis}> {uid}</Text>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Addresss:</Text>
<Text style={styles.inputprofdis}>{address?.city}</Text>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Email:</Text>

<Text style={styles.inputprofdis}> {email}</Text>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:"90%"}}>
    <View style={{width:"45%"}}>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Date of Birth:</Text>
<Text style={styles.inputprofdishalf}> {date_of_birth}</Text>
    </View>
    <View style={{width:"45%"}}>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Id:</Text>

<Text style={styles.inputprofdishalf}> {id}</Text>
    </View>


</View>

<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:"90%"}}>
    <View style={{width:"45%"}}>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Name:</Text>
<Text style={styles.inputprofdishalf}> {first_name}</Text>

    </View>
    <View style={{width:"45%"}}>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Gender:</Text>
<Text style={styles.inputprofdishalf}> {gender}</Text>
    </View>


</View>
<Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Password:</Text>

<Text style={styles.inputprofdis}>
        {showPassword ? password_final : '*'.repeat(password_final.length)}
      </Text>
      <View style={{display:'flex',flexDirection:'row',}}>
      <TouchableOpacity onPress={handleTogglePassword}>
      {
        showPassword ?  <Text style={{marginLeft:"18%", color:'red',textDecorationLine:'underline',marginTop:-10,marginBottom:15}}>Hide Password</Text>
        :
         <Text style={{marginLeft:"18%", color:'green',textDecorationLine:'underline',marginTop:-10,marginBottom:15}}>Show Password</Text>
        
      } 
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCopyToClipboard}>
<Text style={{marginLeft:"5%", color:'green',textDecorationLine:'underline',marginTop:-10,marginBottom:15}} >Copy to Clipboard</Text>
      </TouchableOpacity>
      </View>
    <Text style={{color:'black',fontSize:14,marginLeft:"6%",marginBottom:4}}>Contact No.:</Text>

<Text style={styles.inputprofdis}> {phone_number?.split('x')[0]}</Text>
<TouchableOpacity onPress={copyPhone}>
<Text style={{color:'green',textDecorationLine:'underline',marginLeft:"10%",marginTop:-10,marginBottom:15}} >Copy to Clipboard</Text>
      </TouchableOpacity>
{/* <Text style={styles.inputprofdis}> {social_insurance_number}</Text> */}

</View>
    </ScrollView>
  )
}

export default HomeLayout


const styles=StyleSheet.create({
    inputprofdis: {
        marginLeft: '5%',
        // marginTop:40,
        height: 36,
        // borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D8DADC',
    fontSize:14,
        // borderRadius: 10,
        width: '90%',
        padding: 10,
        marginBottom: 10,
      },
      inputprofdishalf:{
        marginLeft: 12,
        // marginTop:40,
        height: 36,
        // borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D8DADC',
    fontSize:14,
        // borderRadius: 10,
        width: '100%',
        padding: 10,
        marginBottom: 10,
      },
      line: {
        borderBottomColor: '#ccc', 
        borderBottomWidth: 1,     
        marginVertical: 10,   
        width:"90%",
        marginLeft:"5%"     
      },
})