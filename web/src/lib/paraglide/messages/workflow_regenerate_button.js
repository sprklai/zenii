/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Regenerate_ButtonInputs */

const en_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerate`)
};

const zh_cn2_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成`)
};

const es_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar`)
};

const ja_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再生成`)
};

const hi_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनः बनाएं`)
};

const pt_br2_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar`)
};

const ko_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재생성`)
};

const fr_workflow_regenerate_button = /** @type {(inputs: Workflow_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régénérer`)
};

/**
* | output |
* | --- |
* | "Regenerate" |
*
* @param {Workflow_Regenerate_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_regenerate_button = /** @type {((inputs?: Workflow_Regenerate_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Regenerate_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_regenerate_button(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_regenerate_button(inputs)
	if (locale === "es") return es_workflow_regenerate_button(inputs)
	if (locale === "ja") return ja_workflow_regenerate_button(inputs)
	if (locale === "hi") return hi_workflow_regenerate_button(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_regenerate_button(inputs)
	if (locale === "ko") return ko_workflow_regenerate_button(inputs)
	return fr_workflow_regenerate_button(inputs)
});