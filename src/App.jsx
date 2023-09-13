import { Intro, Features, About } from './sections';
import Navbar from './components/Navbar';

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Intro />
    </section>

    <section className="padding">
      <Features />
    </section>

    <section className="padding bg-black text-white padding-x padding-t pb-8">
      <About />
    </section>
  </main>
);

export default App;