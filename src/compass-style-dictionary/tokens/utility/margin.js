import { spacingTokens } from '../primitive/index.js';
import { open } from 'fs/promises';
import { writeJSONStringToFile } from '../../../utilities/js/writeTokensToFile.js';
import { generateStyleDictionaryToken } from '../../build/generateToken.js';

// // // const {coreSpacingScale, fractionalSpacingScale, coreSpacingTokens, fractionalSpacingTokens} = require('./coreSpacingTokens.js');
// const {coreSpacingScale, fractionalSpacingScale} = require('./scales.js');
// const { buildTokensFromScale } = require( '../../buildTokenDefinition.js');
// //
// // console.log("coreSpacingTokens: ", coreSpacingTokens);
// // // exports marginTokens that look like:
// // // {
// // //  "margin-0": {value: {compass.spacing.0.value}},
// //
// // // Need to find way to map references to other tokens.
// const buildMarginTokens = ({ prefix }) => {
//   // const coreSpacingTokens = buildTokensFromScale({
//   //   scale: coreSpacingScale,
//   //   keyFormatter: (key) => key.replace(".", "_"),
//   //   valueFormatter: (value) => `${value},
//   //   prefix: prefix
//   // });
//   const path = `{compass.spacing.${prefix}}`;
//
//   const fractionalSpacingTokens = buildTokensFromScale({
//     scale: fractionalSpacingScale,
//     // keyFormatter: (key) => key.replace("/", "--"),
//     prefix: prefix
//   });
//   // const negativeCoreSpacingTokens = buildTokensFromScale({
//   //   scale: coreSpacingScale,
//   //   keyFormatter: (key) => key.replace(".", "_"),
//   //   valueFormatter: (value) => `-${value}`,
//   //   prefix: `-${prefix}`,
//   //   exclude: ["0"]
//   // });
//   const negativeFractionalSpacingTokens = buildTokensFromScale({
//     scale: fractionalSpacingScale,
//     // keyFormatter: (key) => key.replace("/", "--"),
//     // valueFormatter: (value) => `{spacing-f-${value}}`,
//     prefix: `-${prefix}`
//   });
//   // const autoToken = buildToken({ key: "auto", value: "auto", prefix: "spacing" });
//
//   return {
//     // ...coreSpacingTokens,
//     ...fractionalSpacingTokens,
//     // ...negativeCoreSpacingTokens,
//     ...negativeFractionalSpacingTokens,
//     // ...autoToken
//   }
// };
// const marginTokens = buildMarginTokens({ prefix: "margin" });
// const marginXTokens = buildMarginTokens({ prefix: "mx" });
// const marginYTokens = buildMarginTokens({ prefix: "my" });
// const marginTopTokens = buildMarginTokens({ prefix: "mt" });
// const marginStartTokens = buildMarginTokens({ prefix: "ms" });
// const marginBottomTokens = buildMarginTokens({ prefix: "mb" });
// const marginEndTokens = buildMarginTokens({ prefix: "me" });
// const marginPropDefs = {
//     ...marginTokens,
//     ...marginXTokens,
//     ...marginYTokens,
//     ...marginTopTokens,
//     ...marginStartTokens,
//     ...marginBottomTokens,
//     ...marginEndTokens
// };
// // // Values are wrong. Should be corresponding spacing token reference. not raw values.
// // console.log("marginTokens: ", marginTokens);
// //
// module.exports = marginTokens;
// // module.exports = {
// //   'margin-f-1-2': { value: '{compass.spacing.f.1/2}' },
// // // ...marginTokens
// // };
//

// import { coreSpacingTokens }  from '../primitive/index.js';
// import { fractionalSpacingTokens }  from '../primitive/index.js';
// import { buildTokensFromScale }  from '../../buildTokenDefinition.js';
// import { isObjectWithValidation }  from '../../../utilities/js/isObjectWithValidation.js';
// import { tokens } from '../index.js';

/* Generating Margin Tokens For each margin utility type from coreTokens. */
const marginTypes = ["margin", "mx", "my", "mt", "me", "mb", "ms"];

function generateMarginTokens(spacingTokens) {
  const marginTokens = {
    margin: {
      "auto": {
        value: "auto",
        type: "spacing",
        description: " The auto margin token. Margin tokens are used to create margin utility classes that reference spacing custom properties."
      }
    }
  };
  // Initialize each marginKey object
  marginTypes.forEach(marginType => {
    marginTokens[marginType] = {};
  });
  
  // Process core spacing tokens to create margin tokens
  const coreTokens = spacingTokens.spacing.core;
  const coreTokenKeys = Object.keys(coreTokens);
  
  for (let index = 0; index < coreTokenKeys.length; index++) {
    const key = coreTokenKeys[index];
    const value = coreTokens[key];
    console.log("coreTokens[index]: ", coreTokens[index]);
    console.log("coreTokenKeys: ", coreTokenKeys);
    const coreTokenPath = `{spacing.core.${key}}`;
    // const coreTokenPath = coreTokens[index].attributes.path.join(".");
    
    //
    marginTypes.forEach(marginKey => {
      const token = generateStyleDictionaryToken({
        name: `${marginKey}-${key}`,
        value: coreTokenPath,
        type: "spacing",
        description: ` The ${marginKey}-${key} margin token. Margin tokens are used to create margin utility classes that reference spacing custom properties.`
        attributes: {}
      });
      
      })
      // Creating positive core tokens
      marginTokens[marginKey][key] = {
        ...value,
        type: "spacing",
        value: coreTokenPath,
        description: ` The ${key} margin token. Margin tokens are used to create margin utility classes that reference spacing custom properties.`
      };
      
      // Creating negative core tokens
      marginTokens[marginKey][`negative-${key}`] = {
        ...value,
        type: "spacing",
        value: `-${value.value}`,
        description: `The margin token represents the negative value of ${key} margin token. Margin tokens are used to create margin utility classes that reference spacing custom properties.`
      };
    });
  }
  
  return marginTokens;
}


