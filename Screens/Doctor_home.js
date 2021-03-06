import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

//
import CardComponent from '../Components/CardComponent';

const {height, width} = Dimensions.get('screen');
export default function Doctor_home() {
  const navigation = useNavigation();

  const infoDoctorData = [
    {
      title: 'Dr.Bellamy N',
      isonline: true,
      specialist: 'Viralogist',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/6.png'),
    },
    {
      title: 'Dr Mensah T',
      isonline: false,
      specialist: 'Oncologists',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/2.png'),
    },
    {
      title: 'Dr Klimisch j',
      isonline: false,
      specialist: 'Surgon',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/3.png'),
    },
    {
      title: 'Dr Martinez K',
      isonline: true,
      specialist: 'Pediatrician',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/4.png'),
    },
    {
      title: 'Dr.Marc M',
      isonline: true,
      specialist: 'Rheumatologists',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/5.png'),
    },
    {
      title: "Dr.O'Boyle J",
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/1.png'),
    },
  ];
  return (
    <View style={styles.doctorContainer}>
      <View
        style={{
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesome5Icons name="caret-left" color={'white'} size={20} />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', marginLeft: 8}}>Doctors</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <FontAwesome5Icons name="map-pin" size={15} color="blue" />
        <Text style={{color: 'blue', marginLeft: 3}}>Patia ,Bhubaneswar</Text>
      </View>
      {/* start try map */}
      {/* <ScrollView style={{ backgroundColor: "blue", }}>
                {
                    infoDoctorData.map((list, index) => {
                        return (
                            <View key={index} style={styles.cardContainer}>
                                <View style={styles.cardInnerContainer}>
                                    <View style={styles.cardImageContainer}>
                                        <View></View>
                                        <Image source={list.image} />
                                    </View>

                                    <Text>Dr.</Text>
                                    <Text>Vvv</Text>
                                    <Text>
                                        <FontAwesome5Icons name='star' />
                                        4.5 (135 reviews)
                                    </Text>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView> */}

      <FlatList
        numColumns={2}
        data={infoDoctorData}
        renderItem={({item}) => {
          return <CardComponent data={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  doctorContainer: {
    flex: 1,
  },
  cardContainer: {},
  cardImageContainer: {
    position: 'relative',
    marginTop: 10,
  },
  cardOnlineLabel: {
    height: 15,
    width: 15,
    backgroundColor: 'green',
    borderRadius: 50,
    position: 'absolute',
    top: 8,
    right: 5,
    zIndex: 1,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    width: width / 2.3,
    justifyContent: 'center',
    alignItems: 'center',
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
