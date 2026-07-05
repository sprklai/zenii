/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Regenerate_Confirm_BodyInputs */

const en_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This re-runs the LLM over all sources using the current INGEST_PROMPT.md. User-saved query pages are preserved. This may take several minutes.`)
};

const zh_cn2_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将使用当前的 INGEST_PROMPT.md 对所有来源重新运行 LLM。用户保存的查询页面将被保留。这可能需要几分钟。`)
};

const es_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto vuelve a ejecutar el LLM sobre todas las fuentes usando el INGEST_PROMPT.md actual. Las páginas de consulta guardadas por el usuario se conservan. Esto puede tardar varios minutos.`)
};

const ja_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のINGEST_PROMPT.mdを使用してすべてのソースに対してLLMを再実行します。ユーザーが保存したクエリページは保持されます。数分かかる場合があります。`)
};

const hi_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह वर्तमान INGEST_PROMPT.md का उपयोग करके सभी स्रोतों पर LLM फिर से चलाता है। उपयोगकर्ता द्वारा सहेजे गए प्रश्न पृष्ठ सुरक्षित रहेंगे। इसमें कई मिनट लग सकते हैं।`)
};

const pt_br2_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso re-executa o LLM em todas as fontes usando o INGEST_PROMPT.md atual. Páginas de consulta salvas pelo usuário são preservadas. Isso pode levar vários minutos.`)
};

const ko_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`현재 INGEST_PROMPT.md를 사용하여 모든 소스에 대해 LLM을 다시 실행합니다. 사용자가 저장한 쿼리 페이지는 보존됩니다. 몇 분이 걸릴 수 있습니다.`)
};

const fr_wiki_regenerate_confirm_body = /** @type {(inputs: Wiki_Regenerate_Confirm_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela réexécute le LLM sur toutes les sources en utilisant l'INGEST_PROMPT.md actuel. Les pages de requête enregistrées par l'utilisateur sont conservées. Cela peut prendre plusieurs minutes.`)
};

/**
* | output |
* | --- |
* | "This re-runs the LLM over all sources using the current INGEST_PROMPT.md. User-saved query pages are preserved. This may take several minutes." |
*
* @param {Wiki_Regenerate_Confirm_BodyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerate_confirm_body = /** @type {((inputs?: Wiki_Regenerate_Confirm_BodyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Regenerate_Confirm_BodyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerate_confirm_body(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerate_confirm_body(inputs)
	if (locale === "es") return es_wiki_regenerate_confirm_body(inputs)
	if (locale === "ja") return ja_wiki_regenerate_confirm_body(inputs)
	if (locale === "hi") return hi_wiki_regenerate_confirm_body(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerate_confirm_body(inputs)
	if (locale === "ko") return ko_wiki_regenerate_confirm_body(inputs)
	return fr_wiki_regenerate_confirm_body(inputs)
});