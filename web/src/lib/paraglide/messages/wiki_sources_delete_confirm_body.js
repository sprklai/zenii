/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filename: NonNullable<unknown> }} Wiki_Sources_Delete_Confirm_BodyInputs */

const en_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All wiki pages derived exclusively from "${i?.filename}" will be deleted. Pages shared with other sources will be rebuilt.`)
};

const zh_cn2_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`所有仅从 "${i?.filename}" 生成的维基页面将被删除。与其他来源共享的页面将被重建。`)
};

const es_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todas las páginas wiki derivadas exclusivamente de "${i?.filename}" serán eliminadas. Las páginas compartidas con otras fuentes se reconstruirán.`)
};

const ja_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}"のみから生成されたすべてのウィキページが削除されます。他のソースと共有されているページは再構築されます。`)
};

const hi_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}" से विशेष रूप से प्राप्त सभी विकि पृष्ठ हटा दिए जाएंगे। अन्य स्रोतों से साझा पृष्ठ पुनर्निर्मित होंगे।`)
};

const pt_br2_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todas as páginas wiki derivadas exclusivamente de "${i?.filename}" serão excluídas. Páginas compartilhadas com outras fontes serão reconstruídas.`)
};

const ko_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}"에서만 생성된 모든 위키 페이지가 삭제됩니다. 다른 소스와 공유된 페이지는 재구성됩니다.`)
};

const fr_wiki_sources_delete_confirm_body = /** @type {(inputs: Wiki_Sources_Delete_Confirm_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toutes les pages wiki dérivées exclusivement de "${i?.filename}" seront supprimées. Les pages partagées avec d'autres sources seront reconstruites.`)
};

/**
* | output |
* | --- |
* | "All wiki pages derived exclusively from \"{filename}\" will be deleted. Pages shared with other sources will be rebuilt." |
*
* @param {Wiki_Sources_Delete_Confirm_BodyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_confirm_body = /** @type {((inputs: Wiki_Sources_Delete_Confirm_BodyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_Confirm_BodyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_confirm_body(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_confirm_body(inputs)
	if (locale === "es") return es_wiki_sources_delete_confirm_body(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_confirm_body(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_confirm_body(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_confirm_body(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_confirm_body(inputs)
	return fr_wiki_sources_delete_confirm_body(inputs)
});