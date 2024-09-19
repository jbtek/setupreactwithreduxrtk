import React, { useEffect, useState } from "react";


export const useApiData = (url = '') => {
	const [data, setData] = useState<[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const res = await fetch(url);
				const result = await res.json();
				setData(result);
			} catch (error) {
				setError(error as string | null);
			}
			finally {
        setLoading(false);
      }
		}
		getData();
	}, []);
  return {data, error, isLoading};
}