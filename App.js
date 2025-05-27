import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";

import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(1);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const pickedNumHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const startNewGameHandler = () => {
    setGuessRounds(1);
    setGameIsOver(false);
    setUserNumber();
  };

  let screen = <StartGameScreen onPickNum={pickedNumHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNum={userNumber}
        gameOverHandler={gameOverHandler}
        setGuessRoundsNum={setGuessRounds}
        guessRoundsNum={guessRounds}
      />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
