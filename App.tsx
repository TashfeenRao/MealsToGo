import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurentsScreen from "./src/screens/Restaurents.screen";
import { MySafeAreaView } from "./src/styles/stylessheet";
import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [interLoaded] = useInter({
    Inter_400Regular,
  });
  if (!latoLoaded || !interLoaded) return null;
  return (
    <>
      <MySafeAreaView>
        <RestaurentsScreen />
      </MySafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}
