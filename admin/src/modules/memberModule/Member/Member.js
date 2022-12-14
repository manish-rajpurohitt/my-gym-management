import React, { useEffect, useState } from 'react';
import './Member.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditMember from '../EditMember/EditMember';
import AddMember from '../AddMember/AddMember';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import memberMessage from '../../../main/messages/memberMessage';
import MemberTestService from '../../../main/mocks/MemberTestService';
import HTTPService from '../../../main/services/HTTPService';

const Member = () => {

  const [members, setMembers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveMembers()
  }, []);

  React.useEffect(()=>{
    getAll();
  }, []);

  const getAll = () => {
    HTTPService.getAllMembers()
      .then(response => {
        setMembers(response.data.members);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }


  const retrieveMembers = () => {
    var members = MemberTestService.getAll();
    setMembers(members);
  };

  const resfresh = () => {
    retrieveMembers()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Do you really want to delete the user ?");
    if (r) {
      showMessage('Confirmation', memberMessage.delete, 'success')
      MemberTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Members</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>MEMBER Name</th>
                      <th>Registration Date</th>
                      <th>Expiration date</th>
                      <th>Member type</th>
                      <th>Trainer</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>


                    {members.map(item =>
                      <tr>
                        <td> {item.firstName}</td>
                        <td>{new Date(item.startDate).toDateString()}</td>
                        <td>{new Date(item.endDate).toDateString()}</td>
                        <td>{item.membershipType}</td>
                        <td><span class="badge badge-success">{item.trainer}</span></td>
                        <td>
                          <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, members.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>

                      </tr>
                    )}
                  </tbody>
                  <tfoot class=" text-primary">
                  <tr> <th>MEMBER Name</th>
                      <th>Registration Date</th>
                      <th>Expiration date</th>
                      <th>Member type</th>
                      <th>Trainer</th>
                      <th>Actions</th></tr>
                  </tfoot>
                </table>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addMember"><i class="far fa-plus-square"></i>  Add Member</button>


                <div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New Member Form</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddMember />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>

                      </div>
                    </div>
                  </div>
                </div>



                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditMember member={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
