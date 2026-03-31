import type { Preview } from '@storybook/react'
// Import tokens globally so all stories have access to CSS custom properties
import '../src/tokens/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
