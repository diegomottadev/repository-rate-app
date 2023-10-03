import React, { useEffect, useState } from 'react'
import {Text, FlatList} from 'react-native'

import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'





const RepositoryList = () => {

    const {repositories} = useRepositories()

    return ( <FlatList data={repositories} 
            ItemSeparatorComponent={()=><Text> </Text>}
            renderItem={({item: repo }) => (
            <RepositoryItem {...repo} />
   )}
       
    />)
}

export default RepositoryList