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
    },
    methods:{
        irCanal: function(event){
            event.preventDefault();
            let nome = document.querySelector('#nome').innerHTML;
            console.log(nome);
            console.log(results);
            for(result in results){
                if (result.influencer_name == nome){
                    let canal = result.channel_id;
                    console.log(canal);
                }                
            }
        }
    }
});