<template>
    <header class="section sec1 header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Vlad.</span>
                </h1>
                <p>
                    Hey, my name is Vlad Mocanu. I am a software developer working mainly in web development.
                </p>
                <div class="btn-con">
                    <DownloadButton />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import DownloadButton from '../components/ui/DownloadButton.vue'

export default {
    components: {
        DownloadButton
    }
}
</script>