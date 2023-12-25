import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity,ToastAndroid,Button, ScrollView} from 'react-native';
import Header from '../components/Header';
import Loading from '../components/Loading';
import HomeLayout from './HomeLayout';

const Home = () => {

const [data,setData]=useState([]);
const [current,setCurrent]=useState(0)
const [loading,setLoading]=useState(true)
useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response= await fetch('https://random-data-api.com/api/users/random_user?size=80');
      const res = await response.json(); 
      console.log(res)
      setData(res);
 ToastAndroid.show('Profile Fetched Successfully !!', ToastAndroid.SHORT);

   } catch(error:any){
  console.log(error.message)
   }finally{
  setLoading(false)
   }
  }
  fetchData();
},[])
const handleNext = () => {
  setCurrent((prevPage) => prevPage + 1);
};

const handlePrevious = () => {
  setCurrent((prevPage) => Math.max(prevPage - 1, 0));
};
console.log(data[current])
  return (
    <ScrollView>
      <Header text='Home'/>

      {
        loading ?
        <Text style={{marginTop:'85%',marginLeft:'42%'}}>
          <Loading/>
        </Text>
        : 
        <ScrollView>
      <HomeLayout {...data[current]} />
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',}}>
<Button title="Previous" onPress={handlePrevious} disabled={current === 0} />
{/* <Text style={{fontSize:18,color:'blue'}}> Page : {current}</Text> */}
        <Button title="Next" onPress={handleNext} disabled={current === data.length - 1} />
</View>
        </ScrollView>
      }
    </ScrollView>
  )
}

export default Home
