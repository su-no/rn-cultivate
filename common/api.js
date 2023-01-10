import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { dbService } from './firebase';

export const API_KEY = '78526f445070736837397761636864';

// firebase에서 title과 일치하는 상세정보 받아오는 함수
export const getDetail = async (title) => {
  const titleValue = title
    .split(/[\[\]0-9']/g)
    .join('_')
    .split('·')
    .join('/');
  const path = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/1000/%20/${titleValue}`;
  return fetch(path)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

// firebase에서 title과 일치하는 리뷰 받아오는 함수
export const getReviews = async (title) => {
  const q = query(
    collection(dbService, 'reviews'),
    where('title', '==', title),
  );
  const reviews = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => reviews.push({ id: doc.id, ...doc.data() }));
  // 작성일자 내림차순 정렬
  return reviews.sort((a, b) => b.date - a.date);
};

// firebase에 리뷰를 추가하는 함수
export const createReview = async (review) => {
  await addDoc(collection(dbService, 'reviews'), review);
};

// firebase에서 리뷰를 삭제하는 함수
export const deleteReview = async (id) => {
  await deleteDoc(doc(dbService, 'reviews', id));
};

// firebase의 리뷰를 수정하는 함수
export const updateReview = async ({ id, editedContent }) => {
  await updateDoc(doc(dbService, 'reviews', id), {
    content: editedContent,
  });
};
