import { useContext } from "react";
import { Container, SignOutButton, Title } from "./styles";
import { Feather } from "@react-native-vector-icons/feather";
import { AppContext } from "../../contexts/appContext";

export function Header() {

  const { signOut } = useContext(AppContext)

  function handleSignOut(){
    signOut()
  }

  return (
    <Container>
      <Title>StockFlow</Title>
      <SignOutButton onPress={handleSignOut}>
        <Feather name="log-out" size={25} color={'#FFF'}/>
      </SignOutButton>
    </Container>
  );
}
