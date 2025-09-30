interface doApiRequestProps {
  url: string;
}

export const initApiRequest = () => {
  const abortController = new AbortController();

  const doApiRequest = async <T>({
    url,
  }: doApiRequestProps): Promise<{ data: T | undefined }> => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          signal: abortController.signal,
        });
        const { data } = await res.json();

        return data as T;
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          throw new error(error);
        }
      }
    };

    return { data: await fetchData() };
  };

  return { doApiRequest, cancel: () => abortController.abort() };
};
