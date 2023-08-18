import {View, Button, Modal, Pressable} from 'react-native';

import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

function Ball() {
  const size = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{scale: size.value}],
    };
  });

  React.useEffect(() => {
    size.value = withRepeat(withTiming(1.5, {duration: 2000}), -1);
  }, []);

  return (
    <Animated.View
      style={[{width: 100, height: 100, backgroundColor: 'red'}, style]}
    />
  );
}

export default function EmptyExample() {
  const [modal, setModal] = React.useState(false);

  const hide = () => {
    setModal(!modal);
  };

  return (
    <View style={{marginTop: 100, height: 500}}>
      <Button
        title="Show"
        onPress={() => {
          setModal(true);
        }}
      />
      <Modal visible={modal} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={hide}>
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'blue',
                alignSelf: 'center',
              }}
            />
          </Pressable>
        </View>
      </Modal>
      <Ball />
    </View>
  );
}
