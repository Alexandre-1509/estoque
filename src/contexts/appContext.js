import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext({});

export function AppProvider({ children }) {

  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    async function loadItems(){
      const response = await api.get('/estoque')
      setItems(response.data)
    }

    loadItems()
  }, [items])

  function stateModal(){
    setModalVisible(!modalVisible)
  }
  //Cadastrando usuário
  async function signUp(userName, userEmail, userPassword) {
    try {
      const response = await api.post("/cadastro", {
        name: userName,
        email: userEmail,
        password: userPassword,
      });
    } catch (err) {
      console.log(err);
    }
  }
  //Logando usuário
  async function signIn(userEmail, userPassword) {
    try {
      const response = await api.post("/login", {
        email: userEmail,
        password: userPassword,
      });
      const { email, name, id, token } = response.data;

      await AsyncStorage.setItem('@accessToken', token)

      
      api.defaults.headers['Authorization'] = `${token}`

      setUser({
        id,
        name,
        email
      })
    } catch (err) {
      alert('Usuário ou senha incorretos')
    }
  }
  //Deslogando usuário
  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser(null)
    })
  }

  return (
    <AppContext.Provider value={{ signUp, signIn, user, signed: !!user, signOut, items, stateModal, modalVisible }}>
      {children}
    </AppContext.Provider>
  );
}
