import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 12,
        height: 50,
        width: 270,
        elevation: 1,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 3 }, // change this for more shadow
        shadowOpacity: 0.15,
        shadowRadius: 6,
        backgroundColor: 'white',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%'
    },
    input: {
        flex: 1,
    },
    iconWrapper: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;