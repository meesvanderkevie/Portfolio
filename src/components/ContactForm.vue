<script scoped>
    export default {
        name: 'ContactForm',
        data() {
            return {
                webhookUrl: "https://discord.com/api/webhooks/1256835244670193736/9BPh31Gxgwz4atE_jwv7oFCHqlwxCu9Tb5LIiiMDBPxRDTq-ZlhwcjlihM5m4zSudI5Z"
            }
        },
        methods: {
            async sendContact(ev) {
                ev.preventDefault();
                
                const senderEmail = document.getElementById('email').value;
                const senderName = document.getElementById('name').value;
                const message = document.getElementById('message').value;

                const webhookBody = {
                    content: "<@909142010458419270>",
                    embeds: [{
                        title: "Nieuw formulier ingevuld",
                        fields: [
                            {
                                name: "Naam:",
                                value: senderName
                            },
                            {
                                name: "Email:",
                                value: senderEmail
                            },
                            {
                                name: "Bericht:",
                                value: message
                            }
                        ]
                    }]
                }

                const response = await fetch(this.webhookUrl, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(webhookBody)
                })

                if (response.ok) {
                    alert('Formulier is succesvol verstuurd!');
                } else {
                    alert('Er is iets misgegaan bij het versturen van het formulier.');
                }

            }
        }
    }
</script>

<template>

    <form @submit="sendContact">
        <h2>Contactformulier</h2>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 300px;
        margin: 0 auto;
    }

    label {
        font-weight: bold;
    }

    input, textarea {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    textarea {
        height: 200px;
    }

    button {
        padding: 0.5rem;
        border-radius: 4px;
        border: none;
        background: #1b7ceb;
        color: white;
        font-weight: bold;
    }
</style>