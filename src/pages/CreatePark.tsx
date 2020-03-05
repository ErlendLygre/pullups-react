import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import L, { LeafletMouseEvent } from 'leaflet';
import { Input } from '../components/atoms/Input'
import H1 from '../components/atoms/H1';
import FormDiv from '../components/atoms/FormDiv';
import P from '../components/atoms/P'
import FormWrapper from '../components/atoms/FormWrapper'
import Button from '../components/atoms/Button';

const CreateParkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`

const MapDiv = styled.div`
    height: 1000px;
    width: 100%;
    overflow: hidden;
`

const FormDivInfo = styled(FormDiv)`
    flex-direction: column;
    align-items: start;
`

const CreateParkButton = styled(Button)`
    margin-top: 30px;
`

const CoordInput = styled(Input)`
    width: 100px;
    margin-left: 10px;
`

const CoordFormWrapper = styled(FormWrapper)`
    width: 450px;
`

export const CreatePark = () => {
    const [lng, setLng] = useState<number>(0);
    const [lat, setLat] = useState<number>(0);

    useEffect(() => {
        let map = L.map('map', { attributionControl: false}).setView([61.189733, 8.830357], 6)
        map.getContainer().style.height = "350px"
        map.getContainer().style.width = "100%"
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: '',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZXJsZW5kdGx5Z3JlIiwiYSI6ImNrN2FuN2x2NTE1dDEza29kaHYxMHN6MXUifQ.c4_AwlhEleiQTM2n74cAxA'
        }).addTo(map);
        map.on("contextmenu", function (event: LeafletMouseEvent) {
            setLng(event.latlng.lng)
            setLat(event.latlng.lat)
        });
    }, [])

    return (
        <CreateParkContainer>
            <CoordFormWrapper>
                <H1>1. FINN PARKEN PÅ KARTET</H1>
                <P>Vær nøyaktig. Zoom inn og høyreklikk der parken befinner seg.</P>
                <MapDiv id="map"></MapDiv>
                
                <FormDiv>
                    <P><strong>Dine koordinater:</strong></P> <br/>
                    <CoordInput id="lat-coordinate" readOnly value={lng===0?"Høyreklikk":lng}/>
                    <CoordInput id="lng-coordinate" readOnly  value={lat === 0 ? "i kartet":lat}/>
                </FormDiv>
            </CoordFormWrapper>

            <FormWrapper>
                <H1>2. FYLL INN INFO OM PARKEN</H1>
                <FormDivInfo flex-direction={"column"}>
                    <label htmlFor="name-input">Parkens nærområde</label>
                    <Input id="name-input" placeholder="F.eks: Tøyenparken Tuftepark" />
                    <label htmlFor="name-input">By/tettsted</label>
                    <Input id="city-input"/>
                    <label htmlFor="name-input">Ditt navn/kallenavn</label>
                    <Input id="author-input" />
                    <label>Beskrivelse av parken</label>
                    <textarea id="description-input" placeholder="Tips: Hvordan ser den ut? Hva slags apparater finnes her? Hvordan finner man den?"/>
                    <CreateParkButton>Send inn</CreateParkButton>
                </FormDivInfo>
            </FormWrapper>
        </CreateParkContainer>
    )
}


