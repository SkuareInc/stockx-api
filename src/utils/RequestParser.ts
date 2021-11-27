import AxiosOriginal, { AxiosRequestConfig } from 'axios';
import { ItemNotFoundException } from '../exceptions';
import {
  ForbidenException, InvalidInputException, InvalidLoginException, UnknowException,
} from '../exceptions/request.exceptions';

const RequestParser = (config?: AxiosRequestConfig | undefined) => {
  const executor = AxiosOriginal.create(config);
  executor.interceptors.response.use((res) => res, (error) => {
    const status = error?.response?.status;

    if (status === 400) throw new InvalidInputException();
    if (status === 401) throw new InvalidLoginException();
    if (status === 403) throw new ForbidenException();
    if (status === 404) throw new ItemNotFoundException();

    throw new UnknowException(error);
  });
  return executor;
};

export { RequestParser };
