import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styled from '@emotion/native';
import { useEffect, useState } from 'react';
import { GRAY_COLOR, BLACK_COLOR } from '../common/colors';
import Poster from '../components/Poster/Poster';
import { getData } from '../common/api';
import { useQuery } from 'react-query';
import Loader from '../components/Loader/Loader';

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
  const { data, error, isLoading } = useQuery({
    queryKey: 'data',
    queryFn: () => getData(),
  });

  const [category, setCategory] = useState('All');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      switch (category) {
        case 'All':
          return setFilteredData(data);

        case '강의':
          return setFilteredData(
            data.filter((item) => lectures.includes(item.CODENAME)),
          );
        case '전시':
          return setFilteredData(
            data.filter((item) => exhibitions.includes(item.CODENAME)),
          );
        case '공연':
          return setFilteredData(
            data.filter((item) => shows.includes(item.CODENAME)),
          );
        case '축제':
          return setFilteredData(
            data.filter((item) => festivals.includes(item.CODENAME)),
          );
      }
    }
  }, [data, category]);

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
        keyExtractor={(item, index) => index}
        numColumns={3}
        data={filteredData}
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
