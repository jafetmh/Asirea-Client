import api from "@/utils/axios";
import { defineStore } from "pinia";
import router from "@/router";
import type { User } from "@/interfaces/User";
import { apiRoutes } from "@/api/api_routes";

interface AuthStore {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

const useAuthStore = defineStore('auth', {
    state:(): AuthStore => ({
        user: null,
        token: localStorage.getItem('token') || null,
        isAuthenticated: !!localStorage.getItem('token')
    }),
    persist: {
        storage: sessionStorage,
        pick: ['user', 'isAuthenticated', 'token']
    },
    actions: {
        async singIn(userLogin: Pick<User, "username" | "password">){
            try {
                const response = await api.post(apiRoutes.singIn, userLogin);
                this.setState(response.data);
                console.log(response.data);
                
            } catch (error) {
                throw error;
            }
        },
        async singInWithGoogle(google_token: string): Promise<void> {
            try{
                const response = await api.post(apiRoutes.singInWithGoogle, { token:google_token});
                this.setState(response.data)                
            }catch(error){
                throw error;
            }
        },
        setState(response: {token: string, user: User}):void{
            this.token = response.token;
            this.user = response.user;
            this.isAuthenticated = true;
            router.push('/init')
        },
        logout(): void {
            this.user = null,
            this.token = null,
            this.isAuthenticated = false,
            localStorage.removeItem('token');
            router.push('/login')
        }
    }
    
})

export default useAuthStore;