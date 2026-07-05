/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Name_LabelInputs */

const en_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step Name`)
};

const zh_cn2_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`步骤名称`)
};

const es_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del paso`)
};

const ja_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップ名`)
};

const hi_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चरण का नाम`)
};

const pt_br2_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do Passo`)
};

const ko_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`단계 이름`)
};

const fr_wb_config_name_label = /** @type {(inputs: Wb_Config_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom de l'étape`)
};

/**
* | output |
* | --- |
* | "Step Name" |
*
* @param {Wb_Config_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_name_label = /** @type {((inputs?: Wb_Config_Name_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Name_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_name_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_name_label(inputs)
	if (locale === "es") return es_wb_config_name_label(inputs)
	if (locale === "ja") return ja_wb_config_name_label(inputs)
	if (locale === "hi") return hi_wb_config_name_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_name_label(inputs)
	if (locale === "ko") return ko_wb_config_name_label(inputs)
	return fr_wb_config_name_label(inputs)
});