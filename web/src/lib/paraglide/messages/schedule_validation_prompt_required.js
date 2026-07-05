/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Prompt_RequiredInputs */

const en_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt is required for agent turn`)
};

const zh_cn2_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理轮次的提示词为必填项`)
};

const es_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El prompt es obligatorio para el turno de agente`)
};

const ja_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントターンにはプロンプトが必要です`)
};

const hi_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट टर्न के लिए प्रॉम्प्ट आवश्यक है`)
};

const pt_br2_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt é obrigatório para turno do agente`)
};

const ko_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 턴에는 프롬프트가 필요합니다`)
};

const fr_schedule_validation_prompt_required = /** @type {(inputs: Schedule_Validation_Prompt_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le prompt est requis pour le tour de l'agent`)
};

/**
* | output |
* | --- |
* | "Prompt is required for agent turn" |
*
* @param {Schedule_Validation_Prompt_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_prompt_required = /** @type {((inputs?: Schedule_Validation_Prompt_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Prompt_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_prompt_required(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_prompt_required(inputs)
	if (locale === "es") return es_schedule_validation_prompt_required(inputs)
	if (locale === "ja") return ja_schedule_validation_prompt_required(inputs)
	if (locale === "hi") return hi_schedule_validation_prompt_required(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_prompt_required(inputs)
	if (locale === "ko") return ko_schedule_validation_prompt_required(inputs)
	return fr_schedule_validation_prompt_required(inputs)
});