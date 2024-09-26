import axios from "axios";

export const callLogin = async (formdata) => {
  const response = await axios.post(
    `http://localhost:4000/api/v1/auth/login`,
    formdata
  );
  return response;
};

export const callSignup = async (formdata) => {
  const response = await axios.post(
    `http://localhost:4000/api/v1/auth/signup`,
    formdata
  );
  return response;
};
