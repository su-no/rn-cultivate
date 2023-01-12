import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from '@emotion/native';
import { useEffect, useState } from 'react';
import { authService } from '../common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { dbService } from '../common/firebase';

import TicketDetail from '../components/MyTicket/TicketDetail';

export default function MyTickets({ navigation: { navigate } }) {
  const [bookmarks, setBookmarks] = useState([]);
  const uid = authService.currentUser.uid;

  const getBookmarks = async () => {
    const uid = authService.currentUser.uid;
    const q = query(
      collection(dbService, 'bookmarks'),
      where('uid', '==', uid),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBookmarks(doc.data().bookmarks);
    });
  };

  // console.log(bookmarks);

  useEffect(() => {
    getBookmarks().catch((e) => console.log(e));
  }, []);

  return (
    <StSafeArea>
      <ScrollView>
        <StView>
          {bookmarks.map((title, i) => {
            return <TicketDetail title={title} navigate={navigate} key={i} />;
          })}
        </StView>
      </ScrollView>
    </StSafeArea>
  );
}

const StSafeArea = styled.SafeAreaView`
  flex: 1;
`;
const StView = styled.View`
  background-color: ${(props) => props.theme.color.background};
`;
