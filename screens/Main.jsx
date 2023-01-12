import { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { screenHeight } from '../common/utils';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import React from 'react';
import { StyleSheet } from 'react-native';
import { getData } from '../common/api';
import { useQuery } from 'react-query';
import Poster from '../components/Poster/Poster';
import { formatDate, getCurrentDate } from '../common/utils';

export default function Main({ navigation: { navigate } }) {
  const [onstageData, setOnstageData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: 'data',
    queryFn: () => getData(),
    onSuccess: () => {
      const onstage = [];
      const upcoming = [];
      data?.forEach((item) => {
        const startdate = formatDate(item.STRTDATE);
        const enddate = formatDate(item.END_DATE);
        const today = getCurrentDate();
        if (startdate <= today && today <= enddate) {
          onstage.push(item);
        } else if (startdate > today) {
          upcoming.push(item);
        }
      });
      setOnstageData(onstage);
      setUpcomingData(upcoming);
    },
  });

  if (isLoading) {
    return;
  }

  console.log('---------------------');
  const UpcomingShow = ({ item, idx }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 15,
          paddingRight: 20,
        }}
      >
        <Poster imageURL={item.MAIN_IMG} title={item.TITLE} key={idx} />
      </View>
    );
  };

  return (
    data && (
      <FlatList
        keyExtractor={(item, idx) => idx}
        numColumns={3}
        data={upcomingData}
        renderItem={UpcomingShow}
        columnWrapperStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListHeaderComponent={() => {
          return (
            <>
              <Swiper height="100%" showsPagination={false} autoplay loop>
                <SwiperChildView>
                  <BackgroundImg
                    style={StyleSheet.absoluteFill}
                    source={require('../assets/banner.png')}
                  />
                  <LinearGradient
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    colors={['transparent', 'red']}
                  />
                </SwiperChildView>

                <SwiperChildView>
                  <BackgroundImg
                    style={StyleSheet.absoluteFill}
                    source={require('../assets/cultureday.jpg')}
                  />
                  <LinearGradient
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    colors={['transparent', 'black']}
                  />
                </SwiperChildView>
                <SwiperChildView>
                  <BackgroundImg
                    style={StyleSheet.absoluteFill}
                    source={require('../assets/bannerHighlight.jpg')}
                  />
                  <LinearGradient
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    colors={['transparent', 'black']}
                  />
                </SwiperChildView>
              </Swiper>

              <MainAllContainer>
                <OnStageContainer>
                  <TitleText>
                    <Text style={{ fontSize: 25 }}>On Stage</Text>
                  </TitleText>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {onstageData.map((item, idx) => (
                      <View style={{ paddingTop: 15, paddingRight: 20 }}>
                        <Poster
                          imageURL={item.MAIN_IMG}
                          title={item.TITLE}
                          key={idx}
                        />
                      </View>
                    ))}
                  </ScrollView>
                </OnStageContainer>

                <TitleText>
                  <Text style={{ fontSize: 25 }}>Upcoming</Text>
                </TitleText>
              </MainAllContainer>
            </>
          );
        }}
      />
    )
  );
}

const SwiperChildView = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: ${screenHeight / 3 + 'px'};
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  resize: vertical;
`;

const MainAllContainer = styled.View`
  padding: 0 20px;
`;
const OnStageContainer = styled.View``;

const TitleText = styled.Text`
  font-weight: 300;
  margin-top: 20px;
`;
