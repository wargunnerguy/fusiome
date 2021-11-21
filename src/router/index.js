import { createRouter, createWebHistory } from '@ionic/vue-router';
import CreateFusiome from "@/components/Fusiome/CreateFusiome";
import Fusiomes from "@/components/Fusiome/Fusiomes";
import Signup from "../components/User/Signup";
import Signin from "../components/User/Signin";
import Profile from "@/components/User/Profile";
import FusiomeSlider from "@/components/Fusiome/FusiomeSlider";
import AuthGuard from "./auth-guard"

const routes = [
  {
    path: '/',
    component: Fusiomes,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    component: CreateFusiome,
    beforeEnter: AuthGuard
  },
  {
    path: '/:id',
    component: FusiomeSlider,
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router;
