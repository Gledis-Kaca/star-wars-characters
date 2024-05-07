const AuthService = {
    isAuthenticated: false,
    token: '',
  
    login: async (username, password) => {
      // Mock authentication with static data
      if (username === 'user' && password === 'password') {
        AuthService.isAuthenticated = true;
        AuthService.token = 'mocked_jwt_token';
        return true;
      } else {
        return false;
      }
    },
  
    logout: () => {
      AuthService.isAuthenticated = false;
      AuthService.token = '';
    },
  
    getToken: () => {
      return AuthService.token;
    }
  };
  
  export default AuthService;