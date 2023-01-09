import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from '@emotion/native';
import { screenHeight } from '../common/utils';

// import { LIGHT_GRAY_COLOR, GRAY_COLOR, SKY_COLOR } from '../common/colors';

export default function MyTickets() {
  const dday = 'D-Day';
  const title = '서울 남산 국악당';
  const date = '2023-02-04~2023-02-04';
  const location = '세종문화회관 대극장';
  const price = '무료';

  return (
    <StSafeArea>
      <ScrollView>
        <SwiperChildView>
          <StTicketHeader>
            <HeaderText>{dday}</HeaderText>
          </StTicketHeader>

          <Row>
            <BackgroundImg source={require('../assets/sampleImg.png')} />
            <Column>
              {/* 텍스트 이모지는 통합해서 */}
              <TitleText>{title}</TitleText>
              <DetailText>{date}</DetailText>
              <DetailText>{location}</DetailText>
              <DetailText>{price}</DetailText>
            </Column>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <StTicketHeader>
            <DetailText>{dday}</DetailText>
          </StTicketHeader>

          <Row>
            <BackgroundImg source={require('../assets/sampleImg2.png')} />
            <Column>
              {/* 텍스트 이모지는 통합해서 */}
              <TitleText>
                {/* <MaterialCommunityIcons
                    name="movie-star-outline"
                    size={24}
                    color="black"
                  /> */}
                {title}
              </TitleText>
              <DetailText>
                {/* <MaterialCommunityIcons
                    name="calendar-heart"
                    size={24}
                    color="black"
                  /> */}
                {date}
              </DetailText>
              <DetailText>
                {/* <EvilIcons name="location" size={24} color="black" /> */}
                {location}
              </DetailText>
              <DetailText>
                {/* <Foundation name="dollar" size={24} color="black" /> */}
                {price}
              </DetailText>
            </Column>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <StTicketHeader>
            <DetailText>{dday}</DetailText>
          </StTicketHeader>

          <Row>
            <BackgroundImg source={require('../assets/sampleImg2.png')} />
            <Column>
              {/* 텍스트 이모지는 통합해서 */}
              <TitleText>
                {/* <MaterialCommunityIcons
                    name="movie-star-outline"
                    size={24}
                    color="black"
                  /> */}
                {title}
              </TitleText>
              <DetailText>
                {/* <MaterialCommunityIcons
                    name="calendar-heart"
                    size={24}
                    color="black"
                  /> */}
                {date}
              </DetailText>
              <DetailText>
                {/* <EvilIcons name="location" size={24} color="black" /> */}
                {location}
              </DetailText>
              <DetailText>
                {/* <Foundation name="dollar" size={24} color="black" /> */}
                {price}
              </DetailText>
            </Column>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <StTicketHeader>
            <DetailText>{dday}</DetailText>
          </StTicketHeader>

          <Row>
            <BackgroundImg source={require('../assets/sampleImg.png')} />
            <Column>
              {/* 텍스트 이모지는 통합해서 */}
              <TitleText>
                {/* <MaterialCommunityIcons
                    name="movie-star-outline"
                    size={24}
                    color="black"
                  /> */}
                {title}
              </TitleText>
              <DetailText>
                {/* <MaterialCommunityIcons
                    name="calendar-heart"
                    size={24}
                    color="black"
                  /> */}
                {date}
              </DetailText>
              <DetailText>
                {/* <EvilIcons name="location" size={24} color="black" /> */}
                {location}
              </DetailText>
              <DetailText>
                {/* <Foundation name="dollar" size={24} color="black" /> */}
                {price}
              </DetailText>
            </Column>
          </Row>
        </SwiperChildView>
      </ScrollView>
    </StSafeArea>
  );
}

const StSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SwiperChildView = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  height: ${screenHeight / 4.5 + 'px'};
  /* background-color: teal; */
  margin: 10px;
  border-radius: 15px;
`;

const StMYTicket = styled.TouchableOpacity`
  flex: 1;
`;

const StTicketHeader = styled.View`
  justify-content: flex-end;
  height: ${screenHeight / 22 + 'px'};
  background-color: #272727;

  opacity: 1;
  /* margin: 10px; */
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  /* position: absolute; */
  width: 100%;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* right: 0;
  bottom: 0; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  opacity: 0.3;
`;
const Column = styled.View`
  width: 65%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin: 5px;
`;

const DetailText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  margin: 3px;
`;
const HeaderText = styled.Text`
  color: #ffffff;
  padding: 5px;
  font-weight: 600;
  margin-left: 10px;
`;
