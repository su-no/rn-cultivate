import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { authService, dbService } from '../../common/firebase';
import { getDate } from '../../common/utils';
import * as S from './styles';
import Input from '../Input/Input';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function ReviewContainer({ title }) {
  // 리뷰 데이터
  const [reviews, setRivews] = useState([]);

  // firebase 현재 유저 정보
  const user = authService.currentUser;
  const nickname = user.displayName;

  // firebase에서 title과 일치하는 리뷰 받아오는 함수
  const getReviews = async () => {
    const q = query(
      collection(dbService, 'reviews'),
      where('title', '==', title),
    );

    try {
      const reviews = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        reviews.push({ id: doc.id, ...doc.data() }),
      );
      setRivews(reviews);
    } catch (error) {
      console.log(error);
    }
  };

  // firebase에 리뷰 추가하는 함수
  const addReview = async (content) => {
    const review = {
      title,
      content, // input에 입력한 내용
      nickname, // firebase - currentUser displayName
      date: Date.now(),
    };

    try {
      await addDoc(collection(dbService, 'reviews'), review);
    } catch (error) {
      console.log(error);
    }
  };

  // 컴포넌트 마운트 시 리뷰 데이터 받아오기
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <S.Container>
      <View>
        <S.Title>후기 & 기대평</S.Title>
        <Input addReview={addReview} />
        {reviews.map(({ id, content, nickname, date }) => (
          <ReviewItem
            id={id}
            content={content}
            nickname={nickname}
            date={getDate(date)}
          />
        ))}
      </View>
    </S.Container>
  );
}
