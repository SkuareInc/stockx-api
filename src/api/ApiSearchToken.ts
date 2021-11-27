import { ParsingException } from '../exceptions';
import { ScrapOption } from '../interfaces';

export const ApiSearchToken = async (options: ScrapOption) => {
  const { executor } = options;
  const res = await executor.get('https://stockx.com/');
  const [matchApp, id] = res.data.match(/"APPLICATION_ID":"([A-Z0-9]+)"/) || [];
  const [matchKey, key] = res.data.match(/window\.searchOnlyApiKey\s=\s'([a-zA-Z0-9]+==)';/) || [];
  if (!matchApp || !matchKey) throw new ParsingException();

  return {
    id,
    key,
  };
};
