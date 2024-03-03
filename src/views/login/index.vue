<template>
 <div class="body" ref="body">
<!-- partial:index.partial.html -->
<div class="scroll-down" ref="scroll-down">
  <div>点击按钮进入新世界</div>
  <svg @click="openModal" ref="modal-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M16 3C8.832031 3 3 8.832031 3 16s5.832031 13 13 13 13-5.832031 13-13S23.167969 3 16 3zm0 2c6.085938 0 11 4.914063 11 11 0 6.085938-4.914062 11-11 11-6.085937 0-11-4.914062-11-11C5 9.914063 9.914063 5 16 5zm-1 4v10.28125l-4-4-1.40625 1.4375L16 23.125l6.40625-6.40625L21 15.28125l-4 4V9z"/> 
</svg>

</div>
 <div class="container" ref="container">
  <div class="modal" ref="modal">
   <div class="modal-container">
    <div class="signin" >
        <h1 class="modal-title">Welcome!</h1>
        <div class="modal-desc" style="opacity: 0.8;">Fanny pack hexagon food truck, street art waistcoat kitsch.</div>
       <div class="input-block">
        <label for="email" class="input-label">Email</label>
        <input type="email" name="email" placeholder="Email">
       </div>
       <div class="input-block">
        <label for="password" class="input-label">Password</label>
        <input type="password" name="password"  placeholder="Password">
       </div>
       <div class="modal-buttons">
        <a href="" class=""></a>
        <button class="input-button">Login</button>
       </div>
      
      <p class="zhuce">Don't have an account? <button id="registerBtn" ref="registerBtn" @click="toRegist" class="input-button">注册</button></p>
    </div>
    <div class="signup" >
      <h1 class="modal-title">你好！</h1>
      <div class="modal-desc" >Fanny pack hexagon food truck, street  kitsch.</div>
     <div class="input-block">
      <label for="email" class="input-label">Email</label>
      <input type="email" name="email" placeholder="Email">
     </div>
     <div class="input-block">
      <label for="password" class="input-label">Password</label>
      <input type="password" name="password" placeholder="Password">
     </div>
     <div class="modal-buttons">
      <a href="" class=""></a>
      <button class="input-button">Regist</button>
     </div>
    
    <p class="zhuce">已有账户? <button id="loginBtn" ref="loginBtn" @click="toLogin" class="input-button">登录</button></p>
  </div>
    <div class="picture">
      <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="">
    </div>
    <button class="icon-button close-button" @click="closeModal" ref="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
 </svg>
      </button>
    </div>
    <!-- <button class="modal-button" @click="openModal" ref="modal-button">Click here to login</button> -->
  </div>
 </div>
   <!-- 背景动效 -->
 <div class="blobs" role="progressbar">
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
        data(){
            return {
              isOpened : false
            }
        },
        methods:{
            openModal(){
              this.$refs.modal.classList.add("is-open");
              this.$refs.body.style.overflow = "hidden";
            },

            closeModal () {
              this.$refs.modal.classList.remove("is-open");
              this.$refs.body.style.overflow = "initial";
            },
            toRegist(){
              // 切换到注册表单
              this.$refs.container.classList.add("active");
              // 切换注册和登录按钮的激活状态
              this.$refs.registerBtn.classList.add("active");
              this.$refs.loginBtn.classList.remove("active");
              // 将右侧图片移动到左侧
              this.$refs.modalRight.classList.add("modal-register");
            },
            toLogin(){
              // 移除注册表单
              this.$refs.container.classList.remove("active");
              // 切换注册和登录按钮的激活状态
              this.$refs.loginBtn.classList.add("active");
              this.$refs.registerBtn.classList.remove("active");
              // 将右侧图片移回右侧
              this.$refs.modalRight.classList.remove("modal-register");
            }
        }
    }
</script>

