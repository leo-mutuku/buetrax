import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import RvHookupIcon from "@mui/icons-material/RvHookup";

const InputWithIcon = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <RvHookupIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Search by Reg No."
            variant="standard"
          />
        </Box>
      </Box>
    </>
  );
};

export default InputWithIcon;
