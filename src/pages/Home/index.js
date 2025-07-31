import React, { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import { Header } from "../../components/Header";
import { AddButton, Background, ContainterList, ListItems } from "./styles";
import { CardItem } from "../../components/Card";
import Feather from "@react-native-vector-icons/feather";
import {FontAwesome6} from "@react-native-vector-icons/fontawesome6";

export function HomePage() {
  const { signOut } = useContext(AppContext);

  const items = [
    { id: "123123", name: "Arroz" },
    { id: "123094", name: "Feijao" },
    { id: "094736", name: "Macarrão" },
    { id: "123847", name: "Café" },
    { id: "120398", name: "Sal" },
    { id: "097689", name: "Açucar" },
    { id: "542345", name: "leite em pó" },
    { id: "414241", name: "Oleo" },
  ];

  return (
    <Background>
      <Header />
      <ListItems
        data={items}
        renderItem={({ item }) => <CardItem data={item} />}
      />
      <AddButton>
        <FontAwesome6 
          name='plus-circle'
          size={30}
          color='#000'
        />
      </AddButton>
    </Background>
  );
}
