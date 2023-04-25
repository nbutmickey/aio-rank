export interface dataItem {
    token: string;
}

const Searcher = (() => {
    // eslint-disable-next-line no-useless-escape
    const escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    const escapeReg = (reg: string) => reg.replace(escapeRegExp, '\\$&');
    // groupLeft 与 groupRight是对结果进一步处理所使用的分割符，可以修改
    const groupLeft = '(';
    const groupRight = ')';
    const groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');
    // 从str中找到最大的匹配长度
    const findMax = (str: dataItem, keyword: string) => {
        let max = 0;
        keyword = groupLeft + keyword + groupRight;
        str.token.replace(groupExtractReg, m => {
            // keyword完整的出现在str中，则优秀级最高，排前面
            if (keyword === m) {
                max = Number.MAX_SAFE_INTEGER;
            } else if (m.length > max) {// 找最大长度
                max = m.length;
            }
            return m;
        });
        return max;
    };
    const keyReg = (key: string) => {
        const src = ['(.*?)('];
        const ks = key.split('');
        if (ks.length) {
            while (ks.length) {
                src.push(escapeReg(ks.shift() || ''), ')(.*?)(');
            }
            src.pop();
        }
        src.push(')(.*?)');
        const str = src.join('');
        const reg = new RegExp(str, 'i');
        const replacer = [];
        let start = key.length;
        let begin = 1;
        while (start > 0) {
            start--;
            replacer.push('$', begin, groupLeft + '$', begin + 1, groupRight);
            begin += 2;
        }
        replacer.push('$', begin);

        const info = {
            regexp: reg,
            replacement: replacer.join(''),
        };
        return info;
    };

    return {
        search(list: dataItem[], keyword: string) {
            // 生成搜索正则
            const kr = keyReg(keyword);
            let result = [];
            for (const e of list) {
                // 如果匹配
                if (kr.regexp.test(e.token)) {
                    // 把结果放入result数组中
                    result.push(e);
                }
            }
            // 对搜索结果进行排序
            // 1. 匹配关键字大小写一致的优先级最高，比如搜索up, 结果中的[user-page,beginUpdate,update,endUpdate]，update要排在最前面，因为大小写匹配
            // 2. 匹配关键字长的排在前面
            result = result.sort((a, b) => findMax(b, keyword) - findMax(a, keyword));
            return result;
        },
    };
})();

export default function fuzzySearch(query: string, items: dataItem[]) {

    return Searcher.search(items, query);
}
