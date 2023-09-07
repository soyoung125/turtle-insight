interface Path {
    readonly home: string;
    readonly test: string;
    readonly result: string;
    readonly menu: string;
  }
  
  const PATH: Readonly<Path> = Object.freeze({
    home: '/',
    test: '/test',
    result: '/result',
    menu: '/menu',
  });
  
  export default PATH;
  