<style>
@layer demo {
    :root {
      --blob-size: 700px;
      --blob-speed: 6s;
      --blob-speed-scale: calc(0.75 * var(--blob-speed));
      --blob-speed-move: calc(1 * var(--blob-speed));
      --blob-speed-rotate: calc(2 * var(--blob-speed));
      --blob-opacity: 0.5;
      --blob-blur: 80px;
      --blob-color-1: hsl(304deg, 100%, 55%);
      --blob-color-2: hsl(182deg, 100%, 55%);
      --blob-color-3: hsl(216deg, 100%, 55%);
    }
  
    .blobs {
      position: relative;
      filter: blur(var(--blob-blur));
      z-index: -1; 
      
    }
    .blobs * {
      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
      will-change: transform;
    }
    .blobs:after {
      position: relative;
      display: block;
      width: 22rem;
      height: 38rem;
      background: rgba(184, 184, 184, 0.08);
      -webkit-backdrop-filter: blur(8rem) saturate(1.6);
              backdrop-filter: blur(8rem) saturate(1.6);
      border-radius: 1.5rem;
      z-index: 2;
    }
  
    .blob {
      width: var(--blob-size);
      height: calc(0.25 * var(--blob-size));
      background-color: var(--blob-color-1);
      border-radius: 100%;
      opacity: var(--blob-opacity);
      mix-blend-mode: multiply;
      -webkit-animation: blob ease-in-out var(--blob-speed-scale) infinite;
              animation: blob ease-in-out var(--blob-speed-scale) infinite;
    }
    .blobs > :nth-child(2) .blob {
      background-color: var(--blob-color-2);
      -webkit-animation-delay: calc(-0.8 * var(--blob-speed-scale));
              animation-delay: calc(-0.8 * var(--blob-speed-scale));
    }
    .blobs > :nth-child(3) .blob {
      background-color: var(--blob-color-3);
      -webkit-animation-delay: calc(-0.2 * var(--blob-speed-scale));
              animation-delay: calc(-0.2 * var(--blob-speed-scale));
    }
    .blobs > :nth-child(4) .blob {
        background-color: var(--blob-color-3);
        -webkit-animation-delay: calc(-0.6 * var(--blob-speed-scale));
                animation-delay: calc(-0.6 * var(--blob-speed-scale));
      }
    @-webkit-keyframes blob {
      0%, 100% {
        transform: scale(0.8, 2);
      }
      50% {
        transform: scale(1.4, 0.8);
      }
    }
  
    @keyframes blob {
      0%, 100% {
        transform: scale(0.8, 2);
      }
      50% {
        transform: scale(1.4, 0.8);
      }
    }
    .blob-rotate {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-animation: blob-rotate linear var(--blob-speed-rotate) infinite alternate;
              animation: blob-rotate linear var(--blob-speed-rotate) infinite alternate;
    }
    .blob-rotate:nth-child(2) {
      -webkit-animation-duration: calc(2 * var(--blob-speed-rotate));
              animation-duration: calc(2 * var(--blob-speed-rotate));
      -webkit-animation-delay: calc(-1.5 * var(--blob-speed-rotate));
              animation-delay: calc(-1.5 * var(--blob-speed-rotate));
    }
    .blob-rotate:nth-child(3) {
      animation-direction: alternate-reverse;
      -webkit-animation-duration: calc(0.8 * var(--blob-speed-rotate));
              animation-duration: calc(0.8 * var(--blob-speed-rotate));
      -webkit-animation-delay: calc(-1 * var(--blob-speed-rotate));
              animation-delay: calc(-1 * var(--blob-speed-rotate));
    }
  
    @-webkit-keyframes blob-rotate {
      0% {
        transform: translate3d(-50%, -50%, 0) rotateZ(-28deg);
        transform-origin: 50% 100%;
      }
      100% {
        transform: translate3d(-50%, -50%, 0) rotateZ(28deg);
        transform-origin: 50% 0%;
      }
    }
  
    @keyframes blob-rotate {
      0% {
        transform: translate3d(-50%, -50%, 0) rotateZ(-28deg);
        transform-origin: 50% 100%;
      }
      100% {
        transform: translate3d(-50%, -50%, 0) rotateZ(28deg);
        transform-origin: 50% 0%;
      }
    }
    .blob-move {
      -webkit-animation: blob-move ease-in-out var(--blob-speed-move) infinite;
              animation: blob-move ease-in-out var(--blob-speed-move) infinite;
    }
    .blobs > :nth-child(2) .blob-move {
      -webkit-animation-delay: calc(-0.8 * var(--blob-speed-move));
              animation-delay: calc(-0.8 * var(--blob-speed-move));
    }
    .blobs > :nth-child(3) .blob-move {
      -webkit-animation-delay: calc(-0.4 * var(--blob-speed-move));
              animation-delay: calc(-0.4 * var(--blob-speed-move));
    }
  
    @-webkit-keyframes blob-move {
      0%, 100% {
        transform: translateX(30%);
      }
      50% {
        transform: translateX(-30%);
      }
    }
  
    @keyframes blob-move {
      0%, 100% {
        transform: translateX(30%);
      }
      50% {
        transform: translateX(-30%);
      }
    }
  }
  @layer demo.support {
    *,
  :before,
  :after {
      box-sizing: border-box;
    }
  
    html {
      color-scheme: dark light;
      background-color: #f5fcfd;
      block-size: 100%;
    }
  
    body {
      display: grid;
      place-content: center;
      min-block-size: 100%;
      font-family: system-ui, sans-serif;
      line-height: 1.375;
    }
  }
  
    * {
              margin: 0;
              padding: 0;
          }
          html {
              height: 100%;
          }
          body {
              height: 100%;
          }
         .container {
            height: 100%;
            position: relative; /* 确保父容器相对定位 */
  width: 100%; /* 或者设置为固定宽度，具体根据你的页面布局来决定 */
  overflow: hidden; /* 隐藏溢出内容 */
        }
          .login-wrapper {
              background-color: rgb(248, 247, 246);
              width: 358px;
              height: 588px;
              border-radius: 15px;
              padding: 0 50px;
              position: relative;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
          }
          .header {
              font-size: 38px;
              font-weight: bold;
              text-align: center;
              line-height: 200px;
          }
          .input-item {
              display: block;
              width: 100%;
              margin-bottom: 20px;
              border: 0;
              padding: 10px;
              border-bottom: 1px solid rgb(128,125,125);
              font-size: 15px;
              outline: none;
          }
          .input-item::placeholder {
              text-transform: uppercase;
          }
          .btn {
              text-align: center;
              padding: 10px;
              width: 100%;
              margin-top: 40px;
              background-image: linear-gradient(to right,#a6c1ee, #fbc2eb);
              color: #fff;
          }
          .msg {
              text-align: center;
              line-height: 88px;
          }
          a {
              text-decoration-line: none;
              color: #abc1ee;
          }

* {
  box-sizing: border-box;
}


body {
  font-family: "Nunito", sans-serif;
  color: rgba(0, 0, 0, 0.7);
}

.container {
  height: 100%;
  position: relative; /* 确保父容器相对定位 */
  width: 100%; /* 或者设置为固定宽度，具体根据你的页面布局来决定 */
  overflow: hidden; /* 隐藏溢出内容 */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.modal {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background:transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
}
.modal-container {
  display: flex;
  max-width: 720px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition-duration: 0.3s;
  background: #fff;
  transform: translateY(100px) scale(0.4);
}
.modal-title {
  font-size: 26px;
  margin: 0;
  font-weight: 400;
  color: rgb(212,199,253);
}
.modal-desc {
  margin: 6px 0 30px 0;
}
.signin {
  position: absolute;
  left: 0;
  width: 50%;
  background: #fff;
  flex: 2.5;
  transition-duration: 0.5s;
  opacity: 0;
}
/* .signup {
  padding: 2%;
} */

.modal-button {
  color: rgb(212,199,253);
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 10px 40px;
  border-radius: 30px;
  background: rgb(103, 187, 251);
  transition: 0.3s;
}

.modal-button:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.8);
}
.picture {
  flex: 2;
  font-size: 0;
  transition: 0.3s;
  overflow: hidden;
}
.picture img {
  width: 100%;
  height: 100%;
  transform: scale(2);
  -o-object-fit: cover;
     object-fit: cover;
  transition-duration: 1.2s;
}
.modal.is-open {
  height: 100%;
  background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
}
.modal.is-open .modal-button {
  opacity: 0;
}

