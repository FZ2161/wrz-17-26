import { useParams } from "react-router-dom";

const UserData = () => {

    const { id } = useParams();

  return (
    <div>
        <h1>Dane Użytkownika</h1>
    </div>
  )
};

export default UserData;
