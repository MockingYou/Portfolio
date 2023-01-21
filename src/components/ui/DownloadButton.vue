<template>
    <a href="Resume Vlad Mocanu.pdf" class="main-btn">
        <span class="btn-text">Download Resume</span>
        <v-icon class="btn-icon" aria-label="My Account" role="img" aria-hidden="false">
            mdi-download
        </v-icon>
        <!-- <span class="btn-icon"><i class="fas fa-download"></i></span> -->
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
