import StyleDictionary from 'style-dictionary-esm';
import { writeJSONStringToFile } from '../utilities/js/fileSystemHelpers.js';
import { customPropertyFormatters } from './tokens/utility/createPropertyFormatter.js';
const { sortByReference, sortByName, createPropertyFormatter, fileHeader } =
  StyleDictionary.formatHelpers;
let count = 0;

export const generateCSSClasses = {
  name: 'custom/css/css-classes',
  formatter: ({ dictionary, options }) => {
    // console.log('custom/css/css-classes | options: ', options);

    const marginProperties = {
      m: ['margin'],
      mx: ['margin-left', 'margin-right'],
      my: ['margin-top', 'margin-bottom'],
      mt: ['margin-top'],
      mb: ['margin-bottom'],
      ms: ['margin-left'], // TODO: implement rtl
      me: ['margin-right'], // TODO: implement rtl
    };
    const paddingProperties = {
      p: ['padding'],
      px: ['padding-left', 'padding-right'],
      py: ['padding-top', 'padding-bottom'],
      pt: ['padding-top'],
      pb: ['padding-bottom'],
      ps: ['padding-left'], // TODO: implement rtl
      pe: ['padding-right'], // TODO: implement rtl
    };
    // const insetProperties = {
    //   inset: ['inset'],
    //   insetx: ['left', 'right'],
    //   insety: ['top', 'bottom'],
    //   top: ['top'],
    //   bottom: ['bottom'],
    //   left: ['left'], // TODO: implement rtl
    //   right: ['right'], // TODO: implement rtl
    // };

    const getCSSPropertiesByType = (token, key) => {
      const { type } = token.attributes;
      //TODO: I have configSettings for various types in various places. I should consolidate them.
      if (!key || !type) {
        console.log('getCSSPropertiesByType: key is undefined');
        return null;
      }
      if (type === 'margin') {
        return marginProperties[key];
      }
      if (type === 'padding') {
        return paddingProperties[key];
      }
      if (type === 'position') {
        return [type];
      }
      if (type === 'inset') {
        return [type];
      }
      if (type === 'top') {
        return [type];
      }
      if (type === 'end') {
        return ['right'];
      }
      if (type === 'bottom') {
        return [type];
      }
      if (type === 'start') {
        return ['left'];
      }
      if (type === 'width') {
        return [type];
      }
      if (type === 'height') {
        return [type];
      }
      if (type === 'flex-shrink') {
        return [type];
      }
      if (type === 'flex-grow') {
        return [type];
      }
      if (type === 'display') {
        return [type];
      }
      // console.log('No type match for getCSSPropertiesByType |  type, key: ', type, key);
    };

    const validateToken = (token) => {
      if (!token.name) {
        console.error('validateToken: Token does not have a name', token);
      }
      if (!token.attributes?.category) {
        console.error('validateToken: Token does not have a category', token);
      }
      if (!token.value) {
        console.error('validateToken: Token does not have a value', token);
      }
      if (!token.original) {
        console.error('validateToken: Token does not have an original object', token);
      }

      return token;
    };

    const generateCSSValue = (validatedToken) => {
      // check if token uses a reference
      const tokenUsesReference = dictionary.usesReference(validatedToken.original.value);
      // if it does, get the references and replace the value with the reference name
      const references = dictionary.getReferences(validatedToken.original.value);

      let value = JSON.stringify(validatedToken.value);
      let reference = '';
      if (tokenUsesReference) {
        references.forEach((ref) => {
          value = value.replace(ref.value, function () {
            return `${ref.name}`;
          });
          reference = ref.name;
        });
      }

      value = value.replace(/['"]+/g, '');
      const trailingMath = value.slice(reference.length);
      const formattedValue = !!trailingMath
        ? `calc( var( --${reference} ) ${trailingMath} )`
        : `var( --${reference} )`;

      return formattedValue;
    };

    // Map through tokens and format them
    const formatToken = (token) => {
      // Validate token generate the CSS value
      const validatedToken = validateToken(token);
      const { type, item } = validatedToken.attributes;
      // if (!item) {
      //   console.log('validatedToken without item: ', validatedToken);
      // }
      const value = generateCSSValue(validatedToken);
      // console.log('item: ', item);

      // Get css properties by token attribute "type"
      const applicableProperties = getCSSPropertiesByType(validatedToken, item);

      const precedingSpace = '   '; // 3 spaces to indent according to the class name

      // Format the properties
      const formattedProperties = applicableProperties
        ?.map((property) => {
          return `${precedingSpace}${property}: ${value};`;
        })
        .join('\n ');
      const { name } = validatedToken;
      // Finally building the class
      const formattedClass = `.${name} { \n ${formattedProperties} \n}`;

      return formattedClass;
    };
    // Get Tokens
    const tokenAttributesFilter = (token) => {
      const { matchAttributes = undefined } = options;

      if (!matchAttributes) return true;
      let returnValue = false;
      for (const key in matchAttributes) {
        const valueIsArray = Array.isArray(matchAttributes[key]);
        const isEmptyArray = valueIsArray && matchAttributes[key].length <= 0;
        let tempValue = false;
        if (!matchAttributes[key] || isEmptyArray) {
          tempValue = true;
        }
        if (valueIsArray) {
          tempValue = matchAttributes[key].includes(token.attributes[key]);
        }
        if (token.attributes[key] === matchAttributes[key]) {
          tempValue = true;
        }
        returnValue = tempValue;
      }
      return returnValue;
    };

    const tokens = dictionary.allTokens
      .sort(sortByReference) // TODO: make a custom sort function so that output is consistent with the core scale tokens
      .filter(tokenAttributesFilter);

    // try {
    //   const fileDirectoryFromRoot = 'src/compass-style-dictionary/tokens/utility';
    //   const currentFilePath = process.cwd();
    //   console.log('currentFilePath: ', currentFilePath);
    //
    //   writeJSONStringToFile({
    //     jsonString: JSON.stringify(tokens, null, 2),
    //     fileName: 'marginAndPaddingTokens',
    //     path: fileDirectoryFromRoot,
    //   });
    // } catch (error) {
    //   console.error('Error writing marginTokens to file: ', error);
    // }
    // console.log('tokens.length: ', tokens.length);
    const formattedTokens = tokens.map(formatToken);
    return formattedTokens.join('\n');
  },
};

export const generateJSPrimitiveScales = {
  name: 'custom/js/primitive-scales',
  formatter: function (dictionary, options) {
    const coreObj = {};
    const fractionalObj = {};
    dictionary.allTokens.forEach((token) => {
      const { name, attributes } = token;
      const { category, type, item } = attributes;
      if (category !== 'spacing' || !['core', 'fractional'].includes(type)) {
        console.log('filter not working');
        return;
      }

      const obj = type === 'core' ? coreObj : fractionalObj;
      const formattedName = name.replace('_', '/').replace(',', '.');
      const key = `${formattedName}`;

      obj[key] = token.value.replace(/['"]+/g, '');
      console.log('key: ', key);
      console.log('token:', token);
    });

    // Convert obj to JS export string
    const coreScaleExport = `export const primitiveCoreScale = ${JSON.stringify(
      coreObj,
      null,
      2
    )};`;
    const fractionalScaleExport = `export const primitiveFractionalScale = ${JSON.stringify(
      fractionalObj,
      null,
      2
    )};`;

    return `${coreScaleExport}\n\n${fractionalScaleExport}`;
  },
};

export const registerCustomFormats = () => {
  StyleDictionary.registerFormat(generateCSSClasses);
  StyleDictionary.registerFormat(generateJSPrimitiveScales);
};
