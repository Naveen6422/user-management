import React, { useEffect, useState } from "react";
import{Link} from "react-router-dom";
import { Table, TableBody,TableCell,TableHead,TableRow,styled, Button } from "@mui/material";
import { getAllUsers, deleteUser } from "../services/api";

const StyledTable = styled(Table)`
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
`;
const StyledTableHead = styled(TableHead)`
  & .MuiTableCell-head {
    font-weight: 700;
    font-size: 15px;
  }
`;
const StyledThead = styled(TableRow)`
background-color: #111111;
& .MuiTableCell-head {
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
}

`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;



const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((response) => {
      console.log(response.data);
      setUsers(response.data);

    });
  }, []);

  const deleteUserdata = async (id) => {
    await deleteUser(id);
    
    getAllUsers().then((response) => {
      console.log(response.data);
      setUsers(response.data);

    }
    );

  }




  return (
    <StyledTable>
      <StyledTableHead>
        <StyledThead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </StyledThead>
      </StyledTableHead>
      <TableBody>
        {users.map((user) => (
          <StyledTableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserdata(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default AllUsers;
