import { Platform } from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #fff;
  margin: 64px 0 24px;
`;

export const GoToSignIn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const GoToSignInText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #fff;
  font-size: 20px;
`;
