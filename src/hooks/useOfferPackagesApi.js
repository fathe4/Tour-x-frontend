import { useState } from 'react';
import { useEffect } from 'react';

const useOfferPackagesApi = () => {
    const [offerPackages, setOfferPackages] = useState({})
    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => { setOfferPackages(data) })
    }, [])
    return {
        offerPackages,
        setOfferPackages
    }
};

export default useOfferPackagesApi;