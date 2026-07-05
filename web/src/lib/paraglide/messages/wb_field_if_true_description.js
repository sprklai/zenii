/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_If_True_DescriptionInputs */

const en_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step to execute when the expression evaluates to true`)
};

const zh_cn2_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表达式为真时执行的步骤`)
};

const es_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paso a ejecutar cuando la expresión se evalúa como verdadera`)
};

const ja_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`式が真と評価されたときに実行するステップ`)
};

const hi_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक्सप्रेशन सत्य होने पर निष्पादित होने वाला चरण`)
};

const pt_br2_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo a executar quando a expressão for avaliada como verdadeira`)
};

const ko_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`식이 참으로 평가될 때 실행할 단계`)
};

const fr_wb_field_if_true_description = /** @type {(inputs: Wb_Field_If_True_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape à exécuter lorsque l'expression est vraie`)
};

/**
* | output |
* | --- |
* | "Step to execute when the expression evaluates to true" |
*
* @param {Wb_Field_If_True_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_if_true_description = /** @type {((inputs?: Wb_Field_If_True_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_If_True_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_if_true_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_if_true_description(inputs)
	if (locale === "es") return es_wb_field_if_true_description(inputs)
	if (locale === "ja") return ja_wb_field_if_true_description(inputs)
	if (locale === "hi") return hi_wb_field_if_true_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_if_true_description(inputs)
	if (locale === "ko") return ko_wb_field_if_true_description(inputs)
	return fr_wb_field_if_true_description(inputs)
});