import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import Button from '../../components/Button'
import FormikTextField from '../../components/FormikTextField'
import StyledText from '../../components/StyledText'
import { LOGIN_FIELDS, LOGIN_INITIAL_VALUES } from '../../constants/loginForm'
import { loginSchema } from '../../schemas/loginSchema'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

// There is no auth backend yet, so submit only logs the values.
const handleLogIn = values => console.log(values)

const LogIn = () => {
    const styles = useThemedStyles(createStyles)
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={LOGIN_INITIAL_VALUES}
            onSubmit={handleLogIn}
        >
            {({ handleSubmit }) => (
                <View style={styles.form}>
                    <StyledText
                        fontSize='title'
                        fontWeight='bold'
                        role='heading'
                        style={styles.title}
                    >
                        Sign in
                    </StyledText>
                    {LOGIN_FIELDS.map(field => (
                        <FormikTextField key={field.name} {...field} />
                    ))}
                    <Button onPress={handleSubmit} title='Log in' />
                </View>
            )}
        </Formik>
    )
}

export default LogIn
