/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Create_Mode_DescribeInputs */

const en_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe`)
};

const zh_cn2_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const es_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describir`)
};

const ja_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明する`)
};

const hi_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्णन करें`)
};

const pt_br2_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrever`)
};

const ko_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설명`)
};

const fr_workflow_create_mode_describe = /** @type {(inputs: Workflow_Create_Mode_DescribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décrire`)
};

/**
* | output |
* | --- |
* | "Describe" |
*
* @param {Workflow_Create_Mode_DescribeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_create_mode_describe = /** @type {((inputs?: Workflow_Create_Mode_DescribeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Create_Mode_DescribeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_create_mode_describe(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_create_mode_describe(inputs)
	if (locale === "es") return es_workflow_create_mode_describe(inputs)
	if (locale === "ja") return ja_workflow_create_mode_describe(inputs)
	if (locale === "hi") return hi_workflow_create_mode_describe(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_create_mode_describe(inputs)
	if (locale === "ko") return ko_workflow_create_mode_describe(inputs)
	return fr_workflow_create_mode_describe(inputs)
});