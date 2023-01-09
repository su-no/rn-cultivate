import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { screenHeight, screenWidth } from '../common/utils';
import styled from '@emotion/native';

export default function Main({ navigation: { navigate } }) {
  return (
    <ScrollView>
      <BannerContainer>
        <Image
          source={require('../assets/banner.png')}
          style={{ width: screenWidth, height: screenHeight / 4 }}
        />
      </BannerContainer>
      <MainAllContainer>
        <OnStageContainer>
          <TitleText>
            <Text style={{ fontSize: 30 }}>On Stage</Text>
          </TitleText>
          <OnStageBox>
            <Image
              source={require('../assets/pansori.png')}
              style={{ width: 100, height: 200 }}
            />
            <Image
              source={require('../assets/younha.jpg')}
              style={{ width: 100, height: 200 }}
            />
            <Image
              source={require('../assets/cats.jpg')}
              style={{ width: 100, height: 200 }}
            />
          </OnStageBox>
        </OnStageContainer>
        <UpcomingContainer>
          <TitleText>
            <Text style={{ fontSize: 30 }}>Upcoming</Text>
          </TitleText>
          <UpcomingBox>
            <Image
              source={require('../assets/pansori.png')}
              style={{ width: 100, height: 200 }}
            />
            <Image
              source={require('../assets/younha.jpg')}
              style={{ width: 100, height: 200 }}
            />
            <Image
              source={require('../assets/cats.jpg')}
              style={{ width: 100, height: 200 }}
            />
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

const BannerContainer = styled.View``;
const MainAllContainer = styled.View`
  padding: 20px;
`;
const OnStageContainer = styled.View``;
const OnStageBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
