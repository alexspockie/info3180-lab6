<template>
    <div class="news_container">
    <h1> News </h1>
     <NewsList/>
    </div>
   
</template>

<script>
import NewsList from '@/components/NewsList.vue'

export default{
    data(){
        return{};
    },
      components:{ NewsList }
};
</script>

<style>
.news_container{
    margin:20px;
}
h1{
text-align:center;
}
</style>