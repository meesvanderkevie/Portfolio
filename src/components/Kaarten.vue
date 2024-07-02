<template>
    <div class="gallery">
        <div class="card">
            Card 1
        </div>
        <div class="card">
            Card 2
        </div>
        <div class="card">
            Card 3
        </div>
        <div class="card">
            Card 4
        </div>
        <div class="card">
            Card 5
        </div>
    </div>
</template>

<style scoped>
    .gallery {
        display: flex;
        gap: 4px;
        max-width: 600px;
        margin: 0 auto; /* Add this line */
        margin-top: 3rem;
        justify-content: center; /* Add this line */
        font-family: 'Roboto', sans-serif;
    }

    .card {
        position: relative;
        left: 0px;
        width: 40px;
        border-radius: 4px;
        padding: 8px;
        height: 160px;
        background-color: white;
        transition: 0.4s ease-in-out;
        flex: 1px;
    }

    .card:nth-child(1) {
        background-color: #b881ff;
    }

    .card:nth-child(2) {
        background-color: #ff9950;
    }

    .card:nth-child(3) {
        background-color: #aaec8a;
    }

    .card:nth-child(4) {
        background-color: #ed6a5e;
    }

    .card:nth-child(5) {
        background-color: #99c2fe;
    }

    .card:hover {
        flex: 3;
        font-weight: bold;
        cursor: pointer;
    }
</style>

<script></script>