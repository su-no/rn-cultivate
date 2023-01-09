export const API_KEY = '78526f445070736837397761636864';

export const getDetail = async (title) => {
  // 공백을 _로 변경 후 encoding

  const encodedTitle = encodeURI(title.replaceAll(' ', '_'));
  const path = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/1000/%20/${encodedTitle}`;
  return fetch(path).then((res) => res.json());
};

// firebase에서 title과 일치하는 리뷰 받아오는 함수
const getReviews = async (title) => {
  const q = query(
    collection(dbService, 'reviews'),
    where('title', '==', title),
  );
  const reviews = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => reviews.push({ id: doc.id, ...doc.data() }));
  return reviews;
};
