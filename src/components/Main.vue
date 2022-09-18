<script>
export default {
    methods: {
        gotosite(url) {
            window.location.href = window.location.href + url;
        }
    }
}
</script>
    
<template>
    <div class="backlog">
        <div class="main">
            <div>
                <div class="title">В мире книг</div>
                <div class="separator"></div>
            </div>
            <div class="instruction">
                <div class="ins_title">Инструкция:</div>
                <div class="ins">Распредели книги, ориентируясь на названия, по соответствующим рубрикам таблицы: «Жанры
                    фольклора», «Не являются жанрами фольклора».</div>
            </div>
            <div>
                <input class="def-btn" type="button" value="Продолжить" v-on:click="gotosite('game')">
            </div>
        </div>
    </div>
</template>
    
<style scoped>
.backlog {
    background: #FFFFFF;
}

.main {
    max-width: 1320px;
    margin: auto;
    padding: 60px 17px;
    border-left: 2px solid salmon;
    border-right: 2px solid salmon;
    height: 100vh;
}

.title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #8BD74B;
    margin-bottom: 36px;
}

.separator {
    width: 100%;
    border: 2px solid #8BD74B;
}

.instruction {
    padding: 22px 36px;
}

.ins_title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #183B59;
}

.ins {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    color: #183B59;
}

.def-btn {
    padding: 12px 52px;
    outline: none;
    border: none;

    background: #8BD74B;
    border-radius: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;

    cursor: pointer;
}
</style>
    