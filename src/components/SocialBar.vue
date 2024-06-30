<script scoped>
export default {
    name: 'SocialBar',
    data() {
        return {
            discordUsername: 'itzjustmees'
        }
    },
    methods: {
        CopyUsername() {
            navigator.clipboard.writeText(this.discordUsername)
                .then(() => {
                    alert('Copied username to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy username: ', err);
                });

            window.open('https://discord.com/channels/@me', '_blank');
        }


    }
}
</script>

<template>
    <li>
        <a href="https://github.com/meesvanderkevie">
            <img src="../assets/images/github.svg" alt="github" />
        </a>

        <a href="https://instagram.com/meesvanderkevie">
            <img src="../assets/images/instagram.svg" alt="instagram" />
        </a>

        <a href="https://twitter.com/ItzJustMees">
            <img src="../assets/images/twitter.svg" alt="twitter" />
        </a>

        <a href="mailto:mvanderkevie30@gmail.com">
            <img src="../assets/images/mail.svg" alt="mail" />
        </a>
        <button @click="CopyUsername()" id="discordUsername">
            <img src="../assets/images/discord.svg" alt="discord" />
        </button>


    </li>
</template>

<style scoped>
    li {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #f5f5f5;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #f5f5f5;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        border: none;
    }
</style>