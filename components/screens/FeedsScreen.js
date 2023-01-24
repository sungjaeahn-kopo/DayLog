import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import FeedList from '../FeedList';
import FloatingWriteButton from '../FloatingWriteButton';

function FeedsScreen() {
  const {logs} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
