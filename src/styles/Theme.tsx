import { ThemeType } from '../model/Model';

export const theme = {
  size: {
    xs: '13px',
    s: '19px',
    m: '26px',
    l: '33px',
    xl: '52px',
    xxl: '72px',
    mobile_xs: '13px', // mobile
    mobile_s: '16px',
    mobile_m: '21px',
    mobile_l: '21px',
    mobile_xl: '27px',
    mobile_xxl: '29px',
  },
  line_height: {
    xs: '19px',
    s: '27px',
    m: '33px',
    l: '42px',
    xl: '64px',
    xxl: '88px',
    mobile_xs: '19px', // mobile
    mobile_s: '22px',
    mobile_m: '29px',
    mobile_l: '29px',
    mobile_xl: '35px',
    mobile_xxl: '38px',
  },
  color: {
    blue: '#0049ef',
    mediumBlue: '#00267e',
    darkBlue: '#000035',
    darkGray: '#2a2a54',
    gray: '#eff2f8',
    lightGray: '#f0f0f0',
    black: '#1a1a1a',
    pink: '#ff0e9c',
    white: '#ffffff',
    turquoise: '#00dfa3',
    almostBlack: '#373a3a',
  },
};

// #ddad25 #000035 #dd79b8 #00dfa3
export const codeThemes = {
  [ThemeType.HIGH_CONTRAST]: {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      color: '#ffffff',
      background: '#000035',
    },
    'hljs-comment': {
      color: '#00dfa3',
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: '#00dfa3',
      fontStyle: 'italic',
    },
    'hljs-keyword': {
      color: '#dd79b8',
    },
    'hljs-selector-tag': {
      color: '#dd79b8',
    },
    'hljs-literal': {
      color: '#dd79b8',
    },
    'hljs-subst': {
      color: '#dd79b8',
    },
    'hljs-number': {
      color: '#00dfa3',
    },
    'hljs-string': {
      color: '#00dfa3',
    },
    'hljs-doctag': {
      color: '#00dfa3',
    },
    'hljs-selector-id': {
      color: '#19469d',
    },
    'hljs-selector-class': {
      color: '#19469d',
    },
    'hljs-section': {
      color: '#19469d',
    },
    'hljs-type': {
      color: '#19469d',
    },
    'hljs-params': {
      color: '#dd79b8',
    },
    'hljs-title': {
      color: '#ddad25',
      fontWeight: 'bold',
    },
    'hljs-tag': {
      color: '#000080',
      fontWeight: 'normal',
    },
    'hljs-name': {
      color: '#000080',
      fontWeight: 'normal',
    },
    'hljs-attribute': {
      color: '#000080',
      fontWeight: 'normal',
    },
    'hljs-variable': {
      color: '#00dfa3',
    },
    'hljs-template-variable': {
      color: '#00dfa3',
    },
    'hljs-regexp': {
      color: '#dd79b8',
    },
    'hljs-link': {
      color: '#dd79b8',
    },
    'hljs-symbol': {
      color: '#dd79b8',
    },
    'hljs-bullet': {
      color: '#dd79b8',
    },
    'hljs-built_in': {
      color: '#00dfa3',
    },
    'hljs-builtin-name': {
      color: '#00dfa3',
    },
    'hljs-meta': {
      color: '#ddad25',
      fontWeight: 'bold',
    },
    'hljs-deletion': {
      background: '#ddad25',
    },
    'hljs-addition': {
      background: '#ddad25',
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-function': {
      color: '#dd79b8',
      fontWeight: 'bold',
    },
  },
  [ThemeType.GRAY]: {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      color: '#3e3f41',
      background: '#eff2f8',
    },
  },
  [ThemeType.COLOR]: {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      color: '#3e3f41',
      background: '#eff2f8',
    },
  },
};
