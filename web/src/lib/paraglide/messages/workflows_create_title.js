/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Create_TitleInputs */

const en_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Workflow`)
};

const zh_cn2_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建工作流`)
};

const es_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear flujo de trabajo`)
};

const ja_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを作成`)
};

const hi_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो बनाएँ`)
};

const pt_br2_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar Workflow`)
};

const ko_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 생성`)
};

const fr_workflows_create_title = /** @type {(inputs: Workflows_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un flux de travail`)
};

/**
* | output |
* | --- |
* | "Create Workflow" |
*
* @param {Workflows_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_create_title = /** @type {((inputs?: Workflows_Create_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Create_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_create_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_create_title(inputs)
	if (locale === "es") return es_workflows_create_title(inputs)
	if (locale === "ja") return ja_workflows_create_title(inputs)
	if (locale === "hi") return hi_workflows_create_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_create_title(inputs)
	if (locale === "ko") return ko_workflows_create_title(inputs)
	return fr_workflows_create_title(inputs)
});