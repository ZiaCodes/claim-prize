const setSession = (user) => {
    console.log(JSON.stringify(user));
    sessionStorage.setItem("user", JSON.stringify(user));
};

const getSession = () => {
    return JSON.parse(sessionStorage.getItem("user"));
};

const removeSession = () => {
    sessionStorage.removeItem("user");
};

const SessionService = {
    removeSession,
    getSession,
    setSession,
};
export default SessionService;