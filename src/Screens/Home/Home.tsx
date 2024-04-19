import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import styles from './HomeStyles';
import IconLocation from 'react-native-vector-icons/Entypo';
import IconArrowDown from 'react-native-vector-icons/MaterialIcons';
import Navigation from '../../Navigation/Navigation';
import axios from 'axios';
import BottomTabNavigator from '../../Components/BottomTabNavigator ';
const Home = ({navigation}: any) => {
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
    descriptiontwo: string;
    distanceone: string;
    distancetwo: string;
  }

  const [showrooms, setShowrooms] = useState<ItemType[]>([]);
  const [npData, setNpData] = useState<ItemType[]>([]);
  const [carData, setCarData] = useState<ItemType[]>([]);
  useEffect(() => {
    fetchData();
    fetchNpData();
    fetchCarData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/api/topShowrooms',
      );
      setShowrooms(response.data);
      console.log('Response...', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchNpData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/npData');
      setNpData(response.data);
      console.log('NpData:', response.data);
    } catch (error) {
      console.error('Error fetching npData:', error);
    }
  };

  const fetchCarData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/carData');
      setCarData(response.data);
      console.log('CarData:', response.data);
    } catch (error) {
      console.error('Error fetching carData:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          {/* Header View Section*/}
          <View style={styles.headerView}>
            <View style={styles.headerViewSub1}>
              <IconLocation
                name="location-pin"
                size={25}
                color="#900"
                style={{marginLeft: 0}}
              />

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
            </View>
          </View>

          {/* 
IconView Section */}
          <View style={styles.iconMainView}>
            {/* first row */}
            <View style={styles.iconSubView}>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/Motor.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Moters</Text>
              </View>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/bike.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Moterbikes</Text>
              </View>

              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/showroom.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Showrooms</Text>
              </View>
            </View>
            {/* Second Row */}

            <View style={styles.iconSubView}>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/engine.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Accessories</Text>
              </View>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/noPlate.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Number Plate</Text>
              </View>

              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/mecTwo.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Car Service</Text>
              </View>
            </View>
            {/* Third Row */}
            <View style={styles.iconSubView}>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/mecOne.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Car Wash</Text>
              </View>
              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/recovery.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Car Recovery</Text>
              </View>

              <View style={styles.iconsView}>
                <Image
                  source={require('../../Assets/Images/boat.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.iconsText}>Boats</Text>
              </View>
            </View>
          </View>

          {/* Add Poster Section */}

          <View style={styles.posterView}>
            <Image
              source={require('../../Assets/Images/posterOne.png')}
              style={styles.imagePoster}
              resizeMode="stretch"
            />
          </View>

          {/* Showroom section */}
          <View style={styles.showroomMainView}>
            <View style={styles.showroomHeaderView}>
              <Text style={styles.showroomHeadingText}>Top Showrooms</Text>
              <Text style={styles.seeallText}>See All</Text>
            </View>

            <View style={styles.showroomMenuView}>
              <ScrollView horizontal>
                {showrooms.map(item => (
                  <View key={item.id} style={styles.showroomMenuSubView}>
                    <Image
                      source={require('../../Assets/Images/showroomTwo.png')}
                      style={styles.imageStandard}
                      resizeMode="contain"
                    />

                    <View style={styles.showroomMenuSubSubView}>
                      <Image
                        source={require('../../Assets/Images/toyotaLogo.png')}
                        style={styles.imageStandardLogo}
                        resizeMode="contain"
                      />
                      <View>
                        <Text style={styles.showroomBottomTextOne}>
                          {item.name}
                        </Text>
                        <Text style={styles.showroomBottomTextOne}>
                          {item.distance} km away
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Top Sale section */}
          {/* usimg same styles of showroom */}
          <View style={styles.showroomMainView}>
            <View style={styles.showroomHeaderView}>
              <Text style={styles.showroomHeadingText}>Top Sales</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MotorsListings')}>
                <Text style={styles.seeallText}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.showroomMenuView}>
              <ScrollView horizontal>
                {carData.map(item => (
                  <View key={item.id} style={styles.showroomMenuSubView}>
                    <Image
                      source={require('../../Assets/Images/posterThree.png')}
                      style={styles.imageStandard}
                      resizeMode="contain"
                    />

                    <View style={styles.topSalesMenuSubSubView}>
                      <Text style={styles.topSalesBottomTextOne}>
                        AED {item.price}
                      </Text>
                      <View style={styles.topSalesMenuSubSubViewSub}>
                        <Text style={styles.topSalesBottomTextTwo}>
                          {item.name} .Aventador .V1
                        </Text>
                        {/* <Text style={styles.topSalesBottomTextOne}>{item.distance}</Text> */}
                      </View>
                      <View style={styles.topSalesMenuSubSubViewSubTwo}>
                        <Text style={styles.topSalesBottomTextThree}>
                          10.0 km
                        </Text>
                        <Text style={styles.topSalesBottomTextThree}>
                          20.0 km
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          {/* Number Plate section */}
          <View style={styles.showroomMainView}>
            <View style={styles.showroomHeaderView}>
              <Text style={styles.showroomHeadingText}>Top Plate Numbers</Text>
              <Text style={styles.seeallText}>See All</Text>
            </View>

            <View style={styles.showroomMenuView}>
              <ScrollView horizontal>
                {npData.map(item => (
                  <View key={item.id} style={styles.showroomMenuSubView}>
                    <Image
                      source={require('../../Assets/Images/numberPlatePic.png')}
                      style={styles.imageStandard}
                      resizeMode="contain"
                    />

                    <View style={styles.topSalesMenuSubSubView}>
                      <Text style={styles.topSalesBottomTextOne}>
                        AED {item.price}
                      </Text>
                      <View style={styles.topSalesMenuSubSubViewSub}>
                        <Text style={styles.topSalesBottomTextTwo}>
                          {item.descriptionone}.Aventador.V1
                        </Text>
                        {/* <Text style={styles.topSalesBottomTextOne}>{item.distance}</Text> */}
                      </View>
                      <View style={styles.topSalesMenuSubSubViewSubTwo}>
                        <Text style={styles.topSalesBottomTextThree}>
                          {item.distanceone} km
                        </Text>
                        <Text style={styles.topSalesBottomTextThree}>
                          {item.distancetwo} km
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          {/* Previous Search section */}
          <View style={styles.showroomMainView}>
            <View style={styles.showroomHeaderView}>
              <Text style={styles.showroomHeadingText}>Previous Search</Text>
              <Text style={styles.seeallText}>See All</Text>
            </View>

            <View style={styles.showroomMenuView}>
              <ScrollView horizontal>
                {showrooms.map(item => (
                  <View key={item.id} style={styles.showroomMenuSubView}>
                    <Image
                      source={require('../../Assets/Images/posterTwo.png')}
                      style={styles.imageStandard}
                      resizeMode="contain"
                    />

                    <View style={styles.showroomMenuSubSubView}>
                      <Image
                        source={require('../../Assets/Images/toyotaLogo.png')}
                        style={styles.imageStandardLogo}
                        resizeMode="contain"
                      />
                      <View>
                        <Text style={styles.showroomBottomTextOne}>
                          {item.name}
                        </Text>
                        <Text style={styles.showroomBottomTextOne}>
                          {item.distance} km
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Home;
