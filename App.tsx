/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HMSMap, {MapTypes, HMSMarker} from '@hmscore/react-native-hms-map';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Initialize Map : You can get api_key and data location from agconnect-services
  HMSMap.module.initializer(
    'DQEDAKmwnEa6RgVENKOA3chTKFwmsd8jxwa3ugAZpYjUPnS4Y4e6LUCWtuBNrTFjLr8ZJkoQoCU8Aw/s/rPrG8c/5hbyebTk2dkmDw==',
    'SG',
  );
  
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Initialize Map : You can get api_key and data location from agconnect-services
  HMSMap.module.initializer(
    'DQEDAKmwnEa6RgVENKOA3chTKFwmsd8jxwa3ugAZpYjUPnS4Y4e6LUCWtuBNrTFjLr8ZJkoQoCU8Aw/s/rPrG8c/5hbyebTk2dkmDw==',
    'SG',
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="HMS Map Example"></Section>
          <HMSMap
            mapType={MapTypes.NORMAL}
            style={{height: 400}}
            camera={{target: {latitude: 28, longitude: 16}, zoom: 5}}
            myLocationEnabled={true}
            myLocationButtonEnabled={true}>
            {/* <HMSMarker // Simple example
              coordinate={{latitude: 28, longitude: 16}}
              title="Hello Huawei Map"
              snippet="This is a snippet!"
            /> */}
          </HMSMap>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
