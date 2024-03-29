const { env } = require('process');
const isProd = env.NODE_ENV === 'production';
const isNonNil = x => x != null;

let conf = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')([ // if it's not inlined, make a symlink in /public
      {
        filter: '**/*.svg',
        url: 'inline',
        encodeType: 'encodeURIComponent',
        optimizeSvgEncode: true,
        maxSize: Number.MAX_SAFE_INTEGER,
        useHash: false
      },
      {
        filter: '**/*.png',
        url: 'inline',
        encodeType: 'base64',
        maxSize: Number.MAX_SAFE_INTEGER,
        useHash: false
      },
      {
        filter: '**/*.woff',
        url: 'inline',
        encodeType: 'base64',
        maxSize: Number.MAX_SAFE_INTEGER
      },
      {
        filter: '**/*.woff2',
        url: 'inline',
        encodeType: 'base64',
        maxSize: Number.MAX_SAFE_INTEGER
      }
    ]),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'custom-properties': {
          preserve: false
        },
        'nesting-rules': true
      }
    }),
    isProd ? require('cssnano')({
      safe: true
    }) : null
  ].filter( isNonNil )
};

module.exports = conf;
