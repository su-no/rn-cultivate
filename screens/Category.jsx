import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styled from '@emotion/native';
import { useState } from 'react';
import { GRAY_COLOR, BLACK_COLOR } from '../common/colors';
export default function Category() {
  const Random = '../assets/Random_img.png';
  const [category, setCategory] = useState('');

  const Movies = [
    {
      id: 1,
      Image: require(Random),
    },
    {
      id: 2,
      Image: require(Random),
    },
    {
      id: 3,
      Image: require(Random),
    },
    {
      id: 4,
      Image: require(Random),
    },
    {
      id: 5,
      Image: require(Random),
    },
    {
      id: 6,
      Image: require(Random),
    },
  ];

  const Show = ({ item }) => (
    <View>
      <StyledImgWrap>
        <Image source={item.Image} style={{ width: '32%' }} />
        <Image source={item.Image} style={{ width: '32%' }} />
        <Image source={item.Image} style={{ width: '32%' }} />
      </StyledImgWrap>
    </View>
  );

  return (
    <StyledWrap>
      <StyledCategory>카테고리</StyledCategory>
      <StyledBtn>
        <TouchableOpacity onPress={() => setCategory('All')}>
          <StyledBtnText color={category === 'All' ? BLACK_COLOR : GRAY_COLOR}>
            강의
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('Kpop')}>
          <StyledBtnText color={category === 'Kpop' ? BLACK_COLOR : GRAY_COLOR}>
            전시
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('Musical')}>
          <StyledBtnText
            color={category === 'Musical' ? BLACK_COLOR : GRAY_COLOR}
          >
            공연
          </StyledBtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('theater')}>
          <StyledBtnText
            color={category === 'theater' ? BLACK_COLOR : GRAY_COLOR}
          >
            축제
          </StyledBtnText>
        </TouchableOpacity>
      </StyledBtn>
      <FlatList data={Movies} renderItem={Show} />
    </StyledWrap>
  );
}

const StyledWrap = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const StyledCategory = styled.Text`
  font-size: 30px;
  font-weight: bolder;
`;

const StyledBtn = styled.View`
  /* border: 1px solid black; */
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  width: 87%;
  justify-content: space-around;
`;

const StyledBtnText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.color};
`;

const StyledImgWrap = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: space-between;
  padding: 5px;
`;

const StyledImg = styled.View`
  flex-direction: row;
`;
