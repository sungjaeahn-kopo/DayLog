import React, {useContext} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../FloatingWriteButton';

function FeedsScreen() {
  return (
    <View style={styles.block}>
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
