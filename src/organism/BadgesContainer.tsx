import { useGetBadgesQuery } from "../api/badgeSlice";
import withLoaderAndErrorHandling from "../common/hoc/Loader";
import Badges from "../molecules/badges/Badges";

const WithLoadingBadges = withLoaderAndErrorHandling(Badges);
const BadgesContainer = () => {
    const {data, isLoading, error}  = useGetBadgesQuery();
    return (
        <WithLoadingBadges badges={data} loading={isLoading} err={error} />
    )
}
export default BadgesContainer