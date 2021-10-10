<script>
    export let slogan;
    export let time;
</script>

<div class="header">
    <p>{slogan}</p>
    <div class="header__middle">
        <h1>Галерея мебели</h1>
        <div class="shedule">
            <p><b>Работаем без выходных</b></p>
            <p>{time}</p>
        </div>
    </div>
</div>

<style>
    .header__middle {
        margin: 20px 0;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
    }

    h1 {
        color: red;
        font-size: 2rem;
        margin: 0 10px;
    }

    .shedule p {
        margin: 0;
    }
</style>