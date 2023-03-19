import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getMe (params) {
  return request({
    url: WEB_API + '/about/getMe',
    method: 'get',
    params
  })
}

export function getContact (params) {
    return request({
      url: WEB_API + '/about/getContact',
      method: 'get',
      params
    })
  }