<template>
    <a href="./img/Vlad Mocanu Resume.pdf" class="main-btn" target="_blank">
        <span class="btn-text">Download Resume</span>
        <v-icon class="btn-icon" aria-label="My Account" role="img" aria-hidden="false">
            mdi-download
        </v-icon>
    </a>
</template>

<script>

import { mdiDownload } from "@mdi/js";

export default {
  data: () => ({
    icons: {
        mdiDownload
    }
  })
};

</script>
