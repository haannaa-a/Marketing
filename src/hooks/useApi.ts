import { useEffect, useState } from 'react';
import { initApiRequest } from '../services/initApiRequest.ts';

export const useApi = <T>({ url }: { url: string }) => {
  const [fetchData, setFetchData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { doApiRequest, cancel } = initApiRequest();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);

        const { data } = await doApiRequest<T>({ url });

        if (data) {
          setFetchData(data);
        }
      } catch (error: any) {
        setError('Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };

    void fetchMetrics();

    return () => cancel();
  }, []);

  return { data: fetchData, loading, error };
};
