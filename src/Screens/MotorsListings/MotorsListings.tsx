import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Checkbox} from 'react-native-paper';
import styles from './MotorsListingsStyles';
import IconShare from 'react-native-vector-icons/AntDesign';
import IconFilter from 'react-native-vector-icons/AntDesign';
import IconHeart from 'react-native-vector-icons/AntDesign';
import IconLeft from 'react-native-vector-icons/AntDesign';
import IconArrowDown from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import BottomTabNavigator from '../../Components/BottomTabNavigator ';
const MotorsListings = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [range, setRange] = useState({minValue: 60, maxValue: 60});
  const [range2, setRange2] = useState({minValue: 1990, maxValue: 2024});
  const [Data, setData] = useState([
    {
      id: 1,
      image: require('../../Assets/Images/posterTwo.png'),
      title: 'Toyota Moters',
      distance: '12 km away',
      price: 99000,
      carH1: 'lamborgini',
      carH2: 'aventure',
      carH3: 'v1',
    },
    {
      id: 2,
      image: require('../../Assets/Images/posterTwo.png'),
      title: 'Toyota Moters',
      distance: '12 km away',
      price: 99000,
      carH1: 'lamborgini',
      carH2: 'aventure',
      carH3: 'v1',
    },
    {
      id: 3,
      image: require('../../Assets/Images/posterTwo.png'),
      title: 'Toyota Moters',
      distance: '12 km away',
      price: 99000,
      carH1: 'lamborgini',
      carH2: 'aventure',
      carH3: 'v1',
    },
    {
      id: 4,
      image: require('../../Assets/Images/posterTwo.png'),
      title: 'Toyota Moters',
      distance: '12 km away',
      price: 99000,
      carH1: 'lamborgini',
      carH2: 'aventure',
      carH3: 'v1',
    },
  ]);
  interface ItemType {
    id: number;
    name: string;
    image: string; // Adjust the type of the image property as necessary
    title: string;
    distance: string;
    price: number;
    carH1: string;
    carH2: string;
    carH3: string;
    descriptionone: string;
    nickname: string;
    descriptiontwo: string;
    distanceone: string;
    descriptionthree: string;
    distancetwo: string;
    location: string;
    postedon: string;
    postedby: string;
    trim: string;
    kilometers: string;
    regionalspecs: string;
    doors: string;
    bodytype: string;
    fueltype: string;
    sellertype: string;
    transmissiontype: string;
    warranty: string;
    exteriorcolor: string;
    interiorcolor: string;
    fuelType: string;
    locationImage: string;
    year: string;
    status: string;
    version: string;
  }

  const [carData, setCarData] = useState<ItemType[]>([]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/carData');
      setCarData(response.data);
      console.log('CarData:', response.data);
    } catch (error) {
      console.error('Error fetching carData:', error);
    }
  };

  const setShowModalFunction = () => {
    setShowModal(true);
  };

  const handleMinValueChange = value => {
    if (value < range.maxValue) {
      setRange(prevRange => ({...prevRange, minValue: value}));
    }
  };

  const handleMaxValueChange = value => {
    if (value > range.minValue) {
      setRange(prevRange => ({...prevRange, maxValue: value}));
    }
  };
  const handleMinValueChange2 = value => {
    if (value < range.maxValue) {
      setRange2(prevRange => ({...prevRange, minValue: value}));
    }
  };

  const handleMaxValueChange2 = value => {
    if (value > range.minValue) {
      setRange2(prevRange => ({...prevRange, maxValue: value}));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header View Section*/}

        <View style={styles.headerView}>
          <View style={styles.headerViewSub1}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconLeft
                name="arrowleft"
                size={25}
                color="#900"
                style={{marginLeft: 0}}
              />
            </TouchableOpacity>
            <Text style={styles.textDubai}>Dubai</Text>
            <IconArrowDown
              name="arrow-drop-down"
              size={25}
              color="#900"
              style={{marginLeft: 5}}
            />
          </View>
          <View style={styles.headerViewSub2}>
            <Image
              source={require('../../Assets/Images/searchIcon.png')}
              style={styles.image}
              resizeMode="contain"
            />

            <TouchableOpacity onPress={setShowModalFunction}>
              <Image
                source={require('../../Assets/Images/fltr.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconHeart
                name="hearto"
                size={25}
                color="grey"
                style={{marginLeft: 0}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content rendering */}
        <ScrollView>
          {carData.map(item => (
            <View style={styles.mainContentContainer} key={item.id}>
              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() =>
                  navigation.navigate('CarDetails', {
                    image: item.image,
                    name: item.name,
                    nickname: item.nickname,
                    version: item.version,
                    status: item.status,
                    descriptionone: item.descriptionone,
                    descriptiontwo: item.descriptiontwo,
                    descriptionthree: item.descriptionthree,
                    year: item.year,
                    location: item.location,
                    locationImage: item.locationImage,
                    postedon: item.postedon,
                    postedby: item.postedby,
                    price: item.price,
                    trim: item.trim,
                    kilometers: item.kilometers,
                    regionalSpecs: item.regionalspecs,
                    doors: item.doors,
                    bodyType: item.bodytype,
                    fuelType: item.fueltype,
                    sellerType: item.sellertype,
                    transmissionType: item.transmissiontype,
                    waranty: item.warranty,
                    exteriorColor: item.exteriorcolor,
                    interiorColor: item.interiorcolor,

                    // Add more properties as needed
                  })
                }>
                <ImageBackground
                  resizeMode="cover"
                  source={require('../../Assets/Images/posterThree.png')}
                  style={{height: 235, width: '100%'}}
                  imageStyle={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                  }}>
                  <View style={styles.bgView}>
                    <ImageBackground
                      source={require('../../Assets/Images/buttonBGred.png')}
                      style={styles.imageButton}
                      imageStyle={{width: '100%', height: '100%'}}
                      resizeMode="stretch">
                      <Text style={styles.imageButtonText}>Premium</Text>
                    </ImageBackground>

                    <View style={styles.bgViewSH}>
                      <TouchableOpacity>
                        <IconShare
                          name="sharealt"
                          size={25}
                          color="#fff"
                          style={{marginLeft: 0}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <IconHeart
                          name="hearto"
                          size={25}
                          color="#fff"
                          style={{marginLeft: 0}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={styles.contentSection}>
                <Text style={styles.textPrice}>AED {item.price}</Text>
                <Text style={styles.textTitle}>{item.name}</Text>
                <View>
                  <Text style={styles.textH1}>
                    {item.nickname}| {item.descriptiontwo} |{' '}
                    {item.descriptionthree}
                  </Text>
                </View>
                <Text style={styles.textH2}>Year: 2024</Text>
                <View style={styles.midSection}>
                  <View>
                    <Image
                      source={require('../../Assets/Images/posterTwo.png')}
                      style={{height: 40, width: 45}}
                      resizeMode="center"
                    />
                  </View>
                  <View style={styles.midSectionSub}>
                    <Text style={styles.textH2}>Location:{item.location}</Text>
                    <Text style={styles.textH2}>Posted on:{item.postedon}</Text>
                    <Text style={styles.textH2}>
                      Posted By: {item.postedby}
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonParent}>
                  <TouchableOpacity>
                    <ImageBackground
                      source={require('../../Assets/Images/buttonBG.png')}
                      style={styles.buttonOne}
                      imageStyle={{width: '100%', height: '100%'}}
                      resizeMode="stretch">
                      <Text style={styles.buttonOneText}>Chat</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ImageBackground
                      source={require('../../Assets/Images/buttonBGred.png')}
                      style={styles.buttonOne}
                      imageStyle={{width: '100%', height: '100%'}}
                      resizeMode="stretch">
                      <Text style={styles.buttonTwoText}>Call</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Modal component with conditional rendering */}
        {showModal ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => setShowModal(false)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 10,
                  flex: 1,
                  width: '100%',
                }}>
                <ScrollView style={{flex: 1}}>
                  {/* Header */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                      <IconLeft
                        name="arrowleft"
                        size={25}
                        color="#900"
                        style={{marginLeft: 0}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Filters
                    </Text>

                    <Text
                      style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>
                      Reset
                    </Text>
                  </View>
                  {/* 
LineONe */}
                  <View
                    style={{
                      marginTop: 50,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 2,
                      borderColor: '#D3D3D3',
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      City
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Dubai
                      </Text>
                      <IconArrowDown
                        name="arrow-right"
                        size={25}
                        color="#900"
                        style={{marginLeft: 5}}
                      />
                    </View>
                  </View>
                  {/* Line2 */}
                  <View
                    style={{
                      marginTop: 25,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: 2,
                      borderColor: '#D3D3D3',
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Category
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Dubai
                      </Text>
                      <IconArrowDown
                        name="arrow-right"
                        size={25}
                        color="#900"
                        style={{marginLeft: 5}}
                      />
                    </View>
                  </View>

                  {/* Line */}

                  <View
                    style={{
                      marginTop: 25,
                      borderBottomWidth: 2,
                      borderColor: '#D3D3D3',
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Price (AED)
                    </Text>
                    <View style={{flex: 1, height: 50}}>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: 25,
                          justifyContent: 'center',
                        }}>
                        <Slider
                          style={{width: '50%'}}
                          minimumValue={0}
                          maximumValue={100}
                          step={1}
                          value={range.minValue}
                          onValueChange={handleMinValueChange}
                        />
                        <Slider
                          style={{width: '50%'}}
                          minimumValue={0}
                          maximumValue={100}
                          step={1}
                          value={range.maxValue}
                          onValueChange={handleMaxValueChange}
                        />
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <Text
                          style={{
                            marginTop: 10,
                            color: 'grey',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          AED: {range.minValue}
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            color: 'grey',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          AED: {range.maxValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* Line */}
                  <View
                    style={{
                      marginTop: 15,
                      borderBottomWidth: 2,
                      borderColor: '#D3D3D3',
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Keywords
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#D3D3D3',
                        marginTop: 5,
                        borderRadius: 5,
                        marginBottom: 5,
                      }}>
                      <TextInput
                        style={{height: 45, padding: 5, color: 'black'}}
                        placeholder="Enter keywords"
                        placeholderTextColor={'#767676'}

                        // onChangeText={item => setEmail(item)}
                      />
                    </View>
                  </View>

                  {/* Line */}
                  <View
                    style={{
                      marginTop: 25,
                      borderBottomWidth: 2,
                      paddingBottom: 5,
                      borderColor: '#D3D3D3',
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Year
                    </Text>
                    <View style={{flex: 1, height: 50}}>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: 25,
                          justifyContent: 'center',
                        }}>
                        <Slider
                          style={{width: '50%'}}
                          minimumValue={0}
                          maximumValue={100}
                          step={1}
                          value={range.minValue}
                          onValueChange={handleMinValueChange2}
                        />
                        <Slider
                          style={{width: '50%'}}
                          minimumValue={0}
                          maximumValue={100}
                          step={1}
                          value={range.maxValue}
                          onValueChange={handleMaxValueChange2}
                        />
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <Text
                          style={{
                            marginTop: 10,
                            color: 'grey',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Year {range2.minValue}
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            color: 'grey',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Year: {range2.maxValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* Line */}
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 25,
                      paddingBottom: 15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Show adds by verified users
                    </Text>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </View>
                  {/* Line */}
                  <View
                    style={{
                      width: '100%',
                      marginTop: 25,
                      paddingBottom: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ImageBackground
                        source={require('../../Assets/Images/buttonBGred.png')}
                        style={{
                          width: '85%',
                          height: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        imageStyle={{width: '100%', height: '100%'}}
                        resizeMode="stretch">
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Show 200 results
                        </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default MotorsListings;
