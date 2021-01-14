import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputComponent from './InputComponent'
export default function CreateEditEmployee(props) {
    const isOpenModal = props.isOpenModal;
    const [userId, setUserId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleOnchange = (e) => {
        const value = e.target.value;
        switch (e.target.id) {
            case "userId":
                setUserId(value);
                break;
            case "employeeName":
                setEmployeeName(value)
                break;
            case "fullName":
                setFullName(value)
                break;
            case "address":
                setAddress(value)
                break;
            default:
                setPhoneNumber(value)
                break;
        }
    }


    return (
        <div>
            <div>
                <Modal isOpen={isOpenModal}>
                    <ModalHeader >Modal title</ModalHeader>
                    <ModalBody>
                        <InputComponent id={"userId"} fieldLabel={"userId"} value={userId} handleOnchange={handleOnchange} isDisable={props.isDisable}/>
                        <InputComponent id={"employeeName"} fieldLabel={"employeeName"} value={employeeName} handleOnchange={handleOnchange} />
                        <InputComponent id={"fullName"} fieldLabel={"fullName"} value={fullName} handleOnchange={handleOnchange} />
                        <InputComponent id={"address"} fieldLabel={"address"} value={address} handleOnchange={handleOnchange} />
                        <InputComponent id={"phoneNumber"} fieldLabel={"phoneNumber"} value={phoneNumber} handleOnchange={handleOnchange} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" >Submit</Button>{' '}
                        <Button color="secondary" onClick={props.handleOnClose} >Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}