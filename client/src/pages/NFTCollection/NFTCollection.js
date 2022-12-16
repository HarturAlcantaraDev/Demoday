import styled from "styled-components";

export const CollectionContainer = styled.div`
    width: 100vw;
    margin: 0 auto;
    margin-bottom: 20px;
    height: auto;
    overflow: visible;
    background-color: #f1f1f1;

    .collection{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        overflow: visible;
    }
    .collection-info{
        display: flex;
        align-items: flex-end;
        width: 70%;
        margin: 0 auto;
        transform: translateY(-100px);
        position: relative;

        img{
            width: 220px;
            height: 220px;
            border-radius: 15px;
            border: 1px solid #d4d4d4;
        }
        p{
            margin-left: 20px;
            font-size: 1.5rem;
            font-weight: 500;
        }
        button{
            position: absolute;
            right: 0; 
        }
    }
    .collections-actions{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 70%;
        margin: 0 auto;
        overflow: visible;
    
        p{
            width: 100%;
            margin-left: 20px;
            font-size: 16px;
            font-weight: 300;
            transform: translateY(-50px);
        }
    }
    .collection-cards{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 70%;
        height: auto;
    }
`