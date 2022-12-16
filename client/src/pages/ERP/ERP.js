import styled from 'styled-components';

const media = { 
    desktop: "@media (min-width: 1000px)"
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #eeeeee;

   

    ${media.desktop}{
        width: 100vw;
        height: 100vh;
    }
`

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px 0px 0px;
    width: 70px;
    background-color: #fff;
    height: 100vh;
    transition: .3s ease;

    .text{
        display: none;
    }
    
    &:hover{
        width: 200px;
        transform: .3s ease;

        .text{
            display: flex;
        }
    }

    .actions{ 
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        

        .btn{
            width: 100%;
            height: 50px;
            background: transparent;
            border: none;
            transition: all .3s;

            .active{
                background-color: #00ff4cff;
                color: #fff;
            }

            .btn-info{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 10px;
                background: transparent;
            }
            .text{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
            }

            &:hover{
                background: #0cfa53ff;
                border-radius: 0px 10px 10px 0px;
            }
        }
        .user{
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: flex;
            align-items: center;
            justify-content: center;

            .user-thumbnail{
                width: 50px;
                height: 50px;
                display: flex;
                border: 1px solid #d4d4d4;
                border-radius: 50%;
                background-color: #d4d4d4;
                img{
                    width: 100%;
                    height: 100%;

                }
            }
            .user-name{
                margin-left: 10px;
                font-weight: 600;
            }
        }
    }
`