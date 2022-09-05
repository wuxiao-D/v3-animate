
## install
```js
npm install v3-animate

// or 

yarn add v3-animate

```

## use
```js

import vAnimate from "v3-animate";

app.use(vAnimate)

```


## config

|name|type| manual | 默认 |
|--|--|--|--|
| direction | String | 'right':自左向右，'left':自右向左 | ‘center’ |
| time | Number\| Float | 时长，单位：秒。理论上可以任取 | 0.6 |

## Demo

```html
<template>
  <div class="Merchant" v-animate="{direction: 'right', time: 0.6}">
    <div class="box">一个组件</div>
  </div>
</template>


<style lang="less" scoped>

.Merchant {
  position: fixed;
  left: 20px;
  top: 460px;
  z-index: 99;
  width: 350px;
  height: 375px;

  .box {
    width: 100%;
    height: 340px;
    background-image: url('@/assets/popBg/popBg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

}
</style>
```