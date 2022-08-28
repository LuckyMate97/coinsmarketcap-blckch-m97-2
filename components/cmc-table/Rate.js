import ChevronDown from "../assets/svg/chevronDown"
import ChevronUp from "../assets/svg/chevronUp"

const styles = {
    rate: `rate flex items-center`,
    red: `ml-2 text-[#EA3943]`,
    green: `ml-2 text-[#17C784]`,
    rateFilledUp: `bg-green-600 flex items-center px-3 ml-3 rounded-xl`,
    rateFilledDown: `bg-red-600 flex items-center px-3 ml-3 rounded-xl`,
    rateFilledNull: `bg-gray-600 flex items-center px-3 ml-3 rounded-xl`

}

const Rate = ({ isIncrement, rate }) => {
    return <div className={styles.rate}>
        {(rate>0) ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
        <p className={(rate==0)?styles.rateFilledNull:(rate>0)?styles.rateFilledUp:styles.rateFilledDown}>{rate}</p>
    </div>
}

export default Rate