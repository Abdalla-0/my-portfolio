import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageSuspenseFullbacck from "@components/common/feedback/PageSuspenseFullback/PageSuspenseFullback";
import Error from "@pages/Error";
import { LottieHandler } from "@components/common/feedback";

// Main Layout
const MainLayout = lazy(() => import("@templates/MainLayout/MainLayout"));
// Pages
const Home = lazy(() => import("@pages/Home"));
const AboutUs = lazy(() => import("@pages/AboutUs"));

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

      {
        path: "about-us",
        element: (
          <PageSuspenseFullbacck>
            <AboutUs />
          </PageSuspenseFullbacck>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
