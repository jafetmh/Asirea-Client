
const localPaths = {
    singIn: "/auth/login",
    singInWithGoogle: "/auth/google"
}
const prodPaths = {
    singIn: "",
    singInWithGoogle: ""
}

export const apiRoutes = import.meta.env.DEV?localPaths:prodPaths;
