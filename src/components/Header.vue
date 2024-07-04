<template>
        <header>
        <nav>
            <img src="@/assets/images/M.png" alt="Logo" class="logo">
            <ul>
                <li><a><router-link to="/">Home</router-link></a></li>
                <li><a><router-link to="Opinie">Opinie</router-link></a></li>
                <li><a><router-link to="Projecten">Projecten</router-link></a></li>
                <li><a><router-link to="Samenvattingen">Samenvattingen</router-link></a></li>
            </ul>
        </nav>
        </header>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

nav {
    display: flex;
    align-items: center;
}
header {
    background: linear-gradient(to right, #1b7ceb, #00c6ff);
    padding: 15px;
    border-radius: 25px;
    font-family: 'Roboto', sans-serif;
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
