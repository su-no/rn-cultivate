import {
  Image,
  ScrollView,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { screenHeight } from '../common/utils';
import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';
import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  VIOLET_COLOR,
  WHITE_COLOR,
} from '../common/colors';
import { useState } from 'react';

export default function Detail() {
  return (
    <>
      <ScrollView>
        <Image
          style={{
            width: '100%',
            height: screenHeight / 2,
          }}
          source={{
            uri: 'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=dd08548640fb4db189c5c3c68c603406&thumb=Y',
          }}
        />
        <Container>
          {/* 상단 공연 정보 시작 */}
          <View>
            <Title>뮤지컬 캣츠 내한공연-서울 (Musical CATS)</Title>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons
                name="calendar-sharp"
                size={24}
                color="black"
                style={{ marginRight: 8 }}
              />
              <DescriptionText>2023-01-23~2023-03-12</DescriptionText>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons
                name="location-outline"
                size={24}
                color="black"
                style={{ marginRight: 8 }}
              />
              <DescriptionText>세종대극장</DescriptionText>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons
                name="pricetag-outline"
                size={24}
                color="black"
                style={{ marginRight: 8 }}
              />
              <DescriptionText>
                VIP석 170,000원 / 젤리클석 170,000원 / R석 140,000원 / S석
                110,000원 / A석 90,000원 / B석 60,000원
              </DescriptionText>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: VIOLET_COLOR,
                padding: 12,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: BLACK_COLOR,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: WHITE_COLOR,
                  textAlign: 'center',
                }}
              >
                홈페이지 방문
              </Text>
            </TouchableOpacity>
          </View>
          {/* 상단 공연 정보 끝 */}
          {/* 후기 & 기대평 시작 */}
          <View>
            <Title>후기 & 기대평</Title>
            <TextInput
              placeholder="내용을 입력하세요."
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: BLACK_COLOR,
                padding: 10,
                fontSize: 15,
                marginBottom: 20,
              }}
            />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </View>
          {/* 후기 & 기대평 끝 */}
        </Container>
      </ScrollView>
    </>
  );
}

function ReviewItem() {
  const [opened, setOpened] = useState(false);
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 10,
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: GRAY_COLOR,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, marginBottom: 5, color: BLACK_COLOR }}>
            너무 기대돼요.
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 5, color: GRAY_COLOR }}>
            고양이
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 5, color: GRAY_COLOR }}>
            2023-01-06
          </Text>
        </View>
        <Ionicons
          onPress={() => setOpened(!opened)}
          name={opened ? 'chevron-up-sharp' : 'chevron-down-sharp'}
          size={24}
          color={BLACK_COLOR}
        />
      </View>
      {opened && (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginLeft: 10,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingHorizontal: 13,
              paddingVertical: 6,
              borderRadius: 3,
            }}
          >
            <Text style={{ color: BLACK_COLOR }}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginLeft: 10,
              backgroundColor: LIGHT_GRAY_COLOR,
              paddingHorizontal: 13,
              paddingVertical: 6,
              borderRadius: 3,
            }}
          >
            <Text style={{ color: BLACK_COLOR }}>삭제</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const Container = styled.View`
  margin: 20px;
`;

const Title = styled.Text`
  word-break: break-all;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  color: ${BLACK_COLOR};
`;

const DescriptionText = styled.Text`
  word-break: break-all;
  font-size: 15px;
  flex-shrink: 1;
  font-weight: 500;
  color: ${BLACK_COLOR};
`;
