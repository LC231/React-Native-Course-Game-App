import { StyleSheet, ImageBackground, View, SafeAreaViewBase } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import colours from '../constants/colours';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  


  }
  return (
        <LinearGradient colors={[colours.primary700, colours.accent500]} 
      style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')} 
        style={styles.rootScreen} 
        resizeMode="cover"
        imageStyle={styles.backgroundImage}> 
          <SafeAreaViewBase style={styles.rootScreen}>{screen}</SafeAreaViewBase>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
