import axios from "axios";

const req = axios.create({
  proxy: {
    protocol: "https",
    host: "api.jobboard.tedbree.com/v1",
  },
});

export const getJobs = (page, name) => {
  if (!name) {
    if (process.env === "production") {
      return axios
        .get(`${process.env.REACT_APP_API}/jobs?page=${page}`)
        .then((res) => res.data);
    }
    return axios.get(`/jobs?page=${page}`).then((res) => res.data);
  } else {
    if (process.env === "production") {
      if (process.env === "production") {
        return axios
          .get(`${process.env.REACT_APP_API}/my/jobs?page=${page}`)
          .then((res) => res.data);
      }
    }
    return axios.get(`/my/jobs?page=${page}`).then((res) => res.data);
  }
};

export const details = (id) =>
  axios.get("/jobs/" + id).then((res) => res.data.data);

export const getToken = async (fields) =>
  axios
    .post("/login/", { email: fields.email, password: fields.password })
    .then((res) => res.data.token);

export const getUserJobs = () => {};
