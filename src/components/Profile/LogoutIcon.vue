<template>
  <div class="ui-icon--logout" area-label="Logout"></div>
</template>

<style lang="scss" scoped>
.ui-icon--logout {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid currentColor;
  vertical-align: middle;

  &::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 50%;
    width: 1px;
    height: 5px;
    background: currentColor;
    transform: translateX(-50%);
  }
}
</style>
