import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },

    title: {
        margin: 40,
        fontSize: 24,
    },
    
    buttonView: {
        marginTop: 40,
        width: Dimensions.get('screen').width - 140,
    }

})