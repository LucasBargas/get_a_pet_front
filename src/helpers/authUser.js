const authUser = async (setAuthenticated, data, navigate) => {
  setAuthenticated(true);
  localStorage.setItem('token', JSON.stringify(data));
  navigate('/');
};

export default authUser;
