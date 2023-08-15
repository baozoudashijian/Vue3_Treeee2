<template>
    <h1>grid布局</h1>
    <div class="example">
        <h2>案例一</h2>
        <div class="grid-box-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    </div>
    <div class="example">
        <h2>案例二：隐式网格</h2>
        <div class="grid-box-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </div>
    </div>
    <div class="example">
        <h2>案例三：网格线</h2>
        <div class="grid-box-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </div>
    <div class="example">
        <h2>案例四：实际运用1</h2>
        <div class="grid-box-4">
            <div style="min-width: 380px; height: 208px; background: bisque">1</div>
            <div style="min-width: 380px; height: 208px; background: bisque">2</div>
            <div style="min-width: 380px; height: 208px; background: bisque">3</div>
            <div style="min-width: 380px; height: 208px; background: bisque">4</div>
            <div style="min-width: 380px; height: 208px; background: bisque">5</div>
            <div style="min-width: 380px; height: 208px; background: bisque">6</div>
            <div style="min-width: 380px; height: 208px; background: bisque">7</div>
            <div style="min-width: 380px; height: 208px; background: bisque">8</div>
        </div>
    </div>
    <div class="example">
        <h2>案例四：实际运用2</h2>
        <div class="grid-box-5">
            <div style="width: 380px; height: 208px; background: bisque">1</div>
            <div style="width: 380px; height: 208px; background: bisque">2</div>
            <div style="width: 380px; height: 208px; background: bisque">3</div>
            <div style="width: 380px; height: 208px; background: bisque">4</div>
            <div style="width: 380px; height: 208px; background: bisque">5</div>
            <div style="width: 380px; height: 208px; background: bisque">6</div>
            <div style="width: 380px; height: 208px; background: bisque">7</div>
            <div style="width: 380px; height: 208px; background: bisque">8</div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style>
.example {

}
.example h2 {
    margin-left: 20px;
}
.grid-box-1 {
  border: 1px solid #999;
  width: 300px;
  height: 200px;
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr 1fr;  /* 指定 3 列*/
  grid-template-rows: 1fr 1fr; /* 指定 2行 */
}
.grid-box-1 > div {
  background-color: bisque;
  border-radius: 4px;
  border: 1px solid #ccc;
}
/* 隐式网格&隐式网格添加高度 */
.grid-box-2 {
  border: 1px solid #999;
  width: 300px;
  height: 200px;
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 40px;
}
.grid-box-2 > div {
  background-color: bisque;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.grid-box-3 {
  border: 1px solid #999;
  width: 300px;
  height: 200px;
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-column-gap: 2px;
  grid-row-gap: 6px;
}
.grid-box-3 > div {
  background-color: bisque;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.grid-box-3 > div:nth-of-type(1) {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2; /* 如果只占一行或一列，grid-xx-end属性可以不用写 */
}
.grid-box-3 > div:nth-of-type(2) {
  grid-row: 2 / 4; /* grid-row 是 grid-row-start 和 grid-row-end的缩写 */
}
.grid-box-3 > div:nth-of-type(3) {
  grid-column: 2 / span 2; /* span表示占据几行，这里表示从2开始，占据2行，也就是网格线2到4 */
}
.grid-box-3 > div:nth-of-type(6) {
  grid-column: 1 / span 3;
}
.grid-box-4 {
    /* 子元素div不能指定宽度，设置一个min-width就行了 */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)) ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}
.grid-box-5 {
    /* 子元素div不能指定宽度，设置一个min-width就行了 */
    display: grid;
    justify-items:center;
    grid-template-columns: repeat(auto-fill,  minmax(380px, 1fr));
    /* grid-column-gap: 20px;
    grid-row-gap: 20px; */
}
</style>