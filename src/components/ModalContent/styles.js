import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(36, 36, 36, 0.7);
`;

export const Content = styled.View`
  width: 90%;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
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
export const CloseButton = styled.TouchableOpacity`
  margin-top: 5px;
`;
export const CloseText = styled.Text`
  text-align: center;
  opacity: 0.7;
`;
