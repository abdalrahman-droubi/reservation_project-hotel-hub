import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectRating() {
    const [city, setCity] = React.useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <FormControl
            sx={{ m: 1, minWidth: 120, width: "75%" }}
            size="small"
            className="bg-white rounded-xl focus:border-black "
        >
            <InputLabel id="demo-select-small-label">Rating</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={city}
                label="city"
                onChange={handleChange}
            >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                <MenuItem value={40}>4</MenuItem>
                <MenuItem value={50}>5</MenuItem>
            </Select>
        </FormControl>
    );
}