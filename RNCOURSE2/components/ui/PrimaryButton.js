import { View, Text, Pressable, StyleSheet } from 'react-native';
import colours from '../../../constants/colours';

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable  
            style={(({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
            onPress={onPress} 
            android_ripple={{color: colours.primary800}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: colours.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        color: colours.accent500,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});