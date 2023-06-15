import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120, width: "75%" }}
      size="small"
      className="bg-white rounded-xl focus:border-black "
    >
      <InputLabel id="demo-select-small-label">City</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="100%">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Amman</MenuItem>
        <MenuItem value={20}>Al-Mafraq</MenuItem>
        <MenuItem value={30}>Zarqa</MenuItem>
        <MenuItem value={40}>Madaba</MenuItem>
        <MenuItem value={50}>Alsalt</MenuItem>
        <MenuItem value={60}>Jersh</MenuItem>
        <MenuItem value={70}>Tafila</MenuItem>
        <MenuItem value={80}>Ajloun</MenuItem>
      </Select>
    </FormControl>
  );
}
