// register
const register = (req, res) => {
    res.send('Create account');
};

// login
const login = (req, res) => {
    res.send('Login');
}

// logoutx`xx
const logout = (req, res) => {
    res.send('Logout');
}

// get infor user
const getUser = (req, res) => {
    res.send('Get user info');
}

// update infor user
const updateUser = (req, res) => {
    res.send('Update user info');
}

// delete user
const deleteUser = (req, res) => {
    res.send('Delete user');
}

module.exports = {
    register,
    login,
    logout,
    getUser,
    updateUser,
    deleteUser
}