const SignOut = () => {
  window.localStorage.clear();
  window.location.href = '/';
}

export default SignOut;