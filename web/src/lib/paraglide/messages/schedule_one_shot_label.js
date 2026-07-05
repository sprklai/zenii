/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_One_Shot_LabelInputs */

const en_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-shot (delete after run)`)
};

const zh_cn2_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一次性（执行后删除）`)
};

const es_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una vez (eliminar después de ejecutar)`)
};

const ja_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一回限り（実行後に削除）`)
};

const hi_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक बार (चलने के बाद हटाएँ)`)
};

const pt_br2_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Única vez (excluir após execução)`)
};

const ko_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일회성 (실행 후 삭제)`)
};

const fr_schedule_one_shot_label = /** @type {(inputs: Schedule_One_Shot_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponctuel (supprimer après exécution)`)
};

/**
* | output |
* | --- |
* | "One-shot (delete after run)" |
*
* @param {Schedule_One_Shot_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_one_shot_label = /** @type {((inputs?: Schedule_One_Shot_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_One_Shot_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_one_shot_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_one_shot_label(inputs)
	if (locale === "es") return es_schedule_one_shot_label(inputs)
	if (locale === "ja") return ja_schedule_one_shot_label(inputs)
	if (locale === "hi") return hi_schedule_one_shot_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_one_shot_label(inputs)
	if (locale === "ko") return ko_schedule_one_shot_label(inputs)
	return fr_schedule_one_shot_label(inputs)
});