import { Linking, View } from 'react-native';
import * as S from './styles';
import DetailInfo from '../DetailInfo/DetailInfo';
import VioletButton from '../VioletButton/VioletButton';

export default function DetailTopContainer({ data }) {
  const { imgPath, title, period, place, price, link } = data;

  return (
    <>
      {/* 포스터 이미지 */}
      <View>
        <S.Poster source={{ uri: imgPath }} />
        {/* 관심티켓 버튼 */}
        <S.TicketContainer
          activeOpacity={0.8}
          onPress={() => console.log('관심티켓 추가/삭제')}
        >
          <S.Ticket source={require('../../assets/ticket.png')} />
        </S.TicketContainer>
      </View>
      {/* 공연 정보 */}
      <S.Container>
        {/* 제목 */}
        <S.Title>{title}</S.Title>
        {/* 기간, 장소, 가격 */}
        <DetailInfo period={period} place={place} price={price} />
        {/* 홈페이지 가기 버튼 */}
        <VioletButton
          label="홈페이지 가기"
          onPress={() => Linking.openURL(link)}
        />
      </S.Container>
    </>
  );
}
