import http from "../http-common";


class AuthService
{

    signUP(form)
    {
        return http.post("/rest-auth/registration/",form);
    }
    logIN(form)
    {
        return http.post('/rest-auth/login/',form)
    }

    getAllUser()
    {
        return http.get('/users/')
    }

    logOut()
    {
        return http.post('/rest-auth/logout/')
    }
}
export default new AuthService();
