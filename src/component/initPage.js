import { Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAllUser } from '../component/ListUser.reducer'
import {store} from '../store/store'
function Page(props) {
    const [userId, setUserId] = useState('')
    const handleOnClick = (e) => {
        getAllUser();
    }
    return (
        <div>
            <Button onClick={handleOnClick}>get all user</Button>
            <Button>add user</Button>

    aaaaa<input value={props.userId} readOnly></input>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        userId: state.userId
    }
}
const mapDispatchToProps = dispatch =>{
    getAllUser : dispatch(getAllUser())
}

export default connect(mapStateToProps, null)(Page)