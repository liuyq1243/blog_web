import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getBlogByUid (params) {
  return request({
    url: WEB_API + '/content/getBlogByUid',
    method: 'get',
    params
  })
}

export function getSameBlogByTagUid (params) {
  return request({
    url: WEB_API + '/content/getSameBlogByTagUid',
    method: 'get',
    params
  })
}

export function getSameBlogByBlogUid (params) {
  return request({
    url: WEB_API + '/content/getSameBlogByBlogUid',
    method: 'get',
    params
  })
}

export function praiseBlogByUid (params) {
  return request({
    url: WEB_API + '/content/praiseBlogByUid',
    method: 'get',
    params
  })
}

export function getBlogPraiseCountByUid (params) {
  return request({
    url: WEB_API + '/content/getBlogPraiseCountByUid',
    method: 'get',
    params
  })
}