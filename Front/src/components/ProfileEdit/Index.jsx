import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../services/api";
import PropTypes from "prop-types";

const ProfileEdit = ({ onCancel }) => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [editedUsername, setEditedUsername] = useState(user.userName);
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);

  useEffect(() => {
    setEditedUsername(user.userName);
  }, [user.userName]);

  const handleSaveButtonClick = async () => {
    await updateUsername(token, editedUsername, dispatch);
    setEditedUsername("");
    onCancel();
  };

  return (
    <div className="profile">
      <h2 className="profile__title">Edit user info</h2>
      <div className="profile__container">
        <label className="profile__label" htmlFor="editedUsername">
          User name:
        </label>
        <input className="profile__input" type="text" id="editedUsername" value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)} />
      </div>
      <div className="profile__container">
        <label className="profile__label" htmlFor="editedUsername">
          First name:
        </label>
        <input className="profile__input grey" type="text" id="editedFirstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} readOnly />
      </div>
      <div className="profile__container">
        <label className="profile__label" htmlFor="editedUsername">
          Last name:
        </label>
        <input className="profile__input grey" type="text" id="editedLastname" value={lastname} onChange={(e) => setLastname(e.target.value)} readOnly />
      </div>
      <div className="button__container">
        <button className="button__edit" onClick={handleSaveButtonClick}>
          Save
        </button>
        <button className="button__edit" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

ProfileEdit.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default ProfileEdit;
