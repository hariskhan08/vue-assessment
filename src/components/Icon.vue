<template>
  <MainDiv :class="{ hoverClass: hover }" @click="onClick">
    <font-awesome-icon :icon="['fas', name]" />
    <p class="paragraph">{{ text }}</p>
  </MainDiv>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MainDiv } from '../styles/Icon.styles.jsx'

@Component({
  components: {
    MainDiv,
  },
  props: {
    name: String,
    text: String,
    value: String,
    hover: Boolean,
  },
})
export default class Icon extends Vue {
  onClick() {
    this.$emit('setCurrentField', this.$props.value, this.$props.name)
  }
}
</script>

<style scoped>
.hoverClass:hover {
  background-color: grey;
  cursor: pointer;
}
.paragraph {
  margin-left: 5px;
}
</style>
