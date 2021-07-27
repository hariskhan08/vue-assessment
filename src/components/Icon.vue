<template>
  <MainDiv
    @click="this.$emit('setCurrentField', this.$props.value, this.$props.name)"
    class="main-div"
  >
    <IconDiv>
      <font-awesome-icon :icon="['fas', name]" />
    </IconDiv>
    <p>{{ text }}</p>
  </MainDiv>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { styled } from '@egoist/vue-emotion'
const IconDiv = styled('div')`
  padding-right: 5px;
`

const MainDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`
@Component({
  components: {
    IconDiv,
    MainDiv,
  },
  props: {
    name: String,
    text: String,
    value: String,
    setCurrentField: String,
  },
})
export default class Icon extends Vue {
  onClick() {
    this.$emit('setCurrentField', this.$props.value, this.$props.name)
  }
}
</script>
