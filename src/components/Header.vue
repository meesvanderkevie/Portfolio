<template>
        <header>
        <nav>
            <img src="" alt="Logo" class="logo">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        </header>
</template>

<style scoped>
header {
    background-color: #ff5d5d;
    padding: 15px;
    border-radius: 25px;
}

.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline-block;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #005ec9;
    padding: 5px;
    font-weight: bold;
}

nav ul li a:hover {
    color: #666;
    font-size: 1.7rem;
}

/* Media Queries 
@media screen and (max-width: 600px) {
    nav ul li {
        display: block;
    }
}

*/

</style>
