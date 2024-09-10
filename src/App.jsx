
import { Outlet } from 'react-router';

import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
const App = () => {
  return (
    <>
    
        <Header/>
          <main className="h-[100vh]">
            <section>
              <Outlet/>
            </section>
          </main>
        <Footer/>
    </>
  )
}

export default App