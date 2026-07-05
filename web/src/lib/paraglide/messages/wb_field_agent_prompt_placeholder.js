/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ "{steps.X.output": NonNullable<unknown> }} Wb_Field_Agent_Prompt_PlaceholderInputs */

const en_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enter agent prompt (supports ${i?.["{steps.X.output"]}})`)
};

const zh_cn2_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`输入智能体提示（支持 ${i?.["{steps.X.output"]}}）`)
};

const es_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Introduce el prompt del agente (admite ${i?.["{steps.X.output"]}})`)
};

const ja_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`エージェントプロンプトを入力（${i?.["{steps.X.output"]}} に対応）`)
};

const hi_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`एजेंट प्रॉम्प्ट दर्ज करें (${i?.["{steps.X.output"]}} समर्थित है)`)
};

const pt_br2_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insira o prompt do agente (suporta ${i?.["{steps.X.output"]}})`)
};

const ko_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`에이전트 프롬프트 입력（${i?.["{steps.X.output"]}} 지원）`)
};

const fr_wb_field_agent_prompt_placeholder = /** @type {(inputs: Wb_Field_Agent_Prompt_PlaceholderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saisir l'invite de l'agent (supporte ${i?.["{steps.X.output"]}})`)
};

/**
* | output |
* | --- |
* | "Enter agent prompt (supports {{steps.X.output}})" |
*
* @param {Wb_Field_Agent_Prompt_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_agent_prompt_placeholder = /** @type {((inputs: Wb_Field_Agent_Prompt_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Agent_Prompt_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "es") return es_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_agent_prompt_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_agent_prompt_placeholder(inputs)
	return fr_wb_field_agent_prompt_placeholder(inputs)
});