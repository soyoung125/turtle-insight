interface Path {
    readonly home: string;
    readonly test: string;
    readonly result: string;
    readonly result_mbti: string;
    readonly menu: string;
  }
  
  const PATH: Readonly<Path> = Object.freeze({
    home: '/',
    test: '/test',
    result: '/result',
    result_mbti: '/result/:mbti_type',
    menu: '/menu',
  });
  
  export default PATH;
  