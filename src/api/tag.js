import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getTagList(params) {
  return request({
    url: WEB_API + '/tag/getTagList',
    method: 'get',
    params
  })
}

export function getArticleByTagUid(params) {
  return request({
    url: WEB_API + '/tag/getArticleByTagUid',
    method: 'get',
    params
  })
}
