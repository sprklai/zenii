/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_GeneratingInputs */

const en_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating...`)
};

const zh_cn2_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成中...`)
};

const es_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generando...`)
};

const ja_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成中...`)
};

const hi_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बना रहे हैं...`)
};

const pt_br2_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerando...`)
};

const ko_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`생성 중...`)
};

const fr_workflow_generating = /** @type {(inputs: Workflow_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Génération en cours...`)
};

/**
* | output |
* | --- |
* | "Generating..." |
*
* @param {Workflow_GeneratingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_generating = /** @type {((inputs?: Workflow_GeneratingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_GeneratingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_generating(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_generating(inputs)
	if (locale === "es") return es_workflow_generating(inputs)
	if (locale === "ja") return ja_workflow_generating(inputs)
	if (locale === "hi") return hi_workflow_generating(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_generating(inputs)
	if (locale === "ko") return ko_workflow_generating(inputs)
	return fr_workflow_generating(inputs)
});