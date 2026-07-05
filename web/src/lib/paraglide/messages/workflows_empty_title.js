/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Empty_TitleInputs */

const en_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No workflows`)
};

const zh_cn2_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无工作流`)
};

const es_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay flujos de trabajo`)
};

const ja_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローなし`)
};

const hi_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई वर्कफ़्लो नहीं`)
};

const pt_br2_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum workflow`)
};

const ko_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 없음`)
};

const fr_workflows_empty_title = /** @type {(inputs: Workflows_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun flux de travail`)
};

/**
* | output |
* | --- |
* | "No workflows" |
*
* @param {Workflows_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_empty_title = /** @type {((inputs?: Workflows_Empty_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Empty_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_empty_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_empty_title(inputs)
	if (locale === "es") return es_workflows_empty_title(inputs)
	if (locale === "ja") return ja_workflows_empty_title(inputs)
	if (locale === "hi") return hi_workflows_empty_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_empty_title(inputs)
	if (locale === "ko") return ko_workflows_empty_title(inputs)
	return fr_workflows_empty_title(inputs)
});