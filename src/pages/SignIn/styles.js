import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #323232;
`;
export const Logo = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const Container = styled.KeyboardAvoidingView`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  padding-top: 30px;
`;
export const InputLabel = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 5px;
`;
export const Input = styled.TextInput`
  background-color: #e0e0e0ff;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  height: 50px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #323232;
  margin-top: 15px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const SignUpButton = styled.TouchableOpacity`
  margin-top: 5px;
`;
export const SignUpText = styled.Text`
  text-align: center;
  opacity: 0.7;
`;
