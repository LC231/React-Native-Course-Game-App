import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <View style={styles.rootScreen}>
      <LinearGradient colors={['#4e0329', '#ddb52f']} 
      style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')} 
        style={styles.rootScreen} 
        resizeMode="cover"
        imageStyle={styles.backgroundImage}> 
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </View>
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
