import { View} from 'react-native'
import RepositoryList from './compnents/RepositoryList'

import { Navigate, Route, Routes } from 'react-router-native'
import { Text } from 'react-native'
import AppBar from './compnents/AppBar'

const Main = () => {
    return (
        <View style={{flexGrow: 1}}>
            <AppBar/>
            < Routes>
                    <Route path='/' element={<RepositoryList />} />
                    <Route path='/signin' element={<Text>Sign In</Text>} />
                    <Route path='*' element={<Navigate to='/' />} />
            </ Routes>
        </View>
    )
}

export default Main