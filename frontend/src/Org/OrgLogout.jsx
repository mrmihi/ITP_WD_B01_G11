import Cookies from "js-cookie"

const OrgLogout = () => {
    Cookies.remove("org_id")
    Cookies.remove("org_accessToken")
    Cookies.remove("org_name")
    window.location.href = "/org/login"
}

export default OrgLogout
