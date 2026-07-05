/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Wiki_Question_DescriptionInputs */

const en_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natural-language question (for query action)`)
};

const zh_cn2_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自然语言问题（用于查询操作）`)
};

const es_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pregunta en lenguaje natural (para acción de consulta)`)
};

const ja_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自然言語の質問（クエリアクション用）`)
};

const hi_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्राकृतिक भाषा प्रश्न (क्वेरी क्रिया के लिए)`)
};

const pt_br2_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pergunta em linguagem natural (para ação de consulta)`)
};

const ko_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`자연어 질문 (쿼리 작업용)`)
};

const fr_wb_field_wiki_question_description = /** @type {(inputs: Wb_Field_Wiki_Question_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Question en langage naturel (pour l'action de requête)`)
};

/**
* | output |
* | --- |
* | "Natural-language question (for query action)" |
*
* @param {Wb_Field_Wiki_Question_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_wiki_question_description = /** @type {((inputs?: Wb_Field_Wiki_Question_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Wiki_Question_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_wiki_question_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_wiki_question_description(inputs)
	if (locale === "es") return es_wb_field_wiki_question_description(inputs)
	if (locale === "ja") return ja_wb_field_wiki_question_description(inputs)
	if (locale === "hi") return hi_wb_field_wiki_question_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_wiki_question_description(inputs)
	if (locale === "ko") return ko_wb_field_wiki_question_description(inputs)
	return fr_wb_field_wiki_question_description(inputs)
});