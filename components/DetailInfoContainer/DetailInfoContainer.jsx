import { Linking } from 'react-native';
import DetailInfo from '../DetailInfo/DetailInfo';
import VioletButton from '../VioletButton/VioletButton';
import * as S from './styles';

export default function DetailTopContainer({ data }) {
  const { imgPath, title, period, place, price, link } = data;

  return (
    <>
      {/* 포스터 이미지 */}
      <S.Poster source={{ uri: imgPath }} />
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
