import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@material-ui/core";

export default function DropDown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style= {{alignItems:"center", marginLeft:40}}>
      <h3>select Employee Name</h3>
      <FormControl style={{ width: "100px" }}>
        <TextField
          id="demo-simple-select-autowidth-label"
          type="text"
          value={age}
          onChange={handleChange}
        >
          Age
        </TextField>
        <Select
          labelId="emo-simple-select-autowidth-label"
          id="emo-simple-select-autowidth"
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
