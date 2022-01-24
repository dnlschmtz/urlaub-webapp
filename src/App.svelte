<script>
let count = 0;

function handleClick() {
  count += 1;
}

const resetCount = () => {
  count -= 1;
}
const src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
</script>

<style>
:global(body) {
  margin: 0px;
  background-color: #fe2;
}
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.app-name {
  font-size: 40px;
  font-weight: bold;
}
img {
  max-height: 25px;
}
.github-container {
  display: flex;
  align-items: center;
}
</style>

<div class="counter">
<p class="app-name">
  NOVAS
</p>
<p>
  You clicked {count} {count === 1 ? 'time' : 'times'}
</p>
<button  on:click={handleClick}>
  Increment count
</button>
<button on:click={resetCount}>
  Decrement count
</button>
<div class='github-container'>
  <img {src} alt='github logo'>
  <a class='Github' href='https://github.com/NOVASland/NOVAS'>
    Github
  </a>
</div>

</div>
