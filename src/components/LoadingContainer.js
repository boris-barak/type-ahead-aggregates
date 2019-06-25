import React, { useState, useEffect } from 'react';
import Loading from "./Loading";

const LoadingContainer = ({children, dataProvider} ) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dataProvider.loadDataFromApi(() => {
            setIsLoading(false);
        });
    }, [dataProvider]);

    if (isLoading) {
        return <Loading/>;
    }

    return children();
};

export default LoadingContainer;