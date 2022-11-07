import { Text, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Button, Input, MessageInformation } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../../utils';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Please enter a registered email'),
    password: yup
        .string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});

const LoginScreen = () => {
  const { navigate } = useNavigation();

  const [isVisible, setIsVisible] = useState(false);
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
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      signin(navigate, formik.values.email, formik.values.password, formik)
    },
    validationSchema,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Text style={styles.headerText}>Welcome back</Text>
        <View style={styles.WrapperImage}>
          <SvgXml xml={icons.loginImg} width="220" height="220" />
        </View>
        <View style={styles.WrapperForm}>
          <Input
            wrapperStyle={styles.input}
            placeholder='Email'
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            keyboardType='email-address'
            autoCapitalize='none'
            renderIconLeft={() => <Icon name='mail' size={16} color={'#c6c6c6'} />}
          />
          {formik.errors.email && formik.touched.email && 
            <Text style={styles.errorText}>{formik.errors.email}</Text>}
          <Input
            wrapperStyle={styles.input}
            placeholder='Password'
            secureTextEntry={!isVisible}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            renderIconLeft={() => <Icon name='lock-closed' size={16} color={'#c6c6c6'} />}
            renderIconRight={() => visibleIcon}
          />
          {formik.errors.password && formik.touched.password &&
            <Text style={styles.errorText}>{formik.errors.email}</Text>}
          <TouchableOpacity
            onPress={() => navigate('ForgotPasswordScreen')}
            style={styles.forgotPasswordTouch}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            onPress={formik.handleSubmit}
            disabled={formik.isSubmitting}
            title='Log In'
            wrapperStyle={styles.loginButton}
          />
        </View>
        <View style={styles.WrapperFooter}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigate('CreateAccountScreen')}
            style={styles.registerTouch}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const signin = (navigate, email, password, formik) => {

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigate('HomeStack', { screen: 'HomeScreen'});
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

export default LoginScreen