.modal.is-open .modal-container {
  opacity: 1;
  transition-duration: 0.6s;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}
.modal.is-open .picture img {
  transform: scale(1);
}
.modal.is-open .signin {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0.1s;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-buttons a {
  color: rgba(142, 133, 174, 0.6);
  font-size: 14px;
}

.zhuce {
  margin: 60px 0 0;
  font-size: 14px;
  text-align: center;
}

.zhuce a {
  color: rgb(212,199,253);
  padding: 8px 12px;
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 4px;
  background: rgb(212,199,253);
  font-family: "Nunito", sans-serif;
  transition: 0.3s;
  cursor: pointer;
}

.input-button {
  padding: 8px 12px;
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 4px;
  background: rgb(212,199,253);
  font-family: "Nunito", sans-serif;
  transition: 0.3s;
  cursor: pointer;
}

.input-button:hover {
  background: rgb(142, 133, 174);
}

.input-label {
  font-size: 11px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 0.7px;
  color: rgb(212,199,253);
  transition: 0.3s;
}

.input-block {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  transition: 0.3s;
}
.input-block input {
  outline: 0;
  border: 0;
  padding: 4px 0 0;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
}
.input-block input::-moz-placeholder {
  color: #ccc;
  opacity: 1;
}
.input-block input:-ms-input-placeholder {
  color: #ccc;
  opacity: 1;
}
.input-block input::placeholder {
  color: #ccc;
  opacity: 1;
}
.input-block:focus-within {
  border-color: rgb(212,199,253);
}
.input-block:focus-within .input-label {
  color: rgba(142, 133, 174, 0.8);
}

.icon-button {
  outline: 0;
  position: absolute;
  right: 10px;
  top: 12px;
  width: 32px;
  height: 32px;
  border: 0;
  background: 0;
  padding: 0;
  cursor: pointer;
}

.scroll-down {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #8c7569;
  font-size: 50px;
  font-weight: 800;
  transform: translate(-50%, -50%);
}
.scroll-down svg {
  margin-top: 16px;
  width: 52px;
  fill: currentColor;
}

@media (max-width: 750px) {
  .modal-container {
    width: 90%;
  }

  .picture {
    display: none;
  }
}

.container.active .picture {
  transform: translateX(-100%);
}

.container.active .signup {
  transform: translateX(100%);
  opacity: 1;
}
.container.active .signin {
 
  opacity: 0;
}

</style>
