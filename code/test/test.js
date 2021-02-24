/**
 * @file 维护接口url常量
 * @author  fangsimin
 * @date    2019-01-02 11:12:14
 * @last Modified by    fangsimin
 * @last Modified time  2019-01-17 21:18:38
 */
import msnAPi from './msn';
import mediaApi from './media';

const env = process.env;
export default new Proxy(
    {
        login: 'login',
        auth: 'auth',
        listRule: 'listrule', // 简单规则
        addRule: 'addrule', // 简单规则 - 添加
        deleteRule: 'deleterule', // 简单规则 - 删除
        ...msnAPi,
        ...mediaApi
    }, {

        /**
         * 代理每个api路径获取都加上root_api
         * @param  {Object} target 原对象
         * @param  {string} name 要获取的键值
         * @return {string}
         */
        get: (target, name) => {
            return target[name]
                ? env['ROOT_API'] + '/' + target[name]
                : '';
        }
    }
);
