import { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
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
import {
  BLACK_COLOR,
  BLUE_COLOR,
  DARK_GRAY_COLOR,
  PINK_COLOR,
} from '../common/colors';

export default function Main() {
  const [onstageData, setOnstageData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);

  const { data, isLoading, isSuccess } = useQuery({
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
          alignContent: 'center',
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
        contentContainerStyle={{ paddingBottom: 30 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          display: 'flex',
          paddingHorizontal: 15,
        }}
        // contentContainerStyle={{ backgroundColor: 'pink' }}
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
                  <TitleText color={DARK_GRAY_COLOR}>On Stage</TitleText>
                  <ScrollView
                    style={{ paddingBottom: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {onstageData.map((item, idx) => (
                      <View style={{ paddingRight: 10 }}>
                        <Poster
                          imageURL={item.MAIN_IMG}
                          title={item.TITLE}
                          key={idx}
                        />
                      </View>
                    ))}
                  </ScrollView>
                </OnStageContainer>

                <TitleText color={DARK_GRAY_COLOR}>Upcoming</TitleText>
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
  height: ${screenHeight / 3.7 + 'px'};
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  resize: vertical;
`;

const MainAllContainer = styled.View`
  padding: 0 15px;
`;
const OnStageContainer = styled.View`
  margin: 10px 0;
`;

const TitleText = styled.Text`
  font-size: 25px;
  color: ${(props) => props.color};
  font-weight: 500;
  margin: 10px 0;
`;
