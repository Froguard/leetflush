/**
 * 全局通用类型声明：
 */
declare global {
  //
  // 二叉树
  interface TreeNode<T = any> {
    val: T;
    left?: TreeNode | null; // 左子树节点
    right?: TreeNode | null; // 右子树节点
  }
  // 链表(兼容单双链表)
  interface ListNode<T = any> {
    val: T;
    prev?: ListNode | null; // 上一个节点指针
    next?: ListNode | null; // 下一个节点指针
  }
}

// 这句话不可少（作用是让 ts 识别其为一个模块），必须的，否则会导致所有类型均变成 any
export {};
