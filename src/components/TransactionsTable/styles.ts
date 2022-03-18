import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0.0 0.5rem;

        th {
            text-align: left;
            color: var(--text-body);
            font-weight: 400;
            line-height: 1.5rem;
            padding: 1rem 2rem;
        }

        td {
            padding: 1rem 2rem;
            background-color: var(--shape);
            border-radius: 0.3rem;
            color: var(--text-body);
            border: 0;

            &:first-child {
                color: var(--text-title);
            };

            &.deposit {
                color: var(--green);
            };

            &.withdraw {
                color: var(--red);
            }
        }
    }

    
`