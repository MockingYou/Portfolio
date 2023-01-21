<template>
    <section class="section sec2 about active" id="about">
        <div class="main-title">
            <h2>About <span>me</span></h2>
        </div>
        <div class="about-container">
            <h4>Information About me</h4>
            <p>
                Hello, my name is Vlad Mocanu and I’m a software developer.

                I've worked on several small projects through courses and by myself and now I am looking to further develop my skills.
                <br /> <br />
                I want to develop my potential by working on projects as challenging as possible, to gain as much experience as possible and to build a successful career in the field.

                I am looking forward to get some hands-on experience working and learning in a work enviorment.
            </p>
            <h4>Skills</h4>
            <p>Languages: HTML, CSS, JavaScript, React, AngularJS, Vue.js, Bootstrap, jQuery, SQL, nodeJS, expressJS, C++</p>
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