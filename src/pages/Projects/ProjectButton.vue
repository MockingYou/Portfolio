<template>
    <div class="icons">
        <a :href="link" class="icon" target="_blank">
            <v-icon>{{ icon }}</v-icon>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProjectButton',
    props: {
        link:  String,
        icon: String
    },
}
</script>