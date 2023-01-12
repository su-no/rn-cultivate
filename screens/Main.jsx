import { useState } from 'react';
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useQuery } from 'react-query';
import Swiper from 'react-native-swiper';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { screenHeight, formatDate, getCurrentDate } from '../common/utils';
import { getData } from '../common/api';
import { DARK_GRAY_COLOR, VIOLET_COLOR } from '../common/colors';
import Poster from '../components/Poster/Poster';

export default function Main() {
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

  if (isLoading) {
    return;
  }

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
                    source={require('../assets/matilda.jpg')}
                  />
                  <LinearGradient
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    colors={['transparent', 'black']}
                  />
                </SwiperChildView>
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
                          key={idx}
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
  color: ${({ color }) => color};
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
`;
