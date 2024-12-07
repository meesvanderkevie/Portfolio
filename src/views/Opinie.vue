<template>
    <h1>
        Opinie
    </h1>

<div class="gallery-container">
    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Cinque Terre" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>
    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Cinque Terre" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>

    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Forest" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>

    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Northern Lights" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>

    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Mountains" width="600" height="400">
        </a>
    <div class="desc">Add a description of the image here</div>
    </div>

    <div class="gallery">
        <a target="_blank" href="">
            <img src="" alt="Cinque Terre" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>
</div>
</template>

<style scoped>
    h1 {
        font-size: 72px;
        text-align: center;
        background: -webkit-linear-gradient(#6ecd51, #009202);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    div.gallery-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    div.gallery {
        margin: 5px;
        border: 1px solid #ccc;
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.gallery:hover {
        border: 1px solid #777;
    }

    div.gallery img {
        width: 100%;
        height: auto;
    }

    div.desc {
        padding: 15px;
        text-align: center;
    }
</style>

<script></script>