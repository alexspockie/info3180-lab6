<template>
      <div class="news__list">
           <div v-for="article in articles" class="news__item">
              <img v-bind:src= article.urlToImage>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
           </div>
      </div>
</template>

<script>
export default {
    data() {
      return { articles:[] }     
    },
    created(){
      let self=this;
      fetch('https://newsapi.org/v2/top-headlines?country=us',
      {
      headers:{'Authorization':`Bearer ${import.meta.env.VITE_NEWSAPI_TOKEN}`}
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
        self.articles=data.articles;
      });
    }
}
</script>

<style>
.news__list{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 10px;
    grid-row-gap:20px;
}
.news__item{
   display: flex;
    flex-direction: column;
    max-width:90%;
    min-width: min-content;
    background-color: white;
    border:2px;
    border-radius: 10px;
    border-bottom: 5px solid #3ebb43;
    /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.info{
    padding-left: 20px;
}
img{
    width: auto !important; /*override the width below*/
    width: 100%;
    max-height:220px;
}

h2{
font-size:25px;
}
</style>