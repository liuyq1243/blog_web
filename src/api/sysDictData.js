import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getListByDictType(params) {
  return request({
    url: WEB_API + '/sysDictData/getListByDictType',
    method: 'post',
    params
  })
}

export function getListByDictTypeList(params) {
  return request({
    url: WEB_API + '/sysDictData/getListByDictTypeList',
    method: 'post',
    data: params
  })
}
