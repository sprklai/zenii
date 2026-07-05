/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Forget_DescriptionInputs */

const en_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete an entry from agent memory by ID`)
};

const zh_cn2_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 ID 从智能体记忆中删除条目`)
};

const es_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar una entrada de la memoria del agente por ID`)
};

const ja_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID によってエージェントメモリからエントリを削除します`)
};

const hi_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID द्वारा एजेंट मेमोरी से प्रविष्टि हटाएँ`)
};

const pt_br2_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir uma entrada da memória do agente por ID`)
};

const ko_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID로 에이전트 메모리에서 항목을 삭제합니다`)
};

const fr_wb_node_memory_forget_description = /** @type {(inputs: Wb_Node_Memory_Forget_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer une entrée de la mémoire de l'agent par son ID`)
};

/**
* | output |
* | --- |
* | "Delete an entry from agent memory by ID" |
*
* @param {Wb_Node_Memory_Forget_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_forget_description = /** @type {((inputs?: Wb_Node_Memory_Forget_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Forget_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_forget_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_forget_description(inputs)
	if (locale === "es") return es_wb_node_memory_forget_description(inputs)
	if (locale === "ja") return ja_wb_node_memory_forget_description(inputs)
	if (locale === "hi") return hi_wb_node_memory_forget_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_forget_description(inputs)
	if (locale === "ko") return ko_wb_node_memory_forget_description(inputs)
	return fr_wb_node_memory_forget_description(inputs)
});