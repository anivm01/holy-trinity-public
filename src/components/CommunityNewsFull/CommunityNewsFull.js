import React from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../utils/api'
import { useLanguage } from '../../utils/LanguageContext'
import useFetch from '../../utils/useFetch'

function CommunityNewsFull() {
    const params = useParams()
    const language = useLanguage()
    const {data, loading, error} = useFetch(`${API_URL}/article/${language}/${params.id}`)  
    
    if(!data) {
        return <p>Loading...</p>
    }

  return (
    <div>{data.title}</div>
  )
}

export default CommunityNewsFull