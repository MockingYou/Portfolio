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
                    <form action="" class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" required placeholder="YOUR NAME">
                            <input type="email" required placeholder="YOUR EMAIL">
                        </div>
                        <div class="input-control">
                            <input type="text" required placeholder="ENTER SUBJECT">
                        </div>
                        <div class="input-control">
                            <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <div class="submit-btn">
                            <DownloadButton />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DownloadButton from '../components/ui/DownloadButton.vue'

export default {
    components: {
        DownloadButton
    },
    methods: {
        sendEmail() {
            const options = {
        	    method: 'PATCH',
        	    headers: {
        		    'content-type': 'application/json',
        		    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        		    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        	    },
        	    body: '{"type":"stats_notification","email_to":"example@test.com","frequency":"daily"}'
            };

            fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/alerts/%7Balert_id%7D', options)       
	            .then(response => response.json())     
	            .then(response => console.log(response))       
	            .catch(err => console.error(err));
        }
    }
}
</script>