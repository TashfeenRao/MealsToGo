import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fonts.fontSizes[4]};
  color: ${(props) => props.theme.colors.ui.red};
  padding: ${(props) => props.theme.spacing[4]};
`;

export const MyCard = styled(Card)`
  background: ${(props) => props.theme.colors.ui.white};
`;

export const MyCardCover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.ui.white};
  padding: ${(props) => props.theme.spacing[6]};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing[6]};
`;

export const RestaurentContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.spacing[4]};
  background-color: ${(props) => props.theme.colors.ui.red};
`;

export const MySafeAreaView = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;
