import { useGetIconsQuery } from "../api/apiSlice";
import withLoaderAndErrorHandling from "../common/hoc/Loader";
import Icons from "../molecules/icons/Icons";
const WithLoadingIcons = withLoaderAndErrorHandling(Icons);

const IconsContainer = () => {
    const {data, isLoading, error}  = useGetIconsQuery();
    return (
        <WithLoadingIcons icons={data} loading={isLoading} err={error} />
    )
}
export default IconsContainer