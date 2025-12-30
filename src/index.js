import backend from './backend.js';
import base, { ALL_FILES, JS_FILES } from './base.js';
import frontend from './frontend.js';

export default {
  configs: {
    base,
    backend,
    frontend,
  },
  patterns: {
    ALL_FILES,
    JS_FILES,
  },
};
