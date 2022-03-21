import styled from "styled-components";
import {darken} from 'polished'

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        background: var(--green);
        border-raius: 0.25rem;
        border: 0;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        transtion: filter 0.2s;

        &:hover {
            filter: brightness(0.9) 
        }
    }
`;

export const TransactionType = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background: transparent;

        display: flex; 
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')}
        };

        img{
            margin-right: 1rem;
            height: 20px;
            width: 20px;
        };

        span {
            font-size: 1rem;
            line-height: 1.5rem;
            display: inline-block;
            color: var(--text-title);
        };
    }
`