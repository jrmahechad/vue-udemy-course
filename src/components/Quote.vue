<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color:#ccc">
                <slot name="subtitle">The subtitle</slot>
            </span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1p 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color: orangered;
    }
    .title{
        font-style: italic
    }
</style>


