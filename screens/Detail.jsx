import { ScrollView } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useQueries } from 'react-query';
import { getDetail, getReviews } from '../common/api';
import DetailInfoContainer from '../components/DetailInfoContainer/DetailInfoContainer';
import Loader from '../components/Loader/Loader';
import ReviewContainer from '../components/ReviewContainer/ReviewContainer';

export default function Detail({ route }) {
  // * params : title 받아오기
  const { title } = route.params;

  const queries = useQueries([
    {
      // firebase에서 공연 상세정보 받아오는 함수
      queryKey: 'detail',
      queryFn: () => getDetail(title),
    },
    {
      // firebase에서 리뷰 데이터 받아오는 함수
      queryKey: 'reviews',
      queryFn: () => getReviews(title),
    },
  ]);

  const [
    { data: detail, isLoading: isDetailLoading },
    { data: reviewData, isLoading: isReviewLoading },
  ] = queries;

  if (!detail || isDetailLoading || isReviewLoading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      {/* 공연 정보 */}
      <DetailInfoContainer detail={detail} />
      {/* 후기 & 기대평 */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding' })}
      >
        <ReviewContainer title={title} reviewData={reviewData} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
