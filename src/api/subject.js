import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getSubjectList(params) {
  return request({
    url: WEB_API + '/subject/getList',
    method: 'post',
    data: params
  })
}

export function getSubjectItemList(params) {
  return request({
    url: WEB_API + '/subject/getItemList',
    method: 'post',
    data: params
  })
}



