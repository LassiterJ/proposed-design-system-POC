import StyleDictionary from 'style-dictionary-esm';
import {
  registerTransforms,
  transforms,
  checkAndEvaluateMath,
} from '@tokens-studio/sd-transforms';

/* Index:
 * Helper Functions
 * Custom Transformers
 * Custom Transform Groups
 * Register the custom transformers and transform group
 * */

/* Helper Functions */

// Custom filter generators for specific or partial type matching

/* Custom Transformers */
let count = 0; //TODO remove this

export const transformCTIAttribute = (token, options) => {
  const { type, path } = token;
  // const { prefix } = options;
  // if (count < 2) {
  //   console.log('token: ', token);
  //   count++;
  // }
  return token.attributes;

  // const newAttributes = {
  //   ...token.attributes,
  //   category: token.attributes.type, // Map 'type' to 'category'
  //
  // };
  // return newAttributes;
};

export const customNamesTransformer = {
  name: 'name/cti/custom-names',
  type: 'name',
  transitive: true,
  transformer: (token, options) => {
    // TODO: instead of using the path, use the cti attributes to generate the name. Possibly trying to pass options to the transformer to determine what part of the cti should be the name
    const { name, path } = token;
    const { category } = token.attributes;
    const { prefix } = options;
    // Check for negative values and prepend 'n'
    const isNegative = name.startsWith('-');
    const subName = name.substring(1).replace(',', '-');
    const negName = `n${subName}`;
    const newName = isNegative ? negName : name.replace(',', '-');
    const pathToPrepend = path.slice(0, path.length - 1);
    pathToPrepend.push(newName);

    const finalName = pathToPrepend.join('-');
    return finalName;
  },
};
export const customLayoutNamesTransformer = {
  name: 'name/cti/custom/layout-names',
  type: 'name',
  transitive: true,
  transformer: (token, options) => {
    // TODO: instead of using the path, use the cti attributes to generate the name. Possibly trying to pass options to the transformer to determine what part of the cti should be the name
    const { name } = token;
    const { type, item } = token.attributes;
    // Our name will be comprised of the
    console.log('originalName: ', name);

    const transformedName = `${type}-${item}`;
    console.log('transformedName: ', transformedName);
    return transformedName;
  },
};
// Convert pixel values to rem
// do not convert values that are already in rem, em, %, full, auto
// do not convert single pixel values
// convert fraction to percentage
export const customPxToRemTransformer = {
  name: 'size/customPxToRem',
  type: 'value',
  transitive: true,
  matcher: (token) => {
    const { type, path, attributes } = token;

    const blacklistedPaths = ['em', 'rem', '%', 'full', 'auto', 'margin'];
    const whitelistedCategories = ['spacing'];
    const isBlacklistedPath = !!blacklistedPaths.find((element) =>
      path.toString().includes(element)
    );

    const isMatch =
      whitelistedCategories.includes(attributes?.category) &&
      !isBlacklistedPath;
    return isMatch;
  },
  transformer: (token, options) => {
    const resolvedValue = checkAndEvaluateMath(token.value);

    if (token.attributes.item === 'px') {
      return `${resolvedValue}px`;
    }
    if (token.attributes.type === 'fractional') {
      return `${resolvedValue * 100}%`;
    }

    const pixelValue = parseFloat(resolvedValue);
    const basePxFontSize = 16; //TODO: get this from a token or configuration

    const transformedValue = `${pixelValue / basePxFontSize}rem`;
    return transformedValue;
  },
};

/* Transform Groups */

export const customSpacingPropertiesTransformGroup = {
  name: 'custom/css/properties',
  transforms: [
    // 'ts/descriptionToComment',
    'attribute/cti',
    'size/customPxToRem',
    'name/cti/custom-names',
  ],
  // transforms: [ 'size/customPxToRem'].filter(transform => transform !== 'ts/size/px' && transform !== 'ts/resolveMath')
};

export const customCSSLayoutPropertiesTransformGroup = {
  name: 'custom/css/layout/properties',
  transforms: [
    // 'ts/descriptionToComment',
    'attribute/cti',
    'size/customPxToRem',
    'name/cti/custom/layout-names',
  ],
  // transforms: [ 'size/customPxToRem'].filter(transform => transform !== 'ts/size/px' && transform !== 'ts/resolveMath')
};

export const customMarginUtilityClassesTransformGroup = {
  name: 'custom/spacing/utility-classes',
  transitive: true,
  transforms: [
    // 'ts/descriptionToComment',
    'attribute/cti',
    'name/cti/custom-names',
  ],
};

export const customTestTransformGroup = {
  name: 'custom/transformation/test',
  transforms: ['attribute/cti', 'name/cti/custom-names'],
};

// const standardCssTransforms = StyleDictionary.transformGroup['css'];
// export const cssVariablesTransformGroup = {
//   name: 'custom/css-variables',
//   transforms: [ 'name/cti/n-for-negative', ...standardCssTransforms ]
//   // transforms: StyleDictionary.transformGroup['css'].concat([
//   //   'name/cti/n-for-negative',
//   // ]),
// };

/* Register the custom transformers and transform group */
export const registerCustomTransforms = () => {
  // Registering token studio transforms
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransform(customPxToRemTransformer);
  StyleDictionary.registerTransform(customNamesTransformer);
  StyleDictionary.registerTransform(customLayoutNamesTransformer);
  StyleDictionary.registerTransformGroup(customSpacingPropertiesTransformGroup);
  StyleDictionary.registerTransformGroup(customTestTransformGroup);
  StyleDictionary.registerTransformGroup(
    customCSSLayoutPropertiesTransformGroup
  );
  StyleDictionary.registerTransformGroup(
    customMarginUtilityClassesTransformGroup
  );
  // StyleDictionary.registerTransformGroup(cssVariablesTransformGroup);
};
