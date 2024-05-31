import { AxiosError } from 'axios';

export type TAxiosErrorWithMessage = AxiosError<{ message: string }>;
