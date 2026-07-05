/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Unsaved_Confirm_DescInputs */

const en_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes. Are you sure you want to leave?`)
};

const zh_cn2_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您有未保存的更改。确定要离开吗？`)
};

const es_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes cambios sin guardar. ¿Seguro que quieres salir?`)
};

const ja_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります。本当に離れますか？`)
};

const hi_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपके पास असहेजे परिवर्तन हैं। क्या आप वाकई छोड़ना चाहते हैं?`)
};

const pt_br2_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem alterações não salvas. Tem certeza que deseja sair?`)
};

const ko_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장되지 않은 변경 사항이 있습니다. 정말 떠나시겠습니까?`)
};

const fr_wb_unsaved_confirm_desc = /** @type {(inputs: Wb_Unsaved_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez des modifications non enregistrées. Voulez-vous vraiment quitter ?`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes. Are you sure you want to leave?" |
*
* @param {Wb_Unsaved_Confirm_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_unsaved_confirm_desc = /** @type {((inputs?: Wb_Unsaved_Confirm_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Unsaved_Confirm_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_unsaved_confirm_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_unsaved_confirm_desc(inputs)
	if (locale === "es") return es_wb_unsaved_confirm_desc(inputs)
	if (locale === "ja") return ja_wb_unsaved_confirm_desc(inputs)
	if (locale === "hi") return hi_wb_unsaved_confirm_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_unsaved_confirm_desc(inputs)
	if (locale === "ko") return ko_wb_unsaved_confirm_desc(inputs)
	return fr_wb_unsaved_confirm_desc(inputs)
});