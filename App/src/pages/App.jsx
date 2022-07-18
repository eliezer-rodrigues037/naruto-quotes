import { useState, useEffect, useRef } from 'react'
import narutoImg from '../assets/images/naruto.png'
import styled from 'styled-components';
import { Quotes } from '../components/Quotes';
import { getQuote } from '../services';

import jutsoSound from '../assets/sounds/src_sounds_jutso.mp3'
const audio = new Audio(jutsoSound);


export function App() {
    
    const [quote, setQuote] =  useState();
    const isMounted =  useRef(true); //Guarda a refenrência do estado quando o componente é desmontado.

    const onUpdate = () => {
        try{
            loadQuote();
            audio.play();
        }
        catch(error) {
            console.dir(error);
        }
        
    }

    useEffect(() => {
        if(isMounted.current)
            loadQuote();

        return () => { //Essa função é retornada quando componente é desmontado.
            isMounted.current = false;//Portanto quando o componente é desmontao, a variável isMounted é setada como falso.
        }
    },[])

    async function loadQuote() {
        const serverQuote = await getQuote();
        setQuote({...serverQuote});
    }

    return (
        <Content>
            <Quotes 
                {...quote}
                onUpdate={onUpdate}
            />
            <NarutoImg src={narutoImg} alt="Naruto with a kunai"/>
        </Content>
    );
}


const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`
