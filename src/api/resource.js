import request from '@/utils/request'
import WEB_API from "@/api/env";

export function getStudyVideoBySort (params) {
  return request({
    url: WEB_API + '/resource/getStudyVideoBySort',
    method: 'get',
    params
  })
}