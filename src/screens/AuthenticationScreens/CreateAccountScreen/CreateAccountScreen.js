import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Input } from '../../../components';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Please enter a registered email'),
    password: yup
        .string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});


const CreateAccountScreen = () => {

    const { navigate, goBack } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const visibleHandler = () => setIsVisible(prevIsVisible => prevIsVisible ? false : true)
    const visibleIcon = (<TouchableOpacity
        style={styles.visibleIcon}
        onPress={visibleHandler}>
        {isVisible ?
            <Icon name='ios-eye' size={16} color={'#c6c6c6'} /> :
            <Icon name='ios-eye-off' size={16} color={'#c6c6c6'} />}
    </TouchableOpacity>)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            createUser(navigate, email, password)
        },
        validationSchema,
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={styles.wrapperBackIcon}>
                        <Icon name='arrow-back' size={32} color='black' style={{ fontWeight: 'bold' }} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Create Account</Text>
                </View>
                <View style={styles.WrapperImage}>
                    <SvgXml xml={icons.createAccountImg} width="220" height="220" />
                </View>
                <View style={styles.WrapperForm}>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Your name'
                        renderIconLeft={() => <Icon name='person-sharp' size={16} color={'#c6c6c6'} />} />
                    {formik.errors.name && formik.touched.name &&
                        <Text style={[styles.errorText, styles.errorName]}>{formik.errors.name}</Text>}
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Email'
                        onChangeText={val => setEmail(val)}
                        renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
                    {formik.errors.email && formik.touched.email &&
                        <Text style={styles.errorText}>{formik.errors.email}</Text>}
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Password'
                        secureTextEntry={!isVisible}
                        onChangeText={val => setPassword(val)}
                        renderIconLeft={() => <Icon name='lock-closed' size={16} color={'#c6c6c6'} />}
                        renderIconRight={() => visibleIcon} />
                    {formik.errors.password && formik.touched.password &&
                        <Text style={[styles.errorText, styles.errorPassword]}>{formik.errors.password}</Text>}
                    <Button
                        onPress={formik.handleSubmit}
                        title='Sign Up'
                        wrapperStyle={styles.SignupButton} />
                    <TouchableOpacity
                        onPress={() => navigate('LoginScreen')}
                        style={styles.haveAccountTouch}>
                        <Text style={styles.haveAccountText}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const createUser = (navigate, email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            navigate('HomeStack', { screen: 'HomeScreen' });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!');
            }

            alert(error);
        });
};

export default CreateAccountScreen;

