import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getSortList (params) {
  return request({
    url: WEB_API + '/sort/getSortList',
    method: 'get',
    params
  })
}

export function getArticleByMonth (params) {
  return request({
    url: WEB_API + '/sort/getArticleByMonth',
    method: 'get',
    params
  })
}