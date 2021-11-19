import React from "react";
import { StyleSheet } from "react-native";
import { MyCard, Title, MyCardCover } from "../styles/stylessheet";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
const Restaurentinfo = ({ restaurent = {} }) => {
  const {
    name = "some restaurent",
    address = "house 7x main street govt colony",
    icon,
    photo = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    isOpenNow,
    rating,
    isClosedTemporary,
  } = restaurent;
  return (
    <MyCard>
      <MyCardCover source={{ uri: photo }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </MyCard>
  );
};

export default Restaurentinfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
  },
  cover: {
    backgroundColor: "#fff",
  },
});
