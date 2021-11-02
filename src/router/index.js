import { createRouter, createWebHistory } from '@ionic/vue-router';
import CreateFusiome from "@/components/Fusiome/CreateFusiome";
import Fusiomes from "@/components/Fusiome/Fusiomes";
import Signup from "../components/User/Signup";
import Signin from "../components/User/Signin";
import Profile from "@/components/User/Profile";
import FusiomeSlider from "@/components/Fusiome/FusiomeSlider";

const routes = [
  {
    path: '/',
    component: Fusiomes
  },
  {
    path: '/new',
    component: CreateFusiome
  },
  {
    path: '/:id',
    component: FusiomeSlider
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
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router;
