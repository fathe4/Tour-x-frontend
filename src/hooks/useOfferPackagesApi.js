import { useState } from 'react';
import { useEffect } from 'react';

const useOfferPackagesApi = () => {
    const [offerPackages, setOfferPackages] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => { setOfferPackages(data) })
    }, [])
    return {
        offerPackages,
        setOfferPackages
    }
};

export default useOfferPackagesApi;