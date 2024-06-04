import { useEffect, useState } from "react";
import ProfileEdit from "../ProfileEdit/Index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../services/api";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserProfile(token, dispatch); // Utilisez le token récupéré ici
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération du profil :", error);
      }
    };

    fetchData();
  }, [token, dispatch]); // Ajoutez `token` à la liste des dépendances

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <main className="profile">
      <div className="profile__header">
        {!isEditing && (
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>
        )}
      </div>
      {isEditing ? (
        <ProfileEdit onCancel={() => setIsEditing(false)} />
      ) : (
        <div className="button">
          <button className="button__edit" onClick={handleEditButtonClick}>
            Edit Name
          </button>
        </div>
      )}
    </main>
  );
};

export default UserProfile;
