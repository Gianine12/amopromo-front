import Modal from "react-modal"
import { useState, useEffect } from "react"
import { AiOutlineClose } from 'react-icons/ai'

import { DivPrincipal } from './style'

Modal.setAppElement('#root')

export const NewModal = ({data}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    // const valor = data ? data : []

    useEffect(() => {
        console.log('gianine',data)
    }, [])

    const handleOpenModal = () =>{
        setModalIsOpen(true)
    }

    const handleCloseModal = () =>{
        setModalIsOpen(false)
    }

    const custonStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(208, 200, 204, 0.80)'
        },
        content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            textAlign: 'center',
        }
    }

    return(
        <div>
            <button onClick={handleOpenModal}>Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={custonStyles}
            >
                <DivPrincipal className="principal">
                    <div className="header">
                        <button onClick={handleCloseModal}>
                            <AiOutlineClose/>
                        </button>
                        <h2>Airline Options</h2>
                        <hr/>
                    </div>
                    <div className="body">
                        {/* {data.map((item) => {
                            return(
                                <>
                                </>
                            )
                        })} */}
                    </div>
                </DivPrincipal>
            </Modal>
        </div>
    )
}
