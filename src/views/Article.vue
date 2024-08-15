<template>
    <div id="article">

    </div>
</template>

<script>
import Restrictor from '@/components/Restrictor.vue';

export default {
    components: {
        Restrictor,
    },
}
</script>

<style scope>
#article {
    text-align: left;

    #article-banner {
        width: calc(100vw);
        height: 200px;
        object-fit: cover;
    }

    #title {
        text-align: center;
        font-weight: bold;
        font-size: x-large;
        margin: 20px 0;
    }

    #content, #intro {
        margin: 0 20px;
        font-size: 18px;
        word-spacing: 5px;
    }

    #intro {
        margin-bottom: 25px;
    }
}

#article-info {
    color: gray;
    margin-bottom: 8px;
    .info-item {
        margin-left: 20px;
    }
}
</style>