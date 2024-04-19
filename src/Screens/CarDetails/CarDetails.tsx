import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';

import styles from './CarDetailsStyles';
import IconShare from 'react-native-vector-icons/AntDesign';
import IconHeart from 'react-native-vector-icons/AntDesign';
import BottomTabNavigator from '../../Components/BottomTabNavigator ';
const CarDetails = ({navigation}) => {
  type RootStackParamList = {
    CarDetails: {
      name: string;
      price: number;
      image: string;
      nickname: string;
      version: string;
      status: string;
      descriptionone: string;
      descriptiontwo: string;
      descriptionthree: string;
      year: string;
      location: string;
      locationImage: string;
      postedon: string;
      postedby: string;
      trim: string;
      kilometers: string;
      regionalSpecs: string;
      doors: string;
      bodyType: string;
      fuelType: string;
      sellerType: string;
      transmissionType: string;
      waranty: string;
      exteriorColor: string;
      interiorColor: string;
      // Add more properties if needed
    };
  };
  const route = useRoute<RouteProp<RootStackParamList, 'CarDetails'>>();
  const {
    name,
    price,
    image,
    nickname,
    version,
    status,
    descriptionone,
    descriptiontwo,
    descriptionthree,
    year,
    location,
    locationImage,
    postedon,
    postedby,
    trim,
    kilometers,
    regionalSpecs,
    doors,
    bodyType,
    fuelType,
    sellerType,
    transmissionType,
    waranty,
    exteriorColor,
    interiorColor,
  } = route.params;
  // Use name, price, image, and other parameters as needed

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../Assets/Images/posterFour.png')}
          style={{height: '32%', width: '100%'}}
          imageStyle={{height: '100%', width: '100%', borderRadius: 10}}>
          <View style={styles.bgView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../Assets/Images/backGroup.png')}></Image>
            </TouchableOpacity>

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

        <View style={styles.headingMainView}>
          <View style={styles.headingMainViewInerOne}>
            <Text style={styles.priceText}>AED {price}</Text>

            <ImageBackground
              source={require('../../Assets/Images/buttonBGred.png')}
              style={styles.headingMainViewstatus}
              imageStyle={{width: '100%', height: '100%'}}
              resizeMode="stretch">
              <Text style={styles.statusText}>{status}</Text>
            </ImageBackground>
          </View>
          <Text style={styles.nameText}>{name}</Text>
        </View>

        {/* Detail section */}

        <View style={styles.detailMainView}>
          <ScrollView>
            <Text style={styles.detailText}>Details</Text>

            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Trim</Text>
              <Text style={styles.detailSubText}>{trim}</Text>
            </View>

            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Year</Text>
              <Text style={styles.detailSubText}>{year}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Kilometer</Text>
              <Text style={styles.detailSubText}>{kilometers}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Regional Specs</Text>
              <Text style={styles.detailSubText}>{regionalSpecs}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Doors</Text>
              <Text style={styles.detailSubText}>{doors}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Posted on</Text>
              <Text style={styles.detailSubText}>{postedon}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Body Type</Text>
              <Text style={styles.detailSubText}>{postedby}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Fuel Type</Text>
              <Text style={styles.detailSubText}>{fuelType}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Seller Type</Text>
              <Text style={styles.detailSubText}>{sellerType}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Transmission Type</Text>
              <Text style={styles.detailSubText}>{transmissionType}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Waranty</Text>
              <Text style={styles.detailSubText}>{waranty}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Interior Color</Text>
              <Text style={styles.detailSubText}>{interiorColor}</Text>
            </View>
            {/* Line */}
            <View style={styles.detailSubView}>
              <Text style={styles.detailSubText}>Exterior Color</Text>
              <Text style={styles.detailSubText}>{exteriorColor}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default CarDetails;
