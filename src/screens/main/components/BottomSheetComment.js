import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomSheet from '../../../components/bottomSheets/BottomSheet';
import HeaderBottomSheetComment from './HeaderBottomSheetComment';
import FooterBottomSheetComment from './FooterBottomSheetComment';
import { Container, Loading } from '../../../components';
import { HEIGHT } from '../../../configs/constant';
import { SPACING } from '../../../configs/styles';
import { FlatList } from 'react-native-gesture-handler';
import ItemComment from '../../../components/item/ItemComment';
import { useSelector, useDispatch } from 'react-redux';
import { setIsShowComment } from '../../../store/mainScreenSlice';
import * as commentApi from '../../../apis/comment.api';
import { Dimensions, StyleSheet, View, Modal, Pressable, ActivityIndicator, StatusBar, Platform } from 'react-native';
import { current } from '@reduxjs/toolkit';
import CommentScreen from './CommentScreen';
import { Portal } from 'react-native-paper';




const { width, height } = Dimensions.get('window')


const BottomSheetComment = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [update_comment, setUpdate_comment] = useState('')

  const isShowComment = useSelector(state => state.mainScreen.isShowComment);
  const currentComment = useSelector(state => state.mainScreen.currentComment);


  const fetchCommentData = useCallback(() => {
    commentApi.fetchComment(currentComment)
      .then((r) => {
        setData(r.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentComment, update_comment ]);
  useEffect(() => {
    fetchCommentData()
  }, [fetchCommentData])




  const handleClickClose = useCallback(() => {
    dispatch(setIsShowComment(false));
    setData('')
  }, [dispatch]);

  const onCloseBottomSheet = () => {
    dispatch(setIsShowComment(false));
  };

  return (
    
      <Modal
        visible={isShowComment}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.main_container}>
          <Pressable onPress={handleClickClose} style={styles.topContainer} />

          {/* Bottom Section */}
          <View style={styles.bottomContainer}>
            <HeaderBottomSheetComment handleClickClose={handleClickClose} no_of_comment={data.length} />

            {data ? (
              <CommentScreen data={data} />
            ) : (
              <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
                <ActivityIndicator size={'large'} color={'#020202'} />
              </View>
            )}

            <FooterBottomSheetComment currentComment={currentComment} setUpdate_comment={setUpdate_comment}  />
          </View>

        </View>
      </Modal>
    
  );
};

export default BottomSheetComment;


const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  main_container: {
    width: width,
    height: height,
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
  },
  bottomContainer: {
    width: width,
    height: height,
    backgroundColor: '#fff',
  }
})
