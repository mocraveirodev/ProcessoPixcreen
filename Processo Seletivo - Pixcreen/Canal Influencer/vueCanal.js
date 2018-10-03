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
    methods: {
        startPreloader: function () {
            // Exibe a div de preloader
            document.getElementById('preloader').style.display = 'block'
            // Limpa os dados do resultado:
            document.getElementById('results').innerHTML = ''
            // Oculta a div com o resultado
            document.getElementById('results').style.display = 'none'
            // Oculta a div com o erro
            document.getElementById('error').style.display = 'none'
        },
        endPreloader: function () {
            // Oculta a div de preloader
            document.getElementById('preloader').style.display = 'none'
        },
        mostraCanal: function () {
            // Inicia o preloader
            startPreloader();
            // Recupera o value do input cep
            let influencer = document.querySelector("#influencer").value;
            // let url2 = "`https://pixcreen.com/open/channel/${influencer}/json/`"
            // Inicia requisição AJAX com o axios
            axios.get(`https://pixcreen.com/open/channel/${influencer}/json/`)
                .then(response => {
                    showResults(response.data.channel)
                })
                .catch(error => {
                    // console.log(error)
                    // Mostra a div com o erro
                    document.getElementById('error').style.display = 'block'
                    // Mostra a mensagem
                    document.getElementById('error').innerHTML = 'Erro inesperado'
                })
                .finally(() => endPreloader())
            event.preventDefault()
        },
        showResults: function (channel) {
            // Mostra a div com o resultado
            document.getElementById('results').style.display = 'block'
            let avatar = "`https://pixcreen.com/${channel.avatar}`";
            let posts = channel.posts;
            let friendlyLink = "`https://pixcreen.com/${item.friendlyLink}`";
            let postPicture = "`https://pixcreen.com/${item.postPicture}`";
            let videoLink = "`https://www.youtube.com/watch?v=${item.videoLink}`";
            // Mostra os resultados:
            document.getElementById('results').innerHTML = `
                            <div class="card" style="width:400px" v-for="item in channel">
                                <img class="card-img-top" :src="avatar" alt="Influencer image" style="width:100%">
                                <div class="card-body">
                                    <h4 class="card-title text-center">{{item.influencer_name}}</h4>
                                    <h6 class="card bg-success text-white">master</h6>
                                    <p class="card-text">{{item.influencer_bio}}</p>
                                    <p class="card-text">howManyPosts: {{item.howManyPosts}}</p>
                                </div>
                            </div>
                            <div class="card" v-for="item in posts">
                                <p><b>Título do Post: </b> ${item.title} </p>
                                <p><b>Data e hora de publicação: </b> ${item.pubDate} </p>
                                <p><b>Claps: </b> ${item.claps} </p>
                                <p><b>Link direto para o Post: </b> <a :href="friendlyLink"></a> </p>
                                <p><b>Imagem do post: </b> <img :src="postPicture" alt="Imagem do post" style="width:100%"> </p>
                                <p><b>Texto do Post: </b> ${item.body} </p>
                                <p><b>Video do YouTube: </b> <embed :src="videoLink" allowfullscreen="true" width="425" height="344"> </p>
                            </div>
                        `
        }
    }
});