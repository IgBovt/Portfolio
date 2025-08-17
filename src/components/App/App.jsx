import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ProjectPage = lazy(() => import('../../pages/ProjectPage/ProjectPage'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage')
);

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
