import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getUser, updateUser } from "../services/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  & > div {
    margin: 10px 0;
  }
`;

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });
    const {id} = useParams();
    useEffect(() => {
        getUserData();
    }, [])
    const getUserData = async () => {
      let response = await getUser(id);
      setUser(response.data);
    };

  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUsersDetails = async () => {
    await updateUser(id,user);
    navigate("/all");


  };

  return (
    <Container>
      <Typography variant="h4">Update User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="name"
            value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="email"
            value={user.email}

        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="username"
            value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="phone"
            value={user.phone}
        />
      </FormControl>
      <FormControl></FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUsersDetails()}
      >
        Update User
      </Button>
    </Container>
  );
};
export default EditUser;
