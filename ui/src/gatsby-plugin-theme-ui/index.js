export default {
  colors: {
    text: '#4A4A4A',
    background: '#fff',
    primary: '#1E252C',
    secondary: '#4C66FF',
    tertiary: '#7D7D7D',
    column: '#8A8A8A',
    fill: '#CFCFCF',
    black: '#090610',
    blackFaded: 'rgba(9,6,16,0.64)',
    whiteFaded: 'rgba(255,255,255,0.5)',
  },
  fonts: {
    body: 'Space Mono, monospace',
    heading: 'Space Mono, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  space: [0, 4, 8, 12, 16, 32, 64, 96, 128, 160],
  styles: {
    body: {
      fontFamily: 'body',
    },
    root: {
      position: 'relative',
    },
    Main: {
      py: [5, 7],
    },
    Header: {
      position: 'relative',
    },
    h1: {
      fontWeight: 'heading',
      fontSize: '3.25rem',
      lineHeight: '4rem',
      letterSpacing: '-0.46px',
      margin: 0,
      '@media (max-width: 640px)': {
        fontSize: '2.75rem',
        lineHeight: '3.25rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 'heading',
      letterSpacing: '-0.4px',
      lineHeight: '3.5rem',
    },
    h3: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      fontWeight: 'bold',
      color: '#4C66FF',
      '@media (max-width: 640px)': {
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
      },
    },
    h4: {
      fontSize: '2rem',
      lineHeight: '2.75rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 'bold',
      color: 'black',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
      fontWeight: 'normal',
    },
    p: {
      fontSize: '1rem',
      lineHeight: '2rem',
      fontFamily: 'body',
      letterSpacing: '-0.5px',
      color: 'text',
    },
    a: {
      textDecoration: 'none',
      display: 'block',
      color: '#4C66FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.31px',
      lineHeight: '2.375rem',
    },
    Link: {
      textDecoration: 'none',
      display: 'block',
      color: '#4C66FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.31px',
      lineHeight: '2.375rem',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'secondary',
      boxShadow:
        '0 8px 32px 0 rgba(76,102,255,0.48), 0 4px 16px 0 rgba(0,0,0,0.16)',
      fontFamily: 'body',
      fontSize: '1rem',
      letterSpacing: '1px',
      lineHeight: '2.5rem',
      width: ['100%', '250px', '250px'],
      height: '48px',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
    secondary: {
      color: 'secondary',
      bg: 'white',
      boxShadow: '0 4px 16px 0 rgba(12,10,29,0.08)',
      border: 'none',
      fontFamily: 'body',
      fontSize: '1rem',
      fontWeight: 'heading',
      letterSpacing: '1px',
      lineHeight: '2.5rem',
      width: ['100%', '250px', '250px'],
      height: '48px',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  text: {
    display: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 'heading',
      color: 'secondary',
    },
    displaySmall: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.5px',
      color: 'blackFaded',
    },
    displayBig: {
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      letterSpacing: '-0.2px',
      color: 'black',
    },
    field: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.5px',
      color: 'white',
    },
  },
}