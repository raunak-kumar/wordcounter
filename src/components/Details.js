import '../App.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root')


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay                 : {background:"red"
    }
  };

export function Details(props) {
    const [modal, setModal] = useState(false)
    // console.log(props)

    useEffect(() => {
        setModal(props.time)
    }, [])



    return (
        <Modal isOpen={modal}
        style={customStyles}
        >
            <h2>Speed Checker</h2>
            <span onClick={() => setModal(false)}>X</span>
            <h4>Total Correctly Typed Words:{props.wordDetails.correct}</h4>
            <h4>Total Incorrectly Typed Words:{props.wordDetails.incorrect}</h4>
        </Modal>
    );

}