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

export default function Main({ navigation: { navigate } }) {
  const { data, isLoading } = useQuery({
    queryKey: 'data',
    queryFn: () => getData(),
  });
  if (isLoading) {
    return;
  }
  const year = String(new Date().getFullYear());
  const month = String(new Date().getMonth() + 1).padStart(2, 0);
  const day = String(new Date().getDate()).padStart(2, 0);
  const today = parseInt(year + month + day);
  console.log(today);

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
              {/* <FlatList
                horizontal
                contentContainerStyle={{ paddingHorizontal: 20 }}
                data={data}
                renderItem={({ data }) =>  <Poster
                    imageURL={data.MAIN_IMG}
                    title={data.TITLE}
                    key={data.id}
                  />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<View style={{ width: 10 }} />}
              /> */}

              {/* 맵2 */}
              {data.map((item, idx) => {
                return (
                  <Poster
                    imageURL={item.MAIN_IMG}
                    title={item.TITLE}
                    key={idx}
                  />
                );
              })}
            </ScrollView>
          </OnStageContainer>
          <UpcomingContainer>
            <TitleText>
              <Text style={{ fontSize: 30 }}>Upcoming</Text>
            </TitleText>

            <UpcomingBox>
              {/* <TouchableOpacity> */}
              <UpcomingList
                keyExtractor={(item) => item.TITLE}
                numColumns={3}
                data={data}
                // renderItem={Show}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              />
              {/* <Image
                source={require('../assets/cats.jpg')}
                style={{ width: 100, height: 200 }}
              />
            </TouchableOpacity> */}
            </UpcomingBox>
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

const OnStageBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;

const OnStageList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
`;

const UpcomingContainer = styled.View``;

const UpcomingBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UpcomingList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
`;

const TitleText = styled.Text`
  font-weight: 200;
  margin-top: 20px;
`;
