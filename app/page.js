import { Footer, Navbar, Sidebar } from '../components';
import { About, Hero, Projects, Experience, Contact} from '../sections';

export default function Home() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      
      <Footer/>
    </div>
  )
}
