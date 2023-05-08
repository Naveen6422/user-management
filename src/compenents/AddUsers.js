import { FormControl, FormGroup, InputLabel, Input,Typography, Button, styled} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";
const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    margin-top: 20px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    & > div{
        margin: 10px 0;
    }
`


    

const AddUsers = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
    });
      const navigate = useNavigate();
    const onValueChange = (e) => {
        
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };
    const addUsersDetails = async() => {
        await addUser(user);
        console.log(user);
        setUser({name:"",email:"",username:"",phone:""});
        navigate('/all');
    }
  
    return (
      <Container>
        <Typography variant="h4">Add Users</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => onValueChange(e)}
            name="name"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => onValueChange(e)}
            name="email"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => onValueChange(e)}
            name="username"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Phone</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => onValueChange(e)}
            name="phone"
          />
        </FormControl>
        <FormControl></FormControl>
        <Button variant="contained" color="primary" onClick={()=>addUsersDetails()}>
          Add User
        </Button>
      </Container>
    );
}
export default AddUsers;