<template>
    <div>
        <header>
            <h1>Welcome to the ali's caluclator<br>enjoy the math :)</h1>
            <router-link class="go-to" to="/CalculatorButtons">calculator</router-link>
        </header>
    </div>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>






<style scoped>
    .go-to{
        color: rgb(35, 83, 20);
        text-decoration: none;
        border: 2px solid transparent;
        background: rgb(56, 160, 56);
        border-radius: 5px;
        padding: 5px;
        
    }
    .go-to:hover{
        background: rgb(56, 160, 56);
        color: rgb(233, 255, 36);
    }
    header{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
    }
</style>