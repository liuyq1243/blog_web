import request from "@/utils/request";

export function getBlogByLevel (params) {
    return request({
        url: process.env.WEB_API + '/index/getBlogByLevel',
        method: 'get',
        params
    })
}