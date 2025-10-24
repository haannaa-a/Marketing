class LocalStorage {
  public set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public setMulti(keys: string[], values: any[]) {
    keys.forEach((key, idx: number) => {
      this.set(key, values[idx]);
    });
  }

  public getMulti(keys: string[]): Record<string, any> {
    return keys.reduce(
      (acc, key) => {
        const value = this.get(key);

        if (value === 'true') {
          acc[key] = true;

          return acc;
        }

        if (value === 'false') {
          acc[key] = false;

          return acc;
        }

        acc[key] = this.get(key);

        return acc;
      },
      {} as Record<string, any>,
    );
  }
}

export default LocalStorage;
