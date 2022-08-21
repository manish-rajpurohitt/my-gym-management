import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditMember.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import memberMessage from '../../../main/messages/memberMessage'
import memberValidation from '../../../main/validations/memberValidation'
import MemberTestService from '../../../main/mocks/MemberTestService';
const EditMember = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [member, setMember] = useState(props.member);

  useEffect(() => {
    setMember(props.member)
  }, [props.member]);


  const onSubmit = (data) => {

    MemberTestService.update(props.member, data)
    showMessage('Confirmation', memberMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };


  return (
    <div className="EditMember">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Last name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.firstName} ref={register({ required: true })}
              id="text1" name="first_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.first_name && memberValidation.first_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text2" class="col-4 col-form-label">First Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.lastName} ref={register({ required: true })}
              id="text2" name="last_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.last_name && memberValidation.last_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date of Birth</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={new Date(member.dob)} ref={register({ required: true })}
              id="text" name="birth_date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.birth_date && memberValidation.birth_date}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Group</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.group} ref={register({ required: true })}
              id="select1" name="groupe" class="custom-select">
              <option value="rabbit">Groupe Yoga</option>
              <option value="duck">Groupe Fitness</option>
            </select>
            <div className="error text-danger">
              {errors.groupe && memberValidation.groupe}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Membership Type</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.membershipType} ref={register({ required: true })}
              id="select2" name="type" class="custom-select">
              <option value="rabbit">Premium</option>
              <option value="duck">Gold</option>
            </select>
            <div className="error text-danger">
              {errors.type && memberValidation.type}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text3" class="col-4 col-form-label">Address</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.address} ref={register({ required: true })}
              id="text3" name="address" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.address && memberValidation.address}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text4" class="col-4 col-form-label">Mobile</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.phoneNumber} ref={register({ required: true })}
              id="text4" name="mobile" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.mobile && memberValidation.mobile}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text5" class="col-4 col-form-label">Email</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.email} ref={register({ required: true })}
              id="text5" name="email" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.email && memberValidation.email}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text6" class="col-4 col-form-label">Weight</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.weight} ref={register({ required: true })}
              id="text6" name="weight" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.weight && memberValidation.weight}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text7" class="col-4 col-form-label">Height</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.height} ref={register({ required: true })}
              id="text7" name="size" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.size && memberValidation.size}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Chest</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.chest} ref={register({ required: true })}
              id="text8" name="chest" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.chest && memberValidation.chest}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text9" class="col-4 col-form-label">Thigh</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.thigh} ref={register({ required: true })}
              id="text9" name="foot" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.foot && memberValidation.foot}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text10" class="col-4 col-form-label">Arms</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.arms} ref={register({ required: true })}
              id="text10" name="hand" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.hand && memberValidation.hand}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text11" class="col-4 col-form-label">Fat</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.fat} ref={register({ required: true })}
              id="text11" name="fat" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.fat && memberValidation.fat}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text12" class="col-4 col-form-label">Start Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.startDate} ref={register({ required: true })}
              id="text12" name="start_date" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.start_date && memberValidation.start_date}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text13" class="col-4 col-form-label">End Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.endDate} ref={register({ required: true })}
              id="text13" name="end_date" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.end_date && memberValidation.end_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="select3" class="col-4 col-form-label">Trainer</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.trainer} ref={register({ required: true })}
              id="select3" name="coach" class="custom-select">
              <option value="rabbit">Romaine Gervais</option>
              <option value="duck">Victor Gaudreau</option>
              <option value="fish">Fish</option>
            </select>
            <div className="error text-danger">
              {errors.coach && memberValidation.coach}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i> Save </button>
          </div>
        </div>


      </form>
    </div>
  )
};

EditMember.propTypes = {};

EditMember.defaultProps = {};

export default EditMember;
