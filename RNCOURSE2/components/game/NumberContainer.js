import { View, Text, StyleSheet } from 'react-native';
import colours from '../../../constants/colours';



function NumberContainer({children}) {
return <View style={styles.numberContainer}>
    <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;
const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: colours.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: colours.accent500,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});