export default function () {
  return {
    data() {
      return {
        data: null,
        dataNew: [],
      };
    },
    async mounted() {
      this.data = await this.getAllNews();
      // 分页获取数据
      const data = await this.getnewPage();
      this.dataNew = data.data;
    },
  };
}
