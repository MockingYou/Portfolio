<template>
    <section class="section sec2 about active" id="about">
        <div class="main-title">
            <h2>About <span>me</span></h2>
        </div>
        <div class="about-container">
            <h4>Information About me</h4>
            <p>
                As a web developer with one year of professional experience, I have had the opportunity to work on a variety of projects that have allowed me to grow both personally and professionally.
                <br /> <br />
                My portfolio showcases my expertise in front-end development, including HTML, CSS, and JavaScript, as well as my experience with popular frameworks such as React and Vue.js. 
                Additionally, I have experience working with back-end technologies such as Node.js, as well as working with databases like MySQL and MongoDB.

                I've worked on several small projects through courses and by myself and now I am looking to further develop my skills.
                <br /> <br />
                I want to develop my potential by working on projects as challenging as possible, to gain as much experience as possible and to build a successful career in the field.

                I am looking forward to get some hands-on experience working and learning in a work enviorment.
            </p>
            <h4>Skills</h4>
            <p>Languages: HTML, CSS, JavaScript, ReactJs, AngularJs, VueJs, Bootstrap, jQuery, SQL, nodeJS, expressJS, C++, Java</p>
            <p>Technology: Git, MongoDB, Unreal Engine 4, Sourcetree, Podman, Linux</p>
            <div class="btn-con">
                <DownloadButton />
            </div>
         </div>
    </section>
</template>

<script>
import DownloadButton from '../components/ui/DownloadButton.vue'

export default {
    components: {
        DownloadButton
    }
}
</script>