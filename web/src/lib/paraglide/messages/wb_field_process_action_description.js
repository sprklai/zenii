/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Process_Action_DescriptionInputs */

const en_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action to perform on processes`)
};

const zh_cn2_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对进程执行的操作`)
};

const es_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acción a realizar sobre los procesos`)
};

const ja_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロセスに対して実行するアクション`)
};

const hi_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रक्रियाओं पर की जाने वाली क्रिया`)
};

const pt_br2_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ação a realizar nos processos`)
};

const ko_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로세스에 대해 수행할 액션`)
};

const fr_wb_field_process_action_description = /** @type {(inputs: Wb_Field_Process_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action à effectuer sur les processus`)
};

/**
* | output |
* | --- |
* | "Action to perform on processes" |
*
* @param {Wb_Field_Process_Action_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_process_action_description = /** @type {((inputs?: Wb_Field_Process_Action_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Process_Action_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_process_action_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_process_action_description(inputs)
	if (locale === "es") return es_wb_field_process_action_description(inputs)
	if (locale === "ja") return ja_wb_field_process_action_description(inputs)
	if (locale === "hi") return hi_wb_field_process_action_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_process_action_description(inputs)
	if (locale === "ko") return ko_wb_field_process_action_description(inputs)
	return fr_wb_field_process_action_description(inputs)
});