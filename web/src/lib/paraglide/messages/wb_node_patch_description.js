/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Patch_DescriptionInputs */

const en_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply a text replacement patch to a file`)
};

const zh_cn2_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对文件应用文本替换 patch`)
};

const es_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar un parche de reemplazo de texto a un archivo`)
};

const ja_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルにテキスト置換パッチを適用します`)
};

const hi_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल पर टेक्स्ट प्रतिस्थापन patch लागू करें`)
};

const pt_br2_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar um patch de substituição de texto em um arquivo`)
};

const ko_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일에 텍스트 교체 패치를 적용합니다`)
};

const fr_wb_node_patch_description = /** @type {(inputs: Wb_Node_Patch_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appliquer un correctif de remplacement textuel à un fichier`)
};

/**
* | output |
* | --- |
* | "Apply a text replacement patch to a file" |
*
* @param {Wb_Node_Patch_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_patch_description = /** @type {((inputs?: Wb_Node_Patch_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Patch_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_patch_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_patch_description(inputs)
	if (locale === "es") return es_wb_node_patch_description(inputs)
	if (locale === "ja") return ja_wb_node_patch_description(inputs)
	if (locale === "hi") return hi_wb_node_patch_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_patch_description(inputs)
	if (locale === "ko") return ko_wb_node_patch_description(inputs)
	return fr_wb_node_patch_description(inputs)
});