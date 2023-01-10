import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { screenHeight } from '../common/utils';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { getData } from '../common/api';
import { useQuery } from 'react-query';

export default function Main({ navigation: { navigate } }) {
  const { data, isLoading } = useQuery({
    queryKey: 'data',
    queryFn: () => getData(),
  });
  if (isLoading) {
    return (
      <View>
        <Text>로딩중입니다</Text>
      </View>
    );
  }

  const [show, setShow] = useState('');

  const [onStage, setOnStage] = useState([]);
  const [upComings, setUpComings] = useState([]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Swiper height="100%" showsPagination={false} autoplay loop>
        <SwiperChildView>
          <BackgroundImg
            style={StyleSheet.absoluteFill}
            source={{ uri: data[0]?.MAIN_IMG }}
          />
          <LinearGradient
            style={{ position: 'absolute', top: 0, left: 0 }}
            colors={['transparent', 'red']}
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
        <SwiperChildView>
          <BackgroundImg
            style={StyleSheet.absoluteFill}
            source={require('../assets/cats.jpg')}
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <OnStageBox>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  source={{ uri: data[0]?.MAIN_IMG }}
                  style={{ width: 100, height: 200 }}
                />
                {/* <Text>{data[0]?.TITLE}</Text> */}
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  source={{ uri: data[1]?.MAIN_IMG }}
                  style={{ width: 100, height: 200 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  source={{ uri: data[2]?.MAIN_IMG }}
                  style={{ width: 100, height: 200 }}
                />
              </TouchableOpacity>
            </OnStageBox>
          </ScrollView>
        </OnStageContainer>
        <UpcomingContainer>
          <TitleText>
            <Text style={{ fontSize: 30 }}>Upcoming</Text>
          </TitleText>
          <UpcomingBox>
            <TouchableOpacity>
              <Image
                source={require('../assets/cats.jpg')}
                style={{ width: 100, height: 200 }}
              />
            </TouchableOpacity>
          </UpcomingBox>
        </UpcomingContainer>
        {/* 상세페이지 임시 코드 */}
        <TouchableOpacity
          onPress={() => navigate('Stack', { screen: 'Detail' })}
        >
          <Text>상세페이지 가기</Text>
        </TouchableOpacity>
        {/* 상세페이지 임시 코드 */}
      </MainAllContainer>
    </ScrollView>
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

const UpcomingContainer = styled.View``;

const UpcomingBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TitleText = styled.Text`
  font-weight: 200;
  margin-top: 20px;
`;
