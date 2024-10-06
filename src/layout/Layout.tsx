import { Route, Routes } from "react-router-dom"
import { useGetIconsQuery } from "../api/apiSlice";
import { lazy, Suspense } from "react";
import withLoaderAndErrorHandling from "../common/hoc/Loader";
import withLogger from "../common/hoc/Logger";
 /**
   * Custom React components must always start with an uppercase letter (WithLoggerCounter).
    Intrinsic Elements are native HTML elements (like <div> or <button>), and trying to use a lowercase component name will make React interpret it as an intrinsic element, leading to this error.
    If you receive TS2339, check the capitalization of your component.
    This should resolve the issue, and your wrapped component should work as expected.
   */
  //Always keep HOC component in Capital letter otherwise it will show this error TS2339 insrtict type error.
  const Badges = lazy(() => import('../app-badge/Badge'));
  const Counter = lazy(() => import('../features/counter/Counter'));
  const Icons = lazy(() => import('../features/icons/Icons'));
  const NotFound = lazy(() => import('../common/errors/NotFound'));

const WithLoading = withLoaderAndErrorHandling(Icons);
const WithLoggerCounter = withLogger(Counter);
//In react-router-dom v6 index is used instead of exact in v5
// useNavigate is used in v6 instead of useHistory
export const Layout = () => {
    const {data, isLoading, error} = useGetIconsQuery();
    
    return (
        <Suspense fallback={<div>Loading..</div>}>
        <Routes>
            <Route index path="/" element={<Badges/>}/>
            <Route path="/icons" element={<WithLoading loading={isLoading} icons={data} err={error}/>}/>
            <Route path="/badges" element={<Badges/>}/>
            <Route path="/counter" element={<WithLoggerCounter/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    )
}