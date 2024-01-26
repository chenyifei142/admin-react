import { request } from '@/utils/request'

//登录
export const LoginApi = <T>(params: any) => request.post<T>('/web/login', params, {timeout: 15000});
