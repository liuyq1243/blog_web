import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getCommentList (params) {
  return request({
    url: WEB_API + '/web/comment/getList',
    method: 'post',
    data: params
  })
}

export function getCommentListByUser (params) {
  return request({
    url: WEB_API + '/web/comment/getListByUser',
    method: 'post',
    data: params
  })
}

export function getPraiseListByUser (params) {
  return request({
    url: WEB_API + '/web/comment/getPraiseListByUser',
    method: 'post',
    data: params
  })
}

export function addComment (params) {
  return request({
    url: WEB_API + '/web/comment/add',
    method: 'post',
    data: params
  })
}

export function deleteComment (params) {
  return request({
    url: WEB_API + '/web/comment/delete',
    method: 'post',
    data: params
  })
}

export function reportComment (params) {
  return request({
    url: WEB_API + '/web/comment/report',
    method: 'post',
    data: params
  })
}

export function getUserReceiveCommentCount (params) {
  return request({
    url: WEB_API + '/web/comment/getUserReceiveCommentCount',
    method: 'get',
    params
  })
}

export function readUserReceiveCommentCount (params) {
  return request({
    url: WEB_API + '/web/comment/readUserReceiveCommentCount',
    method: 'post',
    params
  })
}

