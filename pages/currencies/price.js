import { useState, useEffect } from "react";
import { useContext, useCallback } from 'react';
import Header from "../../components/Header";
import CoinDetails from "../../components/CoinDetails";
import { CoinMarketContext } from '../../contexts/context';


const Price = () => {

    const [coinName, setCoinName] = useState('');
    const [coinSymbol, setCoinSymbol] = useState('');
    const [price, setPrice] = useState('');
    let { getTopTenCoins } = useContext(CoinMarketContext);
    const [coinData, setCoinData] = useState(null);
    

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString(0));
        setCoinSymbol(urlParams.get('symbol'));
    }

    useEffect(() => {
        if(coinName)
        setData()
            
    }, [coinName])


    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTopTenCoins()
            let filteredResponse = []

            for (let i = 0; i < apiResponse.length; i++) {
                const element = apiResponse[i]
                if (element.name.toLowerCase() === coinName.toLowerCase()) filteredResponse.push(element)
            }

            setCoinData(filteredResponse[0])
  
            // if (coinData)
            // setSubmitting(false);

        } catch (e) {
            console.log(e.message)
        }
    }, [ coinName,getTopTenCoins])


    console.log("coinData:")

    console.log(coinData)
   
    
    return <div>
        <Header />
       {coinData && coinData ?( <CoinDetails
            coinName={coinName}
            price={price}
            coinSymbol={coinSymbol}
            marketCapValue={coinData.quote.USD.market_cap}
            volumeValue={coinData.quote.USD.volume_24h}
            dilutedMarketCap={coinData.quote.USD.fully_diluted_market_cap}
            totalSupply={coinData.total_supply}
            maxSupply={coinData.max_supply}
            circulatingSupply={coinData.circulating_supply}
            percentageChange={coinData.quote.USD.percent_change_7d}
        />): (
            <></>
          )}
    </div>
}

export default Price