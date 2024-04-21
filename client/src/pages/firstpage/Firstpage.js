import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";



const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
export const FirstPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <Header />
        <Home />
      </Suspense>
    </>
  );
}
