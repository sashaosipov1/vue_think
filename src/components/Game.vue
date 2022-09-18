<script>
export default {
    data() {
        return {
            books: [
                {
                    name: 'book1',
                    src: 'src/assets/book1.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: true
                },
                {
                    name: 'book2',
                    src: 'src/assets/book2.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: true
                },
                {
                    name: 'book3',
                    src: 'src/assets/book3.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: false
                },
                {
                    name: 'book4',
                    src: 'src/assets/book4.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: true
                },
                {
                    name: 'book5',
                    src: 'src/assets/book5.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: false
                },
                {
                    name: 'book6',
                    src: 'src/assets/book6.svg',
                    src2: 'src/assets/dots.svg',
                    isFolk: false
                }
            ],
            folklore: [
                {
                    name: 'slot1',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
                {
                    name: 'slot2',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
                {
                    name: 'slot3',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
                {
                    name: 'slot4',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
                {
                    name: 'slot5',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
                {
                    name: 'slot6',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: true,
                    empty: true
                },
            ],
            notFolklore: [
                {
                    name: 'slot1',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
                {
                    name: 'slot2',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
                {
                    name: 'slot3',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
                {
                    name: 'slot4',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
                {
                    name: 'slot5',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
                {
                    name: 'slot6',
                    nameInput: '',
                    src: '',
                    src2: '',
                    isFolk: false,
                    empty: true
                },
            ],
            dragItem: {}
        }
    },
    methods: {
        startDrag(evt, item) {
            this.dragItem = item;
        },
        onDrop(evt, item, arrq) {
            const book = this.dragItem;
            arrq.forEach(function (i) {
                if (i.name === item.name) {
                    i.nameInput = book.name;
                    i.src = book.src;
                    i.src2 = book.src2;
                    i.inputStatus = book.isFolk;
                    i.empty = false;
                }
            });
            this.dragItem = {}
        },
        gotosite() {            
            window.location.href = window.location.href.replace('game', '');
        },
        checkingResult() {
            this.folklore.forEach(function(i) {
                if (i.isFolk === i.inputStatus) {
                    i.success = true;
                    i.danger = false;
                } else {
                    i.success = false;
                    i.danger = true;
                }
            });

            this.notFolklore.forEach(function(i) {
                if (i.isFolk == i.inputStatus) {
                    i.success = true;
                    i.danger = false;
                } else {
                    i.success = false;
                    i.danger = true;
                }
            });
        },
        isEmpty(i) {
            return i.empty;
        },
        isSuccess(i) {
            return i.success || '';
        },
        isError(i) {
            return i.danger || '';
        }
    },
}
</script>
    
<template>
    <div class="backlog">
        <div class="main">
            <div class="head">
                <div class="back" v-on:click="gotosite('game')">
                    <img src="../assets/navig.svg" alt="back_arrow">
                    <span>Назад</span>
                </div>
            </div>
            <div class="title">
                В мире книг
            </div>
            <div>
                <div class="col-name"></div>
                <div class="col-name"></div>
                <div class="col-name">Жанры фольклора</div>
                <div class="col-name">Не являются жанрами фольклора</div>
            </div>
            <div class="books">
                <div class="left-cont">
                    <div class="book-card" v-for="book in books" :key="book.name" draggable
                        @dragstart="startDrag($event, book)">
                        <div style="display: flex; justify-content: space-between;">
                            <img class="dots" v-bind:src="book.src2" alt="">
                            <img v-bind:src="book.src" alt="">
                        </div>
                    </div>
                </div>
                <div class="right-cont">
                    <div class="folk" style="width: 50%; text-align: center;">
                        <div v-bind:class="[ isEmpty(folk) ? 'empty-slot' : 'book-card', isSuccess(folk) ? 'success': '', isError(folk) ? 'danger': '' ]" v-for="folk in folklore" :key="folk.name"
                            @drop="onDrop($event, folk, folklore)" @dragover.prevent @dragenter.prevent>
                            <div style="display: flex; justify-content: space-between;">
                                <img v-bind:src="folk.src2" alt="">
                                <img v-bind:src="folk.src" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="not-folk" style="width: 50%; text-align: center;">
                        <div v-bind:class="[ isEmpty(folk) ? 'empty-slot' : 'book-card', isSuccess(folk) ? 'success': '', isError(folk) ? 'danger': '' ]" v-for="folk in notFolklore" :key="folk.name"
                            @drop="onDrop($event, folk, notFolklore)" @dragover.prevent @dragenter.prevent>
                            <div style="display: flex; justify-content: space-between;">
                                <img v-bind:src="folk.src2" alt="">
                                <img v-bind:src="folk.src" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="check">
                <input class="btn-check" type="button" value="Проверить" v-on:click="checkingResult">
            </div>
        </div>
        <div class="footer">
            <img class="cat" src="../assets/cat.svg" alt="">
        </div>
    </div>
</template>
    
<style scoped>
.backlog {
    background: #ECF6E9;
}

.main {
    max-width: 1400px;
    margin: auto;
    /* height: 100vh; */
    background: #FFFFFF;
    padding: 20px 40px;
}

.head {
    height: 80px;

    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 8px;
}

.back {
    height: 36px;
    width: 98px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    color: #8BD74B;

    cursor: pointer;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 40px 16px;
    height: 128px;
    background: linear-gradient(90deg, #3F8CFF 0.06%, #60B9A6 99.94%);
    box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
    border-radius: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #FFFFFF;

    margin-bottom: 24px;
}

.books {
    display: flex;
    margin-bottom: 32px;
}

.left-cont {
    width: 50%;
}

.right-cont {
    width: 50%;
    display: flex;
}

.book-card {
    /* display: flex;
    flex-direction: row;
    align-items: center; */
    display: inline-block;
    text-align: right;
    padding: 24px 12px;
    width: 285px;
    height: 280px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 12px;
    margin-right: 25px;
    margin-bottom: 12px;
}

.book-card .dots {
    opacity: 0.5;
    transition: all 1s;
}

.book-card:hover .dots {
    opacity: 1;
    transition: all 1s;
}

.book-card.success {
    border-left: 2px solid #46B755;
}

.book-card.danger {
    border-left: 2px solid #F93232;
}

.empty-slot {
    display: inline-block;
    text-align: right;
    padding: 24px 12px;
    width: 285px;
    height: 280px;

    background: #F2F2F2;

    border: 1px dashed #B0B2C1;
    border-radius: 12px;

    margin-bottom: 12px;
}

.col-name {
    display: inline-block;
    width: 25%;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #183B59;
    margin-bottom: 43px;
}

.btn-check {
    padding: 12px 52px;
    border: none;

    width: 191px;
    height: 46px;

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

.footer {
    text-align: right;
}
</style>