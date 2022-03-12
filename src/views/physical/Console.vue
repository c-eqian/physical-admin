<template>
  <div class="console">
    <div class="console-top">
      <el-carousel :interval="10000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          id: 1,
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.bocstar.cn%2Fupload%2F2018%2F08%2F29%2F15355313859961nba31.png&refer=http%3A%2F%2Fwww.bocstar.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649645180&t=4c35eb74f628e24df1062162d202d7e3'
        },
        {
          id: 2,
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fdesgin_photo%2F40078%2F3835_list.jpg&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649645278&t=be1362e65f7790f2d0670d81d6305de0'
        },
        {
          id: 3,
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-0e73bacafb1e143aca6c1a7349903e34_r.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649645325&t=788707bf7f59b175ed346255d4c23dfb'
        },
        {
          id: 4,
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.szzs360.com%2Fnews%2F2020%2F3%2Fimage%2F2020032265517557.jpg&refer=http%3A%2F%2Fwww.szzs360.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649645360&t=f8b359d848802f3acbba75ccf08aeffe'
        },
        {
          id: 5,
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F0.rc.xiniu.com%2Fg3%2FM00%2F2E%2F53%2FCgAH515cxgKAP1uYAAVeIG9QWrY094.png&refer=http%3A%2F%2F0.rc.xiniu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649645376&t=62df9152dc45b9743f268af5599fb90e'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
}

.console {
  font-size: 30px;
  text-align: center;
  margin-top: 350px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.console-top {
  height: 200px;
  width: 85%;
  position: absolute;
  top: 80px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
