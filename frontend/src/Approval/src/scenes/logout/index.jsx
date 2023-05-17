import Cookies from "js-cookie"

const Logout = () => {
    Cookies.remove("accessToken")
    Cookies.remove("role")
    Cookies.remove("id")
    window.location.href = "/staff"
}

export default Logout
