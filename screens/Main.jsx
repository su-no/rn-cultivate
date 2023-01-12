import { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
      data?.forEach((item) => {
        const startdate = formatDate(item.STRTDATE);
        const enddate = formatDate(item.END_DATE);
        const today = getCurrentDate();
        if (startdate <= today && today <= enddate) {
          setOnstageData((prev) => [...prev, item]);
        } else if (startdate > today) {
          setUpcomingData((prev) => [...prev, item]);
        }
      });
    },
  });

  if (isLoading) {
    return;
  }

  console.log('---------------------');
  return (
    data && (
      <ScrollView style={{ flex: 1 }}>
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
              source={require('../assets/color.jpg')}
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
              <Text style={{ fontSize: 30 }}>On Stage</Text>
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
          <UpcomingContainer>
            {/* upcomingData.((item) => <View>Onstage : 정보,,,</View>) */}
            <TitleText>
              <Text style={{ fontSize: 30 }}>Upcoming</Text>
            </TitleText>
            <View>
              {upcomingData.map((item, idx) => (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 15,
                    paddingRight: 20,
                  }}
                >
                  <Poster
                    imageURL={item.MAIN_IMG}
                    title={item.TITLE}
                    key={idx}
                  />
                </View>
              ))}
            </View>
          </UpcomingContainer>

          {[
            '뮤지컬 캣츠 내한공연-서울 (Musical CATS)',
            'EO(서)발레·서발레씨어터가 함께하는 크리스마스 최고의 선물 호두까기 인형',
            '삶을 통해 배워온 樂_ 현섭하다 Ⅲ',
            '[2022 서울라이트 DDP] 크리스마스 행사',
            'TANGO CARNIVAL',
            // 맵1
          ].map((title, idx) => (
            <TouchableOpacity
              key={idx + 10000}
              onPress={() => {
                navigate('Stack', {
                  screen: 'Detail',
                  params: { title },
                });
              }}
            >
              <Text>{title}</Text>
            </TouchableOpacity>
          ))}
        </MainAllContainer>
      </ScrollView>
    )
  );
}

const SwiperChildView = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: ${screenHeight / 3 + 'px'};
  background-color: green;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const MainAllContainer = styled.View`
  padding: 20px;
`;
const OnStageContainer = styled.View``;

const UpcomingContainer = styled.View``;

const TitleText = styled.Text`
  font-weight: 200;
  margin-top: 20px;
`;
