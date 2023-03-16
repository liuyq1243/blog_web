import request from "@/utils/request";

export function getBlogByID(params){
    return request({
        url: process.env.WEB_API + '/content/getBlogByUid',
        method: 'get',
        params
    })
}