import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
import '../index.css'
import { store,fetchTodos } from '../store/store'
export default function ListUser () {

    
    return (
        <div>
            <Table className="demo" >
  <thead>
    <tr>
      <th>userId</th>
      <th>userName</th>
      <th>fullName</th>
      <th>phoneNumber</th>
      <th>address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            
        </div>
    )
}
//  const mapStateToProps = (state) =>{
//      return {
//          id : state.id,
//          name : state.name
//      }
//  }
//  const mapDispatchToProps = (dispatch) => {
//      add : () => dispatch
//  }