const url = "https://pixcreen.com/followers/open/topic-channels/393/json/";
const vm = new Vue({
    el: '#app',
    data: {
        results: [],
    },
    mounted() {
        axios.get(url).then(response => {
            this.results = response.data.channels
        })
    },
    methods:{
        irCanal: function(event){
            event.preventDefault();
            for(result in results){
                let canal = resul
            }
        }
    }
});