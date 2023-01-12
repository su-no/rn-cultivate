import { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import styled from '@emotion/native';
import { GRAY_COLOR, BLACK_COLOR } from '../common/colors';
import Poster from '../components/Poster/Poster';
import { getData } from '../common/api';

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

export default function Category({}) {
  const [category, setCategory] = useState('All');

  const [lectureDatas, setLectureDatas] = useState([]);
  const [exhibitionsDatas, setExhibitionsDatas] = useState([]);
  const [showsDatas, setShowsDatas] = useState([]);
  const [festivalsDatas, setFestivalsDatas] = useState([]);

  const { data, isSuccess } = useQuery({
    queryKey: 'data',
    queryFn: getData,
  });

  const temp = () => {
    if (category === '강의') {
      return lectureDatas;
    } else if (category === '전시') {
      return exhibitionsDatas;
    } else if (category === '공연') {
      return showsDatas;
    } else if (category === '축제') {
      return festivalsDatas;
    } else if (category === 'All') {
      return data;
    }
  };

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

  return (
    <StyledWrap>
      <StyledBtn>
        <TouchableOpacity onPress={() => setCategory('All')}>
          <StyledBtnText color={category === 'All' ? BLACK_COLOR : GRAY_COLOR}>
            All
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('강의')}>
          <StyledBtnText color={category === '강의' ? BLACK_COLOR : GRAY_COLOR}>
            강의
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('전시')}>
          <StyledBtnText color={category === '전시' ? BLACK_COLOR : GRAY_COLOR}>
            전시
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('공연')}>
          <StyledBtnText color={category === '공연' ? BLACK_COLOR : GRAY_COLOR}>
            공연
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('축제')}>
          <StyledBtnText color={category === '축제' ? BLACK_COLOR : GRAY_COLOR}>
            축제
          </StyledBtnText>
        </TouchableOpacity>
      </StyledBtn>

      <PosterList
        keyExtractor={(item, idx) => idx}
        numColumns={3}
        data={temp()}
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
`;

const StyledBtn = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;

  width: 100%;
  justify-content: space-around;
`;

const StyledBtnText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.color};
`;

const PosterList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
`;

const PosterWrap = styled.TouchableOpacity`
  width: 33.33%;
  padding: 0 1%;
`;
