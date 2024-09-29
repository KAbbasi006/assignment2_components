import About from "@/components/about/page";
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

export default function Home(){
  return(
    <div style={{ position: 'relative', height: '100vh' }}>
    <Header/>
    <About/>
    <Footer/>
    </div>
  )
}