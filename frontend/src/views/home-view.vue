<script>
export default {
  name: "home-view",
}
</script>
<template>
  <div class="container">
    <section>
      <div class="circle"></div>
      <div class="content">
        <div class="textbox">
          <h2>Don't think about what to eat for hours <br>It's <span>What2Eat</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis eligendi cupiditate odio
            eveniet iste libero error asperiores. Obcaecati vero, illo doloribus vitae pariatur laborum tempore? Eos
            minima placeat similique.</p>
          <a href="#">Learn More</a>
        </div>
        <div class="imgBox">
          <img src="../assets/images/food-image.png" class="food" alt="">
        </div>
      </div>
    </section>
    <section>
      <div class="circle"></div>
      <div class="content">
        <div class="imgBox">
          <img src="../assets/images/food-image.png" class="food" alt="">
        </div>
        <div class="textbox">
          <h2>Don't think about what to eat for hours <br>It's <span>What2Eat</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis eligendi cupiditate odio
            eveniet iste libero error asperiores. Obcaecati vero, illo doloribus vitae pariatur laborum tempore? Eos
            minima placeat similique.</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
    <section>
      <div class="circle"></div>
      <div class="content">
        <div class="textbox">
          <h2>Don't think about what to eat for hours <br>It's <span>What2Eat</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis eligendi cupiditate odio
            eveniet iste libero error asperiores. Obcaecati vero, illo doloribus vitae pariatur laborum tempore? Eos
            minima placeat similique.</p>
          <a href="#">Learn More</a>
        </div>
        <div class="imgBox">
          <img src="../assets/images/food-image.png" class="food" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,200;1,300;1,400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

section {
  position: relative;
  width: 100%;
  min-width: 100vh;
  padding: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  position: relative;
  display: flex;
}

header ul li {
  list-style: none;
}

header ul li a {
  display: inline-block;
  color: #333;
  font-weight: 400;
  margin-left: 40px;
  text-decoration: none;
}

.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .textbox {
  position: relative;
  max-width: 600px;
}

.content .textbox h2 {
  color: #333;
  font-size: 4em;
  line-height: 1.4em;
  font-weight: 500;
}

.content .textbox h2 span {
  color: #017143;
  font-size: 1.2em;
  font-weight: 900;
}

.content .textbox p {
  color: #333;
}

.content .textbox a {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  background: #017143;
  color: white;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
}

.content .imgBox {
  width: 600px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 50px;
}

.content.imgBox img {
  max-width: 340px;
}

.food {
  max-width: 600px;

  @media (max-width: 576px) {
    max-width: 300px;
  }
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #017143;
  clip-path: circle(600px at right 800px);
}
</style>
