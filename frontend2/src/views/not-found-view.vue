<template>
  <div class="container">
    <p class="not-found"> page not found </p>
    <div class="tipsiz">
      <div class="tipsiz-body">
        <div class="left-arm arm"></div>
        <div class="face">
          <div class="upper-face">
            <div class="element">4</div>
            <div class="element">0</div>
            <div class="element">4</div>
          </div>
          <div class="mouth"></div>
        </div>
        <div class="right-arm arm"></div>
      </div>
    </div>
    <p> maybe you want to go <a href='#'>back? </a></p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .container {
    height: calc(100vh - 80px);
  }
p {
  font-size: 30px;
  text-align: center;
}

a {
  color: red;
  text-decoration: none;
}

.not-found {
  background-color: black;
  color: white;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.tipsiz {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
}

.tipsiz-body {
  display: flex;
  align-items: center;
  margin: 10px;
}

.arm {
  align-self: flex-end;
  width: 50px;
  height: 90px;
  border-top: 3px solid black;

}

.left-arm {
  border-right: 3px solid black;
  transform: skew(20deg);
}

.right-arm {
  border-left: 3px solid black;
  transform: skew(-20deg);
}

.face {
  width: 300px;
  height: 200px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 15px;
}

.upper-face {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 80px;
  margin-left: 80px;
}

.element {
  font-size: 60px;
}

.mouth {
  width: 20px;
  height: 10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 3px solid black;
  border-bottom: 0;
}
</style>
