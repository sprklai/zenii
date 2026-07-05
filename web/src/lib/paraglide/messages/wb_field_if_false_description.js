/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_If_False_DescriptionInputs */

const en_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step to execute when the expression evaluates to false`)
};

const zh_cn2_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表达式为假时执行的步骤`)
};

const es_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paso a ejecutar cuando la expresión se evalúa como falsa`)
};

const ja_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`式が偽と評価されたときに実行するステップ`)
};

const hi_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक्सप्रेशन असत्य होने पर निष्पादित होने वाला चरण`)
};

const pt_br2_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo a executar quando a expressão for avaliada como falsa`)
};

const ko_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`식이 거짓으로 평가될 때 실행할 단계`)
};

const fr_wb_field_if_false_description = /** @type {(inputs: Wb_Field_If_False_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape à exécuter lorsque l'expression est fausse`)
};

/**
* | output |
* | --- |
* | "Step to execute when the expression evaluates to false" |
*
* @param {Wb_Field_If_False_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_if_false_description = /** @type {((inputs?: Wb_Field_If_False_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_If_False_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_if_false_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_if_false_description(inputs)
	if (locale === "es") return es_wb_field_if_false_description(inputs)
	if (locale === "ja") return ja_wb_field_if_false_description(inputs)
	if (locale === "hi") return hi_wb_field_if_false_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_if_false_description(inputs)
	if (locale === "ko") return ko_wb_field_if_false_description(inputs)
	return fr_wb_field_if_false_description(inputs)
});