import withLogger from "../common/hoc/Logger";
import Counter from "../molecules/counter/Counter";

const WithLoggerCounter = withLogger(Counter);

const CounterContainer = () => {
    return (
        <WithLoggerCounter />
    )
}
export default CounterContainer
