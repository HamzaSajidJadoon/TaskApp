import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import IconHome from 'react-native-vector-icons/FontAwesome6';
import IconBell from 'react-native-vector-icons/FontAwesome';
import IconPlus from 'react-native-vector-icons/Ionicons'; //add-circle-sharp
import IconChat from 'react-native-vector-icons/Ionicons';
import IconUser from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
const BottomTabNavigator = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Home');
  const isFocused = useIsFocused();

  useEffect(() => {
    // Deactivate all tabs when the screen is not focused
    if (!isFocused) {
      setActiveTab(null);
    }
  }, [isFocused]);




  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
       // onPress={() =>navigation.navigate('Home')}
      >
          <IconHome
                name="house"
                size={20}
               color={'red'}
                style={{marginLeft: 0}}
              />

        <Text style={{  color: 'red',
    fontSize:11,
    fontWeight:'bold'}}>Home</Text>
      </TouchableOpacity>
      {/* Repeat similar TouchableOpacity components for other tabs */}
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Activity' && styles.activeTab]}
   
      >
          <IconBell
                name="bell"
                size={23}
                color="#D3D3D3"
                style={{marginLeft: 0}}
              />

        <Text style={[styles.tabText, activeTab === 'Activity' && styles.activeTabText]}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginRight:15, alignItems:'center', justifyContent:'center'}}
        
      >
        <IconPlus
                name="add-circle-sharp"
                size={40}
                color="red"
                style={{marginLeft: 0}}
              />
        <Text style={{color:'red', fontWeight:'bold', fontSize:14}}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Chat' && styles.activeTab]}
    
      >
         <IconChat
                name="chatbubble-sharp"
                size={23}
                color="#D3D3D3"
                style={{marginLeft: 0}}
              />
        <Text style={[styles.tabText, activeTab === 'Chat' && styles.activeTabText]}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'User' && styles.activeTab]}

      >
        <IconUser
                name="account"
                size={30}
                color="#D3D3D3"
                style={{marginLeft: 0}}
              />
        <Text style={[styles.tabText, activeTab === 'User' && styles.activeTabText]}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
    width:'100%'
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    marginTop: 3,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  activeTabText: {
    color: 'red',
    fontSize:11,
    fontWeight:'bold'
  },
});

export default BottomTabNavigator;
