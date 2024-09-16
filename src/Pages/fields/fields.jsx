import React, { useState } from 'react';
import Navbar from '../../Components/navbar/navbar';
import Field from './fielddata';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import Modal from './modal';
import './fields.css';

export default function Fields() {
  const [showModal, setShowModal] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const handleOpenModal = (field) => {
    setSelectedField(field);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedField(null);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='fields_input_button'>
        <input placeholder='Search' />
        <div className='fields_search_icon'><BiSearch /></div>
        <button><HiOutlineAdjustmentsHorizontal /></button>
      </div>
      <div className='field_items'>
        {Field.map(field => (
          <div key={field.id} className='field_items_each'>
            <div>
              <div className='field_list_name'>{field.field_name}</div>
              <b>{field.sport}</b>
              <div>{field.description}</div>
            </div>
            <div>
              <div>{field.city}</div>
              <div>{field.slot_price}</div>
              <button className='field_items_button' onClick={() => handleOpenModal(field)}>View slots</button>
            </div>
          </div>
        ))}
      </div>
      <Modal className='modal_screen' show={showModal} onClose={handleCloseModal} field={selectedField} />
    </div>
  );
}
