import React, { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import { Header } from "../../components/Header";
import { AddButton, Background, ContainterList, ListItems, ModalBackground } from "./styles";
import { CardItem } from "../../components/Card";
import Feather from "@react-native-vector-icons/feather";
import { ModalContent } from "../../components/ModalContent";

export function HomePage() {
  const { items, stateModal, modalVisible } = useContext(AppContext);
  return (
    <Background>
      <Header />
      <ListItems
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem data={item} />}
      />
      <ModalBackground
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={stateModal}
      >
        <ModalContent /> 
      </ModalBackground>
      <AddButton onPress={stateModal}>
        <Feather 
          name='plus'
          size={30}
          color='#000'
        />
      </AddButton>
    </Background>
  );
}