export const marginTokens = generateMarginTokens(spacingTokens);
// Create or replace json file with marginTokens in this same directory

try {
  // src/compass-style-dictionary/tokens/utility/margin.js
  
  const fileDirectoryFromRoot = "src/compass-style-dictionary/tokens/utility";
  const currentFilePath = process.cwd();
  console.log("currentFilePath: ", currentFilePath);
  
  writeJSONStringToFile({ jsonString: JSON.stringify(marginTokens, null, 2), fileName: "marginTokens", path: fileDirectoryFromRoot });
}catch (error) {
  console.error("Error writing marginTokens to file: ", error);
}




// console.log(JSON.stringify(marginTokens, null, 2));
//


//
// const extractValues = ({ obj, path = [], exclude = [] }) => {
//   let values = [];
//
//   for (const key in obj) {
//     if(exclude.includes(key)) continue;
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       values = values.concat(extractValues(obj[key], path.concat(key)));
//     } else {
//       values.push({ path: path.concat(key), value: obj[key] });
//     }
//   }
//
//   return values;
// };
//
// const generateMarginTokens = (tokens) => {
//   const marginTokens = {};
//   const values = extractValues({ tokens });
//   console.log("values: ", values);
//
//   values.forEach(({ path, value }) => {
//     marginKeys.forEach(marginKey => {
//       const tokenName = `${marginKey}-${path.join('-')}`;
//       marginTokens[tokenName] = { value };
//       marginTokens[`${tokenName}-n`] = { value: `-${value}` };
//     });
//   });
//
//   return marginTokens;
// };

// const coreSpacingMarginTokens = generateMarginTokens(coreSpacingTokens);
// console.log("coreSpacingMarginTokens: ", JSON.stringify(coreSpacingMarginTokens, null, 4));
// const fractionalSpacingMarginTokens = generateMarginTokens(fractionalSpacingTokens);

// Combine or use separately as needed
// const allMarginTokens = { ...coreSpacingMarginTokens, ...fractionalSpacingMarginTokens };
// const testScale = {compass: {spacing: {...Object.fromEntries(Object.entries(coreSpacingTokens))}}};
// console.log("coreSpacingTokens: ", JSON.stringify(coreSpacingTokens, null, 4));
//

// console.log("testScale: ", JSON.stringify(testScale, null, 4));
// console.log("coreSpacingToken: ", JSON.stringify(coreSpacingTokens.spacing[1], null, 4));

// For Reference:
// valueFormatter args:  [
//     "scaleKeys",
//     "scale",
//     "prefix",
//     "exclude",
//     "value"
//     "key"
// ]
// function* getAllKeys(obj, prefix = '') {
//   for (let key in obj) {
//     const currentKey = prefix ? `${prefix}.${key}` : key;
//     if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//       yield* getAllKeys(obj[key], currentKey);
//     } else {
//       yield currentKey;
//     }
//   }
// }
//
// const logs = [];
// const generateAliasReference = (args) => {
//   console.log("generateAliasReference | args: ", args);
//   // Need to generate tokens that reference other tokens.
//   // StyleDictionary doesn't support decimals in token names
//   // So we need to use a different method to grab the reference values.
//   // Will probably need to customize a transformer or format method to handle this.
//
//   // console.log("generateAliasReference | args: ", args);
//   // console.log("generateAliasReference | Object.keys(args): ", Object.keys(args));
//   //
//   // const {scale, prefix, exclude, rawValue, valueObject, key, type, description} = args;
//   // // console.log("rawValue: ", rawValue);
//   // // console.log("generateAliasReference | valueObject: ", valueObject);
//   //
//   // const isValidObject = isObjectWithValidation(valueObject);
//   // if(!isValidObject) return null;
//   // const pathMinusKey = valueObject.attributes?.path?.slice(0, -1);
//   // const alias = `${valueObject.attributes?.path?.join(".")}`;
//   // // if(alias.includes(".5")) {
//   // //   console.log("alias includes .5",{ alias, valueObject, key, rawValue, prefix, path: valueObject.attributes?.path, pathMinusKey, type, description });
//   // //   // console.log("generateAliasReference | alias.includes('.5') | alias: ", alias);
//   // // }
//   // // console.log("generateAliasReference | valueFormatter args: ", JSON.stringify({ ...args }, null, 2));
//   // return `{spacing.${alias}}`;
//   return args.rawValue;
// };


// const generateTestScaleFromFullScaleSet = (scale, range=[0,-1]) => {
//   return Object.fromEntries(Object.entries(scale).slice(range[0], range[1]));
// }
// // console.log("coreSpacingTokens.spacing.length: ", Object.keys(coreSpacingTokens.spacing).length, coreSpacingTokens.spacing);
// const testScale = generateTestScaleFromFullScaleSet(coreSpacingTokens, [0, 5]);
// export const marginTokens = buildTokensFromScale({type: "margin", description: "tokens to apply standard margins to layout components", scale: testScale, prefix: "margin", valueFormatter: generateAliasReference});
// const marginTokensKeys = [];
// for(const key of getAllKeys(marginTokens)) {
//   marginTokensKeys.push(key);
// }


// console.log("marginTokensKeys: ", marginTokensKeys);
// console.log("generateAliasReference | marginTokens: ", marginTokens);
// console.log("generateAliasReference | marginTokens: ", JSON.stringify(marginTokens, null, 4));
// console.log("coreSpacingTokens: ", coreSpacingTokens);
// console.log("generateAliasReference | logs: ", logs);
// module.exports = marginTokens;
//
