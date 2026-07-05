/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ "{steps.X.output": NonNullable<unknown> }} Wb_Field_Prompt_DescriptionInputs */

const en_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prompt text sent to the model. Use ${i?.["{steps.X.output"]}} for step references.`)
};

const zh_cn2_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`发送给模型的提示文本。使用 ${i?.["{steps.X.output"]}} 引用步骤结果。`)
};

const es_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texto del prompt enviado al modelo. Usa ${i?.["{steps.X.output"]}} para referencias a pasos.`)
};

const ja_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`モデルに送信するプロンプトテキスト。ステップ参照には ${i?.["{steps.X.output"]}} を使用してください。`)
};

const hi_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`मॉडल को भेजा गया प्रॉम्प्ट टेक्स्ट। चरण संदर्भों के लिए ${i?.["{steps.X.output"]}} उपयोग करें।`)
};

const pt_br2_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texto do prompt enviado ao modelo. Use ${i?.["{steps.X.output"]}} para referências a passos.`)
};

const ko_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`모델에 전송하는 프롬프트 텍스트. 단계 참조에는 ${i?.["{steps.X.output"]}}을 사용하세요.`)
};

const fr_wb_field_prompt_description = /** @type {(inputs: Wb_Field_Prompt_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texte d'invite envoyé au modèle. Utilisez ${i?.["{steps.X.output"]}} pour référencer des étapes.`)
};

/**
* | output |
* | --- |
* | "Prompt text sent to the model. Use {{steps.X.output}} for step references." |
*
* @param {Wb_Field_Prompt_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_prompt_description = /** @type {((inputs: Wb_Field_Prompt_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Prompt_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_prompt_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_prompt_description(inputs)
	if (locale === "es") return es_wb_field_prompt_description(inputs)
	if (locale === "ja") return ja_wb_field_prompt_description(inputs)
	if (locale === "hi") return hi_wb_field_prompt_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_prompt_description(inputs)
	if (locale === "ko") return ko_wb_field_prompt_description(inputs)
	return fr_wb_field_prompt_description(inputs)
});