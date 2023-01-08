import { ScrollView } from 'react-native';
import DetailInfoContainer from '../components/DetailInfoContainer/DetailInfoContainer';
import ReviewContainer from '../components/ReviewContainer/ReviewContainer';

export default function Detail() {
  // TODO: API 호출해서 공연 정보 가져오기

  const data = {
    imgPath:
      'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=dd08548640fb4db189c5c3c68c603406&thumb=Y',
    title: '뮤지컬 캣츠 내한공연-서울 (Musical CATS)',
    period: '2021.10.01 ~ 2021.10.31',
    place: '서울 코엑스 아레나',
    price: '100,000원 ~ 300,000원',
    link: 'https://www.catsmusical.co.kr/',
  };

  return (
    <>
      <ScrollView>
        {/* 공연 정보 */}
        <DetailInfoContainer data={data} />
        {/* 후기 & 기대평 */}
        <ReviewContainer />
      </ScrollView>
    </>
  );
}
