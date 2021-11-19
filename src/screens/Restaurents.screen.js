import React from "react";
import Restaurentinfo from "../components/RestaurentInfo";
import RestaurentsList from "../components/RestaurentsList";
import Search from "../components/Search";
import { StyleSheet } from "react-native";
import { RestaurentContainer, SearchContainer } from "../styles/stylessheet";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../design";

export default function RestaurentsScreen() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <RestaurentContainer>
          <RestaurentsList />
        </RestaurentContainer>
      </ThemeProvider>
    </>
  );
}
