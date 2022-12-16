import styled from "styled-components";

let tituloCor = "#6C6C64"

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 100%;
    margin-bottom: 20px;
    background: #fff;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
`
export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border-bottom: 1px solid #ECECEC;
`
export const OngLogo = styled.img`
    border-radius: 100px;
    width: 50px;
    height: 50px;
`
export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const OngNome = styled.h4`
    font-weight: 500;
    font-size: 17px;
    color: ${tituloCor};
`
export const TempoPost = styled.p`
    font-weight: 500;
    font-size: 13px;
    color: #A3A3A3;
`

export const PostTitle = styled.p`
    width: 100%;
    font-size: 18px;
    color: ${tituloCor};
`
export const PostText = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #878787;
`
export const PostImage = styled.img`
    width: 100%;
    border-radius: 5px;
`
export const PostFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: #A3A3A3;
    padding-top: 10px;
`

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 30px;
`

export const PostFooterContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const PostFooterText = styled.p`
    font-size: 12px;
    font-weight: 400;
`
