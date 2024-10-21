import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageSuspenseFullbacck from "@components/common/feedback/PageSuspenseFullback/PageSuspenseFullback";
import { LottieHandler } from "@components/common/feedback";
import { Error } from "@pages/index";

// Main Layout
const MainLayout = lazy(() => import("@templates/MainLayout/MainLayout"));
// Pages
const Home = lazy(() => import("@pages/Home/Home"));
// const Projects = lazy(() => import("@pages/Projects/Projects"));
// const Skills = lazy(() => import("@pages/Skills/Skills"));
// const About = lazy(() => import("@pages/About/About"));
// const Contact = lazy(() => import("@pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginBlockStart: "15%" }}>
            <LottieHandler
              type="serverLoading"
              message="Loading Please Wait.."
            />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFullbacck>
            <Home />
          </PageSuspenseFullbacck>
        ),
      },
      // {
      //   path: "projects",
      //   element: (
      //     <PageSuspenseFullbacck>
      //       <Projects />
      //     </PageSuspenseFullbacck>
      //   ),
      // },
      // {
      //   path: "skills",
      //   element: (
      //     <PageSuspenseFullbacck>
      //       <Skills />
      //     </PageSuspenseFullbacck>
      //   ),
      // },
      // {
      //   path: "about",
      //   element: (
      //     <PageSuspenseFullbacck>
      //       <About />
      //     </PageSuspenseFullbacck>
      //   ),
      // },
      // {
      //   path: "contact",
      //   element: (
      //     <PageSuspenseFullbacck>
      //       <Contact />
      //     </PageSuspenseFullbacck>
      //   ),
      // },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
