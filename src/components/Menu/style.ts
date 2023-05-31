import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    align-items: center;
    gap: 10px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.30);
    margin-bottom: 10px;
    flex-wrap: wrap;
    background-color: #413EB2;
    justify-content: space-between;
    

    @media screen and (max-width: 520px) {
        flex-direction: column;
        justify-content: center;
    }
    
`;

export const HeaderButton = styled.span`
    border-radius: 3px;
    padding: 5px 0px;
    margin: 0 10px;
    font-weight: 600;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: center;

    :hover{
        background-position: right;
        background-image: linear-gradient(to left, rgba(157,81,242,1) 100%, rgba(79,151,233,1) 0%);

    }

`;

export const MenuLeft = styled.span`
    display: flex;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 10px
    }
`

export const MenuRigth = styled.span`
    display: flex;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 10px
    }
`