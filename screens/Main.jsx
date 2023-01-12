import { useState } from 'react';
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useQuery } from 'react-query';
import Swiper from 'react-native-swiper';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  screenHeight,
  screenWeight,
  formatDate,
  getCurrentDate,
} from '../common/utils';
import { getData } from '../common/api';
import { DARK_GRAY_COLOR, VIOLET_COLOR } from '../common/colors';
import Poster from '../components/Poster/Poster';
import { useNavigation } from '@react-navigation/native';

export default function Main({ title }) {
  const { navigate } = useNavigation();
  const isDark = useColorScheme() === 'dark';

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

  const bannerImages = [
    {
      url: 'https://www.culture.go.kr/wday/index.do',
      img: require('../assets/banner.png'),
      onPress: null,
    },
    {
      url: 'https://namu.wiki/w/%EB%AC%B8%ED%99%94%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EB%82%A0',
      img: require('../assets/perfomer.jpg'),
      onPress: null,
    },
    {
      onPress: () =>
        navigate('Stack', {
          screen: 'Detail',
          params: { title },
        }),
      url: null,
      img: require('../assets/catsbanner.jpg'),
    },
  ];
  
  if (!data || upcomingData.length === 0 || onstageData.length === 0) {
    console.log('로딩 중');
    return;
  }
  console.log('로딩 완료');

  return (
    <FlatList
      keyExtractor={(item, idx) => item.TITLE}
      numColumns={3}
      data={upcomingData}
      renderItem={UpcomingShow}
      contentContainerStyle={{ paddingBottom: 30 }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        display: 'flex',
        paddingHorizontal: 15,
      }}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      ListHeaderComponent={() => {
        return (
          <>
            <Swiper height="100%" showsPagination={false} autoplay loop>
              {bannerImages.map((banner) => {
                  return (
                    <SwiperChildView>
                      <TouchableOpacity
                        style={StyleSheet.absoluteFill}
                        onPress={
                          banner.url
                            ? () => Linking.openURL(banner.url)
                            : banner.onPress
                        }
                      >
                        <BackgroundImg source={banner.img} />
                        <LinearGradient
                          colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
                          style={StyleSheet.absoluteFill}
                        />
                      </TouchableOpacity>
                    </SwiperChildView>
                  );
                })}
            </Swiper>
            <MainAllContainer>
              <OnStageContainer>
                <TitleText color={isDark ? VIOLET_COLOR : DARK_GRAY_COLOR}>
                  On Stage
                </TitleText>
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
                        key={item.TITLE}
                      />
                    </View>
                  ))}
                </ScrollView>
              </OnStageContainer>

              <TitleText color={isDark ? VIOLET_COLOR : DARK_GRAY_COLOR}>
                Upcoming
              </TitleText>
            </MainAllContainer>
          </>
        );
      }}
    />
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
  color: ${({ color }) => color};
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
`;
