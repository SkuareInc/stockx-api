import { Proxies, Proxy } from '../interfaces/stockx.interfaces';

export const ChooseProxy = (proxys: Proxies): Proxy | undefined => {
  if (!proxys.length) return undefined;
  return proxys[Math.floor(Math.random() * proxys.length)];
};
