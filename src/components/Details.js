import '../App.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root')


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        background: "rgba(255,255,255,0.3)"
    }
};

export function Details(props) {
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(props.time)
    }, [props.time])



    return (
        <Modal isOpen={modal}
            style={customStyles}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#810000" }}>
                <h2>Speed Checker</h2>
                <h3 style={{cursor:"pointer"}}><span onClick={() => setModal(false)}>X</span></h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",flexDirection:"column"}}>
                <h4 style={{color:"#1F441E"}}>Total Correctly Typed Words : {props.wordDetails.correct}</h4>
                <h4 style={{color:"#BE0000"}}>Total Incorrectly Typed Words : {props.wordDetails.incorrect}</h4>
            </div>

        </Modal>
    );

}