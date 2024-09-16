import React from 'react';
import './modal.css';

function Modal({ show, onClose, field }) {
  if (!show) return null;

  const slots = [];
  const startHour = 8;
  const endHour = 21;

  for (let i = startHour; i < endHour; i++) {
    slots.push(`${i}:00 - ${i + 1}:30`);
  }

  return (
    <div className='modal'>
      <div className='modal_content'>
        <span className='close' onClick={onClose}>&times;</span>
        <h2>{field.field_name}</h2>
        <div className='modal_buttons'>
          {slots.map((slot, index) => (
            <div key={index} className='slot_item'>
              
              {slot} <br/>
              {field.slot_price}

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
