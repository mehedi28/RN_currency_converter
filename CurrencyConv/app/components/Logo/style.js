import {StyleSheet, Dimensions} from 'react-native';

const ImageWidth = Dimensions.get("window").width / 2;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    centerImage: {
        resizeMode: "cover",
        width: ImageWidth,
        height: ImageWidth,
        alignItems:'center',
        justifyContent:'center'
    },
    Image: {
        width: ImageWidth/2,
        height: ImageWidth/2,
    },
    text:{
        marginTop:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default styles
