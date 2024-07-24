import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SemesterOne from '../components/SemesterOne.vue';
import SemesterTwo from '../components/SemesterTwo.vue';
import SemesterThree from '../components/SemesterThree.vue';
import SemesterFour from '../components/SemesterFour.vue';
import SemesterFive from '../components/SemesterFive.vue';
import SemesterSix from '../components/SemesterSix.vue';

const routes: any = [
  {
    path : '/',
    name : 'Home',
    component: Home
  },
  {
    path : '/portfolio-fatec-web',
    name : 'Home',
    component: Home
  },
  {
    path : '/semestre-1',
    name : 'Semestre 1',
    component: SemesterOne
  },
  {
    path : '/semestre-2',
    name : 'Semestre 2',
    component: SemesterTwo
  },
  {
    path : '/semestre-3',
    name : 'Semestre 3',
    component: SemesterThree
  },
  {
    path : '/semestre-4',
    name : 'Semestre 4',
    component: SemesterFour   
  },
  {
    path : '/semestre-5',
    name : 'Semestre 5',
    component: SemesterFive
  },
  {
    path : '/semestre-6',
    name : 'Semestre 6',
    component: SemesterSix
  },
]

const router  = createRouter({
  history: createWebHistory(),
  routes
})

export default router;