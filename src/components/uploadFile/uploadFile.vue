<template>
    <div>
        <el-upload class='upload-demo' action='https://jsonplaceholder.typicode.com/posts/' :on-success='success' multiple :limit='3' :show-file-list='false' :on-exceed='handleExceed' :file-list='fileList'>
            <el-button size='small' type='primary'>上传附件</el-button>
            <div slot='tip' class='el-upload__tip'>支持word、excel、pdf、ppt、zip、rar等文件格式</div>
        </el-upload>
        <ul class='file-list' v-if="fileList.length > 0" :class="{'border-1': border}">
            <li v-for='(item,index) in fileList' :key='index'>
                <span>{{item.name}}</span>
                <em v-if="showSize">({{(item.size/1024).toFixed(1)}}KB)</em>
                <a :href='item.url' class="fr"><el-button type="primary" size="mini" >下载</el-button></a>
                <a v-if="showDelete" class="fr"><el-button type="primary" size="mini" @click="remove(index)">删除</el-button></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'uploadFile',
  props: {
    action: {
      type: String
    },
    fileList: {
      type: Array,
      default: () => {
        return []
      }
    },
    border: {
      // 是否显示边框
      type: Boolean,
      default: true
    },
    showSize: {
      // 是否显示大小
      type: Boolean,
      default: false
    },
    showDelete: {
      // 是否显示删除按钮
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    success(response, file, fileList) {
      this.$emit('success', fileList)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      this.$emit('exceed')
    },
    remove(val) {
      this.$emit('remove', val)
    }
  },
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.file-list{
    margin-top: 20px;
    width: 400px;
    padding: 10px;
    border-radius: 5px;
    li{
        line-height: 35px;
        height: 35px;
        overflow: hidden;
        span{
            float: left;
            max-width: 180px;
            overflow: hidden;
        }
        em{
            float: left;
            margin-left: 10px;
            color: #999;
        }
        a{
            margin-left: 10px;
        }
    }
}
.border-1{
    border: 1px solid #eee;
}
</style>