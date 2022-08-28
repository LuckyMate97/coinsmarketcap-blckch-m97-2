import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useMoralisQuery } from 'react-moralis'
// import {
//   dogeAbi,
//   daiAbi,
//   linkAbi,
//   usdcAbi,
//   dogeAddress,
//   linkAddress,
//   daiAddress,
//   usdcAddress,
// } from '../lib/constants'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis()
  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery('coins')

  // const [currentAccount, setCurrentAccount] = useState('')
  // const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false) //Permet de swap les tokens
  // const [fromToken, setFromToken] = useState('')
  // const [toToken, setToToken] = useState('Dai')
  // const [amount, setAmount] = useState('')

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const account = user.get('ethAddress')
  //     setCurrentAccount(account)
  //   }
  // }, [isAuthenticated])

  // const getContractAddress = () => {
  //   if (fromToken === 'Dai') return daiAddress
  //   if (fromToken === 'Dogecoin') return dogeAddress
  //   if (fromToken === 'Link') return linkAddress
  //   if (fromToken === 'Usdc') return usdcAddress
  // }
  // //Ici on a une fonction qui correspond au modal qui permet de choisir le token d'interet 


  // const getToAddress = () => {
  //   if (toToken === 'Dai') return daiAddress
  //   if (toToken === 'Dogecoin') return dogeAddress
  //   if (toToken === 'Link') return linkAddress
  //   if (toToken === 'Usdc') return usdcAddress
  // }

  // //Ici on a une fonction qui correspond au modal qui permet de savoir pour quel token on echange notre token

  // const getToAbi = () => {
  //   if (toToken === 'Dai') return daiAbi
  //   if (toToken === 'Dogecoin') return dogeAbi
  //   if (toToken === 'Link') return linkAbi
  //   if (toToken === 'Usdc') return usdcAbi
  // }

  // //Ici on a une fonction qui permet d'optenir Abi du token d'interet 

  // const openModal = () => {
  //   setOpenBuyCryptoModal(true)
  // }

  // //Mint function for the token with send ether to the contract
  // const mint = async () => {
  //   try {
  //     if (fromToken === 'ETH') {
  //       if (!isAuthenticated) return
  //       await Moralis.enableWeb3()
  //       const contractAddress = getToAddress()
  //       const abi = getToAbi()

  //       let options = {
  //         contractAddress: contractAddress,
  //         functionName: 'mint',//On specifie que l'on veut que la fonction 'mint' du fichier Dai.sol(exemple ici mais plus generalement token.sol) localise dans contracts doit s'activer.
  //         abi: abi,
  //         params: {
  //           to: currentAccount,
  //           amount: Moralis.Units.Token(amount),
  //         },
  //       }
  //       sendEth()
  //       const transaction = await Moralis.executeFunction(options)
  //       const receipt = await transaction.wait(4)
  //       console.log(receipt)
  //     } else {
  //       swapTokens()
  //     }
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }
  // //Fonction qui permet le swap des tokens 



  // const swapTokens = async () => {
  //   try {
  //     if (!isAuthenticated) return
  //     await Moralis.enableWeb3()

  //     if (fromToken === toToken) return alert('You cannot swap the same token')

  //     const fromOptions = {
  //       type: 'erc20',
  //       amount: Moralis.Units.Token(amount, '18'),
  //       receiver: getContractAddress(),
  //       contractAddress: getContractAddress(),
  //     }
  //     const toMintOptions = {
  //       contractAddress: getToAddress(),
  //       functionName: 'mint',
  //       abi: getToAbi(),
  //       params: {
  //         to: currentAccount,
  //         amount: Moralis.Units.Token(amount, '18'),
  //       },
  //     }
  //     let fromTransaction = await Moralis.transfer(fromOptions)//Transfert du token vers le contract voulu
  //     let toMintTransaction = await Moralis.executeFunction(toMintOptions)//Execution de la fonction mint du contract du token d'interet qui renvoie une somme de token d'interet en retour 
  //     let fromReceipt = await fromTransaction.wait()
  //     let toReceipt = await toMintTransaction.wait()
  //     console.log(fromReceipt)
  //     console.log(toReceipt)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }
  // //Fonction qui realise un transfert de token a token 
  // //Que ce passe t -il ici 
  // //Si on echange DogeCoin pour Usdc 
  // /**
  //  * 
  //  1- envoie de token dogeCoin a Usdc Contract 
  //  2- Usdc Contract doit "mint me (fonction)" c'est a dire me renvoyer une somme de token Usdc en retour en fonction taux auquel s'echange les deux tokens  
  //  */

  // //Send eth function 
  // const sendEth = async () => {
  //   if (!isAuthenticated) return
  //   const contractAddress = getToAddress()

  //   let options = {
  //     type: 'native',
  //     amount: Moralis.Units.ETH('0.01'),
  //     receiver: contractAddress,
  //   }
  //   const transaction = await Moralis.transfer(options) //Realise la transaction avec les options definis
  //   const receipt = await transaction.wait() //Attends que la transactions soit realise sur la blockchain donc verifier par des mineurs 
  //   console.log(receipt)
  // }
  // //Fonction s'assure que l'on renvoie des Eth pour les contrats que l'on envoie 



  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        // openBuyCryptoModal,
        // setOpenBuyCryptoModal,
        // coins,
        // loadingCoins,
        // fromToken,
        // toToken,
        // setFromToken,
        // setToToken,
        // amount,
        // setAmount,
        // mint,
        // openModal,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}