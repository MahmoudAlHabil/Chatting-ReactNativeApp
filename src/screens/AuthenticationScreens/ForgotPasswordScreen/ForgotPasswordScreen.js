import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Input } from '../../../components';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Please enter a registered email'),
});


const ForgotPasswordScreen = (props) => {

    const { navigate, goBack } = useNavigation();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            forgotPassword(navigate, values.email, formik)
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
                    <Text style={styles.headerText}>Forgot Password</Text>
                </View>
                <View style={styles.WrapperImage}>
                    <SvgXml xml={icons.forgotPasswordImg} width="220" height="220" />
                </View>
                <View style={styles.WrapperForm}>
                    <Text style={styles.infoText}>
                        Enter your email address or phone number to reset the password
                    </Text>
                    <Input
                        wrapperStyle={styles.input}
                        placeholder='Email'
                        onChangeText={formik.handleChange('email')}
                        value={formik.values.email}
                        autoCapitalize='none'
                        renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />} />
                    {formik.errors.email && formik.touched.email &&
                        <Text style={styles.errorText}>{formik.errors.email}</Text>}
                    <Button
                        onPress={formik.handleSubmit}
                        title='Reset password'
                        disabled={formik.isSubmitting}
                        wrapperStyle={styles.resetPasswordButton} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const forgotPassword = (navigate, email, formik) => {
    auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            alert('A password reset link has been sent to your email')
            navigate('LoginScreen');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!');
            }

            alert(error);
        }).finally(() => {
            formik.setSubmitting(false);
        });
};

export default ForgotPasswordScreen;

