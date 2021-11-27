import React, {useRef} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';

import * as Colors from '../config/colors';

/* =============================================================================
<TextInput />
============================================================================= */
const TextInput = ({
  left,
  right,
  label,
  value,
  errorText,
  editable,
  disabled,
  placeholder,
  labelStyle,
  inputStyle,
  containerStyle,
  contentContainerStyle,
  onPress,
  onChange,
  ...props
}) => {
  const _textInput = useRef();

  const _handleChange = inputValue => {
    if (typeof onChange === 'function') {
      onChange(inputValue);
    }
  };

  const _handlePress = e => {
    if (typeof onPress === 'function') {
      onPress(e);
    } else if (_textInput.current && editable) {
      _textInput.current.focus();
    }
  };

  return (
    <Pressable
      style={[styles.container, containerStyle]}
      disabled={disabled}
      onPress={_handlePress}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View
        style={[
          styles.content,
          !!errorText && styles.error,
          contentContainerStyle,
        ]}>
        {left}
        <RNTextInput
          ref={_textInput}
          value={value}
          style={[
            styles.input,
            left && styles.inputWithLeft,
            right && styles.inputWithRight,
            inputStyle,
          ]}
          editable={editable}
          selectionColor="#8A93A0"
          placeholderTextColor={Colors.placeholder}
          placeholder={placeholder}
          onChangeText={_handleChange}
          {...props}
        />
        {right}
      </View>
      {!!errorText && (
        <Text style={styles.errorTxt}>
          <FontAwesome5Icon name="info-circle" color={Colors.primary} />{' '}
          {errorText}
        </Text>
      )}
    </Pressable>
  );
};

TextInput.defaultProps = {
  editable: true,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    letterSpacing: 1,
    color: '#2A3037',
    fontFamily: 'Poppins-Semibold',
  },
  content: {
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  error: {
    borderWidth: 1.2,
    borderColor: 'red',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    paddingHorizontal: 0,
    fontFamily: 'Poppins-Regular',
  },
  inputWithLeft: {
    marginLeft: 10,
  },
  inputWithRight: {
    marginRight: 10,
  },
  errorTxt: {
    marginTop: 5,
    marginLeft: 5,
    color: Colors.primary,
  },
});

/* Export
============================================================================= */
export default TextInput;
