import { Text, StyleSheet, View } from 'react-native';
import colours from '../../../constants/colours';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.roundText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: colours.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: colours.accent500,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        elevation: 4,
    },
    roundText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: colours.primary800,
    },
    itemText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: colours.primary800,
    },
});
