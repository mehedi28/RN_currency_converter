import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop:10,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    touchField:{
        height: 40,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputFlied:{
        height: 40,
        width:250,
        color: 'teal'
    },
})

export default styles
