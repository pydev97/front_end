import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { connect ,useDispatch} from 'react-redux';
import CreateButton from './create-button'
import CreateEditEmployee from './create-edit-modal'
import { getAllUser } from '../component/reducer/EmployeeReducer'
const EmployeeList = (props) => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const dispatch = useDispatch();


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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><a href="#">1</a></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><a href="#" onClick={handleOnDelete}>delete</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td><a href="#">delete</a></td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td><a href="#">delete</a></td>
                    </tr>
                </tbody>
            </Table>
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