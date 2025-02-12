export const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };
  
  export const login = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  export const logout = (navigate) => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };
  