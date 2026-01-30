import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx'
import KeyFigures from '../sections/KeyFigures.jsx'
import Solution from '../sections/Solutions.jsx'
import Why from '../sections/Why.jsx'
import Link from '../sections/Link.jsx'
import Cta from '../sections/Cta.jsx'
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Solution />
      <Why />
      <KeyFigures />
      <Link />
      <Cta />
    </div>
  );
}