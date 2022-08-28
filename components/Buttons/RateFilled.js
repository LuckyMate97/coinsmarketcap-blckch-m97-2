import ChevronUp from "../../components/assets/svg/chevronUp";
import ChevronDown from "../../components/assets/svg/chevronDown";


const styles = {
    rateFilledUp: `bg-green-600 flex items-center px-3 ml-3 rounded-xl`,
    rateFilledDown: `bg-red-600 flex items-center px-3 ml-3 rounded-xl`,
    rateFilledNull: `bg-gray-600 flex items-center px-3 ml-3 rounded-xl`
}

const RateFilled = ({percentageChange}) => {
    return <div className={(percentageChange==0)?styles.rateFilledNull:(percentageChange>0)?styles.rateFilledUp:styles.rateFilledDown}>
        {(percentageChange>0)?<ChevronUp />:<ChevronDown />}
        <small className='pl-1'>{percentageChange.toFixed(2)}</small>
    </div>
}

export default RateFilled