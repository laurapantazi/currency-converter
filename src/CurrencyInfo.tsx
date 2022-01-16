type Props = {
    currency1: string;
    currency2: string;
}

const CurrencyInfo:React.FC<Props> = ({currency1, currency2}) => {

    return (
        <div>
            {currency1} is equal to {currency2}
        </div>
    );
}

export default CurrencyInfo;