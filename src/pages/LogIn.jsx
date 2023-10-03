import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Formik, useField } from 'formik'
import StyledText from '../compnents/StyleText'
import StyledTextInput from '../compnents/StyledTextInput'
import { loginValidation } from './validationSchemas/login'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    }
    ,
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) =>{
 
    const [field,meta,helpers] = useField(name)
    return (
        <>
            <StyledTextInput
            error={meta.error}
            placeholder='Password'
            value= {field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />    
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText> }
    </>)
}


export default function LogIn ()  {
  return (
    <Formik validationSchema={loginValidation} initialValues={initialValues} onSubmit={values =>console.log(values)}>
        {({ handleSubmit})=>{
            return (<View style={styles.form} >
                <FormikInputValue
                    placeholder='E-mail'
                    name = 'email'
                />
                 <FormikInputValue
                    placeholder='Password'
                    name = 'password'
                    secureTextEntry
                />
                <Button onPress={handleSubmit} title='Log in'/>
            </View>)
        }}
    </Formik>
  )
}
