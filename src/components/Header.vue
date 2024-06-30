<template>
        <header>
        <nav>
            <img src="@/assets/images/M.png" alt="Logo" class="logo">
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

nav {
    display: flex;
    align-items: center;
}
header {
    background: linear-gradient(to right, #1b7ceb, #00c6ff);
    padding: 15px;
    border-radius: 25px;
}

.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 4px;
}

nav ul {
    margin: 0;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline-block;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #cfe5ff;
    padding: 5px;
    font-weight: bold;
    font-size: 1.5rem;
}

nav ul li a:hover {
    color: #000c48;
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
