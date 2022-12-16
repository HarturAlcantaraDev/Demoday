import React from 'react'
import { Container, SideBar } from './../ERP/ERP';
import { GoGraph } from 'react-icons/go';
import {AiOutlineHistory} from 'react-icons/ai'
import userImg from "../../assets/images/UserPic.png"
import { useState } from 'react';
import Control from './Control/index';

const ERP = () => {
    const [page, setPage] = useState(1)
    setPage(2)
  return (
    <>
        <Container>
            <SideBar>
                <div className="actions">
                    <div className="logo">CONEST</div>
                    <button className='btn active'>
                        <div className="btn-info ">
                            <GoGraph size={'28px'}/> 
                            <span className='text'>Controle</span>
                        </div>
                    </button>
                    <button className='btn'>
                        <div className="btn-info">
                            <AiOutlineHistory size={'28px'}/> 
                            <span className='text'>Histórico</span>
                        </div>
                    </button>
                    
                </div>
                <div className="actions">
                    <div className="user">
                        <div className="user-thumbnail"><img src={userImg} alt="User Img" /></div>
                        <div className='text user-name'>Marcelo</div>
                    </div>
                </div>
            </SideBar>
            {page === 1 && (
                <Control />
            )}
        </Container>
    </>
  )
}

export default ERP