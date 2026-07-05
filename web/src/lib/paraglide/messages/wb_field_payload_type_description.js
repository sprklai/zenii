/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Payload_Type_DescriptionInputs */

const en_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The type of action the job will execute`)
};

const zh_cn2_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务将执行的操作类型`)
};

const es_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El tipo de acción que ejecutará la tarea`)
};

const ja_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブが実行するアクションのタイプ`)
};

const hi_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जॉब द्वारा निष्पादित की जाने वाली क्रिया का प्रकार`)
};

const pt_br2_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tipo de ação que a tarefa executará`)
};

const ko_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업이 실행할 액션 유형`)
};

const fr_wb_field_payload_type_description = /** @type {(inputs: Wb_Field_Payload_Type_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le type d'action que la tâche exécutera`)
};

/**
* | output |
* | --- |
* | "The type of action the job will execute" |
*
* @param {Wb_Field_Payload_Type_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_payload_type_description = /** @type {((inputs?: Wb_Field_Payload_Type_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Payload_Type_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_payload_type_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_payload_type_description(inputs)
	if (locale === "es") return es_wb_field_payload_type_description(inputs)
	if (locale === "ja") return ja_wb_field_payload_type_description(inputs)
	if (locale === "hi") return hi_wb_field_payload_type_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_payload_type_description(inputs)
	if (locale === "ko") return ko_wb_field_payload_type_description(inputs)
	return fr_wb_field_payload_type_description(inputs)
});