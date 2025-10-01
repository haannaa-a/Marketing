export enum REQUEST_METHOD {
  Get = 'GET',
  Post = 'POST',
}

const INITIAL_CONFIG = {
  method: REQUEST_METHOD.Get,
};

interface Config {
  method?: string;
  body?: any;
}

export const initApiRequest = () => {
  const abortController = new AbortController();

  const doApiRequest = async <T>(
    url: string,
    config: Config = INITIAL_CONFIG,
  ): Promise<T | undefined> => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          ...config,
          body: config.body ? JSON.stringify(config.body) : null,
          signal: abortController.signal,
        });
        const data = await res.json();

        return data as T;
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          throw new error(error);
        }
      }
    };

    return await fetchData();
  };

  return { doApiRequest, cancel: () => abortController.abort() };
};
