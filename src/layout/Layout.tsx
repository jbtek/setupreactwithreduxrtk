import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
 /**
   * Custom React components must always start with an uppercase letter (WithLoggerCounter).
    Intrinsic Elements are native HTML elements (like <div> or <button>), and trying to use a lowercase component name will make React interpret it as an intrinsic element, leading to this error.
    If you receive TS2339, check the capitalization of your component.
    This should resolve the issue, and your wrapped component should work as expected.
   */
  //Always keep HOC component in Capital letter otherwise it will show this error TS2339 insrtict type error.
  const NotFound = lazy(() => import('../common/errors/NotFound'));
  const BadgesContainer = lazy(() => import('../organism/BadgesContainer'));
  const IconsContainer = lazy(() => import('../organism/IconsContainer'));
  const CounterContainer = lazy(() => import('../organism/CounterContainer'));


//In react-router-dom v6 index is used instead of exact in v5
// useNavigate is used in v6 instead of useHistory
export const Layout = () => {
    return (
        <Suspense fallback={<div>Loading..</div>}>
        <Routes>
            <Route index path="/" element={<BadgesContainer/>}/>
            <Route path="/icons" element={<IconsContainer/>}/>
            <Route path="/badges" element={<BadgesContainer/>}/>
            <Route path="/counter" element={<CounterContainer/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    )
}