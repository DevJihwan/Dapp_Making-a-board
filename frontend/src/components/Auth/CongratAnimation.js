import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`

`;

const Nomore = styled.div`

`;

const CongratAnimation = () => {

    const animation = useRef();
    useEffect(()=>{
        Lottie.loadAnimation({
            container: animation.current,
            renderer: 'svg',
            loop: false,
            autoplay:true,
            animationData:require('lib/animation/94447-bitcoin-wallet')
        
        })
    },[])
    return(
        <Wrapper>
            <Nomore ref={animation}></Nomore>
        </Wrapper>

    )
}

export default CongratAnimation;