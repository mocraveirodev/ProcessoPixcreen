const url = "https://pixcreen.com/followers/open/topic-channels/393/json/";
const vm = new Vue({
    el: '#app',
    //Mock data for the value of BTC in USD
    data: {
        results: [],
        // avatarUrl: 'https://pixcreen.com'+${result.avatar}
    },
    mounted() {
        axios.get(url).then(response => {
            this.results = response.data.channels
        })
    }
});