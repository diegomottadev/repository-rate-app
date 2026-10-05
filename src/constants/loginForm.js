export const LOGIN_FIELDS = [
    {
        name: 'email',
        label: 'E-mail',
        placeholder: 'you@example.com',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        autoComplete: 'email'
    },
    {
        name: 'password',
        label: 'Password',
        secureTextEntry: true,
        autoCapitalize: 'none',
        autoComplete: 'password'
    }
]

export const LOGIN_INITIAL_VALUES = Object.fromEntries(LOGIN_FIELDS.map(({ name }) => [name, '']))
