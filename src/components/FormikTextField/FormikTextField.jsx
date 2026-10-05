import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useField } from 'formik'
import StyledText from '../StyledText'
import StyledTextInput from '../StyledTextInput'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const FormikTextField = ({ name, label, ...inputProps }) => {
    const styles = useThemedStyles(createStyles)
    const [field, meta, helpers] = useField(name)
    // Formik validates every field on each change, so only show the error
    // after the user leaves this field (or submits the form).
    const showError = meta.touched && Boolean(meta.error)
    const labelId = `${name}-label`

    return (
        <View style={styles.field}>
            <StyledText id={labelId} fontWeight='bold' style={styles.label}>
                {label}
            </StyledText>
            <StyledTextInput
                aria-label={label}
                aria-labelledby={labelId}
                error={showError}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                {...inputProps}
            />
            {showError && (
                <StyledText color='error' fontSize='small' style={styles.error} aria-live='polite'>
                    {meta.error}
                </StyledText>
            )}
        </View>
    )
}

FormikTextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default FormikTextField
