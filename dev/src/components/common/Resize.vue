<template>
    <div :style="{fontSize:fSize+'px'}">
        <slot></slot>
    </div>
</template>

<script>

    let defaultWidth = 1440,
        defaultFont = 16,
        minWidth = 768,
        minHeight = 500,
        defaultHeight = 900;

    export default {
        name: 'Resize',
        mounted () {
            this.onResize();
            window.addEventListener('resize',this.onResize.bind(this));
            this.$root.$emit('onResize');
        },
        data () {
            return {
                isMobile: false,
                vW:  window.innerWidth,
                vH:  window.innerHeight
            }
        },
        computed: {
            fSize () {
                    return !this.$root.isMobile ? defaultFont*Math.min(Math.max(minWidth,this.vW)/defaultWidth,Math.max(minHeight,this.vH)/defaultHeight) : 16;


            }
        },
        methods: {
            onResize () {
                this.$root.$emit('onResize');
                this.isMobile = this.$root.isMobile;
                this.vW = window.innerWidth;
                this.vH = window.innerHeight;
            }
        }

    }
</script>

