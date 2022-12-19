// const metaUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaba-RyhOGE1rvZh2njI-VtAGCQJobD6sH0c_KR6jMUukbvUbiAbzwgZBehQFmocFWAVBaQ1Il7qp8/pub?gid=0&single=true&output=csv";

//combined sheet
const itemsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnzB6JfuEY1TznySj7uS5OBnB2Qr7mjkxUHhZERIK2ZnerFZ3nSLxptOGp53nA7cnt_l-xTXR0v-Gw/pub?gid=1421731098&single=true&output=csv";




const app = new Vue({
  el: "#app",
  data: function () {
    return {
      currentFilter: "ALL",
      meta: [],
      items: [],
      search: ''
    };
  },

  created: function () {
    // this.fetchMeta();
    this.fetchItems();
  },
  computed: {
    // console: () => console,
    // window: () => window,
    filteredSearchItems: function(){
      // const trimmedSearch = this.item.toLowerCase();
      return this.items.filter((item) => {

        // const trimmedSearch = this.item.toLowerCase();

        // return item.Vertical.toLowerCase().match(this.search);

          //  console.log(item.Campaign.toLowerCase());

        return item.Campaign.toLowerCase().includes(this.search.toLowerCase()) || item.Vertical.toLowerCase().includes(this.search.toLowerCase()) || item.Size.toLowerCase().includes(this.search.toLowerCase()) || item.Product.toLowerCase().includes(this.search.toLowerCase()) || item.Advertiser.toLowerCase().includes(this.search.toLowerCase())
      });
    }
  },
  methods: {
    toggleMenu: function (){
      document.querySelector('.mobile-menu').classList.toggle("hidden");
    },
    setFilter: function (filter) {
      console.log("clicked!!");
      this.currentFilter = filter;
    },

    fetchMeta() {
      Papa.parse(metaUrl, {
        download: true,
        header: true,
        complete: (results) => (this.meta = results.data),
      });
    },
    fetchItems() {
      const _this = this;
      Papa.parse(itemsUrl, {
        download: true,
        header: true,
        complete: function (results) {
          _this.items = results.data;
          _this.items.reverse()
        },
      });
    },
    getTags: function (tags) {
      return tags.split(",");
    },
  },
});
