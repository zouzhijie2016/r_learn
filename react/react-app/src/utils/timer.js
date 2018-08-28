// 月份的英文缩写
const MONTH = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

export function getCurrentDate() {
    const current = new Date();

    return {
        year: current.getFullYear(),
        month: MONTH[current.getMonth()],
        day: current.getDate() < 10 ? '0' + current.getDate() : current.getDate()
    }
}