import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const ModalPayment = ({modalIsOpen, closeModal}) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form>
                    <div class="form-container">
                        <div class="personal-information">
                            <p>Payment Information</p>
                        </div>
                        
                        <input id="column-left" type="text" name="first-name" placeholder="First Name"/>
                        <input id="column-right" type="text" name="last-name" placeholder="Surname"/>
                        <input id="input-field" type="text" name="number" placeholder="Card Number"/>
                        <input id="column-left" type="text" name="expiry" placeholder="MM / YY"/>
                        <input id="column-right" type="text" name="cvc" placeholder="CCV"/>
                        
                        <div class="card-wrapper"></div>
                    
                        <input id="input-button" onClick={closeModal} value="Pay"/>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
