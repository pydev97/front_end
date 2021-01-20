import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import CreateButton from './create-button'
import CreateEditEmployee from './create-edit-modal'
import { getAllUser } from '../component/reducer/EmployeeReducer'
const EmployeeList = (props) => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const dispatch = useDispatch();
    const [isOpenDetailEmployee, setIsOpenDetailEmployee] = useState(0);

    useEffect(() => {
        console.log("helo")
        dispatch(getAllUser());
    }, [])
    // handle onclick
    const handleOnClick = (e) => {
        setisOpenModal(true);
    }
    const handleOnClose = () => {
        setisOpenModal(false)
    }
    const handleOnchange = (e) => {
    }
    const handleOnDelete = () => {
        alert("do you wanna delete");
    }
    const listItem = props.data.map((value) =>
        <tr>
            <th scope="row"><a  id={value.userId} onClick={(e) => {setIsOpenDetailEmployee(value.userId)}}>{value.userId}</a></th>
            <td>{value.userName}</td>
            <td>{value.fullName}</td>
            <td>{value.address}</td>
            <td>{value.phoneNumber}</td>
            <td>{value.email}</td>
            <td><a href="#" onClick={handleOnDelete}>delete</a></td>
        </tr>
    )
    console.log(isOpenDetailEmployee)
    return (
        <div>
            day la man hinh list
            <CreateButton handleOnClick={handleOnClick} />
            <CreateEditEmployee isOpenModal={isOpenModal} handleOnClose={handleOnClose} isDisable={true} />
            <Table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Employee Name</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {listItem}
                </tbody>
            </Table>
            {isOpenDetailEmployee
                && <CreateEditEmployee isOpenModal={true} handleOnClose={handleOnClose} isDisable={true} userId={isOpenDetailEmployee}/>
            }
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {

// }

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, null)(EmployeeList)
// export default EmployeeList;