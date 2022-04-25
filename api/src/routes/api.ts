export const api = {
  home: {path: '/', handler: (req: any, res: any) => {res.end(new Date().toDateString());}}
};
