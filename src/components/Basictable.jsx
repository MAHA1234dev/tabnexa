import React, { useState, useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

export default function Basictable() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobno, setMobno] = useState("");
  const [salary, setSalary] = useState("");
  const [post, setPost] = useState("post");
  const [update, setUpdate] = useState("update");

  const [data, setData] = useState([
    {
      id: 1,
      name: "maha",
      age: 23,
      mobno: 8861601472,
      salary: 25000,
    },
    {
      id: 2,
      name: "hansik",
      age: 55,
      mobno: 9606809364,
      salary: 60000,
    },
    {
      id: 3,
      name: "mahadev",
      age: 21,
      mobno: 7975498937,
      salary: 300010,
    },
    {
      id: 4,
      name: "mahesh",
      age: 25,
      mobno: 973141803109,
      salary: 45000,
    },
    {
      id: 5,
      name: "mahadev",
      age: 45,
      mobno: 7975498937,
      salary: 300010,
    },
    {
      id: 6,
      name: "nagesh",
      age: 26,
      mobno: 76193011479,
      salary: 50000,
    },
    {
      id: 7,
      name: "hansik",
      age: 111,
      mobno: 9606809364,
      salary: 60000,
    },
    {
      id: 8,
      name: "nagesh",
      age: 26,
      mobno: 76193011479,
      salary: 50000,
    },
    {
      id: 9,
      name: "mahadev",
      age: 30,
      mobno: 7975498937,
      salary: 300010,
    },
    {
      id: 10,
      name: "shivaji",
      age: 25,
      mobno: 963243348,
      salary: 10000,
    },
    {
      id: 11,
      name: "hansik",
      age: 13,
      mobno: 9606809364,
      salary: 60000,
    },
  ]);

  //  get method

  const sortingmethod = () => {
    let result = [];
    let array1 = [];
    data.forEach((ele1) => {
      array1.push(ele1.name);
    });
    //*** this is for unique names  */
    const array2 = [...new Set(array1)];
    array2.forEach((ele3) => {
      let array3 = [];
      data.forEach((ele4) => {
        if (ele3 === ele4.name) {
          array3.push(ele4);
        }
      });
      result.push(...array3.sort((a, b) => (a.age > b.age ? 1 : -1)));
    });
    return result;
  };
  data.sort((a, b) => (a.name > b.name ? 1 : -1));
  const finalarray = [...sortingmethod()];

  // post method
  const handlePost = () => {
    setPost("post");
    setUpdate("post");
    setOpen(true);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const mobChange = (e) => {
    setMobno(e.target.value);
  };
  const salChange = (e) => {
    setSalary(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length,
        name: name,
        age: age,
        salary: salary,
        mobno: mobno,
      },
    ]);
    handleClose()
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  //  delete method

  const handleDeletemethod = (id) => {
    const del = data.filter((data) => id !== data.id);
    setData(del);
  };
  // update method
  const [open, setOpen] = React.useState(false);
  const handleUpdate = (e) => {
    setUpdate("update");
    setPost("update");
    setOpen(true);
    setData(data);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length,
        name: name,
        age: age,
        salary: salary,
        mobno: mobno,
      },
    ]);
    handleClose()
    console.log("ghka");
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <h3>Employee Details</h3>
        <Table>
          <TableHead className="bg-dark">
            <TableRow>
              <TableCell className="text-white">Sl no</TableCell>
              <TableCell className="text-white">Id</TableCell>
              <TableCell className="text-white">Name</TableCell>
              <TableCell className="text-white">Age</TableCell>
              <TableCell className="text-white">Contact no</TableCell>
              <TableCell className="text-white">Salary</TableCell>
              <TableCell className="text-white">buttons</TableCell>
              <TableCell className="text-white">buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalarray.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">{`${
                    index + 1
                  }`}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.mobno}</TableCell>
                  <TableCell>{item.salary}</TableCell>
                  <TableCell>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeletemethod(item.id);
                      }}
                    >
                      delete
                    </button>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <button
                      variant="outlined"
                      className="btn btn-primary"
                      onClick={() => {
                        handleUpdate();
                      }}
                    >
                      update
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <Button
        variant="outlined"
        className="bg-warning text-white "
        onClick={handlePost}
      >
        postd-data
      </Button>

      {/* dailog box */}

      <div>
        <Dialog
          className=""
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          {post === "post" && (
            <div
              className="bg-primary"
              style={{ width: "500px", height: "400px", padding: "40px" }}
            >
              <h1>post modal</h1>
              NAME:
              <input
                className="form-control"
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={nameChange}
              />
              AGE:
              <input
                className="form-control"
                type="number"
                placeholder="age"
                name="age"
                value={age}
                onChange={ageChange}
              />
              PHONE NUMBER:
              <input
                className="form-control"
                type="number"
                placeholder="pnenumber"
                name="phone"
                value={mobno}
                onChange={mobChange}
              />
              SALARY:
              <input
                className="form-control"
                type="number"
                placeholder="salary"
                name="salary"
                value={salary}
                onChange={salChange}
              />
              <DialogActions>
                <Button className="bg-primary text-white" onClick={handleClose}>
                  clear
                </Button>
                <Button
                  type="submit"
                  className="bg-secondary text-white"
                  onClick={handleSubmit}
                  color="primary"
                >
                  submit
                </Button>
              </DialogActions>
            </div>
          )}

          {update === "update" && (
            <div
              className="bg-warning"
              style={{ width: "500px", height: "400px", padding: "40px" }}
            >
              <h1>Update Modal</h1>
              NAME:
              <input
                className="form-control"
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={nameChange}
              />
              AGE:
              <input
                className="form-control"
                type="number"
                placeholder="age"
                name="age"
                value={age}
                onChange={ageChange}
              />
              PHONE NUMBER:
              <input
                className="form-control"
                type="number"
                placeholder="pnenumber"
                name="phone"
                value={mobno}
                onChange={mobChange}
              />
              SALARY:
              <input
                className="form-control"
                type="number"
                placeholder="salary"
                name="salary"
                value={salary}
                onChange={salChange}
              />
              <DialogActions>
                <Button className="bg-primary text-white" onClick={handleClose}>
                  clear
                </Button>
                <Button
                  type="submit"
                  className="bg-secondary text-white"
                  onClick={handleUpdateSubmit}
                  color="primary"
                >
                  submit
                </Button>
              </DialogActions>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
