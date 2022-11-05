import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: 27,
      color: '#000',
      lineHeight: 35,
      flex: 1,
      textAlign: 'center',
      marginTop: '5%',
      marginBottom: '20%',
    },
    WrapperImage: {
      alignItems: 'center',
      marginBottom: '22%'
    },
    WrapperForm: {
      flex: 1,
      alignItems: 'center'
    },
    input: {
      width: '72%',
      marginVertical: '2.5%',
    },
    visibleIcon: {
      padding: 4,
    },
    forgotPasswordTouch: {
      alignSelf: 'flex-end',
      marginBottom: '11%',
      marginRight: '15%'
    },
    forgotPasswordText: {
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 16,
      color: '#8E8AEE',
    },
    loginButton: {
      width: '72%',
      backgroundColor: '#4C46B4',
      height: 50,
      borderColor: '#707070',
    },
    WrapperFooter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20%'
    },
    footerText: {
      fontSize: 16,
      fontWeight: '300',
      lineHeight: 16,
      color: '#6D6D6D',
    },
    registerTouch: {
      marginLeft: '2%'
    },
    registerText: {
      fontSize: 16,
      fontWeight: '300',
      lineHeight: 16,
      color: '#8E8AEE',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 16,
      marginTop: '-2%',
      marginLeft: '-30%',
      alignItems: 'flex-end',
    }
})

export default styles;
