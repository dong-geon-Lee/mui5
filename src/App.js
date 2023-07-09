import { Button, TextField, Typography, useTheme, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

export const CustomBox = styled(Box)`
  background-color: #b2dfee;
  border: 1px solid #000;
  margin: 6rem;
  padding: 2rem 1rem;
  text-align: center;

  & h1 {
    color: #eeb2df;
  }
`;

function App() {
  const theme = useTheme();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userInfo;

  const onChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("제출");
  };

  console.log(theme);

  return (
    <>
      {/* Typography */}
      <CustomBox>
        <Typography variant="h1" sx={{ color: "lawngreen" }}>
          Hello World
        </Typography>
      </CustomBox>

      {/* Button */}
      <Box sx={{ m: 6, display: "flex", flexDirection: "column", gap: "8px" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={(e) => alert("야")}
        >
          제출
        </Button>
        <Button variant="contained" size="medium" color="info">
          로그인
        </Button>
        <Button variant="contained" size="small" color="success">
          취소
        </Button>
      </Box>

      {/* TextField */}
      <form onSubmit={onSubmit}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          m={6}
        >
          <TextField
            type="text"
            variant="standard"
            value={name}
            name="name"
            onChange={onChange}
            placeholder="Name"
          />
          <TextField
            type="email"
            variant="outlined"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="Email"
          />
          <TextField
            type="password"
            variant="filled"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="Password"
          />
        </Stack>
        <Button
          type="submit"
          color="info"
          variant="contained"
          size="medium"
          sx={{
            p: "10px 10px",
            width: "40%",
            m: "auto",
            display: "block",
          }}
        >
          제출
        </Button>
      </form>
    </>
  );
}

export default App;
