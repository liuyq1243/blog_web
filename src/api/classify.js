import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getBlogSortList(params) {
  return request({
    url: WEB_API + '/classify/getBlogSortList',
    method: 'get',
    params
  })
}

export function getArticleByBlogSortUid(params) {
  return request({
    url: WEB_API + '/classify/getArticleByBlogSortUid',
    method: 'get',
    params
  })
}