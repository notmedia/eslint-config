import backend from './backend.js';
import base, { ALL_FILES, JS_FILES, REACT_FILES, TEST_FILES, TS_FILES } from './base.js';
import react from './react.js';
import vue from './vue.js';

export default {
  configs: {
    base,
    backend,
    react,
    vue,
  },
  patterns: {
    ALL_FILES,
    JS_FILES,
    TS_FILES,
    REACT_FILES,
    TEST_FILES,
  },
};
