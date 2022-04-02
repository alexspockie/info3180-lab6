<template>
<form  @submit.prevent="searchNews" class="d-flex flex-column justify-content-center" >
   <div class="input-group mx-sm-3 mb-2">
   <label class="visually-hidden" for="search">Search</label>
   <input type="search" name="search" v-model="searchTerm" id="search" class="form-control mb-2 mr-sm-2" placeholder="Enter
search term here" />
  <button class="btn btn-primary mb-2">Search</button>
  </div>
 <p>You are searching for {{ searchTerm }}</p>
 </form>
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
      return { articles:[],
              searchTerm:''}     
    },
    methods:{
      searchNews(){
        let self = this;
        fetch('https://newsapi.org/v2/everything?q='+self.searchTerm + '&language=en',{
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
    border-radius: 5px;
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