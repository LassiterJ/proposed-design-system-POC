// Rather than have Style Dictionary handle the merging of token files,
// we use node module export/require to do it yourself. This will
// allow us to not have to copy object namespaces like you normally would. TODO: this behavior may change in Style Dictionary 4.0
// Take a look at any of the .js files in primitive/ or utility/

/* Our Token Types
primitive, semantic, and token categories
* size: spacing tokens
* spacing: subset of size, these are spacing tokens like margin and padding
* color: color tokens
* typography: typography tokens
* border: tokens for element borders
* elevation: elevation tokens for shadows and z-index
* motion:  tokens for animations and transitions
* */

// TODO: Implement a way to set these configSettings. Possibly through design tokens or a configuration file.
export const configSettings = {
  designSystemPrefix: 'compass',
  buildPath: './src/compass-style-dictionary/dist/',
  tokensPath: ['./src/compass-style-dictionary/tokens/token-studio/*.json'],
};
const { designSystemPrefix, buildPath, tokensPath } = configSettings;

export const config = {
  source: tokensPath,
  platforms: {
    css: {
      transformGroup: 'custom/css/properties',
      buildPath,
      files: [
        {
          destination: 'primitive-spacing-properties.module.css',
          format: 'css/variables',
          filter: (token) => {
            const isAuto = token.attributes.item === 'auto' && token.attributes.type === 'special';
            const isScale = ['core', 'fractional'].includes(token.attributes.type);
            const isNotNumberCategory = token.attributes.category !== 'numbers';
            return (isAuto || isScale) && isNotNumberCategory;
          },
        },
      ],
    },
    primitiveLayoutCSSProperties: {
      transformGroup: 'custom/css/layout-properties',
      buildPath,
      files: [
        {
          destination: 'primitive-misc-properties.module.css',
          format: 'css/variables',
          filter: (token) => {
            return (
              token.attributes.category === 'css-properties' ||
              token.attributes.category === 'boolean'
            );
          },
        },
      ],
    },
    customUtilityClasses: {
      transformGroup: 'custom/spacing/utility-classes',
      buildPath,
      files: [
        {
          destination: 'margin.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { type: 'margin' }, // Uses token.attributes to match tokens to
          },
        },
        {
          destination: 'padding.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { type: 'padding' },
          },
        },
        {
          destination: 'inset.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { type: ['inset', 'top', 'end', 'bottom', 'start'] },
          },
        },
        {
          destination: 'width.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { category: ['sizing'], type: ['width'] },
          },
        },
        {
          destination: 'height.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { category: ['sizing'], type: ['height'] },
          },
        },
        {
          destination: 'layout.module.css',
          format: 'custom/css/css-classes',
          /* Filtering throws error because Style Dictionary needs the
           referenced tokens even though they are not included in the output.
           */
          options: {
            outputReferences: true,
            matchAttributes: { category: ['css-layout-properties'] },
            // startNameAtCTI: 'type',
          },
        },
      ],
    },
    transformedTokens: {
      transformGroup: 'custom/utility/transformed-tokens',
      buildPath,
      files: [
        {
          destination: 'testingTokens.json',
          format: 'json',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'custom/js/standard',
      buildPath,
      files: [
        {
          destination: 'primitiveScales.js',
          format: 'custom/js/primitive-scales',
          filter: (token) => {
            const { category, type } = token?.attributes;
            return category === 'spacing' && ['core', 'fractional'].includes(type);
          },
        },
      ],
    },
    indexBarrel: {
      transformGroup: 'custom/css/standard',
      buildPath,
      actions: ['custom/css/index-barrel'],
    },
  },
};
