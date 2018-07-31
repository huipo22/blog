class Node:
    '''
    data:节点数据
    _next:下一个节点对象
    '''

    def __init__(self, data, pnext=None):
        self.data = data
        self._next = pnext

    def __repr__(self):
        '''
        输出data
        '''
        return str(self.data)


class ChainTable(object):
    def __init__(self):
        '''
            链表头：head
            链表长度：length
        '''
        self.head = None
        self.length = 0

    def isEmpty(self):
        return (self.length == 0)

    def append(self, dataOrNode):
        item = None
        if isinstance(dataOrNode, Node):
            item = dataOrNode
        else:
            '''
            新建Node节点
            '''
            item = Node(dataOrNode)

        if not self.head:
            self.head = item
            self.length += 1
        else:
            node = self.head
            while node._next:
                node = node._next
            node._next = item
            self.length += 1

    def delete(self, index):
        if self.isEmpty():
            print('链表是空的')
            return
        if index < 0 or index >= self.length:
            print('超出索引')
            return
        if index == 0:
            '''
            一个元素
            '''
            self.head = self.head._next
            self.length -= 1
            return
        '''
        prev为保存前导节点
        node为保存当前节点
        当j与index相等时就
        相当于找到要删除的节点
        '''
        j = 0
        node = self.head
        prev = self.head
        while node._next and j < index:
            prev = node
            node = node._next
            j += 1
        if j == index:
            prev._next = node._next
            self.length -= 1

    def update(self, index, data):
        if self.isEmpty() or index < 0 or index >= self.length:
            print('超出索引')
            return
        j = 0
        node = self.head
        while node._next and j < index:
            node = node._next
            j += 1
        if j == index:
            node.data = data

    def getItem(self, index):
        '''
        查找一个节点
        '''
        if self.isEmpty() or index < 0 or index >= self.length:
            print('超出索引')
            return
        j = 0
        node = self.head
        while node._next and j < index:
            node = node._next
            j += 1
        return node.data

    def getIndex(self, data):
        '''
        获取索引
        '''
        if self.isEmpty():
            print('链表是空的')
            return
        j = 0
        # 新建一个节点node 保存 首节点
        node = self.head
        while node:
            if node.data == data:
                return j
            # 新节点node 位置后移
            node = node._next
            j += 1
        if j == self.length:
            print('%s not found' % str(data))
            return

    def insert(self, index, dataOrNode):
        if self.isEmpty() or index < 0 or index >= self.length:
            print('超出索引')
            return

        # 新建一个空节点 item
        item = None
        if isinstance(dataOrNode, Node):
            item = dataOrNode
        else:
            item = Node(dataOrNode)

        if index == 0:
            #  head 变成item, item变成head
            item._next = self.head
            self.head = item
            self.length += 1
            return

        j = 0
        node = self.head
        prev = self.head
        while node._next and j < index:
            prev = node
            node = node._next
            j += 1
        if j == index:
            # prev._next=item,item._next=node
            item._next = node
            prev._next = item
            self.length += 1

    def clear(self):
        self.head = None
        self.length = 0
