import { ftDataState, TreeDataState } from './type'

/**
 * @description 将树形数据结构转换为扁平数据结构
 * @param data 初始树形数据数组
 * @param _params 自定义参数对象，用于替换初始数据中 key、title、children 字段为树组件中对应的字段，并可自定义添加需要返回的字段
 * @param _level 当前层级级别，默认为 1
 * @param parentIds 当前层级父节点 ID 集合，用于设置子节点的 `pid`，默认为空数组
 * @param treeData 递归过程中逐步构建的扁平化数据结果，默认为空数组
 * @returns 扁平化后的树形数据数组（类型为 `TreeDataState[]`）
 */
export function formatFlatTree(
    data: Array<any>,
    _params: any = {},
    _level = 1,
    parentIds: string[] = [],
    treeData: TreeDataState[] = []
): TreeDataState[] {
    // 如果数据为空，直接返回已构建的扁平化结果
    if (!data.length) {
        return treeData
    }

    // 定义内部变量
    const list: TreeDataState[] = []
    const param = {
        id: _params.id || 'key', // 当前层级数据的唯一标识字段
        title: _params.title || 'title', // 当前层级数据的标题字段
        children: _params.children || 'children', // 子节点数据字段
        other: _params.other || [] // 自定义需要返回的额外字段
    }
    const pIds: string[] = []
    const obj: any = {}

    // 遍历当前层级数据
    for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const key = node[param.id]
        const child = node[param.children] || []

        // 处理自定义额外字段
        if (param.other.length) {
            param.other.forEach((element: string) => {
                obj[element] = node[element]
            })
        }

        // 构建当前层级扁平化节点数据
        treeData.push({
            key: key,
            title: node[param.title],
            pid: parentIds[i] || '0', // 设置父节点 ID
            level: _level, // 设置当前层级级别
            ...obj // 合并自定义额外字段
        })

        // 收集子节点数据
        list.push(...child)
        pIds.push(...new Array(child.length).fill(key)) // 为子节点生成父节点 ID 集合
    }

    // 递归处理下一层级数据
    return formatFlatTree(list, param, _level + 1, pIds, treeData)
}

/**
 * @description 将扁平数据结构转换为树形数据结构
 * @param list 扁平化后的树形数据数组（类型为 `TreeDataState`）
 * @returns 转换后的树形数据数组（类型为 `ftDataState[]`）
 */
export function formatTree(list: TreeDataState) {
    // 使用深拷贝防止修改原数据
    const data = JSON.parse(JSON.stringify(list))

    // 定义辅助对象，用于快速查找节点
    const obj: any = {}
    const trees: ftDataState[] = []

    // 遍历扁平化数据，初始化节点信息并存入辅助对象
    data.forEach((item: TreeDataState) => {
        item.children = []
        obj[item.key] = item
    })

    // 遍历扁平化数据，根据 `pid` 将节点添加到其父节点的 `children` 数组中
    data.forEach((item: TreeDataState) => {
        const parent = obj[item.pid]

        if (parent) {
            ;(parent.children || (parent.children = [])).push(item)
        } else {
            trees.push(item) // 没有父节点的项作为根节点添加到结果数组
        }
    })

    // 返回构建完成的树形数据数组
    return trees
}
