const url1 = "https://pixcreen.com/followers/open/topic-channels/393/json/";
const vm = new Vue({
    el: '#app',
    data: {
        results: [],
        influencer: ''
    },
    mounted() {
        axios.get(url1).then(response => {
            this.results = response.data.channels
        })
    },
    methods:{
        mostraCanal: function(){
            // ev.preventDefault();
            let influencer = document.querySelector("#influencer").value;
            let channels = [];
            axios.get(url1).then(response => {
                this.channels = response.data.channels
            });
            console.log(influencer);
            for(channel in channels){
                if(influencer == channel.influencer_name){
                    let id = channel.channel_id;
                    alert(id);
                }
            }
        }
    }
});