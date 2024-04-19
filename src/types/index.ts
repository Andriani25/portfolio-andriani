declare module '*.png' {
    const value: string;
    //@ts-expect-error
    export = value;
  }

  declare module '*.jpeg' {
    const value: string;
     //@ts-expect-error
    export = value;
  }