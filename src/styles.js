import styled from 'styled-components';
import { Form as unform } from '@unform/web';


export const Container = styled.div`
    width: 300;
    height: 150;
    margin: 0 auto;
    align-items:center;
    text-align: center;
    justify-content: center;

    button {
        display: block;
        background: #000046;  /* fallback for old browsers */
       
        color: #fff;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        width: 100%;
        padding: 16px;
        font-weight: bold;
        font-size: 15px;
        transition: background-color 0.2s;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }


    button:hover {
        background-color: #000060 ;
    }

    svg {
        align-self: center;
        margin-bottom: 30px;
    }
`;

export const Form = styled(unform)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

