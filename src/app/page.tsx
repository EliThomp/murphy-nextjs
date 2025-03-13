import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import Middle from '@/components/Middle';
import BottomMenu from '@/components/BottomMenu';

/** The Home page. */
const Home = () => (
  <main>
    <Container>
      <TopMenu />
      <Middle />
      <BottomMenu />
    </Container>
  </main>
);

export default Home;
