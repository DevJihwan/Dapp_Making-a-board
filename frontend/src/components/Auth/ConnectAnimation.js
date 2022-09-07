import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';


const Wrapper = styled.div`

`;

const Nomore = styled.div`

`;

const ConnectAnimation = () => {

    const animation = useRef();
    useEffect(()=>{
        Lottie.loadAnimation({
            container: animation.current,
            renderer: 'svg',
            loop: false,
            autoplay:true,
            animationData:require('lib/animation/116204-flying-rocket-in-the-sky')
            
        })
    },[])
    return(
        <Wrapper>
            <Nomore ref={animation}></Nomore>
        </Wrapper>

    )
}

export default ConnectAnimation;