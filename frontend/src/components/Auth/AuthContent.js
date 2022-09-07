import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;

    text-align: center;
    
    color: ${oc.grape[0]};
    margin-bottom: 1rem;
`;

const AuthContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
);

export default AuthContent;