import {StyleSheet} from 'react-native'

const styles= StyleSheet.create({
    row:{
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: 'white'
    },
    text:{

    },
    separator:{
        backgroundColor: 'black',
        height: StyleSheet.hairlineWidth,
    },
    icon:{
        backgroundColor: 'black',
        width:30,
        height: 30
    },
    iconVisible:{
        backgroundColor: 'teal'
    }


})

export default styles
