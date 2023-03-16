<template>
  <article>
    <!--banner begin-->
    <div class="picsbox">
      <FirstRecommend></FirstRecommend>
      <!--banner end-->

      <!-- 二级推荐 -->
      <div class="toppic">
        <h1>二级推荐</h1>
        <li v-for="item in secondData" :key="item.uid" @click="goToInfo(item)">
          <a href="javascript:void(0);">
            <i>
              <img v-if="item.photoList" :src="item.photoList[0]">
            </i>
            <h2>{{item.title}}</h2>
            <span>{{item.blogSort.sortName}}</span>
          </a>
        </li>
      </div>
    </div>
    <div class="blank"></div>

    <!--blogsbox begin-->
    <div class="blogsbox">
      <div>
        <h3 class="blogtitle">
          <a href="javascript:void(0);" @click="goToInfo(item)">Title</a>
        </h3>

        <span class="blogpic">
          <a href="javascript:void(0);" @click="goToInfo(item)" title>
<!--            <img v-if="item.photoList" :src="item.photoList[0]" alt>-->
            <div>Img</div>
          </a>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
  // import { Loading } from 'element-ui';

  import FirstRecommend from "@/components/FirstRecommend/index.vue";
  import {getBlogByLevel} from "@/api/index";

  export default {
    name: "blogIndex",
    components: {
      FirstRecommend

    },
    data() {
      return {
        loadingInstance: null, // loading对象
        VUE_MOGU_WEB: process.env.VUE_MOGU_WEB,
        firstData: [], //；一级推荐数据
        secondData: [], //；二级级推荐数据
        thirdData: [], //三级推荐
        fourthData: [], //四级推荐
        newBlogData: [], //最新文章
        hotBlogData: [], //最热文章
        hotTagData: [], //最新标签
        keyword: "",
        currentPage: 1,
        pageSize: 15,
        total: 0, //总数量
        isEnd: false, //是否到底底部了
        loading: false //是否正在加载
      };
    },
    mounted() {
      // 注册scroll事件并监听
      this.loading = false;
    },
    created() {
      var secondParams = new URLSearchParams();
      secondParams.append("level", 2);
      // 是否排序
      secondParams.append("useSort", 1);
      getBlogByLevel(secondParams).then(response => {
        if(response.code == this.$ECode.SUCCESS) {
          this.secondData = response.data.records;
        }
      });
    },
    methods: {
      //跳转到文章详情【或推广链接】
      goToInfo(blog) {
        if(blog.type == "0") {
          let routeData = this.$router.resolve({
            path: "/info",
            query: {blogOid: blog.oid}
          });
          window.open(routeData.href, '_blank');
        } else if(blog.type == "1") {
          var params = new URLSearchParams();
          params.append("uid", blog.uid);
          // getBlogByUid(params).then(response => {
          //   // 记录一下用户点击日志
          // });
          window.open(blog.outsideLink, '_blank');
        }
      }
    }
  }
</script>


<style>

</style>