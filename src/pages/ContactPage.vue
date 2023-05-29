<template>
    <section class="section sec4 contact active" id="contact">
        <div class="contact-container">
            <div class="main-title">
                <h2>Contact <span>Me</span></h2>
            </div>
            <div class="contact-content-con">
                <div class="left-contact">
                    <h4>Contact me here</h4>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="icon">
                                <v-icon>mdi-map-marker</v-icon>
                                <span>Location</span>
                            </div>
                            <p>
                                : Bucharest, Romania
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <v-icon>mdi-email-variant</v-icon>
                                <span>Email</span>
                            </div>
                            <p>
                                <span>: vlad.mocanu13@gmail.com</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <v-icon>mdi-phone</v-icon>
                                <span>Mobile Number</span>
                            </div>
                            <p>
                                <span>: +40732356562</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <v-icon>mdi-earth</v-icon>
                                <span>Languages</span>
                            </div>
                            <p>
                                <span>: Romanian, English</span>
                            </p>
                        </div>
                    </div>
                    <div class="contact-icons">
                        <div class="contact-icon">
                            <a href="https://www.linkedin.com/in/vlad-george-m-b83a5616b/" target="_blank">
                                <v-icon>mdi-linkedin</v-icon>
                            </a>
                            <a href="https://codepen.io/vladm13" target="_blank">
                                <v-icon>mdi-codepen</v-icon>
                            </a>
                            <a href="https://github.com/MockingYou" target="_blank">
                                <v-icon>mdi-github</v-icon>
                            </a>
                            <a href="https://www.youtube.com/channel/UCv8svFTVTem9lKKaL4nWOmA" target="_blank">
                                <v-icon>mdi-youtube</v-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="right-contact">
                    <div class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" v-model="name" required placeholder="YOUR NAME">
                            <input type="email" v-model="email" required placeholder="YOUR EMAIL">
                        </div>
                        <div class="input-control">
                            <input type="text" v-model="subject" required placeholder="ENTER SUBJECT">
                        </div>
                        <div class="input-control">
                            <textarea v-model="message" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <div>
                            <button class="mail-btn" @click="sendEmail">Send Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'


export default {
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    },
    methods: {
        async sendEmail() {
            try {
                await axios.get('https://email-sender-xkmk.onrender.com//send-email', {
                  params: {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                }
                })
                .then(response => {
                    console.log(response.data);
                })
            } catch(error) {
                console.error(error);
            };
            // Reset form fields
            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
        },
    },
}
</script>