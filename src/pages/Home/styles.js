import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #323232;
    justify-content: space-evenly;
`

export const ListItems = styled.FlatList`
    width: 100%;
`

export const AddButton = styled.TouchableOpacity`
    margin-bottom: 35px;
    background-color: #FFF;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-right: 15px;
`

export const ModalBackground = styled.Modal`
    flex: 1;
    background-color: rgba(36, 36, 36, 0.5);
`
