import React, { useState } from 'react';

const useApi = (apiFunc) => {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false)
        if (!response.ok) return setError(true);

        setError(false);
        setData(response.data);
    }
    return { request, data, error, loading }

}

export default useApi;