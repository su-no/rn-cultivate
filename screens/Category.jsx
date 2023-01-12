import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import styled from '@emotion/native';
import {
  WHITE_COLOR,
  PINK_COLOR,
  VIOLET_COLOR,
  BLUE_COLOR,
  SKY_COLOR,
  GRAY_COLOR,
  BLACK_COLOR,
  LIGHT_GRAY_COLOR,
} from '../common/colors';
import Poster from '../components/Poster/Poster';
import { getData } from '../common/api';

export default function Category({}) {
  const [category, setCategory] = useState('All');

  const [lectureDatas, setLectureDatas] = useState([]);
  const [exhibitionsDatas, setExhibitionsDatas] = useState([]);
  const [showsDatas, setShowsDatas] = useState([]);
  const [festivalsDatas, setFestivalsDatas] = useState([]);

  const currentCategory = {
    강의: lectureDatas,
    전시: exhibitionsDatas,
    공연: showsDatas,
    축제: festivalsDatas,
    All: data,
  };

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: 'data',
    queryFn: getData,
  });

  useEffect(() => {
    if (isSuccess) {
      setLectureDatas(data.filter((item) => lectures.includes(item.CODENAME)));
      setExhibitionsDatas(
        data.filter((item) => exhibitions.includes(item.CODENAME)),
      );
      setShowsDatas(data.filter((item) => shows.includes(item.CODENAME)));
      setFestivalsDatas(
        data.filter((item) => festivals.includes(item.CODENAME)),
      );
    }
  }, []);

  const Show = ({ item }) => (
    <PosterWrap>
      <Poster imageURL={item.MAIN_IMG} title={item.TITLE} />
    </PosterWrap>
  );

  if (isLoading) return;
  return (
    <StyledWrap>
      <StyledBtns>
        {['All', '강의', '전시', '공연', '축제'].map((name, idx) => (
          <StyledBtn
            key={idx}
            onPress={() => setCategory(name)}
            color={colors[idx]}
          >
            <StyledBtnText
              color={category === name ? BLACK_COLOR : WHITE_COLOR}
            >
              {name}
            </StyledBtnText>
          </StyledBtn>
        ))}
      </StyledBtns>
      <PosterList
        keyExtractor={(item, idx) => idx}
        numColumns={3}
        data={currentCategory[category] ?? data}
        extraData={category}
        renderItem={Show}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </StyledWrap>
  );
}

const StyledWrap = styled.View`
  align-items: center;
  margin-top: 10px;
  flex: 1;
  padding: 0 15px;
`;

const StyledBtns = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const StyledBtn = styled.Pressable`
  width: 50px;
  height: 30px;
  justify-content: center;
  border: 1px solid ${GRAY_COLOR};
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

const StyledBtnText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${(props) =>
    props.color === 'black' ? props.theme.color.categoryTitle : props.color};
`;

const PosterList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
`;

const PosterWrap = styled.TouchableOpacity`
  width: 33.33%;
  padding: 0 1%;
`;

// 공연
const shows = [
  '뮤지컬/오페라',
  '연극',
  '무용',
  '영화',
  '국악',
  '콘서트',
  '클래식',
  '독주/독창회',
];

// 전시
const exhibitions = ['전시/미술'];

// 축제
const festivals = [
  '축제-문화/예술',
  '축제-전통/역사',
  '축제-시민화합',
  '축제-기타',
  '축제-자연/경관',
];

// 강의
const lectures = ['문화교양/강좌'];

const colors = [
  LIGHT_GRAY_COLOR,
  PINK_COLOR,
  VIOLET_COLOR,
  BLUE_COLOR,
  SKY_COLOR,
];
