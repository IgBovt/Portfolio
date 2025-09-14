import Footer from '../../components/Footer/Footer';
import ProjectList from '../../components/ProjectList/ProjectList';
import Welcome from '../../components/Welcome/Welcome';
import { useState } from 'react';

export default function HomePage() {
  const [footerActive, setFooterActive] = useState(false);

  return (
    <>
      <Welcome />
      <ProjectList onScrollFooter={setFooterActive} />
      <Footer isActive={footerActive} onScrollFooter={setFooterActive} />
    </>
  );
}
