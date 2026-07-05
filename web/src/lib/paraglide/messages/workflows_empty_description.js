/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Empty_DescriptionInputs */

const en_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a workflow to orchestrate multi-step tasks.`)
};

const zh_cn2_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建工作流以编排多步骤任务。`)
};

const es_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un flujo de trabajo para orquestar tareas de varios pasos.`)
};

const ja_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを作成してマルチステップタスクを編成しましょう。`)
};

const hi_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मल्टी-स्टेप कार्यों को ऑर्केस्ट्रेट करने के लिए एक वर्कफ़्लो बनाएँ।`)
};

const pt_br2_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um workflow para orquestrar tarefas em múltiplas etapas.`)
};

const ko_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다단계 작업을 조율하려면 워크플로를 생성하세요.`)
};

const fr_workflows_empty_description = /** @type {(inputs: Workflows_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un flux de travail pour orchestrer des tâches en plusieurs étapes.`)
};

/**
* | output |
* | --- |
* | "Create a workflow to orchestrate multi-step tasks." |
*
* @param {Workflows_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_empty_description = /** @type {((inputs?: Workflows_Empty_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Empty_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_empty_description(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_empty_description(inputs)
	if (locale === "es") return es_workflows_empty_description(inputs)
	if (locale === "ja") return ja_workflows_empty_description(inputs)
	if (locale === "hi") return hi_workflows_empty_description(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_empty_description(inputs)
	if (locale === "ko") return ko_workflows_empty_description(inputs)
	return fr_workflows_empty_description(inputs)
});