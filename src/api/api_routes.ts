
const localPaths = {
    singIn: "/auth/login",
    singInWithGoogle: "/auth/google",
    singUp: "/user/sing-up"
}
const prodPaths = {
    singIn: "",
    singInWithGoogle: "",
    singUp: ""
}

export const apiRoutes = import.meta.env.DEV?localPaths:prodPaths;
