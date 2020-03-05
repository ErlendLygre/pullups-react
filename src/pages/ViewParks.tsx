import React, { useState, useEffect } from 'react'
import { Map } from '../components/organisms/Map'
import { Park } from '../types'
import axios from 'axios'
import ParkCards from '../components/organisms/ParkCards'
import CTASection from '../components/organisms/CTASection'

export const ViewParks = () => {
    
    const [parks, setParks] = useState<Park[]>([])

    useEffect(() => {
        axios.get('https://pullups-norge.firebaseio.com/parks.json')
            .then((response) => {
                setParks(response.data)
            })
    }, [])

    return(
        <React.Fragment>
            <Map parks={parks}/>
            <CTASection />
            <ParkCards parks={parks}/>
            
        </React.Fragment>
    )
}
