import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { IcHelp, IcInformation, IcList, IcTranslate, Slide1, Slide2, Slide3 } from '../assets';
import { dimensions } from '../styles';

const HomePage = (props: any) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const carouselRef = useRef<Carousel<any>>(null);
  const slides = [Slide1, Slide2]; // Daftar slide, sesuaikan dengan gambar yang Anda miliki
  const [activeSlide, setActiveSlide] = useState<any>(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (carouselRef.current) {
        let nextSlide = activeSlide + 1;
        if (nextSlide >= slides.length) {
          nextSlide = 0;
        }
        carouselRef.current.snapToItem(nextSlide);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [activeSlide]);

  const renderSlide = ({ item }: { item: any }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.logo} resizeMode="cover" />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFDFF' }}>
      <View style={styles.sliderContainer}>
        <Carousel
          ref={carouselRef}
          data={slides}
          renderItem={renderSlide}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={(index: any) => setActiveSlide(index)}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.column} onPress={() => props.navigation.navigate('TranslateOptionsPage')}>
          <Image source={IcList} style={styles.icon} resizeMode="cover" />
          <Text style={styles.textNavigation}>Kamus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => props.navigation.navigate('TranslatorPage')}>
          <Image source={IcTranslate} style={styles.icon} resizeMode="contain" />
          <Text style={styles.textNavigation}>Terjemah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => props.navigation.navigate('AboutPage')}>
          <Image source={IcInformation} style={styles.icon} resizeMode="contain" />
          <Text style={styles.textNavigation}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => props.navigation.navigate('HelpPage')}>
          <Image source={IcHelp} style={styles.icon} resizeMode="contain" />
          <Text style={styles.textNavigation}>Bantuan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: -20,
  },
  slide: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: dimensions.width,
    height: dimensions.height  * 0.30,
    marginBottom: 30,
    borderBottomRightRadius: 50,
   
  },
  title: {
    fontFamily: 'Bold',
    fontSize: 16,
    color: '#828282',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
    flexWrap: 'wrap',
    rowGap: 15,
    columnGap: 15,
    // marginTop: -30
  },
  column: {
    width: '30%',
    height: 130,
    backgroundColor: '#FEFEFE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 32,
  },
  textNavigation: {
    fontFamily: 'Bold',
    marginTop: 20,
    color: '#828282',
  }
});

export default HomePage;
