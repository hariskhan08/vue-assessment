import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import MyInput from '../components/CustomInput.vue'

export default {
  title: 'MyInput',
  decorators: [withKnobs],
}

export const Input = () => ({
  props: {
    name: {
      type: String,
      default: text('Name', 'MyInput!'),
    },
    isLoading: {
      type: Boolean,
      default: boolean('isLoading', true),
    },
  },
  components: { MyInput },
  template: `<MyInput :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyInput>`,
  methods: {
    action: action('button-clicked'),
  },
})

Input.story = {
  name: 'Input',
}
