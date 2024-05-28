import { extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors and global styles
const Theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'gray.900' : 'gray.900',
      },
      'html, body, #root, div': {
        boxSizing: 'border-box',
        margin: "0px",
        border: "0px",
        width: '100%',
      },
      // 'html':{
      //   width: '100%',
      // }, 
    }),
  },
  colors: {
    button: {
      text: {
        light: 'white',
        dark: '#CBD5E0',
        tile: 'gray.900'
      },
      menu:{
        light: 'white',
        dark: '#CBD5E0',
        bg: 'gray.600'
      }
    },

  }
});


export default Theme;